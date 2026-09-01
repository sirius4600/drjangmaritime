import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import { isLocale, type Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { sortConferenceInsightsByDateDesc } from "@/lib/conferenceInsights";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ko";
  const ui = getUiDictionary(locale);

  return {
    title: ui.conferenceInsights.heading,
    description: ui.conferenceInsights.subtext,
    alternates: {
      canonical: `https://drjangmaritime.com/${locale}/insights`,
      languages: {
        ko: "https://drjangmaritime.com/ko/insights",
        en: "https://drjangmaritime.com/en/insights",
        ja: "https://drjangmaritime.com/ja/insights",
        es: "https://drjangmaritime.com/es/insights",
      },
    },
  };
}

export default async function ConferenceInsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;

  const ui = getUiDictionary(locale);
  const { conferenceInsights, conferenceInsightsOverview } = getContent(locale);
  const sorted = sortConferenceInsightsByDateDesc(conferenceInsights);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
                {ui.conferenceInsights.heading}
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                {ui.conferenceInsights.subtext}
              </p>
            </div>

            {conferenceInsightsOverview && (
              <div className="mt-12 rounded-2xl border border-accent-strong/30 bg-paper-raised p-8">
                <span className="text-[13px] font-semibold uppercase tracking-wide text-accent-strong">
                  {ui.conferenceInsights.overviewHeading}
                </span>
                <h2 className="mt-2 text-xl font-semibold leading-snug text-ink md:text-2xl">
                  {conferenceInsightsOverview.title}
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-[13px] font-semibold uppercase tracking-wide text-accent-strong">
                      {ui.conferenceInsights.summaryLabel}
                    </h3>
                    <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-ink-soft">
                      {conferenceInsightsOverview.summary.map((line, i) => (
                        <li key={i} className="flex gap-2">
                          <span aria-hidden="true">·</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[13px] font-semibold uppercase tracking-wide text-accent-strong">
                      {ui.conferenceInsights.implicationsLabel}
                    </h3>
                    <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-ink-soft">
                      {conferenceInsightsOverview.implications.map(
                        (line, i) => (
                          <li key={i} className="flex gap-2">
                            <span aria-hidden="true">·</span>
                            <span>{line}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-14 space-y-14">
              {sorted.map((entry) => (
                <article
                  key={entry.id}
                  id={entry.id}
                  className="border-t border-line/70 pt-10 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-[12px] tracking-wide text-ink-soft">
                    {entry.eventLabel} · {entry.location} · {entry.date} ·{" "}
                    {entry.sessionCode}
                  </span>
                  <h2 className="mt-2 max-w-2xl text-xl font-semibold leading-snug text-ink md:text-2xl">
                    {entry.title}
                  </h2>
                  <p className="mt-1.5 text-[13.5px] text-ink-soft">
                    {entry.speaker} · {entry.affiliation}
                  </p>

                  <div
                    className={`mt-6 grid grid-cols-1 gap-8${
                      entry.implications?.length ? " md:grid-cols-2" : ""
                    }`}
                  >
                    <div>
                      <h3 className="text-[13px] font-semibold uppercase tracking-wide text-accent-strong">
                        {ui.conferenceInsights.summaryLabel}
                      </h3>
                      <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-ink-soft">
                        {entry.summary.map((line, i) => (
                          <li key={i} className="flex gap-2">
                            <span aria-hidden="true">·</span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {entry.implications && entry.implications.length > 0 && (
                      <div>
                        <h3 className="text-[13px] font-semibold uppercase tracking-wide text-accent-strong">
                          {ui.conferenceInsights.implicationsLabel}
                        </h3>
                        <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-ink-soft">
                          {entry.implications.map((line, i) => (
                            <li key={i} className="flex gap-2">
                              <span aria-hidden="true">·</span>
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {entry.pdfUrl && (
                    <a
                      href={entry.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:border-accent-strong hover:text-accent-strong"
                    >
                      {ui.conferenceInsights.downloadLabel}
                    </a>
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
