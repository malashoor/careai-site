export const locales = ["en", "ar", "es", "fr", "de", "zh", "ja", "ko", "hi", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isRTL(locale: Locale) {
  return locale === "ar";
}

export function getLocaleInfo(locale: Locale) {
  const localeMap = {
    en: { name: "English", flag: "🇺🇸", dir: "ltr" },
    ar: { name: "العربية", flag: "🇸🇦", dir: "rtl" },
    es: { name: "Español", flag: "🇪🇸", dir: "ltr" },
    fr: { name: "Français", flag: "🇫🇷", dir: "ltr" },
    de: { name: "Deutsch", flag: "🇩🇪", dir: "ltr" },
    zh: { name: "中文", flag: "🇨🇳", dir: "ltr" },
    ja: { name: "日本語", flag: "🇯🇵", dir: "ltr" },
    ko: { name: "한국어", flag: "🇰🇷", dir: "ltr" },
    hi: { name: "हिन्दी", flag: "🇮🇳", dir: "ltr" },
    pt: { name: "Português", flag: "🇵🇹", dir: "ltr" }
  };
  
  return localeMap[locale] || localeMap.en;
}
