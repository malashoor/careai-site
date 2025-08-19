import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export const runtime = 'nodejs'; // ensure Node (not edge) if you email later
// Note: dynamic export removed due to static export limitation
// This API route won't work with static export - you'll need to use Netlify Functions instead

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    const body = contentType.includes("application/json")
      ? await req.json()
      : Object.fromEntries(await (await req.formData()).entries());

    const full_name = String(body.fullName || body.full_name || body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const subject = String(body.subject || "");
    const message = String(body.message || "").trim();
    const locale = String(body.locale || "en");
    const path = String(body.path || "/");
    const user_agent = String(req.headers.get("user-agent") || "");

    if (!full_name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
    }

    const sb = supabaseAdmin();
    const { data, error } = await sb
      .from("contact_messages")
      .insert([{ full_name, email, subject, message, locale, path, user_agent }])
      .select("id")
      .single();

    if (error) throw error;

    // TODO: Add email functionality later with Resend
    // For now, just store in Supabase
    console.log('Contact message stored:', { id: data.id, email, subject });

    return NextResponse.json({ ok: true, id: data.id });
  } catch (e: any) {
    console.error("Contact API error:", e);
    return NextResponse.json({ ok: false, error: e.message || "Server error" }, { status: 500 });
  }
}
