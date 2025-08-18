import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import { type Locale } from "@/lib/i18n";
import { dictionary } from "@/lib/dictionary";
import Container from "@/components/Container";

export default function Home({ params }: { params: { locale: Locale } }) {
  const i = dictionary[params.locale];
  
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
              {i.onboarding.title}
            </h2>
            <p className="text-xl text-brand-100 mb-8">
              {i.onboarding.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`/${params.locale}/onboarding`} 
                className="px-8 py-4 bg-white text-brand-600 rounded-2xl font-semibold hover:bg-brand-50 transition-colors"
              >
                {i.onboarding.title}
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


    </>
  );
}
