# CareAI Website (Next.js 14 + Tailwind, Netlify-ready)

A clean, accessible landing site with English/Arabic support and RTL layouts. Ready for Netlify deploy.

## Quick Start
```bash
npm i
npm run dev
```
Visit http://localhost:3000

## Build
```bash
npm run build && npm start
```

## Netlify
No plugin required. Import repo in Netlify → build command: `npm run build`. Netlify detects Next.js automatically.

### Forms
The contact page uses **Netlify Forms** (`data-netlify="true"`). Submissions appear under Site → Forms in Netlify.

### i18n
Routes are nested under `/en` and `/ar`. The root route redirects to `/en`. The `<html>` tag sets `dir="rtl"` for Arabic.

### Customize
- Strings: `lib/dictionary.ts`
- Colors/brand: `tailwind.config.ts`
- Sections: `components/*`
- Pages: `app/[locale]/*`
