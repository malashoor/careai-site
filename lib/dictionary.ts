import type { Locale } from "./i18n";

const dict = {
  en: {
    metaTitle: "CareAI — Compassionate AI for Seniors",
    nav: { 
      home: "Home", 
      features: "Features", 
      pricing: "Pricing", 
      about: "About", 
      contact: "Contact", 
      getStarted: "Get started" 
    },
    hero: {
      title: "Companionship, reminders, and safety — powered by AI",
      subtitle: "CareAI supports seniors with friendly conversations, medication reminders, and an SOS that alerts family and caregivers.",
      ctaPrimary: "Start free trial",
      ctaSecondary: "See how it works"
    },
    features: {
      title: "Why CareAI",
      subtitle: "Comprehensive care support that adapts to your needs",
      items: [
        { title: "AI Companion", desc: "Choose a friendly voice that speaks like a child or a friend.", icon: "/images/AI_Assistance.png" },
        { title: "Medication Reminders", desc: "Timely, voice-based reminders with caregiver notifications.", icon: "/images/notification-icon.png" },
        { title: "Health Check-ins", desc: "Daily summaries and gentle prompts for hydration and activity.", icon: "/images/health_icons/heart.png" },
        { title: "Emergency SOS", desc: "One tap or voice command to alert family and providers.", icon: "/images/emergency_icons/emergency.png" }
      ],
      cta: "Explore all features",
      ctaLink: "/en/features"
    },
    pricing: {
      title: "Simple, transparent pricing",
      subtitle: "Choose the plan that fits your family's needs",
      monthly: "Monthly",
      mostPopular: "Most popular",
      tiers: [
        { name: "Starter", price: "$9", features: ["AI companion", "Daily reminders", "Basic support", "Mobile app access"] },
        { name: "Family", price: "$19", features: ["Everything in Starter", "Family dashboard", "Priority support", "Care team alerts"] },
        { name: "Professional", price: "$39", features: ["Everything in Family", "Advanced analytics", "Export reports", "Custom integrations"] }
      ],
      enterprise: {
        title: "Enterprise Solutions",
        subtitle: "Custom deployments for healthcare providers and senior living communities",
        cta: "Contact Enterprise",
        features: ["White-label options", "API access", "Dedicated support", "Custom training"]
      },
      cta: "Start free trial",
      ctaLink: "/en/onboarding"
    },
    about: {
      title: "About CareAI",
      subtitle: "Empowering seniors with compassionate technology",
      mission: {
        title: "Our Mission",
        content: "We believe every senior deserves dignity, independence, and connection. CareAI combines cutting-edge AI with human-centered design to create technology that truly serves our aging population."
      },
      team: {
        title: "Our Team",
        subtitle: "Healthcare experts, AI researchers, and compassionate designers",
        members: [
          { name: "Dr. Sarah Chen", role: "Chief Medical Officer", bio: "20+ years in geriatric care" },
          { name: "Marcus Rodriguez", role: "Head of AI", bio: "Former Google Health researcher" },
          { name: "Aisha Patel", role: "UX Director", bio: "Specialist in accessible design" }
        ]
      },
      partners: {
        title: "Trusted by Leading Organizations",
        subtitle: "Partnering with healthcare providers and senior living communities"
      }
    },
    contact: { 
      title: "Contact us", 
      subtitle: "Questions, partnerships, or press — we'd love to hear from you.", 
      submit: "Send message" 
    },
    footer: { 
      rights: "All rights reserved.",
      links: {
        features: "Features",
        pricing: "Pricing", 
        about: "About",
        contact: "Contact",
        privacy: "Privacy",
        terms: "Terms"
      }
    },
    cta: {
      onboarding: {
        title: "Ready to get started?",
        subtitle: "Join thousands of families who trust CareAI",
        primary: "Start free trial",
        secondary: "Schedule demo"
      },
      partners: {
        title: "Partner with CareAI",
        subtitle: "Join our network of healthcare providers and senior living communities",
        primary: "Become a partner",
        secondary: "Learn more"
      }
    }
  },
  ar: {
    metaTitle: "كيرAI — رفيق ذكي لكبار السن",
    nav: { 
      home: "الرئيسية", 
      features: "المزايا", 
      pricing: "الأسعار", 
      about: "من نحن", 
      contact: "اتصل بنا", 
      getStarted: "ابدأ الآن" 
    },
    hero: {
      title: "مرافقة وتذكيرات وسلامة — مدعومة بالذكاء الاصطناعي",
      subtitle: "يدعم CareAI كبار السن بمحادثات ودية وتذكيرات بالأدوية وميزة طوارئ تنبه العائلة ومقدمي الرعاية.",
      ctaPrimary: "ابدأ التجربة المجانية",
      ctaSecondary: "اكتشف المزايا"
    },
    features: {
      title: "لماذا كيرAI",
      subtitle: "دعم رعاية شامل يتكيف مع احتياجاتك",
      items: [
        { title: "رفيق ذكي", desc: "اختر صوتًا ودودًا يتحدث كابن أو صديق.", icon: "/images/AI_Assistance.png" },
        { title: "تذكيرات الأدوية", desc: "تذكيرات صوتية في الوقت المناسب مع تنبيهات للمقدّمين.", icon: "/images/notification-icon.png" },
        { title: "متابعة صحية", desc: "ملخصات يومية وتلميحات لطيفة للترطيب والنشاط.", icon: "/images/health_icons/heart.png" },
        { title: "طوارئ SOS", desc: "لمسة واحدة أو أمر صوتي لتنبيه العائلة والفريق الطبي.", icon: "/images/emergency_icons/emergency.png" },
      ],
      cta: "استكشف جميع المزايا",
      ctaLink: "/ar/features"
    },
    pricing: {
      title: "أسعار واضحة وبسيطة",
      subtitle: "اختر الخطة التي تناسب احتياجات عائلتك",
      monthly: "شهري",
      mostPopular: "الأكثر شعبية",
      tiers: [
        { name: "المبدئي", price: "$9", features: ["رفيق ذكي", "تذكيرات يومية", "دعم أساسي", "وصول للتطبيق"] },
        { name: "العائلة", price: "$19", features: ["كل ما في المبدئي", "لوحة للعائلة", "دعم أولوية", "تنبيهات الفريق"] },
        { name: "المحترفون", price: "$39", features: ["كل ما في العائلة", "تحليلات متقدمة", "تصدير التقارير", "تكامل مخصص"] }
      ],
      enterprise: {
        title: "حلول المؤسسات",
        subtitle: "نشر مخصص لمقدمي الرعاية الصحية ومجتمعات كبار السن",
        cta: "اتصل بالمؤسسات",
        features: ["خيارات العلامة البيضاء", "وصول API", "دعم مخصص", "تدريب مخصص"]
      },
      cta: "ابدأ التجربة المجانية",
      ctaLink: "/ar/onboarding"
    },
    about: {
      title: "عن كيرAI",
      subtitle: "تمكين كبار السن بتقنية رحيمة",
      mission: {
        title: "مهمتنا",
        content: "نؤمن بأن كل كبير سن يستحق الكرامة والاستقلالية والاتصال. يجمع CareAI بين الذكاء الاصطناعي المتطور والتصميم المرتكز على الإنسان لإنشاء تقنية تخدم حقاً شيخوخة السكان."
      },
      team: {
        title: "فريقنا",
        subtitle: "خبراء الرعاية الصحية وباحثو الذكاء الاصطناعي والمصممون الرحيمون",
        members: [
          { name: "د. سارة تشين", role: "الرئيس الطبي", bio: "20+ سنة في رعاية المسنين" },
          { name: "ماركوس رودريغيز", role: "رئيس الذكاء الاصطناعي", bio: "باحث سابق في Google Health" },
          { name: "عائشة باتيل", role: "مدير تجربة المستخدم", bio: "متخصصة في التصميم المتاح" }
        ]
      },
      partners: {
        title: "موثوق به من قبل المنظمات الرائدة",
        subtitle: "شراكة مع مقدمي الرعاية الصحية ومجتمعات كبار السن"
      }
    },
    contact: { 
      title: "اتصل بنا", 
      subtitle: "أسئلة أو شراكات أو إعلام — يسعدنا تواصلك.", 
      submit: "إرسال" 
    },
    footer: { 
      rights: "جميع الحقوق محفوظة.",
      links: {
        features: "المزايا",
        pricing: "الأسعار", 
        about: "من نحن",
        contact: "اتصل بنا",
        privacy: "الخصوصية",
        terms: "الشروط"
      }
    },
    cta: {
      onboarding: {
        title: "مستعد للبدء؟",
        subtitle: "انضم إلى آلاف العائلات التي تثق بـ CareAI",
        primary: "ابدأ التجربة المجانية",
        secondary: "جدولة عرض توضيحي"
      },
      partners: {
        title: "شراكة مع كيرAI",
        subtitle: "انضم إلى شبكتنا من مقدمي الرعاية الصحية ومجتمعات كبار السن",
        primary: "كن شريكاً",
        secondary: "اعرف المزيد"
      }
    }
  }
} as const;

export function t(locale: Locale) {
  return dict[locale];
}
