"use client";

import { useEffect, useRef, useState } from "react";
import type { HeroScene } from "./hero3d/scene";

// three.js 장면을 브라우저에서만 불러와 띄운다. WebGL이 안 되면 그라데이션 배경만 남는다.
export function Hero3D({ greeting, tapHint }: { greeting: string; tapHint: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HeroScene | null>(null);
  const [ready, setReady] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleKey, setBubbleKey] = useState(0);
  const say = () => {
    setShowBubble(true);
    setBubbleKey((k) => k + 1);
  };

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    const mobile = window.matchMedia("(max-width: 1023px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    import("./hero3d/scene")
      .then(({ mountHeroScene }) => {
        if (cancelled) return;
        try {
          sceneRef.current = mountHeroScene(host, {
            mobile,
            reducedMotion,
            onCharacterScreenPos: (x, y) => {
              const b = bubbleRef.current;
              if (b) b.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px) translate(-20%, -100%)`;
            },
            onWave: say,
          });
          setReady(true);
          say();
        } catch {
          // WebGL을 쓸 수 없는 환경: 배경만 보여 준다.
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      sceneRef.current?.dispose();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!showBubble) return;
    const hide = window.setTimeout(() => setShowBubble(false), 5500);
    return () => window.clearTimeout(hide);
  }, [showBubble, bubbleKey]);

  return (
    <div className="absolute inset-0">
      <div ref={hostRef} className="absolute inset-0 cursor-pointer" />
      {ready && (
        <div
          ref={bubbleRef}
          className={`pointer-events-none absolute left-0 top-0 transition-opacity duration-500 ${showBubble ? "opacity-100" : "opacity-0"}`}
        >
          <div className="relative whitespace-nowrap rounded-2xl border-2 border-[#0f9aa4] bg-[#ffffff] px-4 py-2 text-[14px] font-bold text-[#0b1420] shadow-[0_12px_30px_-8px_rgba(0,0,0,0.6)]">
            {greeting}
            <span className="absolute -bottom-[7px] left-[20%] h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#0f9aa4] bg-[#ffffff]" />
          </div>
        </div>
      )}
      {ready && (
        <button
          type="button"
          onClick={() => {
            sceneRef.current?.wave();
          }}
          className="absolute bottom-4 right-4 rounded-full border border-[#3df2c4]/60 bg-[#061322]/85 px-3.5 py-1.5 text-[12px] font-semibold text-[#ffffff] backdrop-blur transition-colors hover:bg-[#0f9aa4]"
        >
          👋 {tapHint}
        </button>
      )}
    </div>
  );
}
