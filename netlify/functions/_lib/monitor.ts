const DSN = process.env.SENTRY_DSN || '';

export async function logError(err: unknown, context?: Record<string, unknown>) {
  // Minimal stub: if DSN present, POST to Sentry Ingest (or replace with @sentry/node in a follow-up)
  // For Stage-1, just console.error to get visibility in Netlify logs.
  console.error('[fn-error]', { err, context });
}
