import type { Locale } from "./config";

export interface UiDictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    intelligence: string;
    research: string;
    news: string;
    dailyLog: string;
    tools: string;
    oceanBridge: string;
    publications: string;
    about: string;
    workWithHim: string;
    homeAriaLabel: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
  };
  whyThisSite: {
    heading: string;
    body: string;
    pillars: { title: string; description: string }[];
  };
  impact: {
    heading: string;
    subtext: string;
  };
  dailyLog: {
    heading: string;
    subtext: string;
    viewAll: string;
  };
  news: {
    heading: string;
    body: string;
    readMore: string;
    viewAll: string;
    filterAll: string;
    pagination: { prev: string; next: string };
    categories: {
      imo: string;
      iala: string;
      safety: string;
      mass: string;
      cyber: string;
      green: string;
      enav: string;
      seafarer: string;
    };
  };
  tools: {
    heading: string;
    body: string;
  };
  drUkModel: {
    heading: string;
    subheading: string;
    body: string;
    stages: string[];
  };
  research: {
    heading: string;
    body: string;
    recentHeading: string;
    fullListHeading: string;
    status: { ongoing: string; completed: string };
  };
  expertise: {
    heading: string;
    imageAlt: string;
  };
  oceanBridge: {
    heading: string;
    body: string;
  };
  organizations: {
    heading: string;
    subtext: string;
    cta: string;
  };
  experience: {
    heading: string;
    body: string;
    careerLabel: string;
    educationLabel: string;
    affiliationsLabel: string;
  };
  evidencePhotos: {
    viewLabel: string;
    closeLabel: string;
  };
  evidenceVideo: {
    playLabel: string;
    closeLabel: string;
  };
  trustEvidence: {
    heading: string;
    advisorLine: string;
  };
  publications: {
    heading: string;
    body: string;
    groups: {
      books: string;
      papers: string;
      presentations: string;
      patents: string;
    };
  };
  contact: {
    heading: string;
    body: string;
    directContact: string;
    emailCta: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

const ko: UiDictionary = {
  meta: {
    title: "장은규 | Maritime Intelligence",
    description:
      "해양 연구, 기술, 사람을 연결합니다. 장은규 교수는 30년의 해양안전·VTS·IMO 정책 경험을 AI·데이터 기술과 결합해 해양 위험성 인텔리전스 플랫폼을 만들어가고 있습니다.",
  },
  nav: {
    intelligence: "Maritime Intelligence",
    research: "연구",
    news: "글로벌 동향",
    dailyLog: "Daily Log",
    tools: "도구·데이터",
    oceanBridge: "Ocean Bridge",
    publications: "저서·논문",
    about: "소개",
    workWithHim: "협업 제안하기",
    homeAriaLabel: "장은규, Maritime Intelligence, 홈으로 이동",
  },
  hero: {
    eyebrow: "해양안전 · AI 연구",
    headline: "해양을 이해하고, 그 미래를 만듭니다.",
    subtext:
      "30년의 해양안전·VTS·IMO 경험을 바탕으로, 이제는 해양 위험성 인텔리전스를 위한 AI와 데이터 도구를 만들고 있습니다.",
    primaryCta: "Maritime Intelligence 살펴보기",
    secondaryCta: "협업 제안하기",
  },
  whyThisSite: {
    heading: "결이 다른 해양 플랫폼",
    body: "대부분의 해양 정보는 규정, 보고서, 학술논문, 흩어진 데이터베이스 속에 파편화되어 있습니다. 이 플랫폼은 연구, 안전 정보, 기술 동향, 전문적 통찰을 한곳에 모읍니다.",
    pillars: [
      {
        title: "지식 (Knowledge)",
        description: "연구, 규정, 동향, 실무에 도움이 되는 해양 인사이트.",
      },
      {
        title: "인텔리전스 (Intelligence)",
        description: "데이터, 분석, 위험성 평가, 신기술.",
      },
      {
        title: "연결 (Connection)",
        description: "사람, 커리어, 연구, 국제협력.",
      },
    ],
  },
  impact: {
    heading: "최근 활동",
    subtext: "",
  },
  dailyLog: {
    heading: "장박사의 Daily Log",
    subtext:
      "공식 이력이 아닌, 현장에서 만난 사람들과 순간들에 대한 개인적인 기록입니다.",
    viewAll: "전체 글 보기",
  },
  news: {
    heading: "글로벌 해양 동향",
    body: "IMO, IALA를 비롯한 국제기구와 업계의 최신 소식을 해양안전, 자율운항선박, 사이버보안, 친환경선박, e-Navigation 분야 중심으로 선별해 정리합니다. 각 카드는 원문 소스로 연결됩니다.",
    readMore: "원문 보기",
    viewAll: "전체 동향 보기",
    filterAll: "전체",
    pagination: { prev: "이전", next: "다음" },
    categories: {
      imo: "IMO",
      iala: "IALA",
      safety: "해양안전",
      mass: "자율운항선박",
      cyber: "사이버보안",
      green: "친환경선박",
      enav: "e-Navigation",
      seafarer: "선원",
    },
  },
  tools: {
    heading: "해양 위험을 다르게 봅니다",
    body: "이 플랫폼의 다음 단계는 사고 기록, 교통 패턴, 환경 요인을 실제로 쓸 수 있는 해양 위험성 인텔리전스로 바꾸는 데이터와 도구입니다. 아래는 완성된 상용 시스템이 아니라 구상 단계 및 개발 중인 개념입니다.",
  },
  drUkModel: {
    heading: "Dr. UK Model",
    subheading: "해양 위험성 인텔리전스에 대한 새로운 접근",
    body: "해양 사고 데이터, 선박 교통, 환경·공간 요인을 결합해 더 나은 해양안전 의사결정을 지원하는 개발 중인 프레임워크입니다.",
    stages: ["데이터", "분석", "위험성", "인텔리전스", "의사결정"],
  },
  research: {
    heading: "해양 운항의 미래를 연구합니다",
    body: "2002년 이후 자율운항선박, VTS, 해양안전시스템을 아우르는 35건의 국가 R&D 및 정부 연구용역을 수행했습니다.",
    recentHeading: "최근 연구",
    fullListHeading: "연도별 연구 실적 전체 보기",
    status: { ongoing: "진행 중", completed: "완료" },
  },
  expertise: {
    heading: "전문 분야",
    imageAlt: "부산 VTS 관제센터와 MASS 자율운항선박",
  },
  oceanBridge: {
    heading: "해양인의 다음 걸음을 돕습니다",
    body: "해양인의 커리어는 하선한다고 끝나지 않습니다. 계속 진화합니다. Ocean Bridge는 그 전환을 위한 지식과 멘토링 트랙입니다.",
  },
  organizations: {
    heading: "해양 분야의 과제가 있으신가요?",
    subtext: "연구, 안전, AI, 데이터, 교육, 국제협력.",
    cta: "협업 제안하기",
  },
  experience: {
    heading: "30년의 경력",
    body: "한국해양수산연수원에서의 경력과 학력, 현재 맡고 있는 정부·학회 위원 활동입니다.",
    careerLabel: "경력",
    educationLabel: "학력",
    affiliationsLabel: "현재 위원·자문 활동",
  },
  evidencePhotos: {
    viewLabel: "사진 확대",
    closeLabel: "닫기",
  },
  evidenceVideo: {
    playLabel: "동영상 재생",
    closeLabel: "닫기",
  },
  trustEvidence: {
    heading: "형용사가 아니라 증거를 보여드립니다",
    advisorLine: "2005년부터 IMO 자문위원, 2011년부터 IALA 자문위원으로 활동하고 있습니다.",
  },
  publications: {
    heading: "실제로 쓸 수 있는 지식",
    body: "30년간의 해양안전·VTS 연구에서 나온 저서, 논문, 특허입니다.",
    groups: {
      books: "저서",
      papers: "논문",
      presentations: "발표·강연",
      patents: "특허",
    },
  },
  contact: {
    heading: "함께 무엇을 만들 수 있을까요?",
    body: "커리어 상담, 연구 협력, 프로젝트, 강연 요청, 혹은 그 외 어떤 것이든 좋습니다. 편하신 항목으로 시작해주세요.",
    directContact: "직접 연락처",
    emailCta: "이메일 보내기",
  },
  footer: {
    tagline: "해양 연구, 기술, 사람을 연결합니다.",
    rights: "All rights reserved.",
  },
};

const en: UiDictionary = {
  meta: {
    title: "Dr. Unkyu Jang | Maritime Intelligence",
    description:
      "Connecting maritime research, technology and people. Dr. Unkyu Jang brings three decades of maritime safety, VTS, IMO policy and autonomous-ship research together with emerging AI and data tools.",
  },
  nav: {
    intelligence: "Maritime Intelligence",
    research: "Research",
    news: "Global Trends",
    dailyLog: "Daily Log",
    tools: "Tools & Data",
    oceanBridge: "Ocean Bridge",
    publications: "Publications",
    about: "About",
    workWithHim: "Work with Dr. Jang",
    homeAriaLabel: "Dr. Unkyu Jang, Maritime Intelligence, home",
  },
  hero: {
    eyebrow: "Maritime Safety · AI Research",
    headline: "Understanding the maritime world. Building its future.",
    subtext:
      "Three decades of maritime safety, VTS and IMO experience, now building the AI and data tools for maritime risk intelligence.",
    primaryCta: "Explore Maritime Intelligence",
    secondaryCta: "Work with Dr. Jang",
  },
  whyThisSite: {
    heading: "A different kind of maritime platform",
    body: "Most maritime information is scattered across regulations, reports, academic papers and fragmented databases. This platform brings research, safety information, technology trends and professional insight into one place.",
    pillars: [
      {
        title: "Knowledge",
        description: "Research, regulations, trends and practical maritime insight.",
      },
      {
        title: "Intelligence",
        description: "Data, analysis, risk assessment and emerging technology.",
      },
      {
        title: "Connection",
        description: "People, careers, research and international collaboration.",
      },
    ],
  },
  impact: {
    heading: "Recent milestones",
    subtext: "",
  },
  dailyLog: {
    heading: "Dr. Jang's Daily Log",
    subtext:
      "Not a formal record — personal notes on the people and moments encountered along the way.",
    viewAll: "View all entries",
  },
  news: {
    heading: "Global Maritime Trends",
    body: "Curated updates from IMO, IALA and the wider industry, spanning maritime safety, autonomous ships, cybersecurity, green shipping and e-Navigation. Each card links to its primary source.",
    readMore: "Read source",
    viewAll: "View all trends",
    filterAll: "All",
    pagination: { prev: "Previous", next: "Next" },
    categories: {
      imo: "IMO",
      iala: "IALA",
      safety: "Maritime Safety",
      mass: "Autonomous Ships",
      cyber: "Cybersecurity",
      green: "Green Shipping",
      enav: "e-Navigation",
      seafarer: "Seafarers",
    },
  },
  tools: {
    heading: "See maritime risk differently",
    body: "The next stage of this platform: data and tools that turn accident records, traffic patterns and environmental factors into usable maritime risk intelligence. Shown here as concepts and works in progress, not finished commercial systems.",
  },
  drUkModel: {
    heading: "Dr. UK Model",
    subheading: "A new approach to maritime risk intelligence",
    body: "A developing framework that combines maritime accident data, vessel traffic, and environmental and spatial factors to support better maritime safety decisions.",
    stages: ["Data", "Analysis", "Risk", "Intelligence", "Decision"],
  },
  research: {
    heading: "Researching the future of maritime operations",
    body: "35 national R&D and government-commissioned studies since 2002, spanning autonomous ships, VTS and maritime safety systems.",
    recentHeading: "Recent Research",
    fullListHeading: "Full Research Record by Year",
    status: { ongoing: "Ongoing", completed: "Completed" },
  },
  expertise: {
    heading: "Areas of expertise",
    imageAlt: "Busan VTS control tower and MASS autonomous vessels",
  },
  oceanBridge: {
    heading: "Helping maritime people navigate their next move",
    body: "Maritime careers do not end when a person leaves the ship. They evolve. Ocean Bridge is a knowledge and mentoring track for that transition.",
  },
  organizations: {
    heading: "Have a maritime challenge?",
    subtext: "Research. Safety. AI. Data. Training. International cooperation.",
    cta: "Work with Dr. Jang",
  },
  experience: {
    heading: "Three Decades of Experience",
    body: "Career history and education at KIMFT, and current government and academic committee roles.",
    careerLabel: "Career",
    educationLabel: "Education",
    affiliationsLabel: "Current Committee & Advisory Roles",
  },
  evidencePhotos: {
    viewLabel: "Enlarge photo",
    closeLabel: "Close",
  },
  evidenceVideo: {
    playLabel: "Play video",
    closeLabel: "Close",
  },
  trustEvidence: {
    heading: "Show evidence, not adjectives",
    advisorLine: "IMO and IALA advisor since 2005 and 2011 respectively.",
  },
  publications: {
    heading: "Knowledge you can use",
    body: "Books, papers and patents from three decades of maritime safety and VTS research.",
    groups: {
      books: "Books",
      papers: "Papers",
      presentations: "Presentations & Talks",
      patents: "Patents",
    },
  },
  contact: {
    heading: "What can we build together?",
    body: "Career advice, research collaboration, a project, a speaker for your event, or something else entirely. Start with whichever fits.",
    directContact: "Direct contact",
    emailCta: "Email Dr. Jang",
  },
  footer: {
    tagline: "Connecting maritime research, technology and people.",
    rights: "All rights reserved.",
  },
};

const ja: UiDictionary = {
  meta: {
    title: "チャン・ウンギュ | Maritime Intelligence",
    description:
      "海洋の研究、技術、そして人をつなぐ。チャン・ウンギュ教授は30年にわたる海上安全・VTS・IMO政策の経験を、AI・データ技術と組み合わせ、海洋リスクインテリジェンス・プラットフォームを構築しています。",
  },
  nav: {
    intelligence: "Maritime Intelligence",
    research: "研究",
    news: "グローバル動向",
    dailyLog: "Daily Log",
    tools: "ツール・データ",
    oceanBridge: "Ocean Bridge",
    publications: "著書・論文",
    about: "プロフィール",
    workWithHim: "協業のご相談",
    homeAriaLabel: "チャン・ウンギュ、Maritime Intelligence、ホームへ",
  },
  hero: {
    eyebrow: "海上安全・AI研究",
    headline: "海を理解し、その未来をつくる。",
    subtext:
      "30年にわたる海上安全・VTS・IMOでの経験を土台に、いま海洋リスクインテリジェンスのためのAI・データツールを構築しています。",
    primaryCta: "Maritime Intelligenceを見る",
    secondaryCta: "協業のご相談",
  },
  whyThisSite: {
    heading: "一線を画す海洋プラットフォーム",
    body: "海事分野の情報の多くは、規則、報告書、学術論文、点在するデータベースの中に断片化しています。本プラットフォームは、研究、安全情報、技術動向、専門的な知見を一箇所に集約します。",
    pillars: [
      {
        title: "知識 (Knowledge)",
        description: "研究、規則、動向、実務に役立つ海事分野の知見。",
      },
      {
        title: "インテリジェンス (Intelligence)",
        description: "データ、分析、リスク評価、新技術。",
      },
      {
        title: "つながり (Connection)",
        description: "人、キャリア、研究、国際協力。",
      },
    ],
  },
  impact: {
    heading: "最近の活動",
    subtext: "",
  },
  dailyLog: {
    heading: "チャン博士のDaily Log",
    subtext:
      "正式な経歴ではなく、現場で出会った人々や瞬間についての個人的な記録です。",
    viewAll: "すべて見る",
  },
  news: {
    heading: "グローバル海事動向",
    body: "IMO、IALAをはじめとする国際機関と業界の最新情報を、海上安全、自律運航船、サイバーセキュリティ、環境対応船、e-Navigation分野を中心に厳選してお届けします。各カードは出典元のリンクに接続されています。",
    readMore: "出典を見る",
    viewAll: "すべての動向を見る",
    filterAll: "すべて",
    pagination: { prev: "前へ", next: "次へ" },
    categories: {
      imo: "IMO",
      iala: "IALA",
      safety: "海上安全",
      mass: "自律運航船",
      cyber: "サイバーセキュリティ",
      green: "環境対応船",
      enav: "e-Navigation",
      seafarer: "船員",
    },
  },
  tools: {
    heading: "海洋リスクを、違う視点で見る",
    body: "本プラットフォームの次の段階は、事故記録、交通パターン、環境要因を実際に活用できる海洋リスクインテリジェンスへと変えるデータとツールです。以下は完成した商用システムではなく、構想段階および開発中のコンセプトです。",
  },
  drUkModel: {
    heading: "Dr. UK Model",
    subheading: "海洋リスクインテリジェンスへの新しいアプローチ",
    body: "海難事故データ、船舶交通、環境・空間要因を組み合わせ、より良い海上安全の意思決定を支援する開発中のフレームワークです。",
    stages: ["データ", "分析", "リスク", "インテリジェンス", "意思決定"],
  },
  research: {
    heading: "海上運航の未来を研究する",
    body: "2002年以降、自律運航船、VTS、海上安全システムにまたがる35件の国家研究開発・政府研究事業を遂行してきました。",
    recentHeading: "最近の研究",
    fullListHeading: "年度別研究実績 全体を見る",
    status: { ongoing: "進行中", completed: "完了" },
  },
  expertise: {
    heading: "専門分野",
    imageAlt: "釜山VTS管制センターとMASS自律運航船",
  },
  oceanBridge: {
    heading: "海事従事者の次の一歩を支える",
    body: "海事従事者のキャリアは下船とともに終わるものではなく、進化し続けます。Ocean Bridgeは、その転換のための知識とメンタリングのトラックです。",
  },
  organizations: {
    heading: "海事分野で課題をお持ちですか？",
    subtext: "研究、安全、AI、データ、教育、国際協力。",
    cta: "協業のご相談",
  },
  experience: {
    heading: "30年のキャリア",
    body: "韓国海洋水産研修院での経歴と学歴、現在の政府・学会委員としての活動です。",
    careerLabel: "経歴",
    educationLabel: "学歴",
    affiliationsLabel: "現在の委員・アドバイザー活動",
  },
  evidencePhotos: {
    viewLabel: "写真を拡大",
    closeLabel: "閉じる",
  },
  evidenceVideo: {
    playLabel: "動画を再生",
    closeLabel: "閉じる",
  },
  trustEvidence: {
    heading: "形容詞ではなく、証拠をお見せします",
    advisorLine: "2005年よりIMO顧問委員、2011年よりIALA顧問委員を務めています。",
  },
  publications: {
    heading: "実務に活かせる知識",
    body: "30年にわたる海上安全・VTS研究から生まれた著書、論文、特許です。",
    groups: {
      books: "著書",
      papers: "論文",
      presentations: "発表・講演",
      patents: "特許",
    },
  },
  contact: {
    heading: "共に何を築けるでしょうか？",
    body: "キャリア相談、研究協力、プロジェクト、講演のご依頼、その他どのようなことでも構いません。お気軽にご相談ください。",
    directContact: "直接のご連絡先",
    emailCta: "メールを送る",
  },
  footer: {
    tagline: "海洋の研究、技術、そして人をつなぐ。",
    rights: "All rights reserved.",
  },
};

const es: UiDictionary = {
  meta: {
    title: "Dr. Unkyu Jang | Maritime Intelligence",
    description:
      "Conectando la investigación marítima, la tecnología y las personas. El Dr. Unkyu Jang combina tres décadas de experiencia en seguridad marítima, VTS y políticas de la OMI con tecnologías emergentes de IA y datos para construir una plataforma de inteligencia de riesgo marítimo.",
  },
  nav: {
    intelligence: "Maritime Intelligence",
    research: "Investigación",
    news: "Tendencias Globales",
    dailyLog: "Daily Log",
    tools: "Herramientas y Datos",
    oceanBridge: "Ocean Bridge",
    publications: "Publicaciones",
    about: "Perfil",
    workWithHim: "Colaborar con el Dr. Jang",
    homeAriaLabel: "Dr. Unkyu Jang, Maritime Intelligence, ir al inicio",
  },
  hero: {
    eyebrow: "Seguridad Marítima · Investigación en IA",
    headline: "Entendiendo el mundo marítimo. Construyendo su futuro.",
    subtext:
      "Tres décadas de experiencia en seguridad marítima, VTS y la OMI, ahora dedicadas a construir las herramientas de IA y datos para la inteligencia de riesgo marítimo.",
    primaryCta: "Explorar Maritime Intelligence",
    secondaryCta: "Colaborar con el Dr. Jang",
  },
  whyThisSite: {
    heading: "Una plataforma marítima diferente",
    body: "La mayor parte de la información marítima está dispersa entre normativas, informes, artículos académicos y bases de datos fragmentadas. Esta plataforma reúne investigación, información de seguridad, tendencias tecnológicas y conocimiento profesional en un solo lugar.",
    pillars: [
      {
        title: "Conocimiento",
        description: "Investigación, normativa, tendencias y conocimiento marítimo aplicado.",
      },
      {
        title: "Inteligencia",
        description: "Datos, análisis, evaluación de riesgos y tecnologías emergentes.",
      },
      {
        title: "Conexión",
        description: "Personas, carreras, investigación y cooperación internacional.",
      },
    ],
  },
  impact: {
    heading: "Hitos recientes",
    subtext: "",
  },
  dailyLog: {
    heading: "Daily Log del Dr. Jang",
    subtext:
      "No es un registro oficial, sino notas personales sobre las personas y los momentos vividos en el camino.",
    viewAll: "Ver todas las entradas",
  },
  news: {
    heading: "Tendencias Marítimas Globales",
    body: "Actualizaciones seleccionadas de la OMI, la IALA y el sector marítimo en general, sobre seguridad marítima, buques autónomos, ciberseguridad, transporte marítimo sostenible y e-Navigation. Cada tarjeta enlaza con su fuente original.",
    readMore: "Ver fuente",
    viewAll: "Ver todas las tendencias",
    filterAll: "Todas",
    pagination: { prev: "Anterior", next: "Siguiente" },
    categories: {
      imo: "OMI",
      iala: "IALA",
      safety: "Seguridad Marítima",
      mass: "Buques Autónomos",
      cyber: "Ciberseguridad",
      green: "Transporte Sostenible",
      enav: "e-Navigation",
      seafarer: "Gente de Mar",
    },
  },
  tools: {
    heading: "Ver el riesgo marítimo de otra manera",
    body: "La siguiente etapa de esta plataforma: datos y herramientas que convierten los registros de accidentes, los patrones de tráfico y los factores ambientales en inteligencia de riesgo marítimo aplicable. Lo que se muestra aquí son conceptos y trabajos en curso, no sistemas comerciales terminados.",
  },
  drUkModel: {
    heading: "Dr. UK Model",
    subheading: "Un nuevo enfoque para la inteligencia de riesgo marítimo",
    body: "Un marco en desarrollo que combina datos de accidentes marítimos, tráfico de buques y factores ambientales y espaciales para respaldar mejores decisiones de seguridad marítima.",
    stages: ["Datos", "Análisis", "Riesgo", "Inteligencia", "Decisión"],
  },
  research: {
    heading: "Investigando el futuro de las operaciones marítimas",
    body: "35 estudios de I+D nacionales y encargados por el gobierno desde 2002, sobre buques autónomos, VTS y sistemas de seguridad marítima.",
    recentHeading: "Investigación Reciente",
    fullListHeading: "Registro Completo de Investigación por Año",
    status: { ongoing: "En curso", completed: "Completado" },
  },
  expertise: {
    heading: "Áreas de especialización",
    imageAlt: "Torre de control VTS de Busan y buques autónomos MASS",
  },
  oceanBridge: {
    heading: "Acompañando el siguiente paso de la gente de mar",
    body: "La carrera de un marino no termina al bajar del buque. Evoluciona. Ocean Bridge es un programa de conocimiento y mentoría para esa transición.",
  },
  organizations: {
    heading: "¿Tiene un desafío marítimo?",
    subtext: "Investigación. Seguridad. IA. Datos. Formación. Cooperación internacional.",
    cta: "Colaborar con el Dr. Jang",
  },
  experience: {
    heading: "Tres Décadas de Experiencia",
    body: "Trayectoria profesional y formación académica en el KIMFT, además de sus actuales funciones en comités gubernamentales y académicos.",
    careerLabel: "Trayectoria",
    educationLabel: "Formación",
    affiliationsLabel: "Comités y Funciones Consultivas Actuales",
  },
  evidencePhotos: {
    viewLabel: "Ampliar foto",
    closeLabel: "Cerrar",
  },
  evidenceVideo: {
    playLabel: "Reproducir video",
    closeLabel: "Cerrar",
  },
  trustEvidence: {
    heading: "Evidencia, no adjetivos",
    advisorLine: "Asesor de la OMI desde 2005 y de la IALA desde 2011.",
  },
  publications: {
    heading: "Conocimiento aplicable",
    body: "Libros, artículos y patentes derivados de tres décadas de investigación en seguridad marítima y VTS.",
    groups: {
      books: "Libros",
      papers: "Artículos",
      presentations: "Presentaciones y Conferencias",
      patents: "Patentes",
    },
  },
  contact: {
    heading: "¿Qué podemos construir juntos?",
    body: "Asesoría profesional, colaboración en investigación, un proyecto, una ponencia para su evento, o cualquier otra cosa. Empiece por lo que mejor se ajuste.",
    directContact: "Contacto directo",
    emailCta: "Enviar correo al Dr. Jang",
  },
  footer: {
    tagline: "Conectando la investigación marítima, la tecnología y las personas.",
    rights: "All rights reserved.",
  },
};

const dictionaries: Record<Locale, UiDictionary> = { ko, en, ja, es };

export function getUiDictionary(locale: Locale): UiDictionary {
  return dictionaries[locale];
}
