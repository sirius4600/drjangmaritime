import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { Container } from "./Container";

export function Research({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const { researchProjects, researchThemes } = getContent(locale);
  const flagship = researchProjects.filter((p) => p.flagship);

  return (
    <section id="research" className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
            {ui.research.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {ui.research.body}
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
              key={project.id}
              className="grid grid-cols-1 gap-2 border-b border-line/70 py-5 md:grid-cols-[1fr_auto] md:items-center md:gap-6"
            >
              <div>
                <h3 className="text-[14.5px] font-medium leading-snug text-ink">
                  {project.isRnd && (
                    <span className="mr-1.5 font-mono text-[11px] font-semibold tracking-wide text-accent-strong">
                      R&D
                    </span>
                  )}
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
                  {project.status === "Ongoing"
                    ? ui.research.status.ongoing
                    : ui.research.status.completed}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-[13px] font-semibold uppercase tracking-wide text-ink-soft">
            {ui.research.fullListHeading}
          </h3>
          <div className="mt-4 border-t border-line/70">
            {researchProjects.map((project) => (
              <div
                key={project.id}
                className="grid grid-cols-1 gap-1 border-b border-line/70 py-3 md:grid-cols-[7rem_1fr_auto] md:items-baseline md:gap-4"
              >
                <span className="font-mono text-[11.5px] text-ink-soft">
                  {project.period}
                </span>
                <p className="text-[13px] leading-snug text-ink">
                  {project.isRnd && (
                    <span className="mr-1.5 font-mono text-[10px] font-semibold text-accent-strong">
                      R&D
                    </span>
                  )}
                  {project.title}
                  <span className="text-ink-soft"> — {project.funder} · {project.role}</span>
                </p>
                <span
                  className={`justify-self-start text-[10px] font-semibold uppercase tracking-wide md:justify-self-end ${
                    project.status === "Ongoing"
                      ? "text-accent-strong"
                      : "text-ink-soft"
                  }`}
                >
                  {project.status === "Ongoing"
                    ? ui.research.status.ongoing
                    : ui.research.status.completed}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
