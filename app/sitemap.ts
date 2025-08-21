// app/sitemap.ts
import type { MetadataRoute } from 'next';

const site = 'https://www.careai.app';
const locales = ['en','ar','es','fr','de','zh','ja','ko','hi','pt'] as const;
const publicPaths = ['','about','partners','contact'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const p of publicPaths) {
      const path = p ? `/${locale}/${p}` : `/${locale}`;
      entries.push({
        url: `${site}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  // Root English canonical (optional)
  entries.push({
    url: `${site}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  });

  return entries;
}
