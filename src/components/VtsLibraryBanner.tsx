import type { Locale } from "@/i18n/config";

export function VtsLibraryBanner({ locale }: { locale: Locale }) {
  const isKo = locale === "ko";

  return (
    <a
      href="https://drjangvts.com"
      target="_blank"
      rel="noopener"
      className="block bg-accent-strong px-4 py-3 text-center text-[13px] font-semibold text-paper transition-colors hover:brightness-110 sm:text-sm"
    >
      {isKo
        ? "새로운 VTS 자료실 오픈 — drjangvts.com에서 VTS 통신 교재·가이드라인·법령을 무료로 확인하세요 →"
        : "New: VTS Library is live — free VTS communication resources, guidelines & regulations at drjangvts.com →"}
    </a>
  );
}
