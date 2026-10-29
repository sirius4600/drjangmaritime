export type NewsCategory =
  | "imo"
  | "iala"
  | "safety"
  | "mass"
  | "cyber"
  | "green"
  | "enav"
  | "seafarer";

export interface NewsItem {
  id: string;
  category: NewsCategory;
  title: string;
  summary: string;
  date: string;
  source: string;
  sourceUrl: string;
}

// Fixed display order for category filters/icons. When adding a new
// category, add it to the NewsCategory union above and here.
export const newsCategories: NewsCategory[] = [
  "imo",
  "iala",
  "safety",
  "mass",
  "cyber",
  "green",
  "enav",
  "seafarer",
];

// Curated, periodically refreshed snapshot of international maritime
// developments (IMO, IALA and the wider industry). Each item links back to
// its primary source. Last refreshed 2026-08.
export const newsItems: NewsItem[] = [
  {
    id: "net-zero-framework",
    category: "imo",
    title: "IMO Net-Zero Framework talks to resume in late 2026",
    summary:
      "The IMO Net-Zero Framework, approved at MEPC 83 in April 2025, was not adopted at the extraordinary session after member states failed to reach consensus. Built around a global fuel standard and an emissions-trading mechanism, the reconvened session is expected around October 2026.",
    date: "2026.08",
    source: "IMO Media Centre",
    sourceUrl:
      "https://www.imo.org/en/mediacentre/pressbriefings/pages/imo-net-zero-shipping-talks-to-resume-in-2026.aspx",
  },
  {
    id: "iala-e-navigation-s100",
    category: "iala",
    title: "IALA accelerates e-Navigation's shift to the S-100 standard",
    summary:
      "IALA's e-Bulletin highlighted the final MaDaMe project seminar on transitioning to the S-100 digital chart and navigation-data framework, alongside the significance of the next-generation S-200 product specifications, underscoring the industry's push toward a fully digital navigation ecosystem.",
    date: "2026.06",
    source: "IALA e-Bulletin",
    sourceUrl: "https://www.iala.int/e-bulletin/",
  },
  {
    id: "msc111-safety",
    category: "safety",
    title:
      "MSC 111 adopts sweeping updates to dangerous-goods, inspection and training rules",
    summary:
      "IMO's Maritime Safety Committee (111th session, May 2026) adopted IMDG Code Amendment 43-26 (in force 1 Jan 2028), a revised Enhanced Survey Programme (ESP Code) for tankers and bulk carriers, and a higher standard crew weight (90kg) under the IP Code. Guidelines for training crews on methanol-, ethanol-, ammonia- and hydrogen-fuelled ships were also approved.",
    date: "2026.05",
    source: "Britannia P&I Club",
    sourceUrl:
      "https://britanniapandi.com/2026/06/imo-maritime-safety-committee-update-111/",
  },
  {
    id: "mass-code",
    category: "mass",
    title: "IMO adopts the world's first Code for autonomous ships",
    summary:
      "MSC 111 adopted the non-mandatory international MASS Code for cargo ships, which entered into force on 1 July 2026. It embeds risk assessment into the approval process and sets out interaction with Remote Operation Centres, while preserving the master's responsibility to intervene even without crew aboard. A mandatory Code is targeted after an Experience-Building Phase, from 2032.",
    date: "2026.07",
    source: "DNV",
    sourceUrl: "https://www.dnv.com/news/2026/imo-mcs-111-new-mass-code-adopted/",
  },
  {
    id: "maritime-cyber-code",
    category: "cyber",
    title: "IMO targets 2028 for a dedicated Maritime Cyber Code",
    summary:
      "IMO's Facilitation Committee (FAL 50) agreed to develop a goal-based, non-mandatory Maritime Cyber Code covering ports, ships and the ship-port interface by 2028. Mandatory cybersecurity measures for Single Window security are being folded into the FAL Convention, targeted for adoption at FAL 51.",
    date: "2026.06",
    source: "DNV",
    sourceUrl: "https://www.dnv.com/news/2026/imos-facilitation-committee-fal-50/",
  },
  {
    id: "green-fuel-race",
    category: "green",
    title:
      "The alternative-fuel race: LNG leads as methanol and ammonia close in",
    summary:
      "As of 2026, LNG-fuelled ships lead with 600+ vessels in operation and 1,300+ on order, capturing roughly two-thirds of new alternative-fuel orders. Methanol is growing fast in container and car-carrier segments, while ammonia projects are multiplying despite toxicity and corrosion challenges. Nuclear propulsion remains a long-term prospect, held back by regulatory gaps.",
    date: "2026.08",
    source: "Ship Universe",
    sourceUrl:
      "https://www.shipuniverse.com/the-great-green-fuel-race-in-2026-lng-methanol-ammonia-and-the-nuclear-option/",
  },
  {
    id: "vdes-solas",
    category: "enav",
    title: "VDES recognised under SOLAS as the satellite era begins",
    summary:
      "In May 2026, IMO's Maritime Safety Committee agreed to recognise VDES (VHF Data Exchange System) as an alternative to AIS under SOLAS, effective 1 January 2028. Satellites carrying VDES payloads from Space Norway and Lusospace have successfully reached orbit, marking the start of satellite-based e-Navigation infrastructure.",
    date: "2026.05",
    source: "VDES Alliance",
    sourceUrl:
      "https://www.vdes-alliance.org/index.php/category/news-about-vdes/",
  },
  {
    id: "officer-shortage-2026",
    category: "seafarer",
    title: "Seafarer Workforce Report: shortfall of 39,100 officers, and counting",
    summary:
      "The 2026 BIMCO/ICS Seafarer Workforce Report (released 25 June 2026) puts the current shortage of STCW-certified officers at 39,100, with a further 113,735 needed by 2030 as the fleet grows and demand for certified crew rises 35% versus 2021. It calls for an average of 22,747 new officers a year through 2030, alongside stronger recruitment, training and retention.",
    date: "2026.06",
    source: "BIMCO / ICS",
    sourceUrl:
      "https://www.bimco.org/news-insights/press-media/press-releases/2026/0625-workforce-report/",
  },
  {
    id: "mlc-2025-amendments",
    category: "seafarer",
    title: "2025 MLC amendments strengthen seafarer protection, in force 2027",
    summary:
      "Amendments to the Maritime Labour Convention, due to enter into force in late December 2027, formalise seafarers' right to non-discriminatory shore leave, expand shipowners' repatriation obligations (travel, lodging, meals and medical costs), explicitly prohibit shipboard violence and harassment, and require gender-specific hygiene provisions and confidential, retaliation-free grievance handling.",
    date: "2025.06",
    source: "West of England P&I Club",
    sourceUrl:
      "https://www.westpandi.com/news-and-resources/news/june-2025/amendments-to-the-maritime-labour-convention-adopt/",
  },
    {
    id: "imo-marine-geoengineering-frameworks",
    category: "imo",
    title: "IMO adopts assessment frameworks for marine geoengineering research",
    summary: "Meeting October 5–9, 2026, Parties to the London Convention and Protocol adopted new assessment frameworks for ocean fertilization, alkalinity enhancement, and biomass sinking. The frameworks help governments evaluate whether proposed marine geoengineering research is legitimate science and can proceed without unacceptable environmental risks, providing standardized screening, risk assessment, and decision-making processes.",
    date: "2026.10.21",
    source: "International Maritime Organization",
    sourceUrl: "https://www.imo.org/en/mediacentre/pages/default.aspx",
  },
  {
    id: "first-commercial-green-ammonia-bunkering",
    category: "green",
    title: "World's first commercial ship-to-ship green ammonia bunkering completed",
    summary: "On October 13, 2026, the world's first commercial ship-to-ship green ammonia bunkering was completed at Zhoushan Port, China, transferring 1,000 tons of green ammonia to a 210,000-DWT bulk carrier. Energy China says the operation demonstrates commercial deployment across the entire deep-sea shipping value chain—production, storage, transport, bunkering, and onboard use—offering a real-world model for scaling green marine fuels.",
    date: "2026.10.21",
    source: "Marine Log",
    sourceUrl: "https://marinelog.com/news/energy-china-in-world-first-commercial-ship-to-ship-green-ammonia-bunkering",
  },
  {
    id: "maritime-cyber-extortion-n0n",
    category: "cyber",
    title: "Cyber extortion group lists 38 maritime organizations with ransom deadline",
    summary: "On October 12, 2026, cyber extortion group n0n listed 38 maritime and logistics organizations across 18 countries on its dark web leak site, with ransom demands ranging from $2.4 million to $14 million and a deadline of October 19, 2026. Targets include container terminals, shipping lines, port IT providers, and logistics companies. Cybersecurity firms warn the incident may trace to a common vendor breach affecting operational and commercial data.",
    date: "2026.10.21",
    source: "Safety4Sea",
    sourceUrl: "https://safety4sea.com/cyber-extortion-group-targets-38-maritime-organizations/",
  },
  {
    id: "kmp-batumandi-ferry-fire-indonesia",
    category: "safety",
    title: "Ferry fire near Merak Port renews Indonesia safety scrutiny",
    summary: "The KMP Batumandi ferry caught fire in the approach channel to Merak Port, Cilegon, on October 20, 2026. All passengers and crew were evacuated safely with no fatalities reported. The incident, occurring at approximately 16:15 WIB while en route from Bakauheni to Merak, has renewed attention on domestic ferry safety standards in Indonesia.",
    date: "2026.10.23",
    source: "Tempo.co",
    sourceUrl: "https://en.tempo.co/read/2121998/kmp-batumandi-ferry-fire-raises-concerns-over-indonesias-maritime-safety",
  },
  {
    id: "uscg-nvic-02-26-maritime-cyber-guidance",
    category: "cyber",
    title: "Coast Guard issues NVIC 02-26 maritime cybersecurity implementation guidance",
    summary: "The U.S. Coast Guard released Navigation and Vessel Inspection Circular 02-26 on October 21, 2026, providing detailed compliance guidance for the 2025 maritime cybersecurity rule under 33 CFR Part 101, Subpart F. The circular includes section-by-section recommendations, sample Cybersecurity Officer designation letters, and templates to help U.S.-flagged vessels, port facilities, and Outer Continental Shelf facilities meet requirements, with cybersecurity plans due by July 16, 2027.",
    date: "2026.10.23",
    source: "U.S. Coast Guard / Executive Gov",
    sourceUrl: "https://www.executivegov.com/articles/coast-guard-maritime-cybersecurity-guidance",
  },
  {
    id: "shanghai-melbourne-green-corridor-implementation",
    category: "green",
    title: "Shanghai–Melbourne Green Shipping Corridor Enters Implementation Phase",
    summary: "The Port of Shanghai, Port of Melbourne, and C40 Cities launched an implementation plan for their green shipping corridor on October 21, 2026. The plan targets low-carbon container ships by 2035, with Shanghai setting a goal of one million tonnes annual bunkering capacity for green methanol and biofuels. Key measures include shore power infrastructure, voyage optimization through digitalization, and supply chain cooperation that could be replicated across other Australia–Asia trade routes.",
    date: "2026.10.24",
    source: "SAFETY4SEA",
    sourceUrl: "https://safety4sea.com/shanghai-melbourne-green-shipping-corridor-enters-implementation-phase",
  },
  {
    id: "china-green-shipping-corridor-leadership-gmf",
    category: "green",
    title: "China Now Linked to Nearly One-Fifth of Global Green Shipping Corridors",
    summary: "A Global Maritime Forum report released October 22, 2026, reveals that China has rapidly become a global leader in green shipping corridors, with nearly one-fifth of worldwide corridor initiatives connecting to a Chinese port. The report identifies China's growing capabilities in green methanol and ammonia production as key factors supporting green corridor development, positioning the country as a central node in the emerging network of decarbonized maritime routes.",
    date: "2026.10.24",
    source: "Global Maritime Forum",
    sourceUrl: "https://www.manifoldtimes.com/news/report-china-linked-to-nearly-one-fifth-of-global-green-shipping-corridor-initiatives/",
  },
  {
    id: "imo-blue-solutions-southeast-asia-launch",
    category: "green",
    title: "IMO Launches Blue Solutions Project for Southeast Asian Port Decarbonization",
    summary: "IMO launched the Blue Solutions project on October 23 at the ASEAN Maritime Transport Working Group meeting in Phnom Penh to support maritime decarbonization across six Southeast Asian countries. The initiative, funded by Germany's International Climate Initiative with EUR 5.9 million for Phase 1, will run until January 2031 and focus on port and vessel electrification, cleaner technologies, and developing greenhouse gas emission baselines in Cambodia, Indonesia, Malaysia, the Philippines, Thailand, and Vietnam.",
    date: "2026.10.25",
    source: "IMO",
    sourceUrl: "https://www.imo.org/en/mediacentre/pages/whatsnew-2514.aspx",
  },
  {
    id: "imo-remote-inspection-esp-code-framework",
    category: "safety",
    title: "IMO Adopts Remote Inspection Framework for Bulk Carriers and Oil Tankers",
    summary: "IMO adopted amendments to the 2011 ESP Code through Resolution MSC.584(111), establishing a standardized framework for using Remote Inspection Techniques during surveys of bulk carriers and oil tankers. The new requirements, which enter into force January 1, 2028, replace the previous case-by-case approval process with comprehensive standards covering RIT systems certification, service provider approval, and survey execution for close-up structural inspections.",
    date: "2026.10.25",
    source: "SAFETY4SEA",
    sourceUrl: "https://safety4sea.com/imo-adopts-new-framework-for-remote-inspections-of-bulk-carriers-and-oil-tankers/",
  },
  {
    id: "uscg-nvic-02-26-cyber-guidance-release",
    category: "cyber",
    title: "U.S. Coast Guard Issues NVIC 02-26 Cybersecurity Implementation Guidance",
    summary: "The U.S. Coast Guard released Navigation and Vessel Inspection Circular 02-26 on October 23 to guide maritime operators in complying with federal cybersecurity regulations under 33 CFR Part 101, Subpart F. The circular provides templates and methods for U.S.-flagged vessels, port facilities, and Outer Continental Shelf facilities regulated under the Maritime Transportation Security Act, with cybersecurity plans due July 16, 2027.",
    date: "2026.10.25",
    source: "U.S. Coast Guard",
    sourceUrl: "https://industrialcyber.co/transport/us-coast-guard-releases-nvic-02-26-to-guide-maritime-operators-on-cybersecurity-plans-it-and-ot-risk-assessments/",
  },
  {
    id: "wmd-parallel-event-busan-2026",
    category: "imo",
    title: "Maritime leaders call for stronger implementation at World Maritime Day Parallel Event in Busan",
    summary: "International delegates meeting in Busan, Republic of Korea (26-27 October) called for stronger national action and international cooperation to ensure global shipping regulations are effectively implemented. IMO Secretary-General outlined 2026 milestones including adoption of the voluntary MASS Code, approval of the IMO Strategy on Maritime Digitalization, and progress on safety guidelines for alternative fuels. IMO completed its first global audit cycle, assessing 168 Member States (94% of membership) on implementation of maritime regulations.",
    date: "2026.10.30",
    source: "IMO",
    sourceUrl: "https://www.imo.org/en/mediacentre/pressbriefings/pages/world-maritime-day-parallel-event-2026.aspx",
  },
  {
    id: "iala-vdes-satellite-workshop-tokyo-2026",
    category: "enav",
    title: "IALA to convene Workshop on Satellite VDES in Tokyo",
    summary: "The International Organization for Marine Aids to Navigation, in partnership with Japan Coast Guard, Ocean Policy Research Institute, and Sasakawa Peace Foundation, will host a Workshop on VDES Satellites in Tokyo from 10 to 13 November 2026. The workshop addresses satellite-based VHF Data Exchange System, a key technology for future maritime radiocommunication and e-navigation infrastructure.",
    date: "2026.10.30",
    source: "IALA",
    sourceUrl: "https://events.iala-aism.org/",
  },
  {
    id: "india-alternative-fuel-hub-study-imo-2026",
    category: "green",
    title: "Study identifies pathway for India to develop competitive alternative marine fuel hub",
    summary: "India has the potential to become a competitive regional hub for alternative marine fuels, according to a new study released on 27 October. The Study on Potential Demand and Pricing of Alternative Marine Fuels in India identifies a phased pathway for India to develop its alternative fuel infrastructure and supply capabilities to support maritime decarbonization in the region.",
    date: "2026.10.30",
    source: "IMO",
    sourceUrl: "https://www.imo.org/en/mediacentre/pages/whatsnew.aspx",
  },
// --- daily-append-marker: the daily research job inserts new items just above this line. Do not remove or edit it. ---
];
