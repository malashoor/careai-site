import Container from "@/components/Container";
import { t } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export default function OnboardingPage({ params }: { params: { locale: Locale } }) {
  const i = t(params.locale);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              {i.cta.onboarding.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              {i.cta.onboarding.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Signup Form */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Start Your Free Trial</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-slate-700 mb-2">
                    Plan Selection
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  >
                    <option value="starter">Starter - $9/month</option>
                    <option value="family">Family - $19/month</option>
                    <option value="professional">Professional - $39/month</option>
                  </select>
                </div>
                
                <div>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="agree"
                      className="mt-1 w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500"
                      required
                    />
                    <span className="text-sm text-slate-600">
                      I agree to the <a href="/terms" className="text-brand-600 hover:underline">Terms of Service</a> and{" "}
                      <a href="/privacy" className="text-brand-600 hover:underline">Privacy Policy</a>
                    </span>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-600 text-white rounded-2xl font-semibold hover:bg-brand-700 transition-colors"
                >
                  Start Free Trial
                </button>
              </form>
              
              <p className="text-sm text-slate-500 text-center mt-6">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Get</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Full Access</h3>
                <p className="text-slate-600">Try all features during your free trial period</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-slate-600">Get help from our care specialists anytime</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Setup</h3>
                <p className="text-slate-600">Get started in minutes with guided onboarding</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
