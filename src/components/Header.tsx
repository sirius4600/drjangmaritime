import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";

export function Header({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const navItems = [
    { label: ui.nav.intelligence, href: `/${locale}#intelligence` },
    { label: ui.nav.research, href: `/${locale}#research` },
    { label: ui.nav.news, href: `/${locale}/news` },
    { label: ui.nav.dailyLog, href: `/${locale}/log` },
    { label: ui.nav.insights, href: `/${locale}/insights` },
    { label: ui.nav.tools, href: `/${locale}#tools` },
    { label: ui.nav.oceanBridge, href: `/${locale}#ocean-bridge` },
    { label: ui.nav.publications, href: `/${locale}#publications` },
    { label: ui.nav.about, href: `/${locale}#about` },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <a href={`/${locale}`} className="flex shrink-0 items-center gap-2">
            <svg viewBox="0 0 26 26" width="26" height="26" aria-hidden="true">
              <circle
                cx="13"
                cy="13"
                r="7.5"
                fill="none"
                stroke="#0088b0"
                strokeWidth="1.6"
              />
              <path
                d="M13 0.5 V8.5 M13 17.5 V25.5 M0.5 13 H8.5 M17.5 13 H25.5"
                stroke="#0088b0"
                strokeWidth="1.6"
              />
              <circle cx="13" cy="13" r="2" fill="#d6006c" />
            </svg>
            <span className="hidden leading-tight sm:block">
              <span className="block text-[14px] font-semibold text-ink">
                Dr. Jang
              </span>
              <span className="block text-[9px] font-semibold tracking-[0.28em] text-accent-strong">
                MARITIME INTELLIGENCE
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-ink-soft">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <LanguageSwitcher locale={locale} />
          <a
            href={`/${locale}#contact`}
            className="rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-paper transition-colors hover:bg-accent-strong whitespace-nowrap"
          >
            {ui.nav.workWithHim}
          </a>
        </div>
      </Container>
    </header>
  );
}
