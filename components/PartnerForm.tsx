"use client";

import { useState } from "react";
import { getSupabase } from "@/lib/supabase";
import { trackEvents } from "@/lib/analytics";

interface PartnerFormProps {
  type: "doctors" | "hospitals" | "insurance" | "charities";
  locale: "en" | "ar";
}

export default function PartnerForm({ type, locale }: PartnerFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    phone: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Submit via Netlify Function with hCaptcha verification
      const res = await fetch('/api/form.submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind: 'partner',
          hcaptcha_token: captchaToken,
          type,
          org_name: formData.organization,
          contact_name: formData.name,
          work_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          role: formData.role,
          locale
        })
      });

      if (!res.ok) throw new Error('Submission failed');

      // Track the event
      trackEvents.ctaPartnerInquiry(type, locale);

      // Notify team via Netlify function (best-effort)
      try {
        await fetch('/.netlify/functions/notify-partner', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type,
            org_name: formData.organization,
            contact_name: formData.name,
            work_email: formData.email,
            phone: formData.phone,
            message: formData.message,
            role: formData.role,
            locale
          })
        });
      } catch {}

      setIsSuccess(true);
      setFormData({ name: "", email: "", organization: "", role: "", phone: "", message: "" });
      setFile(null);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{locale === 'ar' ? 'تم الاستلام' : 'Received'}</h3>
        <p className="text-slate-600">{locale === 'ar' ? 'سنتواصل معك قريباً.' : 'We will reach out shortly.'}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {locale === "ar" ? "الاسم الكامل" : "Full Name"} *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label={locale === "ar" ? "الاسم الكامل" : "Full Name"}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            {locale === "ar" ? "البريد الإلكتروني" : "Email"} *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label={locale === "ar" ? "البريد الإلكتروني" : "Email"}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
            {locale === "ar" ? "اسم المؤسسة" : "Organization Name"} *
          </label>
          <input
            type="text"
            id="organization"
            required
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label={locale === "ar" ? "اسم المؤسسة" : "Organization Name"}
          />
        </div>
        
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
            {locale === "ar" ? "المسمى الوظيفي" : "Job Title"} *
          </label>
          <input
            type="text"
            id="role"
            required
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label={locale === "ar" ? "المسمى الوظيفي" : "Job Title"}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          {locale === "ar" ? "رقم الهاتف" : "Phone Number"}
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
          aria-label={locale === "ar" ? "رقم الهاتف" : "Phone Number"}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          {locale === "ar" ? "رسالتك" : "Your Message"} *
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
          placeholder={locale === "ar" 
            ? "أخبرنا عن احتياجاتك وكيف يمكن لـ CareAI مساعدتك..."
            : "Tell us about your needs and how CareAI can help..."
          }
          aria-label={locale === "ar" ? "رسالتك" : "Your Message"}
        />
      </div>

      <div>
        <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
          {locale === "ar" ? "مستندات إضافية (اختياري)" : "Additional Documents (Optional)"}
        </label>
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
          accept=".pdf,.doc,.docx,.txt"
          aria-label={locale === "ar" ? "مستندات إضافية" : "Additional Documents"}
        />
        <p className="text-sm text-gray-500 mt-1">
          {locale === "ar" 
            ? "PDF, Word, أو ملفات نصية (الحد الأقصى: 10MB)"
            : "PDF, Word, or text files (Max: 10MB)"
          }
        </p>
      </div>

      <div className="mt-4">
        <div className="h-captcha" data-sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY} data-callback={(t: any) => setCaptchaToken(String(t))} />
        <input type="hidden" name="hcaptcha_token" value={captchaToken} />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-600 text-white py-3 px-6 rounded-lg hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label={locale === "ar" ? "إرسال الطلب" : "Submit Request"}
      >
        {isSubmitting 
          ? (locale === "ar" ? "جاري الإرسال..." : "Sending...")
          : (locale === "ar" ? "إرسال الطلب" : "Submit Request")
        }
      </button>
    </form>
  );
}
