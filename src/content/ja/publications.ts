export const books = [
  {
    title: "船舶交通管制白書（1993 - 2012）：VTS20年史",
    year: "2012",
  },
  {
    title: "Traffic Management",
    year: "2015",
  },
  {
    title: "2016 IALA VTS Manual、海上交通管制マニュアル（英韓対訳版）",
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
    title: "e-Navigationサービスのための衝突事故評価指標の開発",
    venue: "韓国海洋環境安全学会誌",
    year: "2021",
    summary:
      "IMOが推進するe-Navigationの開発成果を評価するため、RCAとFTA手法により海上衝突事故の根本原因を導出し、これを定量化した評価指標を開発した。",
  },
  {
    title: "船舶交通管制センター－船舶間の実通信データに基づく船舶安全教育チャットボットフレームワークの開発",
    venue: "ICIC Express Letters, Part B: Applications, Vol. 9",
    year: "2018",
  },
  {
    title: "VTSシミュレーターに基づく海上交通管制士の職務能力分析",
    venue: "韓国海洋警察学会報",
    year: "2017",
  },
  {
    title: "現場観察法と自己報告法に基づくVTS管制官の状況認識分析",
    venue: "韓国航海港湾学会誌",
    year: "2016",
  },
];

// 学会・招待講演の実績。ユーザーが項目（タイトル、学会・機関名、年、役割 —
// 招待講演／口頭発表など）を確定するまでは空にしておく。
export const presentations: {
  title: string;
  venue: string;
  year: string;
  role?: string;
}[] = [
  {
    title: "韓国人船員の減少・高齢化と外国人船員雇用拡大への対応策",
    venue: "第38回海難事故防止セミナー",
    year: "2023",
    role: "発表者",
  },
  {
    title: "韓国船舶管理産業の機会と危機",
    venue: "2019 KOMARINEカンファレンス",
    year: "2019",
    role: "発表者",
  },
];

export const patents = [
  {
    title: "国際公認電子海図を用いた船舶自動追跡システム用簡易電子海図の作成方法",
    status: "登録",
    year: "2006",
  },
  {
    title: "航海士適性検査システム",
    status: "出願",
    year: "2018",
  },
];
