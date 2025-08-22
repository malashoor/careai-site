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
  
  // Multi-language titles and descriptions
  const titles: Record<string, { privacy: string; terms: string }> = {
    en: { privacy: "Privacy Policy | CareAI", terms: "Terms of Service | CareAI" },
    ar: { privacy: "سياسة الخصوصية | CareAI", terms: "شروط الخدمة | CareAI" },
    es: { privacy: "Política de Privacidad | CareAI", terms: "Términos de Servicio | CareAI" },
    fr: { privacy: "Politique de Confidentialité | CareAI", terms: "Conditions d'Utilisation | CareAI" },
    de: { privacy: "Datenschutzrichtlinie | CareAI", terms: "Nutzungsbedingungen | CareAI" },
    zh: { privacy: "隐私政策 | CareAI", terms: "服务条款 | CareAI" },
    ja: { privacy: "プライバシーポリシー | CareAI", terms: "利用規約 | CareAI" },
    ko: { privacy: "개인정보처리방침 | CareAI", terms: "이용약관 | CareAI" },
    hi: { privacy: "गोपनीयता नीति | CareAI", terms: "सेवा की शर्तें | CareAI" },
    pt: { privacy: "Política de Privacidade | CareAI", terms: "Termos de Serviço | CareAI" }
  };
  
  const descriptions: Record<string, { privacy: string; terms: string }> = {
    en: { 
      privacy: "Learn how CareAI collects, processes, and protects your health data.",
      terms: "Read CareAI's terms of service and legal responsibilities."
    },
    ar: { 
      privacy: "تعرف على كيفية جمع CareAI لبياناتك الصحية ومعالجتها وحمايتها.",
      terms: "اقرأ شروط استخدام خدمات CareAI والمسؤوليات القانونية."
    },
    es: { 
      privacy: "Aprende cómo CareAI recopila, procesa y protege tus datos de salud.",
      terms: "Lee los términos de servicio de CareAI y las responsabilidades legales."
    },
    fr: { 
      privacy: "Découvrez comment CareAI collecte, traite et protège vos données de santé.",
      terms: "Lisez les conditions d'utilisation de CareAI et les responsabilités légales."
    },
    de: { 
      privacy: "Erfahren Sie, wie CareAI Ihre Gesundheitsdaten sammelt, verarbeitet und schützt.",
      terms: "Lesen Sie die Nutzungsbedingungen von CareAI und die rechtlichen Verantwortlichkeiten."
    },
    zh: { 
      privacy: "了解CareAI如何收集、处理和保护您的健康数据。",
      terms: "阅读CareAI的服务条款和法律责任。"
    },
    ja: { 
      privacy: "CareAIがあなたの健康データをどのように収集、処理、保護するかを学びましょう。",
      terms: "CareAIの利用規約と法的責任を読んでください。"
    },
    ko: { 
      privacy: "CareAI가 귀하의 건강 데이터를 어떻게 수집, 처리 및 보호하는지 알아보세요.",
      terms: "CareAI의 서비스 약관과 법적 책임을 읽어보세요."
    },
    hi: { 
      privacy: "जानें कि CareAI आपके स्वास्थ्य डेटा को कैसे एकत्र, प्रसंस्करण और सुरक्षा करता है।",
      terms: "CareAI की सेवा की शर्तें और कानूनी जिम्मेदारियों को पढ़ें।"
    },
    pt: { 
      privacy: "Saiba como o CareAI coleta, processa e protege seus dados de saúde.",
      terms: "Leia os termos de serviço do CareAI e as responsabilidades legais."
    }
  };
  
  const title = titles[locale]?.[isPrivacy ? 'privacy' : 'terms'] || titles.en[isPrivacy ? 'privacy' : 'terms'];
  const description = descriptions[locale]?.[isPrivacy ? 'privacy' : 'terms'] || descriptions.en[isPrivacy ? 'privacy' : 'terms'];

  return {
    title,
    description,
    alternates: {
      canonical: `${base}${path}`,
      languages: {
        "en": `${base}/en/legal/${slug}`,
        "ar": `${base}/ar/legal/${slug}`,
        "es": `${base}/es/legal/${slug}`,
        "fr": `${base}/fr/legal/${slug}`,
        "de": `${base}/de/legal/${slug}`,
        "zh": `${base}/zh/legal/${slug}`,
        "ja": `${base}/ja/legal/${slug}`,
        "ko": `${base}/ko/legal/${slug}`,
        "hi": `${base}/hi/legal/${slug}`,
        "pt": `${base}/pt/legal/${slug}`,
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

  // Multi-language content labels
  const contentLabels: Record<string, { contents: string; contact: string; effective: string; lastUpdated: string }> = {
    en: { contents: "Contents", contact: "Contact: DPO — dpo@careai.app", effective: "Effective:", lastUpdated: "Last updated:" },
    ar: { contents: "المحتويات", contact: "جهة الاتصال: DPO — dpo@careai.app", effective: "تاريخ السريان:", lastUpdated: "آخر تحديث:" },
    es: { contents: "Contenidos", contact: "Contacto: DPO — dpo@careai.app", effective: "Efectivo:", lastUpdated: "Última actualización:" },
    fr: { contents: "Contenu", contact: "Contact: DPO — dpo@careai.app", effective: "Effectif:", lastUpdated: "Dernière mise à jour:" },
    de: { contents: "Inhaltsverzeichnis", contact: "Kontakt: DPO — dpo@careai.app", effective: "Gültig ab:", lastUpdated: "Zuletzt aktualisiert:" },
    zh: { contents: "目录", contact: "联系: DPO — dpo@careai.app", effective: "生效日期:", lastUpdated: "最后更新:" },
    ja: { contents: "目次", contact: "連絡先: DPO — dpo@careai.app", effective: "発効日:", lastUpdated: "最終更新:" },
    ko: { contents: "목차", contact: "연락처: DPO — dpo@careai.app", effective: "시행일:", lastUpdated: "최종 업데이트:" },
    hi: { contents: "सामग्री", contact: "संपर्क: DPO — dpo@careai.app", effective: "प्रभावी:", lastUpdated: "अंतिम अपडेट:" },
    pt: { contents: "Conteúdo", contact: "Contato: DPO — dpo@careai.app", effective: "Efetivo:", lastUpdated: "Última atualização:" }
  };

  const labels = contentLabels[params.locale] || contentLabels.en;

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
                {labels.contents}
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
                {labels.effective} {meta.effective_date || 'TBD'} · {labels.lastUpdated} {meta.last_updated || 'TBD'}
              </p>
              <p className="text-sm text-ink-500">{labels.contact}</p>
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
  const locales = ["en", "ar", "es", "fr", "de", "zh", "ja", "ko", "hi", "pt"];
  const slugs = ["terms", "privacy"];
  
  return locales.flatMap((locale) => 
    slugs.map((slug) => ({ locale, slug }))
  );
}
