export function MaritimeIntelligenceVisual() {
  return (
    <svg
      viewBox="0 0 520 620"
      fill="none"
      className="h-full w-full"
      role="img"
      aria-label="Abstract map showing vessel trajectories, risk zones and data nodes across a coastline"
    >
      <defs>
        <linearGradient id="panelFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* base grid */}
      <g stroke="#2a4152" strokeWidth="0.6" opacity="0.55">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 65} y1="0" x2={i * 65} y2="620" />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 62} x2="520" y2={i * 62} />
        ))}
      </g>

      <rect width="520" height="620" fill="url(#panelFade)" />

      {/* coastline silhouette */}
      <path
        d="M-10 210 C 60 190, 90 240, 150 225 C 210 210, 230 260, 300 250 C 370 240, 390 300, 470 290 C 520 284, 540 300, 560 296 L 560 -10 L -10 -10 Z"
        fill="#0f1e2c"
        opacity="0.9"
      />
      <path
        d="M-10 210 C 60 190, 90 240, 150 225 C 210 210, 230 260, 300 250 C 370 240, 390 300, 470 290 C 520 284, 540 300, 560 296"
        stroke="#3a5568"
        strokeWidth="1.2"
      />

      {/* risk zones */}
      <circle cx="205" cy="360" r="46" fill="#0f9aa4" opacity="0.08" />
      <circle cx="205" cy="360" r="46" stroke="#0f9aa4" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="360" cy="470" r="34" fill="#0f9aa4" opacity="0.07" />
      <circle cx="360" cy="470" r="34" stroke="#0f9aa4" strokeOpacity="0.3" strokeWidth="1" />

      {/* vessel trajectories */}
      <path
        d="M40 520 C 120 470, 160 430, 205 360 C 250 300, 300 330, 340 300"
        stroke="#23b8c1"
        strokeWidth="1.4"
        strokeDasharray="2 6"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M470 380 C 420 410, 400 440, 360 470 C 320 500, 280 500, 230 540"
        stroke="#23b8c1"
        strokeWidth="1.4"
        strokeDasharray="2 6"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M120 560 C 170 500, 190 420, 205 360 C 220 300, 260 260, 330 245"
        stroke="#eef2f3"
        strokeWidth="1"
        strokeDasharray="1 5"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* vessel nodes */}
      {[
        { cx: 205, cy: 360, r: 4, pulse: true },
        { cx: 340, cy: 300, r: 3 },
        { cx: 360, cy: 470, r: 4, pulse: true },
        { cx: 230, cy: 540, r: 3 },
        { cx: 40, cy: 520, r: 3 },
        { cx: 470, cy: 380, r: 3 },
      ].map((n, i) => (
        <g key={i}>
          {n.pulse && (
            <circle
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="none"
              stroke="#23b8c1"
              strokeWidth="1"
              className="origin-center motion-safe:animate-[ping_3s_ease-in-out_infinite]"
              style={{ transformBox: "fill-box" }}
            />
          )}
          <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.pulse ? "#23b8c1" : "#eef2f3"} />
        </g>
      ))}

      <rect x="0.5" y="0.5" width="519" height="619" rx="15.5" stroke="#24384a" />
    </svg>
  );
}
