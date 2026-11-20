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
      className="relative overflow-hidden bg-[#0b1f35] lg:bg-[linear-gradient(180deg,#081627_0%,#0d2a45_45%,#1d4a6b_72%,#e9a46a_100%)]"
    >
      {/* 휴대폰: 글 아래에 3D, 데스크톱: 화면 전체 3D 위에 글 */}
      <div className="relative lg:min-h-[640px] lg:h-[calc(100svh-4rem)] lg:max-h-[860px]">
        <Container className="relative z-10 lg:absolute lg:inset-x-0 lg:top-0 lg:bottom-0 pointer-events-none pt-14 pb-6 lg:flex lg:h-full lg:items-center lg:py-0">
          <div className="max-w-xl pointer-events-auto">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#3dd6d0]">
              {ui.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-[#f2f6f8]">
              {ui.hero.headline}
            </h1>
            <p className="mt-6 max-w-[46ch] text-base md:text-lg leading-relaxed text-[#b7c6cf]">
              {ui.hero.subtext}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#intelligence"
                className="inline-flex items-center gap-2 rounded-full bg-[#0f9aa4] px-6 py-3 text-sm font-semibold text-[#ffffff] transition-colors hover:bg-[#0c7c85]"
              >
                {ui.hero.primaryCta}
                <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-[#f2f6f8] transition-colors hover:border-[#3dd6d0] hover:text-[#3dd6d0]"
              >
                {ui.hero.secondaryCta}
              </a>
            </div>
          </div>
        </Container>
        <div className="relative h-[420px] sm:h-[480px] lg:absolute lg:inset-0 lg:h-auto">
          <Hero3D greeting={ui.hero.greeting} tapHint={ui.hero.tapHint} />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,#0b1f35_0%,rgba(11,31,53,0)_100%)] lg:hidden" />
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[62%] bg-[linear-gradient(90deg,rgba(4,14,26,0.9)_0%,rgba(4,14,26,0.78)_45%,rgba(4,14,26,0)_100%)] lg:block" />
        </div>
      </div>
    </section>
  );
}
