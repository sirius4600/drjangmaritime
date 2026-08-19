import Image from "next/image";
import { awards } from "@/content/awards";
import { profile } from "@/content/profile";
import { Container } from "./Container";

export function TrustEvidence() {
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
              className="w-full object-cover"
            />
          </div>
          <p className="mt-3 text-[12.5px] leading-relaxed text-ink-soft">
            {profile.imoPhoto.caption}
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
            Show evidence, not adjectives
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">
            {profile.credential}. {profile.license}. IMO and IALA advisor
            since 2005 and 2011 respectively.
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
