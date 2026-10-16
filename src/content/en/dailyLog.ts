export interface DailyLogEntry {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  location?: string;
  images?: string[];
  links?: { label: string; href: string }[];
}

// Personal, occasional notes — not a formal CV record. See impact.ts for
// verified professional milestones; this is the human-interest counterpart.
export const dailyLogEntries: DailyLogEntry[] = [
  {
    id: "ocean-bridge-ep01-arctic-route-2026-10",
    date: "2026.10.17",
    title: "Ocean Bridge EP.01, the Northern Sea Route: Four Hard Problems and Busan's Opportunity",
    excerpt:
      "Starting from my memories of Murmansk 15 years ago, the first video on my YouTube channel Ocean Bridge explains the four reasons the Northern Sea Route has not yet truly opened, and the role of Busan at the end of that route.",
    body: [
      "The first video on my YouTube channel Ocean Bridge is about the Northern Sea Route (NSR). Crossing the Arctic could cut the distance to Europe by nearly 30% and avoid crises at the Suez Canal and the Strait of Hormuz. When we drew the Rotterdam–Busan voyage on a globe for the video, the Suez–Singapore route came to about 20,000 km (about 32 days at an average 14 knots), while the NSR came to about 13,700 km (about 22 days), roughly ten days shorter. Russia's government has said companies plan to ship about $1.1 trillion worth of cargo along the NSR over the next 12 years (TASS, June 2024, Minister Alexey Chekunkov); the video makes clear that this is a Russian government estimate.",
      "Whenever I hear this story, I think first of my trip to Russia in February 2012, 15 years ago. To test the route's potential on the ground, I held repeated meetings with Russian maritime authorities in Moscow, studied the charts with polar experts in St Petersburg, and attended the international conference \"Transit Navigation on the Northern Sea Route\" in Murmansk, the ice-free port at 68°N and home port of Russia's nuclear icebreakers. The thrill of standing in front of the nuclear icebreaker Yamal is still vivid.",
      "But the heart of the video is not a rosy forecast. It is the four problems that explain why the NSR has not yet truly opened. First, a ship's \"winter coat.\" Most of the world's merchant ships wear \"summer clothes,\" built for warm seas. Sailing through ice requires purpose-built ice-class ships that cost hundreds of millions of dollars each, yet the ice-free season lasts only three or four months a year. Without steady cargo all year round, the costs outweigh the benefits.",
      "Second, the dilemma of beam and depth. Large container ships are 50–60 m wide, but the Russian nuclear icebreakers that clear the way are only about 30–34 m wide — like a 6 m bus following a 3 m snowplough. And at key bottlenecks such as the Sannikov Strait the water is less than 13 m deep, so a fully loaded large ship would touch the bottom.",
      "Third, geopolitical risk — an \"Arctic Hormuz.\" Most of the route runs through Russia's territorial sea and exclusive economic zone, so icebreaker fees or a single diplomatic dispute can close the whole route. Fourth, environmental regulation. In an Arctic Ocean with no rescue bases or repair docks, an oil spill would be irreversible. Through an amendment to MARPOL, the IMO has banned the use and carriage of heavy fuel oil in Arctic waters since July 2024 (with waivers for some ships until 2029).",
      "Yet the NSR is not a pie in the sky to give up on. Some 500 years ago, when the Ottoman Empire cut the overland spice routes, Europeans took to the sea. Vasco da Gama's fleet paid a heavy price in storms and scurvy rounding the Cape of Good Hope, but humanity built sturdier ships, improved navigation and opened the Age of Discovery. We need to know the limits clearly not in order to give up, but in order to prepare properly.",
      "Suez and Hormuz close when the Middle East flares up, and the Panama Canal runs dry in droughts (transit restrictions in 2023–24). Having an alternative sea route ready is a matter of national survival. The video proposes starting with time-insensitive energy and bulk cargo such as natural gas and raw materials, designing efficient ships optimised for polar conditions, training polar-qualified seafarers, and leading in safety monitoring systems that combine satellites and artificial intelligence.",
      "In the end, the success of the Arctic sea route depends not on the Arctic Ocean but on the Port of Busan at the end of it. Busan handled a record 24.88 million TEU of containers in 2025, of which 14.10 million TEU (about 57%) was transshipment (Busan Port Authority). The Panstar Acro (2,758 TEU), which left Busan on 22 August 2026, passed the Vilkitsky Strait on 5 September, reached Felixstowe, UK on 12 September and returned to Busan on 11 October after 50 days — the first Arctic round trip by a Korean container ship. The government aims to open a regular service by 2030 and reach economies of scale by 2035, and Busan's city government has adopted the slogan \"Busan will be the first to open the door to the Arctic shipping era!\"",
      "Only those who see the problem clearly and accept its limits can build the technology and strategy to overcome them. The next video, \"Hormuz Was Always Blocked,\" looks at the hidden history and geopolitics of global shipping as sustained by U.S. naval power.",
    ],
    links: [
      {
        label:
          "TASS: Companies plan to transport cargo worth $1.1 trillion along Northern Sea Route — minister (June 10, 2024)",
        href: "https://tass.com/economy/1801781",
      },
      {
        label:
          "Busan Port hits a record 24.88 million TEU in 2025, 57% transshipment (Busan Port Authority, via Herald Corp., in Korean)",
        href: "https://www.heraldk.com/article/2026020121335214380",
      },
      {
        label:
          "MTN: First Korean container ship completes an Arctic round trip, back in Busan after 50 days (Oct 11, 2026, in Korean)",
        href: "https://news.mtn.co.kr/news-detail/2026101109545880460",
      },
      {
        label:
          "SBS Biz: Regular route by 2030, economies of scale by 2035 (Oct 13, 2026, in Korean)",
        href: "https://biz.sbs.co.kr/amp/article/20000339738",
      },
      {
        label:
          "Busan Metropolitan City: \"Busan will be the first to open the door to the Arctic shipping era!\" (Jan 2026, via NewsSeoul, in Korean)",
        href: "https://newsseoul.co.kr/news/view/1065589233189086",
      },
    ],
    images: [
      "/images/evidence/murmansk-icebreaker-drydock-2012.jpg",
      "/images/evidence/murmansk-nuclear-icebreaker-yamal-2012.jpg",
      "/images/evidence/murmansk-nsr-transit-conference-2012.jpg",
    ],
  },
  {
    id: "maritime-ax-seminar-2026-09",
    date: "2026.09.09",
    title: "Attending the Seminar on AI-Driven Digital and Carbon-Neutral Transformation in Maritime Affairs and Fisheries",
    excerpt:
      "At the Maritime AX Seminar in Busan, I joined Professor Jung Gu-min of Kookmin University, President of the Korean Society of Mobility, and Upstage CEO Sung Kim to discuss AI transformation in the maritime and fisheries sector.",
    location: "Busan",
    body: [
      "On September 9, I attended the \"Seminar on AI-Based Digital and Carbon-Neutral Transformation and Work-Innovation Strategy for Maritime Affairs and Fisheries\" (Maritime AX Seminar) in Busan. It was co-hosted by the Korean Society of Mobility, the Korea Maritime Institute (KMI) and Upstage, and supported by KRISO, KOMERI, the Korean Register (KR), the Korea Maritime Transportation Safety Authority (KOMSA), the Marine Pollution Response Research Institute, Pusan National University and Pukyong National University, as part of the project on expanding green shipping corridors and developing a Korean model.",
      "The meeting carried extra weight thanks to the presence of Professor Jung Gu-min of Kookmin University, President of the Korean Society of Mobility, and Sung Kim, CEO of Upstage, one of Korea's flagship AI companies. Experts from Ulsan Port Authority, KOMERI, the Marine Pollution Response Research Institute and other institutions also took part.",
      "The session introduced how LLMs and AI can turn large volumes of regulations, approved drawings and test reports into structured assets, and cross-check multiple documents accurately, supporting the digital transformation of maritime administration and the decisions of practitioners. It was a meaningful time to think together about how AI can be put to practical use in maritime safety and education, and how that can lead to new R&D projects.",
      "Later, at the Presidential Council on National AI Strategy's October 1 seminar on the debate over slowing AI development, Upstage CEO Sung Kim stressed that to counter external threats Korea needs its own sovereign AI, an AI \"on our side.\"",
    ],
    links: [
      {
        label:
          "Presidential Council on National AI Strategy video: \"To Stop the Terminator, We Need a Terminator on Our Side\" (CEO Sung Kim, in Korean)",
        href: "https://www.youtube.com/watch?v=eEBVYAL63Pc",
      },
    ],
    images: [
      "/images/evidence/maritime-ax-seminar-group-2026.jpg",
      "/images/evidence/maritime-ax-seminar-presentation-2026.jpg",
      "/images/evidence/maritime-ax-seminar-discussion-2026.jpg",
    ],
  },
  {
    id: "skandi-connector-2026-08",
    date: "2026.08.25",
    title: "Aboard the Ship Where My Former Student, Captain Lee, Serves",
    excerpt:
      "Aboard the Skandi Connector, a Norwegian-built DP vessel, I met my former student, now Captain Lee.",
    body: [
      "Today I visited a ship where one of my former students, Captain Lee, now serves as captain — the Skandi Connector, a Norwegian-built DP (Dynamic Positioning) vessel that lays the massive submarine cable networks connecting Korea's offshore wind farms.",
      "The living quarters and onboard environment were excellent, security was tightly managed, and the crew welcomed me warmly. But more than anything, what made me happiest was simply seeing a student I have long cared for, Captain Lee, now serving as the ship's captain. Watching how far he has come was one of the happiest moments I've had in a long time.",
    ],
    images: ["/images/evidence/skandi-connector-bridge-2026.jpg"],
  },
];
