import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-2 text-slate-600">Let&apos;s get you back on track.</p>
        <Link href="/en" className="mt-6 inline-block px-5 py-3 rounded-2xl bg-brand-600 text-white">
          Go home
        </Link>
      </div>
    </div>
  );
}
