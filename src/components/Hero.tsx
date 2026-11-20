import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "./Container";
import { Hero3D } from "./Hero3D";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";

export function Hero({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#081627_0%,#0d2a45_45%,#1d4a6b_72%,#e9a46a_100%)]"
    >
      {/* 휴대폰: 글 아래에 3D, 데스크톱: 화면 전체 3D 위에 글 */}
      <div className="relative lg:min-h-[640px] lg:h-[calc(100svh-4rem)] lg:max-h-[860px]">
        <Container className="relative z-10 lg:absolute lg:inset-x-0 lg:top-0 lg:bottom-0 pointer-events-none pt-14 pb-6 lg:flex lg:h-full lg:items-center lg:py-0">
          <div className="max-w-xl pointer-events-auto">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
              {ui.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-paper-on-navy">
              {ui.hero.headline}
            </h1>
            <p className="mt-6 max-w-[46ch] text-base md:text-lg leading-relaxed text-ink-soft-on-navy">
              {ui.hero.subtext}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#intelligence"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
              >
                {ui.hero.primaryCta}
                <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-paper-on-navy transition-colors hover:border-accent hover:text-accent"
              >
                {ui.hero.secondaryCta}
              </a>
            </div>
          </div>
        </Container>
        <div className="relative h-[420px] sm:h-[480px] lg:absolute lg:inset-0 lg:h-auto">
          <Hero3D greeting={ui.hero.greeting} tapHint={ui.hero.tapHint} />
        </div>
      </div>
    </section>
  );
}
