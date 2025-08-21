import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function GET() {
  try {
    // Test basic connection
    const { data, error } = await supabaseAdmin
      .from('contact_messages')
      .select('count')
      .limit(1);

    if (error) {
      return NextResponse.json({ 
        ok: false, 
        error: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      });
    }

    return NextResponse.json({ 
      ok: true, 
      message: "Supabase admin connection successful",
      data: data
    });

  } catch (e: any) {
    return NextResponse.json({ 
      ok: false, 
      error: e.message || "Unknown error",
      stack: e.stack
    });
  }
}
