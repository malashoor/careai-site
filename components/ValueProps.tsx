import { dictionary } from "@/lib/dictionary";

interface ValuePropsProps {
  locale: "en" | "ar";
  type: "doctors" | "hospitals" | "insurance" | "charities";
}

export default function ValueProps({ locale, type }: ValuePropsProps) {
  const i = dictionary[locale];
  const partner = i.partners[type];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {locale === "ar" ? "لماذا تختار كيرAI؟" : "Why Choose CareAI?"}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {locale === "ar"
              ? "حلول مدعومة بالذكاء الاصطناعي مصممة خصيصاً لاحتياجاتك"
              : "AI-powered solutions designed specifically for your needs"
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partner.valueProps.map((prop, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-slate-700 font-medium">{prop}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
