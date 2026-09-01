import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { sortConferenceInsightsByDateDesc } from "@/lib/conferenceInsights";
import { Container } from "./Container";
import { ConferenceInsightCard } from "./ConferenceInsightCard";

const PREVIEW_COUNT = 3;

export function ConferenceInsightsSection({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const { conferenceInsights } = getContent(locale);
  if (conferenceInsights.length === 0) return null;

  const latest = sortConferenceInsightsByDateDesc(conferenceInsights).slice(
    0,
    PREVIEW_COUNT,
  );

  return (
    <section id="conference-insights" className="py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
              {ui.conferenceInsights.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {ui.conferenceInsights.subtext}
            </p>
          </div>
          <a
            href={`/${locale}/insights`}
            className="shrink-0 whitespace-nowrap rounded-full border border-line px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:border-accent-strong hover:text-accent-strong"
          >
            {ui.conferenceInsights.viewAll}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((entry) => (
            <ConferenceInsightCard
              key={entry.id}
              entry={entry}
              locale={locale}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
