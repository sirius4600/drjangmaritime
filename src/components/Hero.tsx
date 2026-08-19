import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "./Container";
import { MaritimeIntelligenceVisual } from "./MaritimeIntelligenceVisual";

export function Hero() {
  return (
    <section id="top" className="pt-14 md:pt-20 pb-16 md:pb-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent-strong">
            Maritime Safety · AI Research
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-ink">
            Understanding the maritime world. Building its future.
          </h1>
          <p className="mt-6 max-w-[46ch] text-base md:text-lg leading-relaxed text-ink-soft">
            Three decades of maritime safety, VTS and IMO experience, now
            building the AI and data tools for maritime risk intelligence.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#intelligence"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent-strong"
            >
              Explore Maritime Intelligence
              <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent-strong hover:text-accent-strong"
            >
              Work with Dr. Jang
            </a>
          </div>
        </div>

        <div className="relative aspect-[5/6] w-full max-w-md justify-self-center lg:justify-self-end overflow-hidden rounded-2xl bg-navy shadow-[0_30px_70px_-30px_rgba(10,20,30,0.45)]">
          <MaritimeIntelligenceVisual />
        </div>
      </Container>
    </section>
  );
}
