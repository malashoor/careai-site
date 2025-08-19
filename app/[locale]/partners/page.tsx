"use client";

import { dictionary } from "@/lib/dictionary";
import { trackEvents } from "@/lib/analytics";

export default function PartnersPage({ params: { locale } }: { params: { locale: "en" | "ar" } }) {
  const i = dictionary[locale];

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {locale === "ar" ? "شركاؤنا" : "Our Partners"}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {locale === "ar"
              ? "نعمل مع منظمات الرعاية الصحية الرائدة لتحسين نتائج المرضى"
              : "Working with leading healthcare organizations to improve patient outcomes"
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            href={`/${locale}/doctors`}
            className="group block p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-200"
            onClick={() => trackEvents.pageView('doctors', locale)}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {locale === "ar" ? "الأطباء" : "Doctors"}
              </h3>
              <p className="text-slate-600 text-sm">
                {locale === "ar"
                  ? "تحسين الالتزام بالأدوية والرعاية الوقائية"
                  : "Improve medication adherence and preventive care"
                }
              </p>
            </div>
          </a>

          <a
            href={`/${locale}/hospitals`}
            className="group block p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-200"
            onClick={() => trackEvents.pageView('hospitals', locale)}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {locale === "ar" ? "المستشفيات" : "Hospitals"}
              </h3>
              <p className="text-slate-600 text-sm">
                {locale === "ar"
                  ? "تقليل إعادة القبول وتحسين رعاية ما بعد الخروج"
                  : "Reduce readmissions and improve post-discharge care"
                }
              </p>
            </div>
          </a>

          <a
            href={`/${locale}/insurance`}
            className="group block p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-200"
            onClick={() => trackEvents.pageView('insurance', locale)}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {locale === "ar" ? "التأمين" : "Insurance"}
              </h3>
              <p className="text-slate-600 text-sm">
                {locale === "ar"
                  ? "تقليل المطالبات القابلة للتجنب من خلال الالتزام"
                  : "Reduce avoidable claims through better adherence"
                }
              </p>
            </div>
          </a>

          <a
            href={`/${locale}/charities`}
            className="group block p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-200"
            onClick={() => trackEvents.pageView('charities', locale)}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {locale === "ar" ? "الجمعيات الخيرية" : "Charities"}
              </h3>
              <p className="text-slate-600 text-sm">
                {locale === "ar"
                  ? "مقاعد مدعومة ودعم متعدد اللغات"
                  : "Sponsored seats and multilingual support"
                }
              </p>
            </div>
          </a>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            {locale === "ar"
              ? "هل أنت مهتم بالشراكة معنا؟"
              : "Interested in partnering with us?"
            }
          </p>
          <a
            href={`/${locale}/doctors`}
            className="inline-block px-8 py-4 bg-brand-600 text-white rounded-2xl font-semibold hover:bg-brand-700 transition-colors"
            onClick={() => trackEvents.ctaPartnerInquiry('general', locale)}
          >
            {locale === "ar" ? "ابدأ المحادثة" : "Start the Conversation"}
          </a>
        </div>
      </div>
    </main>
  );
}
