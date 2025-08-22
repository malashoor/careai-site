
// Simple in-memory rate limiter (works per Netlify function instance). Good enough for Stage-1.
const BUCKET = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000;
const LIMIT = Number(process.env.RATE_LIMIT_PER_MINUTE || 30);

export function rateLimitOrThrow(key: string) {
  const now = Date.now();
  const rec = BUCKET.get(key);
  if (!rec || now - rec.ts > WINDOW_MS) {
    BUCKET.set(key, { count: 1, ts: now });
    return;
  }
  if (rec.count >= LIMIT) throw new Error('RATE_LIMIT');
  rec.count++;
}

export function clientKeyFromReq(req: Request) {
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  const ua = req.headers.get('user-agent') || 'ua';
  return `${ip}:${ua}`;
}
