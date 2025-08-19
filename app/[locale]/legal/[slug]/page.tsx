import fs from "node:fs/promises";
import path from "node:path";
import { type Metadata } from "next";
import { type Locale } from "@/lib/i18n";
import { renderMarkdown } from "@/lib/md";
import LegalJsonLd from "@/components/LegalJsonLd";

// Force static generation to avoid hydration drift
export const dynamic = "force-static";
export const revalidate = 86400; // daily

async function loadMarkdown(locale: Locale, slug: string) {
  const file = path.join(process.cwd(), "content", "legal", locale, `${slug}.md`);
  const raw = await fs.readFile(file, "utf8");
  // Strip simple frontmatter block
  const body = raw.replace(/^---[\s\S]*?---\n/, "");
  const metaMatch = raw.match(/^---[\s\S]*?---/);
  const meta: Record<string, string> = {};
  if (metaMatch) {
    for (const line of metaMatch[0].split("\n").slice(1, -1)) {
      const [k, ...rest] = line.split(":");
      if (k) meta[k.trim()] = rest.join(":").trim();
    }
  }
  return { body, meta };
}

export async function generateMetadata({
  params: { locale, slug },
}: { params: { locale: Locale; slug: string } }): Promise<Metadata> {
  const base = "https://www.careai.app";
  const path = `/${locale}/legal/${slug}`;
  
  const isPrivacy = slug === "privacy";
  const title = locale === "ar" 
    ? (isPrivacy ? "سياسة الخصوصية | CareAI" : "شروط الخدمة | CareAI")
    : (isPrivacy ? "Privacy Policy | CareAI" : "Terms of Service | CareAI");
    
  const description = locale === "ar"
    ? (isPrivacy 
        ? "تعرف على كيفية جمع CareAI لبياناتك الصحية ومعالجتها وحمايتها."
        : "اقرأ شروط استخدام خدمات CareAI والمسؤوليات القانونية.")
    : (isPrivacy
        ? "Learn how CareAI collects, processes, and protects your health data."
        : "Read CareAI's terms of service and legal responsibilities.");

  return {
    title,
    description,
    alternates: {
      canonical: `${base}${path}`,
      languages: {
        "en": `${base}/en/legal/${slug}`,
        "ar": `${base}/ar/legal/${slug}`,
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: `${base}${path}`,
      siteName: "CareAI",
      locale: locale,
      type: "website",
    },
  };
}

export default async function LegalPage({ params }: { params: { locale: Locale; slug: string } }) {
  const { body, meta } = await loadMarkdown(params.locale, params.slug);
  const { html, toc } = await renderMarkdown(body);

  const base = "https://www.careai.app";
  const url = `${base}/${params.locale}/legal/${params.slug}`;
  const name = params.slug === "privacy" ? "Privacy Policy" : "Terms of Service";
  const dateModified = meta.last_updated || "2025-03-21";

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* JSON-LD structured data */}
      <LegalJsonLd url={url} name={name} dateModified={dateModified} />
      
      <div className="mx-auto max-w-wrap px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[240px,1fr] gap-8">
          {/* ToC Sidebar */}
          <aside className="hidden lg:block">
            <div className="card p-4 sticky top-6">
              <h2 className="text-sm font-semibold text-ink-900 mb-3">
                {params.locale === 'ar' ? 'المحتويات' : 'Contents'}
              </h2>
              <nav className="text-sm space-y-2">
                {toc.map(item => (
                  <a key={item.id} href={`#${item.id}`} className="block hover:underline text-ink-500">
                    {"".padStart((item.depth - 2) * 2, " ")}
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-ink-900">
                {meta.title || (params.slug === 'privacy' ? 'Privacy Policy' : 'Terms of Service')}
              </h1>
              <p className="text-sm text-ink-500 mt-2">
                Effective: {meta.effective_date || 'TBD'} · Last updated: {meta.last_updated || 'TBD'}
              </p>
              {meta.locale === 'ar' ? (
                <p className="text-sm text-ink-500">جهة الاتصال: DPO — dpo@careai.app</p>
              ) : (
                <p className="text-sm text-ink-500">Contact: DPO — dpo@careai.app</p>
              )}
            </header>

            <article className="prose prose-apple max-w-none">
              {/* biome-ignore lint/security/noDangerouslySetInnerHtml: controlled renderer */}
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return ["en", "ar"].flatMap((locale) => (
    ["terms", "privacy"].map((slug) => ({ locale, slug }))
  ));
}
