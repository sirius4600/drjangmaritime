import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { sortDailyLogByDateDesc } from "@/lib/dailyLog";
import { Container } from "./Container";
import { DailyLogCard } from "./DailyLogCard";

const PREVIEW_COUNT = 3;

export function DailyLogSection({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const { dailyLogEntries } = getContent(locale);
  if (dailyLogEntries.length === 0) return null;

  const latest = sortDailyLogByDateDesc(dailyLogEntries).slice(
    0,
    PREVIEW_COUNT,
  );

  return (
    <section id="daily-log" className="py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
              {ui.dailyLog.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {ui.dailyLog.subtext}
            </p>
          </div>
          <a
            href={`/${locale}/log`}
            className="shrink-0 whitespace-nowrap rounded-full border border-line px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:border-accent-strong hover:text-accent-strong"
          >
            {ui.dailyLog.viewAll}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((entry) => (
            <DailyLogCard key={entry.id} entry={entry} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}
