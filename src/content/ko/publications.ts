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

// 학술대회·초청강연 발표 실적.
export const presentations: {
  title: string;
  venue: string;
  year: string;
  role?: string;
}[] = [
  {
    title: "한국인 선원 감소·고령화에 따른 외국인 선원 고용 확대 대응방안",
    venue: "제38차 해양사고방지 세미나",
    year: "2023",
    role: "발표자",
  },
  {
    title: "해양사고방지세미나 주제발표",
    venue: "중앙해양안전심판원",
    year: "2023.11",
    role: "주제발표",
  },
  {
    title: "한국해양대학교 특강",
    venue: "한국해양대학교",
    year: "2021.08",
    role: "특강",
  },
  {
    title: "해양인명사고 50%줄이기 TF회의 주제발표",
    venue: "해양수산부",
    year: "2021.06",
    role: "주제발표",
  },
  {
    title: "온라인 한국선박관리포럼 패널토론",
    venue: "한국선박관리포럼, BEXCO",
    year: "2020.12",
    role: "패널토론자",
  },
  {
    title: "한국선박관리산업의 기회와 위기",
    venue: "2019 코마린 컨퍼런스(KOMARINE)",
    year: "2019",
    role: "발표자",
  },
  {
    title: "자율운항선박과 선원의 변화",
    venue: "제2차 자율운항선박(MASS) 도입 기술·정책 컨퍼런스",
    year: "2019",
    role: "발표자",
  },
  {
    title: "VTS와 해양안전의 미래 특강",
    venue: "한국해양대학교",
    year: "2019.11",
    role: "특강",
  },
  {
    title: "한국선박관리포럼 주제발표",
    venue: "한국선박관리포럼",
    year: "2019.11",
    role: "주제발표",
  },
  {
    title: "4차산업혁명과 선원의 미래 특강",
    venue: "삼성중공업 · 현대중공업",
    year: "2019-2020",
    role: "특강",
  },
  {
    title: "제2회 자율운항선박도입 컨퍼런스 발표",
    venue: "부산 그랜드호텔",
    year: "2019.09",
    role: "발표자",
  },
  {
    title: "해양수산전망대회 주제발표",
    venue: "해양수산전망대회 (KOEX, KMI 주관)",
    year: "2018.01",
    role: "주제발표",
  },
  {
    title: "남해지방해양경비안전본부 특강",
    venue: "남해지방해양경비안전본부",
    year: "2016.12",
    role: "특강",
  },
  {
    title: "IALA 국제 VTS 심포지엄 2016 발표",
    venue: "국제항로표지협회(IALA), 쿠알라룸푸르",
    year: "2016.08",
    role: "발표자",
  },
  {
    title: "국제해양안전장비박람회 VTS 세미나 주제발표",
    venue: "인천 송도 컨벤시아",
    year: "2015.06",
    role: "주제발표",
  },
  {
    title: "한-노르웨이 해운협력회의 국제세미나 주제발표",
    venue: "한-노르웨이 해운협력회의, 오슬로",
    year: "2014.11",
    role: "주제발표",
  },
  {
    title: "영산대학교 특강",
    venue: "영산대학교",
    year: "2013.11",
    role: "특강",
  },
  {
    title: "남해지방해양경찰청 해양사고예방 특강",
    venue: "남해지방해양경찰청",
    year: "2013.07",
    role: "특강",
  },
  {
    title: "경운대학교 멘토 특강",
    venue: "경운대학교",
    year: "2012.11",
    role: "특강",
  },
  {
    title: "IMO Regional ITCP Seminar 주제발표",
    venue: "IMO Regional ITCP Seminar, 서울",
    year: "2012.11",
    role: "주제발표",
  },
  {
    title: "Digital Ship Korea 2012 주제발표",
    venue: "국제 Digital Ship Korea 2012, 부산",
    year: "2012.10",
    role: "주제발표",
  },
  {
    title: "IALA 국제 VTS 심포지엄 2012 발표",
    venue: "국제항로표지협회(IALA), 이스탄불",
    year: "2012.09",
    role: "발표자",
  },
  {
    title: "포항산업과학연구원(RIST) 특강",
    venue: "포항산업과학연구원(RIST)",
    year: "2012.03",
    role: "특강",
  },
  {
    title: "국립수산인력개발센터 출강",
    venue: "국립수산인력개발센터",
    year: "2012.03",
    role: "출강",
  },
  {
    title: "한-몽골 해운협력회의 국제세미나 주제발표",
    venue: "한-몽골 도로교통부 해운협력회의",
    year: "2012.03",
    role: "주제발표",
  },
  {
    title: "한국선박해양플랜트연구소 특강",
    venue: "한국선박해양플랜트연구소",
    year: "2012.02",
    role: "특강",
  },
  {
    title: "국토해양인재개발원 출강",
    venue: "국토해양인재개발원",
    year: "2010-2012",
    role: "출강",
  },
  {
    title: "삼성중공업(주) 특강",
    venue: "삼성중공업(주)",
    year: "2003.09",
    role: "특강",
  },
];

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
