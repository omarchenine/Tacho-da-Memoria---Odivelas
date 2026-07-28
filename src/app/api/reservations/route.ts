import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendCustomerConfirmation, sendRestaurantNotification } from "@/lib/email";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ReservationBody {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  requests?: string;
  language?: string;
}

// ─── Validation ───────────────────────────────────────────────────────────────

const VALID_TIMES = [
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00",
];

function validate(data: ReservationBody): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Name is required (minimum 2 characters).";
  }

  const cleanPhone = (data.phone || "").replace(/[\s\-+()]/g, "");
  if (!cleanPhone) {
    errors.phone = "Phone number is required.";
  } else if (!/^\d{9,15}$/.test(cleanPhone)) {
    errors.phone = "Please enter a valid phone number (9–15 digits).";
  }

  if (!data.email || !data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.date) {
    errors.date = "Date is required.";
  } else {
    const selected = new Date(data.date + "T12:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) {
      errors.date = "Reservation date cannot be in the past.";
    } else if (selected.getDay() === 1) {
      errors.date = "The restaurant is closed on Mondays.";
    }
  }

  if (!data.time) {
    errors.time = "Time is required.";
  } else if (!VALID_TIMES.includes(data.time)) {
    errors.time = "Please select a valid time slot.";
  }

  if (!data.guests) {
    errors.guests = "Number of guests is required.";
  } else if (parseInt(data.guests) < 1) {
    errors.guests = "Must have at least 1 guest.";
  }

  return errors;
}

// ─── GET – List all reservations ──────────────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    const hasDatabase = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.startsWith("file:");

    const { searchParams } = new URL(request.url);
    const dateFilter = searchParams.get("date");
    const statusFilter = searchParams.get("status");

    if (!hasDatabase) {
      return NextResponse.json({
        success: true,
        count: 0,
        reservations: [],
        note: "No cloud DATABASE_URL configured. Reservations are processed & emailed instantly.",
      });
    }

    const reservations = await prisma.reservation.findMany({
      where: {
        ...(dateFilter ? { date: dateFilter } : {}),
        ...(statusFilter ? { status: statusFilter } : {}),
      },
      orderBy: [{ date: "asc" }, { time: "asc" }],
    });

    return NextResponse.json({
      success: true,
      count: reservations.length,
      reservations,
    });
  } catch (err) {
    console.error("[GET /api/reservations]", err);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve reservations." },
      { status: 500 }
    );
  }
}

// ─── POST – Create a reservation ──────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ReservationBody;

    // 1. Validate input
    const errors = validate(body);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const hasDatabaseForWrites = !!process.env.DATABASE_URL && !process.env.DATABASE_URL.startsWith("file:");
    let reservation: any = null;

    if (!hasDatabaseForWrites) {
      // In-memory / lightweight reservation object
      reservation = {
        id: `RES-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
        name: body.name.trim(),
        phone: body.phone.trim(),
        email: body.email.trim().toLowerCase(),
        date: body.date,
        time: body.time,
        guests: body.guests,
        requests: body.requests?.trim() || "",
        language: body.language || "pt",
        status: "pending",
        createdAt: new Date().toISOString(),
      };
    } else {
      // 2. Duplicate check – 15 minute window for exact same email + date + time (prevents accidental double submits)
      const fifteenMinsAgo = new Date(Date.now() - 15 * 60 * 1000);
      const duplicate = await prisma.reservation.findFirst({
        where: {
          email: body.email.trim().toLowerCase(),
          date: body.date,
          time: body.time,
          status: { not: "cancelled" },
          createdAt: { gte: fifteenMinsAgo },
        },
      });

      if (duplicate) {
        return NextResponse.json(
          {
            success: false,
            errors: {
              duplicate:
                "A reservation with this email and time slot was already submitted recently. Please wait a few minutes or call us.",
            },
          },
          { status: 409 }
        );
      }

      // 3. Save to database
      reservation = await prisma.reservation.create({
        data: {
          name: body.name.trim(),
          phone: body.phone.trim(),
          email: body.email.trim().toLowerCase(),
          date: body.date,
          time: body.time,
          guests: body.guests,
          requests: body.requests?.trim() || "",
          language: body.language || "pt",
          status: "pending",
        },
      });
    }

    // 4. Send emails
    const emailData = {
      id: reservation.id,
      name: reservation.name,
      email: reservation.email,
      phone: reservation.phone,
      date: reservation.date,
      time: reservation.time,
      guests: reservation.guests,
      requests: reservation.requests,
      language: reservation.language,
    };

    const emailResults = await Promise.allSettled([
      sendCustomerConfirmation(emailData),
      sendRestaurantNotification(emailData),
    ]);

    emailResults.forEach((res, i) => {
      const recipient = i === 0 ? "Customer" : "Restaurant";
      if (res.status === "rejected") {
        console.error(`[POST /api/reservations] ${recipient} email error:`, res.reason);
      } else {
        console.log(`[POST /api/reservations] ${recipient} email sent successfully.`);
      }
    });

    // 5. Return success response
    return NextResponse.json(
      {
        success: true,
        reservation: {
          id: reservation.id,
          name: reservation.name,
          email: reservation.email,
          phone: reservation.phone,
          date: reservation.date,
          time: reservation.time,
          guests: reservation.guests,
          status: reservation.status,
          createdAt: reservation.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[POST /api/reservations]", err);
    return NextResponse.json(
      { success: false, error: "Failed to process your reservation. Please try again." },
      { status: 500 }
    );
  }
}

// ─── PATCH – Update status (confirm / cancel) ─────────────────────────────────

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json() as { id: string; status: "confirmed" | "cancelled" };

    if (!body.id || !["confirmed", "cancelled"].includes(body.status)) {
      return NextResponse.json(
        { success: false, error: "Invalid request. Provide id and status (confirmed|cancelled)." },
        { status: 400 }
      );
    }

    const updated = await prisma.reservation.update({
      where: { id: body.id },
      data: { status: body.status },
    });

    return NextResponse.json({ success: true, reservation: updated });
  } catch (err) {
    console.error("[PATCH /api/reservations]", err);
    return NextResponse.json(
      { success: false, error: "Reservation not found or update failed." },
      { status: 404 }
    );
  }
}
