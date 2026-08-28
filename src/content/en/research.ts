export interface ResearchProject {
  id: string;
  title: string;
  funder: string;
  role: "Principal Researcher" | "Co-Researcher" | "Advisor";
  period: string;
  status: "Completed" | "Ongoing";
  theme: "MASS & AI" | "VTS" | "Safety Systems" | "Policy";
  /** Additional themes this project also belongs to, for cases where its
   * subject matter genuinely spans categories. The project then appears in
   * more than one theme's filtered list — duplication is intentional. */
  secondaryThemes?: Array<ResearchProject["theme"]>;
  flagship?: boolean;
  /** True national R&D (technology development) projects only — not every
   * commissioned study/white paper qualifies. Confirmed per-project by the
   * user; never infer this from the title alone. */
  isRnd?: boolean;
}

// Full record of national R&D and government-commissioned research since
// 2002, drawn directly from the CV. A small number of minor commissioned
// studies are omitted for brevity.
export const researchProjects: ResearchProject[] = [
  {
    id: "mass-ai-verification-2026",
    title:
      "National R&D \"AI Fully Autonomous Ship Technology Development Project\" - Verification, Certification and Demonstration Technology Development for AI Fully Autonomous Ships",
    funder: "Ministry of Oceans and Fisheries",
    role: "Co-Researcher",
    period: "2026.08 - 2032.12",
    status: "Ongoing",
    theme: "MASS & AI",
    secondaryThemes: ["Safety Systems"],
    flagship: true,
    isRnd: true,
  },
  {
    id: "safety-culture-program",
    title:
      "Research on Building a Safety Education Culture System for Shipping Companies and Workplaces",
    funder: "Ministry of Oceans and Fisheries",
    role: "Co-Researcher",
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
    isRnd: true,
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
    isRnd: true,
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
    isRnd: true,
  },
  {
    id: "vts-english-assessment",
    title: "VTS Operator English Communication Competency Assessment",
    funder: "Korea Coast Guard",
    role: "Principal Researcher",
    period: "2020",
    status: "Completed",
    theme: "VTS",
    secondaryThemes: ["Safety Systems"],
  },
  {
    id: "bigdata-safety-forecast",
    title:
      "Development of Maritime Traffic Information Big Data and Safety Forecasting System Technology",
    funder: "KRISO",
    role: "Advisor",
    period: "2019",
    status: "Completed",
    theme: "Safety Systems",
    secondaryThemes: ["VTS"],
    isRnd: true,
  },
  {
    id: "enav-policy-platform",
    title: "Research on e-Navigation Policy Platform Development and Response",
    funder: "Ministry of Oceans and Fisheries",
    role: "Principal Researcher",
    period: "2019",
    status: "Completed",
    theme: "Policy",
    secondaryThemes: ["Safety Systems"],
  },
  {
    id: "public-vessel-management",
    title:
      "Feasibility Analysis for Public Vessel Management Support and Related Policy Development",
    funder: "Ministry of Oceans and Fisheries",
    role: "Co-Researcher",
    period: "2019",
    status: "Completed",
    theme: "Policy",
  },
  {
    id: "seafarer-legal-framework",
    title: "Study on Reforming the Legal Framework for Seafarers",
    funder: "Ministry of Oceans and Fisheries",
    role: "Advisor",
    period: "2018",
    status: "Completed",
    theme: "Policy",
  },
  {
    id: "mass-ai-navigation",
    title: "Source Technology Development of AI System for Autonomous Ship Navigation Control",
    funder: "KEIT",
    role: "Principal Researcher",
    period: "2017 - 2019",
    status: "Completed",
    theme: "MASS & AI",
    secondaryThemes: ["VTS"],
    flagship: true,
    isRnd: true,
  },
  {
    id: "safety-index",
    title: "Feasibility Study for a Proactive, Quantitative Maritime Safety Index",
    funder: "KIMST",
    role: "Principal Researcher",
    period: "2017",
    status: "Completed",
    theme: "Safety Systems",
    secondaryThemes: ["Policy"],
  },
  {
    id: "seafarer-welfare-survey",
    title: "Nationwide Survey of Seafarers' Welfare Facility Operations",
    funder: "Korea Seafarer's Welfare & Employment Center",
    role: "Co-Researcher",
    period: "2016",
    status: "Completed",
    theme: "Policy",
  },
  {
    id: "imo-safety-management",
    title: "Development of IMO Next-Generation Maritime Safety Management System Technology",
    funder: "KIMST",
    role: "Principal Researcher",
    period: "2016 - 2020",
    status: "Completed",
    theme: "Policy",
    secondaryThemes: ["Safety Systems"],
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
    id: "jeju-maritime-school-feasibility",
    title:
      "Feasibility Study for Establishing a National Maritime High School to Develop Maritime Human Resources",
    funder: "Jeju Special Self-Governing Province Office of Education",
    role: "Principal Researcher",
    period: "2015",
    status: "Completed",
    theme: "Policy",
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
    id: "busan-vts-improvement",
    title: "Basic Survey and Design Service for Improving the Busan Regional VTS System",
    funder: "Ministry of Public Safety and Security",
    role: "Co-Researcher",
    period: "2014",
    status: "Completed",
    theme: "VTS",
  },
  {
    id: "vts-distress-simulator",
    title:
      "Development of Supplementary Systems for VTS and Distress-Response Training Simulators",
    funder: "KIMST",
    role: "Principal Researcher",
    period: "2013",
    status: "Completed",
    theme: "VTS",
  },
  {
    id: "imo-strategic-agenda-2012",
    title: "IMO Strategic Agenda Research",
    funder: "Ministry of Oceans and Fisheries",
    role: "Principal Researcher",
    period: "2012 - 2013",
    status: "Completed",
    theme: "Policy",
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
    id: "maritime-communication-smart-service",
    title:
      "Research on Securing Ship Communication Improvement and Maritime Smart Service Technology",
    funder: "KIMST",
    role: "Co-Researcher",
    period: "2012",
    status: "Completed",
    theme: "VTS",
    isRnd: true,
  },
  {
    id: "piracy-industry-resilience",
    title:
      "Research on Strengthening Shipping Industry Capacity and International Cooperation to Prevent Piracy Damage",
    funder: "Ministry of Oceans and Fisheries",
    role: "Co-Researcher",
    period: "2012",
    status: "Completed",
    theme: "Policy",
    secondaryThemes: ["Safety Systems"],
  },
  {
    id: "somalia-piracy-imo-response",
    title:
      "Research on Strengthening IMO's Role and International Coordination in Response to Somali Piracy",
    funder: "Ministry of Oceans and Fisheries",
    role: "Co-Researcher",
    period: "2011",
    status: "Completed",
    theme: "Policy",
    secondaryThemes: ["Safety Systems"],
  },
  {
    id: "imo-strategic-agenda-2010",
    title: "IMO Strategic Agenda Research",
    funder: "Ministry of Oceans and Fisheries",
    role: "Co-Researcher",
    period: "2010 - 2011",
    status: "Completed",
    theme: "Policy",
  },
  {
    id: "ship-management-globalization",
    title: "Research on Advancing and Globalizing the Ship Management Industry",
    funder: "Ministry of Oceans and Fisheries",
    role: "Co-Researcher",
    period: "2010",
    status: "Completed",
    theme: "Policy",
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
  {
    id: "developing-countries-safety-cooperation",
    title:
      "Cooperative Project Research on Building Maritime Safety Systems in Developing Countries",
    funder: "Ministry of Oceans and Fisheries",
    role: "Co-Researcher",
    period: "2009 - 2011",
    status: "Completed",
    theme: "Safety Systems",
    secondaryThemes: ["Policy"],
  },
  {
    id: "global-safety-training-program",
    title:
      "Planning Research on a Global Maritime Safety Education Program and Training Infrastructure",
    funder: "Ministry of Oceans and Fisheries",
    role: "Co-Researcher",
    period: "2009",
    status: "Completed",
    theme: "Safety Systems",
  },
  {
    id: "safety-technical-cooperation",
    title: "Research on Activating Maritime Safety Technical Cooperation",
    funder: "Ministry of Oceans and Fisheries",
    role: "Co-Researcher",
    period: "2008",
    status: "Completed",
    theme: "Policy",
  },
  {
    id: "imo-agenda-analysis",
    title: "Research Service on IMO Meeting Agenda Analysis and Development",
    funder: "Ministry of Oceans and Fisheries",
    role: "Co-Researcher",
    period: "2006",
    status: "Completed",
    theme: "Policy",
  },
  {
    id: "imo-leading-group-program",
    title: "Research Service for Advancing Korea into the IMO Leading Group Program",
    funder: "Ministry of Oceans and Fisheries",
    role: "Co-Researcher",
    period: "2005",
    status: "Completed",
    theme: "Policy",
  },
  {
    id: "imo-mas-audit-response",
    title:
      "Research Service on Responding to the Introduction of the IMO Member State Audit Scheme (MAS)",
    funder: "Ministry of Oceans and Fisheries",
    role: "Co-Researcher",
    period: "2005",
    status: "Completed",
    theme: "Policy",
  },
  {
    id: "ecdis-auto-tracking-system",
    title: "Development of an Automatic Ship-Tracking Device Using Electronic Navigational Charts",
    funder: "Ministry of Oceans and Fisheries",
    role: "Co-Researcher",
    period: "2004",
    status: "Completed",
    theme: "VTS",
  },
  {
    id: "ptms-network-design",
    title: "PTMS Nationwide Network Installation Plan and Design Service",
    funder: "Ministry of Oceans and Fisheries",
    role: "Co-Researcher",
    period: "2002",
    status: "Completed",
    theme: "VTS",
  },
];

export interface ResearchTheme {
  key: ResearchProject["theme"];
  name: string;
  description: string;
}

export const researchThemes: ResearchTheme[] = [
  {
    key: "MASS & AI",
    name: "Autonomous Ships & MASS",
    description:
      "AI navigation control, collision-avoidance evaluation and human-element research for autonomous surface ships.",
  },
  {
    key: "VTS",
    name: "VTS & Maritime AI",
    description:
      "Operator competency, AI-based English assessment, and next-generation traffic-management platforms.",
  },
  {
    key: "Safety Systems",
    name: "Maritime Safety Systems",
    description:
      "Accident-prevention frameworks and quantitative safety indices built on national accident and traffic data.",
  },
  {
    key: "Policy",
    name: "IMO & Maritime Policy",
    description:
      "Regulatory readiness and international coordination for emerging maritime technologies.",
  },
];
