"use client";

import { useEffect } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";
import { dictionary } from "@/lib/dictionary";
import clsx from "clsx";
import SmartLink from "@/components/Ui/SmartLink";

interface OnboardingPageProps {
  params: {
    locale: string;
  };
}

export default function OnboardingPage({ params }: OnboardingPageProps) {
  const { locale } = params;
  const isAR = locale === "ar";

  useEffect(() => { track("page_view", { page: "onboarding" }); }, []);

  const i = dictionary[locale as "en" | "ar"];

  const inputCls =
    "mt-2 w-full h-12 rounded-xl2 border px-4 outline-none bg-white text-ink-800 " +
    "border-ink-150 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/20 transition";

  const selectCls = inputCls + " appearance-none";
  const labelCls = "block text-sm font-medium text-ink-900";
  const hintCls = "mt-1 text-xs text-ink-500";
  const card = "card p-6 md:p-8";
  const btn = "btn btn-primary";
  const outlineBtn = "btn btn-ghost";

  return (
    <main dir={isAR ? "rtl" : "ltr"} className="bg-gradient-subtle">
      <section className="mx-auto max-w-wrap px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-ink-500">
            <span>{isAR ? "الخطوة 2 من 2" : "Step 2 of 2"}</span>
            <span>100%</span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-ink-150">
            <div className="h-2 w-full rounded-full bg-brand-blue" />
          </div>
        </div>

        <header className="text-center mb-8 md:mb-10">
          <h1 className={clsx("text-3xl md:text-4xl font-semibold text-ink-900", isAR && "font-arabic")}>
            {i.onboarding?.steps?.details ?? (isAR ? "أخبرنا أكثر" : "Tell Us More")}
          </h1>
          <p className="mt-3 text-ink-600">
            {isAR ? "شارك بعض التفاصيل لمساعدتنا" : "Share a few details so we can help."}
          </p>
        </header>

        <div className={clsx(card, "mx-auto max-w-3xl p-6 md:p-8")}>
          <form
            className="space-y-6"
            data-netlify="true"
            name="onboarding"
            method="POST"
            onSubmit={() => track("onboarding_submit")}
          >
            <input type="hidden" name="form-name" value="onboarding" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <label className={labelCls}>
                {isAR ? "الاسم الأول *" : "First Name *"}
                <input 
                  name="firstName" 
                  required 
                  className={inputCls}
                  aria-describedby="firstName-help"
                />
              </label>
              <label className={labelCls}>
                {isAR ? "اسم العائلة *" : "Last Name *"}
                <input 
                  name="lastName" 
                  required 
                  className={inputCls}
                  aria-describedby="lastName-help"
                />
              </label>
            </div>

            <label className={labelCls}>
              {isAR ? "البريد الإلكتروني *" : "Email Address *"}
              <input 
                type="email" 
                name="email" 
                required 
                className={inputCls}
                aria-describedby="email-help"
              />
              <span id="email-help" className={hintCls}>
                {isAR ? "لن نشارك بريدك." : "We'll never share your email."}
              </span>
            </label>

            <label className={labelCls}>
              {isAR ? "رقم الهاتف (اختياري)" : "Phone Number (Optional)"}
              <input 
                name="phone" 
                className={inputCls}
                aria-describedby="phone-help"
              />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <label className={labelCls}>
                {isAR ? "العمر *" : "Age *"}
                <input 
                  name="age" 
                  required 
                  type="number" 
                  min={1} 
                  max={120} 
                  className={inputCls}
                  aria-describedby="age-help"
                />
              </label>

              <label className={labelCls}>
                {isAR ? "وضع السكن *" : "Living Situation *"}
                <select 
                  name="living" 
                  required 
                  className={selectCls} 
                  defaultValue=""
                  aria-describedby="living-help"
                >
                  <option disabled value="">{isAR ? "اختر الوضع" : "Select living situation"}</option>
                  <option value="home">{isAR ? "منزل" : "At home"}</option>
                  <option value="family">{isAR ? "مع العائلة" : "With family"}</option>
                  <option value="facility">{isAR ? "منشأة رعاية" : "Care facility"}</option>
                </select>
              </label>

              <label className={labelCls}>
                {isAR ? "الاهتمام الصحي الأساسي *" : "Primary Health Concern *"}
                <select 
                  name="concern" 
                  required 
                  className={selectCls} 
                  defaultValue=""
                  aria-describedby="concern-help"
                >
                  <option disabled value="">{isAR ? "اختر الاهتمام" : "Select primary concern"}</option>
                  <option value="memory">{isAR ? "الذاكرة" : "Memory"}</option>
                  <option value="meds">{isAR ? "الأدوية" : "Medications"}</option>
                  <option value="loneliness">{isAR ? "العزلة" : "Loneliness"}</option>
                </select>
              </label>
            </div>

            <label className={labelCls}>
              {isAR ? "الخطة" : "Plan"}
              <select 
                name="plan" 
                className={selectCls} 
                defaultValue="starter"
                aria-describedby="plan-help"
              >
                <option value="starter">{isAR ? "مبتدئ - 9$ شهريًا" : "Starter - $9/month"}</option>
                <option value="family">{isAR ? "العائلة - 19$ شهريًا" : "Family - $19/month"}</option>
                <option value="pro">{isAR ? "احترافي - 39$ شهريًا" : "Professional - $39/month"}</option>
              </select>
            </label>

            <div className="rounded-xl2 border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm text-ink-800">
                <strong>{isAR ? "ملاحظة مهمة" : "Important Notice"}:</strong>{" "}
                {isAR
                  ? "CareAI ليست جهازًا طبيًا وليست بديلاً عن خدمات الطوارئ."
                  : "CareAI is not a medical device or a substitute for emergency services."}
              </p>
            </div>

            <label className="flex items-start gap-3 text-sm text-ink-800">
              <input 
                required 
                type="checkbox" 
                className="mt-1 h-4 w-4 rounded border-ink-150 focus:ring-2 focus:ring-brand-blue" 
              />
              <span>
                {isAR ? (
                  <>
                    أوافق على <SmartLink href={`/${locale}/legal/terms`}>شروط الخدمة</SmartLink> وأقر بـ <SmartLink href={`/${locale}/legal/privacy`}>سياسة الخصوصية</SmartLink>، وأوافق على معالجة المعلومات الصحية كما هو موضح، وعلى تلقي رسائل البريد الإلكتروني/الرسائل النصية المتعلقة بالخدمة. يمكنك سحب الموافقة في الإعدادات.
                  </>
                ) : (
                  <>
                    By creating an account, you agree to the <SmartLink href={`/${locale}/legal/terms`}>Terms of Service</SmartLink> and acknowledge the <SmartLink href={`/${locale}/legal/privacy`}>Privacy Policy</SmartLink>. You consent to the processing of health information as described, and to receive service-related emails/SMS. You can withdraw consent in settings.
                  </>
                )}
              </span>
            </label>

            <div className="flex flex-col md:flex-row gap-3 pt-2">
              <button className={btn} type="submit">
                {isAR ? "ابدأ" : "Get Started"}
              </button>
              <Link href={`/${locale}/onboarding`} className={outlineBtn}>
                {isAR ? "عودة لاختيار الدور" : "Back to Role Selection"}
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
