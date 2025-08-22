import Navbar from '@/components/Navbar';
import SiteFooterAr from '../../components/SiteFooterAr';
import Image from 'next/image';

export const metadata = { title: 'شركاؤنا — CareAI' };

export default function PartnersArPage() {
  const partners = [
    {
      name: 'المستشفيات وأنظمة الرعاية الصحية',
      image: '/images/Hospital.png',
      description: 'مؤسسات رعاية صحية رائدة تستفيد من الذكاء الاصطناعي لتحسين رعاية المرضى'
    },
    {
      name: 'شركات التأمين',
      image: '/images/Insurance.png',
      description: 'شركات تأمين مبتكرة تركز على الرعاية الوقائية وتقليل التكاليف'
    },
    {
      name: 'الصيدليات',
      image: '/images/Pharmacies.png',
      description: 'سلاسل صيدليات تدمج إدارة الأدوية والمراقبة الصحية'
    },
    {
      name: 'مقدمو المساعدة بالذكاء الاصطناعي',
      image: '/images/AI_Assistance.png',
      description: 'شركاء تقنيون يتقدمون بحلول الرعاية الصحية المدعومة بالذكاء الاصطناعي'
    },
    {
      name: 'شبكات مقدمي الرعاية',
      image: '/images/Caregiver.png',
      description: 'منظمات مقدمي الرعاية المحترفين تعزز تقديم الخدمات'
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
              شركاؤنا
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              نعمل مع منظمات الرعاية الصحية الرائدة لتحسين نتائج المرضى من خلال الذكاء الاصطناعي
            </p>
          </div>

          {/* Partner Showcase */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              موثوق بنا من قادة الصناعة
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
                انضم إلينا كشريك
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                نبحث بنشاط عن شركاء تجريبيين: الأطباء، مجتمعات المسنين، شركات التأمين، وأنظمة الرعاية الصحية. إذا كنت مهتماً بتصميم الميزات أو تقييم النتائج، نود التحدث معك.
              </p>
              <div className="flex justify-center">
                <a
                  href="/ar/contact"
                  className="inline-block px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold border-2 border-slate-300 hover:bg-slate-50 transition-colors"
                >
                  تواصل معنا
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooterAr />
    </>
  );
}
