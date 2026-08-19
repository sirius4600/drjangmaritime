import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

// Language priority: 1) the visitor's own past choice (cookie), 2) browser
// language, 3) default. We never guess by IP/geolocation.
export default async function RootPage() {
  const cookieStore = await cookies();
  const headerList = await headers();

  let locale: Locale = defaultLocale;
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  if (cookieLocale && isLocale(cookieLocale)) {
    locale = cookieLocale;
  } else {
    const acceptLanguage = headerList.get("accept-language");
    const preferred = acceptLanguage?.split(",")[0]?.split("-")[0];
    if (preferred && isLocale(preferred)) locale = preferred;
  }

  redirect(`/${locale}`);
}
