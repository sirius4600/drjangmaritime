"use client";

import { usePathname } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/i18n/config";

function pathWithLocale(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/") || "/";
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 text-[12px] font-semibold text-ink-soft">
      {locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span className="text-line">/</span>}
          <a
            href={pathWithLocale(pathname, loc)}
            onClick={() => {
              document.cookie = `NEXT_LOCALE=${loc};path=/;max-age=31536000`;
            }}
            aria-current={loc === locale ? "true" : undefined}
            className={
              loc === locale
                ? "text-ink"
                : "transition-colors hover:text-ink"
            }
          >
            {localeLabels[loc]}
          </a>
        </span>
      ))}
    </div>
  );
}
