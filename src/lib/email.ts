import nodemailer from "nodemailer";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ReservationEmailData {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  requests: string;
  language: string;
}

// ─── Transporter ──────────────────────────────────────────────────────────────

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(dateStr: string, language: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  const locales: Record<string, string> = {
    pt: "pt-PT",
    en: "en-GB",
    es: "es-ES",
  };

  return date.toLocaleDateString(locales[language] || "pt-PT", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function guestsLabel(guests: string, language: string): string {
  const labels: Record<string, { one: string; many: string }> = {
    pt: { one: "pessoa", many: "pessoas" },
    en: { one: "guest", many: "guests" },
    es: { one: "persona", many: "personas" },
  };
  const l = labels[language] || labels.pt;
  return guests === "1" ? `1 ${l.one}` : `${guests} ${l.many}`;
}

// ─── HTML Email Template ───────────────────────────────────────────────────────

function buildCustomerEmailHTML(data: ReservationEmailData): string {
  const formattedDate = formatDate(data.date, data.language);
  const guestsStr = guestsLabel(data.guests, data.language);
  const siteUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const strings: Record<string, Record<string, string>> = {
    pt: {
      greeting: `Olá, ${data.name}!`,
      intro: "A sua reserva foi recebida com sucesso e está agora pré-confirmada. Abaixo encontra os detalhes do seu pedido.",
      bookingTitle: "Detalhes da Reserva",
      date: "Data",
      time: "Hora",
      guests: "Convidados",
      phone: "Telefone",
      bookingId: "Nº de Reserva",
      requestsTitle: "Pedidos Especiais",
      contactTitle: "Como chegar / Contacto",
      address: "Rua da Memória, 12, Odivelas",
      phone2: "+351 21 935 00 00",
      mapLink: "Ver no Google Maps",
      modifyText: "Caso necessite de alterar ou cancelar a sua reserva, contacte-nos por telefone ou e-mail com pelo menos 24 horas de antecedência.",
      hoursTitle: "Horário",
      hours: "Terça–Sábado: 12h00–15h00 / 19h00–22h30 | Domingo: 12h00–16h00 | Segunda: Encerrado",
      footer: "Com os nossos melhores cumprimentos,",
      team: "A Equipa do Tacho da Memória",
      unsubscribe: "Este e-mail foi enviado porque efetuou uma reserva no nosso restaurante.",
    },
    en: {
      greeting: `Hello, ${data.name}!`,
      intro: "Your reservation has been successfully received and is now pre-confirmed. Below you will find your booking details.",
      bookingTitle: "Booking Details",
      date: "Date",
      time: "Time",
      guests: "Guests",
      phone: "Phone",
      bookingId: "Booking ID",
      requestsTitle: "Special Requests",
      contactTitle: "How to get here / Contact",
      address: "Rua da Memória, 12, Odivelas",
      phone2: "+351 21 935 00 00",
      mapLink: "View on Google Maps",
      modifyText: "If you need to change or cancel your reservation, please contact us by phone or email at least 24 hours in advance.",
      hoursTitle: "Opening Hours",
      hours: "Tue–Sat: 12:00–15:00 / 19:00–22:30 | Sunday: 12:00–16:00 | Monday: Closed",
      footer: "With our warmest regards,",
      team: "The Tacho da Memória Team",
      unsubscribe: "This email was sent because you made a reservation at our restaurant.",
    },
    es: {
      greeting: `¡Hola, ${data.name}!`,
      intro: "Su reserva ha sido recibida con éxito y está ahora preconfirmada. A continuación encontrará los detalles de su solicitud.",
      bookingTitle: "Detalles de la Reserva",
      date: "Fecha",
      time: "Hora",
      guests: "Personas",
      phone: "Teléfono",
      bookingId: "Nº de Reserva",
      requestsTitle: "Peticiones Especiales",
      contactTitle: "Cómo llegar / Contacto",
      address: "Rua da Memória, 12, Odivelas",
      phone2: "+351 21 935 00 00",
      mapLink: "Ver en Google Maps",
      modifyText: "Si necesita modificar o cancelar su reserva, contáctenos por teléfono o correo electrónico con al menos 24 horas de antelación.",
      hoursTitle: "Horario",
      hours: "Mar–Sáb: 12:00–15:00 / 19:00–22:30 | Domingo: 12:00–16:00 | Lunes: Cerrado",
      footer: "Con nuestros mejores saludos,",
      team: "El Equipo de Tacho da Memória",
      unsubscribe: "Este correo fue enviado porque realizó una reserva en nuestro restaurante.",
    },
  };

  const s = strings[data.language] || strings.pt;

  return `<!DOCTYPE html>
<html lang="${data.language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tacho da Memória – ${s.bookingTitle}</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f0eb;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f0eb;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#8b3a2a 0%,#c0392b 50%,#8b3a2a 100%);padding:40px 32px;text-align:center;">
              <div style="font-family:Georgia,serif;font-size:11px;font-weight:600;letter-spacing:4px;text-transform:uppercase;color:#d4a843;margin-bottom:8px;">
                ✦ ODIVELAS, PORTUGAL ✦
              </div>
              <div style="font-family:Georgia,'Times New Roman',serif;font-size:32px;font-weight:700;color:#ffffff;letter-spacing:1px;line-height:1.2;">
                Tacho da Memória
              </div>
              <div style="width:40px;height:2px;background:#d4a843;margin:16px auto 0;"></div>
            </td>
          </tr>

          <!-- Success Banner -->
          <tr>
            <td style="background:#d4a843;padding:14px 32px;text-align:center;">
              <span style="font-family:Georgia,serif;font-size:14px;font-weight:600;color:#ffffff;letter-spacing:2px;text-transform:uppercase;">
                ✓ Reserva Confirmada
              </span>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <p style="font-family:Georgia,serif;font-size:22px;font-weight:700;color:#2c2c2c;margin:0 0 12px;">${s.greeting}</p>
              <p style="font-size:15px;color:#5a5a5a;line-height:1.7;margin:0 0 32px;">${s.intro}</p>

              <!-- Booking Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf7f4;border:1px solid #e8d5c0;border-radius:10px;overflow:hidden;margin-bottom:32px;">
                <tr>
                  <td style="padding:20px 24px;border-bottom:1px solid #e8d5c0;">
                    <p style="font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#8b3a2a;margin:0 0 4px;">${s.bookingId}</p>
                    <p style="font-family:Georgia,serif;font-size:17px;font-weight:700;color:#2c2c2c;margin:0;letter-spacing:1px;">${data.id}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:16px 24px;border-bottom:1px solid #e8d5c0;border-right:1px solid #e8d5c0;width:50%;">
                          <p style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#8b7355;margin:0 0 4px;">${s.date}</p>
                          <p style="font-size:14px;color:#2c2c2c;font-weight:600;margin:0;line-height:1.4;">${formattedDate}</p>
                        </td>
                        <td style="padding:16px 24px;border-bottom:1px solid #e8d5c0;width:50%;">
                          <p style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#8b7355;margin:0 0 4px;">${s.time}</p>
                          <p style="font-size:24px;font-family:Georgia,serif;color:#8b3a2a;font-weight:700;margin:0;">${data.time}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:16px 24px;border-right:1px solid #e8d5c0;width:50%;">
                          <p style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#8b7355;margin:0 0 4px;">${s.guests}</p>
                          <p style="font-size:14px;color:#2c2c2c;font-weight:600;margin:0;">👥 ${guestsStr}</p>
                        </td>
                        <td style="padding:16px 24px;width:50%;">
                          <p style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#8b7355;margin:0 0 4px;">${s.phone}</p>
                          <p style="font-size:14px;color:#2c2c2c;font-weight:600;margin:0;">📞 ${data.phone}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              ${
                data.requests
                  ? `<!-- Special Requests -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff8e8;border:1px solid #d4a843;border-left:4px solid #d4a843;border-radius:6px;margin-bottom:32px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#8b6914;margin:0 0 6px;">★ ${s.requestsTitle}</p>
                    <p style="font-size:14px;color:#5a4a1e;margin:0;line-height:1.6;">${data.requests}</p>
                  </td>
                </tr>
              </table>`
                  : ""
              }

              <!-- Contact Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf7f4;border:1px solid #e0d5c8;border-radius:10px;margin-bottom:32px;">
                <tr>
                  <td style="padding:20px 24px;border-bottom:1px solid #e0d5c8;">
                    <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#8b3a2a;margin:0 0 12px;">📍 ${s.contactTitle}</p>
                    <p style="font-size:14px;color:#3a3a3a;margin:0 0 6px;">🏠 ${s.address}</p>
                    <p style="font-size:14px;color:#3a3a3a;margin:0 0 12px;">📞 ${s.phone2}</p>
                    <a href="https://maps.google.com/?q=Odivelas+Portugal" style="display:inline-block;background:#8b3a2a;color:#ffffff;font-size:12px;font-weight:600;padding:8px 18px;border-radius:5px;text-decoration:none;letter-spacing:1px;">
                      🗺 ${s.mapLink}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 24px;">
                    <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#8b7355;margin:0 0 6px;">🕐 ${s.hoursTitle}</p>
                    <p style="font-size:13px;color:#5a5a5a;margin:0;line-height:1.6;">${s.hours}</p>
                  </td>
                </tr>
              </table>

              <!-- Modify Notice -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4ff;border-left:3px solid #4a6fa5;border-radius:4px;margin-bottom:8px;">
                <tr>
                  <td style="padding:14px 18px;">
                    <p style="font-size:13px;color:#3a4a6a;margin:0;line-height:1.6;">ℹ ${s.modifyText}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#2c2c2c;padding:28px 40px;text-align:center;">
              <p style="font-size:13px;color:#d4a843;font-family:Georgia,serif;margin:0 0 4px;">${s.footer}</p>
              <p style="font-size:15px;font-weight:700;color:#ffffff;font-family:Georgia,serif;margin:0 0 20px;">${s.team}</p>
              <div style="width:40px;height:1px;background:#d4a843;margin:0 auto 20px;"></div>
              <p style="font-size:11px;color:#888;margin:0;">
                ${s.unsubscribe}<br>
                <a href="${siteUrl}" style="color:#d4a843;text-decoration:none;">tachodamemoria.pt</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Staff Notification (plain HTML) ─────────────────────────────────────────

function buildStaffNotificationHTML(data: ReservationEmailData): string {
  const formattedDate = formatDate(data.date, data.language);
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Nova Reserva – Tacho da Memória</title></head>
<body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:30px;">
  <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.1);">
    <div style="background:#8b3a2a;padding:20px 28px;">
      <h1 style="color:#fff;font-size:20px;margin:0;">🔔 Nova Reserva Recebida</h1>
      <p style="color:#d4a843;font-size:12px;margin:6px 0 0;letter-spacing:2px;text-transform:uppercase;">Tacho da Memória</p>
    </div>
    <div style="padding:24px 28px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-size:13px;color:#888;width:120px;">Nº Reserva</td><td style="padding:8px 0;border-bottom:1px solid #eee;font-size:14px;font-weight:700;color:#2c2c2c;letter-spacing:1px;">${data.id}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-size:13px;color:#888;">Nome</td><td style="padding:8px 0;border-bottom:1px solid #eee;font-size:14px;font-weight:600;color:#2c2c2c;">${data.name}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-size:13px;color:#888;">Data</td><td style="padding:8px 0;border-bottom:1px solid #eee;font-size:14px;font-weight:600;color:#8b3a2a;">${formattedDate}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-size:13px;color:#888;">Hora</td><td style="padding:8px 0;border-bottom:1px solid #eee;font-size:22px;font-weight:700;color:#8b3a2a;">${data.time}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-size:13px;color:#888;">Pessoas</td><td style="padding:8px 0;border-bottom:1px solid #eee;font-size:14px;font-weight:600;color:#2c2c2c;">👥 ${data.guests}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-size:13px;color:#888;">Telefone</td><td style="padding:8px 0;border-bottom:1px solid #eee;font-size:14px;color:#2c2c2c;"><a href="tel:${data.phone}" style="color:#8b3a2a;font-weight:600;">${data.phone}</a></td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-size:13px;color:#888;">E-mail</td><td style="padding:8px 0;border-bottom:1px solid #eee;font-size:14px;color:#2c2c2c;"><a href="mailto:${data.email}" style="color:#8b3a2a;">${data.email}</a></td></tr>
        <tr><td style="padding:8px 0;font-size:13px;color:#888;">Idioma</td><td style="padding:8px 0;font-size:14px;color:#2c2c2c;">${data.language.toUpperCase()}</td></tr>
      </table>

      ${
        data.requests
          ? `<div style="margin-top:16px;padding:14px 16px;background:#fff8e8;border-left:4px solid #d4a843;border-radius:4px;">
        <p style="font-size:11px;font-weight:700;color:#8b6914;text-transform:uppercase;letter-spacing:2px;margin:0 0 6px;">★ Pedidos Especiais</p>
        <p style="font-size:14px;color:#5a4a1e;margin:0;line-height:1.5;">${data.requests}</p>
      </div>`
          : '<p style="margin-top:16px;font-size:13px;color:#888;">Sem pedidos especiais.</p>'
      }
    </div>
    <div style="background:#f5f5f5;padding:14px 28px;text-align:center;">
      <p style="font-size:12px;color:#aaa;margin:0;">Enviado automaticamente pelo sistema de reservas · ${new Date().toLocaleString("pt-PT")}</p>
    </div>
  </div>
</body>
</html>`;
}

// ─── Public Send Functions ────────────────────────────────────────────────────

export async function sendCustomerConfirmation(
  data: ReservationEmailData
): Promise<void> {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("[email] SMTP credentials not configured – skipping customer email");
    return;
  }

  const transporter = createTransporter();

  const subjects: Record<string, string> = {
    pt: `✓ Reserva Confirmada – ${data.date} às ${data.time} | Tacho da Memória`,
    en: `✓ Reservation Confirmed – ${data.date} at ${data.time} | Tacho da Memória`,
    es: `✓ Reserva Confirmada – ${data.date} a las ${data.time} | Tacho da Memória`,
  };

  await transporter.sendMail({
    from: process.env.SMTP_FROM || `Tacho da Memória <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: subjects[data.language] || subjects.pt,
    html: buildCustomerEmailHTML(data),
  });

  console.log(`[email] Customer confirmation sent to ${data.email}`);
}

// Wrap send with debug to log transporter responses/errors
async function safeSendMail(transporter: any, mailOptions: any, label: string) {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`[email] ${label} send success: messageId=${info.messageId} response=${info.response}`);
    return info;
  } catch (err: any) {
    console.error(`[email] ${label} send error:`, err && err.message ? err.message : err);
    throw err;
  }
}

export async function sendRestaurantNotification(
  data: ReservationEmailData
): Promise<void> {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("[email] SMTP credentials not configured – skipping restaurant notification");
    return;
  }

  const restaurantEmail = process.env.RESTAURANT_EMAIL || process.env.SMTP_USER;
  const transporter = createTransporter();

  await safeSendMail(
    transporter,
    {
      from: process.env.SMTP_FROM || `Tacho da Memória <${process.env.SMTP_USER}>`,
      to: restaurantEmail,
      subject: `🔔 Nova Reserva: ${data.name} · ${data.date} às ${data.time} · ${data.guests} pax`,
      html: buildStaffNotificationHTML(data),
    },
    "staff"
  );
}
