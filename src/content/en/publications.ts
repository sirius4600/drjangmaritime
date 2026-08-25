export const books = [
  {
    title: "VTS White Paper (1993 - 2012): Twenty Years of Vessel Traffic Services in Korea",
    year: "2012",
  },
  {
    title: "Traffic Management",
    year: "2015",
  },
  {
    title: "IALA VTS Manual (Korean-English bilingual edition)",
    year: "2016",
  },
];

export const papers: {
  title: string;
  venue: string;
  year: string;
  summary?: string;
}[] = [
  {
    title:
      "Risk Management Challenges in Maritime Autonomous Surface Ships (MASSs): Training and Regulatory Readiness",
    venue: "MDPI Applied Sciences",
    year: "2025",
  },
  {
    title:
      "Development a Collision Accident Evaluation Indicator for an e-Navigation Service",
    venue: "Journal of the Korean Society of Marine Environment & Safety",
    year: "2021",
    summary:
      "Develops a quantitative evaluation indicator for e-Navigation services by using root cause analysis (RCA) and fault tree analysis (FTA) to identify the root causes of maritime collision accidents.",
  },
  {
    title:
      "A Development of Chatbot Framework for Ship Safety Education Based on Actual Communication Data between Port Control Center and Ship",
    venue: "ICIC Express Letters, Part B: Applications, Vol. 9",
    year: "2018",
  },
  {
    title: "VTS Simulator-Based Job Competency Analysis of VTS Operators",
    venue: "Journal of the Korean Society of Marine Police Science",
    year: "2017",
  },
  {
    title:
      "Analysis of VTS Operators' Situation Awareness Based on Field Observation and Self-Report Methods",
    venue: "Journal of Navigation and Port Research",
    year: "2016",
  },
];

// Conference/invited talks and speaking engagements. Empty until specific
// entries (title, venue/organization, year, and optionally role — e.g.
// invited speaker vs. oral presentation) are confirmed by the user.
export const presentations: {
  title: string;
  venue: string;
  year: string;
  role?: string;
}[] = [
  {
    title:
      "Response Strategies for the Decline and Aging of Korean Seafarers Amid Rising Reliance on Foreign Crew",
    venue: "38th Maritime Accident Prevention Seminar",
    year: "2023",
    role: "Speaker",
  },
  {
    title: "Opportunities and Crises for the Korean Ship Management Industry",
    venue: "2019 KOMARINE Conference",
    year: "2019",
    role: "Speaker",
  },
];

export const patents = [
  {
    title:
      "Simplified Electronic Navigational Chart Production Method for Automatic Ship Tracking Systems Using Internationally Certified ENC",
    status: "Registered",
    year: "2006",
  },
  {
    title: "Aptitude Test System for Navigation Officers",
    status: "Filed",
    year: "2018",
  },
];
