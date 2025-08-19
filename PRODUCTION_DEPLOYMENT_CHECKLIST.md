# 🚀 Production Deployment Checklist - CareAI Website

## **✅ Pre-Deployment Verification**

### **1) Code Quality**
- [x] All 45 routes building successfully
- [x] No TypeScript errors
- [x] No hydration warnings
- [x] CTAs have proper z-index layering
- [x] Feature cards are clickable
- [x] Contact form routes to Netlify Function

### **2) Netlify Configuration**
- [x] `netlify.toml` exists with proper function config
- [x] `public/_redirects` routes `/api/contact` to function
- [x] `netlify/functions/contact.ts` exists and functional
- [x] `next.config.mjs` has `output: 'export'`

---

## **🔧 Production Deployment Steps**

### **Step 1: Set Environment Variables in Netlify**

**Go to:** Netlify Dashboard → Your Site → Site Settings → Environment Variables

**Required Variables:**
```bash
# Browser-safe
NEXT_PUBLIC_SITE_URL=https://www.careai.app
NEXT_PUBLIC_CTA_DESTINATION=onboarding
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Server-only (for Netlify functions)
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

**Optional Variables:**
```bash
RESEND_API_KEY=your_resend_key_here
CONTACT_TO_EMAIL=support@careai.app
CONTACT_FROM_EMAIL=no-reply@careai.app
```

### **Step 2: Create Supabase Table**

**Run this SQL in Supabase SQL Editor:**
```sql
-- See supabase-contact-table.sql for full schema
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  locale TEXT DEFAULT 'en',
  path TEXT DEFAULT '/',
  user_agent TEXT,
  status TEXT DEFAULT 'new'
);

-- Enable RLS and create policies
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
-- (See full SQL file for complete setup)
```

### **Step 3: Deploy to Production**

**Option A: Automatic (Recommended)**
```bash
git push origin main
# Netlify will auto-deploy from GitHub
```

**Option B: Manual Deploy**
```bash
npm run build
netlify deploy --prod --dir=out
```

---

## **🧪 Post-Deployment Testing**

### **Test 1: CTA Navigation**
1. **Homepage** → Click "Get Started"
   - ✅ Should navigate to `/onboarding`
2. **Homepage** → Click "Learn More"  
   - ✅ Should navigate to `/features`

### **Test 2: Feature Cards**
1. **Click each feature card** on homepage
   - ✅ Should navigate to `/features#[slug]`
   - ✅ Should scroll to correct section
   - ✅ Header should not cover section

### **Test 3: Contact Form**
1. **Go to** `/en/contact`
2. **Submit test message:**
   - Full Name: `Test User`
   - Email: `test@example.com`
   - Subject: `Test Message`
   - Message: `This is a test submission`
3. **Verify success:**
   - ✅ Green success message appears
   - ✅ Ticket ID shown (e.g., `CM-XXXXXXXX`)
   - ✅ Form fields clear

### **Test 4: Database Verification**
1. **Open Supabase Dashboard**
2. **Go to Table Editor** → `contact_messages`
3. **Look for new row** with test data
4. **Verify all fields** are populated correctly

---

## **🔍 Troubleshooting Common Issues**

### **Issue: CTAs Don't Click**
**Solution:** Check z-index layering
```css
/* Ensure CTA container is above other elements */
.cta-container { position: relative; z-index: 20; }
/* Make decorative elements non-interactive */
.decorative { pointer-events: none; }
```

### **Issue: Feature Cards Don't Navigate**
**Solution:** Verify anchor targets exist
```bash
# Check if all anchors exist
grep -r "id=" app/[locale]/features/
# Should show: smart-reminders, health-monitoring, emergency-alerts, ai-companion
```

### **Issue: Contact Form Fails**
**Solution:** Check Netlify Function logs
1. **Go to Netlify Dashboard** → Functions
2. **Check contact function logs**
3. **Verify environment variables** are set
4. **Test function locally:**
   ```bash
   netlify dev
   curl -X POST http://localhost:8888/api/contact \
     -H "Content-Type: application/json" \
     -d '{"fullName":"Test","email":"test@example.com","message":"Test"}'
   ```

### **Issue: Build Fails**
**Solution:** Check for missing dependencies
```bash
npm install
npm run build
# Look for specific error messages
```

---

## **🚨 Security Checklist**

- [ ] **SUPABASE_SERVICE_ROLE_KEY** is server-only (not exposed to browser)
- [ ] **Row Level Security (RLS)** is enabled on `contact_messages`
- [ ] **No API keys** committed to Git
- [ ] **Environment variables** set in Netlify (not in code)
- [ ] **CORS headers** properly configured in Netlify functions

---

## **📱 Mobile Testing**

### **Test on Real Devices:**
- [ ] **iOS Safari** - Test CTAs and navigation
- [ ] **Android Chrome** - Test CTAs and navigation  
- [ ] **Touch interactions** - Ensure buttons are tappable
- [ ] **Responsive design** - Check all breakpoints

---

## **🎯 Success Criteria**

✅ **All CTAs navigate correctly**  
✅ **Feature cards link to proper anchors**  
✅ **Contact form stores messages in Supabase**  
✅ **Admin can view and manage messages**  
✅ **No console errors or hydration warnings**  
✅ **All 45 routes build and deploy successfully**  
✅ **Mobile experience is smooth**  

---

## **🚀 Final Commands**

```bash
# Test everything locally first
npm run dev

# Build for production
npm run build

# Deploy to production
git add . && git commit -m "🚀 Production ready: CTAs, Features, Contact Form" && git push origin main

# Verify deployment
# Check Netlify dashboard for successful build
# Test all functionality on live site
```

---

**🎉 Your CareAI website is now production-ready with fully functional CTAs, feature navigation, and contact form storage!**
