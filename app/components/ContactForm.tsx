'use client';

import { useState } from 'react';
import ReCaptcha from '@/components/ReCaptcha';

type Locale = 'en' | 'ar';

export default function ContactForm({ locale = 'en' as Locale }) {
  const [captcha, setCaptcha] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; ticketId?: string; error?: string } | null>(null);

  const t = {
    en: {
      name: 'Full Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      submit: loading ? 'Sending…' : 'Send Message',
      success: (id: string) => `Thank you — your message was received. Ticket ${id}. We'll get back to you as soon as possible.`,
      failed: 'Something went wrong. Please try again.',
    },
    ar: {
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      submit: loading ? 'جارٍ الإرسال…' : 'إرسال',
      success: (id: string) => `شكراً لك — تم استلام رسالتك. Ticket ${id}. سنقوم بالرد عليك في أقرب وقت ممكن.`,
      failed: 'حدث خطأ ما. حاول مرة أخرى.',
    },
  }[locale];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    setResult(null);
    try {
      const payload = {
        fullName: String(fd.get('fullName') || ''),
        email: String(fd.get('email') || ''),
        subject: String(fd.get('subject') || ''),
        message: String(fd.get('message') || ''),
        locale,
        path: locale === 'ar' ? '/ar/contact' : '/contact',
        captcha,
      };
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ ok: false, error: 'network' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="fullName" required placeholder={t.name} className="w-full rounded-xl border px-4 py-3" />
        <input type="email" name="email" required placeholder={t.email} className="w-full rounded-xl border px-4 py-3" />
      </div>
      <input name="subject" required placeholder={t.subject} className="w-full rounded-xl border px-4 py-3" />
      <textarea name="message" required placeholder={t.message} rows={5} className="w-full rounded-xl border px-4 py-3" />
      <ReCaptcha onVerify={setCaptcha} action="contact" />
      <button disabled={loading} className="rounded-xl bg-blue-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-blue-700 disabled:opacity-60">
        {t.submit}
      </button>

      {result && (
        <div className={`mt-3 text-sm ${result.ok ? 'text-emerald-700' : 'text-red-600'}`}>
          {result.ok ? t.success(result.ticketId || '') : t.failed}
        </div>
      )}
    </form>
  );
}
