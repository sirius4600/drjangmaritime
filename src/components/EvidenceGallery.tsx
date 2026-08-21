"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getUiDictionary } from "@/i18n/ui";
import type { Locale } from "@/i18n/config";

type GalleryItem =
  | { kind: "image"; src: string }
  | { kind: "video"; src: string; poster: string };

export function EvidenceGallery({
  images,
  video,
  alt,
  locale,
}: {
  images: string[];
  video?: { src: string; poster: string };
  alt: string;
  locale: Locale;
}) {
  const ui = getUiDictionary(locale);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: GalleryItem[] = [
    ...images.map((src): GalleryItem => ({ kind: "image", src })),
    ...(video ? [{ kind: "video", ...video } as GalleryItem] : []),
  ];

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  if (items.length === 0) return null;

  const open = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className="mt-3 grid w-fit grid-cols-2 gap-2">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`${alt} — ${
              item.kind === "video"
                ? ui.evidenceVideo.playLabel
                : ui.evidencePhotos.viewLabel
            } ${i + 1}`}
            className="group relative overflow-hidden rounded-lg border border-line/70 transition hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-strong"
          >
            <Image
              src={item.kind === "video" ? item.poster : item.src}
              alt={alt}
              width={200}
              height={140}
              className="h-24 w-32 object-cover"
            />
            {item.kind === "video" && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/35">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink">
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-0.5 h-3.5 w-3.5"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            )}
          </button>
        ))}
      </div>

      {open && (
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
          {open.kind === "video" ? (
            <video
              key={open.src}
              src={open.src}
              poster={open.poster}
              controls
              autoPlay
              playsInline
              className="max-h-[85vh] w-auto max-w-[90vw] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <Image
              src={open.src}
              alt={alt}
              width={1600}
              height={1200}
              className="max-h-[85vh] w-auto max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          )}
          {items.length > 1 && (
            <div className="absolute bottom-6 flex gap-2">
              {items.map((_, i) => (
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
