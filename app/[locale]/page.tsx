import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/dictionary";
import Container from "@/components/Container";

export default function Home({ params }: { params: { locale: Locale } }) {
  const i = t(params.locale);
  
  return (
    <>
      <Hero locale={params.locale} />
      <Features locale={params.locale} />
      <Pricing locale={params.locale} />
      
      {/* CTA Section - Onboarding */}
      <section className="py-16 bg-brand-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {i.cta.onboarding.title}
            </h2>
            <p className="text-xl text-brand-100 mb-8">
              {i.cta.onboarding.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`/${params.locale}/onboarding`} 
                className="px-8 py-4 bg-white text-brand-600 rounded-2xl font-semibold hover:bg-brand-50 transition-colors"
              >
                {i.cta.onboarding.title}
              </a>
              <a 
                href={`/${params.locale}/contact`} 
                className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-brand-600 transition-colors"
              >
                Schedule demo
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section - Partners */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {i.cta.partners.title}
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              {i.cta.partners.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`/${params.locale}/partners`} 
                className="px-8 py-4 bg-brand-600 text-white rounded-2xl font-semibold hover:bg-brand-700 transition-colors"
              >
                {i.cta.partners.primary}
              </a>
              <a 
                href={`/${params.locale}/about`} 
                className="px-8 py-4 border-2 border-brand-600 text-brand-600 rounded-2xl font-semibold hover:bg-brand-600 hover:text-white transition-colors"
              >
                {i.cta.partners.secondary}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
