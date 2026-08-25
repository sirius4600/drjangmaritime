import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUiDictionary, type UiDictionary } from "@/i18n/ui";
import type { ResearchProject } from "@/content/en/research";
import { Container } from "./Container";

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-ink-soft transition-transform duration-200 group-open:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ProjectRow({
  project,
  ui,
}: {
  project: ResearchProject;
  ui: UiDictionary;
}) {
  return (
    <div className="grid grid-cols-1 gap-1 border-b border-line/70 py-3 md:grid-cols-[7rem_1fr_auto] md:items-baseline md:gap-4">
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
          project.status === "Ongoing" ? "text-accent-strong" : "text-ink-soft"
        }`}
      >
        {project.status === "Ongoing"
          ? ui.research.status.ongoing
          : ui.research.status.completed}
      </span>
    </div>
  );
}

export function Research({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const { researchProjects, researchThemes } = getContent(locale);
  const recentProjects = researchProjects.slice(0, 5);

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

        <div className="mt-10 divide-y divide-line/70 border-y border-line/70">
          {researchThemes.map((theme) => {
            const themeProjects = researchProjects.filter(
              (p) => p.theme === theme.key || p.secondaryThemes?.includes(theme.key)
            );
            return (
              <details key={theme.key} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <div>
                    <h3 className="text-[14px] font-semibold text-ink">
                      {theme.name}
                      <span className="ml-2 font-mono text-[11px] font-normal text-ink-soft">
                        ({themeProjects.length})
                      </span>
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                      {theme.description}
                    </p>
                  </div>
                  <ChevronIcon />
                </summary>
                <div className="mt-4 border-t border-line/70">
                  {themeProjects.map((project) => (
                    <ProjectRow key={project.id} project={project} ui={ui} />
                  ))}
                </div>
              </details>
            );
          })}
        </div>

        <div className="mt-14">
          <h3 className="text-[13px] font-semibold uppercase tracking-wide text-ink-soft">
            {ui.research.recentHeading}
          </h3>
          <div className="mt-4 border-t border-line/70">
            {recentProjects.map((project) => (
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
        </div>

        <details className="group mt-14">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 border-t border-line/70 pt-4 [&::-webkit-details-marker]:hidden">
            <h3 className="text-[13px] font-semibold uppercase tracking-wide text-ink-soft">
              {ui.research.fullListHeading}
              <span className="ml-2 font-mono normal-case text-ink-soft">
                ({researchProjects.length})
              </span>
            </h3>
            <ChevronIcon />
          </summary>
          <div className="mt-4 border-t border-line/70">
            {researchProjects.map((project) => (
              <ProjectRow key={project.id} project={project} ui={ui} />
            ))}
          </div>
        </details>
      </Container>
    </section>
  );
}
