import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { Container } from "./Container";

export function Publications({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const { books, papers, patents } = getContent(locale);

  const groups = [
    { label: ui.publications.groups.books, items: books.map((b) => ({ title: b.title, meta: b.year })) },
    {
      label: ui.publications.groups.papers,
      items: papers.map((p) => ({ title: p.title, meta: `${p.venue}, ${p.year}` })),
    },
    {
      label: ui.publications.groups.patents,
      items: patents.map((p) => ({ title: p.title, meta: `${p.status}, ${p.year}` })),
    },
  ];

  return (
    <section id="publications" className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
            {ui.publications.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {ui.publications.body}
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="text-base font-semibold text-ink">{group.label}</h3>
              <div className="mt-4 divide-y divide-line/70 border-t border-line/70">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="grid grid-cols-1 gap-1 py-4 md:grid-cols-[1fr_auto] md:items-baseline md:gap-6"
                  >
                    <p className="text-[14px] leading-snug text-ink">
                      {item.title}
                    </p>
                    <p className="font-mono text-[12px] whitespace-nowrap text-ink-soft md:text-right">
                      {item.meta}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
