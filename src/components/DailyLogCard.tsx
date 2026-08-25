import Image from "next/image";
import type { DailyLogEntry } from "@/content/en/dailyLog";
import type { Locale } from "@/i18n/config";

export function DailyLogCard({
  entry,
  locale,
}: {
  entry: DailyLogEntry;
  locale: Locale;
}) {
  const thumbnail = entry.images?.[0];

  return (
    <a
      href={`/${locale}/log#${entry.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line/70 bg-paper-raised transition-colors hover:border-accent-strong/60"
    >
      {thumbnail && (
        <div className="aspect-[16/10] w-full overflow-hidden">
          <Image
            src={thumbnail}
            alt={entry.title}
            width={640}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-7">
        <span className="font-mono text-[11px] text-ink-soft">{entry.date}</span>
        <h3 className="mt-2 text-[15px] font-semibold leading-snug text-ink">
          {entry.title}
        </h3>
        <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-ink-soft">
          {entry.excerpt}
        </p>
      </div>
    </a>
  );
}
