export const locales = ["ko", "en", "ja", "es"] as const;
export type Locale = (typeof locales)[number];

// Korean is the primary language: the subject, his institution and most of
// his verifiable record (government commendations, R&D contracts) are
// Korean. English, Japanese and Spanish are served automatically to
// browsers that prefer them. Display order (ko, en, ja, es) is deliberate.
export const defaultLocale: Locale = "ko";

export const localeLabels: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  es: "Español",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
