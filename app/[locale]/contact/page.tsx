"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setTicket(null);

    const payload = { 
      ...formData, 
      locale, 
      path: window.location.pathname 
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
        setTicket(result.id);
        setFormData({ fullName: "", email: "", subject: "", message: "" });
        track("contact_submit");
      } else {
        setError(result.error || (isAR ? "حدث خطأ. يرجى المحاولة مرة أخرى." : "An error occurred. Please try again."));
      }
    } catch (error) {
      setError(isAR ? "حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى." : "Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main dir={isAR ? "rtl" : "ltr"} className="bg-gradient-subtle">
      <section className="mx-auto max-w-wrap px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <header className="text-center mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-ink-900">
            {isAR ? "تواصل معنا" : "Contact CareAI"}
          </h1>
          <p className="mt-3 text-ink-600">
            {isAR ? "نحن هنا للمساعدة." : "We're here to help — partners and families welcome."}
          </p>
        </header>

        <div className={card + " p-6 md:p-8"}>
          {/* Status Messages */}
          {ticket && (
            <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700" aria-live="polite">
              <p className="text-sm">
                {isAR ? "شكراً لك — تم استلام رسالتك." : "Thank you — your message was received."} {" "}
                <strong>Ticket CM-{ticket.slice(0,8)}</strong>
              </p>
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
              />
            </label>

            <button 
              className={btn} 
              type="submit" 
              disabled={isSubmitting}
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
