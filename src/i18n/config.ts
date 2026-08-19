export const locales = ["ko", "en"] as const;
export type Locale = (typeof locales)[number];

// Korean is the primary language: the subject, his institution and most of
// his verifiable record (government commendations, R&D contracts) are
// Korean. English is served automatically to browsers that prefer it.
export const defaultLocale: Locale = "ko";

export const localeLabels: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
