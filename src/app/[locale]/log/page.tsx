import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import { isLocale, type Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { sortDailyLogByDateDesc } from "@/lib/dailyLog";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EvidencePhotos } from "@/components/EvidencePhotos";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ko";
  const ui = getUiDictionary(locale);

  return {
    title: ui.dailyLog.heading,
    description: ui.dailyLog.subtext,
    alternates: {
      canonical: `https://drjangmaritime.com/${locale}/log`,
      languages: {
        ko: "https://drjangmaritime.com/ko/log",
        en: "https://drjangmaritime.com/en/log",
        ja: "https://drjangmaritime.com/ja/log",
        es: "https://drjangmaritime.com/es/log",
      },
    },
  };
}

export default async function DailyLogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;

  const ui = getUiDictionary(locale);
  const { dailyLogEntries } = getContent(locale);
  const sorted = sortDailyLogByDateDesc(dailyLogEntries);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
                {ui.dailyLog.heading}
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                {ui.dailyLog.subtext}
              </p>
            </div>

            <div className="mt-14 space-y-14">
              {sorted.map((entry) => (
                <article
                  key={entry.id}
                  id={entry.id}
                  className="border-t border-line/70 pt-10 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-[12px] tracking-wide text-ink-soft">
                    {entry.date}
                    {entry.location ? ` · ${entry.location}` : ""}
                  </span>
                  <h2 className="mt-2 max-w-2xl text-xl font-semibold leading-snug text-ink md:text-2xl">
                    {entry.title}
                  </h2>
                  <div className="mt-4 max-w-2xl space-y-4 text-[14.5px] leading-relaxed text-ink-soft">
                    {entry.body.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  {entry.images && entry.images.length > 0 && (
                    <EvidencePhotos
                      images={entry.images}
                      alt={entry.title}
                      locale={locale}
                    />
                  )}
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
