import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';
import type { Root } from 'hast';
import { visit } from 'unist-util-visit';
import GithubSlugger from 'github-slugger';

export type TocItem = { id: string; text: string; depth: number };

export async function renderMarkdown(md: string): Promise<{ html: string; toc: TocItem[] }>{
  const toc: TocItem[] = [];

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(() => (tree: Root) => {
      // Collect headings for ToC
      const slugger = new GithubSlugger();
      visit(tree, 'element', (node: any) => {
        if (['h2','h3','h4'].includes(node.tagName)) {
          const text = (node.children || [])
            .map((c: any) => c.value || (c.children ? c.children.map((cc: any) => cc.value).join('') : ''))
            .join('');
          const id = (node.properties && node.properties.id) || slugger.slug(String(text));
          node.properties = { ...(node.properties || {}), id };
          toc.push({ id, text: String(text), depth: Number(node.tagName.slice(1)) });
        }
      });
    })
    .use(rehypeAutolinkHeadings as any, { behavior: 'wrap' })
    .use(rehypeStringify);

  const file = await processor.process(md);
  return { html: String(file.value), toc };
}
