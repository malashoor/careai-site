import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.careai.app";
  
  // Main pages
  const mainUrls: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/en`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/ar`, changeFrequency: "weekly", priority: 0.8 },
  ];

  // Legal pages
  const legalUrls: MetadataRoute.Sitemap = [
    "/en/legal/privacy", "/en/legal/terms",
    "/ar/legal/privacy", "/ar/legal/terms",
  ].map((p) => ({ 
    url: `${base}${p}`, 
    changeFrequency: "monthly" as const, 
    priority: 0.6 
  }));

  // Content pages
  const contentUrls: MetadataRoute.Sitemap = [
    "/en/about", "/en/contact", "/en/onboarding", "/en/pricing", "/en/features",
    "/ar/about", "/ar/contact", "/ar/onboarding", "/ar/pricing", "/ar/features",
    "/en/doctors", "/en/hospitals", "/en/charities", "/en/insurance", "/en/partners",
    "/ar/doctors", "/ar/hospitals", "/ar/charities", "/ar/insurance", "/ar/partners",
  ].map((p) => ({ 
    url: `${base}${p}`, 
    changeFrequency: "monthly" as const, 
    priority: 0.7 
  }));

  return [...mainUrls, ...legalUrls, ...contentUrls];
}
