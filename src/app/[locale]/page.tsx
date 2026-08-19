import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { WhyThisSite } from "@/components/WhyThisSite";
import { ImpactSection } from "@/components/ImpactSection";
import { ToolsAndData } from "@/components/ToolsAndData";
import { DrUKModel } from "@/components/DrUKModel";
import { Research } from "@/components/Research";
import { News } from "@/components/News";
import { Expertise } from "@/components/Expertise";
import { OceanBridge } from "@/components/OceanBridge";
import { ForOrganizations } from "@/components/ForOrganizations";
import { TrustEvidence } from "@/components/TrustEvidence";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { isLocale, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <Hero locale={locale} />
        <ProofStrip locale={locale} />
        <WhyThisSite locale={locale} />
        <ImpactSection locale={locale} />
        <ToolsAndData locale={locale} />
        <DrUKModel locale={locale} />
        <Research locale={locale} />
        <News locale={locale} />
        <Expertise locale={locale} />
        <OceanBridge locale={locale} />
        <ForOrganizations locale={locale} />
        <TrustEvidence locale={locale} />
        <Publications locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
