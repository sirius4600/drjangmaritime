import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocalePrefix) return NextResponse.next();

  // Language priority: 1) the visitor's own past choice (cookie),
  // 2) browser language, 3) default. We never guess by IP/geolocation.
  let locale = defaultLocale;
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && isLocale(cookieLocale)) {
    locale = cookieLocale;
  } else {
    const acceptLanguage = request.headers.get("accept-language");
    const preferred = acceptLanguage?.split(",")[0]?.split("-")[0];
    if (preferred && isLocale(preferred)) locale = preferred;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon.ico|robots.txt|sitemap.xml).*)"],
};
