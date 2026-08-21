import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";
import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui";
import { Container } from "./Container";

const channelIcons = [EnvelopeSimple, Phone];

export function Contact({ locale }: { locale: Locale }) {
  const ui = getUiDictionary(locale);
  const { contactChannels, contactPathways, profile } = getContent(locale);

  return (
    <section id="contact" className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
            {ui.contact.heading}
          </h2>
          <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-ink-soft">
            {ui.contact.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {contactPathways.map((pathway) => (
              <a
                key={pathway.title}
                href={`mailto:${profile.email}?subject=${encodeURIComponent(
                  `[${pathway.title}]`,
                )}`}
                title={pathway.description}
                className="rounded-full border border-line/70 px-4 py-2 text-[13px] font-medium text-ink-soft transition hover:border-accent-strong hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-strong"
              >
                {pathway.title}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-navy p-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-accent-strong">
            {ui.contact.directContact}
          </p>
          <div className="mt-6 space-y-5">
            {contactChannels.map((channel, i) => {
              const Icon = channelIcons[i];
              return (
                <div key={channel.label} className="flex items-start gap-3">
                  <Icon size={18} weight="light" className="mt-0.5 shrink-0 text-accent-strong" />
                  <div>
                    <p className="text-[12px] text-ink-soft-on-navy">{channel.label}</p>
                    <p className="text-[14px] font-medium text-paper-on-navy">
                      {channel.value}
                    </p>
                    {channel.valueSecondary && (
                      <p className="text-[13px] text-ink-soft-on-navy">
                        {channel.valueSecondary}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent"
          >
            {ui.contact.emailCta}
          </a>
        </div>
      </Container>
    </section>
  );
}
