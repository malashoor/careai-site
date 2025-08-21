import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

export async function GET() {
  try {
    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ 
        ok: false, 
        error: "Supabase not initialized",
        env: {
          url: process.env.NEXT_PUBLIC_SUPABASE_URL ? "SET" : "MISSING",
          anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "SET" : "MISSING"
        }
      });
    }

    // Test basic connection
    const { data: testData, error: testError } = await supabase
      .from('profiles')
      .select('count')
      .limit(1);

    if (testError) {
      return NextResponse.json({ 
        ok: false, 
        error: "Basic connection failed",
        details: testError.message
      });
    }

    // Test contact_messages table
    const { data: contactData, error: contactError } = await supabase
      .from('contact_messages')
      .select('count')
      .limit(1);

    if (contactError) {
      return NextResponse.json({ 
        ok: false, 
        error: "contact_messages table access failed",
        details: contactError.message,
        tableExists: false
      });
    }

    return NextResponse.json({ 
      ok: true, 
      message: "Supabase connection successful",
      profilesTable: "accessible",
      contactMessagesTable: "accessible",
      data: contactData
    });

  } catch (e: any) {
    return NextResponse.json({ 
      ok: false, 
      error: e.message || "Unknown error",
      stack: e.stack
    });
  }
}
