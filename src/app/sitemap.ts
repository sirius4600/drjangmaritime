import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://drjangmaritime.com";
  const home = locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "ko" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${base}/${l}`])),
    },
  }));
  const news = locales.map((locale) => ({
    url: `${base}/${locale}/news`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: locale === "ko" ? 0.9 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${base}/${l}/news`]),
      ),
    },
  }));
  const log = locales.map((locale) => ({
    url: `${base}/${locale}/log`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === "ko" ? 0.7 : 0.6,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${base}/${l}/log`]),
      ),
    },
  }));
  return [...home, ...news, ...log];
}
