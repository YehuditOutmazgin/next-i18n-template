import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // For paths without locale, rewrite to default locale but keep URL as is
    const response = NextResponse.rewrite(new URL(`/${i18n.defaultLocale}${pathname}`, request.url));
    response.cookies.set('NEXT_LOCALE', i18n.defaultLocale, {
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  const locale = pathname.split('/')[1];
  const response = NextResponse.next();
  if (i18n.locales.includes(locale as any)) {
    response.cookies.set('NEXT_LOCALE', locale, {
      maxAge: 60 * 60 * 24 * 365,
    });
  }
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|fonts).*)'],
};
