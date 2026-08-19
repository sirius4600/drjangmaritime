import { profile } from "@/content/profile";
import { Container } from "./Container";

const footerNav = [
  { label: "Maritime Intelligence", href: "#intelligence" },
  { label: "Research", href: "#research" },
  { label: "Tools & Data", href: "#tools" },
  { label: "Ocean Bridge", href: "#ocean-bridge" },
  { label: "Publications", href: "#publications" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-navy py-14">
      <Container className="flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <p className="text-sm font-semibold text-paper-on-navy">
            Dr. Unkyu Jang
          </p>
          <p className="mt-1 text-[13px] text-ink-soft-on-navy">
            Maritime Intelligence
          </p>
          <p className="mt-4 text-[13px] leading-relaxed text-ink-soft-on-navy">
            Connecting maritime research, technology and people.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-[13px] text-ink-soft-on-navy sm:grid-cols-3">
          {footerNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-paper-on-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>

      <Container className="mt-12 flex flex-col gap-3 border-t border-navy-line pt-6 text-[12px] text-ink-soft-on-navy sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.nameEn}. All rights reserved.</p>
        <p>drjangmaritime.com</p>
      </Container>
    </footer>
  );
}
