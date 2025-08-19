import { dictionary } from "@/lib/dictionary";

interface CaseStudyProps {
  locale: "en" | "ar";
}

export default function CaseStudy({ locale }: CaseStudyProps) {
  const i = dictionary[locale];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {locale === "ar" ? "دراسة حالة" : "Case Study"}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {locale === "ar"
                ? "انظر كيف يساعد كيرAI المنظمات على تحسين رعاية المرضى"
                : "See how CareAI helps organizations improve patient care"
              }
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏥</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {locale === "ar" ? "مستشفى المدينة الطبية" : "City Medical Hospital"}
                </h3>
                <p className="text-slate-600 text-sm">
                  {locale === "ar" ? "نظام رعاية صحية متعدد المواقع" : "Multi-site healthcare system"}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600 mb-2">30%</div>
                <p className="text-slate-600 text-sm">
                  {locale === "ar" ? "انخفاض في إعادة القبول" : "Reduction in readmissions"}
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600 mb-2">45%</div>
                <p className="text-slate-600 text-sm">
                  {locale === "ar" ? "تحسن في الالتزام بالأدوية" : "Improvement in medication adherence"}
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600 mb-2">60%</div>
                <p className="text-slate-600 text-sm">
                  {locale === "ar" ? "زيادة في رضا العائلة" : "Increase in family satisfaction"}
                </p>
              </div>
            </div>

            <blockquote className="text-slate-700 italic border-l-4 border-brand-500 pl-4">
              {locale === "ar"
                ? "ساعد كيرAI في تحويل رعاية المرضى لدينا. العائلات أكثر اطمئناناً، والمرضى أكثر التزاماً، وفريقنا أكثر كفاءة."
                : "CareAI has helped transform our patient care. Families are more reassured, patients are more compliant, and our team is more efficient."
              }
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
