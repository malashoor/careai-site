export default function TokensPage() {
  const blocks = ["25","50","100","150","200","300","400","500","600","700","800","900"];
  return (
    <main className="section container mx-auto space-y-10">
      <h1 className="text-3xl font-semibold">Design Tokens</h1>

      <section>
        <h2 className="mb-4 text-xl font-medium">Ink scale</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {blocks.map(step => (
            <div key={step} className="rounded-xl border border-ink-150 p-4">
              <div className={`h-10 rounded mb-2 bg-ink-${step}`} />
              <div className="text-sm text-ink-600">ink-{step}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-ghost">Ghost</button>
          <a className="btn" href="#">Neutral</a>
        </div>
      </section>

      <section className="prose prose-apple max-w-none">
        <h2>Typography (prose-apple)</h2>
        <p>System fonts, generous line-height and Apple-inspired link blue <a href="#">example link</a>.</p>
      </section>
    </main>
  );
}
