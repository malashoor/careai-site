"use client";
import Link from "next/link";

type Props = React.ComponentProps<"a"> & { href: string; variant?: "text" | "button" | "ghost" };

export default function SmartLink({ href, children, className="", variant="text", ...rest }: Props) {
  const base = variant === "button"
    ? "btn btn-primary"
    : variant === "ghost"
    ? "btn btn-ghost"
    : "hover:text-link-hover";
  const isExternal = /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${className}`} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${className}`} {...rest as any}>
      {children}
    </Link>
  );
}
