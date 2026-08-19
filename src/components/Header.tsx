import Link from "next/link";
import { Container } from "./Container";

const navItems = [
  { label: "Maritime Intelligence", href: "#intelligence" },
  { label: "Research", href: "#research" },
  { label: "Tools & Data", href: "#tools" },
  { label: "Ocean Bridge", href: "#ocean-bridge" },
  { label: "Publications", href: "#publications" },
  { label: "About", href: "#about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="#top"
          className="flex flex-col leading-tight shrink-0"
          aria-label="Dr. Unkyu Jang, Maritime Intelligence, home"
        >
          <span className="text-[13px] font-semibold tracking-tight text-ink">
            Dr. Unkyu Jang
          </span>
          <span className="text-[10px] uppercase tracking-[0.16em] text-accent-strong">
            Maritime Intelligence
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

        <a
          href="#contact"
          className="shrink-0 rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-paper transition-colors hover:bg-accent-strong whitespace-nowrap"
        >
          Work with Dr. Jang
        </a>
      </Container>
    </header>
  );
}
