import { researchProjects, researchThemes } from "@/content/research";
import { Container } from "./Container";

const flagshipTitles = [
  "Remote-Controllable Maritime Firefighting System Using Autonomous Ship Technology",
  "MASS Technology Development Research, Phase 2 (Shipping Sector 7)",
  "Cloud-Based Next-Generation VTS Integration Platform",
  "Source Technology Development of AI System for Autonomous Ship Navigation Control",
  "VTS White Paper: Twenty Years of Vessel Traffic Services in Korea",
];

export function Research() {
  const flagship = researchProjects.filter((p) =>
    flagshipTitles.includes(p.title)
  );

  return (
    <section id="research" className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
            Researching the future of maritime operations
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            Fifty-plus national R&amp;D and government-commissioned studies
            since 2010, spanning autonomous ships, VTS and maritime safety
            systems.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {researchThemes.map((theme) => (
            <div key={theme.name}>
              <h3 className="text-[14px] font-semibold text-ink">
                {theme.name}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                {theme.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-line/70">
          {flagship.map((project) => (
            <div
              key={project.title}
              className="grid grid-cols-1 gap-2 border-b border-line/70 py-5 md:grid-cols-[1fr_auto] md:items-center md:gap-6"
            >
              <div>
                <h3 className="text-[14.5px] font-medium leading-snug text-ink">
                  {project.title}
                </h3>
                <p className="mt-1 text-[12.5px] text-ink-soft">
                  {project.funder} · {project.role}
                </p>
              </div>
              <div className="flex items-center gap-3 md:justify-end">
                <span className="font-mono text-[12px] text-ink-soft">
                  {project.period}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                    project.status === "Ongoing"
                      ? "bg-accent-soft text-accent-strong"
                      : "border border-line text-ink-soft"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
