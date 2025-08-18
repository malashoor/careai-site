import type { Locale } from "./i18n";

export const dictionary = {
  en: {
    metaTitle: "CareAI - AI-Powered Healthcare Solutions",
    hero: {
      title: "AI-Powered Healthcare Solutions",
      subtitle: "Transform patient care with intelligent automation, predictive analytics, and seamless integration across all healthcare systems.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Learn More"
    },
    features: {
      title: "Key Features",
      subtitle: "Comprehensive AI solutions that transform healthcare delivery",
      items: [
        { title: "AI Diagnostics", description: "Advanced diagnostic assistance with 95%+ accuracy", icon: "🔬" },
        { title: "Smart Scheduling", description: "Intelligent appointment booking and resource optimization", icon: "📅" },
        { title: "Patient Analytics", description: "Comprehensive patient insights and predictive modeling", icon: "📊" },
        { title: "Integration Hub", description: "Seamless connection with existing healthcare systems", icon: "🔗" }
      ]
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the plan that fits your healthcare organization",
      tiers: [
        {
          name: "Starter",
          price: "$99",
          period: "/month",
          description: "Perfect for small clinics",
          features: ["Up to 100 patients", "Basic AI diagnostics", "Email support", "Standard integrations"],
          cta: "Start Free Trial",
          popular: false
        },
        {
          name: "Professional",
          price: "$299",
          period: "/month",
          description: "Ideal for growing practices",
          features: ["Up to 500 patients", "Advanced AI features", "Priority support", "Custom integrations", "Analytics dashboard"],
          cta: "Start Free Trial",
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          description: "For large healthcare systems",
          features: ["Unlimited patients", "Full AI suite", "24/7 support", "Custom development", "Dedicated account manager"],
          cta: "Contact Sales",
          popular: false
        }
      ]
    },
    about: {
      title: "About CareAI",
      subtitle: "Empowering healthcare with intelligent AI solutions",
      mission: {
        title: "Our Mission",
        content: "We believe every healthcare organization deserves access to cutting-edge AI technology that improves patient outcomes and operational efficiency. CareAI combines advanced machine learning with healthcare expertise to create solutions that truly transform care delivery."
      },
      team: {
        title: "Our Team",
        subtitle: "Healthcare experts, AI researchers, and compassionate innovators",
        members: [
          { name: "Dr. Sarah Chen", role: "Chief Medical Officer", bio: "20+ years in healthcare technology" },
          { name: "Marcus Rodriguez", role: "Head of AI", bio: "Former Google Health researcher" },
          { name: "Aisha Patel", role: "UX Director", bio: "Specialist in healthcare UX design" }
        ]
      },
      partners: {
        title: "Trusted by Leading Organizations",
        subtitle: "Partnering with healthcare providers and health systems worldwide"
      }
    },
    contact: {
      title: "Contact Us",
      subtitle: "Questions, partnerships, or press — we'd love to hear from you.",
      submit: "Send Message"
    },
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

    footer: {
      rights: "All rights reserved.",
      links: [
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "Terms" }
      ]
    },
    partners: {
      doctors: {
        title: "For Healthcare Providers",
        subtitle: "Empower your practice with AI-driven insights and automation",
        valueProps: [
          { title: "Reduce Diagnostic Errors", description: "AI assistance reduces misdiagnosis by up to 40%" },
          { title: "Streamline Workflows", description: "Automate routine tasks and focus on patient care" },
          { title: "Improve Outcomes", description: "Data-driven insights lead to better treatment decisions" }
        ],
        workflow: [
          { step: 1, title: "Patient Intake", description: "AI-powered symptom analysis and triage" },
          { step: 2, title: "Diagnostic Support", description: "Evidence-based recommendations and alerts" },
          { step: 3, title: "Treatment Planning", description: "Personalized care pathways and monitoring" },
          { step: 4, title: "Follow-up", description: "Automated reminders and outcome tracking" }
        ]
      },
      hospitals: {
        title: "For Hospitals & Health Systems",
        subtitle: "Scale AI solutions across multiple departments and facilities",
        valueProps: [
          { title: "System-wide Integration", description: "Connect all departments with unified AI platform" },
          { title: "Resource Optimization", description: "Intelligent allocation of staff and equipment" },
          { title: "Quality Assurance", description: "Continuous monitoring and improvement protocols" }
        ],
        workflow: [
          { step: 1, title: "Department Setup", description: "Configure AI workflows per department needs" },
          { step: 2, title: "Staff Training", description: "Comprehensive onboarding and certification" },
          { step: 3, title: "Go-live Support", description: "24/7 assistance during transition period" },
          { step: 4, title: "Ongoing Optimization", description: "Regular performance reviews and updates" }
        ]
      },
      insurance: {
        title: "For Insurance Providers",
        subtitle: "Leverage AI to improve claims processing and risk assessment",
        valueProps: [
          { title: "Faster Claims Processing", description: "Reduce processing time from days to hours" },
          { title: "Fraud Detection", description: "Advanced algorithms identify suspicious patterns" },
          { title: "Risk Assessment", description: "Predictive modeling for better underwriting decisions" }
        ],
        workflow: [
          { step: 1, title: "Claims Submission", description: "AI-powered document analysis and validation" },
          { step: 2, title: "Risk Evaluation", description: "Automated assessment and scoring" },
          { step: 3, title: "Decision Support", description: "Evidence-based recommendations for adjusters" },
          { step: 4, title: "Settlement", description: "Streamlined payment processing and tracking" }
        ]
      },
      charities: {
        title: "For Healthcare Charities",
        subtitle: "Extend your impact with AI-powered healthcare solutions",
        valueProps: [
          { title: "Scale Your Mission", description: "Reach more beneficiaries with intelligent automation" },
          { title: "Data-Driven Impact", description: "Measure and demonstrate your organization's effectiveness" },
          { title: "Cost Efficiency", description: "Maximize resources for patient care and programs" }
        ],
        workflow: [
          { step: 1, title: "Needs Assessment", description: "AI-powered analysis of community health needs" },
          { step: 2, title: "Program Design", description: "Data-driven intervention planning and optimization" },
          { step: 3, title: "Implementation", description: "Scalable deployment across multiple locations" },
          { step: 4, title: "Impact Measurement", description: "Comprehensive outcome tracking and reporting" }
        ]
      },
      form: {
        title: "Partner With Us",
        subtitle: "Join the future of healthcare technology",
        fields: {
          name: "Full Name",
          email: "Email Address",
          organization: "Organization Name",
          role: "Your Role",
          phone: "Phone Number",
          message: "Tell us about your needs",
          file: "Upload Documents (Optional)"
        },
        submit: "Submit Partnership Request",
        success: "Thank you for your interest! We'll be in touch within 24 hours."
      }
    },
    admin: {
      title: "Admin Dashboard",
      leads: {
        title: "Partner Leads",
        search: "Search leads...",
        filters: {
          status: "Status",
          type: "Type",
          date: "Date Range"
        },
        table: {
          name: "Name",
          email: "Email",
          organization: "Organization",
          type: "Type",
          status: "Status",
          date: "Date",
          actions: "Actions"
        }
      },
      auth: {
        login: "Sign In",
        email: "Email Address",
        magicLink: "Send Magic Link",
        googleOAuth: "Continue with Google",
        unauthorized: "You don't have permission to access this page"
      }
    }
  },
  ar: {
    metaTitle: "كيرAI - حلول الرعاية الصحية المدعومة بالذكاء الاصطناعي",
    hero: {
      title: "حلول الرعاية الصحية المدعومة بالذكاء الاصطناعي",
      subtitle: "حوّل رعاية المرضى بالذكاء الاصطناعي والتحليلات التنبؤية والتكامل السلس عبر جميع أنظمة الرعاية الصحية.",
      ctaPrimary: "ابدأ الآن",
      ctaSecondary: "اعرف المزيد"
    },
    features: {
      title: "الميزات الرئيسية",
      subtitle: "حلول الذكاء الاصطناعي الشاملة التي تحول تقديم الرعاية",
      items: [
        { title: "التشخيص بالذكاء الاصطناعي", description: "مساعدة تشخيصية متقدمة بدقة تزيد عن 95%", icon: "🔬" },
        { title: "الجدولة الذكية", description: "حجز المواعيد الذكي وتحسين الموارد", icon: "📅" },
        { title: "تحليلات المرضى", description: "رؤى شاملة للمرضى والنمذجة التنبؤية", icon: "📊" },
        { title: "مركز التكامل", description: "اتصال سلس مع أنظمة الرعاية الصحية الموجودة", icon: "🔗" }
      ]
    },
    pricing: {
      title: "أسعار بسيطة وشفافة",
      subtitle: "اختر الخطة التي تناسب منظمتك الصحية",
      tiers: [
        {
          name: "البداية",
          price: "$99",
          period: "/شهر",
          description: "مثالية للعيادات الصغيرة",
          features: ["حتى 100 مريض", "التشخيص الأساسي بالذكاء الاصطناعي", "دعم البريد الإلكتروني", "التكاملات القياسية"],
          cta: "ابدأ التجربة المجانية",
          popular: false
        },
        {
          name: "المهني",
          price: "$299",
          period: "/شهر",
          description: "مثالية للممارسات النامية",
          features: ["حتى 500 مريض", "ميزات الذكاء الاصطناعي المتقدمة", "الدعم ذو الأولوية", "التكاملات المخصصة", "لوحة التحكم التحليلية"],
          cta: "ابدأ التجربة المجانية",
          popular: true
        },
        {
          name: "المؤسسة",
          price: "مخصص",
          period: "",
          description: "لأنظمة الرعاية الصحية الكبيرة",
          features: ["مرضى غير محدودين", "مجموعة الذكاء الاصطناعي الكاملة", "دعم 24/7", "التطوير المخصص", "مدير حساب مخصص"],
          cta: "اتصل بالمبيعات",
          popular: false
        }
      ]
    },
    about: {
      title: "عن كيرAI",
      subtitle: "تمكين الرعاية الصحية بحلول الذكاء الاصطناعي الذكية",
      mission: {
        title: "مهمتنا",
        content: "نؤمن بأن كل منظمة رعاية صحية تستحق الوصول إلى تقنية الذكاء الاصطناعي المتطورة التي تحسن نتائج المرضى وكفاءة العمليات. يجمع كيرAI بين التعلم الآلي المتقدم والخبرة في الرعاية الصحية لإنشاء حلول تحول حقاً تقديم الرعاية."
      },
      team: {
        title: "فريقنا",
        subtitle: "خبراء الرعاية الصحية وباحثو الذكاء الاصطناعي والمبتكرون الرحيمون",
        members: [
          { name: "د. سارة تشين", role: "الرئيس الطبي", bio: "20+ سنة في تقنية الرعاية الصحية" },
          { name: "ماركوس رودريغيز", role: "رئيس الذكاء الاصطناعي", bio: "باحث سابق في Google Health" },
          { name: "عائشة باتيل", role: "مدير تجربة المستخدم", bio: "متخصصة في تصميم تجربة المستخدم للرعاية الصحية" }
        ]
      },
      partners: {
        title: "موثوق به من قبل المنظمات الرائدة",
        subtitle: "شراكة مع مقدمي الرعاية الصحية وأنظمة الصحة في جميع أنحاء العالم"
      }
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "أسئلة أو شراكات أو إعلام — يسعدنا تواصلك.",
      submit: "إرسال رسالة"
    },
    onboarding: {
      title: "ابدأ رحلتك في كيرAI",
      subtitle: "أخبرنا عن نفسك للحصول على توصيات شخصية",
      steps: {
        role: "اختر دورك",
        details: "أخبرنا المزيد",
        success: "أهلاً بك في كيرAI!"
      },
      roles: {
        senior: {
          title: "أنا مسن",
          subtitle: "بحث عن شريك ودعم",
          icon: "👴"
        },
        family: {
          title: "أنا عائلة/مرافق",
          subtitle: "الرعاية لأحد المحبوبين",
          icon: "👨‍👩‍👧‍👦"
        },
        professional: {
          title: "أنا متخصص",
          subtitle: "مقدم رعاية صحية أو سكن سنوي",
          icon: "🏥"
        }
      },
      fields: {
        basic: {
          firstName: "الاسم الأول",
          lastName: "الاسم الأخير",
          email: "عنوان البريد الإلكتروني",
          phone: "رقم الهاتف (اختياري)"
        },
        senior: {
          age: "العمر",
          livingSituation: "المكان الذي تعيش فيه",
          primaryConcern: "القضاء الرئيسي"
        },
        family: {
          relationship: "العلاقة مع المسن",
          seniorAge: "عمر المسن",
          careLevel: "المستوى المطلوب من الرعاية",
          primaryConcern: "القضاء الرئيسي"
        },
        professional: {
          organization: "اسم المنظمة",
          role: "دورك",
          organizationType: "نوع المنظمة",
          useCase: "الاستخدام الأساسي"
        },
        consent: "أوافق على استقبال التواصل من كيرAI وقبول الشروط وسياسة الخصوصية",
        submit: "إكمال التسجيل",
        submitting: "جاري التقديم..."
      },
      success: {
        title: "أهلاً بك في كيرAI!",
        subtitle: "يتم إعداد حسابك",
        nextSteps: [
          "التحقق من بريدك الإلكتروني لتعليمات الإعداد",
          "تحميل تطبيق كيرAI المحمول",
          "تنظيم مكالمة إعداد على الإنترنت شخصي"
        ],
        cta: "المتابعة لللوحة التحكم"
      }
    },

    footer: {
      rights: "جميع الحقوق محفوظة.",
      links: [
        { href: "/about", label: "حول" },
        { href: "/contact", label: "اتصل" },
        { href: "/privacy", label: "الخصوصية" },
        { href: "/terms", label: "الشروط" }
      ]
    },
    partners: {
      doctors: {
        title: "لمقدمي الرعاية الصحية",
        subtitle: "عزز ممارستك بالرؤى والتحسينات المدعومة بالذكاء الاصطناعي",
        valueProps: [
          { title: "تقليل أخطاء التشخيص", description: "المساعدة بالذكاء الاصطناعي تقلل من سوء التشخيص بنسبة تصل إلى 40%" },
          { title: "تبسيط سير العمل", description: "أتمتة المهام الروتينية والتركيز على رعاية المرضى" },
          { title: "تحسين النتائج", description: "الرؤى المدعومة بالبيانات تؤدي إلى قرارات علاجية أفضل" }
        ],
        workflow: [
          { step: 1, title: "استقبال المريض", description: "تحليل الأعراض والفرز المدعوم بالذكاء الاصطناعي" },
          { step: 2, title: "الدعم التشخيصي", description: "توصيات قائمة على الأدلة والتنبيهات" },
          { step: 3, title: "تخطيط العلاج", description: "مسارات الرعاية الشخصية والمراقبة" },
          { step: 4, title: "المتابعة", description: "تذكيرات آلية وتتبع النتائج" }
        ]
      },
      hospitals: {
        title: "للمستشفيات وأنظمة الصحة",
        subtitle: "وسّع حلول الذكاء الاصطناعي عبر أقسام ومرافق متعددة",
        valueProps: [
          { title: "التكامل على مستوى النظام", description: "ربط جميع الأقسام بمنصة ذكاء اصطناعي موحدة" },
          { title: "تحسين الموارد", description: "التوزيع الذكي للموظفين والمعدات" },
          { title: "ضمان الجودة", description: "بروتوكولات المراقبة والتحسين المستمرة" }
        ],
        workflow: [
          { step: 1, title: "إعداد القسم", description: "تكوين سير عمل الذكاء الاصطناعي حسب احتياجات كل قسم" },
          { step: 2, title: "تدريب الموظفين", description: "التوجيه الشامل والشهادات" },
          { step: 3, title: "دعم التشغيل", description: "المساعدة 24/7 خلال فترة الانتقال" },
          { step: 4, title: "التحسين المستمر", description: "مراجعات الأداء والتحديثات المنتظمة" }
        ]
      },
      insurance: {
        title: "لمقدمي التأمين",
        subtitle: "استفد من الذكاء الاصطناعي لتحسين معالجة المطالبات وتقييم المخاطر",
        valueProps: [
          { title: "معالجة أسرع للمطالبات", description: "تقليل وقت المعالجة من أيام إلى ساعات" },
          { title: "كشف الاحتيال", description: "خوارزميات متقدمة لتحديد الأنماط المشبوهة" },
          { title: "تقييم المخاطر", description: "النمذجة التنبؤية لقرارات الاكتتاب الأفضل" }
        ],
        workflow: [
          { step: 1, title: "تقديم المطالبة", description: "تحليل المستندات والتحقق المدعوم بالذكاء الاصطناعي" },
          { step: 2, title: "تقييم المخاطر", description: "التقييم والتصنيف الآلي" },
          { step: 3, title: "دعم القرار", description: "توصيات قائمة على الأدلة للمعدلين" },
          { step: 4, title: "التسوية", description: "معالجة المدفوعات المبسطة والتتبع" }
        ]
      },
      charities: {
        title: "للجمعيات الخيرية الصحية",
        subtitle: "وسّع تأثيرك بحلول الرعاية الصحية المدعومة بالذكاء الاصطناعي",
        valueProps: [
          { title: "وسّع مهمتك", description: "وصل إلى المزيد من المستفيدين بالتحسين الذكي" },
          { title: "التأثير القائم على البيانات", description: "قياس وإظهار فعالية منظمتك" },
          { title: "كفاءة التكلفة", description: "تعظيم الموارد لرعاية المرضى والبرامج" }
        ],
        workflow: [
          { step: 1, title: "تقييم الاحتياجات", description: "تحليل احتياجات المجتمع الصحية المدعوم بالذكاء الاصطناعي" },
          { step: 2, title: "تصميم البرنامج", description: "تخطيط التدخلات المبني على البيانات والتحسين" },
          { step: 3, title: "التنفيذ", description: "النشر القابل للتوسع عبر مواقع متعددة" },
          { step: 4, title: "قياس التأثير", description: "تتبع النتائج الشامل والتقارير" }
        ]
      },
      form: {
        title: "تعاون معنا",
        subtitle: "انضم إلى مستقبل تقنية الرعاية الصحية",
        fields: {
          name: "الاسم الكامل",
          email: "عنوان البريد الإلكتروني",
          organization: "اسم المنظمة",
          role: "دورك",
          phone: "رقم الهاتف",
          message: "أخبرنا عن احتياجاتك",
          file: "رفع المستندات (اختياري)"
        },
        submit: "إرسال طلب الشراكة",
        success: "شكراً لاهتمامك! سنتواصل معك خلال 24 ساعة."
      }
    },
    admin: {
      title: "لوحة الإدارة",
      leads: {
        title: "شركاء محتملون",
        search: "البحث في الشركاء...",
        filters: {
          status: "الحالة",
          type: "النوع",
          date: "النطاق الزمني"
        },
        table: {
          name: "الاسم",
          email: "البريد الإلكتروني",
          organization: "المنظمة",
          type: "النوع",
          status: "الحالة",
          date: "التاريخ",
          actions: "الإجراءات"
        }
      },
      auth: {
        login: "تسجيل الدخول",
        email: "عنوان البريد الإلكتروني",
        magicLink: "إرسال رابط سحري",
        googleOAuth: "المتابعة مع جوجل",
        unauthorized: "ليس لديك إذن للوصول إلى هذه الصفحة"
      }
    }
  }
} as const;

export function t(locale: Locale) {
  return dictionary[locale];
}
