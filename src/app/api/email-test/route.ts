import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const results: Record<string, any> = {
    timestamp: new Date().toISOString(),
    env: {
      BREVO_API_KEY: process.env.BREVO_API_KEY ? `✅ SET (${process.env.BREVO_API_KEY.substring(0, 12)}...)` : "❌ NOT SET",
      RESEND_API_KEY: process.env.RESEND_API_KEY ? `✅ SET (${process.env.RESEND_API_KEY.substring(0, 10)}...)` : "❌ NOT SET",
      SMTP_USER: process.env.SMTP_USER ? `✅ SET (${process.env.SMTP_USER})` : "❌ NOT SET",
      SMTP_PASS: process.env.SMTP_PASS ? "✅ SET" : "❌ NOT SET",
      RESTAURANT_EMAIL: process.env.RESTAURANT_EMAIL || "❌ NOT SET",
      DATABASE_URL: process.env.DATABASE_URL ? `✅ SET` : "❌ NOT SET",
    },
  };

  // Test Brevo API if key is set
  if (process.env.BREVO_API_KEY) {
    try {
      const senderEmail = process.env.SMTP_USER || "sifoomar7@gmail.com";
      const testTo = process.env.RESTAURANT_EMAIL || senderEmail;

      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: { name: "Tacho da Memória TEST", email: senderEmail },
          to: [{ email: testTo }],
          subject: "✅ Test Email – Brevo API Working on Vercel",
          htmlContent: `<h2 style="color:#8b3a2a">Tacho da Memória</h2><p>✅ Brevo email delivery is working correctly on Vercel!</p><p>Sent at: ${new Date().toISOString()}</p>`,
        }),
      });

      const data = await res.json();
      results.brevo = {
        status: res.status,
        ok: res.ok,
        response: data,
        sentTo: testTo,
      };
    } catch (err: any) {
      results.brevo = { error: err.message || String(err) };
    }
  } else {
    results.brevo = "SKIPPED – BREVO_API_KEY not set";
  }

  // Test Resend API if key is set
  if (process.env.RESEND_API_KEY) {
    try {
      const testTo = process.env.RESTAURANT_EMAIL || process.env.SMTP_USER || "sifoomar7@gmail.com";

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Tacho da Memória <onboarding@resend.dev>",
          to: [testTo],
          subject: "✅ Test Email – Resend API on Vercel",
          html: `<h2>Resend test from Vercel</h2><p>Sent at: ${new Date().toISOString()}</p>`,
        }),
      });

      const data = await res.json();
      results.resend = {
        status: res.status,
        ok: res.ok,
        response: data,
        sentTo: testTo,
      };
    } catch (err: any) {
      results.resend = { error: err.message || String(err) };
    }
  } else {
    results.resend = "SKIPPED – RESEND_API_KEY not set";
  }

  return NextResponse.json(results, {
    headers: { "Content-Type": "application/json" },
  });
}
