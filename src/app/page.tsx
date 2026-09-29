import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

// Language priority: 1) the visitor's own past choice (cookie), 2) Korean
// (the site default). Browser language is deliberately NOT consulted — the
// site opens in Korean unless the visitor explicitly picked another language.
export default async function RootPage() {
  const cookieStore = await cookies();

  let locale: Locale = defaultLocale;
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  if (cookieLocale && isLocale(cookieLocale)) locale = cookieLocale;

  // Temporary redirect: the target depends on the cookie, so it must not be
  // cached by browsers as a permanent /→/{locale} mapping.
  redirect(`/${locale}`);
}
