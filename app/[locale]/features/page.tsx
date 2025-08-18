import Container from "@/components/Container";
import { t } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export default function FeaturesPage({ params }: { params: { locale: Locale } }) {
  const i = t(params.locale);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
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

      {/* Features Grid */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {i.features.items.map((feature, index) => (
              <div key={feature.title} className="card p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <img
                      src={feature.icon}
                      alt={`${feature.title} icon`}
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to experience CareAI?
            </h2>
            <p className="text-xl text-brand-100 mb-8">
              Join thousands of families who trust CareAI for their loved ones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/onboarding" 
                className="px-8 py-4 bg-white text-brand-600 rounded-2xl font-semibold hover:bg-brand-50 transition-colors"
              >
                Start free trial
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-brand-600 transition-colors"
              >
                Schedule demo
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
