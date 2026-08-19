import {
  ChartBar,
  Compass,
  Gauge,
  MapTrifold,
} from "@phosphor-icons/react/dist/ssr";
import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { Container } from "./Container";

const icons = [Gauge, MapTrifold, ChartBar, Compass];

export function ToolsAndData({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const { toolsAndData } = getContent(locale);

  return (
    <section id="tools" className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
            {ui.tools.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {ui.tools.body}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4">
          {toolsAndData
            .filter((tool) => tool.featured)
            .map((tool, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={tool.name}
                  className="rounded-2xl border border-line/70 bg-paper-raised p-8 sm:flex sm:items-start sm:justify-between sm:gap-8"
                >
                  <div className="flex items-start gap-4">
                    <Icon size={26} weight="light" className="mt-1 shrink-0 text-accent-strong" />
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{tool.name}</h3>
                      <p className="mt-2 max-w-[52ch] text-[14px] leading-relaxed text-ink-soft">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                  <span className="mt-4 inline-block rounded-full border border-line px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-soft sm:mt-0 sm:shrink-0">
                    {tool.status}
                  </span>
                </div>
              );
            })}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {toolsAndData
              .filter((tool) => !tool.featured)
              .map((tool, i) => {
                const Icon = icons[i + 1];
                return (
                  <div
                    key={tool.name}
                    className="rounded-2xl border border-line/70 bg-paper-raised p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <Icon size={22} weight="light" className="text-accent-strong" />
                      <span className="rounded-full border border-line px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
                        {tool.status}
                      </span>
                    </div>
                    <h3 className="mt-6 text-base font-semibold text-ink">
                      {tool.name}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                      {tool.description}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </section>
  );
}
