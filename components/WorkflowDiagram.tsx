import { dictionary } from "@/lib/dictionary";

interface WorkflowDiagramProps {
  locale: "en" | "ar";
  type: "doctors" | "hospitals" | "insurance" | "charities";
}

export default function WorkflowDiagram({ locale, type }: WorkflowDiagramProps) {
  const i = dictionary[locale];
  const partner = i.partners[type];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {locale === "ar" ? "كيف يعمل" : "How It Works"}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {locale === "ar"
              ? "عملية بسيطة ومباشرة لبدء استخدام كيرAI"
              : "Simple, straightforward process to get started with CareAI"
            }
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {partner.workflow.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-brand-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {index + 1}
                </div>
                {index < partner.workflow.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-brand-300 transform translate-x-1/2"></div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
