import type { NewsItem } from "../en/news";

// 국제 해양 동향 스냅샷 (IMO, IALA 및 업계 전반). 각 항목은 원문 소스로
// 연결됩니다. 최근 갱신: 2026.08.
export const newsItems: NewsItem[] = [
  {
    id: "net-zero-framework",
    category: "imo",
    title: "IMO 넷제로 프레임워크, 2026년 하반기 재논의",
    summary:
      "2025년 4월 MEPC 83에서 승인된 IMO 넷제로 프레임워크가 임시총회에서 합의에 이르지 못해 채택이 보류됐습니다. 글로벌 연료기준과 배출권거래제를 두 축으로 하며, 임시총회는 약 12개월 후인 2026년 10월경 재소집될 예정입니다.",
    date: "2026.08",
    source: "IMO Media Centre",
    sourceUrl:
      "https://www.imo.org/en/mediacentre/pressbriefings/pages/imo-net-zero-shipping-talks-to-resume-in-2026.aspx",
  },
  {
    id: "iala-e-navigation-s100",
    category: "iala",
    title: "IALA, S-100 표준 기반 e-Navigation 전환 가속",
    summary:
      "IALA는 e-Bulletin을 통해 디지털 해도·항행정보 표준인 S-100 프레임워크로의 전환을 다룬 MaDaMe 프로젝트 최종 세미나와 차세대 S-200 시리즈 제품사양의 의의를 소개했습니다. 해양업계의 완전한 디지털 생태계 전환이 핵심 화두입니다.",
    date: "2026.06",
    source: "IALA e-Bulletin",
    sourceUrl: "https://www.iala.int/e-bulletin/",
  },
  {
    id: "msc111-safety",
    category: "safety",
    title: "MSC 111, 위험물·검사·대체연료 훈련기준 무더기 개정",
    summary:
      "2026년 5월 IMO 해사안전위원회(MSC) 111차 회기에서 IMDG 코드 개정판(Amendment 43-26, 2028.1 발효), 유조선·벌크선 강화검사프로그램(ESP Code) 개정, 산업인력수송코드(IP Code)의 선원 표준체중 상향(90kg) 등이 채택됐습니다. 메탄올·에탄올·암모니아·수소 연료선 승무원 교육지침도 함께 승인됐습니다.",
    date: "2026.05",
    source: "Britannia P&I Club",
    sourceUrl:
      "https://britanniapandi.com/2026/06/imo-maritime-safety-committee-update-111/",
  },
  {
    id: "mass-code",
    category: "mass",
    title: "IMO, 세계 최초 자율운항선박(MASS) 코드 채택",
    summary:
      "MSC 111에서 화물선에 적용되는 비의무 국제 MASS 코드가 채택되어 2026년 7월 1일 발효됐습니다. 위험평가를 승인절차에 포함시키고 원격제어센터(ROC)와의 상호작용, 승무원 부재 시에도 선장의 개입 책임을 명시합니다. 경험구축단계(EBP)를 거쳐 2032년 이후 의무코드로 전환될 예정입니다.",
    date: "2026.07",
    source: "DNV",
    sourceUrl: "https://www.dnv.com/news/2026/imo-mcs-111-new-mass-code-adopted/",
  },
  {
    id: "maritime-cyber-code",
    category: "cyber",
    title: "IMO, 2028년 목표 해사 사이버보안 코드 추진",
    summary:
      "IMO 촉진위원회(FAL 50)는 항만·선박·선박-항만 인터페이스를 아우르는 목표기반 비의무 Maritime Cyber Code를 2028년까지 마련하기로 했습니다. Single Window 보안을 위한 의무적 사이버보안 조치는 FAL 협약에 반영되어 FAL 51에서 채택될 예정입니다.",
    date: "2026.06",
    source: "DNV",
    sourceUrl: "https://www.dnv.com/news/2026/imos-facilitation-committee-fal-50/",
  },
  {
    id: "green-fuel-race",
    category: "green",
    title: "대체연료 삼파전: LNG 주도 속 메탄올·암모니아 추격",
    summary:
      "2026년 기준 LNG추진선은 600척 이상 운항, 1,300척 이상 발주로 신규 대체연료 발주의 약 2/3를 차지하며 가장 앞서 있습니다. 메탄올은 컨테이너선·자동차운반선 중심으로 빠르게 성장 중이며, 암모니아는 독성·부식성 등 과제를 안은 채 초기 단계 프로젝트가 늘고 있습니다. 원자력 추진은 규제 공백 속에 장기 과제로 남아 있습니다.",
    date: "2026.08",
    source: "Ship Universe",
    sourceUrl:
      "https://www.shipuniverse.com/the-great-green-fuel-race-in-2026-lng-methanol-ammonia-and-the-nuclear-option/",
  },
  {
    id: "vdes-solas",
    category: "enav",
    title: "VDES, SOLAS 공식 항법수단으로 인정… 위성 VDES 시대 개막",
    summary:
      "2026년 5월 IMO 해사안전위원회는 VDES(VHF 데이터교환시스템)를 AIS의 대체 수단으로 SOLAS에 반영하기로 했으며 2028년 1월 1일 발효됩니다. 스페이스노르웨이·루소스페이스의 VDES 탑재 위성이 잇따라 궤도에 진입하며 위성 기반 e-Navigation 인프라도 본격화되고 있습니다.",
    date: "2026.05",
    source: "VDES Alliance",
    sourceUrl:
      "https://www.vdes-alliance.org/index.php/category/news-about-vdes/",
  },
  {
    id: "officer-shortage-2026",
    category: "seafarer",
    title: "사관 인력 3만9,100명 부족… 2030년까지 격차 더 커진다",
    summary:
      "2026년 6월 25일 발표된 BIMCO·ICS 선원 인력 보고서(Seafarer Workforce Report)에 따르면 현재 STCW 인증 사관이 3만9,100명 부족하며, 2030년까지 추가로 11만3,735명이 더 필요합니다. 상선 함대 확장과 팬데믹 이후 수요 회복으로 인증 선원 수요가 2021년 대비 35% 늘었고, 2030년까지 매년 평균 2만2,747명의 신규 사관 확보가 필요하다고 지적합니다.",
    date: "2026.06",
    source: "BIMCO / ICS",
    sourceUrl:
      "https://www.bimco.org/news-insights/press-media/press-releases/2026/0625-workforce-report/",
  },
  {
    id: "mlc-2025-amendments",
    category: "seafarer",
    title: "MLC 2025 개정안, 2027년 발효… 선원 보호 대폭 강화",
    summary:
      "2027년 12월 말 발효 예정인 해사노동협약(MLC) 개정안은 선원의 비차별적 상륙휴가 권리를 명문화하고, 선박소유자의 송환 책임(교통비·숙박·식사·의료비 포함)을 확대합니다. 선내 폭력·괴롭힘·성폭행을 명시적으로 금지하고 안전한 신고체계를 의무화했으며, 생리용품 제공 등 성별 특화 위생기준과 보복 없는 고충처리 절차도 새로 담았습니다.",
    date: "2025.06",
    source: "West of England P&I Club",
    sourceUrl:
      "https://www.westpandi.com/news-and-resources/news/june-2025/amendments-to-the-maritime-labour-convention-adopt/",
  },
  // --- daily-append-marker: the daily research job inserts new items just above this line. Do not remove or edit it. ---
];
