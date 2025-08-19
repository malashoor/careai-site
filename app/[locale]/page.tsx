"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import { dictionary } from "@/lib/dictionary";
import { trackEvents } from "@/lib/analytics";

export default function HomePage({ params: { locale } }: { params: { locale: "en" | "ar" } }) {
  const i = dictionary[locale];

  return (
    <main>
      <Hero locale={locale} />
      <Features locale={locale} />
      
      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {i.howItWorks.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {i.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {i.howItWorks.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Home → CTA blocks */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href={`/${locale}/onboarding`} 
              className="card p-6 hover:shadow-xl transition"
              onClick={() => trackEvents.ctaGetStarted(locale)}
            >
              <h3 className="text-xl font-bold">
                {locale === "ar" ? "ابدأ كعائلة" : "Start as a Family"}
              </h3>
              <p className="mt-2 text-slate-600">
                {locale === "ar" 
                  ? "ادعو أحد الأحباء، اضبط التذكيرات، وفعّل تنبيهات SOS."
                  : "Invite a loved one, set reminders, and enable SOS alerts."
                }
              </p>
            </a>
            <a 
              href={`/${locale}/doctors`} 
              className="card p-6 hover:shadow-xl transition"
              onClick={() => trackEvents.ctaPartnerInquiry('doctors', locale)}
            >
              <h3 className="text-xl font-bold">
                {locale === "ar" ? "شركاء الرعاية الصحية" : "Healthcare Partners"}
              </h3>
              <p className="mt-2 text-slate-600">
                {locale === "ar"
                  ? "العيادات والمستشفيات: حسّن الالتزام والسلامة."
                  : "Clinics & hospitals: improve adherence and safety."
                }
              </p>
            </a>
          </div>
        </div>
      </section>

      <Pricing locale={locale} />
    </main>
  );
}
