import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { Container } from "./Container";

export function Footer({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const { profile } = getContent(locale);

  const footerNav = [
    { label: ui.nav.intelligence, href: `/${locale}#intelligence` },
    { label: ui.nav.research, href: `/${locale}#research` },
    { label: ui.nav.news, href: `/${locale}/news` },
    { label: ui.nav.tools, href: `/${locale}#tools` },
    { label: ui.nav.oceanBridge, href: `/${locale}#ocean-bridge` },
    { label: ui.nav.publications, href: `/${locale}#publications` },
    { label: ui.nav.about, href: `/${locale}#about` },
    { label: ui.contact.heading, href: `/${locale}#contact` },
    {
      label: locale === "ko" ? "VTS 자료실" : "VTS Library",
      href: "https://drjangvts.com",
    },
  ];

  return (
    <footer className="border-t border-line/70 bg-navy py-14">
      <Container className="flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <p className="text-sm font-semibold text-paper-on-navy">
            {locale === "ko" ? "장은규" : "Dr. Unkyu Jang"}
          </p>
          <p className="mt-1 text-[13px] text-ink-soft-on-navy">
            {ui.nav.intelligence}
          </p>
          <p className="mt-4 text-[13px] leading-relaxed text-ink-soft-on-navy">
            {ui.footer.tagline}
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-[13px] text-ink-soft-on-navy sm:grid-cols-3">
          {footerNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener" : undefined}
              className="transition-colors hover:text-paper-on-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>

      <Container className="mt-12 flex flex-col gap-3 border-t border-navy-line pt-6 text-[12px] text-ink-soft-on-navy sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.nameEn}. {ui.footer.rights}
        </p>
        <p>drjangmaritime.com</p>
      </Container>
    </footer>
  );
}
