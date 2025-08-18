import { type Locale } from "@/lib/i18n";
import { dictionary } from "@/lib/dictionary";

interface WorkflowDiagramProps {
  locale: Locale;
  type: "doctors" | "hospitals" | "insurance" | "charities";
}

export default function WorkflowDiagram({ locale, type }: WorkflowDiagramProps) {
  const i = dictionary[locale];
  const partner = i.partners[type];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            How It Works
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {partner.workflow.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-brand-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                {index < partner.workflow.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-brand-200 transform translate-x-1/2">
                    <div className="w-2 h-2 bg-brand-600 rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
