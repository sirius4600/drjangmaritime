"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getUiDictionary } from "@/i18n/ui";
import type { Locale } from "@/i18n/config";

export function EvidencePhotos({
  images,
  alt,
  locale,
}: {
  images: string[];
  alt: string;
  locale: Locale;
}) {
  const ui = getUiDictionary(locale);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="mt-3 flex flex-wrap gap-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`${alt} — ${ui.evidencePhotos.viewLabel} ${i + 1}`}
            className="overflow-hidden rounded-lg border border-line/70 transition hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-strong"
          >
            <Image
              src={src}
              alt={alt}
              width={200}
              height={140}
              className="h-24 w-32 object-cover"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label={ui.evidencePhotos.closeLabel}
            className="absolute right-6 top-6 text-[14px] font-medium text-white/80 transition hover:text-white"
          >
            {ui.evidencePhotos.closeLabel} ✕
          </button>
          <Image
            src={images[openIndex]}
            alt={alt}
            width={1600}
            height={1200}
            className="max-h-[85vh] w-auto max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {images.length > 1 && (
            <div className="absolute bottom-6 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex(i);
                  }}
                  aria-label={`${ui.evidencePhotos.viewLabel} ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition ${
                    i === openIndex ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
