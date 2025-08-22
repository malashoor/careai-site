"use client";

import { dictionary } from "../../../lib/dictionary";
import { trackEvents } from "../../../lib/analytics";

export default function PartnersPage({ params: { locale } }: { params: { locale: "en" | "ar" } }) {
  const i = dictionary[locale];
  const isAR = locale === 'ar';

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {isAR ? "شركاؤنا" : "Our Partners"}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {isAR
              ? "نعمل مع منظمات الرعاية الصحية الرائدة لتحسين نتائج المرضى من خلال الذكاء الاصطناعي"
              : "Working with leading healthcare organizations to improve patient outcomes through AI-powered solutions"
            }
          </p>
        </div>

        {/* Partnership CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {isAR ? "انضم إلينا كشريك" : "Partner With Us"}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              {isAR
                ? "نبحث بنشاط عن شركاء تجريبيين: الأطباء، مجتمعات المسنين، شركات التأمين، وأنظمة الرعاية الصحية. إذا كنت مهتماً بتصميم الميزات أو تقييم النتائج، نود التحدث معك."
                : "We're actively seeking pilot partners: clinicians, senior living communities, payers, and health systems. If you're interested in co-designing features or evaluating outcomes, we'd love to talk."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/contact?inquiry=partnership`}
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => trackEvents.ctaPartnerInquiry('general', locale)}
              >
                {isAR ? "ابدأ المحادثة" : "Start the Conversation"}
              </a>
              <a
                href={`/${locale}/contact`}
                className="inline-block px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold border-2 border-slate-300 hover:bg-slate-50 transition-colors"
              >
                {isAR ? "تواصل معنا" : "Contact Us"}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
