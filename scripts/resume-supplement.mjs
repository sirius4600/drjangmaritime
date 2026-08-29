// Data for the resume generator (scripts/generate-resume.mjs) that does NOT
// live in src/content/<locale>/*.ts because it isn't site content — this is
// the only source for it, in all 4 resume languages (ko/en/ja/es). No PII
// here (that lives in private-source-docs/, gitignored — see
// resume-private.mjs.example in that folder).
//
// Everything else in the resume (career, current roles, research, books,
// patents, papers, talks, awards) is read directly from
// src/content/<locale>/{experience,research,publications,awards}.ts by the
// generator, for each of ko/en/ja/es — edit those files and re-run
// `npm run resume:generate` (or just commit; the pre-commit hook does it for
// you). Those site files already mirror each other index-for-index across
// locales (see memory drjangmaritime-i18n), which is what lets the
// index-based lookups below (experienceDetailOverrides, basicTier) work
// without any locale-specific matching logic.

export const identity = {
  ko: {
    nameDisplay: "장은규",
    org: "한국해양수산연수원",
    title: "교수",
    license: "1급항해사",
    degreeLine: "공학박사(해사안전환경)",
    degreeType: "공학박사",
    email: "sirius4600@gmail.com",
  },
  en: {
    nameDisplay: "Unkyu Jang",
    org: "Korea Institute of Maritime and Fisheries Technology (KIMFT)",
    title: "Professor",
    license: "Master Mariner (Deck Officer, Class 1)",
    degreeLine: "Ph.D., Maritime Safety & Environment",
    degreeType: "Ph.D. in Engineering",
    email: "sirius4600@gmail.com",
  },
  ja: {
    nameDisplay: "Unkyu Jang",
    org: "韓国海洋水産研修院（KIMFT）",
    title: "教授",
    license: "一級航海士",
    degreeLine: "工学博士（海事安全環境専攻）",
    degreeType: "工学博士",
    email: "sirius4600@gmail.com",
  },
  es: {
    nameDisplay: "Unkyu Jang",
    org: "Instituto Coreano de Tecnología Marítima y Pesquera (KIMFT)",
    title: "Profesor",
    license: "Capitán de la Marina Mercante (Oficial de Cubierta, Clase 1)",
    degreeLine: "Doctorado en Ingeniería, Seguridad y Medio Ambiente Marítimo",
    degreeType: "Doctorado en Ingeniería",
    email: "sirius4600@gmail.com",
  },
};

// Fixed wording the user asked to keep as-is, overriding education.ts.
export const education = {
  ko: [
    { period: "1990-1994", school: "국립한국해양대학교", degree: "공학사 해사수송과학과" },
    { period: "2002-2004", school: "국립한국해양대학교", degree: "공학석사 (해사안전환경 전공)" },
    { period: "2018", school: "국립한국해양대학교", degree: "공학박사 (해사안전환경 전공)" },
  ],
  en: [
    { period: "1990 - 1994", school: "Korea Maritime and Ocean University", degree: "B.Eng., Maritime Transportation Science" },
    { period: "2002 - 2004", school: "Korea Maritime and Ocean University", degree: "M.Eng., Maritime Safety & Environment" },
    { period: "2018", school: "Korea Maritime and Ocean University", degree: "Ph.D., Maritime Safety & Environment" },
  ],
  ja: [
    { period: "1990 - 1994", school: "韓国海洋大学校", degree: "工学士、海事輸送科学" },
    { period: "2002 - 2004", school: "韓国海洋大学校", degree: "工学修士（海事安全環境専攻）" },
    { period: "2018", school: "韓国海洋大学校", degree: "工学博士（海事安全環境専攻）" },
  ],
  es: [
    { period: "1990 - 1994", school: "Universidad Marítima y Oceánica de Corea", degree: "Ingeniería, Ciencias del Transporte Marítimo" },
    { period: "2002 - 2004", school: "Universidad Marítima y Oceánica de Corea", degree: "Máster en Ingeniería, Seguridad y Medio Ambiente Marítimo" },
    { period: "2018", school: "Universidad Marítima y Oceánica de Corea", degree: "Doctorado en Ingeniería, Seguridad y Medio Ambiente Marítimo" },
  ],
};

// Historical committee/advisory/judging appointments (연대순). Not tracked
// anywhere else — this is the sole source, originally from
// documents/2026_resume_jang_unkyu.pdf page 3. Add new rows here directly,
// in all 4 languages, keeping the 4 arrays index-aligned (same row = same
// period, in the same position, across ko/en/ja/es).
export const committeeHistory = {
  ko: [
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
  ],
  en: [
    { period: "2002~", org: "KIMFT", role: "Responsible Professor, Passenger Ship Training Program" },
    { period: "2004.10", org: "IMO", role: "International Maritime Security Trainer; developed ISPS training curriculum (SSO, PFSO)" },
    { period: "2004.4", org: "KIMFT", role: "ECDIS Trainer (first in Korea); curriculum development" },
    { period: "2005.10", org: "Ministry of Oceans and Fisheries", role: "Task Force Member, VTS International Certification Program Attraction" },
    { period: "2005.11", org: "IMO", role: "Government Advisor, 24th Assembly & Extraordinary Council" },
    { period: "2005~", org: "KIMFT", role: "Developed and served as Responsible Professor, VTS International Certification Training Program" },
    { period: "2008~2011", org: "IMO", role: "Government Advisor, Sub-Committee on Safety of Navigation (NAV) & Bulk Liquids and Gases (BLG)" },
    { period: "2009", org: "Ministry of Land, Transport and Maritime Affairs", role: "Advisor, VTS Modernization Task Force" },
    { period: "2010~", org: "Korea Coast Guard", role: "Advisor, IALA VTS Committee Working Group and Training Division" },
    { period: "2010", org: "Ministry of Oceans and Fisheries", role: "Subcommittee Member, New Growth Strategy Task Force" },
    { period: "2011", org: "Office of the Prime Minister (institutional commendation)", role: "Prime Minister's Commendation for Job Creation" },
    { period: "2012", org: "Ministry of Land, Transport and Maritime Affairs", role: "Policy Advisory Committee Member (Maritime Transport)" },
    { period: "2012", org: "Korea-Mongolia Shipping Cooperation Conference", role: "Government Advisor (Mongolian Seafarer Workforce Development)" },
    { period: "2013", org: "Namhae Regional Coast Guard", role: "Specialist Member, Near-Miss Analysis Task Team" },
    { period: "2013", org: "Ministry of Oceans and Fisheries", role: "Advisor, VTS Localization Technology Development" },
    { period: "2013", org: "Ministry of Oceans and Fisheries", role: "Private-Sector Expert / Workforce Development, Offshore Plant Industry Promotion Strategy Task Force" },
    { period: "2013", org: "Korea-Russia Shipping Talks", role: "Government Advisor (Arctic Route Development and Workforce Training)" },
    { period: "2013~", org: "Korea VTS Association", role: "Director" },
    { period: "2014", org: "Korea-Norway Shipping Cooperation Conference", role: "Government Advisor (Maritime Cooperation)" },
    { period: "2014~2016", org: "Presidential Committee for Regional Development", role: "Member, Regional Development Project Evaluation Advisory Group" },
    { period: "2014", org: "Ministry of Oceans and Fisheries", role: "Member, Special Joint Public-Private Regulatory Reform Group (Shipping & Logistics)" },
    { period: "2014", org: "Ministry of Public Safety and Security, Korea Coast Guard Headquarters", role: "Advisor, IALA VTS Committee" },
    { period: "2015", org: "Algeria Vessel Traffic Service Authority", role: "Responsible Professor, Senior VTS Operator Training Program" },
    { period: "2015", org: "Ministry of Oceans and Fisheries", role: "Committee Member, National Competency Standards (NCS) Development (Vessel Traffic Services)" },
    { period: "2015", org: "Ministry of Oceans and Fisheries", role: "Selection Committee Member, Pilot Trainee Interview Examination" },
    { period: "2015", org: "Korea-Georgia Shipping Talks", role: "Government Advisor (Seafarer License Recognition Agreement)" },
    { period: "2015", org: "Ministry of Oceans and Fisheries", role: "Judge, Port Security Competition" },
    { period: "2016~2017", org: "Korea Maritime and Ocean University", role: "Adjunct Faculty, Division of Navigation Science" },
    { period: "2016~2018", org: "Korea Coast Guard", role: "Policy Advisory Committee Member, Vessel Traffic Services (Training)" },
    { period: "2017", org: "Ministry of Oceans and Fisheries", role: "Selection Committee Member, Pilot Trainee Written Examination" },
    { period: "2017~", org: "Ministry of Oceans and Fisheries", role: "Self-Regulatory Improvement Committee Member (Shipping, Maritime Affairs & Ports)" },
    { period: "2018", org: "Ministry of Oceans and Fisheries", role: "Judge, National Maritime Safety Ideas Competition (Public Proposal Category)" },
    { period: "2018", org: "Korea Maritime Institute (KMI)", role: "Research Review Committee Member" },
    { period: "2019, 2020", org: "Ministry of Oceans and Fisheries", role: "Selection Committee Member, Pilot Trainee Interview Examination" },
    { period: "2019", org: "Korea Coast Guard", role: "Interview Panel Member, General Staff Recruitment" },
    { period: "2019", org: "Korea Coast Guard", role: "Advisor, Hosting the 46th IALA VTS Committee and Communications Workshop in Korea" },
    { period: "2019", org: "Korea Maritime Safety Tribunal", role: "Evaluation Committee Member, National University Student Mock Maritime Accident Tribunal Competition" },
    { period: "2019~2021", org: "Ministry of Oceans and Fisheries", role: "Regulatory Innovation Committee Member (Shipping, Maritime Affairs & Ports)" },
    { period: "2019~2023.11", org: "Korea Human Safety Promotion Association", role: "Secretary-General" },
    { period: "2019~2021.06", org: "Korean Society of Marine Environment & Safety", role: "Auditor" },
    { period: "2021.04~2023.04", org: "Ministry of Oceans and Fisheries", role: "Regulatory Review Committee Member (Shipping, Maritime Affairs & Ports)" },
    { period: "2021~2022", org: "Korea Shipping Association", role: "Director, Passenger Ship Safety Foundation" },
    { period: "2021~2022", org: "Korea Maritime Safety International Cooperation Center (KMC)", role: "Director" },
    { period: "2021~2022", org: "Ministry of Oceans and Fisheries", role: "Steering Committee Member, Seafarers Act Legislative Forum" },
    { period: "2021.06", org: "Korea Maritime Safety Tribunal", role: "Chair, Semi-Accident Case Competition Evaluation Committee" },
    { period: "2023.10", org: "Korea Maritime Safety Tribunal", role: "Evaluation Committee Member, Semi-Accident Case Competition" },
    { period: "2023.12~2024.04", org: "Ministry of Oceans and Fisheries, Maritime Safety Policy Division", role: "Advisor, IMO Expert Committee" },
    { period: "2021.06~2025.12", org: "Korean Institute of Navigation and Port Research (KINPR)", role: "Planning Director" },
  ],
  ja: [
    { period: "2002~", org: "韓国海洋水産研修院", role: "旅客船教育課程 責任教授" },
    { period: "2004.10", org: "IMO", role: "International Maritime Security Trainer、ISPS教育課程開発（SSO、PFSO）" },
    { period: "2004.4", org: "韓国海洋水産研修院", role: "ECDIS Trainer（韓国初）及び教育課程開発" },
    { period: "2005.10", org: "海洋水産部", role: "VTS国際認証教育課程誘致TF委員" },
    { period: "2005.11", org: "IMO", role: "第24回総会、特別理事会 政府諮問委員" },
    { period: "2005~", org: "韓国海洋水産研修院", role: "船舶交通管制士 VTS国際資格認証教育課程 開発及び責任教授" },
    { period: "2008~2011", org: "IMO", role: "航行安全専門委員会（NAV）・ばら積み液体ガス（BLG）専門委員会 政府諮問委員" },
    { period: "2009", org: "国土海洋部", role: "海上交通管制（VTS）先進化TF諮問委員" },
    { period: "2010~", org: "海洋警察庁", role: "IALA VTS技術委員会 作業部会及び教育部門諮問委員" },
    { period: "2010", org: "海洋水産部", role: "新成長戦略樹立推進TF分科委員" },
    { period: "2011", org: "国務総理室（機関表彰）", role: "雇用創出有功 国務総理表彰" },
    { period: "2012", org: "国土海洋部", role: "政策諮問委員（海事交通分野）" },
    { period: "2012", org: "韓国・モンゴル海運協力会議", role: "政府諮問（モンゴル海技人材養成）" },
    { period: "2013", org: "南海地方海洋警察庁", role: "準事故分析専担チーム専門委員" },
    { period: "2013", org: "海洋水産部", role: "VTS国産化技術開発諮問委員" },
    { period: "2013", org: "海洋水産部", role: "海洋プラント産業育成戦略TF 民間専門家／人材養成" },
    { period: "2013", org: "韓国・ロシア海運会談", role: "政府諮問（北極海航路開拓及び人材養成）" },
    { period: "2013~", org: "韓国管制協会", role: "理事" },
    { period: "2014", org: "韓国・ノルウェー海運協力会議", role: "政府諮問（海技協力）" },
    { period: "2014~2016", org: "大統領直属地域発展委員会", role: "地域発展事業評価諮問団委員" },
    { period: "2014", org: "海洋水産部", role: "特別民間合同規制改善団委員（海運海事物流分野）" },
    { period: "2014", org: "国民安全処 海洋警備安全本部", role: "IALA VTS委員会諮問委員" },
    { period: "2015", org: "アルジェリア海上交通管制庁", role: "上級管制士教育課程責任教授" },
    { period: "2015", org: "海洋水産部", role: "国家職務標準（NCS）開発委員（海上交通管制）" },
    { period: "2015", org: "海洋水産部", role: "導船修習生面接試験銓衡委員" },
    { period: "2015", org: "韓国・ジョージア海運会談", role: "政府諮問（海技士免許承認協定）" },
    { period: "2015", org: "海洋水産部", role: "港湾保安競技大会審査委員" },
    { period: "2016~2017", org: "韓国海洋大学校", role: "航海学部 兼任教員" },
    { period: "2016~2018", org: "海洋警察庁", role: "海上交通管制政策諮問委員（教育分野）" },
    { period: "2017", org: "海洋水産部", role: "導船修習生筆記試験銓衡委員" },
    { period: "2017~", org: "海洋水産部", role: "自体規制改善委員（海運海事港湾分科）" },
    { period: "2018", org: "海洋水産部", role: "国民参加海洋安全公募展審査委員（国民提案部門）" },
    { period: "2018", org: "韓国海洋水産開発院（KMI）", role: "研究審議委員" },
    { period: "2019, 2020", org: "海洋水産部", role: "導船修習生面接試験銓衡委員" },
    { period: "2019", org: "海洋警察庁", role: "一般職職員採用面接銓衡委員" },
    { period: "2019", org: "海洋警察庁", role: "IALA第46回VTS委員会及びコミュニケーションワークショップ国内開催諮問委員" },
    { period: "2019", org: "中央海洋安全審判院", role: "大学生海洋事故模擬審判競演大会評価委員" },
    { period: "2019~2021", org: "海洋水産部", role: "規制革新委員会委員（海運海事港湾分科）" },
    { period: "2019~2023.11", org: "（社）韓国人的安全振興協会", role: "事務局長" },
    { period: "2019~2021.06", org: "海洋環境安全学会", role: "監事" },
    { period: "2021.04~2023.04", org: "海洋水産部", role: "規制審査委員会委員（海運海事港湾分科）" },
    { period: "2021~2022", org: "韓国海運組合", role: "旅客船安全財団理事" },
    { period: "2021~2022", org: "韓国海事安全国際協力センター（KMC）", role: "理事" },
    { period: "2021~2022", org: "海洋水産部", role: "船員法制フォーラム運営委員" },
    { period: "2021.06", org: "中央海洋安全審判院", role: "準海洋事故事例公募展審査委員長" },
    { period: "2023.10", org: "中央海洋安全審判院", role: "準海洋事故事例公募展審査委員" },
    { period: "2023.12~2024.04", org: "海洋水産部 海事安全政策課", role: "IMO専門家委員会顧問" },
    { period: "2021.06~2025.12", org: "韓国航海港湾学会", role: "企画理事" },
  ],
  es: [
    { period: "2002~", org: "KIMFT", role: "Profesor Responsable, Programa de Formación de Buques de Pasajeros" },
    { period: "2004.10", org: "OMI", role: "Formador Internacional de Seguridad Marítima; desarrollo del currículo ISPS (SSO, PFSO)" },
    { period: "2004.4", org: "KIMFT", role: "Formador de ECDIS (primero en Corea) y desarrollo curricular" },
    { period: "2005.10", org: "Ministerio de Océanos y Pesca", role: "Miembro del Grupo de Trabajo para la Atracción del Programa Internacional de Certificación VTS" },
    { period: "2005.11", org: "OMI", role: "Asesor Gubernamental, 24.ª Asamblea y Consejo Extraordinario" },
    { period: "2005~", org: "KIMFT", role: "Desarrollo y Profesor Responsable del Programa Internacional de Certificación VTS" },
    { period: "2008~2011", org: "OMI", role: "Asesor Gubernamental, Subcomité de Seguridad de la Navegación (NAV) y de Gases y Líquidos a Granel (BLG)" },
    { period: "2009", org: "Ministerio de Tierra, Transporte y Asuntos Marítimos", role: "Asesor, Grupo de Trabajo de Modernización de VTS" },
    { period: "2010~", org: "Guardia Costera de Corea", role: "Asesor, Grupo de Trabajo del Comité Técnico VTS de la IALA y División de Formación" },
    { period: "2010", org: "Ministerio de Océanos y Pesca", role: "Miembro del Subcomité, Grupo de Trabajo de Estrategia de Nuevo Crecimiento" },
    { period: "2011", org: "Oficina del Primer Ministro (mención institucional)", role: "Mención del Primer Ministro por Creación de Empleo" },
    { period: "2012", org: "Ministerio de Tierra, Transporte y Asuntos Marítimos", role: "Miembro del Comité Asesor de Políticas (Transporte Marítimo)" },
    { period: "2012", org: "Conferencia de Cooperación Naviera Corea-Mongolia", role: "Asesor Gubernamental (Formación de Personal Marítimo Mongol)" },
    { period: "2013", org: "Guardia Costera Regional de Namhae", role: "Miembro Especialista, Equipo de Análisis de Casi-Accidentes" },
    { period: "2013", org: "Ministerio de Océanos y Pesca", role: "Asesor, Desarrollo Tecnológico de Localización de VTS" },
    { period: "2013", org: "Ministerio de Océanos y Pesca", role: "Experto del Sector Privado / Formación de Personal, Grupo de Trabajo de Estrategia de Promoción de la Industria de Plataformas Marinas" },
    { period: "2013", org: "Conversaciones Navieras Corea-Rusia", role: "Asesor Gubernamental (Desarrollo de la Ruta del Ártico y Formación de Personal)" },
    { period: "2013~", org: "Asociación Coreana de Control de Tráfico Marítimo", role: "Director" },
    { period: "2014", org: "Conferencia de Cooperación Naviera Corea-Noruega", role: "Asesor Gubernamental (Cooperación Marítima)" },
    { period: "2014~2016", org: "Comité Presidencial para el Desarrollo Regional", role: "Miembro del Grupo Asesor de Evaluación de Proyectos de Desarrollo Regional" },
    { period: "2014", org: "Ministerio de Océanos y Pesca", role: "Miembro del Grupo Conjunto Público-Privado de Reforma Regulatoria (Transporte Marítimo y Logística)" },
    { period: "2014", org: "Sede de Seguridad y Vigilancia Marítima, Ministerio de Seguridad Pública", role: "Asesor, Comité VTS de la IALA" },
    { period: "2015", org: "Autoridad de Servicios de Tráfico Marítimo de Argelia", role: "Profesor Responsable, Programa de Formación de Operadores VTS Superiores" },
    { period: "2015", org: "Ministerio de Océanos y Pesca", role: "Miembro del Comité de Desarrollo de Estándares Nacionales de Competencia (NCS) (Servicios de Tráfico Marítimo)" },
    { period: "2015", org: "Ministerio de Océanos y Pesca", role: "Miembro del Comité de Selección, Examen de Entrevista para Aspirantes a Práctico" },
    { period: "2015", org: "Conversaciones Navieras Corea-Georgia", role: "Asesor Gubernamental (Acuerdo de Reconocimiento de Licencias de Marinos)" },
    { period: "2015", org: "Ministerio de Océanos y Pesca", role: "Juez, Concurso de Seguridad Portuaria" },
    { period: "2016~2017", org: "Universidad Marítima y Oceánica de Corea", role: "Profesor Adjunto, División de Ciencias de la Navegación" },
    { period: "2016~2018", org: "Guardia Costera de Corea", role: "Miembro del Comité Asesor de Políticas de Servicios de Tráfico Marítimo (Formación)" },
    { period: "2017", org: "Ministerio de Océanos y Pesca", role: "Miembro del Comité de Selección, Examen Escrito para Aspirantes a Práctico" },
    { period: "2017~", org: "Ministerio de Océanos y Pesca", role: "Miembro del Comité de Mejora Autorregulatoria (Transporte Marítimo, Asuntos Marítimos y Puertos)" },
    { period: "2018", org: "Ministerio de Océanos y Pesca", role: "Juez, Concurso Nacional de Ideas de Seguridad Marítima (Categoría de Propuestas Ciudadanas)" },
    { period: "2018", org: "Instituto Marítimo de Corea (KMI)", role: "Miembro del Comité de Revisión de Investigación" },
    { period: "2019, 2020", org: "Ministerio de Océanos y Pesca", role: "Miembro del Comité de Selección, Examen de Entrevista para Aspirantes a Práctico" },
    { period: "2019", org: "Guardia Costera de Corea", role: "Miembro del Panel de Entrevistas, Contratación de Personal General" },
    { period: "2019", org: "Guardia Costera de Corea", role: "Asesor, Organización en Corea del 46.º Comité VTS de la IALA y Taller de Comunicaciones" },
    { period: "2019", org: "Tribunal Central de Seguridad Marítima de Corea", role: "Miembro del Comité de Evaluación, Concurso Universitario de Simulación de Tribunal de Accidentes Marítimos" },
    { period: "2019~2021", org: "Ministerio de Océanos y Pesca", role: "Miembro del Comité de Innovación Regulatoria (Transporte Marítimo, Asuntos Marítimos y Puertos)" },
    { period: "2019~2023.11", org: "Asociación Coreana para la Promoción de la Seguridad Humana", role: "Secretario General" },
    { period: "2019~2021.06", org: "Sociedad Coreana de Medio Ambiente y Seguridad Marina", role: "Auditor" },
    { period: "2021.04~2023.04", org: "Ministerio de Océanos y Pesca", role: "Miembro del Comité de Revisión Regulatoria (Transporte Marítimo, Asuntos Marítimos y Puertos)" },
    { period: "2021~2022", org: "Asociación Naviera de Corea", role: "Director, Fundación de Seguridad de Buques de Pasajeros" },
    { period: "2021~2022", org: "Centro Coreano de Cooperación Internacional en Seguridad Marítima (KMC)", role: "Director" },
    { period: "2021~2022", org: "Ministerio de Océanos y Pesca", role: "Miembro del Comité Directivo, Foro Legislativo sobre la Ley de Marinos" },
    { period: "2021.06", org: "Tribunal Central de Seguridad Marítima de Corea", role: "Presidente del Comité de Evaluación, Concurso de Casos de Cuasi-Accidentes Marítimos" },
    { period: "2023.10", org: "Tribunal Central de Seguridad Marítima de Corea", role: "Miembro del Comité de Evaluación, Concurso de Casos de Cuasi-Accidentes Marítimos" },
    { period: "2023.12~2024.04", org: "Ministerio de Océanos y Pesca, División de Política de Seguridad Marítima", role: "Asesor, Comité de Expertos de la OMI" },
    { period: "2021.06~2025.12", org: "Instituto Coreano de Investigación en Navegación y Puertos (KINPR)", role: "Director de Planificación" },
  ],
};

// experience.ts's `role` field is sometimes bare ("교수") with the fuller
// story in `detail` as a full sentence — too long for a resume line. This
// supplies a short parenthetical instead, per locale. Keyed by the entry's
// 0-based index in experience.ts (stable across locales, since ko/en/ja/es
// experience.ts mirror each other row-for-row) rather than by period text,
// since the period string itself is translated per locale ("현재" vs
// "present" vs "現在" vs "actualidad"). Entries not listed here just show
// `role (org)` as-is with no parenthetical.
export const experienceDetailOverrides = {
  5: {
    ko: "본원 이전·신축 기획·주도",
    en: "Planned & led headquarters relocation/rebuild",
    ja: "本院移転・新築の企画・主導",
    es: "Planificación y dirección del traslado/reconstrucción de la sede",
  },
  6: {
    ko: "여객선, VTS 교육과정 책임교수",
    en: "Responsible Professor, Passenger Ship & VTS Training",
    ja: "旅客船・VTS教育課程 責任教授",
    es: "Profesor Responsable, Formación de Buques de Pasajeros y VTS",
  },
  7: {
    ko: "국내 최초 LNG 운반선 인수",
    en: "Took delivery of Korea's first LNG carrier",
    ja: "韓国初のLNG運搬船受領",
    es: "Recepción del primer buque metanero (LNG) de Corea",
  },
};

// 기본양식 (basic tier) curation — small hand-picked subsets so the 1-page
// summary doesn't just grow forever as research.ts/experience.ts grow.
// Review occasionally; everything else in the resume needs zero maintenance.
// Indices (not text matches) so the same picks apply identically across all
// 4 locales' index-aligned content arrays.
export const basicTier = {
  // First N entries of currentAffiliations, in the order experience.ts already lists them.
  currentAffiliationsCount: 5,
  // 0-based indices into experience.ts's `experience` array, in this display
  // order: [교수/Professor, 교육본부장/Director-Education HQ, 방문연구원/Visiting
  // Researcher, 항해사 · 선주감독관/Deck Officer].
  experienceIndices: [6, 1, 0, 7],
  // research.ts entries with flagship:true are used automatically — no list needed here.
  // 0-based indices into publications.ts's `papers` array (index-aligned
  // across locales — paper titles are kept in their original published
  // language everywhere, so a title-text match wouldn't work per-locale
  // anyway), in this display order: [현장관찰법.../Analysis of VTS Operators',
  // Common Phraseology..., Risk Management Challenges...].
  representativePaperIndices: [31, 18, 1],
};
