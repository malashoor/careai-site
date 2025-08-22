import Navbar from '@/components/Navbar';
import SiteFooter from '../components/SiteFooter';

export const metadata = { title: 'About CareAI — AI-Powered Healthcare Solutions' };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About CareAI
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We are an early-stage startup building safe and useful AI solutions for seniors and caregivers.
            </p>
          </div>

          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Our Mission
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We believe every care team deserves simple, affordable tools that improve safety and quality of life. 
                CareAI combines intelligent conversation with caregiver workflows to reduce complexity and increase 
                adherence — without claiming to replace clinical judgment.
              </p>
            </section>

            {/* Partners invite */}
            <section className="rounded-2xl border p-6 bg-slate-50">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Strategic Partnerships
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We&apos;re looking for partners for pilot programs: doctors, care homes, insurance companies, and health systems. 
                If you&apos;re interested in developing features or measuring outcomes with us, we&apos;d love to connect.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/partners" className="px-5 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors">
                  Organizations
                </a>
                <a href="/contact" className="px-5 py-2 border border-slate-300 rounded-2xl hover:bg-slate-50 transition-colors">
                  Contact Us
                </a>
              </div>
            </section>
          </div>

          {/* Vision */}
          <section className="rounded-2xl border p-8 bg-white">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Our Vision
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We see a future where every senior has a trusted digital companion helping them live independently longer, 
              where families feel secure knowing their loved ones are safe, and where healthcare partners can scale 
              while focusing on the human side of care.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
