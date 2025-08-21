# 🔗 Flutter Environment Integration Guide

## 🎯 **Objective**
Use the exact same environment variables from the Flutter app in the CareAI-Site project to ensure both projects connect to the same backend.

## 📍 **Flutter App Environment Location**
```
CareAI-Flutter/flutter_app/.env
```

## 🔑 **Environment Variables to Copy**

### **1. Create `.env.local` in CareAI-Site root**
```bash
# Navigate to CareAI-Site directory
cd /Users/moayed/Desktop/Projects/careai-site

# Create .env.local file
touch .env.local
```

### **2. Copy these values from Flutter app to CareAI-Site**

#### **✅ Supabase Configuration (Required)**
```bash
# From Flutter app .env - COPY THE ACTUAL VALUES
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_from_flutter_app
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_from_flutter_app
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_from_flutter_app
```

#### **✅ Site Configuration (Required)**
```bash
NEXT_PUBLIC_SITE_URL=https://www.careai.app
NEXT_PUBLIC_CTA_DESTINATION=contact
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=careai.app
```

#### **✅ Email Configuration (Required for contact form)**
```bash
RESEND_API_KEY=your_resend_key_from_flutter_app
CONTACT_TO_EMAIL=support@careai.app
CONTACT_FROM_EMAIL=no-reply@careai.app
```

#### **✅ Database Connection (Optional - for direct DB access)**
```bash
DATABASE_URL=your_database_url_from_flutter_app
```

#### **✅ Additional Services (Optional)**
```bash
EXPO_PUBLIC_GOOGLE_API_KEY=your_google_api_key_from_flutter_app
GEMINI_API_KEY=your_gemini_api_key_from_flutter_app
```

## 🚀 **Complete .env.local File Template**

```bash
# 🚀 CareAI-Site Environment Configuration
# Using same backend as Flutter app for consistency

# ✅ Supabase Configuration (Same as Flutter app)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# ✅ Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.careai.app
NEXT_PUBLIC_CTA_DESTINATION=contact
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=careai.app

# ✅ Email Configuration (Same as Flutter app)
RESEND_API_KEY=your_resend_key_here
CONTACT_TO_EMAIL=support@careai.app
CONTACT_FROM_EMAIL=no-reply@careai.app

# ✅ Database Connection (Same as Flutter app)
DATABASE_URL=your_database_url_here

# ✅ Additional Services (Same as Flutter app)
EXPO_PUBLIC_GOOGLE_API_KEY=your_google_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

## 🔧 **Verification Steps**

### **1. Create the file**
```bash
cd /Users/moayed/Desktop/Projects/careai-site
nano .env.local
# Paste the template above and fill in your actual values
```

### **2. Verify environment variables are loaded**
```bash
# Test if variables are accessible
npm run dev
# Check console for any environment variable errors
```

### **3. Test Supabase connection**
```bash
# The contact form should now work with the same backend
# Visit /en/contact and submit a test message
```

## 🎯 **Benefits of This Integration**

1. **Same Backend**: Both web and mobile use identical Supabase project
2. **Data Consistency**: Contact messages, user profiles, etc. shared between platforms
3. **Unified Admin**: Admin panel can manage data from both web and mobile
4. **Easier Testing**: Test both platforms against the same data
5. **Production Ready**: Same configuration for both deployment environments

## ⚠️ **Security Notes**

- **Never commit** `.env.local` to version control
- **Never include real credentials** in documentation files
- **Use Netlify environment variables** for production deployment
- **Keep service role keys private** (server-side only)
- **Public keys** (NEXT_PUBLIC_*) are safe for client-side use
- **Use placeholder values** in documentation (your_key_here)

## 🚀 **Next Steps After Integration**

1. **Test contact form** - should now work with Flutter app's backend
2. **Verify admin panel** - should show data from both platforms
3. **Test build process** - ensure no environment variable errors
4. **Deploy to production** - use same environment variables in Netlify

## 🔒 **Security Checklist**

- [ ] `.env.local` is in `.gitignore`
- [ ] No real credentials in documentation
- [ ] Use placeholder values in examples
- [ ] Production keys only in deployment environment
- [ ] Service role keys kept private
