// lib/rateLimit.ts - Production version with reset timestamps
const hits = new Map<string, { count: number; ts: number }>();

export function rateLimit(ip: string, max = 5, windowMs = 60_000) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.ts > windowMs) {
    hits.set(ip, { count: 1, ts: now });
    return { allowed: true, remaining: max - 1, resetAt: new Date(now + windowMs).toISOString() };
  }
  rec.count++;
  const remaining = Math.max(0, max - rec.count);
  const resetAt = new Date(rec.ts + windowMs).toISOString();
  if (rec.count > max) return { allowed: false, remaining: 0, resetAt };
  return { allowed: true, remaining, resetAt };
}

/**
 * Clean up old rate limit records to prevent memory leaks
 * Run this periodically in production
 */
export function cleanupRateLimits(maxAgeMs = 300_000) { // 5 minutes
  const now = Date.now();
  for (const [ip, record] of hits.entries()) {
    if (now - record.ts > maxAgeMs) {
      hits.delete(ip);
    }
  }
}

// Clean up every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupRateLimits, 300_000);
}
