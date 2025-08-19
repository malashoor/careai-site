"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmail, signUpWithEmail } from "@/lib/supabase";
import { dictionary } from "@/lib/dictionary";
import Container from "@/components/Container";

export default function LoginPage({ params: { locale } }: { params: { locale: "en" | "ar" } }) {
  const i = dictionary[locale];
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      if (isSignUp) {
        await signUpWithEmail(email, password, fullName);
        setMessage(locale === "ar" ? "يرجى التحقق من بريدك الإلكتروني لتأكيد حسابك" : "Please check your email to confirm your account");
      } else {
        await signInWithEmail(email, password);
        router.push("/admin");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="py-16">
      <Container>
        <div className="max-w-md mx-auto">
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

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                  {locale === "ar" ? "الاسم الكامل" : "Full Name"}
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  required={isSignUp}
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                {locale === "ar" ? "البريد الإلكتروني" : "Email"}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                {locale === "ar" ? "كلمة المرور" : "Password"}
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
                minLength={6}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            {message && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 text-sm">{message}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-brand-600 text-white rounded-2xl font-semibold hover:bg-brand-700 transition-colors disabled:opacity-50"
            >
              {isLoading 
                ? (locale === "ar" ? "جاري..." : "Loading...")
                : (isSignUp 
                    ? (locale === "ar" ? "إنشاء حساب" : "Create Account")
                    : (locale === "ar" ? "تسجيل الدخول" : "Sign In")
                  )
              }
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-brand-600 hover:text-brand-700 text-sm"
            >
              {isSignUp
                ? (locale === "ar" ? "لديك حساب بالفعل؟ تسجيل الدخول" : "Already have an account? Sign in")
                : (locale === "ar" ? "لا تملك حساباً؟ إنشاء حساب" : "Don't have an account? Sign up")
              }
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
}
