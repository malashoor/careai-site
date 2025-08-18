import Container from "@/components/Container";
import { t } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export default function PricingPage({ params }: { params: { locale: Locale } }) {
  const i = t(params.locale);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              {i.pricing.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              {i.pricing.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {i.pricing.tiers.map((tier, idx) => (
              <div 
                key={tier.name} 
                className={`card p-8 relative ${
                  idx === 1 ? "ring-2 ring-brand-500 scale-105" : ""
                }`}
              >
                {idx === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-brand-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span className="text-lg text-slate-500">/mo</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="/onboarding" 
                  className="w-full block text-center px-6 py-3 bg-brand-600 text-white rounded-2xl font-semibold hover:bg-brand-700 transition-colors"
                >
                  Choose plan
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>



      {/* FAQ Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">Can I change plans anytime?</h3>
                <p className="text-slate-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">Is there a free trial?</h3>
                <p className="text-slate-600">Absolutely! Start with a 14-day free trial. No credit card required.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">What payment methods do you accept?</h3>
                <p className="text-slate-600">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
