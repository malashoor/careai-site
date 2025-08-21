import { NextResponse } from 'next/server';
export async function GET() {
  const p = (v?: string) => (v ? v.slice(0, 12) + '…' : 'unset');
  return NextResponse.json({
    NEXT_PUBLIC_SUPABASE_URL: p(process.env.NEXT_PUBLIC_SUPABASE_URL),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: p(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'present' : 'unset',
  });
}
