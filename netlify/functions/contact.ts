import type { Handler } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";

export const handler: Handler = async (event) => {
  // Handle CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");

    const full_name = String(data.fullName || data.full_name || data.name || "").trim();
    const email = String(data.email || "").trim().toLowerCase();
    const subject = String(data.subject || "");
    const message = String(data.message || "").trim();
    const locale = String(data.locale || "en");
    const path = String(data.path || "/");
    const user_agent = String(event.headers["user-agent"] || "");

    if (!full_name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ ok: false, error: "Missing required fields." }),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ ok: false, error: "Invalid email." }),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
    }

    // Create Supabase client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    // Insert into contact_messages table
    const { data: row, error } = await supabase
      .from("contact_messages")
      .insert({
        full_name,
        email,
        subject,
        message,
        locale,
        path,
        user_agent,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    // Optional: Send email notification (if Resend is configured)
    if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        const from = process.env.CONTACT_FROM_EMAIL || "no-reply@careai.app";
        
        await resend.emails.send({
          from,
          to: process.env.CONTACT_TO_EMAIL,
          subject: `New contact message: ${subject || "General Inquiry"}`,
          reply_to: email,
          text: `From: ${full_name} <${email}>\nLocale: ${locale}\nPath: ${path}\nUA: ${user_agent}\n\n${message}\n\nMessage ID: ${row.id}`,
        });
      } catch (emailError) {
        // Don't break if email fails
        console.warn("Failed to send contact email:", emailError);
      }
    }

    // Optional: Send Slack notification
    if (process.env.SLACK_WEBHOOK_URL) {
      try {
        await fetch(process.env.SLACK_WEBHOOK_URL, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            text: `New contact from ${full_name} <${email}>: ${subject}\n${message}`,
          }),
        });
      } catch (slackError) {
        console.warn("Failed to send Slack notification:", slackError);
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, id: row.id }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  } catch (error: any) {
    console.error("Contact function error:", error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        ok: false, 
        error: error.message || "Server error" 
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  }
};
