"use client";

import { useEffect } from "react";
import { trackEvents } from "@/lib/analytics";
import type { Locale } from "@/lib/i18n";

interface PageViewTrackerProps {
  locale: Locale;
}

export default function PageViewTracker({ locale }: PageViewTrackerProps) {
  useEffect(() => {
    // Track page view on mount with the provided locale
    // This is more deterministic than parsing pathname
    trackEvents.pageView('page_view', locale);
  }, [locale]);

  return null; // This component doesn't render anything
}
