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
    status: { ongoing: string; completed: string };
  };
  expertise: {
    heading: string;
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
  trustEvidence: {
    heading: string;
    advisorLine: string;
  };
  publications: {
    heading: string;
    body: string;
    groups: { books: string; papers: string; patents: string };
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
    body: "2010년 이후 자율운항선박, VTS, 해양안전시스템을 아우르는 50건 이상의 국가 R&D 및 정부 연구용역을 수행했습니다.",
    status: { ongoing: "진행 중", completed: "완료" },
  },
  expertise: {
    heading: "전문 분야",
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
  trustEvidence: {
    heading: "형용사가 아니라 증거를 보여드립니다",
    advisorLine: "2005년부터 IMO 자문위원, 2011년부터 IALA 자문위원으로 활동하고 있습니다.",
  },
  publications: {
    heading: "실제로 쓸 수 있는 지식",
    body: "30년간의 해양안전·VTS 연구에서 나온 저서, 논문, 특허입니다.",
    groups: { books: "저서", papers: "논문", patents: "특허" },
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
    body: "Fifty-plus national R&D and government-commissioned studies since 2010, spanning autonomous ships, VTS and maritime safety systems.",
    status: { ongoing: "Ongoing", completed: "Completed" },
  },
  expertise: {
    heading: "Areas of expertise",
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
  trustEvidence: {
    heading: "Show evidence, not adjectives",
    advisorLine: "IMO and IALA advisor since 2005 and 2011 respectively.",
  },
  publications: {
    heading: "Knowledge you can use",
    body: "Books, papers and patents from three decades of maritime safety and VTS research.",
    groups: { books: "Books", papers: "Papers", patents: "Patents" },
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

const dictionaries: Record<Locale, UiDictionary> = { ko, en };

export function getUiDictionary(locale: Locale): UiDictionary {
  return dictionaries[locale];
}
