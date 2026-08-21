import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { Container } from "./Container";
import { EvidencePhotos } from "./EvidencePhotos";
import { EvidenceVideo } from "./EvidenceVideo";

export function Experience({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const { experience, education, currentAffiliations } = getContent(locale);

  return (
    <section id="experience" className="py-20 md:py-28">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
          {ui.experience.heading}
        </h2>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">
          {ui.experience.body}
        </p>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wide text-ink-soft">
              {ui.experience.careerLabel}
            </h3>
            <ol className="mt-6 space-y-8 border-l border-line/70 pl-6">
              {experience.map((entry) => (
                <li key={`${entry.org}-${entry.period}`} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-accent-strong" />
                  <p className="font-mono text-[12px] tracking-wide text-ink-soft">
                    {entry.period}
                  </p>
                  <h4 className="mt-1.5 text-[15px] font-semibold leading-snug text-ink">
                    {entry.role}
                  </h4>
                  <p className="text-[13.5px] text-ink-soft">{entry.org}</p>
                  {entry.detail && (
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">
                      {entry.detail}
                    </p>
                  )}
                  {entry.images && entry.images.length > 0 && (
                    <EvidencePhotos
                      images={entry.images}
                      alt={entry.role}
                      locale={locale}
                    />
                  )}
                  {entry.video && (
                    <EvidenceVideo
                      src={entry.video.src}
                      poster={entry.video.poster}
                      alt={entry.role}
                      locale={locale}
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-[13px] font-semibold uppercase tracking-wide text-ink-soft">
                {ui.experience.educationLabel}
              </h3>
              <div className="mt-4 divide-y divide-line/70 border-t border-line/70">
                {education.map((entry) => (
                  <div
                    key={entry.degree}
                    className="grid grid-cols-[8rem_1fr] gap-4 py-3"
                  >
                    <span className="whitespace-nowrap font-mono text-[12.5px] text-ink-soft">
                      {entry.period}
                    </span>
                    <div>
                      <p className="text-[14px] font-medium leading-snug text-ink">
                        {entry.degree}
                      </p>
                      <p className="text-[12.5px] text-ink-soft">{entry.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[13px] font-semibold uppercase tracking-wide text-ink-soft">
                {ui.experience.affiliationsLabel}
              </h3>
              <div className="mt-4 divide-y divide-line/70 border-t border-line/70">
                {currentAffiliations.map((entry) => (
                  <div
                    key={`${entry.org}-${entry.role}`}
                    className="grid grid-cols-[8rem_1fr] gap-4 py-3"
                  >
                    <span className="whitespace-nowrap font-mono text-[12.5px] text-ink-soft">
                      {entry.period}
                    </span>
                    <div>
                      <p className="text-[14px] font-medium leading-snug text-ink">
                        {entry.role}
                      </p>
                      <p className="text-[12.5px] text-ink-soft">{entry.org}</p>
                      {entry.images && entry.images.length > 0 && (
                        <EvidencePhotos
                          images={entry.images}
                          alt={entry.role}
                          locale={locale}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
