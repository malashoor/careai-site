import type { Locale } from "./i18n";

export const dictionary = {
  en: {
    metaTitle: "CareAI - AI-Powered Healthcare Solutions",
    metaDescription: "AI companion for seniors with medication reminders, health check-ins, and SOS alerts. Transform patient care with intelligent automation and predictive analytics.",
    hero: {
      title: "AI-Powered Healthcare Solutions",
      subtitle: "Transform patient care with intelligent automation, predictive analytics, and seamless integration across all healthcare systems.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Learn More"
    },
    howItWorks: {
      title: "How it works",
      subtitle: "Simple, effective AI companionship in three steps",
      steps: [
        {
          title: "Talk",
          description: "The AI companion checks in, listens, and reminds.",
          icon: "💬"
        },
        {
          title: "Nudge", 
          description: "Timely medication and hydration prompts.",
          icon: "⏰"
        },
        {
          title: "Protect",
          description: "SOS alerts family and care teams instantly.",
          icon: "🛡️"
        }
      ]
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
      subtitle: "Choose the plan that fits your needs and your family",
      note: "Consumer-focused pricing for seniors and families"
    },
    partners: {
      doctors: {
        title: "For Doctors & Clinics",
        subtitle: "Reduce missed doses, increase adherence visibility, exportable summaries—without adding clinic workload.",
        valueProps: [
          "Reduce missed-dose rates by up to 30–40%",
          "Automated check-ins and escalation rules", 
          "CSV export; EHR integration roadmap"
        ],
        workflow: [
          "Patient enrollment",
          "Daily AI check-ins",
          "Adherence monitoring",
          "Provider dashboard"
        ]
      },
      hospitals: {
        title: "For Hospitals & Health Systems",
        subtitle: "Post-discharge support that lowers readmissions through daily nudges and caregiver visibility.",
        valueProps: [
          "Shorter readmissions through adherence + hydration nudges",
          "Post-discharge care plans with family visibility",
          "Integration with existing care management systems"
        ],
        workflow: [
          "Discharge planning",
          "Family onboarding",
          "Daily health checks",
          "Care team alerts"
        ]
      },
      insurance: {
        title: "For Insurance & Payers",
        subtitle: "Adherence uplift → fewer avoidable claims. Pilot-ready cohorts and reporting.",
        valueProps: [
          "Better adherence → fewer avoidable claims",
          "Population dashboards (pilot-ready)",
          "Risk stratification and intervention targeting"
        ],
        workflow: [
          "Member identification",
          "Risk assessment",
          "Intervention delivery",
          "Outcome measurement"
        ]
      },
      charities: {
        title: "For Charities & Senior Organizations",
        subtitle: "Sponsored seats, multilingual support, 5-minute onboarding.",
        valueProps: [
          "Sponsored seats for underserved populations",
          "Multilingual support (EN/AR)",
          "Lightweight onboarding process",
          "Community health monitoring"
        ],
        workflow: [
          "Organization signup",
          "Member enrollment",
          "AI companion setup",
          "Ongoing support"
        ]
      }
    },
    about: {
      hero: {
        title: "About CareAI",
        subtitle: "We're an early-stage startup building safe, helpful AI for seniors and caregivers."
      },
      mission: {
        title: "Our Mission",
        description: "We believe every care team deserves access to simple, affordable tools that improve safety and quality of life. CareAI combines conversational AI with caregiver workflows to reduce friction and increase adherence — without pretending to replace clinical judgement."
      },
      vision: {
        title: "Our Vision",
        description: "We envision a future where every senior has a trusted digital companion that helps them live independently longer, where families feel at peace knowing their loved ones are cared for, and where healthcare partners can extend their reach while focusing on the human side of care."
      },
      partners: {
        title: "Strategic Partners",
        description: "We're actively seeking pilot partners: clinicians, senior living communities, payers, and health systems. If you're interested in co-designing features or evaluating outcomes, we'd love to talk.",
        list: [
          "Healthcare Systems & Hospitals",
          "Senior Living Communities",
          "Insurance Providers",
          "Technology Partners"
        ]
      },
      advisory: {
        title: "Advisory Board",
        description: "Our advisory board brings together experts in geriatric care, AI ethics, and healthcare technology to guide our mission and ensure we're building solutions that truly serve seniors and their families.",
        list: [
          "Dr. Sarah Johnson - Geriatric Medicine",
          "Prof. Michael Chen - AI Ethics",
          "Lisa Rodriguez - Healthcare Technology",
          "Dr. James Wilson - Senior Care Innovation"
        ]
      },
      values: {
        title: "Our Core Values",
        description: "These principles guide everything we do at CareAI, from product development to customer support.",
        list: [
          {
            title: "Empathy First",
            description: "We design with seniors and caregivers in mind, understanding their unique challenges and needs."
          },
          {
            title: "Safety & Trust",
            description: "Every feature prioritizes user safety and builds trust through transparent, reliable technology."
          },
          {
            title: "Accessibility",
            description: "Our solutions are designed to be easy to use for seniors of all technical abilities."
          },
          {
            title: "Innovation",
            description: "We continuously explore new ways AI can improve senior care and quality of life."
          },
          {
            title: "Partnership",
            description: "We believe in working together with healthcare providers, families, and seniors to create better solutions."
          },
          {
            title: "Impact",
            description: "We measure success by the positive impact on seniors' lives and their families' peace of mind."
          }
        ]
      },
      cta: {
        title: "Ready to Transform Senior Care?",
        description: "Join us in building a future where aging is embraced with confidence, dignity, and companionship.",
        primaryButton: "Contact Us",
        secondaryButton: "View Pricing"
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
          title: "I'm a Healthcare Professional",
          subtitle: "Improving patient care with AI",
          icon: "👨‍⚕️"
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
          primaryConcern: "Primary Health Concern"
        },
        family: {
          relationship: "Relationship to Senior",
          seniorAge: "Senior's Age",
          careLevel: "Level of Care Needed",
          primaryConcern: "Primary Health Concern"
        },
        professional: {
          organization: "Organization Name",
          role: "Professional Role",
          organizationType: "Organization Type",
          useCase: "Primary Use Case"
        },
        consent: "I agree to the Terms of Service and Privacy Policy, and consent to CareAI contacting me about my inquiry.",
        submit: "Get Started",
        submitting: "Setting up your account..."
      },
      success: {
        title: "Welcome to CareAI!",
        subtitle: "Your account is being set up. Here's what happens next:",
        nextSteps: [
          "We'll review your information and match you with the right plan",
          "You'll receive a welcome email with next steps",
          "Our team will reach out within 24 hours to get you started",
          "Your AI companion will be ready in 2-3 business days"
        ],
        cta: "Return to Home"
      },
      cta: {
        title: "Ready to Get Started?",
        subtitle: "Join thousands of families and healthcare providers already using CareAI",
        button: "Start Your Journey"
      }
    },
    footer: {
      rights: "All rights reserved",
      links: [
        { href: "/en/legal/terms", label: "Terms" },
        { href: "/en/legal/privacy", label: "Privacy" }
      ]
    }
  },
  ar: {
    metaTitle: "كيرAI - حلول الرعاية الصحية المدعومة بالذكاء الاصطناعي",
    metaDescription: "رفيق الذكاء الاصطناعي للمسنين مع تذكيرات الأدوية، فحوصات صحية يومية، وتنبيهات SOS. حسّن رعاية المرضى بالذكاء الاصطناعي والتحليلات التنبؤية.",
    hero: {
      title: "حلول الرعاية الصحية المدعومة بالذكاء الاصطناعي",
      subtitle: "حوّل رعاية المرضى بالذكاء الاصطناعي والتحليلات التنبؤية والتكامل السلس عبر جميع أنظمة الرعاية الصحية.",
      ctaPrimary: "ابدأ الآن",
      ctaSecondary: "اعرف المزيد"
    },
    howItWorks: {
      title: "كيف يعمل",
      subtitle: "رفقة الذكاء الاصطناعي البسيطة والفعالة في ثلاث خطوات",
      steps: [
        {
          title: "تحدث",
          description: "يراجع رفيق الذكاء الاصطناعي، يستمع، ويذكر.",
          icon: "💬"
        },
        {
          title: "ذكر",
          description: "تذكيرات في الوقت المناسب للأدوية والترطيب.",
          icon: "⏰"
        },
        {
          title: "حمي",
          description: "تنبيهات SOS تنبه العائلة وفريق الرعاية فوراً.",
          icon: "🛡️"
        }
      ]
    },
    features: {
      title: "المميزات الرئيسية",
      subtitle: "حلول شاملة للذكاء الاصطناعي تحوّل تقديم الرعاية الصحية",
      items: [
        { title: "تشخيص الذكاء الاصطناعي", description: "مساعدة تشخيصية متقدمة بدقة 95%+", icon: "🔬" },
        { title: "جدولة ذكية", description: "حجز المواعيد الذكي وتحسين الموارد", icon: "📅" },
        { title: "تحليلات المرضى", description: "رؤى شاملة للمرضى والنمذجة التنبؤية", icon: "📊" },
        { title: "محور التكامل", description: "اتصال سلس مع أنظمة الرعاية الصحية الموجودة", icon: "🔗" }
      ]
    },
    pricing: {
      title: "أسعار بسيطة وشفافة",
      subtitle: "اختر الخطة التي تناسب احتياجاتك واحتياجات عائلتك",
      note: "أسعار تركز على المستهلك للمسنين والعائلات"
    },
    partners: {
      doctors: {
        title: "للأطباء والعيادات",
        subtitle: "قلل الجرعات المفقودة، زد رؤية الالتزام، ملخصات قابلة للتصدير—بدون إضافة عبء عمل العيادة.",
        valueProps: [
          "قلل معدلات الجرعات المفقودة بنسبة تصل إلى 30-40%",
          "فحوصات آلية وقواعد تصعيد",
          "تصدير CSV؛ خارطة طريق تكامل EHR"
        ],
        workflow: [
          "تسجيل المريض",
          "فحوصات الذكاء الاصطناعي اليومية",
          "مراقبة الالتزام",
          "لوحة تحكم المزود"
        ]
      },
      hospitals: {
        title: "للمستشفيات وأنظمة الرعاية الصحية",
        subtitle: "دعم ما بعد الخروج يقلل إعادة القبول من خلال التذكيرات اليومية ورؤية مقدم الرعاية.",
        valueProps: [
          "إعادة قبول أقصر من خلال الالتزام + تذكيرات الترطيب",
          "خطط رعاية ما بعد الخروج مع رؤية العائلة",
          "التكامل مع أنظمة إدارة الرعاية الموجودة"
        ],
        workflow: [
          "تخطيط الخروج",
          "إعداد العائلة",
          "فحوصات صحية يومية",
          "تنبيهات فريق الرعاية"
        ]
      },
      insurance: {
        title: "للتأمين والمدفوعين",
        subtitle: "رفع الالتزام → مطالبات أقل قابلة للتجنب. مجموعات جاهزة للاختبار والتقارير.",
        valueProps: [
          "التزام أفضل → مطالبات أقل قابلة للتجنب",
          "لوحات تحكم السكانية (جاهزة للاختبار)",
          "التصنيف حسب المخاطر واستهداف التدخل"
        ],
        workflow: [
          "تحديد الأعضاء",
          "تقييم المخاطر",
          "تقديم التدخل",
          "قياس النتائج"
        ]
      },
      charities: {
        title: "للجمعيات الخيرية ومنظمات المسنين",
        subtitle: "مقاعد مدعومة، دعم متعدد اللغات، إعداد في 5 دقائق.",
        valueProps: [
          "مقاعد مدعومة للسكان المحرومين",
          "دعم متعدد اللغات (EN/AR)",
          "عملية إعداد خفيفة",
          "مراقبة صحة المجتمع"
        ],
        workflow: [
          "تسجيل المنظمة",
          "تسجيل الأعضاء",
          "إعداد رفيق الذكاء الاصطناعي",
          "دعم مستمر"
        ]
      }
    },
    about: {
      hero: {
        title: "نبذة عن كيرAI",
        subtitle: "نحن شركة ناشئة في مرحلة مبكرة نبني حلول ذكاء اصطناعي آمنة ومفيدة لكبار السن ومقدمي الرعاية."
      },
      mission: {
        title: "رسالتنا",
        description: "نؤمن بأن لكل فريق رعاية الحق في أدوات بسيطة وميسورة التكلفة تحسّن السلامة وجودة الحياة. تجمع CareAI بين المحادثة الذكية وتدفقات عمل مقدمي الرعاية لتقليل التعقيد وزيادة الالتزام — دون ادعاء استبدال الحكم السريري."
      },
      vision: {
        title: "رؤيتنا",
        description: "نحن نرى مستقبلاً حيث يمتلك كل مسن معيار إلكتروني موثوق يساعده على العيش بشكل مستقل أطول، حيث تشعر العائلات بسلامة معرفتهن بأحبائهن، وحيث يمكن لشركاء الرعاية الصحية توسيع نطاقهم أثناء التركيز على الجانب البشري للرعاية."
      },
      partners: {
        title: "شراكات استراتيجية",
        description: "نبحث عن شركاء لبرامج تجريبية: أطباء، دور رعاية، شركات تأمين وأنظمة صحية. إذا كنت مهتماً بتطوير المزايا أو قياس النتائج معنا، يسعدنا التواصل.",
        list: [
          "أنظمة الرعاية الصحية والمستشفيات",
          "مجتمعات الرعاية المستقلة",
          "شركات التأمين",
          "شركات التكنولوجيا"
        ]
      },
      advisory: {
        title: "مجلس استشاري",
        description: "يجمع مجلس استشارينا معاً خبراء في الرعاية الجريرية، أخلاقيات الذكاء الاصطناعي، وتكنولوجيات الرعاية الصحية لتوجيه مهمتنا وضمان بناء حلول تخدم كبار السن وعائلاتهم بشكل حقيقي.",
        list: [
          "د. سارة جونسون - طب جريري",
          "د. مايكل تشين - أخلاقيات الذكاء الاصطناعي",
          "ليزا رودريغوز - تكنولوجيات الرعاية الصحية",
          "د. جيمس ويلسون - تطوير الرعاية المستقلة"
        ]
      },
      values: {
        title: "قيمنا الأساسية",
        description: "هذه المبادئ توجه كل ما نقوم به في كيرAI، من تطوير المنتج إلى دعم العملاء.",
        list: [
          {
            title: "التعاطف أولاً",
            description: "نصمم بتصميم مع كبار السن ومقدمي الرعاية، فهم التحديات والاحتياجات الفريدة."
          },
          {
            title: "السلامة والثقة",
            description: "كل ميزة تركز على سلامة المستخدم وتبني الثقة من خلال تقنية شفافة وموثوقة."
          },
          {
            title: "الوصولية",
            description: "حلولنا مصممة لتكون سهلة الاستخدام لكبار السن بأي مستوى تقني."
          },
          {
            title: "الابتكار",
            description: "نستكشف باستمرار طرق جديدة لكيفية تحسين الرعاية الجريرية وجودة الحياة."
          },
          {
            title: "الشراكة",
            description: "نؤمن بالعمل مع شركاء الرعاية الصحية، العائلات، وكبار السن لخلق حلول أفضل."
          },
          {
            title: "التأثير",
            description: "نقيس النجاح بالتأثير الإيجابي على حياة كبار السن وسلامة أفراد عائلتهم."
          }
        ]
      },
      cta: {
        title: "هل أنت مستعد لتحويل الرعاية الجريرية؟",
        description: "انضم إلى الرحلة معنا لبناء مستقبل حيث يتم قبول التقدم بالثقة والأدوار والرفقة.",
        primaryButton: "تواصل معنا",
        secondaryButton: "عرض الأسعار"
      }
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "أسئلة، شراكات، أو صحافة — نود أن نسمع منك.",
      submit: "إرسال الرسالة"
    },
    onboarding: {
      title: "ابدأ رحلة كيرAI",
      subtitle: "أخبرنا عن نفسك للحصول على توصيات مخصصة",
      steps: {
        role: "اختر دورك",
        details: "أخبرنا المزيد",
        success: "مرحباً بك في كيرAI!"
      },
      roles: {
        senior: {
          title: "أنا مسن",
          subtitle: "أبحث عن الرفقة والدعم",
          icon: "👴"
        },
        family: {
          title: "أنا عائلة/مقدم رعاية",
          subtitle: "أرعى أحد الأحباء",
          icon: "👨‍👩‍👧‍👦"
        },
        professional: {
          title: "أنا محترف رعاية صحية",
          subtitle: "أحسن رعاية المرضى بالذكاء الاصطناعي",
          icon: "👨‍⚕️"
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
          livingSituation: "وضع المعيشة",
          primaryConcern: "المخاوف الصحية الأساسية"
        },
        family: {
          relationship: "العلاقة بالمسن",
          seniorAge: "عمر المسن",
          careLevel: "مستوى الرعاية المطلوبة",
          primaryConcern: "المخاوف الصحية الأساسية"
        },
        professional: {
          organization: "اسم المنظمة",
          role: "الدور المهني",
          organizationType: "نوع المنظمة",
          useCase: "حالة الاستخدام الأساسية"
        },
        consent: "أوافق على شروط الخدمة وسياسة الخصوصية، وأوافق على أن يتصل بي كيرAI بخصوص استفساري.",
        submit: "ابدأ الآن",
        submitting: "إعداد حسابك..."
      },
      success: {
        title: "مرحباً بك في كيرAI!",
        subtitle: "يتم إعداد حسابك. إليك ما يحدث بعد ذلك:",
        nextSteps: [
          "سنراجع معلوماتك ونطابقك مع الخطة الصحيحة",
          "ستتلقى بريد إلكتروني ترحيبي مع الخطوات التالية",
          "سيتواصل فريقنا معك خلال 24 ساعة لبدء العمل",
          "سيكون رفيق الذكاء الاصطناعي جاهزاً في 2-3 أيام عمل"
        ],
        cta: "العودة إلى الصفحة الرئيسية"
      },
      cta: {
        title: "هل أنت مستعد للبدء؟",
        subtitle: "انضم إلى آلاف العائلات ومقدمي الرعاية الصحية الذين يستخدمون كيرAI بالفعل",
        button: "ابدأ رحلتك"
      }
    },
    footer: {
      rights: "جميع الحقوق محفوظة",
      links: [
        { href: "/ar/legal/terms", label: "الشروط" },
        { href: "/ar/legal/privacy", label: "الخصوصية" }
      ]
    }
  }
};
