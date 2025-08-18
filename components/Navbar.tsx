"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { clsx } from "clsx";

export default function Navbar({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const base = `/${locale}`;
  const link = (segment: string) => clsx("px-3 py-2 rounded-lg hover:bg-slate-100 transition", { "font-semibold": pathname === `${base}${segment}` });

  return (
    <nav className="w-full py-3">
      <div className="flex items-center justify-between">
        <Link className="text-xl font-bold" href={base}>CareAI</Link>
        <div className="flex items-center gap-2">
          <Link className={link("")} href={base}>Home</Link>
          <Link className={link("/contact")} href={`${base}/contact`}>Contact</Link>
          <Link className="ml-2 px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700" href={`${base}#pricing`}>
            Get started
          </Link>
          {/* Lang switcher */}
          <div className="ml-4">
            {locales.map((l) => (
              <Link key={l} className={clsx("px-2 text-sm", { "font-semibold underline": l === locale })} href={`/${l}`}>
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
