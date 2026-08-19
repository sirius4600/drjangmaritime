export interface ResearchProject {
  id: string;
  title: string;
  funder: string;
  role: "Principal Researcher" | "Co-Researcher" | "Advisor";
  period: string;
  status: "Completed" | "Ongoing";
  theme: "MASS & AI" | "VTS" | "Safety Systems" | "Policy";
  flagship?: boolean;
}

// National R&D and government-commissioned research, selected from a
// record of 50+ studies. Full list available on request.
export const researchProjects: ResearchProject[] = [
  {
    id: "safety-culture-program",
    title:
      "Research on Building a Safety Education Culture System for Shipping Companies and Workplaces",
    funder: "Ministry of Oceans and Fisheries",
    role: "Principal Researcher",
    period: "2026",
    status: "Ongoing",
    theme: "Safety Systems",
    flagship: true,
  },
  {
    id: "firefighting-mass",
    title:
      "Remote-Controllable Maritime Firefighting System Using Autonomous Ship Technology",
    funder: "KIET",
    role: "Principal Researcher",
    period: "2023 - 2026",
    status: "Completed",
    theme: "MASS & AI",
    flagship: true,
  },
  {
    id: "mass-phase2",
    title: "MASS Technology Development Research, Phase 2 (Shipping Sector 7)",
    funder: "KIMST-KMI",
    role: "Principal Researcher",
    period: "2022 - 2025",
    status: "Completed",
    theme: "MASS & AI",
    flagship: true,
  },
  {
    id: "vts-cloud-platform",
    title: "Cloud-Based Next-Generation VTS Integration Platform",
    funder: "KIMST",
    role: "Co-Researcher",
    period: "2021 - 2023",
    status: "Completed",
    theme: "VTS",
    flagship: true,
  },
  {
    id: "vts-english-assessment",
    title: "VTS Operator English Communication Competency Assessment",
    funder: "Korea Coast Guard",
    role: "Principal Researcher",
    period: "2020",
    status: "Completed",
    theme: "VTS",
  },
  {
    id: "mass-ai-navigation",
    title: "Source Technology Development of AI System for Autonomous Ship Navigation Control",
    funder: "KEIT",
    role: "Principal Researcher",
    period: "2017 - 2019",
    status: "Completed",
    theme: "MASS & AI",
    flagship: true,
  },
  {
    id: "safety-index",
    title: "Feasibility Study for a Proactive, Quantitative Maritime Safety Index",
    funder: "KIMST",
    role: "Principal Researcher",
    period: "2017",
    status: "Completed",
    theme: "Safety Systems",
  },
  {
    id: "imo-safety-management",
    title: "Development of IMO Next-Generation Maritime Safety Management System Technology",
    funder: "KIMST",
    role: "Principal Researcher",
    period: "2016 - 2020",
    status: "Completed",
    theme: "Policy",
  },
  {
    id: "accident-prevention",
    title: "Foundational Research on a Maritime Accident Prevention System",
    funder: "KIMST",
    role: "Principal Researcher",
    period: "2015 - 2019",
    status: "Completed",
    theme: "Safety Systems",
  },
  {
    id: "vts-job-analysis",
    title: "VTS Operator Job Analysis and Human-Factors Management Study",
    funder: "Ministry of Public Safety and Security",
    role: "Principal Researcher",
    period: "2015",
    status: "Completed",
    theme: "VTS",
  },
  {
    id: "vts-white-paper",
    title: "VTS White Paper: Twenty Years of Vessel Traffic Services in Korea",
    funder: "Ministry of Oceans and Fisheries",
    role: "Principal Researcher",
    period: "2012",
    status: "Completed",
    theme: "VTS",
    flagship: true,
  },
  {
    id: "vts-qualification-system",
    title: "Study on the Introduction of a VTS Operator Qualification & Evaluation System",
    funder: "Ministry of Oceans and Fisheries",
    role: "Principal Researcher",
    period: "2010",
    status: "Completed",
    theme: "VTS",
  },
];

export const researchThemes = [
  {
    name: "Autonomous Ships & MASS",
    description:
      "AI navigation control, collision-avoidance evaluation and human-element research for autonomous surface ships.",
  },
  {
    name: "VTS & Maritime AI",
    description:
      "Operator competency, AI-based English assessment, and next-generation traffic-management platforms.",
  },
  {
    name: "Maritime Safety Systems",
    description:
      "Accident-prevention frameworks and quantitative safety indices built on national accident and traffic data.",
  },
  {
    name: "IMO & Maritime Policy",
    description:
      "Regulatory readiness and international coordination for emerging maritime technologies.",
  },
];
