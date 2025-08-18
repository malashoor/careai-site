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
        title: "Start Your CareAI Journey",
        subtitle: "Tell us about yourself to get personalized recommendations",
        steps: {
          role: "Choose Your Role",
          details: "Tell Us More",
          success: "Welcome to CareAI!"
        },
        roles: {
          senior: {
            title: "I'm a Senior",
            subtitle: "Looking for companionship and support",
            icon: "👴"
          },
          family: {
            title: "I'm Family/Caregiver",
            subtitle: "Caring for a loved one",
            icon: "👨‍👩‍👧‍👦"
          },
          professional: {
            title: "I'm a Professional",
            subtitle: "Healthcare provider or senior living",
            icon: "🏥"
          }
        },
        fields: {
          basic: {
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email Address",
            phone: "Phone Number (Optional)"
          },
          senior: {
            age: "Age",
            livingSituation: "Living Situation",
            primaryConcern: "Primary Concern"
          },
          family: {
            relationship: "Relationship to Senior",
            seniorAge: "Senior's Age",
            careLevel: "Care Level Needed",
            primaryConcern: "Primary Concern"
          },
          professional: {
            organization: "Organization Name",
            role: "Your Role",
            organizationType: "Organization Type",
            useCase: "Primary Use Case"
          },
          consent: "I agree to receive communications from CareAI and accept the Terms of Service and Privacy Policy",
          submit: "Complete Registration",
          submitting: "Submitting..."
        },
        success: {
          title: "Welcome to CareAI!",
          subtitle: "Your account is being set up",
          nextSteps: [
            "Check your email for setup instructions",
            "Download the CareAI mobile app",
            "Schedule a personalized onboarding call"
          ],
          cta: "Continue to Dashboard"
        }
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
        title: "ابدأ رحلتك مع كيرAI",
        subtitle: "أخبرنا عن نفسك للحصول على توصيات مخصصة",
        steps: {
          role: "اختر دورك",
          details: "أخبرنا المزيد",
          success: "مرحباً بك في كيرAI!"
        },
        roles: {
          senior: {
            title: "أنا كبير سن",
            subtitle: "أبحث عن رفقة ودعم",
            icon: "👴"
          },
          family: {
            title: "أنا عائلة/مقدم رعاية",
            subtitle: "أعتني بأحبائي",
            icon: "👨‍👩‍👧‍👦"
          },
          professional: {
            title: "أنا محترف",
            subtitle: "مقدم رعاية صحية أو سكن للمسنين",
            icon: "🏥"
          }
        },
        fields: {
          basic: {
            firstName: "الاسم الأول",
            lastName: "اسم العائلة",
            email: "عنوان البريد الإلكتروني",
            phone: "رقم الهاتف (اختياري)"
          },
          senior: {
            age: "العمر",
            livingSituation: "وضع السكن",
            primaryConcern: "القلق الأساسي"
          },
          family: {
            relationship: "العلاقة مع كبير السن",
            seniorAge: "عمر كبير السن",
            careLevel: "مستوى الرعاية المطلوب",
            primaryConcern: "القلق الأساسي"
          },
          professional: {
            organization: "اسم المؤسسة",
            role: "دورك",
            organizationType: "نوع المؤسسة",
            useCase: "الاستخدام الأساسي"
          },
          consent: "أوافق على تلقي رسائل من كيرAI وأقبل شروط الخدمة وسياسة الخصوصية",
          submit: "إكمال التسجيل",
          submitting: "جاري الإرسال..."
        },
        success: {
          title: "مرحباً بك في كيرAI!",
          subtitle: "يتم إعداد حسابك",
          nextSteps: [
            "تحقق من بريدك الإلكتروني للحصول على تعليمات الإعداد",
            "قم بتحميل تطبيق كيرAI للهاتف المحمول",
            "جدولة مكالمة إعداد مخصصة"
          ],
          cta: "المتابعة إلى لوحة التحكم"
        }
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
