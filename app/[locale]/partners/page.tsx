import Container from "@/components/Container";
import { dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export default function PartnersPage({ params }: { params: { locale: Locale } }) {
  const i = dictionary[params.locale];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Partner with CareAI
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Join our network of healthcare providers and senior living communities
            </p>
          </div>
        </Container>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Partner with CareAI?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Enhanced Care Delivery</h3>
                <p className="text-slate-600">
                  Provide 24/7 AI-powered support to your residents, reducing staff workload and improving outcomes.
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Data & Analytics</h3>
                <p className="text-slate-600">
                  Access comprehensive insights into resident health patterns and care effectiveness.
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Family Engagement</h3>
                <p className="text-slate-600">
                  Keep families informed and connected with real-time updates and communication tools.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Partnership Options</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-4">Healthcare Providers</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Custom integration with existing systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>HIPAA-compliant data handling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Staff training and support</span>
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="inline-block px-6 py-3 bg-brand-600 text-white rounded-2xl font-semibold hover:bg-brand-700 transition-colors"
                >
                  Learn More
                </a>
              </div>
              
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-4">Senior Living Communities</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>White-label branding options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Resident onboarding support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>24/7 technical support</span>
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="inline-block px-6 py-3 bg-brand-600 text-white rounded-2xl font-semibold hover:bg-brand-700 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Partner with Us</h2>
              
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
                  <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    required
                  />
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
                  <label htmlFor="partnershipType" className="block text-sm font-medium text-slate-700 mb-2">
                    Partnership Type
                  </label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  >
                    <option value="">Select partnership type</option>
                    <option value="healthcare">Healthcare Provider</option>
                    <option value="senior-living">Senior Living Community</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="Tell us about your organization and partnership goals..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-600 text-white rounded-2xl font-semibold hover:bg-brand-700 transition-colors"
                >
                  Send Partnership Request
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
