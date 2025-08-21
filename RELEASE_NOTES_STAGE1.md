# CareAI — Stage 1 Marketing Site Go-Live

**Date:** December 19, 2024  
**Scope:** Marketing site (Next.js) + Flutter SPA under `/app`

## Highlights
- 10 locales live (en, ar, es, fr, de, zh, ja, ko, hi, pt) with hreflang + SEO.
- Hidden pages gated: pricing, onboarding, sign-in → 404 in all locales.
- Flutter app served under `/app` with proper caching + SPA fallback.
- Security headers (CSP, XFO, etc.) + tuned caching (HTML short, assets long).

## Operational
- Monitoring: `/api/ping` (200), `/api/contact` POST (201).
- Netlify headers configured; Supabase redirect URLs & CORS updated.
- Rollback: shrink locale allowlist to `['en','ar']` if needed.

## Post-Launch Watchlist (48h)
- JS error rate by locale; Core Web Vitals on `/` and `/ar`.
- 4xx/5xx spikes; contact form throughput.
- Flutter SPA hard refresh behavior on `/app/...`.

## Next
- Stage 2: Android app QA + release.
- Stage 3: iOS fixes + release.
- Stage 4: Admin, reports, B2B intake, promotions.
