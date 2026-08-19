import Image from "next/image";
import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { Container } from "./Container";

export function TrustEvidence({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const { awards, profile } = getContent(locale);

  return (
    <section id="about" className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <div className="overflow-hidden rounded-2xl border border-line/70">
            <Image
              src={profile.imoPhoto.src}
              alt={profile.imoPhoto.caption}
              width={1400}
              height={1366}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="w-full object-cover"
            />
          </div>
          <p className="mt-3 text-[12.5px] leading-relaxed text-ink-soft">
            {profile.imoPhoto.caption}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-4">
            <Image
              src={profile.heroPhoto}
              alt={profile.nameEn}
              width={112}
              height={112}
              sizes="56px"
              className="h-14 w-14 shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="text-[15px] font-semibold text-ink">
                {locale === "ko" ? profile.nameKo : profile.nameEn}
              </p>
              <p className="text-[13px] text-ink-soft">{profile.title}</p>
            </div>
          </div>

          <h2 className="mt-8 text-2xl md:text-3xl font-semibold tracking-tight text-ink">
            {ui.trustEvidence.heading}
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">
            {profile.credential}. {profile.license}. {ui.trustEvidence.advisorLine}
          </p>

          <div className="mt-10 divide-y divide-line/70 border-t border-line/70">
            {awards.map((award) => (
              <div
                key={award.title}
                className="grid grid-cols-[3.5rem_1fr] gap-4 py-4"
              >
                <span className="font-mono text-[13px] text-ink-soft">
                  {award.year}
                </span>
                <div>
                  <p className="text-[14px] font-medium leading-snug text-ink">
                    {award.title}
                  </p>
                  {award.reason && (
                    <p className="mt-0.5 text-[12.5px] text-ink-soft">
                      {award.reason}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
