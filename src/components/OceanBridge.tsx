import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { Container } from "./Container";

export function OceanBridge({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const { oceanBridgeTracks } = getContent(locale);

  return (
    <section id="ocean-bridge" className="bg-paper-raised py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
            {ui.oceanBridge.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {ui.oceanBridge.body}
          </p>
        </div>

        <div className="mt-10 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {oceanBridgeTracks.map((track) => (
            <div
              key={track.title}
              className="w-[78%] shrink-0 snap-start rounded-2xl border border-line/70 bg-paper p-6 sm:w-[45%] md:w-auto"
            >
              <h3 className="text-[15px] font-semibold text-ink">
                {track.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
