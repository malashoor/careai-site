import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';
import { rateLimit } from '@/lib/rateLimit';
import { verifyCaptcha } from '@/lib/captcha';
import { notifySlack } from '@/lib/notify';
import { Resend } from 'resend';

const BodySchema = z.object({
  fullName: z.string().min(1).max(120),
  email: z.string().email().max(254),
  subject: z.string().min(1).max(200),
  message: z.string().min(1).max(4000),
  locale: z.string().optional(),
  path: z.string().optional(),
  captcha: z.string().optional(),
});

function makeTicketId() {
  const part = Math.random().toString(36).toUpperCase().replace(/[^A-Z0-9]/g, '').slice(2, 10);
  return `CM-${part}`;
}

function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !serviceKey) throw new Error('Missing Supabase envs');
  return createClient(url, serviceKey, { auth: { persistSession: false } });
}

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const EMAIL_FROM = process.env.EMAIL_FROM || process.env.CONTACT_FROM_EMAIL || 'no-reply@careai.app';
const EMAIL_INTERNAL = process.env.EMAIL_INTERNAL || process.env.CONTACT_TO_EMAIL || undefined;

function escapeHtml(s: string) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

async function sendEmailsAndLog(supabase: any, row: any) {
  if (!resend) return;

  // Check if ticket viewer is enabled
  const viewerBase = process.env.TICKET_VIEWER_BASE_URL;
  const ticketLink = viewerBase ? `${viewerBase}/${row.ticket_id}` : null;

  const userHtml = `
    <p>Hi ${row.full_name},</p>
    <p>Thanks for contacting CareAI. Your ticket ID is <strong>${row.ticket_id}</strong>.</p>
    ${ticketLink ? `<p>You can view your ticket status here: <a href="${ticketLink}">${ticketLink}</a></p>` : ''}
    <p><b>Subject:</b> ${row.subject}</p>
    <p><b>Message:</b></p>
    <pre>${escapeHtml(row.message)}</pre>
    <p>We'll get back to you shortly.</p>
  `;

  try {
    await resend.emails.send({
      from: EMAIL_FROM,
      to: row.email,
      subject: `CareAI — Ticket ${row.ticket_id}`,
      html: userHtml,
    });

    if (EMAIL_INTERNAL) {
      await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_INTERNAL,
        subject: `New Contact — ${row.ticket_id} — ${row.subject}`,
        html: `
          <p>New contact message received.</p>
          <ul>
            <li><b>Ticket</b>: ${row.ticket_id}</li>
            <li><b>Name</b>: ${row.full_name}</li>
            <li><b>Email</b>: ${row.email}</li>
            <li><b>IP</b>: ${row.ip_address ?? '-'}</li>
            <li><b>User-Agent</b>: ${row.user_agent ?? '-'}</li>
            ${ticketLink ? `<li><b>View Ticket</b>: <a href="${ticketLink}">${ticketLink}</a></li>` : ''}
          </ul>
          <pre>${escapeHtml(row.message)}</pre>
        `,
      });
    }

    await supabase.from('contact_messages')
      .update({ email_ack_status: 'sent', email_ack_at: new Date().toISOString() })
      .eq('id', row.id);
  } catch (err: any) {
    await supabase.from('contact_messages')
      .update({
        email_ack_status: 'failed',
        email_ack_error: String(err?.message ?? err),
      })
      .eq('id', row.id);
    console.error('Email send failed:', err);
  }
}

export async function POST(req: Request) {
  try {
    // --- Rate limit ---
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
    const ua = req.headers.get('user-agent') || '';
    const rl = rateLimit(ip, 5, 60_000); // 5/min per IP
    
    if (!rl.allowed) {
      const res = NextResponse.json({ ok: false, error: 'Too Many Requests' }, { status: 429 });
      if (rl.resetAt) res.headers.set('X-RateLimit-Reset', rl.resetAt);
      res.headers.set('X-RateLimit-Remaining', String(0));
      return res;
    }

    // --- Parse & validate body ---
    const json = await req.json();
    const parsed = BodySchema.parse(json);

    // --- Captcha (if configured) ---
    const cap = await verifyCaptcha(parsed.captcha);
    if (!cap.ok) {
      return NextResponse.json({ ok: false, error: 'Captcha verification failed' }, { status: 400 });
    }

    const supabase = getAdminClient();

    // --- Generate unique ticket_id with retry if collision ---
    let ticketId = makeTicketId();
    let attempt = 0;
    const payloadBase = {
      full_name: parsed.fullName,
      email: parsed.email,
      subject: parsed.subject,
      message: parsed.message,
      locale: parsed.locale ?? 'en',
      path: parsed.path ?? '/',
      status: 'new',
      ip_address: ip,
      user_agent: ua,
    };

    // Try up to 3 times if unique index collides (super rare)
    let row: any = null;
    while (attempt < 3) {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert({ ...payloadBase, ticket_id: ticketId })
        .select('id, ticket_id, full_name, email, subject, message, ip_address, user_agent')
        .single();

      if (!error && data) {
        row = data;
        break;
      }

      // if unique violation on ticket_id, retry with new id
      if (error?.message?.toLowerCase().includes('duplicate key')) {
        ticketId = makeTicketId();
        attempt++;
        continue;
      }

      console.error('Insert failed:', error);
      return NextResponse.json({ ok: false, error: error?.message ?? 'Insert failed' }, { status: 500 });
    }

    // Fire-and-forget notifications
    notifySlack(ticketId, {
      full_name: payloadBase.full_name,
      email: payloadBase.email,
      subject: payloadBase.subject,
      message: payloadBase.message,
    }).catch(() => {});
    sendEmailsAndLog(supabase, row).catch(() => {});

    // Set proper rate limit headers
    const res = NextResponse.json({ ok: true, ticketId, rateLimitRemaining: rl.remaining }, { status: 201 });
    res.headers.set('X-RateLimit-Remaining', String(rl.remaining));
    if (rl.resetAt) res.headers.set('X-RateLimit-Reset', rl.resetAt);
    return res;
  } catch (err: any) {
    console.error('Contact API error:', err);
    const msg = err?.message ?? 'Unknown error';
    return NextResponse.json({ ok: false, error: msg }, { status: 400 });
  }
}

// Keep GET as a quick liveness probe (405 = correctly registered)
export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
