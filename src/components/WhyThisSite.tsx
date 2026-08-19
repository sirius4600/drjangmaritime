import {
  BookOpen,
  ChartLineUp,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "./Container";

const pillars = [
  {
    icon: BookOpen,
    title: "Knowledge",
    description: "Research, regulations, trends and practical maritime insight.",
  },
  {
    icon: ChartLineUp,
    title: "Intelligence",
    description: "Data, analysis, risk assessment and emerging technology.",
  },
  {
    icon: UsersThree,
    title: "Connection",
    description: "People, careers, research and international collaboration.",
  },
];

export function WhyThisSite() {
  return (
    <section id="intelligence" className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
            A different kind of maritime platform
          </h2>
          <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">
            Most maritime information is scattered across regulations,
            reports, academic papers and fragmented databases. This platform
            brings research, safety information, technology trends and
            professional insight into one place.
          </p>
        </div>

        <div className="divide-y divide-line/70 border-t border-line/70 lg:border-t-0">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex gap-5 py-6 first:pt-0">
              <pillar.icon
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
          ))}
        </div>
      </Container>
    </section>
  );
}
