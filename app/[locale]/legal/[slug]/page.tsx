import fs from "node:fs/promises";
import path from "node:path";
import Container from "@/components/Container";
import { type Locale } from "@/lib/i18n";
import { renderMarkdown } from "@/lib/md";

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

export default async function LegalPage({ params }: { params: { locale: Locale; slug: string } }) {
  const { body, meta } = await loadMarkdown(params.locale, params.slug);
  const { html, toc } = await renderMarkdown(body);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-white">
      <Container>
        <div className="grid lg:grid-cols-[240px,1fr] gap-8 py-12">
          {/* ToC Sidebar */}
          <aside className="hidden lg:block">
            <div className="card p-4 sticky top-6">
              <h2 className="text-sm font-semibold text-slate-700 mb-3">Contents</h2>
              <nav className="text-sm space-y-2">
                {toc.map(item => (
                  <a key={item.id} href={`#${item.id}`} className="block hover:underline text-slate-600">
                    {"".padStart((item.depth - 2) * 2, " ")}
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            <header className="mb-6">
              <h1 className="text-3xl md:text-4xl font-extrabold">
                {meta.title || (params.slug === 'privacy' ? 'Privacy Policy' : 'Terms of Service')}
              </h1>
              <p className="text-sm text-slate-600 mt-2">
                Effective: {meta.effective_date || 'TBD'} · Last updated: {meta.last_updated || 'TBD'}
              </p>
              {meta.locale === 'ar' ? (
                <p className="text-sm text-slate-600">جهة الاتصال: DPO — dpo@careai.app</p>
              ) : (
                <p className="text-sm text-slate-600">Contact: DPO — dpo@careai.app</p>
              )}
            </header>

            <article className="prose prose-slate max-w-none prose-a:text-brand-600">
              {/* biome-ignore lint/security/noDangerouslySetInnerHtml: controlled renderer */}
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </article>
          </main>
        </div>
      </Container>
    </div>
  );
}

export async function generateStaticParams() {
  return ["en", "ar"].flatMap((locale) => (
    ["terms", "privacy"].map((slug) => ({ locale, slug }))
  ));
}
