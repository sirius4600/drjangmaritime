export const books = [
  {
    title: "선박교통관제 백서 (1993 - 2012): VTS 20년사",
    year: "2012",
  },
  {
    title: "Traffic Management",
    year: "2015",
  },
  {
    title: "2016 IALA VTS Manual, 해상교통관제매뉴얼 (영한대역)",
    year: "2016",
  },
];

export const papers: {
  title: string;
  venue: string;
  year: string;
  summary?: string;
}[] = [
  {
    title:
      "Risk Management Challenges in Maritime Autonomous Surface Ships (MASSs): Training and Regulatory Readiness",
    venue: "MDPI Applied Sciences",
    year: "2025",
  },
  {
    title: "e-Navigation 서비스를 위한 충돌사고 평가지표 개발",
    venue: "해양환경안전학회지",
    year: "2021",
    summary:
      "IMO가 추진하는 e-Navigation의 개발성과를 평가하기 위해, RCA와 FTA 기법으로 해상 충돌사고의 근본원인을 도출하고 이를 정량화한 평가지표를 개발했다.",
  },
  {
    title: "선박교통관제센터-선박 간 실제 통신데이터 기반 선박안전교육 챗봇 프레임워크 개발",
    venue: "ICIC Express Letters, Part B: Applications, Vol. 9",
    year: "2018",
  },
  {
    title: "VTS 시뮬레이터 기반 해상교통관제사 직무역량분석",
    venue: "한국해양경찰학회보",
    year: "2017",
  },
  {
    title: "현장관찰법과 자기보고법에 기초한 VTS 관제사의 상황인식 분석",
    venue: "한국항해항만학회지",
    year: "2016",
  },
];

// 학술대회·초청강연 발표 실적. 사용자가 항목(제목, 학회/기관명, 연도, 역할 —
// 초청강연/구두발표 등)을 확정해주기 전까지는 비워둡니다.
export const presentations: {
  title: string;
  venue: string;
  year: string;
  role?: string;
}[] = [];

export const patents = [
  {
    title: "국제공인전자해도를 이용한 선박자동추적시스템용 간이전자해도 제작방법",
    status: "등록",
    year: "2006",
  },
  {
    title: "항해사 적성검사시스템",
    status: "출원",
    year: "2018",
  },
];
