"use client";

import { usePathname } from "next/navigation";
import { type Locale, locales, defaultLocale } from "@/lib/i18n";

export function useLocale(): Locale {
  const pathname = usePathname();
  
  // Check for all supported locales
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}`)) {
      return locale;
    }
  }
  
  // Default to English for root path and other paths
  return 'en';
}
