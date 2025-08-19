# CareAI Launch Checklist

## 🚀 Pre-Launch Verification

### 1. Netlify Configuration
- [ ] Primary domain set to `www.careai.app`
- [ ] HTTPS certificate is green/active
- [ ] `_headers` and `_redirects` files are deployed
- [ ] Environment variables configured:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=www.careai.app`
  - `RESEND_API_KEY`
  - `NOTIFY_TO=partners@careai.app`

### 2. Supabase Setup
- [ ] Run `supabase-schema.sql` in SQL editor
- [ ] Tables created: `profiles`, `leads`, `partner_leads`
- [ ] Storage bucket `partner_documents` created
- [ ] RLS policies enabled and working
- [ ] Insert your user as admin in `profiles` table
- [ ] Test admin login at `/admin`

### 3. Analytics & Tracking
- [ ] Plausible script loading on all pages
- [ ] CTA click events firing:
  - `cta_start_trial`
  - `cta_get_started`
  - `cta_partner_inquiry`
- [ ] Page view tracking working
- [ ] Data flowing to Plausible dashboard

### 4. Form Submissions
- [ ] Onboarding form → `leads` table
- [ ] Partner forms → `partner_leads` table
- [ ] File uploads → Supabase Storage
- [ ] Email notifications via Resend working
- [ ] Success pages displaying correctly

### 5. Navigation & Links
- [ ] All navbar links working
- [ ] Footer links functional
- [ ] Language switcher working (EN ↔ AR)
- [ ] Get Started button → `/onboarding`
- [ ] Partner dropdown menu working

### 6. Content & Localization
- [ ] English content complete
- [ ] Arabic content complete
- [ ] RTL layout working for Arabic
- [ ] Legal pages linked in footer
- [ ] Consent checkbox text on onboarding

### 7. SEO & Performance
- [ ] `robots.txt` accessible
- [ ] `sitemap.xml` accessible
- [ ] JSON-LD structured data in page source
- [ ] OG/Twitter meta tags working
- [ ] Page load times < 3 seconds

### 8. Security & Headers
- [ ] Security headers deployed via `_headers`
- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
- [ ] HSTS header active
- [ ] Permissions-Policy configured

### 9. Error Handling
- [ ] 404 page working (`/not-found`)
- [ ] Error page working (`/error`)
- [ ] Form validation working
- [ ] Graceful fallbacks for missing data

### 10. Cross-Browser Testing
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers
- [ ] RTL support in Arabic

## 🔧 Post-Launch Monitoring

### Week 1
- [ ] Monitor error rates
- [ ] Check form submission success rates
- [ ] Verify analytics data accuracy
- [ ] Test admin functionality
- [ ] Monitor page load performance

### Week 2-4
- [ ] Review user engagement metrics
- [ ] Check partner lead quality
- [ ] Monitor storage usage
- [ ] Review security logs
- [ ] Gather user feedback

## 📱 Mobile & Accessibility
- [ ] Mobile navigation working
- [ ] Touch targets properly sized
- [ ] Screen reader compatibility
- [ ] Keyboard navigation working
- [ ] Color contrast meets WCAG standards

## 🌐 Internationalization
- [ ] Arabic locale working correctly
- [ ] RTL text alignment
- [ ] Date/number formatting
- [ ] Currency display
- [ ] Language detection

## 📊 Analytics Events to Monitor
- `page_view` - Page visits
- `cta_start_trial` - Pricing CTA clicks
- `cta_get_started` - Onboarding CTA clicks
- `cta_partner_inquiry` - Partner form submissions
- `cta_contact` - Contact form submissions

## 🚨 Critical Issues to Fix Before Launch
- [ ] All forms submitting successfully
- [ ] Admin authentication working
- [ ] File uploads functional
- [ ] Email notifications sending
- [ ] No console errors in production
- [ ] All pages loading without 500 errors

## 📞 Support & Contact
- Support email: support@careai.app
- Partners email: partners@careai.app
- Admin access: `/admin` (requires login + admin role)

---

**Launch Date:** TBD  
**Last Updated:** $(date)  
**Status:** 🟡 In Progress
