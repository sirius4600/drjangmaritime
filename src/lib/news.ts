import type { NewsItem } from "@/content/en/news";

// Items use a "YYYY.MM" or "YYYY.MM.DD" display date. This normalizes either
// into a comparable integer so day-precision entries (added by the daily
// research job) and older month-precision entries sort correctly together.
export function newsDateKey(date: string): number {
  const [y, m, d] = date.split(".").map((part) => parseInt(part, 10));
  return (y || 0) * 10000 + (m || 1) * 100 + (d || 1);
}

export function sortNewsByDateDesc(items: NewsItem[]): NewsItem[] {
  return [...items].sort((a, b) => newsDateKey(b.date) - newsDateKey(a.date));
}
