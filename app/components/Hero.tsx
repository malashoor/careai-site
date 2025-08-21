'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero({ locale = 'en' as 'en' | 'ar' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'ko' | 'hi' | 'pt' }) {
  const t = {
    en: {
      h1a: 'AI‑Powered Healthcare',
      h1b: 'Solutions',
      p: 'Transform patient care with intelligent automation, predictive analytics, and seamless integration across healthcare systems.',
      cta1: 'Get Started',
      cta2: 'Learn More',
      trust: ['Safe & Secure', 'Easy to Use', 'Family‑First'],
    },
    ar: {
      h1a: 'حلول الرعاية الصحية المدعومة',
      h1b: 'بالذكاء الاصطناعي',
      p: 'حوّل رعاية المرضى بالذكاء الاصطناعي والتحليلات التنبؤية والتكامل السلس عبر جميع أنظمة الرعاية الصحية.',
      cta1: 'ابدأ الآن',
      cta2: 'اعرف المزيد',
      trust: ['آمن ومُحمي', 'سهل الاستخدام', 'مُصمم للعائلة'],
    },
    es: {
      h1a: 'Soluciones de Salud',
      h1b: 'Impulsadas por IA',
      p: 'Transforma la atención al paciente con automatización inteligente, análisis predictivo e integración perfecta en todos los sistemas de salud.',
      cta1: 'Comenzar',
      cta2: 'Saber Más',
      trust: ['Seguro y Protegido', 'Fácil de Usar', 'Enfocado en la Familia'],
    },
    fr: {
      h1a: 'Solutions de Santé',
      h1b: 'Alimentées par l\'IA',
      p: 'Transformez les soins aux patients avec l\'automatisation intelligente, l\'analyse prédictive et l\'intégration transparente dans tous les systèmes de santé.',
      cta1: 'Commencer',
      cta2: 'En Savoir Plus',
      trust: ['Sûr et Sécurisé', 'Facile à Utiliser', 'Centré sur la Famille'],
    },
    de: {
      h1a: 'KI-gestützte',
      h1b: 'Gesundheitslösungen',
      p: 'Transformieren Sie die Patientenversorgung mit intelligenter Automatisierung, prädiktiver Analytik und nahtloser Integration in alle Gesundheitssysteme.',
      cta1: 'Loslegen',
      cta2: 'Mehr Erfahren',
      trust: ['Sicher & Geschützt', 'Einfach zu Bedienen', 'Familienorientiert'],
    },
    zh: {
      h1a: 'AI驱动的',
      h1b: '医疗解决方案',
      p: '通过智能自动化、预测分析和与所有医疗系统的无缝集成来改变患者护理。',
      cta1: '开始使用',
      cta2: '了解更多',
      trust: ['安全可靠', '易于使用', '以家庭为中心'],
    },
    ja: {
      h1a: 'AI駆動の',
      h1b: 'ヘルスケアソリューション',
      p: 'インテリジェントな自動化、予測分析、すべてのヘルスケアシステムとのシームレスな統合により、患者ケアを変革します。',
      cta1: '始める',
      cta2: '詳しく見る',
      trust: ['安全で保護された', '使いやすい', '家族中心'],
    },
    ko: {
      h1a: 'AI 기반',
      h1b: '의료 솔루션',
      p: '지능형 자동화, 예측 분석 및 모든 의료 시스템과의 원활한 통합으로 환자 치료를 혁신합니다.',
      cta1: '시작하기',
      cta2: '자세히 보기',
      trust: ['안전하고 보호된', '사용하기 쉬운', '가족 중심'],
    },
    hi: {
      h1a: 'AI-संचालित',
      h1b: 'स्वास्थ्य समाधान',
      p: 'बुद्धिमान स्वचालन, भविष्यवाणी विश्लेषण और सभी स्वास्थ्य प्रणालियों के साथ निर्बाध एकीकरण के साथ रोगी देखभाल को बदलें।',
      cta1: 'शुरू करें',
      cta2: 'और जानें',
      trust: ['सुरक्षित और संरक्षित', 'उपयोग में आसान', 'परिवार-केंद्रित'],
    },
    pt: {
      h1a: 'Soluções de Saúde',
      h1b: 'Alimentadas por IA',
      p: 'Transforme o cuidado do paciente com automação inteligente, análise preditiva e integração perfeita em todos os sistemas de saúde.',
      cta1: 'Começar',
      cta2: 'Saber Mais',
      trust: ['Seguro e Protegido', 'Fácil de Usar', 'Focado na Família'],
    },
  }[locale];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {t.h1a}
            <span className="block">{t.h1b}</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-prose">{t.p}</p>
          <div className="mt-8 flex gap-4">
            <Link href="/app" className="rounded-xl bg-blue-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-blue-700">
              {t.cta1}
            </Link>
            <Link href={locale === 'en' ? '/about' : `/${locale}/about`} className="rounded-xl border px-5 py-3 font-semibold hover:bg-gray-50">
              {t.cta2}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-5 w-5 rounded-full bg-emerald-500" />
              {t.trust[0]}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-5 w-5 rounded-full bg-amber-400" />
              {t.trust[1]}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-5 w-5 rounded-full bg-blue-500" />
              {t.trust[2]}
            </span>
          </div>
        </div>

        {/* Visual only (no dashboard overlay) */}
        <div className="relative order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <Image
              src="/images/welcome_ai_hero.png"
              alt={locale === 'ar' ? 'طبيبة مع العائلة' : 
                   locale === 'es' ? 'Doctora con familia' :
                   locale === 'fr' ? 'Médecin avec famille' :
                   locale === 'de' ? 'Ärztin mit Familie' :
                   locale === 'zh' ? '医生与家人' :
                   locale === 'ja' ? '医師と家族' :
                   locale === 'ko' ? '의사와 가족' :
                   locale === 'hi' ? 'डॉक्टर और परिवार' :
                   locale === 'pt' ? 'Médica com família' :
                   'Doctor with family'}
              width={980}
              height={820}
              priority
              sizes="(min-width:1024px) 48vw, 92vw"
              className="w-full h-auto rounded-3xl shadow-2xl ring-1 ring-black/5 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[26rem] w-[70rem] rounded-full bg-gradient-to-br from-blue-100 via-indigo-100 to-transparent blur-3xl" />
    </section>
  );
}
