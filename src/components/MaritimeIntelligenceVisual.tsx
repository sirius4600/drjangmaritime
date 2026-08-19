"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const STARS = [
  { x: 8, y: 8, r: 1.4, delay: 0 },
  { x: 20, y: 16, r: 1, delay: 0.6 },
  { x: 33, y: 6, r: 1.6, delay: 1.2 },
  { x: 46, y: 20, r: 1, delay: 0.3 },
  { x: 58, y: 9, r: 1.3, delay: 1.8 },
  { x: 70, y: 18, r: 1, delay: 0.9 },
  { x: 82, y: 7, r: 1.5, delay: 1.5 },
  { x: 90, y: 22, r: 1, delay: 0.4 },
  { x: 14, y: 26, r: 1, delay: 2.1 },
  { x: 64, y: 27, r: 1.2, delay: 0.8 },
];

const NODES = [
  { x: 18, y: 12 },
  { x: 46, y: 7 },
  { x: 70, y: 17 },
  { x: 88, y: 10 },
  { x: 30, y: 27 },
  { x: 58, y: 25 },
  { x: 78, y: 31 },
];

const PULSE_NODES = new Set([1, 4, 6]);

const LINKS: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 4],
  [1, 4],
  [4, 5],
  [5, 2],
  [5, 6],
  [2, 6],
];

export function MaritimeIntelligenceVisual() {
  const rootRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function handlePointerMove(event: PointerEvent) {
      const rect = root!.getBoundingClientRect();
      targetRef.current = {
        x: (event.clientX - rect.left) / rect.width - 0.5,
        y: (event.clientY - rect.top) / rect.height - 0.5,
      };
    }

    function handlePointerLeave() {
      targetRef.current = { x: 0, y: 0 };
    }

    function tick() {
      const current = currentRef.current;
      const target = targetRef.current;
      current.x += (target.x - current.x) * 0.07;
      current.y += (target.y - current.y) * 0.07;
      root!.style.setProperty("--px", current.x.toFixed(4));
      root!.style.setProperty("--py", current.y.toFixed(4));
      rafRef.current = requestAnimationFrame(tick);
    }

    root.addEventListener("pointermove", handlePointerMove);
    root.addEventListener("pointerleave", handlePointerLeave);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      root.removeEventListener("pointermove", handlePointerMove);
      root.removeEventListener("pointerleave", handlePointerLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="group relative h-full w-full overflow-hidden"
      style={{ "--px": 0, "--py": 0 } as CSSProperties}
    >
      {/* ocean + night-sky gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050b13_0%,#0a2032_36%,#0c3947_60%,#0f4b56_82%,#12545c_100%)]" />

      {/* radar sweep, faint */}
      <div
        className="pointer-events-none absolute left-1/2 top-[22%] h-[70%] aspect-square -translate-x-1/2 -translate-y-1/2 opacity-25 motion-safe:animate-[radar-sweep_16s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(95,215,222,0.35), transparent 24%)",
          borderRadius: "9999px",
        }}
      />

      {/* stars, drift opposite the cursor for depth */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform:
            "translate3d(calc(var(--px, 0) * -10px), calc(var(--py, 0) * -10px), 0)",
        }}
      >
        {STARS.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white motion-safe:animate-[star-twinkle_4s_ease-in-out_infinite]"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.r,
              height: s.r,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* intelligence network */}
      <svg
        viewBox="0 0 100 45"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 h-[46%] w-full transition-transform duration-300 ease-out"
        style={{
          transform:
            "translate3d(calc(var(--px, 0) * -16px), calc(var(--py, 0) * -12px), 0)",
        }}
      >
        <g stroke="#5fd7de" strokeOpacity="0.4" strokeWidth="0.25">
          {LINKS.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
            />
          ))}
        </g>
        {NODES.map((n, i) => (
          <g key={i}>
            {PULSE_NODES.has(i) && (
              <circle
                cx={n.x}
                cy={n.y}
                r={1.6}
                fill="none"
                stroke="#5fd7de"
                strokeWidth="0.4"
                className="origin-center motion-safe:animate-[ping_3s_ease-in-out_infinite]"
                style={{ transformBox: "fill-box", animationDelay: `${i * 0.4}s` }}
              />
            )}
            <circle cx={n.x} cy={n.y} r={1.1} fill="#a8f0f4" />
          </g>
        ))}
      </svg>

      {/* horizon glow */}
      <div className="absolute inset-x-0 top-[46%] h-px bg-gradient-to-r from-transparent via-[#5fd7de]/70 to-transparent" />
      <div className="absolute inset-x-0 top-[46%] h-16 -translate-y-1/2 bg-[radial-gradient(60%_100%_at_50%_50%,rgba(95,215,222,0.18),transparent_75%)]" />

      {/* vessel silhouette on the horizon */}
      <svg
        viewBox="0 0 100 30"
        preserveAspectRatio="xMidYMax meet"
        className="absolute inset-x-0 top-[40%] h-[10%] w-full motion-safe:animate-[hull-bob_6s_ease-in-out_infinite]"
      >
        <line x1="50" y1="18" x2="50" y2="4" stroke="#04141c" strokeWidth="0.6" />
        <path d="M38 22 L62 22 L57 18 L43 18 Z" fill="#04141c" opacity="0.9" />
        <path d="M33 26 L67 26 L62 22 L38 22 Z" fill="#020a0f" />
      </svg>

      {/* rolling ocean waves */}
      <div className="absolute inset-x-0 bottom-0 h-[42%] overflow-hidden">
        <svg
          viewBox="0 0 200 40"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-full w-[200%] opacity-90 motion-safe:animate-[wave-scroll_16s_linear_infinite]"
        >
          <path
            d="M0 20 C 12.5 8, 37.5 8, 50 20 C 62.5 32, 87.5 32, 100 20 L100 40 L0 40 Z"
            fill="#0f9aa4"
          />
          <path
            d="M100 20 C 112.5 8, 137.5 8, 150 20 C 162.5 32, 187.5 32, 200 20 L200 40 L100 40 Z"
            fill="#0f9aa4"
          />
        </svg>
        <svg
          viewBox="0 0 200 40"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-full w-[200%] translate-y-2 opacity-55 motion-safe:animate-[wave-scroll_24s_linear_infinite_reverse]"
        >
          <path
            d="M0 22 C 14 12, 36 12, 50 22 C 64 32, 86 32, 100 22 L100 40 L0 40 Z"
            fill="#123f4a"
          />
          <path
            d="M100 22 C 114 12, 136 12, 150 22 C 164 32, 186 32, 200 22 L200 40 L100 40 Z"
            fill="#123f4a"
          />
        </svg>
        <svg
          viewBox="0 0 200 40"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-full w-[200%] translate-y-4 opacity-40 motion-safe:animate-[wave-scroll_32s_linear_infinite]"
        >
          <path
            d="M0 25 C 16 16, 34 16, 50 25 C 66 34, 84 34, 100 25 L100 40 L0 40 Z"
            fill="#0a2733"
          />
          <path
            d="M100 25 C 116 16, 134 16, 150 25 C 166 34, 184 34, 200 25 L200 40 L100 40 Z"
            fill="#0a2733"
          />
        </svg>
      </div>

      {/* cursor-reactive glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at calc(50% + var(--px, 0) * 140px) calc(50% + var(--py, 0) * 140px), rgba(95,215,222,0.25), transparent 65%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
    </div>
  );
}
