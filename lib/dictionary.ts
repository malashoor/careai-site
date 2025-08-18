import type { Locale } from "./i18n";

const dict = {
  en: {
    metaTitle: "CareAI — Compassionate AI for Seniors",
    nav: { home: "Home", pricing: "Pricing", contact: "Contact", getStarted: "Get started" },
    hero: {
      title: "Companionship, reminders, and safety — powered by AI",
      subtitle: "CareAI supports seniors with friendly conversations, medication reminders, and an SOS that alerts family and caregivers.",
      ctaPrimary: "Start free trial",
      ctaSecondary: "See how it works"
    },
    features: {
      title: "Why CareAI",
      items: [
        { title: "AI Companion", desc: "Choose a friendly voice that speaks like a child or a friend." },
        { title: "Medication Reminders", desc: "Timely, voice-based reminders with caregiver notifications." },
        { title: "Health Check-ins", desc: "Daily summaries and gentle prompts for hydration and activity." },
        { title: "Emergency SOS", desc: "One tap or voice command to alert family and providers." }
      ]
    },
    pricing: {
      title: "Simple, transparent pricing",
      monthly: "Monthly",
      mostPopular: "Most popular",
      tiers: [
        { name: "Starter", price: "$9", features: ["AI companion", "Daily reminders", "Basic support"] },
        { name: "Family", price: "$19", features: ["Everything in Starter", "Family dashboard", "Priority support"] },
        { name: "Professional", price: "$39", features: ["Care team alerts", "Advanced analytics", "Export reports"] }
      ]
    },
    contact: { title: "Contact us", subtitle: "Questions, partnerships, or press — we’d love to hear from you.", submit: "Send message" },
    footer: { rights: "All rights reserved." }
  },
  ar: {
    metaTitle: "كيرAI — رفيق ذكي لكبار السن",
    nav: { home: "الرئيسية", pricing: "الأسعار", contact: "اتصل بنا", getStarted: "ابدأ الآن" },
    hero: {
      title: "مرافقة وتذكيرات وسلامة — مدعومة بالذكاء الاصطناعي",
      subtitle: "يدعم CareAI كبار السن بمحادثات ودية وتذكيرات بالأدوية وميزة طوارئ تنبه العائلة ومقدمي الرعاية.",
      ctaPrimary: "ابدأ التجربة المجانية",
      ctaSecondary: "اكتشف المزايا"
    },
    features: {
      title: "لماذا كيرAI",
      items: [
        { title: "رفيق ذكي", desc: "اختر صوتًا ودودًا يتحدث كابن أو صديق." },
        { title: "تذكيرات الأدوية", desc: "تذكيرات صوتية في الوقت المناسب مع تنبيهات للمقدّمين." },
        { title: "متابعة صحية", desc: "ملخصات يومية وتلميحات لطيفة للترطيب والنشاط." },
        { title: "طوارئ SOS", desc: "لمسة واحدة أو أمر صوتي لتنبيه العائلة والفريق الطبي." }
      ]
    },
    pricing: {
      title: "أسعار واضحة وبسيطة",
      monthly: "شهري",
      mostPopular: "الأكثر شعبية",
      tiers: [
        { name: "المبدئي", price: "$9", features: ["رفيق ذكي", "تذكيرات يومية", "دعم أساسي"] },
        { name: "العائلة", price: "$19", features: ["كل ما في المبدئي", "لوحة للعائلة", "دعم أولوية"] },
        { name: "المحترفون", price: "$39", features: ["تنبيهات للفريق الطبي", "تحليلات متقدمة", "تصدير التقارير"] }
      ]
    },
    contact: { title: "اتصل بنا", subtitle: "أسئلة أو شراكات أو إعلام — يسعدنا تواصلك.", submit: "إرسال" },
    footer: { rights: "جميع الحقوق محفوظة." }
  }
} as const;

export function t(locale: Locale) {
  return dict[locale];
}
