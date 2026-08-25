import type { DailyLogEntry } from "@/content/en/dailyLog";

// Entries use a "YYYY.MM.DD" display date; normalize to a comparable
// integer, matching the approach in lib/news.ts.
export function dailyLogDateKey(date: string): number {
  const [y, m, d] = date.split(".").map((part) => parseInt(part, 10));
  return (y || 0) * 10000 + (m || 1) * 100 + (d || 1);
}

export function sortDailyLogByDateDesc(
  entries: DailyLogEntry[],
): DailyLogEntry[] {
  return [...entries].sort(
    (a, b) => dailyLogDateKey(b.date) - dailyLogDateKey(a.date),
  );
}
