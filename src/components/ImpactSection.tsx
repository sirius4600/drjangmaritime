import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { Container } from "./Container";

export function ImpactSection({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const { impactTimeline, impactPillars } = getContent(locale);

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
              {ui.impact.heading}
            </h2>
            <p className="mt-4 max-w-[40ch] text-[14px] leading-relaxed text-ink-soft">
              {ui.impact.subtext}
            </p>

            <ol className="mt-10 space-y-8 border-l border-line/70 pl-6">
              {impactTimeline.map((entry) => (
                <li key={entry.title} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-accent-strong" />
                  <p className="font-mono text-[12px] tracking-wide text-ink-soft">
                    {entry.date} · {entry.category}
                  </p>
                  <h3 className="mt-1.5 text-[15px] font-semibold leading-snug text-ink">
                    {entry.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">
                    {entry.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {impactPillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`rounded-2xl p-6 ${
                  i % 2 === 0
                    ? "bg-navy text-paper-on-navy"
                    : "bg-paper-raised border border-line/70 text-ink"
                }`}
              >
                <h3
                  className={`text-[15px] font-semibold ${
                    i % 2 === 0 ? "text-paper-on-navy" : "text-ink"
                  }`}
                >
                  {pillar.title}
                </h3>
                <p
                  className={`mt-2.5 text-[13.5px] leading-relaxed ${
                    i % 2 === 0 ? "text-ink-soft-on-navy" : "text-ink-soft"
                  }`}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
