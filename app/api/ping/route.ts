// app/api/ping/route.ts - Uptime monitoring endpoint
import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({ 
    ok: true, 
    timestamp: new Date().toISOString(),
    service: 'CareAI Contact API',
    version: '1.0.0'
  }, { status: 200 });
}
