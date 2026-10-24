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
    {
    id: "imo-marine-geoengineering-frameworks",
    category: "imo",
    title: "IMO, 해양 지오엔지니어링 연구 평가 프레임워크 채택",
    summary: "2026년 10월 5~9일 회의에서 런던협약 및 의정서 당사국들은 해양 비옥화, 알칼리도 강화, 바이오매스 침강에 대한 새로운 평가 프레임워크를 채택했다. 이 프레임워크는 각국 정부가 제안된 해양 지오엔지니어링 연구가 정당한 과학 연구인지, 허용 불가능한 환경 위험 없이 진행될 수 있는지 평가할 수 있도록 표준화된 선별, 위험 평가 및 의사 결정 절차를 제공한다.",
    date: "2026.10.21",
    source: "International Maritime Organization",
    sourceUrl: "https://www.imo.org/en/mediacentre/pages/default.aspx",
  },
  {
    id: "first-commercial-green-ammonia-bunkering",
    category: "green",
    title: "세계 최초 상업용 선박 간 그린 암모니아 벙커링 완료",
    summary: "2026년 10월 13일 중국 저우산항에서 세계 최초의 상업용 선박 간 그린 암모니아 벙커링이 완료되어 21만 DWT 벌크선에 1,000톤의 그린 암모니아를 공급했다. 에너지 차이나는 이번 작업이 생산, 저장, 운송, 벙커링, 선박 사용에 이르는 심해 운송 가치사슬 전체에 걸친 상업적 배치를 입증하며, 친환경 선박 연료 확대를 위한 실제 모델을 제시한다고 밝혔다.",
    date: "2026.10.21",
    source: "Marine Log",
    sourceUrl: "https://marinelog.com/news/energy-china-in-world-first-commercial-ship-to-ship-green-ammonia-bunkering",
  },
  {
    id: "maritime-cyber-extortion-n0n",
    category: "cyber",
    title: "사이버 갈취 그룹, 38개 해운 조직 대상 랜섬 요구",
    summary: "2026년 10월 12일, 사이버 갈취 그룹 n0n이 18개국 38개 해운 및 물류 조직을 다크웹 유출 사이트에 등재하며 240만~1,400만 달러의 랜섬을 요구했고 마감일은 10월 19일이다. 대상에는 컨테이너 터미널, 해운선사, 항만 IT 공급업체, 물류회사가 포함된다. 사이버보안 전문가들은 이번 사건이 공통 벤더 침해로 인해 운영 및 상업 데이터가 노출된 것으로 추정한다고 경고한다.",
    date: "2026.10.21",
    source: "Safety4Sea",
    sourceUrl: "https://safety4sea.com/cyber-extortion-group-targets-38-maritime-organizations/",
  },
  {
    id: "kmp-batumandi-ferry-fire-indonesia",
    category: "safety",
    title: "인도네시아 메라크항 인근 페리 화재로 안전 문제 재조명",
    summary: "2026년 10월 20일 KMP Batumandi 페리가 칠레곤 메라크항 접근 수로에서 화재가 발생했다. 모든 승객과 승무원은 안전하게 대피했으며 사망자는 보고되지 않았다. Bakauheni에서 Merak으로 향하던 중 16:15 WIB경 발생한 이번 사고는 인도네시아 국내 페리 안전 기준에 대한 관심을 다시 불러일으키고 있다.",
    date: "2026.10.23",
    source: "Tempo.co",
    sourceUrl: "https://en.tempo.co/read/2121998/kmp-batumandi-ferry-fire-raises-concerns-over-indonesias-maritime-safety",
  },
  {
    id: "uscg-nvic-02-26-maritime-cyber-guidance",
    category: "cyber",
    title: "미 해안경비대, 해양 사이버보안 이행 지침 NVIC 02-26 발행",
    summary: "미국 해안경비대는 2026년 10월 21일 NVIC(Navigation and Vessel Inspection Circular) 02-26을 발표하며 33 CFR Part 101, Subpart F 해양 사이버보안 규칙 준수를 위한 상세 지침을 제공했다. 이 회람은 미국 국적 선박, 항만 시설, 외대륙붕 시설을 대상으로 조항별 권고사항, 사이버보안 책임자 지정 서식 견본, 템플릿을 포함하며, 사이버보안 계획 제출 마감일은 2027년 7월 16일이다.",
    date: "2026.10.23",
    source: "U.S. Coast Guard / Executive Gov",
    sourceUrl: "https://www.executivegov.com/articles/coast-guard-maritime-cybersecurity-guidance",
  },
  {
    id: "shanghai-melbourne-green-corridor-implementation",
    category: "green",
    title: "상하이-멜버른 친환경 해운 회랑 이행 계획 발표",
    summary: "상하이항, 멜버른항, C40 도시가 2026년 10월 21일 친환경 해운 회랑 이행 계획을 발표했다. 2035년까지 저탄소 컨테이너선 운항을 목표로 하며, 상하이는 그린 메탄올과 바이오 연료에 대한 연간 100만 톤의 벙커링 용량 확보를 계획하고 있다. 주요 조치로는 육상 전력 공급 인프라 구축, 디지털화를 통한 항로 최적화, 호주-아시아 항로로 확대 가능한 공급망 협력 등이 포함된다.",
    date: "2026.10.24",
    source: "SAFETY4SEA",
    sourceUrl: "https://safety4sea.com/shanghai-melbourne-green-shipping-corridor-enters-implementation-phase",
  },
  {
    id: "china-green-shipping-corridor-leadership-gmf",
    category: "green",
    title: "중국, 전 세계 친환경 해운 회랑의 5분의 1 참여",
    summary: "2026년 10월 22일 발표된 글로벌 해사 포럼(Global Maritime Forum) 보고서에 따르면, 중국은 빠르게 친환경 해운 회랑 분야의 글로벌 리더로 부상하여 전 세계 회랑 이니셔티브의 약 5분의 1이 중국 항구와 연결되어 있다. 보고서는 중국의 그린 메탄올과 암모니아 생산 역량 증가가 친환경 회랑 개발을 지원하는 핵심 요인이며, 중국이 탈탄소 해운 네트워크의 중심 노드로 자리잡고 있다고 분석했다.",
    date: "2026.10.24",
    source: "Global Maritime Forum",
    sourceUrl: "https://www.manifoldtimes.com/news/report-china-linked-to-nearly-one-fifth-of-global-green-shipping-corridor-initiatives/",
  },
  {
    id: "imo-blue-solutions-southeast-asia-launch",
    category: "green",
    title: "IMO, 동남아 항만 탈탄소화 위한 블루 솔루션 프로젝트 출범",
    summary: "IMO는 10월 23일 프놈펜에서 열린 아세안 해상운송 실무그룹 회의에서 동남아 6개국의 해운 탈탄소화를 지원할 블루 솔루션 프로젝트를 공식 출범했다. 독일 국제기후이니셔티브(IKI)가 1단계 590만 유로를 지원하는 이 사업은 2031년 1월까지 진행되며, 캄보디아·인도네시아·말레이시아·필리핀·태국·베트남을 대상으로 항만 및 선박 전기화, 청정기술 도입, 온실가스 배출 기준선 개발에 중점을 둔다.",
    date: "2026.10.25",
    source: "IMO",
    sourceUrl: "https://www.imo.org/en/mediacentre/pages/whatsnew-2514.aspx",
  },
  {
    id: "imo-remote-inspection-esp-code-framework",
    category: "safety",
    title: "IMO, 산적화물선·유조선 원격검사 표준체계 채택",
    summary: "IMO는 결의안 MSC.584(111)을 통해 2011 ESP Code 개정안을 채택하고, 산적화물선과 유조선 검사 시 원격검사기법(RIT) 사용을 위한 표준화된 체계를 확립했다. 2028년 1월 1일 발효되는 이 규정은 기존의 개별 승인 방식을 RIT 시스템 인증, 서비스 제공업체 승인, 밀접검사 실행절차를 포함한 종합 표준으로 대체한다.",
    date: "2026.10.25",
    source: "SAFETY4SEA",
    sourceUrl: "https://safety4sea.com/imo-adopts-new-framework-for-remote-inspections-of-bulk-carriers-and-oil-tankers/",
  },
  {
    id: "uscg-nvic-02-26-cyber-guidance-release",
    category: "cyber",
    title: "미 연안경비대, 해사 사이버보안 이행지침 NVIC 02-26 발행",
    summary: "미 연안경비대는 10월 23일 연방 사이버보안 규정(33 CFR Part 101 Subpart F) 준수를 위한 항행 및 선박검사 회람 02-26을 발행했다. 이 회람은 해상교통보안법(MTSA) 적용 대상인 미국 기국 선박, 항만시설, 외대륙붕 시설을 위한 템플릿과 방법론을 제공하며, 사이버보안 계획 제출 기한은 2027년 7월 16일이다.",
    date: "2026.10.25",
    source: "U.S. Coast Guard",
    sourceUrl: "https://industrialcyber.co/transport/us-coast-guard-releases-nvic-02-26-to-guide-maritime-operators-on-cybersecurity-plans-it-and-ot-risk-assessments/",
  },
// --- daily-append-marker: the daily research job inserts new items just above this line. Do not remove or edit it. ---
];
