import {
  ArrowUpRight,
  Broadcast,
  Compass,
  Globe,
  Leaf,
  LockKey,
  Robot,
  ShieldCheck,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import type { NewsCategory, NewsItem } from "@/content/en/news";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";

const categoryIcons: Record<NewsCategory, typeof Globe> = {
  imo: Globe,
  iala: Compass,
  safety: ShieldCheck,
  mass: Robot,
  cyber: LockKey,
  green: Leaf,
  enav: Broadcast,
  seafarer: UsersThree,
};

export function NewsCard({ item, locale }: { item: NewsItem; locale: Locale }) {
  const ui = getUiDictionary(locale);
  const Icon = categoryIcons[item.category];

  return (
    <a
      href={item.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-line/70 bg-paper-raised p-7 transition-colors hover:border-accent-strong/60"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
          <Icon size={13} weight="bold" className="text-accent-strong" />
          {ui.news.categories[item.category]}
        </span>
        <span className="font-mono text-[11px] text-ink-soft">{item.date}</span>
      </div>

      <h3 className="mt-5 text-[15px] font-semibold leading-snug text-ink">
        {item.title}
      </h3>
      <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-ink-soft">
        {item.summary}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-line/70 pt-4 text-[12px] text-ink-soft">
        <span>{item.source}</span>
        <span className="inline-flex items-center gap-1 font-medium text-accent-strong transition-transform group-hover:translate-x-0.5">
          {ui.news.readMore}
          <ArrowUpRight size={13} weight="bold" />
        </span>
      </div>
    </a>
  );
}
