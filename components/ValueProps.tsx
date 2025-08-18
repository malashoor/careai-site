import { type Locale } from "@/lib/i18n";
import { dictionary } from "@/lib/dictionary";

interface ValuePropsProps {
  locale: Locale;
  type: "doctors" | "hospitals" | "insurance" | "charities";
}

export default function ValueProps({ locale, type }: ValuePropsProps) {
  const i = dictionary[locale];
  const partner = i.partners[type];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why Choose CareAI?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {partner.valueProps.map((prop, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {prop.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
