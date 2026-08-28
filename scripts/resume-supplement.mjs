// Data for the resume generator (scripts/generate-resume.mjs) that does NOT
// live in src/content/ko/*.ts because it isn't site content — this is the
// only source for it. No PII here (that lives in private-source-docs/,
// gitignored — see resume-private.mjs.example in that folder).
//
// Everything else in the resume (career, current roles, research, books,
// patents, papers, talks, awards) is read directly from
// src/content/ko/{experience,research,publications,awards}.ts by the
// generator — edit those files and re-run `npm run resume:generate`
// (or just commit; the pre-commit hook does it for you).

export const identity = {
  nameKo: "장은규",
  org: "한국해양수산연수원",
  title: "교수",
  license: "1급항해사",
  degreeLine: "공학박사(해사안전환경)",
  email: "sirius4600@gmail.com",
};

// Fixed wording the user asked to keep as-is, overriding education.ts.
export const education = [
  { period: "1990-1994", school: "국립한국해양대학교", degree: "해사수송과학과 공학사" },
  { period: "2002-2004", school: "국립한국해양대학교", degree: "공학석사 (해사안전환경 전공)" },
  { period: "2018", school: "국립한국해양대학교", degree: "공학박사 (해사안전환경 전공)" },
];

// Historical committee/advisory/judging appointments (연대순). Not tracked
// anywhere else — this array is the sole source, sourced originally from
// documents/2026_resume_jang_unkyu.pdf page 3. Add new rows here directly.
export const committeeHistory = [
  { period: "2002~", org: "한국해양수산연수원", role: "여객선 교육과정 책임교수" },
  { period: "2004.10", org: "IMO", role: "International Maritime Security Trainer 및 ISPS 교육과정 개발(SSO, PFSO)" },
  { period: "2004.4", org: "한국해양수산연수원", role: "ECDIS Trainer(한국 최초) 및 교육과정 개발" },
  { period: "2005.10", org: "해양수산부", role: "VTS 국제인증교육과정 유치 TF 위원" },
  { period: "2005.11", org: "IMO", role: "제24차 총회, 특별이사회 정부 자문위원" },
  { period: "2005~", org: "한국해양수산연수원", role: "해상교통관제사 VTS 국제자격인증교육과정 개발 및 책임교수" },
  { period: "2008~2011", org: "IMO", role: "항해안전전문위원회(NAV)·산적액체가스(BLG) 전문위원회 정부 자문위원" },
  { period: "2009", org: "국토해양부", role: "해상교통관제(VTS) 선진화 TF 자문위원" },
  { period: "2010~", org: "해양경찰청", role: "IALA VTS 기술위원회 실무작업반 및 교육부문 자문위원" },
  { period: "2010", org: "해양수산부", role: "신성장 전략수립 추진 TF 분과위원" },
  { period: "2011", org: "국무총리실 (기관표창)", role: "일자리창출 유공 국무총리표창" },
  { period: "2012", org: "국토해양부", role: "정책자문위원 (해사교통분야)" },
  { period: "2012", org: "한-몽골 해운협력회의", role: "정부 자문 (몽골 해기인력 양성)" },
  { period: "2013", org: "남해지방해양경찰청", role: "준사고분석 전담팀 전문위원" },
  { period: "2013", org: "해양수산부", role: "VTS 국산화 기술개발 자문위원" },
  { period: "2013", org: "해양수산부", role: "해양플랜트산업육성전략 TF 민간전문가/인력양성" },
  { period: "2013", org: "한-러시아 해운회담", role: "정부자문 (북극해항로 개척 및 인력양성)" },
  { period: "2013~", org: "한국관제협회", role: "이사" },
  { period: "2014", org: "한-노르웨이 해운협력회의", role: "정부 자문 (해기협력)" },
  { period: "2014~2016", org: "대통령직속 지역발전위원회", role: "지역발전사업 평가자문단 위원" },
  { period: "2014", org: "해양수산부", role: "특별민간합동규제개선단 위원 (해운물류 분야)" },
  { period: "2014", org: "국민안전처 해양경비안전본부", role: "IALA VTS위원회 자문위원" },
  { period: "2015", org: "알제리 해상교통관제청", role: "선임관제사 교육과정 책임교수" },
  { period: "2015", org: "해양수산부", role: "국가직무표준(NCS) 개발 위원 (해상교통관제)" },
  { period: "2015", org: "해양수산부", role: "도선수습생 면접시험 전형위원" },
  { period: "2015", org: "한-조지아 해운회담", role: "정부 자문 (해기사 면허인정 협정)" },
  { period: "2015", org: "해양수산부", role: "항만보안 경진대회 심사위원" },
  { period: "2016~2017", org: "한국해양대", role: "항해학부 겸임교원" },
  { period: "2016~2018", org: "해양경찰청", role: "해상교통관제 정책자문위원 (교육분야)" },
  { period: "2017", org: "해양수산부", role: "도선수습생 필기시험 전형위원" },
  { period: "2017~", org: "해양수산부", role: "자체규제개선위원 (해운해사항만분과)" },
  { period: "2018", org: "해양수산부", role: "국민 참여 해양안전 공모전 심사위원 (국민제안 부문)" },
  { period: "2018", org: "해양수산개발원(KMI)", role: "연구심의 위원" },
  { period: "2019, 2020", org: "해양수산부", role: "도선수습생 면접시험 전형위원" },
  { period: "2019", org: "해양경찰청", role: "일반직 직원채용 면접전형 위원" },
  { period: "2019", org: "해양경찰청", role: "IALA 제46차 VTS위원회 및 커뮤니케이션 워크숍 국내 개최 자문위원" },
  { period: "2019", org: "중앙해양안전심판원", role: "대학생 해양사고 모의 심판 경연대회 평가위원" },
  { period: "2019~2021", org: "해양수산부", role: "규제혁신위원회 위원 (해운해사항만 분과)" },
  { period: "2019~2023.11", org: "(사)한국인적안전진흥협회", role: "사무국장" },
  { period: "2019~2021.06", org: "해양환경안전학회", role: "감사" },
  { period: "2021.04~2023.04", org: "해양수산부", role: "규제심사위원회 위원 (해운해사항만분과)" },
  { period: "2021~2022", org: "한국해운조합", role: "여객선안전재단 이사" },
  { period: "2021~2022", org: "한국해사안전국제협력센터(KMC)", role: "이사" },
  { period: "2021~2022", org: "해양수산부", role: "선원법제포럼 운영위원" },
  { period: "2021.06", org: "중앙해양안전심판원", role: "준 해양사고 사례공모전 심사위원장" },
  { period: "2023.10", org: "중앙해양안전심판원", role: "준 해양사고 사례공모전 심사위원" },
  { period: "2023.12~2024.04", org: "해양수산부 해사안전정책과", role: "IMO 전문가 위원회 고문" },
  { period: "2021.06~2025.12", org: "한국항해항만학회", role: "기획이사" },
];

// experience.ts's `role` field is sometimes bare ("교수") with the fuller
// story in `detail` as a full sentence — too long for a resume line. This
// keyed-by-period override supplies the short parenthetical instead. Entries
// not listed here just show `role (org)` as-is with no parenthetical.
export const experienceDetailOverrides = {
  "2001.06 - 현재": "여객선, VTS 교육과정 책임교수",
  "2006.01 - 2009.01": "본원 이전·신축 기획·주도",
  "1994.03 - 2001.05": "국내 최초 LNG 운반선 인수",
};

// 기본양식 (basic tier) curation — small hand-picked subsets so the 1-page
// summary doesn't just grow forever as research.ts/experience.ts grow.
// Review occasionally; everything else in the resume needs zero maintenance.
export const basicTier = {
  // First N entries of currentAffiliations, in the order experience.ts already lists them.
  currentAffiliationsCount: 5,
  // experience.ts `role` values (exact match, bare — before the
  // experienceDetailOverrides parenthetical is appended) to include, in
  // this display order.
  experienceRoles: ["교수", "교육본부장", "방문연구원", "항해사 · 선주감독관"],
  // research.ts entries with flagship:true are used automatically — no list needed here.
  // publications.ts `papers` titles (exact match) to feature as 대표 논문.
  representativePaperTitles: [
    "현장관찰법과 자기보고법에 기초한 VTS 관제사의 상황인식 분석",
    "Common Phraseology and Procedures for VTS Communication",
    "Risk Management Challenges in Maritime Autonomous Surface Ships (MASSs): Training and Regulatory Readiness",
  ],
};
