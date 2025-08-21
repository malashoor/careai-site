"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signInWithEmail, signUpWithEmail } from "@/lib/supabase";
import { dictionary } from "@/lib/dictionary";
import Container from "@/components/Container";

export default function LoginPage({ params: { locale } }: { params: { locale: "en" | "ar" } }) {
  const i = dictionary[locale];
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("+966 ");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [livingSituation, setLivingSituation] = useState("");
  const [healthConcern, setHealthConcern] = useState("");
  const [plan, setPlan] = useState("starter");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Check URL params for mode
  useEffect(() => {
    const mode = searchParams.get('mode');
    if (mode === 'signup') {
      setIsSignUp(true);
    }
  }, [searchParams]);

  const validateForm = () => {
    if (isSignUp) {
      if (!fullName.trim()) {
        setError(locale === "ar" ? "الاسم الكامل مطلوب" : "Full name is required");
        return false;
      }
      if (!phone.trim()) {
        setError(locale === "ar" ? "رقم الهاتف مطلوب" : "Phone number is required");
        return false;
      }
      if (!age) {
        setError(locale === "ar" ? "العمر مطلوب" : "Age is required");
        return false;
      }
      if (!gender) {
        setError(locale === "ar" ? "الجنس مطلوب" : "Gender is required");
        return false;
      }
      if (!birthday) {
        setError(locale === "ar" ? "تاريخ الميلاد مطلوب" : "Birthday is required");
        return false;
      }
      if (!livingSituation) {
        setError(locale === "ar" ? "الوضع المعيشي مطلوب" : "Living situation is required");
        return false;
      }
      if (!healthConcern) {
        setError(locale === "ar" ? "المخاوف الصحية مطلوبة" : "Health concern is required");
        return false;
      }
      if (!plan) {
        setError(locale === "ar" ? "الخطة مطلوبة" : "Plan is required");
        return false;
      }
      if (password.length < 8) {
        setError(locale === "ar" ? "كلمة المرور يجب أن تكون 8 أحرف على الأقل" : "Password must be at least 8 characters");
        return false;
      }
      if (password !== confirmPassword) {
        setError(locale === "ar" ? "كلمات المرور غير متطابقة" : "Passwords do not match");
        return false;
      }
      if (!acceptedTerms) {
        setError(locale === "ar" ? "يجب قبول الشروط والأحكام" : "You must accept the terms and conditions");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
              if (isSignUp) {
          await signUpWithEmail(email, password, fullName, {
            phone,
            age: parseInt(age),
            gender,
            birthday,
            livingSituation,
            healthConcern,
            plan
          });
          setMessage(locale === "ar" 
            ? "تم إنشاء حسابك بنجاح! يرجى التحقق من بريدك الإلكتروني والنقر على رابط التأكيد لتفعيل حسابك." 
            : "Your account has been created successfully! Please check your email and click the confirmation link to activate your account."
          );
          // Don't redirect, show message
        } else {
        await signInWithEmail(email, password);
        router.push(`/${locale}/dashboard`);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError("");
    setMessage("");
  };

  return (
    <main className="py-16 pb-32 md:pb-16">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              {isSignUp 
                ? (locale === "ar" ? "إنشاء حساب" : "Create Account")
                : (locale === "ar" ? "تسجيل الدخول" : "Sign In")
              }
            </h1>
            <p className="text-slate-600">
              {isSignUp
                ? (locale === "ar" ? "انضم إلى CareAI" : "Join CareAI")
                : (locale === "ar" ? "مرحباً بعودتك" : "Welcome back")
              }
            </p>
          </div>

          {message && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
              {error}
            </div>
          )}

          <form id="auth-form" onSubmit={handleSubmit} className="space-y-6 pb-8">
            {isSignUp && (
              <>
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                    {locale === "ar" ? "الاسم الكامل *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    {locale === "ar" ? "رقم الهاتف *" : "Phone Number *"}
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={phone.split(' ')[0] || '+966'}
                      onChange={(e) => {
                        const number = phone.split(' ').slice(1).join(' ');
                        setPhone(e.target.value + ' ' + number);
                      }}
                      className="w-24 px-3 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                      aria-label={locale === "ar" ? "رمز الدولة" : "Country code"}
                    >
                      <option value="+966">🇸🇦 +966</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+973">🇧🇭 +973</option>
                      <option value="+965">🇰🇼 +965</option>
                      <option value="+968">🇴🇲 +968</option>
                      <option value="+974">🇶🇦 +974</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+39">🇮🇹 +39</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+86">🇨🇳 +86</option>
                      <option value="+91">🇮🇳 +91</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      value={phone.split(' ').slice(1).join(' ') || ''}
                      onChange={(e) => {
                        const countryCode = phone.split(' ')[0] || '+966';
                        setPhone(countryCode + ' ' + e.target.value);
                      }}
                      placeholder={locale === "ar" ? "رقم الهاتف" : "Phone number"}
                      className="flex-1 px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Age */}
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-slate-700 mb-2">
                    {locale === "ar" ? "العمر *" : "Age *"}
                  </label>
                  <input
                    type="number"
                    id="age"
                    min="18"
                    max="120"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                </div>

                {/* Gender */}
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-slate-700 mb-2">
                    {locale === "ar" ? "الجنس *" : "Gender *"}
                  </label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  >
                    <option value="">{locale === "ar" ? "اختر الجنس" : "Select Gender"}</option>
                    <option value="male">{locale === "ar" ? "ذكر" : "Male"}</option>
                    <option value="female">{locale === "ar" ? "أنثى" : "Female"}</option>
                    <option value="other">{locale === "ar" ? "آخر" : "Other"}</option>
                    <option value="prefer_not_to_say">{locale === "ar" ? "أفضل عدم الإفصاح" : "Prefer not to say"}</option>
                  </select>
                </div>

                {/* Birthday - CRITICAL FOR SENIOR BIRTHDAY MESSAGES */}
                <div>
                  <label htmlFor="birthday" className="block text-sm font-medium text-slate-700 mb-2">
                    {locale === "ar" ? "تاريخ الميلاد *" : "Birthday *"}
                    <span className="ml-2 text-xs text-blue-600">
                      {locale === "ar" ? "(مهم للرسائل التهنئة)" : "(Important for birthday messages)"}
                    </span>
                  </label>
                  <input
                    type="date"
                    id="birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                  <p className="text-xs text-blue-600 mt-1">
                    {locale === "ar" 
                      ? "CareAI سيرسل لك رسائل تهنئة خاصة في عيد ميلادك!"
                      : "CareAI will send you special birthday greetings!"
                    }
                  </p>
                </div>

                {/* Living Situation */}
                <div>
                  <label htmlFor="livingSituation" className="block text-sm font-medium text-slate-700 mb-2">
                    {locale === "ar" ? "الوضع المعيشي *" : "Living Situation *"}
                  </label>
                  <select
                    id="livingSituation"
                    value={livingSituation}
                    onChange={(e) => setLivingSituation(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  >
                    <option value="">{locale === "ar" ? "اختر الوضع المعيشي" : "Select Living Situation"}</option>
                    <option value="alone">{locale === "ar" ? "أعيش وحدي" : "Living alone"}</option>
                    <option value="with_family">{locale === "ar" ? "مع العائلة" : "With family"}</option>
                    <option value="with_caregiver">{locale === "ar" ? "مع مقدم رعاية" : "With caregiver"}</option>
                    <option value="assisted_living">{locale === "ar" ? "في دار رعاية" : "Assisted living"}</option>
                    <option value="nursing_home">{locale === "ar" ? "في دار تمريض" : "Nursing home"}</option>
                  </select>
                </div>

                {/* Health Concern */}
                <div>
                  <label htmlFor="healthConcern" className="block text-sm font-medium text-slate-700 mb-2">
                    {locale === "ar" ? "المخاوف الصحية *" : "Health Concern *"}
                  </label>
                  <select
                    id="healthConcern"
                    value={healthConcern}
                    onChange={(e) => setHealthConcern(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  >
                    <option value="">{locale === "ar" ? "اختر المخاوف الصحية" : "Select Health Concern"}</option>
                    <option value="general_wellness">{locale === "ar" ? "الصحة العامة" : "General wellness"}</option>
                    <option value="chronic_condition">{locale === "ar" ? "حالة مزمنة" : "Chronic condition"}</option>
                    <option value="medication_management">{locale === "ar" ? "إدارة الأدوية" : "Medication management"}</option>
                    <option value="mobility">{locale === "ar" ? "الحركة" : "Mobility"}</option>
                    <option value="memory">{locale === "ar" ? "الذاكرة" : "Memory"}</option>
                    <option value="other">{locale === "ar" ? "أخرى" : "Other"}</option>
                  </select>
                </div>

                {/* Plan */}
                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-slate-700 mb-2">
                    {locale === "ar" ? "الخطة *" : "Plan *"}
                  </label>
                  <select
                    id="plan"
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  >
                    <option value="starter">{locale === "ar" ? "مبتدئ" : "Starter"}</option>
                    <option value="premium">{locale === "ar" ? "مميز" : "Premium"}</option>
                    <option value="enterprise">{locale === "ar" ? "مؤسسي" : "Enterprise"}</option>
                  </select>
                </div>

                {/* Terms and Conditions */}
                <label className="flex items-start gap-3 text-sm text-slate-800">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-slate-300 focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <span>
                    {locale === "ar" ? (
                      <>
                        أوافق على <a href={`/${locale}/legal/terms`} className="text-blue-600 hover:underline">شروط الخدمة</a> وأقر بـ <a href={`/${locale}/legal/privacy`} className="text-blue-600 hover:underline">سياسة الخصوصية</a>، وأوافق على معالجة المعلومات الصحية كما هو موضح، وعلى تلقي رسائل البريد الإلكتروني/الرسائل النصية المتعلقة بالخدمة.
                      </>
                    ) : (
                      <>
                        By creating an account, you agree to the <a href={`/${locale}/legal/terms`} className="text-blue-600 hover:underline">Terms of Service</a> and acknowledge the <a href={`/${locale}/legal/privacy`} className="text-blue-600 hover:underline">Privacy Policy</a>. You consent to the processing of health information as described, and to receive service-related emails/SMS.
                      </>
                    )}
                  </span>
                </label>
              </>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                {locale === "ar" ? "البريد الإلكتروني *" : "Email *"}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
              />
              {isSignUp && (
                <span className="text-xs text-slate-500 mt-1">
                  {locale === "ar" ? "لن نشارك بريدك." : "We'll never share your email."}
                </span>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                {locale === "ar" ? "كلمة المرور *" : "Password *"}
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
              />
            </div>

            {/* Confirm Password (Sign Up Only) */}
            {isSignUp && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
                  {locale === "ar" ? "تأكيد كلمة المرور *" : "Confirm Password *"}
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  required
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-8 border-t border-slate-200 mt-8 bg-white">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-lg shadow-lg"
              >
                {isLoading ? (
                  <span>{locale === "ar" ? "جاري..." : "Loading..."}</span>
                ) : (
                  <span>
                    {isSignUp 
                      ? (locale === "ar" ? "إنشاء الحساب" : "Create Account")
                      : (locale === "ar" ? "تسجيل الدخول" : "Sign In")
                    }
                  </span>
                )}
              </button>
              
              {/* Additional spacing to ensure button is visible */}
              <div className="h-4"></div>
            </div>
          </form>

          {/* Toggle Mode */}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={toggleMode}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              {isSignUp 
                ? (locale === "ar" ? "لديك حساب بالفعل؟ تسجيل الدخول" : "Already have an account? Sign in")
                : (locale === "ar" ? "لا تملك حساباً؟ إنشاء حساب" : "Don't have an account? Sign up")
              }
            </button>
          </div>

          {/* Help Text for Sign In */}
          {!isSignUp && (
            <div className="mt-6 text-center">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-sm text-blue-800">
                  <strong>{locale === "ar" ? "تسجيل الدخول للمرة الأولى؟" : "First time signing in?"}</strong>
                  <br />
                  {locale === "ar" 
                    ? "إذا كنت قد أنشأت حساباً جديداً، يرجى التحقق من بريدك الإلكتروني والنقر على رابط التأكيد أولاً."
                    : "If you just created a new account, please check your email and click the verification link first."
                  }
                </p>
              </div>
            </div>
          )}

          {/* Sticky Submit Button for All Forms */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-50 md:hidden shadow-lg">
            <button
              type="submit"
              form="auth-form"
              disabled={isLoading}
              className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-lg shadow-lg"
            >
              {isLoading ? (
                <span>{locale === "ar" ? "جاري..." : "Loading..."}</span>
              ) : (
                <span>
                  {isSignUp 
                    ? (locale === "ar" ? "إنشاء الحساب" : "Create Account")
                    : (locale === "ar" ? "تسجيل الدخول" : "Sign In")
                  }
                </span>
              )}
            </button>
            
            {/* Safety margin above the sticky button */}
            <div className="h-4"></div>
          </div>
        </div>
      </Container>
    </main>
  );
}
