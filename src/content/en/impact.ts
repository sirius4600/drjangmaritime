export interface ImpactEntry {
  date: string;
  category: string;
  title: string;
  detail: string;
}

// Dated, verifiable milestones drawn directly from the CV and ministry
// commendation dossier. Standing in for a live "recently updated" feed
// until an editorial pipeline exists (see content/README).
export const impactTimeline: ImpactEntry[] = [
  {
    date: "2025.12",
    category: "VTS",
    title: "Led the IALA VTS English Communication Competency Testing Guideline",
    detail:
      "Worked with the Korea Coast Guard to establish IALA's international guideline for assessing VTS operators' spoken English, the first such standard built on AI-based testing.",
  },
  {
    date: "2025.10",
    category: "MASS & AI",
    title: "Published on MASS training and regulatory readiness",
    detail:
      "Co-authored 'Risk Management Challenges in Maritime Autonomous Surface Ships (MASSs): Training and Regulatory Readiness' in MDPI Applied Sciences (SCIE).",
  },
  {
    date: "2025.10",
    category: "Arctic Route",
    title: "Joined the Arctic-route simulator training committee",
    detail:
      "Appointed to the Ministry of Oceans and Fisheries committee introducing ship-handling simulators for Arctic-route operator training.",
  },
  {
    date: "2026.01",
    category: "Academic Activity",
    title: "Elected Vice President, Korean Institute of Navigation and Port Research",
    detail:
      "Serves as Vice President of Korea's principal academic society for navigation and port research, and as editor (Chair, Education Policy Committee) of the Korean Society of Marine Environment & Safety.",
  },
];

export const impactPillars = [
  {
    title: "National Workforce Development",
    description:
      "Built and ran the Ocean Polytech mariner-training program and the Maritime High School 2+1 track, and contributed to four training-vessel renewals and the establishment of KIMFT's Ocean Plant Center and its Mokpo branch campus.",
  },
  {
    title: "International Cooperation",
    description:
      "IMO Assembly, Council and Sub-committee advisor since 2005; IALA advisor since 2011; government shipping-talks advisor to Mongolia, Russia, Norway and Denmark.",
  },
  {
    title: "VTS Field Development",
    description:
      "Built Korea's VTS international certification curriculum, authored the VTS White Paper, exported VTS training to Algeria, led the world's first AI-based international VTS English assessment standard, and authored the NCS training textbook.",
  },
  {
    title: "Safety Education & Research",
    description:
      "Responsible professor for passenger-ship safety training since 2001; built Korea's first LNG-carrier, ECDIS and ISPS training curricula; 50+ national R&D studies on maritime safety.",
  },
];
