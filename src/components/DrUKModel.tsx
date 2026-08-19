import {
  ArrowRight,
  Brain,
  ChartLineUp,
  Database,
  Target,
  Warning,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "./Container";

const stages = [
  { icon: Database, label: "Data" },
  { icon: ChartLineUp, label: "Analysis" },
  { icon: Warning, label: "Risk" },
  { icon: Brain, label: "Intelligence" },
  { icon: Target, label: "Decision" },
];

export function DrUKModel() {
  return (
    <section className="bg-navy py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-paper-on-navy">
            Dr. UK Model
          </h2>
          <p className="mt-2 text-[15px] font-medium text-accent-strong">
            A new approach to maritime risk intelligence
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft-on-navy">
            A developing framework that combines maritime accident data,
            vessel traffic, and environmental and spatial factors to support
            better maritime safety decisions.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-stretch gap-2 md:flex-row md:items-center md:gap-2">
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex flex-1 items-center gap-2 md:flex-col md:items-stretch">
              <div className="flex flex-1 items-center gap-4 rounded-xl border border-navy-line bg-navy-raised px-5 py-4 md:flex-col md:items-center md:py-6 md:text-center">
                <stage.icon size={22} weight="light" className="shrink-0 text-accent-strong" />
                <span className="text-[13px] font-semibold text-paper-on-navy md:mt-1">
                  {stage.label}
                </span>
              </div>
              {i < stages.length - 1 && (
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="hidden shrink-0 text-navy-line md:block md:mx-1 md:rotate-0"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
