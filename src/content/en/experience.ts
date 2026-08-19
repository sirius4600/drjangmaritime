export interface ExperienceEntry {
  period: string;
  role: string;
  org: string;
  detail?: string;
}

export const experience: ExperienceEntry[] = [
  {
    period: "2024.07 - 2025.06",
    role: "Visiting Researcher",
    org: "University of Missouri, USA",
  },
  {
    period: "2020.09 - 2022.12",
    role: "Director, Education & Training Headquarters",
    org: "Korea Institute of Maritime and Fisheries Technology",
  },
  {
    period: "2014.08 - 2015.12",
    role: "Director, Planning & Coordination Office",
    org: "Korea Institute of Maritime and Fisheries Technology",
  },
  {
    period: "2013.02 - 2014.07",
    role: "Head, New Growth Education Division & Offshore Plant Workforce Development Center",
    org: "Korea Institute of Maritime and Fisheries Technology",
  },
  {
    period: "2010.01 - 2013.01",
    role: "Team Lead, Workforce Training (now Ocean Polytech Team)",
    org: "Korea Institute of Maritime and Fisheries Technology",
  },
  {
    period: "2006.01 - 2009.01",
    role: "Team Lead, Strategic Planning / Innovation Planning",
    org: "Korea Institute of Maritime and Fisheries Technology",
  },
  {
    period: "2001.06 - present",
    role: "Professor",
    org: "Korea Institute of Maritime and Fisheries Technology",
    detail:
      "Responsible professor for passenger-ship safety and VTS international certification training since 2001 and 2005 respectively.",
  },
  {
    period: "1994.03 - 2001.05",
    role: "Deck Officer / Owner's Representative",
    org: "Hanjin Shipping",
    detail: "Took delivery of South Korea's first LNG carrier.",
  },
];

export const education = [
  {
    period: "2004 - 2018",
    degree: "Ph.D., Maritime Safety & Environment",
    school: "Korea Maritime and Ocean University",
  },
  {
    period: "2002 - 2004",
    degree: "M.Eng., Maritime Safety & Environment",
    school: "Korea Maritime and Ocean University",
  },
  {
    period: "1990 - 1994",
    degree: "B.Eng., Maritime Transportation Science",
    school: "Korea Maritime and Ocean University",
  },
];

export interface AffiliationEntry {
  role: string;
  org: string;
  period: string;
}

// Only roles explicitly marked "현재 / 현" (current) in the source CV.
export const currentAffiliations: AffiliationEntry[] = [
  {
    role: "President",
    org: "Korea Maritime Safety Promotion Association",
    period: "2023.12 - present",
  },
  {
    role: "Vice President",
    org: "Korean Institute of Navigation and Port Research",
    period: "2026.01 - present",
  },
  {
    role: "Advisor / Committee Member, IMO Experts Committee",
    org: "Ministry of Oceans and Fisheries (Maritime Safety Policy Division)",
    period: "2023.12 - present",
  },
  {
    role: "Committee Member, Regulatory Innovation Committee",
    org: "Ministry of Oceans and Fisheries (Shipping, Maritime & Port Division)",
    period: "2021.03 - present",
  },
  {
    role: "Education Policy Committee Chair & Editorial Board Member",
    org: "Korean Society of Marine Environment & Safety",
    period: "2021.06 - present",
  },
  {
    role: "Evaluation Committee Member",
    org: "Industrial Technology Innovation Evaluation Group, Ministry of Trade, Industry and Energy",
    period: "2017 - present",
  },
  {
    role: "Policy Advisor",
    org: "Namhae Regional Coast Guard",
    period: "2018.03 - present",
  },
  {
    role: "Committee Member",
    org: "Busan Metropolitan City Maritime Education Council",
    period: "2022.03 - present",
  },
  {
    role: "Evaluation Committee Member, IRIS Cross-Ministry National R&D Programs",
    org: "National Science & Technology Information Service",
    period: "2024 - present",
  },
  {
    role: "Committee Member, Simulator Introduction Project for Arctic-Route Training",
    org: "Ministry of Oceans and Fisheries",
    period: "2025.10 - present",
  },
];
