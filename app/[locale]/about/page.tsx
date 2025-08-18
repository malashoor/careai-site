import Container from "@/components/Container";
import { t } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const i = t(params.locale);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              {i.about.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              {i.about.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="card p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {i.about.mission.title}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {i.about.mission.content}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {i.about.team.title}
            </h2>
            <p className="text-xl text-slate-600">
              {i.about.team.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {i.about.team.members.map((member) => (
              <div key={member.name} className="card p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-24 h-24 bg-brand-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-brand-600 font-semibold mb-3">{member.role}</p>
                <p className="text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {i.about.partners.title}
            </h2>
            <p className="text-xl text-slate-600">
              {i.about.partners.subtitle}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {/* Placeholder partner logos */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 bg-slate-200 rounded-lg flex items-center justify-center">
                  <span className="text-slate-500 font-medium">Partner {i}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the CareAI Mission
            </h2>
            <p className="text-xl text-brand-100 mb-8">
              Whether you're a family member, healthcare provider, or potential partner, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white text-brand-600 rounded-2xl font-semibold hover:bg-brand-50 transition-colors"
              >
                Get in touch
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-brand-600 transition-colors"
              >
                View pricing
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
