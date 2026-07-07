import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

// Where leads are delivered. Defaults to the business inbox.
const LEAD_TO = process.env.LEAD_TO || site.email;
// The verified Resend sender. Must be an address on a domain you have verified
// in Resend, e.g. "United Movers <quotes@yourdomain.com>".
const LEAD_FROM = process.env.RESEND_FROM || "United Movers <onboarding@resend.dev>";

function row(label: string, value: string) {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 14px;background:#f6f3ee;border:1px solid #e6e0d6;font-weight:600;color:#0B1E33;white-space:nowrap;">${label}</td>
    <td style="padding:8px 14px;border:1px solid #e6e0d6;color:#0B1E33;">${value}</td>
  </tr>`;
}

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required." },
      { status: 422 }
    );
  }

  const lead = {
    name,
    phone,
    email: String(body.email ?? "").trim(),
    date: String(body.date ?? "").trim(),
    from: String(body.from ?? "").trim(),
    to: String(body.to ?? "").trim(),
    size: String(body.size ?? "").trim(),
    service: String(body.service ?? "").trim(),
    message: String(body.message ?? "").trim(),
    smsConsent: body.smsConsent === "yes",
    receivedAt: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;

  // No key configured yet (e.g. local dev before secrets are set). Log the lead
  // so nothing is lost and let the form succeed.
  if (!apiKey) {
    console.log("[united-movers] quote request (email not configured):", lead);
    return NextResponse.json({ ok: true, delivered: false });
  }

  const resend = new Resend(apiKey);

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
    <div style="background:#0B1E33;padding:22px 24px;border-radius:12px 12px 0 0;">
      <h2 style="margin:0;color:#ffffff;font-size:18px;">New quote request</h2>
      <p style="margin:6px 0 0;color:#E1552B;font-size:13px;font-weight:600;">United Movers website</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;border-radius:0 0 12px 12px;overflow:hidden;">
      ${row("Name", esc(lead.name))}
      ${row("Phone", esc(lead.phone))}
      ${row("Email", esc(lead.email))}
      ${row("Move date", esc(lead.date))}
      ${row("Moving from", esc(lead.from))}
      ${row("Moving to", esc(lead.to))}
      ${row("Home size", esc(lead.size))}
      ${row("Type of move", esc(lead.service))}
      ${row("Details", esc(lead.message).replace(/\n/g, "<br>"))}
      ${row("SMS consent", lead.smsConsent ? "Yes, opted in" : "No")}
    </table>
    <p style="color:#8a8a8a;font-size:12px;margin:16px 4px 0;">
      Received ${lead.receivedAt}
    </p>
  </div>`;

  const text = [
    "New quote request from the United Movers website",
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
    `Move date: ${lead.date}`,
    `Moving from: ${lead.from}`,
    `Moving to: ${lead.to}`,
    `Home size: ${lead.size}`,
    `Type of move: ${lead.service}`,
    `Details: ${lead.message}`,
    `SMS consent: ${lead.smsConsent ? "Yes" : "No"}`,
    "",
    `Received ${lead.receivedAt}`,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: LEAD_FROM,
      to: [LEAD_TO],
      subject: `New quote request from ${lead.name}`,
      replyTo: lead.email || undefined,
      html,
      text,
    });

    if (error) {
      console.error("[united-movers] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Could not send right now." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[united-movers] send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send right now." },
      { status: 502 }
    );
  }
}
