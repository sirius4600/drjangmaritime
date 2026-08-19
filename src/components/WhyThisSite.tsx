import {
  BookOpen,
  ChartLineUp,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "./Container";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";

const icons = [BookOpen, ChartLineUp, UsersThree];

export function WhyThisSite({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);

  return (
    <section id="intelligence" className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
            {ui.whyThisSite.heading}
          </h2>
          <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">
            {ui.whyThisSite.body}
          </p>
        </div>

        <div className="divide-y divide-line/70 border-t border-line/70 lg:border-t-0">
          {ui.whyThisSite.pillars.map((pillar, i) => {
            const Icon = icons[i];
            return (
              <div key={pillar.title} className="flex gap-5 py-6 first:pt-0">
                <Icon
                  size={22}
                  weight="light"
                  className="mt-1 shrink-0 text-accent-strong"
                />
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
