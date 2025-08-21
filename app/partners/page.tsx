import Navbar from '@/components/Navbar';
import SiteFooter from '../components/SiteFooter';
import Image from 'next/image';

export const metadata = { title: 'Our Partners — CareAI' };

export default function PartnersPage() {
  const partners = [
    {
      name: 'Hospitals & Health Systems',
      image: '/images/Hospital.png',
      description: 'Leading healthcare institutions leveraging AI for patient care optimization'
    },
    {
      name: 'Insurance Providers',
      image: '/images/Insurance.png',
      description: 'Innovative insurance companies focused on preventive care and cost reduction'
    },
    {
      name: 'Pharmacies',
      image: '/images/Pharmacies.png',
      description: 'Pharmacy chains integrating medication management and health monitoring'
    },
    {
      name: 'AI Assistance Providers',
      image: '/images/AI_Assistance.png',
      description: 'Technology partners advancing AI-powered healthcare solutions'
    },
    {
      name: 'Caregiver Networks',
      image: '/images/Caregiver.png',
      description: 'Professional caregiver organizations enhancing service delivery'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Working with leading healthcare organizations to improve patient outcomes through AI-powered solutions
            </p>
          </div>

          {/* Partner Showcase */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Trusted by Industry Leaders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-black/5 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-48 h-48 mb-4 flex items-center justify-center">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={192}
                        height={192}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Partnership CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Partner With Us
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                We're actively seeking pilot partners: clinicians, senior living communities, payers, and health systems. If you're interested in co-designing features or evaluating outcomes, we'd love to talk.
              </p>
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold border-2 border-slate-300 hover:bg-slate-50 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
