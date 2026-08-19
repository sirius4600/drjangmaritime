import { Fragment } from "react";
import {
  ArrowRight,
  Brain,
  ChartLineUp,
  Database,
  Target,
  Warning,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "./Container";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";

const stageIcons = [Database, ChartLineUp, Warning, Brain, Target];

export function DrUKModel({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const stages = ui.drUkModel.stages;

  return (
    <section className="bg-navy py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-paper-on-navy">
            {ui.drUkModel.heading}
          </h2>
          <p className="mt-2 text-[15px] font-medium text-accent-strong">
            {ui.drUkModel.subheading}
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft-on-navy">
            {ui.drUkModel.body}
          </p>
        </div>

        <div className="mt-14 flex flex-col items-stretch gap-2 md:flex-row md:items-center md:gap-2">
          {stages.map((label, i) => {
            const Icon = stageIcons[i];
            return (
              <Fragment key={label}>
                <div className="flex flex-1 items-center gap-4 rounded-xl border border-navy-line bg-navy-raised px-5 py-4 md:flex-col md:items-center md:py-6 md:text-center">
                  <Icon size={22} weight="light" className="shrink-0 text-accent-strong" />
                  <span className="text-[13px] font-semibold text-paper-on-navy md:mt-1">
                    {label}
                  </span>
                </div>
                {i < stages.length - 1 && (
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="hidden shrink-0 text-navy-line md:block"
                  />
                )}
              </Fragment>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
