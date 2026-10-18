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
    id: "ocean-bridge-ep02-hormuz-2026-10",
    date: "2026.10.19",
    title: "Ocean Bridge EP.02, Hormuz: It Was No Accident That We Could Buy Cheap and Sell Freely",
    excerpt:
      "Taking the closure of the Strait of Hormuz as a starting point, the second Ocean Bridge video asks who built and guarded the free sea lanes we take for granted — and who must now pay for them.",
    body: [
      "Since the United States and Israel struck Iran on 28 February 2026, the Strait of Hormuz has been effectively closed for more than seven months. Twelve ships were attacked last week alone, and oil has climbed to $110 a barrel. The news says the strait is closed because the US and Iran are fighting. That is true, but seen only that way we miss something more important. In the second video on my YouTube channel Ocean Bridge, I used this crisis to look at what the sea lanes we take for granted have actually been standing on.",
      "The largest container ships, 400 m long and carrying 24,000 containers, are longer than Seoul's 63 Building laid on its side. One such ship costs hundreds of millions of dollars, and the ports that receive them cost billions. That ship size classes are named after canals and straits — Panamax, Suezmax, Malaccamax — shows that ships were designed from the start on the belief that these routes would always be open. That belief rests on three promises: the container standard adopted after 1956, the safety and navigation rules of the International Maritime Organization (such as SOLAS), and the UN Convention on the Law of the Sea (UNCLOS), under which transit passage through international straits shall not be suspended (Art. 44) and no charge may be levied merely for passage (Art. 26).",
      "But the sea was not always like this. Denmark charged tolls on ships entering the Baltic for 428 years, from 1429 to 1857, and in the 16th-century Indian Ocean a ship without a Portuguese pass could be seized. Against this, the Dutch jurist Grotius argued in Mare Liberum (1609) that the sea belongs to no one. The line between navy and pirate was blurred, too: Francis Drake, who plundered Spanish treasure ships, was knighted by Elizabeth I in 1581, and privateering — state-licensed private warships — was only formally abolished by the Declaration of Paris in 1856.",
      "In the 19th century the Royal Navy, and after two world wars the U.S. Navy, guarded the freedom of the seas. George Friedman (The Next 100 Years) finds the basis of American power in a navy that controls all the world's oceans; Niall Ferguson (Colossus) sees the US taking over Britain's role of underpinning free trade; Robert Kagan (The World America Made) argues that because the U.S. Navy acted as the policeman of the seas, great-power wars became rarer and a free market economy could survive. Rules can be agreed, but what actually stops rule-breakers is not the text of an agreement but power. Interestingly, the US, which led this order, never joined UNCLOS yet upheld its navigation rules with warships, while Iran signed but never ratified it.",
      "Piracy is not a thing of the past. Attacks off Somalia reached 217 in 2009 and 237 in 2011; in January 2011 the Korean Navy's Cheonghae Unit rescued all 21 crew of the hijacked Samho Jewelry in Operation Dawn of Gulf of Aden. When a 47-nation coalition and national navies actually put warships to sea, Somali pirate attacks fell to 15 in 2013. Conversely, after the Asian financial crisis, piracy in the Strait of Malacca jumped from 2 incidents in 1999 to 75 the following year. When economies collapse and order weakens, the sea becomes dangerous again.",
      "Hormuz shows this most vividly. Normally about 20 million barrels a day — about a fifth of world oil consumption — pass through the strait (U.S. EIA). During the Iran–Iraq War in the 1980s, about 546 ships were damaged and about 430 seafarers were killed. What reopened these waters was Operation Earnest Will in 1987, in which Kuwaiti tankers were reflagged under the Stars and Stripes and escorted by the U.S. Navy. In The Jungle Grows Back, Kagan compares the liberal order to a garden that someone must tend constantly; let go, and the jungle grows back. What we are seeing in Hormuz now is the jungle returning.",
      "This is not only about Hormuz. The Strait of Malacca, which carries 29% of seaborne oil, is only 2.7 km wide at its narrowest. In the Taiwan Strait, through which nearly half the world's container ships passed in 2022, live-fire zones are declared whenever China's military holds large exercises. During the 2022 Russia–Ukraine war, Türkiye invoked the 1936 Montreux Convention to close the straits to warships of belligerent states, and the Northern Sea Route covered in EP.01 already requires Russian permission.",
      "Korea moves 99.7% of its export and import cargo by sea. Our ability to import raw materials cheaply and sell what we make freely — our rapid growth itself — stood on these seas. But this order has a cost. In Bitcoin and the Geopolitics of the Dollar, Professor Oh Tae-min asks who pays the cost of maintaining the dollar-centred trade and financial order. According to Congressional Budget Office projections, in 2024 the U.S. government's interest payments on its debt exceeded defence spending for the first time, and since the shale revolution the US depends on Persian Gulf crude for only about 2% of its oil consumption. Ian Bremmer calls this a \"G-Zero\" world: many countries can break the game, but none will take responsibility for leading it.",
      "So we must prepare: diversify where we import oil and gas from, enlarge our reserves, build the maritime security capability to protect our own ships, deepen ties with the countries along the straits, and prepare alternative routes such as the Northern Sea Route in advance. What the Hormuz crisis has sent us is not war news but a bill — a bill saying that the cost of the sea lanes someone else used to pay for us, we must now share. The next video looks at green ships and the future of shipping.",
    ],
    links: [
      {
        label: "▶ YouTube video: Ocean Bridge EP.02, Hormuz (released 19 Oct 2026, in Korean)",
        href: "https://youtu.be/I1Uf8CMn5H4",
      },
      {
        label: "U.S. EIA: about 20 million barrels a day through the Strait of Hormuz, about 20% of world oil consumption (16 Jun 2025)",
        href: "https://www.eia.gov/todayinenergy/detail.php?id=65504",
      },
      {
        label: "U.S. EIA: World oil transit chokepoints — the Strait of Malacca carries 29% of seaborne oil",
        href: "https://www.eia.gov/international/content/analysis/special_topics/world_oil_transit_chokepoints",
      },
      {
        label: "UNCLOS Part III (Straits used for international navigation) — Art. 38 transit passage, Art. 44 no suspension",
        href: "https://www.un.org/depts/los/convention_agreements/texts/unclos/part3.htm",
      },
      {
        label: "Lloyd's List: the 1980s Tanker War — about 546 ships damaged, about 430 seafarers killed (15 May 2019)",
        href: "https://lloydslist.com/LL1127507/Time-to-step-back-from-Tanker-War-Two",
      },
      {
        label: "CRFB: U.S. net interest costs overtake defense spending in 2024 — based on CBO projections",
        href: "https://www.crfb.org/blogs/interest-costs-will-leapfrog-medicare-and-defense-year",
      },
      {
        label: "Al Jazeera: US and Iran both claim control of the Strait of Hormuz amid attacks on vessels (17 Oct 2026)",
        href: "https://aljazeera.com/news-analysis/2026/10/17/us-and-iran-both-claim-control-of-strait-of-hormuz-amid-attacks-on-vessels",
      },
    ],
    images: [
      "/images/evidence/ocean-bridge-ep02-megaship-vs-63building.jpg",
      "/images/evidence/ocean-bridge-ep02-unclos-article44.jpg",
      "/images/evidence/ocean-bridge-ep02-earnest-will-1987.jpg",
    ],
  },
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
        label: "▶ YouTube video: Ocean Bridge EP.01, the Northern Sea Route (released 17 Oct 2026, in Korean)",
        href: "https://youtu.be/Sj3aEhzzbbQ",
      },
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
