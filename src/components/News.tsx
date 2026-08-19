import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { sortNewsByDateDesc } from "@/lib/news";
import { Container } from "./Container";
import { NewsCard } from "./NewsCard";

const PREVIEW_COUNT = 4;

export function News({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const { newsItems } = getContent(locale);
  const latest = sortNewsByDateDesc(newsItems).slice(0, PREVIEW_COUNT);

  return (
    <section id="news" className="py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
              {ui.news.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {ui.news.body}
            </p>
          </div>
          <a
            href={`/${locale}/news`}
            className="shrink-0 whitespace-nowrap rounded-full border border-line px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:border-accent-strong hover:text-accent-strong"
          >
            {ui.news.viewAll}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {latest.map((item) => (
            <NewsCard key={item.id} item={item} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}
