import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { Container } from "./Container";

export function ProofStrip({ locale }: { locale: Locale }) {
  const { proofStats } = getContent(locale);

  return (
    <section className="border-y border-line/70 py-10">
      <Container>
        <dl className="grid grid-cols-2 gap-y-8 divide-x divide-line/70 md:grid-cols-4">
          {proofStats.map((stat) => (
            <div key={stat.label} className="px-4 text-center first:pl-0 md:px-6">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-mono text-2xl md:text-3xl font-semibold text-ink">
                {stat.value}
              </dd>
              <dd className="mt-1 text-[13px] leading-snug text-ink-soft">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
