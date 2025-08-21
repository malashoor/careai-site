"use client";

import { useState, useEffect } from "react";
import { track } from "@/lib/analytics";
import ReCaptcha from "@/components/ReCaptcha";
import { formatSuccessMessage, copyToClipboard } from "@/utils/tickets";

interface ContactPageProps {
  params: {
    locale: string;
  };
}

export default function ContactPage({ params }: ContactPageProps) {
  const locale = params.locale;
  const isAR = locale === "ar";
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticket, setTicket] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copying' | 'copied'>('idle');

  // Check URL parameters for partnership inquiry
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const inquiry = urlParams.get('inquiry');
      
      if (inquiry === 'partnership') {
        setFormData(prev => ({
          ...prev,
          subject: isAR ? "استفسار عن الشراكة مع CareAI" : "Partnership Inquiry with CareAI",
          message: isAR 
            ? "مرحباً،\n\nأنا مهتم بالشراكة مع CareAI لتنظيمنا. يرجى تزويدي بمزيد من المعلومات حول:\n\n• خيارات الشراكة المتاحة\n• متطلبات التكامل\n• نماذج التسعير للمؤسسات\n\nشكراً لكم"
            : "Hello,\n\nI'm interested in partnering with CareAI for our organization. Please provide me with more information about:\n\n• Available partnership options\n• Integration requirements\n• Enterprise pricing models\n\nThank you"
        }));
      }
    }
  }, [isAR]);

  const input = "mt-2 w-full h-12 rounded-xl2 border px-4 outline-none bg-white text-ink-800 " +
                "border-ink-150 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/20 transition";
  const area  = "mt-2 w-full min-h-[140px] rounded-xl2 border px-4 py-3 outline-none bg-white text-ink-800 " +
                "border-ink-150 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/20 transition";
  const label = "block text-sm font-medium text-ink-900";
  const btn   = "btn btn-primary";
  const card  = "card max-w-3xl mx-auto";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
    setCaptchaVerified(true);
    setError(null); // Clear any previous captcha errors
  };

  const handleCopyTicket = async () => {
    if (!ticket) return;
    
    setCopyStatus('copying');
    const success = await copyToClipboard(ticket);
    setCopyStatus(success ? 'copied' : 'idle');
    
    // Reset copy status after 2 seconds
    setTimeout(() => setCopyStatus('idle'), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate captcha
    if (!captchaVerified || !captchaToken) {
      setError(isAR ? "يرجى التحقق من reCAPTCHA أولاً" : "Please verify reCAPTCHA first");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setTicket(null);

    const payload = { 
      ...formData, 
      locale, 
      path: window.location.pathname,
      captcha: captchaToken // Include captcha token
    };

    try {
      // Use Netlify Function in production, API route in development
      const endpoint = process.env.NODE_ENV === 'production' 
        ? '/.netlify/functions/contact'
        : '/api/contact';

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        setTicket(result.ticketId);
        setFormData({ fullName: "", email: "", subject: "", message: "" });
        setCaptchaToken("");
        setCaptchaVerified(false);
        
        // Track successful submission
        track('contact_form_submitted', {
          locale,
          subject: payload.subject,
          hasPartnershipInquiry: payload.subject.toLowerCase().includes('partnership') || payload.subject.toLowerCase().includes('شراكة')
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setError(
        isAR 
          ? "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى." 
          : "An error occurred while sending the message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="py-16 lg:py-24">
        <div className={card}>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-ink-900 mb-4">
              {isAR ? "تواصل معنا" : "Contact Us"}
            </h1>
            <p className="text-lg text-ink-600">
              {isAR 
                ? "نحن هنا لمساعدتك. أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن."
                : "We're here to help. Send us a message and we'll respond as soon as possible."
              }
            </p>
          </div>

          {ticket && (
            <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
              <div className="flex items-center justify-between">
                <div className="text-green-700">
                  <p className="font-medium">
                    {isAR ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!"}
                  </p>
                  <p className="text-sm mt-1">
                    {isAR ? "رقم التذكرة:" : "Ticket number:"} <span className="font-mono font-semibold">{ticket}</span>
                  </p>
                </div>
                <button
                  onClick={handleCopyTicket}
                  className="btn btn-sm btn-ghost text-green-700 hover:bg-green-100"
                  disabled={copyStatus === 'copying'}
                >
                  {copyStatus === 'copying' 
                    ? (isAR ? "نسخ..." : "Copying...") 
                    : copyStatus === 'copied' 
                    ? (isAR ? "تم النسخ!" : "Copied!") 
                    : (isAR ? "نسخ" : "Copy")
                  }
                </button>
              </div>
            </div>
          )}
          
          {error && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <label className={label}>
                {isAR ? "الاسم الكامل *" : "Full Name *"}
                <input 
                  required 
                  name="fullName" 
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={input}
                  aria-describedby="name-help"
                />
              </label>
              <label className={label}>
                {isAR ? "البريد الإلكتروني *" : "Email *"}
                <input 
                  required 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className={input}
                  aria-describedby="email-help"
                />
              </label>
            </div>

            <label className={label}>
              {isAR ? "الموضوع" : "Subject"}
              <input 
                name="subject" 
                value={formData.subject}
                onChange={handleInputChange}
                className={input}
                aria-describedby="subject-help"
                placeholder={isAR ? "مثال: استفسار عن الشراكة" : "e.g., Partnership Inquiry"}
              />
            </label>

            <label className={label}>
              {isAR ? "الرسالة *" : "Message *"}
              <textarea 
                required 
                name="message" 
                value={formData.message}
                onChange={handleInputChange}
                className={area}
                aria-describedby="message-help"
                placeholder={isAR 
                  ? "اكتب رسالتك هنا..." 
                  : "Write your message here..."
                }
              />
            </label>

            {/* reCAPTCHA Integration */}
            <div className="space-y-3">
              <label className={label}>
                {isAR ? "التحقق من الأمان" : "Security Verification"}
              </label>
              <ReCaptcha 
                onVerify={handleCaptchaVerify}
                action="contact"
                className={`px-4 py-3 rounded-xl2 border transition-colors ${
                  captchaVerified 
                    ? 'border-green-500 bg-green-50 text-green-700' 
                    : 'border-ink-150 bg-white text-ink-800 hover:border-brand-blue'
                }`}
              />
              {captchaVerified && (
                <p className="text-sm text-green-600 flex items-center">
                  <span className="mr-2">✅</span>
                  {isAR ? "تم التحقق من reCAPTCHA" : "reCAPTCHA verified"}
                </p>
              )}
            </div>

            <button 
              className={`${btn} ${!captchaVerified ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit" 
              disabled={isSubmitting || !captchaVerified}
            >
              {isSubmitting 
                ? (isAR ? "جاري الإرسال..." : "Sending...") 
                : (isAR ? "إرسال" : "Send message")
              }
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
