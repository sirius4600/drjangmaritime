import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { Container } from "./Container";

export function Expertise({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const { expertiseAreas } = getContent(locale);

  return (
    <section className="py-20 md:py-28">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
          {ui.expertise.heading}
        </h2>

        <div className="mt-10 grid grid-cols-2 border-l border-t border-line/70 md:grid-cols-4">
          {expertiseAreas.map((area) => (
            <div
              key={area.slug}
              className="border-b border-r border-line/70 px-5 py-7"
            >
              <span className="block h-1.5 w-1.5 rounded-full bg-accent-strong" />
              <p className="mt-4 text-[14px] font-medium leading-snug text-ink">
                {area.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
