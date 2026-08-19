import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { WhyThisSite } from "@/components/WhyThisSite";
import { ImpactSection } from "@/components/ImpactSection";
import { ToolsAndData } from "@/components/ToolsAndData";
import { DrUKModel } from "@/components/DrUKModel";
import { Research } from "@/components/Research";
import { Expertise } from "@/components/Expertise";
import { OceanBridge } from "@/components/OceanBridge";
import { ForOrganizations } from "@/components/ForOrganizations";
import { TrustEvidence } from "@/components/TrustEvidence";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProofStrip />
        <WhyThisSite />
        <ImpactSection />
        <ToolsAndData />
        <DrUKModel />
        <Research />
        <Expertise />
        <OceanBridge />
        <ForOrganizations />
        <TrustEvidence />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
