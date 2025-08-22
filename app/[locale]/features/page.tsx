"use client";

import { dictionary } from "../../lib/dictionary";
import { type Locale } from "../../lib/i18n";

interface FeaturesPageProps {
  params: {
    locale: Locale;
  };
}

export default function FeaturesPage({ params }: FeaturesPageProps) {
  const locale = params.locale;
  const i = dictionary[locale];
  const isAR = locale === "ar";

  return (
    <main className="min-h-screen bg-gradient-subtle">
      <section className="mx-auto max-w-wrap px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
            {i.features.title}
          </h1>
          <p className="text-xl text-ink-600 max-w-3xl mx-auto">
            {i.features.subtitle}
          </p>
        </header>

        {/* Features Content */}
        <div className="prose prose-apple mx-auto max-w-4xl">
          <section id="smart-reminders" className="mb-16">
            <h2 className="text-3xl font-bold text-ink-900 mb-4">
              {i.features.items[0]?.title || "Smart Reminders"}
            </h2>
            <p className="text-lg text-ink-600 leading-relaxed">
              {i.features.items[0]?.description || "Never miss a dose with intelligent medication scheduling"}
            </p>
            <div className="mt-6 p-6 bg-white rounded-2xl border border-ink-150">
              <h3 className="text-xl font-semibold text-ink-800 mb-3">
                {isAR ? "المزايا الرئيسية" : "Key Benefits"}
              </h3>
              <ul className="space-y-2 text-ink-600">
                <li>• {isAR ? "تذكيرات ذكية قابلة للتخصيص" : "Customizable smart reminders"}</li>
                <li>• {isAR ? "تكامل مع التقويم" : "Calendar integration"}</li>
                <li>• {isAR ? "تنبيهات متعددة المستويات" : "Multi-level alerts"}</li>
              </ul>
            </div>
          </section>

          <section id="health-monitoring" className="mb-16">
            <h2 className="text-3xl font-bold text-ink-900 mb-4">
              {i.features.items[1]?.title || "Health Monitoring"}
            </h2>
            <p className="text-lg text-ink-600 leading-relaxed">
              {i.features.items[1]?.description || "Track vital signs and health trends over time"}
            </p>
            <div className="mt-6 p-6 bg-white rounded-2xl border border-ink-150">
              <h3 className="text-xl font-semibold text-ink-800 mb-3">
                {isAR ? "المزايا الرئيسية" : "Key Benefits"}
              </h3>
              <ul className="space-y-2 text-ink-600">
                <li>• {isAR ? "تتبع العلامات الحيوية" : "Vital signs tracking"}</li>
                <li>• {isAR ? "تحليل الاتجاهات الصحية" : "Health trend analysis"}</li>
                <li>• {isAR ? "تقارير مفصلة للطبيب" : "Detailed doctor reports"}</li>
              </ul>
            </div>
          </section>

          <section id="emergency-alerts" className="mb-16">
            <h2 className="text-3xl font-bold text-ink-900 mb-4">
              {i.features.items[2]?.title || "Emergency Alerts"}
            </h2>
            <p className="text-lg text-ink-600 leading-relaxed">
              {i.features.items[2]?.description || "Instant SOS notifications to caregivers and family"}
            </p>
            <div className="mt-6 p-6 bg-white rounded-2xl border border-ink-150">
              <h3 className="text-xl font-semibold text-ink-800 mb-3">
                {isAR ? "المزايا الرئيسية" : "Key Benefits"}
              </h3>
              <ul className="space-y-2 text-ink-600">
                <li>• {isAR ? "تنبيهات SOS فورية" : "Instant SOS alerts"}</li>
                <li>• {isAR ? "إشعارات متعددة المستلمين" : "Multi-recipient notifications"}</li>
                <li>• {isAR ? "تكامل مع خدمات الطوارئ" : "Emergency services integration"}</li>
              </ul>
            </div>
          </section>

          <section id="ai-companion" className="mb-16">
            <h2 className="text-3xl font-bold text-ink-900 mb-4">
              {i.features.items[3]?.title || "AI Companion"}
            </h2>
            <p className="text-lg text-ink-600 leading-relaxed">
              {i.features.items[3]?.description || "Friendly AI that provides daily check-ins and support"}
            </p>
            <div className="mt-6 p-6 bg-white rounded-2xl border border-ink-150">
              <h3 className="text-xl font-semibold text-ink-800 mb-3">
                {isAR ? "المزايا الرئيسية" : "Key Benefits"}
              </h3>
              <ul className="space-y-2 text-ink-600">
                <li>• {isAR ? "فحوصات يومية ذكية" : "Smart daily check-ins"}</li>
                <li>• {isAR ? "دعم محادثة طبيعية" : "Natural conversation support"}</li>
                <li>• {isAR ? "تخصيص حسب الاحتياجات" : "Personalization based on needs"}</li>
              </ul>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-ink-900 mb-4">
              {isAR ? "ابدأ رحلتك مع CareAI" : "Start Your CareAI Journey"}
            </h3>
            <p className="text-ink-600 mb-6">
              {isAR 
                ? "انضم إلى آلاف العائلات ومقدمي الرعاية الذين يثقون بنا"
                : "Join thousands of families and caregivers who trust us"
              }
            </p>
            <a 
              href={`/${locale}/contact`}
              className="btn btn-primary"
            >
              {isAR ? "تواصل معنا" : "Contact Us"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
