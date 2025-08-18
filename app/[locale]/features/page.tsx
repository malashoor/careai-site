import Container from "@/components/Container";
import { type Locale } from "@/lib/i18n";
import { dictionary } from "@/lib/dictionary";

export default function FeaturesPage({ params }: { params: { locale: Locale } }) {
  const i = dictionary[params.locale];

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-white py-16 md:py-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              {i.features.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              {i.features.subtitle}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {i.features.items.map((feature, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
