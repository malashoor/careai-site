# 🔒 Production Environment Variables for Netlify

## **Required Variables (Set in Netlify Dashboard → Site Settings → Environment Variables)**

### **Browser-Safe (NEXT_PUBLIC_*)**
```bash
NEXT_PUBLIC_SITE_URL=https://www.careai.app
NEXT_PUBLIC_CTA_DESTINATION=onboarding
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### **Server-Only (For Netlify Functions)**
```bash
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### **Optional (Email Notifications)**
```bash
RESEND_API_KEY=your_resend_key_here
CONTACT_TO_EMAIL=support@careai.app
CONTACT_FROM_EMAIL=no-reply@careai.app
```

---

## **🚨 Security Notes**

1. **NEVER commit these keys to Git**
2. **Rotate SUPABASE_SERVICE_ROLE_KEY** if it was ever exposed publicly
3. **Service role key** is server-only and used by Netlify functions
4. **Anon key** is safe for browser (has limited permissions)

---

## **🔧 Setup Steps**

1. **Go to Netlify Dashboard** → Your Site → Site Settings
2. **Environment Variables** → Add each variable above
3. **Save and trigger deploy**
4. **Verify function works** by testing contact form

---

## **✅ Verification Commands**

After setting variables, test:

```bash
# Test contact function locally
netlify dev

# Test contact form submission
curl -X POST http://localhost:8888/api/contact \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test","email":"test@example.com","message":"Test message","locale":"en"}'
```

**Expected Response:**
```json
{
  "ok": true,
  "id": "CM-XXXXXXXX",
  "message": "Message sent successfully"
}
```
