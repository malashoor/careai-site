import { type Locale } from "@/lib/i18n";
import { dictionary } from "@/lib/dictionary";

interface CaseStudyProps {
  locale: Locale;
}

export default function CaseStudy({ locale }: CaseStudyProps) {
  const i = dictionary[locale];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-r from-brand-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Success Story
            </h2>
            <p className="text-lg text-slate-600">
              See how leading healthcare organizations are transforming patient care with CareAI
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🏥</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  City General Hospital
                </h3>
                <p className="text-slate-600">500+ bed facility</p>
              </div>
            </div>
            
            <div className="space-y-4 text-slate-700">
              <p>
                "CareAI helped us reduce diagnostic errors by 35% and improve patient satisfaction scores significantly. 
                The AI-powered workflow automation has streamlined our operations across all departments."
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-600">35%</div>
                  <div className="text-sm text-slate-600">Fewer errors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-600">40%</div>
                  <div className="text-sm text-slate-600">Faster processing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-600">25%</div>
                  <div className="text-sm text-slate-600">Cost reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-600">4.8/5</div>
                  <div className="text-sm text-slate-600">Patient satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
