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
    { label: ui.nav.tools, href: `/${locale}#tools` },
    { label: ui.nav.oceanBridge, href: `/${locale}#ocean-bridge` },
    { label: ui.nav.publications, href: `/${locale}#publications` },
    { label: ui.nav.about, href: `/${locale}#about` },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
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
