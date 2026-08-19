import {
  ChartBar,
  Globe,
  GraduationCap,
  Robot,
  ShieldCheck,
  TestTube,
} from "@phosphor-icons/react/dist/ssr";
import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { Container } from "./Container";

const icons = [TestTube, ShieldCheck, Robot, ChartBar, GraduationCap, Globe];

export function ForOrganizations({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const { organizationServices } = getContent(locale);

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
            {ui.organizations.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {ui.organizations.subtext}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {organizationServices.map((service, i) => {
            const Icon = icons[i];
            return (
              <div key={service.title} className="flex gap-4">
                <Icon size={22} weight="light" className="mt-1 shrink-0 text-accent-strong" />
                <div>
                  <h3 className="text-[15px] font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent-strong"
          >
            {ui.organizations.cta}
          </a>
        </div>
      </Container>
    </section>
  );
}
