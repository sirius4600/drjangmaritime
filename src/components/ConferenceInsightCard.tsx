import type { ConferenceInsightEntry } from "@/content/en/conferenceInsights";
import type { Locale } from "@/i18n/config";

export function ConferenceInsightCard({
  entry,
  locale,
}: {
  entry: ConferenceInsightEntry;
  locale: Locale;
}) {
  return (
    <a
      href={`/${locale}/insights#${entry.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line/70 bg-paper-raised p-7 transition-colors hover:border-accent-strong/60"
    >
      <span className="font-mono text-[11px] text-ink-soft">
        {entry.eventLabel} · {entry.date} · {entry.sessionCode}
      </span>
      <h3 className="mt-2 text-[15px] font-semibold leading-snug text-ink">
        {entry.title}
      </h3>
      <p className="mt-1 text-[12.5px] text-ink-soft">
        {entry.speaker} · {entry.affiliation}
      </p>
      <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-ink-soft">
        {entry.summary[0]}
      </p>
    </a>
  );
}
