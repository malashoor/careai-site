"use client";
import Link from "next/link";
import { useLocale } from "@/lib/hooks/useLocale";

export default function Navbar() {
  const locale = useLocale();
  const i = locale === "ar" ? "ar" : "en";

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex-shrink-0">
              <span className="text-2xl font-bold text-brand-600">CareAI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}/features`} className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              {i === "ar" ? "المميزات" : "Features"}
            </Link>
            <Link href={`/${locale}/pricing`} className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              {i === "ar" ? "الأسعار" : "Pricing"}
            </Link>
            <Link href={`/${locale}/onboarding`} className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              {i === "ar" ? "البدء" : "Onboarding"}
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
                {i === "ar" ? "الشركاء" : "Partners"}
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href={`/${locale}/doctors`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {i === "ar" ? "الأطباء" : "Doctors"}
                  </Link>
                  <Link href={`/${locale}/hospitals`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {i === "ar" ? "المستشفيات" : "Hospitals"}
                  </Link>
                  <Link href={`/${locale}/insurance`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {i === "ar" ? "التأمين" : "Insurance"}
                  </Link>
                  <Link href={`/${locale}/charities`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {i === "ar" ? "الجمعيات الخيرية" : "Charities"}
                  </Link>
                </div>
              </div>
            </div>
            <Link href={`/${locale}/about`} className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              {i === "ar" ? "حول" : "About"}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href={`/${locale}/onboarding`} className="bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors">
              {i === "ar" ? "ابدأ الآن" : "Get Started"}
            </Link>
            <Link href={locale === "en" ? "/ar" : "/en"} className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              {locale === "en" ? "العربية" : "English"}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
