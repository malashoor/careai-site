# Security & Hardening Notes (CareAI Site)

## Secrets
- All secrets (e.g., SUPABASE_SERVICE_ROLE_KEY, HCAPTCHA_SECRET) are set in Netlify environment variables only.
- No secrets are committed to the repo or exposed to the client.

## Supabase Admin Client
- Guarded with `import 'server-only'` and a runtime check to prevent accidental client-side import.

## CORS
- All public Netlify functions use a strict allowlist based on `NEXT_PUBLIC_SITE_URL`.

## Rate Limiting
- All public Netlify functions are rate-limited by IP+UA (in-memory, per instance).

## hCaptcha
- All form endpoints require hCaptcha and fail if the secret is missing or validation fails.

## Monitoring
- Optional Sentry hook is present (logs to Netlify logs if DSN is not set).

## QA Scripts
- Run `npm run audit:ci` for security audit.
- Run `npm run deps:outdated` for dependency check.
- Run `npm run check:secrets` to ensure no service role key leaks.
- Run `npm run smoke:fns` to smoke test functions (requires dev server running).

---

**Review this file before every production deploy.**
