import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en','ar','es','fr','de','zh','ja','ko','hi','pt'];
const hidden = ['pricing','onboarding','sign-in'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow Flutter SPA + static
  if (pathname.startsWith('/app')) return NextResponse.next();
  if (pathname.startsWith('/_next') || pathname.startsWith('/images')) return NextResponse.next();

  // Locale-prefixed hidden pages → 404
  for (const L of locales) {
    for (const h of hidden) {
      if (pathname === `/${L}/${h}` || pathname.startsWith(`/${L}/${h}/`)) {
        return new NextResponse(null, { status: 404 });
      }
    }
  }

  // Root hidden pages → 404
  for (const h of hidden) {
    if (pathname === `/${h}` || pathname.startsWith(`/${h}/`)) {
      return new NextResponse(null, { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon|site.webmanifest|robots.txt|sitemap.xml|app).*)',
  ],
};
