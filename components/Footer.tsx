import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import FooterLegalLinks from "./FooterLegalLinks";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  // Footer text dictionary for all supported languages
  const footerText = {
    en: {
      tagline: "AI companion for seniors and caregivers. Medication reminders, health check-ins, and SOS alerts.",
      getStarted: "Get Started",
      contactUs: "Contact Us",
      features: "Features",
      about: "About",
      partners: "Partners",
      allPartners: "All Partners",
      transparency: "CareAI is an early-stage company. Product claims do not constitute medical advice or replace emergency services.",
      importantNotice: "Important Notice",
      compliance: "CareAI is not a medical device or a substitute for emergency services. Always consult with a qualified healthcare provider for medical advice.",
      rights: "All rights reserved"
    },
    ar: {
      tagline: "رفيق الذكاء الاصطناعي لكبار السن ومقدمي الرعاية. تذكيرات الأدوية، فحوصات الصحة، وتنبيهات SOS.",
      getStarted: "ابدأ الآن",
      contactUs: "تواصل معنا",
      features: "المميزات",
      about: "حول",
      partners: "الشركاء",
      allPartners: "جميع الشركاء",
      transparency: "CareAI هي شركة ناشئة في مرحلة مبكرة. لا تشكل ادعاءات المنتج استشارة طبية أو بديلاً عن خدمات الطوارئ.",
      importantNotice: "تنبيه مهم",
      compliance: "كيرAI ليس جهازاً طبياً ولا بديلاً عن خدمات الطوارئ. استشر دائماً مقدم الرعاية الصحية المؤهل للحصور على المشورة الطبية.",
      rights: "جميع الحقوق محفوظة"
    },
    es: {
      tagline: "Compañero de IA para adultos mayores y cuidadores. Recordatorios de medicamentos, controles de salud y alertas SOS.",
      getStarted: "Comenzar",
      contactUs: "Contáctanos",
      features: "Características",
      about: "Acerca de",
      partners: "Socios",
      allPartners: "Todos los Socios",
      transparency: "CareAI es una empresa en etapa temprana. Las afirmaciones del producto no constituyen asesoramiento médico ni reemplazan los servicios de emergencia.",
      importantNotice: "Aviso Importante",
      compliance: "CareAI no es un dispositivo médico ni un substituto de los servicios de emergencia. Siempre consulte con un proveedor de atención médica calificado para obtener asesoramiento médico.",
      rights: "Todos los derechos reservados"
    },
    fr: {
      tagline: "Compagnon IA pour les seniors et les soignants. Rappels de médicaments, contrôles de santé et alertes SOS.",
      getStarted: "Commencer",
      contactUs: "Contactez-nous",
      features: "Fonctionnalités",
      about: "À propos",
      partners: "Partenaires",
      allPartners: "Tous les Partenaires",
      transparency: "CareAI est une entreprise en phase précoce. Les allégations du produit ne constituent pas des conseils médicaux et ne remplacent pas les services d'urgence.",
      importantNotice: "Avis Important",
      compliance: "CareAI n'est pas un dispositif médical ni un substitut aux services d'urgence. Consultez toujours un fournisseur de soins de santé qualifié pour obtenir des conseils médicaux.",
      rights: "Tous droits réservés"
    },
    de: {
      tagline: "KI-Begleiter für Senioren und Pflegekräfte. Medikamentenerinnerungen, Gesundheitschecks und SOS-Alarme.",
      getStarted: "Jetzt Starten",
      contactUs: "Kontaktieren Sie uns",
      features: "Funktionen",
      about: "Über uns",
      partners: "Partner",
      allPartners: "Alle Partner",
      transparency: "CareAI ist ein Unternehmen in der Frühphase. Produktansprüche stellen keine medizinische Beratung dar und ersetzen keine Notfalldienste.",
      importantNotice: "Wichtiger Hinweis",
      compliance: "CareAI ist kein medizinisches Gerät und kein Ersatz für Notfalldienste. Konsultieren Sie immer einen qualifizierten Gesundheitsdienstleister für medizinische Beratung.",
      rights: "Alle Rechte vorbehalten"
    },
    zh: {
      tagline: "面向老年人和护理人员的AI伴侣。药物提醒、健康检查和SOS警报。",
      getStarted: "立即开始",
      contactUs: "联系我们",
      features: "功能特色",
      about: "关于我们",
      partners: "合作伙伴",
      allPartners: "所有合作伙伴",
      transparency: "CareAI是一家早期阶段的公司。产品声明不构成医疗建议或替代紧急服务。",
      importantNotice: "重要通知",
      compliance: "CareAI不是医疗设备，也不是紧急服务的替代品。始终咨询合格的医疗保健提供者以获得医疗建议。",
      rights: "版权所有"
    },
    ja: {
      tagline: "高齢者と介護者のためのAIコンパニオン。薬のリマインダー、健康チェック、SOSアラート。",
      getStarted: "今すぐ始める",
      contactUs: "お問い合わせ",
      features: "機能",
      about: "会社概要",
      partners: "パートナー",
      allPartners: "すべてのパートナー",
      transparency: "CareAIは初期段階の企業です。製品の主張は医療アドバイスを構成するものではなく、緊急サービスの代替となるものではありません。",
      importantNotice: "重要な通知",
      compliance: "CareAIは医療機器ではなく、緊急サービスの代替品でもありません。医療アドバイスについては、常に資格のある医療提供者に相談してください。",
      rights: "全著作権所有"
    },
    ko: {
      tagline: "노인과 간병인을 위한 AI 동반자. 약물 알림, 건강 체크, SOS 경고.",
      getStarted: "지금 시작하기",
      contactUs: "문의하기",
      features: "기능",
      about: "회사 소개",
      partners: "파트너",
      allPartners: "모든 파트너",
      transparency: "CareAI는 초기 단계 기업입니다. 제품 주장은 의학적 조언을 구성하지 않으며 응급 서비스를 대체하지 않습니다.",
      importantNotice: "중요한 공지",
      compliance: "CareAI는 의료 기기가 아니며 응급 서비스의 대체품이 아닙니다. 의학적 조언을 위해서는 항상 자격 있는 의료 제공자와 상담하세요.",
      rights: "모든 권리 보유"
    },
    hi: {
      tagline: "वरिष्ठ नागरिकों और देखभाल करने वालों के लिए AI साथी। दवा अनुस्मारक, स्वास्थ्य जांच, और SOS अलर्ट।",
      getStarted: "अभी शुरू करें",
      contactUs: "हमसे संपर्क करें",
      features: "सुविधाएं",
      about: "हमारे बारे में",
      partners: "साझेदार",
      allPartners: "सभी साझेदार",
      transparency: "CareAI एक प्रारंभिक चरण की कंपनी है। उत्पाद के दावे चिकित्सीय सलाह नहीं देते और आपातकालीन सेवाओं का विकल्प नहीं हैं।",
      importantNotice: "महत्वपूर्ण सूचना",
      compliance: "CareAI एक चिकित्सीय उपकरण नहीं है और आपातकालीन सेवाओं का विकल्प नहीं है। चिकित्सीय सलाह के लिए हमेशा योग्य स्वास्थ्य सेवा प्रदाता से परामर्श लें।",
      rights: "सर्वाधिकार सुरक्षित"
    },
    pt: {
      tagline: "Companheiro de IA para idosos e cuidadores. Lembretes de medicamentos, verificações de saúde e alertas SOS.",
      getStarted: "Começar Agora",
      contactUs: "Entre em Contato",
      features: "Recursos",
      about: "Sobre Nós",
      partners: "Parceiros",
      allPartners: "Todos os Parceiros",
      transparency: "CareAI é uma empresa em estágio inicial. As afirmações do produto não constituem aconselhamento médico nem substituem serviços de emergência.",
      importantNotice: "Aviso Importante",
      compliance: "CareAI não é um dispositivo médico nem um substituto para serviços de emergência. Sempre consulte um provedor de saúde qualificado para aconselhamento médico.",
      rights: "Todos os direitos reservados"
    }
  };

  const t = footerText[locale] || footerText.en;

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">CareAI</h3>
            <p className="text-slate-300 mb-4 max-w-md">
              {t.tagline}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Link href="/app" className="btn btn-primary">
                {t.getStarted}
              </Link>
              <Link href={`/${locale}/contact`} className="btn btn-primary">
                {t.contactUs}
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t.features}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/features`} className="text-slate-300 hover:text-white transition-colors">
                  {t.features}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-slate-300 hover:text-white transition-colors">
                  {t.about}
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.partners}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/partners`} className="text-slate-300 hover:text-white transition-colors">
                  {t.allPartners}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Transparency Note */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-slate-400 text-xs leading-relaxed max-w-3xl mx-auto">
              {t.transparency}
            </p>
          </div>
        </div>

        {/* Compliance Disclaimer */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-slate-400 text-sm font-medium mb-2">
              ⚠️ {t.importantNotice}
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-3xl mx-auto">
              {t.compliance}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 CareAI. {t.rights}.
          </p>
          <FooterLegalLinks locale={locale} />
        </div>
      </div>
    </footer>
  );
}
