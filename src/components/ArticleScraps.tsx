import type { DailyLogArticle } from "@/content/en/dailyLog";

// 신문 스크랩처럼 보이는 관련 기사 카드: 매체·날짜, 제목, 짧은 요약, 원문 링크.
// 요약은 직접 쓴 문장이며 기사 본문을 옮겨 싣지 않는다.
export function ArticleScraps({
  articles,
  heading,
  readOriginal,
}: {
  articles: DailyLogArticle[];
  heading: string;
  readOriginal: string;
}) {
  return (
    <section className="mt-7 max-w-3xl" aria-label={heading}>
      <h3 className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-accent-strong">
        <span aria-hidden="true">✂</span>
        {heading}
      </h3>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        {articles.map((a, i) => (
          <a
            key={a.href}
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block border border-dashed px-5 pb-4 pt-5 text-[#2a2620] shadow-[0_8px_18px_-12px_rgba(60,45,20,0.45)] transition-transform hover:-translate-y-0.5 ${
              a.past ? "border-[#b9b6ae] bg-[#ecebe7] saturate-50" : "border-[#c9bfa8] bg-[#fbf8f1]"
            } ${
              i % 2 ? "sm:rotate-[0.6deg]" : "sm:-rotate-[0.6deg]"
            }`}
          >
            <span
              aria-hidden="true"
              className="absolute -top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 rotate-[-3deg] bg-[#f3e3a3]/80 shadow-sm"
            />
            {a.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                className={`mb-3 h-56 w-full border border-[#2a2620]/15 object-cover object-top ${a.past ? "grayscale-[35%]" : ""}`}
              />
            )}
            {a.tag && (
              <span
                className={`mb-2 inline-block rounded-sm px-1.5 py-0.5 text-[10.5px] font-bold tracking-wide text-[#ffffff] ${
                  a.past ? "bg-[#6b665c]" : "bg-[#0c7c85]"
                }`}
              >
                {a.tag}
              </span>
            )}
            <div className="flex items-center justify-between gap-3 border-b border-[#2a2620]/70 pb-1.5 font-serif text-[11.5px] font-semibold tracking-wide text-[#5b5244]">
              <span>{a.outlet}</span>
              <span className="font-mono">{a.date}</span>
            </div>
            <p className="mt-2.5 font-serif text-[16px] font-bold leading-snug text-[#1d1a15]">{a.title}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-[#4a4338]">{a.summary}</p>
            <span className="mt-3 inline-block text-[12.5px] font-semibold text-[#0c7c85] underline-offset-4 group-hover:underline">
              {readOriginal} ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
