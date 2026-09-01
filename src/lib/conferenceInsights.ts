import type { ConferenceInsightEntry } from "@/content/en/conferenceInsights";

// Entries use a "YYYY.MM.DD" display date; normalize to a comparable
// integer, matching the approach in lib/dailyLog.ts and lib/news.ts.
export function conferenceInsightDateKey(date: string): number {
  const [y, m, d] = date.split(".").map((part) => parseInt(part, 10));
  return (y || 0) * 10000 + (m || 1) * 100 + (d || 1);
}

export function sortConferenceInsightsByDateDesc(
  entries: ConferenceInsightEntry[],
): ConferenceInsightEntry[] {
  return [...entries].sort((a, b) => {
    const dateDiff =
      conferenceInsightDateKey(b.date) - conferenceInsightDateKey(a.date);
    if (dateDiff !== 0) return dateDiff;
    return a.sessionCode.localeCompare(b.sessionCode);
  });
}
