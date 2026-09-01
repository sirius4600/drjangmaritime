export interface ConferenceInsightEntry {
  id: string;
  event: "incheon" | "busan";
  eventLabel: string;
  location: string;
  date: string;
  sessionCode: string;
  title: string;
  speaker: string;
  affiliation: string;
  summary: string[];
  implications: string[];
  pdfUrl?: string;
}

export interface ConferenceInsightOverview {
  title: string;
  summary: string[];
  implications: string[];
}

// A cross-session synthesis written after reviewing all 15 presentations
// from both the Incheon and Busan 2026 events — the throughlines that don't
// show up when reading any single session on its own.
export const conferenceInsightsOverview: ConferenceInsightOverview | null = {
  title: "KORMARINE Conference 2026: Overall Synthesis",
  summary: [
    "Across the 15 sessions spanning Incheon (June) and Busan (September), the common thread is that decarbonization, autonomy, and geopolitical risk are converging at once — several speakers named this explicitly as a \"compression of time\" (Yong-Sung Ahn, Busan K1-3) or three fuel/technology generations compressed into a single career (Young-Chan Lee, Incheon K1-2).",
    "On regulation, the IMO Net-Zero Framework, EU ETS, and FuelEU Maritime are stacking on top of each other (Kim Jeong-Oh, Ahn Yong-Sung, Son Chang-Woo), and a diagnosis recurring across unrelated sessions is that the real bottleneck isn't fuel choice itself but the absence of verifiable, auditable operational data (hourly emission factors, Well-to-Wake certification, digital fuel passports).",
    "In the fuel race, LNG remains the current incumbent (Han Seung-Ha), ammonia is positioned as the long-term winner once toxicity/engine-readiness/safety barriers clear in the early-to-mid 2030s (Son Chang-Woo), and nuclear propulsion remains stuck at an institutional-gap stage still governed by a single, outdated 1981 IMO safety standard (Jeon Hyun-Buki).",
    "AI/robotics transformation is underway across shipping operations (Han Sang-Tae), shipbuilding design and production (Ryu Yeong-Ung, Song Chang-Sub, Jang Gye-Bong), and marine-equipment subcontractors alike — yet for autonomous-ship navigation AI specifically (Yim Geun-Tae, KRISO), \"data scarcity\" remains the one point every industry expert agrees on, regardless of how they disagree on data sharing.",
    "On industrial competitiveness, three independent sessions (Lee Eunchang, Han Jong-Khil, Chung Yoon-Gu) converge on the same finding: China is widening its lead over Korea across orderbook share, delivery volume, and financing structure, underpinned by state subsidies estimated at 2.5% of revenue — more than ten times the OECD average.",
  ],
  implications: [
    "Young-Chan Lee's call to treat alternative fuels, autonomy, and SMR propulsion as one converging competency gap rather than separate curricula turns out to be the conference's broader conclusion, not just one session's argument — a strong case for VTS and officer-training institutions to design integrated curricula rather than bolting new modules onto the existing structure.",
    "The \"verifiable operational data\" bottleneck recurring across unrelated sessions is the single highest-priority overlap between IMO/IALA policy advisory work and Dr. Jang's own autonomous-navigation AI research. KRISO's 2026-2029 national R&D project (Busan K2-2) tackles this bottleneck directly and is worth engaging with early, before its data standards and governance model are locked in.",
    "Because the port-side institutional gap for new fuels and technologies (SIMOPS, separation distances, emergency response, port-entry rules) showed up for ammonia, nuclear, and hydrogen derivatives alike rather than being fuel-specific, VTS and port-authority emergency-response procedures are better redesigned around this shared structural gap than fuel-by-fuel.",
    "China's industrial-competitiveness pressure looks like it sits outside the safety-training domain, but shifts in orderbook volume and fleet composition feed directly into future demand for trained officers — worth tracking as a macro input for maritime-training policy, even from a safety-focused vantage point.",
  ],
};

// Dr. Jang's own summaries and takeaways from KORMARINE Conference sessions he
// attended, with the original presentation files (where the organizer made
// them available) hosted alongside. Not an official conference archive —
// a personal curation of the sessions most relevant to his field.
export const conferenceInsights: ConferenceInsightEntry[] = [
  {
    id: "busan-k1-2",
    event: "busan",
    eventLabel: "KORMARINE Conference 2026 (Busan)",
    location: "Wyndham Grand, Busan, Korea",
    date: "2026.09.01",
    sessionCode: "K1-2",
    title:
      "European Environmental Regulations: Responses of Korean Shipping Companies",
    speaker: "Jeong-Oh Kim",
    affiliation: "Pan Ocean",
    summary: [
      "Maps the EU's post-2013 regulatory stack — technical/operational measures (EEDI, EEXI, CII) — into the 2024 EU ETS and 2025 FuelEU Maritime regimes, framed under the EU's 'Fit for 55' target of a 55% cut by 2030.",
      "Walks through the EU ETS compliance calendar for EU/EEA-calling vessels: 100% allowance surrender from 2026, and the March/September reporting-verification cycle, plus 2026 expansion to cover CH4 and N2O.",
      "Uses a ~20-vessel DNV case study to compare four cost-mitigation levers for Korean shipowners: bio-fuel blending, EUA hedging/pooling, FuelEU pooling & banking, and BIMCO-style ETS cost-sharing clauses.",
      "Presents FuelEU Maritime's GHG-intensity reduction trajectory (roughly 89 to 63 gCO2e/MJ into the 2040s) alongside slow-steaming and route optimization as near-term compliance tools.",
      "Concludes that environmental regulation has moved 'from cost to competitiveness' — proactive transition and value-chain collaboration, not just compliance, will decide the industry's commercial winners.",
    ],
    implications: [
      "The growing overlap between region-specific carbon rules (EU ETS, FuelEU Maritime) and port-call/voyage planning is a concrete reason to fold regulatory-compliance literacy into IMO/IALA policy advisory work and officer training curricula.",
      "The cost-mitigation tools discussed (pooling, banking, hedging) are increasingly relevant to ship's officers and shore-side operations staff, not just legal/chartering departments — a potential gap in current STCW-based training worth flagging.",
    ],
    pdfUrl:
      "/documents/kormarine-2026/busan-k1-2-kim-jeongoh-eu-regulations.pdf",
  },
  {
    id: "busan-k1-3",
    event: "busan",
    eventLabel: "KORMARINE Conference 2026 (Busan)",
    location: "Wyndham Grand, Busan, Korea",
    date: "2026.09.01",
    sessionCode: "K1-3",
    title:
      "Beyond 2030: Innovation-Driven Strategies for Carbon-Neutral Shipping and Ports",
    speaker: "Yong-Sung Ahn",
    affiliation: "Korea Maritime Institute (KMI)",
    summary: [
      "Central argument: the real risk isn't 2030's target level but the 'compression of time' — IMO's post-2030 targets imply a 3.7-5.5x faster annual rate of GHG-intensity reduction than achieved 2008-2030, while long-lead assets (certification, data systems) are typically built last.",
      "Introduces a 'Supply Readiness Deficit (SRD)' framework with three independently measured variables — physical adequacy (q), timing/operational fit (τ), and verifiability (c) — arguing that low-GHG energy that exists but arrives at the wrong time or can't be certified does not count as real abatement.",
      "Applies SRD to Busan and Ulsan: confirms genuine infrastructure progress (RE100 solar PPA, a distributed-energy special district, world-first ammonia/methanol/LNG bunkering at Ulsan) but finds the hourly/verifiable carbon-attribute data needed for compliance is mostly unmeasured (NA), explicitly not the same as zero.",
      "Proposes 'Interface Sovereignty': regardless of which fuel wins, Korea should secure four asset classes — real-ship operational data, port protocols (bunkering/SIMOPS), verification/MRV methodology, and IP/standard co-proposal rights — illustrated via the WinGD/HHI-EMD ammonia engine and Ulsan's world-first bunkering case.",
      "Flags an ammonia safety gap (ship-side rules exist via MSC 111 and IGC Code amendments, but port-side SIMOPS, separation distances and emergency-response data formats remain nationally discretionary) and a nuclear-ready port/flag interface gap, then proposes a 2026-2035 roadmap: measure, demonstrate, standardize, scale.",
    ],
    implications: [
      "The port-side gap in ammonia 'safety and smart bunkering' (SIMOPS, separation distances, emergency-response data formats left to national discretion) links directly to VTS/port-authority training curricula and to IMO/IALA advisory work on harmonizing port-side bunkering protocols.",
      "The 'verifiability' pillar (real emissions data, WtW verification, digital fuel passport/GFI-MRV interoperability) parallels the standardized, auditable operational-data environment that autonomous-navigation and accident-prevention AI systems require — a natural link to Dr. Jang's own MASS research.",
      "Korea's proposed data infrastructure (published hourly grid emission factors, an SRD observatory for major ports) is a concrete, exportable model for VTS-modernization data architecture.",
    ],
    pdfUrl: "/documents/kormarine-2026/busan-k1-3-ahn-yongsung-beyond2030.pdf",
  },
  {
    id: "busan-k1-4",
    event: "busan",
    eventLabel: "KORMARINE Conference 2026 (Busan)",
    location: "Wyndham Grand, Busan, Korea",
    date: "2026.09.01",
    sessionCode: "K1-4",
    title: "SMRs & Green Energy: Nuclear Maritime Application",
    speaker: "Hyun-Buki Jeon",
    affiliation: "American Bureau of Shipping (ABS)",
    summary: [
      "Frames nuclear power as one of four clean-energy-transition enablers (alongside alternative fuels, electrification, carbon capture) against drivers of regulatory targets, societal pressure, finance and governance — while noting an 'adoption gap': zero ships in today's international merchant fleet run on nuclear power, and the only internationally recognized nuclear merchant-ship safety standard (IMO Res. A.491(XII), 1981) is outdated.",
      "Traces ABS's nuclear classification history back to the NS Savannah (1961) and describes ABS's current optional 'Nuclear Ready' notation (Level 2D design review / Level 3 installation) for vessels designed for future nuclear retrofit, alongside AIPs already granted to HHI, Samsung Heavy Industries and KSOE for nuclear-related concepts (14K TEU containership, Suezmax tanker, LNGC, floating nuclear power plant/data center).",
      "Presents a concrete 70 MWe floating nuclear power plant concept (4x 17.5 MWe HTGR modules, 5-year fuel life) designed to supply cold-ironing shore power to up to 6 cruise ships simultaneously in port, plus a floating nuclear-powered data center concept.",
      "Surveys the global SMR landscape (127 designs tracked by the NEA), noting only water-cooled reactors sit at 'very high' commercial maturity while most SMR/microreactor designs remain at conceptual or component-demonstration stage.",
    ],
    implications: [
      "A floating nuclear power plant supplying shore power to berthed cruise ships, or nuclear-ready/nuclear-powered commercial vessels calling at Korean ports, is squarely a port-state-control and VTS emergency-response planning question — the gap between an outdated 1981 IMO safety code and 2026 industry momentum is exactly what IMO/IALA policy advisory work should be tracking.",
      "Even at Approval-in-Principle stage, nuclear-ready notations on large containerships and tankers argue for building nuclear-vessel awareness into officer and VTS operator training well before commercial deployment (2030s pilots, ~2045 commercial service per the deck's own Bureau Veritas reference).",
    ],
    pdfUrl: "/documents/kormarine-2026/busan-k1-4-jeon-hyunbuki-smr.pdf",
  },
  {
    id: "busan-k2-1",
    event: "busan",
    eventLabel: "KORMARINE Conference 2026 (Busan)",
    location: "Wyndham Grand, Busan, Korea",
    date: "2026.09.01",
    sessionCode: "K2-1",
    title: "Energy Transition Outlook: Hydrogen Roadmap to 2060",
    speaker: "Chang-Woo Son",
    affiliation: "DNV Korea",
    summary: [
      "Core message: pure hydrogen will barely reach ships as bunker fuel — low volumetric density and boil-off during long voyages mean maritime demand shows up almost entirely as derivatives (ammonia, e-methanol); hydrogen itself matters mainly as cargo, not fuel.",
      "Today's hydrogen industry is large but carbon-intensive: ~100 Mt/yr produced, ~1,300 Mt CO2/yr emitted, 98% from unabated fossil routes; clean hydrogen is under 1% of supply today, forecast to reach ~90% (~240 Mt/yr) by 2060.",
      "DNV's own 2050 clean-hydrogen forecast has been cut 45% since 2022, attributed to shrinking announced pipelines, few projects reaching final investment decision, stalled policy support, and faster-than-expected electrification of segments once assumed to need hydrogen.",
      "Names EU ETS (in force since 2024), FuelEU Maritime, and IMO's not-yet-adopted Net-Zero Framework (earliest effect 2028) as the mechanisms expected to close hydrogen's persistent cost gap, since supply-side cost declines alone won't get there.",
      "In the fuel competition, LNG remains the incumbent (~1,000 vessels on order); e-methanol is the 'early mover' (10-year track record, simple retrofit) but constrained by CO2-feedstock availability; ammonia is expected to become the long-term dominant fuel once toxicity/engine-readiness/safety-standard barriers resolve in the early-to-mid 2030s — with Korea, Japan and Singapore positioned as major Asia-Pacific import hubs fed largely by Australia.",
    ],
    implications: [
      "DNV's own timeline — ammonia barriers (toxicity, engine readiness, safety standards) resolved in the early-to-mid 2030s — is a direct cue for when VTS operator and officer training curricula need to be ammonia-bunkering-and-emergency-response-ready, worth cross-referencing against the K1-3/K1-4 sessions' ammonia-safety-gap findings.",
      "Korea's positioning as a major ammonia import/bunkering hub strengthens the case for prioritizing ammonia-specific safety and VTS protocols in national maritime training investment, ahead of the 'fuel-capable' ships already being ordered today.",
    ],
    pdfUrl: "/documents/kormarine-2026/busan-k2-1-son-changwoo-hydrogen.pdf",
  },
  {
    id: "busan-k2-2",
    event: "busan",
    eventLabel: "KORMARINE Conference 2026 (Busan)",
    location: "Wyndham Grand, Busan, Korea",
    date: "2026.09.01",
    sessionCode: "K2-2",
    title:
      "AX for MASS (Maritime Autonomous Surface Ships): AI Training Data Platform for Autonomous Ship",
    speaker: "Geun-Tae Yim",
    affiliation:
      "Korea Research Institute of Ships and Ocean Engineering (KRISO)",
    summary: [
      'Opens by citing a 2025 Nor-Shipping panel ("The 6th International Ship Autonomy and Sustainability Summit"): Sweden and Korea favored open data-sharing ("treating data as exclusive competitive advantage will fragment the system into waters each country controls alone"), the US was neutral (citing commercial trust and liability concerns, favoring voluntary action before international agreements), while Norway and Japan pushed back ("sharing data with competitors is a betrayal of shareholders") — the one point every panelist agreed on was that data scarcity is the single biggest bottleneck for autonomous-ship AI.',
      "Against that backdrop, presents a 4-year (2026-2029) national R&D project led by Korea's Ministry of Trade, Industry and Resources: building a full-lifecycle AI data platform (collection, processing, transmission, storage, management, publication) using real commercial-vessel operating data, to support retraining, verification and public release of AI models.",
      'Core concept is "Shadow Mode": while a human officer actually commands the ship, an AI system independently generates its own decision for the same situation in parallel; divergences between human and AI decisions are extracted and tiered into Hot/Warm/Cold storage by importance, then fed back into AI retraining and scenario generation.',
      "The project has three sub-tasks: (1) supply & acquisition — installing data-collection platforms on a 30+ vessel fleet spanning commercial, passenger and coastal ships; (2) a tiered AI training-data storage platform aligned with international standards (IMO, ISO); (3) developing the Shadow AI model and DataOps/MLOps services, and publishing open training datasets to shipping companies, equipment makers, and academia.",
      'Also introduces a related follow-on program, "KASS 2nd Project: Fully Autonomous Ship Operations Technology Development," spanning port connectivity, end-to-end remote operation, remote-operation support, seamless communication and unmanned cargo handling, with planned international collaboration involving the Netherlands, Japan, the UK and Norway.',
    ],
    implications: [
      'Of all sessions at this conference, this one overlaps most directly with Dr. Jang\'s own research area (navigation AI and accident-prevention systems for autonomous ships). The "Shadow Mode" approach — extracting human-vs-AI decision divergences for retraining — is methodologically close to his own human-factors-based accident-prevention research.',
      "The 2026-2029 national project's plan to publish open training datasets aligned with IMO/ISO standards is worth engaging with early, given his track record of taking a Korea-built VTS English-proficiency assessment framework to IALA international-standard status.",
      "The open Sweden/US/Korea-vs-Norway/Japan data-sharing divide surfaced at the Nor-Shipping panel is a concrete early signal to watch in IMO policy-advisory work on future MASS data-governance standards.",
    ],
    pdfUrl: "/documents/kormarine-2026/busan-k2-2-yim-geuntae-mass-ai-data.pdf",
  },
  {
    id: "busan-k2-3",
    event: "busan",
    eventLabel: "KORMARINE Conference 2026 (Busan)",
    location: "Wyndham Grand, Busan, Korea",
    date: "2026.09.01",
    sessionCode: "K2-3",
    title: "Why AX Succeeds or Fails on the Ground",
    speaker: "Gye-Bong Jang",
    affiliation: "HD Korea Shipbuilding & Offshore Engineering",
    summary: [
      "Presents HD Hyundai's shipbuilding AX (AI Transformation)/DX case studies, built around in-house AI systems ('HD Agent', 'HiCAMS'), all following a repeating 'PoC → scale via shared data backbone → full deployment' pattern.",
      "Reports concrete efficiency results: one process cut to roughly 1/10 of its original time with a 15-20% accuracy/quality improvement (turnaround shortened from about one month to six days), and a consistency/matching rate that rose from 92% (Dec 2024) to 98.5% (Aug 2025).",
      "Frames a 'hardware vs. software' philosophy for shipbuilding AX: hull/hardware as the company's 'DNA', software as the differentiator, run through a virtual-real feedback loop (new algorithm to experiment to measure to share to learn to adapt) explicitly modeled on a Tesla-style continuous-improvement cycle.",
      "Concludes with a practical scaling framework: don't chase full automation from day one — start with a narrow PoC, build a shared data backbone, then scale, while tracking concrete KPIs rather than treating AX adoption itself as the goal.",
      "Note: a substantial portion of the Korean-language text in the source PDF did not extract due to font-encoding issues; this summary is built from the numeric data and structural content that did extract correctly.",
    ],
    implications: [
      "The 'hardware as DNA, software as differentiator' framing and the virtual-real feedback loop are directly transferable to how navigation-AI and accident-prevention-system R&D could structure iterative model retraining and validation.",
      "The jump from 92% to 98.5% consistency, achieved through disciplined phased data-backbone scaling rather than a single leap, is a useful case study for justifying phased AI adoption in maritime safety-training or VTS-modernization projects.",
    ],
    pdfUrl: "/documents/kormarine-2026/busan-k2-3-jang-gyebong-ax-success.pdf",
  },
  {
    id: "busan-k2-4",
    event: "busan",
    eventLabel: "KORMARINE Conference 2026 (Busan)",
    location: "Wyndham Grand, Busan, Korea",
    date: "2026.09.01",
    sessionCode: "K2-4",
    title: "Reliable LNG Fuel Supply through Advanced LNG Pump Technology",
    speaker: "James Seung-Ha Han",
    affiliation: "PanasiaEM Co., Ltd.",
    summary: [
      'LNG is positioned as a "practical transition fuel" backed by mature technology and infrastructure despite methane-slip and storage challenges; 856 LNG dual-fuel vessels (excl. LNGC) were delivered 2021-2026, with containerships taking the largest share (30.3%)',
      "Of the 687 vessels expected 2027-2029, China is projected to take 78.7% versus Korea's 16%, driven partly by China's integrated FGSS-package supply model (e.g. SUNRUI) versus Korea's individual-component procurement",
      "Everllence's next-generation ME-GI engine raising injection pressure from 300 bar to 380 bar forces a redesign across the entire LNG fuel-supply chain — pumps, vaporizers, valves, piping",
      "Tightening Well-to-Wake lifecycle GHG regulation (FuelEU Maritime) makes methane slip the key variable eroding LNG's carbon advantage, pushing the industry toward Bio-LNG/e-LNG pathways to meet an 80% intensity-reduction target by 2050",
    ],
    implications: [
      "Fuel-transition regulation (FuelEU Maritime, IMO lifecycle GHG guidelines) increasingly needs to be reflected in bunkering and fuel-handling safety training curricula, not just fuel selection — officer training should update procedures for LNG and other alternative fuels",
      "China's shift to turnkey FGSS-package supply is a structural competitiveness threat to Korea's marine-equipment sector, worth flagging in maritime industry policy advisory work",
      "The 380-bar high-pressure standard signals coming retraining needs for crews on new fuel systems and safety procedures",
    ],
    pdfUrl: "/documents/kormarine-2026/busan-k2-4-han-seungha-lng-pump.pdf",
  },
  {
    id: "busan-k3-1",
    event: "busan",
    eventLabel: "KORMARINE Conference 2026 (Busan)",
    location: "Wyndham Grand, Busan, Korea",
    date: "2026.09.01",
    sessionCode: "K3-1",
    title: "Comparative Analysis of Key Shipbuilding Competitiveness",
    speaker: "Eunchang Lee",
    affiliation: "Korea Institute for Industrial Economics & Trade (KIET)",
    summary: [
      "Since WWII, global shipbuilding leadership has shifted US → Europe → Japan (technology) → Korea (technology) → China (volume); falling orders shrink not just shipyards but their subcontractor base, creating a vicious cycle of ecosystem decline and falling order competitiveness",
      "China holds 48% of 2020-2025 global shipbuilding output (CGT) versus Korea's 26% and Japan's 14%; as of July 2026, China holds 75% of new orders vs Korea's 17%, 67% of the orderbook vs Korea's 18%, and a projected 62% of 2027 deliveries vs Korea's 21% — the gap is widening",
      "Per OECD's MAGIC database, China's 2024 shipbuilding subsidies are estimated at 2.5% of revenue (over US$1.3B) versus an OECD average of 0.2%; subsidies to China's steel industry (a key input) reach 4.2% of revenue versus near-zero in OECD Asia-Pacific",
      "China's low-cost volume dominance is substantially subsidy-driven and its sustainability is questioned; Korea needs both its own competitiveness push (MOTIE's \"K-Shipbuilding Future Vision\": K-Shipyard Alliance, MASGA project, domestic workforce expansion) and a coordinated global fair-competition strategy",
    ],
    implications: [
      "China's subsidy-driven volume expansion and shift to turnkey order packages pose a structural threat to Korea's entire shipbuilding ecosystem (design, equipment, workforce) — a trend worth tracking from a national maritime-policy advisory standpoint",
      "Shifts in shipbuilding order volume and fleet composition connect to future demand for Korean-trained officers, making this competitiveness trend relevant input for maritime safety-training infrastructure planning",
    ],
    pdfUrl:
      "/documents/kormarine-2026/busan-k3-1-lee-eunchang-competitiveness.pdf",
  },
  {
    id: "busan-k3-2",
    event: "busan",
    eventLabel: "KORMARINE Conference 2026 (Busan)",
    location: "Wyndham Grand, Busan, Korea",
    date: "2026.09.01",
    sessionCode: "K3-2",
    title:
      "Structural Comparison of Ship Finance: South Korea vs. Japan and Future Policy Directions",
    speaker: "Jong-Khil Han",
    affiliation: "Sungkyul University",
    summary: [
      'Japanese ship finance relies on low-cost yen liquidity from megabanks and regional banks (83% and 67% funding share respectively), the long-term trust-based "Anken" relationship linking shipowners, trading houses and financiers, and JOLCO (a tax-advantaged operating lease) that channels private capital naturally into shipping',
      'Korea\'s system is heavily "public-led," with over 60% of financing dependent on policy banks (KEXIM, KDB, KOBC); during the HMM restructuring, roughly KRW 6.6 trillion in public funds secured 24,000-TEU ultra-large vessels — strong crisis response, but limited at attracting steady private capital',
      "Japan's private-cluster model (regional banks + private shipowners + JOLCO tax benefits) sustains a large fleet without fiscal burden; its strength is ultra-low-cost long-term stability and private-led equity, its weakness is exposure to rate hikes and FX shifts",
      'A "triple burden" of decarbonization, persistently high interest rates, and supply-chain realignment is creating chronic pressure on global ship finance; the speaker proposes "globalizing Korea\'s shipping accounting system" (e.g. introducing accelerated depreciation) to help Busan grow into a global maritime finance hub',
    ],
    implications: [
      "The diagnosis that Korea's policy-bank-dependent structure is strong in crises but weak at attracting steady private capital is useful macro context for forecasting future fleet investment and, in turn, demand for trained maritime officers",
      'The speaker\'s proposed policy direction of growing Busan into a "global maritime finance hub" connects directly to the workforce-training mission of Busan-based maritime institutions — relevant material for policy advisory work',
    ],
    pdfUrl:
      "/documents/kormarine-2026/busan-k3-2-han-jongkhil-ship-finance-kr-jp.pdf",
  },
  {
    id: "busan-k3-3",
    event: "busan",
    eventLabel: "KORMARINE Conference 2026 (Busan)",
    location: "Wyndham Grand, Busan, Korea",
    date: "2026.09.01",
    sessionCode: "K3-3",
    title:
      "Current Status of Chinese Ship Finance — Decoding the Dynamics of Shipbuilding, Capital, and Structural Rigidity",
    speaker: "Yoon-Gu Chung (Kane Chung)",
    affiliation: "ING Bank N.V., Singapore Branch",
    summary: [
      'China\'s shipbuilding volume dominance is underpinned by a "self-reinforcing financial flywheel": yard capacity and competitive orders attract finance origination from lessors, policy banks and offshore investors, and that finance in turn secures further yard orders',
      "Chinese leasing offers aggressive terms — 60-100% loan-to-value and 7-15 year tenors — far beyond conventional Western bank financing; this is a structural workaround for a regulatory constraint (Chinese banks are prohibited from directly extending bilateral mortgage loans to non-Chinese shipowners), not merely an institutional design choice",
      "This structure simultaneously sustains China's orderbook and capital base, but carries five risk pillars: geopolitical risk (USTR/tariff frameworks), residual value risk (cyclical downturns hitting cash flow and collateral together), ownership optics (legal title vs. actual operational control), moral hazard (aggressive LTVs encouraging marginal vessel orders), and refinancing/exit risk (structural rigidity, reliance on external capital)",
      "Core conclusion: China's massive leasing ecosystem was born of regulatory necessity, not institutional preference",
    ],
    implications: [
      "Understanding China's finance-order flywheel clarifies that China's continued dominance in shipbuilding volume stems as much from financial-market structure as from price competitiveness — useful macro context for forecasting Korea's own fleet-renewal and newbuilding trends",
      "Since shifts in newbuilding orders and fleet composition ultimately connect to demand for trained officers and safety training, financing-side developments outside the core safety domain are still worth tracking from a policy-advisory perspective",
    ],
    pdfUrl:
      "/documents/kormarine-2026/busan-k3-3-chung-yoongu-ship-finance-china.pdf",
  },
  {
    id: "incheon-k1-2",
    event: "incheon",
    eventLabel: "KORMARINE Conference 2026 (Incheon)",
    location: "Songdo Convensia, Incheon, Korea",
    date: "2026.06.17",
    sessionCode: "K1-2",
    title:
      "Nurturing the Next-Generation Workforce: Changes and Challenges in the Shipping Industry in Preparation for Alternative Fuels, New Technologies, and SMR Integration",
    speaker: "Young-Chan Lee",
    affiliation: "Korea Maritime & Ocean University",
    summary: [
      "Three transitions — alternative fuels, automation/MASS, and SMR (nuclear) propulsion — are converging at once, but training systems are adapting last; the workforce gap is framed as a safety risk, not an HR issue.",
      "Past fuel transitions (coal→oil→LNG) each took roughly a century; the net-zero/SMR shift demands the steepest skills jump in maritime history.",
      "The real barrier to nuclear merchant ships isn't the reactor technology but the institutional gap: no international liability regime, unresolved port-entry rules, and emergency-planning-zone (EPZ) conflicts — squarely IMO/IAEA work.",
      "Proposes a new STCW Chapter V regulation (V/5) covering reactor fundamentals, radiation protection, control-room watchkeeping, emergency response, and simulator-based qualification for nuclear-ship crews.",
      "Proposes a crewing model for a Korean SMR containership (15,000–16,000 TEU class) that layers a Reactor Officer and Radiation Protection Officer onto the existing STCW deck/engine chain of command.",
    ],
    implications: [
      "For maritime training institutions, the talk suggests treating alternative fuels, autonomy, and SMR not as separate curricula but as one converging competency gap requiring integrated course design.",
      "The proposal to formally recognize simulator training as STCW 'sea service' is directly relevant to how far VTS operator certification programs can lean on digital-twin/simulator training as officially credited experience.",
      "The SMR crewing/licensing discussion is an early signal that VTS and port authorities will eventually need special-control and emergency-response procedures for nuclear-powered merchant traffic — worth tracking for future curriculum updates.",
    ],
    pdfUrl:
      "/documents/kormarine-2026/incheon-k1-2-lee-youngchan-workforce.pdf",
  },
  {
    id: "incheon-k1-4",
    event: "incheon",
    eventLabel: "KORMARINE Conference 2026 (Incheon)",
    location: "Songdo Convensia, Incheon, Korea",
    date: "2026.06.17",
    sessionCode: "K1-4",
    title:
      "Geopolitical Risks and Strategic Management of National Maritime Industry",
    speaker: "Jong-Seo Yang",
    affiliation: "Korea Exim Bank",
    summary: [
      "Frames the 2020s as an era of compounding geopolitical risk for shipping/shipbuilding: pandemic aftershocks, the US-China tariff conflict (a 2017–2026 timeline), and Red Sea/Suez route disruption.",
      "Uses route-diversion case studies (e.g., Ras Tanura–Yanbu-type comparisons) to show how geopolitical rerouting via the Cape of Good Hope translates directly into freight, fuel, and lead-time risk.",
      "Presents order-book data showing Korea's global DWT market share edged up slightly from 2015 to 2025 (~16%+) while China's share expanded more structurally over the same period.",
      "Highlights that US tariff/USTR actions targeting China (including 2026 measures) are materially shaping newbuild ordering and fleet-restructuring decisions.",
      "Closes with layered policy recommendations for government, shipowners, and shipbuilders — fleet diversification, supply-chain risk management, and closer industry-government coordination.",
    ],
    implications: [
      "Route-level geopolitical risk (Red Sea/Suez diversion) implies shifting traffic volumes and patterns in specific sea areas — relevant to anticipating VTS staffing and training needs along emerging detour routes.",
      "Shifts in fleet composition and ordering patterns, driven by trade policy, will affect the timing of new-technology vessel arrivals — a useful input for sequencing officer/VTS training curriculum updates.",
      "Useful macro context for IMO/IALA advisory work: trade-conflict dynamics increasingly shape maritime policy discussions beyond pure safety/technical regulation.",
    ],
    pdfUrl:
      "/documents/kormarine-2026/incheon-k1-4-yang-jongseo-geopolitical.pdf",
  },
  {
    id: "incheon-k2-1",
    event: "incheon",
    eventLabel: "KORMARINE Conference 2026 (Incheon)",
    location: "Songdo Convensia, Incheon, Korea",
    date: "2026.06.17",
    sessionCode: "K2-1",
    title:
      "Transforming the Maritime Industry through AI and Robotics (Focusing on GHG response)",
    speaker: "Sang-Tae Han",
    affiliation: "HMM",
    summary: [
      "Frames AI/robotics adoption as the operational answer to simultaneous regulatory (IMO Net-Zero Framework, EU ETS, FuelEU Maritime), cost, and operational pressure on shipping companies.",
      "Groups applications into four areas — AI weather routing/speed optimization, hull-fouling detection and cleaning robots, and port-call/JIT optimization — each mapped to CII/EU ETS/FuelEU compliance.",
      "Stresses applying formal data-quality standards (ISO/IEC 25012/25024, and the AI/ML-specific ISO/IEC 5259-2/5259-3) to navigational data sources like AIS and ECDIS before trusting AI outputs.",
      "Cites HMM's own case: a partnership with Avikus's HiNAS Control 4.0 for Level-2 autonomous navigation trials and RPM optimization, achieving roughly 4.2% fuel savings.",
      "Describes Jotun's HullSkater hull-cleaning robot enabling an 'always-clean hull' approach — predictive fouling detection paired with proactive cleaning.",
    ],
    implications: [
      "The point that AIS/ECDIS data quality must meet formal ISO/IEC standards before AI can be trusted reinforces that data governance is a prerequisite for autonomous-navigation AI research, not an afterthought.",
      "HMM's Level-2 autonomous navigation trial (HiNAS Control 4.0) is a concrete commercial data point on the pace of autonomy adoption — useful for designing VTS training on human-autonomy interaction.",
      "The triple pressure (regulation/cost/operations) is a strong argument for weighting carbon-compliance practice more heavily in officer training curricula.",
    ],
    pdfUrl:
      "/documents/kormarine-2026/incheon-k2-1-han-sangtae-ai-robotics.pdf",
  },
  {
    id: "incheon-k2-3",
    event: "incheon",
    eventLabel: "KORMARINE Conference 2026 (Incheon)",
    location: "Songdo Convensia, Incheon, Korea",
    date: "2026.06.17",
    sessionCode: "K2-3",
    title: "MBE Digital Platform Strategy for Global Competitive Advantage",
    speaker: "Yeong-Ung Ryu",
    affiliation: "HD KSOE (HD Korea Shipbuilding & Offshore Engineering)",
    summary: [
      "Uses comparative complexity data (aircraft carrier: 11M labor-hours/2M parts; Harmony of the Seas cruise ship: 10M hours/900K parts) to show LNG carriers rival or exceed aircraft/automotive manufacturing complexity.",
      "Centers the talk on 'Authoritative Data' / Single Source of Truth as the foundation for a Model-Based Enterprise (MBE) transformation spanning design, production, inspection, and MRO on a 2023–2030 roadmap.",
      "Traces the evolution of ship design methodology from J. Harvey Evans's 1959 MIT 'Design Spiral' concept toward front-loaded design and full 3D digital-twin methods.",
      "Describes building a Digital Thread using the Siemens portfolio (NX design, PLM, Digital Twin Composer) under an open-architecture PLM strategy.",
      "Closes with a four-stage AI roadmap for the shipbuilding enterprise: Everyone AI → One Truth → Physical AI → AI Platform.",
    ],
    implications: [
      "The 'Authoritative Data'/Single-Source-of-Truth concept in shipbuilding hints at how design-stage digital data could eventually feed operational autonomous-navigation training datasets.",
      "The Physical-AI/digital-twin roadmap supports the case for standardizing digital-twin-based simulation training in officer and ship-management education, beyond just shipyard production use.",
    ],
    pdfUrl:
      "/documents/kormarine-2026/incheon-k2-3-ryu-yeongung-mbe-platform.pdf",
  },
  {
    id: "incheon-k2-4",
    event: "incheon",
    eventLabel: "KORMARINE Conference 2026 (Incheon)",
    location: "Songdo Convensia, Incheon, Korea",
    date: "2026.06.17",
    sessionCode: "K2-4",
    title:
      "AI and Robotic Technologies for Production Innovation in Shipyards' Subcontractors",
    speaker: "Chang-Sub Song",
    affiliation: "Research Institute of Medium & Small Shipbuilding",
    summary: [
      "Frames the core challenge for shipyard welding automation as large/irregular hull geometry, narrow workspaces, and 3D curved surfaces of varying thickness and material.",
      "Presents a collaborative-robot (cobot) welding case (TAEJIN) enabling multi-machine operation by a single worker and welding by minimally trained (including foreign and female) workers, versus the limitations of manual carriage welding.",
      "Presents concrete pipe-welding automation results (DAEYEON): 2–3x productivity gains, welding spatter reduced to roughly 1/20, and significantly improved working-environment metrics (fumes, exposure).",
      "Describes a YOLO-based weld-pool/bead defect prediction system and a computer-vision-based cutting-piece sorting/defect-prevention system (SUN-TECH) that matches physical cut pieces against CAD drawings in real time.",
      "Reports a cobot welding system (HJ S&C, using Rainbow Robotics' RB3-730ES) achieving 19.7 m/h welding speed with bead quality high enough to eliminate post-weld grinding.",
    ],
    implications: [
      "Robotics/AI-driven productivity gains at subcontractor scale are a concrete, verifiable case study for addressing Korea's shipbuilding skilled-labor shortage beyond the large-yard narrative.",
      "The YOLO/computer-vision-based real-time defect-detection approach offers a transferable methodology for AI anomaly-detection research in maritime safety (e.g., video-based abnormal-behavior detection in VTS surveillance).",
    ],
    pdfUrl:
      "/documents/kormarine-2026/incheon-k2-4-song-changsub-shipyard-ai.pdf",
  },
];
