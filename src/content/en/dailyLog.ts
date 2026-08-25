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
