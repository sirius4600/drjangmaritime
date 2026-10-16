export interface DailyLogEntry {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  location?: string;
  images?: string[];
}

// Personal, occasional notes — not a formal CV record. See impact.ts for
// verified professional milestones; this is the human-interest counterpart.
export const dailyLogEntries: DailyLogEntry[] = [
  {
    id: "maritime-ax-seminar-2026-09",
    date: "2026.09.09",
    title: "Attending the Seminar on AI-Driven Digital and Carbon-Neutral Transformation in Maritime Affairs and Fisheries",
    excerpt:
      "At the Maritime AX Seminar in Busan, I joined Professor Jung Gu-min of Kookmin University, President of the Korean Society of Mobility, and Upstage CEO Sung Kim to discuss AI transformation in the maritime and fisheries sector.",
    location: "Busan",
    body: [
      "On September 9, I attended the \"Seminar on AI-Based Digital and Carbon-Neutral Transformation and Work-Innovation Strategy for Maritime Affairs and Fisheries\" (Maritime AX Seminar) in Busan. It was co-hosted by the Korean Society of Mobility, the Korea Maritime Institute (KMI) and Upstage, and supported by KRISO, KOMERI, the Korean Register (KR), the Korea Maritime Transportation Safety Authority (KOMSA), the Marine Pollution Response Research Institute, Pusan National University and Pukyong National University, as part of the project on expanding green shipping corridors and developing a Korean model.",
      "The meeting carried extra weight thanks to the presence of Professor Jung Gu-min of Kookmin University, President of the Korean Society of Mobility, and Sung Kim, CEO of Upstage, one of Korea's flagship AI companies. Experts from Ulsan Port Authority, KOMERI, the Marine Pollution Response Research Institute and other institutions also took part.",
      "The session introduced how LLMs and AI can turn large volumes of regulations, approved drawings and test reports into structured assets, and cross-check multiple documents accurately, supporting the digital transformation of maritime administration and the decisions of practitioners. It was a meaningful time to think together about how AI can be put to practical use in maritime safety and education, and how that can lead to new R&D projects.",
    ],
    images: [
      "/images/evidence/maritime-ax-seminar-group-2026.jpg",
      "/images/evidence/maritime-ax-seminar-presentation-2026.jpg",
      "/images/evidence/maritime-ax-seminar-discussion-2026.jpg",
    ],
  },
  {
    id: "skandi-connector-2026-08",
    date: "2026.08.25",
    title: "Aboard the Ship Where My Former Student, Captain Lee, Serves",
    excerpt:
      "Aboard the Skandi Connector, a Norwegian-built DP vessel, I met my former student, now Captain Lee.",
    body: [
      "Today I visited a ship where one of my former students, Captain Lee, now serves as captain — the Skandi Connector, a Norwegian-built DP (Dynamic Positioning) vessel that lays the massive submarine cable networks connecting Korea's offshore wind farms.",
      "The living quarters and onboard environment were excellent, security was tightly managed, and the crew welcomed me warmly. But more than anything, what made me happiest was simply seeing a student I have long cared for, Captain Lee, now serving as the ship's captain. Watching how far he has come was one of the happiest moments I've had in a long time.",
    ],
    images: ["/images/evidence/skandi-connector-bridge-2026.jpg"],
  },
];
