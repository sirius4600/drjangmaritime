"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getUiDictionary } from "@/i18n/ui";
import type { Locale } from "@/i18n/config";

export function EvidenceVideo({
  src,
  poster,
  alt,
  locale,
}: {
  src: string;
  poster: string;
  alt: string;
  locale: Locale;
}) {
  const ui = getUiDictionary(locale);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${alt} — ${ui.evidenceVideo.playLabel}`}
        className="group relative mt-3 overflow-hidden rounded-lg border border-line/70 transition hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-strong"
      >
        <Image
          src={poster}
          alt={alt}
          width={200}
          height={140}
          className="h-24 w-32 object-cover"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/35">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-3.5 w-3.5" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={ui.evidenceVideo.closeLabel}
            className="absolute right-6 top-6 text-[14px] font-medium text-white/80 transition hover:text-white"
          >
            {ui.evidenceVideo.closeLabel} ✕
          </button>
          <video
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            className="max-h-[85vh] w-auto max-w-[90vw] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
