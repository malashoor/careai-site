"use client";

import { useParams } from "next/navigation";
import { type Locale, locales, defaultLocale } from "@/lib/i18n";

export function useLocale(): Locale {
  const params = useParams();
  const locale = params?.locale as Locale;
  
  // Fallback to default if locale is invalid
  if (!locale || !locales.includes(locale)) {
    return defaultLocale;
  }
  
  return locale;
}
