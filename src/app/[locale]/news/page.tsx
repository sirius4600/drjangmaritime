import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import { newsCategories, type NewsCategory } from "@/content/en/news";
import { isLocale, type Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { sortNewsByDateDesc } from "@/lib/news";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsCard";

const PAGE_SIZE = 12;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ko";
  const ui = getUiDictionary(locale);

  return {
    title: ui.news.heading,
    description: ui.news.body,
    alternates: {
      canonical: `https://drjangmaritime.com/${locale}/news`,
      languages: {
        ko: "https://drjangmaritime.com/ko/news",
        en: "https://drjangmaritime.com/en/news",
      },
    },
  };
}

function isNewsCategory(value: string): value is NewsCategory {
  return (newsCategories as readonly string[]).includes(value);
}

export default async function NewsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;

  const { category: rawCategory, page: rawPage } = await searchParams;
  const ui = getUiDictionary(locale);
  const { newsItems } = getContent(locale);

  const activeCategory =
    rawCategory && isNewsCategory(rawCategory) ? rawCategory : undefined;

  const filtered = activeCategory
    ? newsItems.filter((item) => item.category === activeCategory)
    : newsItems;
  const sorted = sortNewsByDateDesc(filtered);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const requestedPage = parseInt(rawPage ?? "1", 10);
  const currentPage = Math.min(
    Math.max(Number.isFinite(requestedPage) ? requestedPage : 1, 1),
    totalPages,
  );
  const pageItems = sorted.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const hrefFor = (opts: { category?: NewsCategory; page?: number }) => {
    const qs = new URLSearchParams();
    if (opts.category) qs.set("category", opts.category);
    if (opts.page && opts.page > 1) qs.set("page", String(opts.page));
    const query = qs.toString();
    return `/${locale}/news${query ? `?${query}` : ""}`;
  };

  const chipClass = (active: boolean) =>
    `rounded-full border px-3.5 py-1.5 text-[12px] font-semibold transition-colors ${
      active
        ? "border-ink bg-ink text-paper"
        : "border-line text-ink-soft hover:text-ink"
    }`;

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
                {ui.news.heading}
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                {ui.news.body}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <a href={hrefFor({})} className={chipClass(!activeCategory)}>
                {ui.news.filterAll}
              </a>
              {newsCategories.map((cat) => (
                <a
                  key={cat}
                  href={hrefFor({ category: cat })}
                  className={chipClass(activeCategory === cat)}
                >
                  {ui.news.categories[cat]}
                </a>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((item) => (
                <NewsCard key={item.id} item={item} locale={locale} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-between border-t border-line/70 pt-6 text-[13px] text-ink-soft">
                <a
                  href={hrefFor({
                    category: activeCategory,
                    page: currentPage - 1,
                  })}
                  className={
                    currentPage <= 1
                      ? "pointer-events-none opacity-40"
                      : "transition-colors hover:text-ink"
                  }
                >
                  ← {ui.news.pagination.prev}
                </a>
                <span className="font-mono text-[12px]">
                  {currentPage} / {totalPages}
                </span>
                <a
                  href={hrefFor({
                    category: activeCategory,
                    page: currentPage + 1,
                  })}
                  className={
                    currentPage >= totalPages
                      ? "pointer-events-none opacity-40"
                      : "transition-colors hover:text-ink"
                  }
                >
                  {ui.news.pagination.next} →
                </a>
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
