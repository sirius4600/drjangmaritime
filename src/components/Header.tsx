import Link from "next/link";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";

export function Header({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const navItems = [
    { label: ui.nav.intelligence, href: "#intelligence" },
    { label: ui.nav.research, href: "#research" },
    { label: ui.nav.tools, href: "#tools" },
    { label: ui.nav.oceanBridge, href: "#ocean-bridge" },
    { label: ui.nav.publications, href: "#publications" },
    { label: ui.nav.about, href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href={`/${locale}#top`}
          className="flex flex-col leading-tight shrink-0"
          aria-label={ui.nav.homeAriaLabel}
        >
          <span className="text-[13px] font-semibold tracking-tight text-ink">
            {locale === "ko" ? "장은규" : "Dr. Unkyu Jang"}
          </span>
          <span className="text-[10px] uppercase tracking-[0.16em] text-accent-strong">
            {ui.nav.intelligence}
          </span>
        </Link>

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
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-paper transition-colors hover:bg-accent-strong whitespace-nowrap"
          >
            {ui.nav.workWithHim}
          </a>
        </div>
      </Container>
    </header>
  );
}
