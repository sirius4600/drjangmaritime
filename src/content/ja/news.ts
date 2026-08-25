import type { NewsItem } from "../en/news";

// 国際海事動向のスナップショット（IMO、IALAおよび業界全般）。各項目は原文
// ソースへリンクする。最終更新: 2026.08。
export const newsItems: NewsItem[] = [
  {
    id: "net-zero-framework",
    category: "imo",
    title: "IMOネットゼロ枠組み、2026年後半に協議再開へ",
    summary:
      "2025年4月のMEPC 83で承認されたIMOネットゼロ枠組みは、臨時総会で加盟国間の合意に至らず採択が見送られた。グローバル燃料基準と排出量取引制度を二本柱とし、再招集される会合は2026年10月頃を見込む。",
    date: "2026.08",
    source: "IMO Media Centre",
    sourceUrl:
      "https://www.imo.org/en/mediacentre/pressbriefings/pages/imo-net-zero-shipping-talks-to-resume-in-2026.aspx",
  },
  {
    id: "iala-e-navigation-s100",
    category: "iala",
    title: "IALA、S-100標準へのe-Navigation移行を加速",
    summary:
      "IALAのe-Bulletinは、デジタル海図・航行情報標準であるS-100フレームワークへの移行を扱うMaDaMeプロジェクトの最終セミナーと、次世代S-200シリーズ製品仕様の意義を紹介した。海事業界全体の完全デジタル化がテーマとなっている。",
    date: "2026.06",
    source: "IALA e-Bulletin",
    sourceUrl: "https://www.iala.int/e-bulletin/",
  },
  {
    id: "msc111-safety",
    category: "safety",
    title: "MSC 111、危険物・検査・代替燃料訓練基準を大幅改正",
    summary:
      "2026年5月に開催されたIMO海上安全委員会（MSC）第111回会期において、IMDGコード改正版（Amendment 43-26、2028年1月発効）、タンカー・バルクキャリア向け強化検査プログラム（ESPコード）の改正、産業要員輸送コード（IPコード）における船員標準体重の引き上げ（90kg）などが採択された。メタノール・エタノール・アンモニア・水素燃料船の乗組員教育指針も併せて承認された。",
    date: "2026.05",
    source: "Britannia P&I Club",
    sourceUrl:
      "https://britanniapandi.com/2026/06/imo-maritime-safety-committee-update-111/",
  },
  {
    id: "mass-code",
    category: "mass",
    title: "IMO、世界初の自律運航船（MASS）コードを採択",
    summary:
      "MSC 111において、貨物船に適用される非強制の国際MASSコードが採択され、2026年7月1日に発効した。リスク評価を承認手続きに組み込み、遠隔操作センター（ROC）との連携、乗組員不在時における船長の介入責任を明記している。経験蓄積段階（EBP）を経て、2032年以降に強制コードへ移行する予定。",
    date: "2026.07",
    source: "DNV",
    sourceUrl: "https://www.dnv.com/news/2026/imo-mcs-111-new-mass-code-adopted/",
  },
  {
    id: "maritime-cyber-code",
    category: "cyber",
    title: "IMO、2028年目標の海事サイバーセキュリティコードを推進",
    summary:
      "IMO簡易化委員会（FAL 50）は、港湾・船舶・船舶港湾インターフェースを対象とする目標基準型の非強制Maritime Cyber Codeを2028年までに策定することで合意した。Single Windowのセキュリティに関する強制的サイバーセキュリティ対策はFAL条約に反映され、FAL 51での採択が見込まれる。",
    date: "2026.06",
    source: "DNV",
    sourceUrl: "https://www.dnv.com/news/2026/imos-facilitation-committee-fal-50/",
  },
  {
    id: "green-fuel-race",
    category: "green",
    title: "代替燃料三つ巴：LNG主導のなかメタノール・アンモニアが追い上げ",
    summary:
      "2026年時点でLNG推進船は600隻以上が就航し、1,300隻以上が発注済みで、新規代替燃料発注の約3分の2を占め最も先行している。メタノールはコンテナ船・自動車運搬船を中心に急速に拡大しており、アンモニアは毒性・腐食性などの課題を抱えつつも初期段階のプロジェクトが増加している。原子力推進は規制の空白のなか、長期的な課題として残る。",
    date: "2026.08",
    source: "Ship Universe",
    sourceUrl:
      "https://www.shipuniverse.com/the-great-green-fuel-race-in-2026-lng-methanol-ammonia-and-the-nuclear-option/",
  },
  {
    id: "vdes-solas",
    category: "enav",
    title: "VDES、SOLAS上の正式な航法手段として承認…衛星VDES時代の幕開け",
    summary:
      "2026年5月、IMO海上安全委員会はVDES（VHFデータ交換システム）をAISの代替手段としてSOLASに反映することを決定し、2028年1月1日に発効する。スペース・ノルウェーおよびルソスペースのVDES搭載衛星が相次いで軌道に投入され、衛星ベースのe-Navigationインフラも本格化しつつある。",
    date: "2026.05",
    source: "VDES Alliance",
    sourceUrl:
      "https://www.vdes-alliance.org/index.php/category/news-about-vdes/",
  },
  {
    id: "officer-shortage-2026",
    category: "seafarer",
    title: "士官人材が3万9,100人不足…2030年までにギャップはさらに拡大",
    summary:
      "2026年6月25日に発表されたBIMCO・ICSの船員人材報告書（Seafarer Workforce Report）によると、現在STCW認証士官が3万9,100人不足しており、2030年までにさらに11万3,735人が必要となる。商船隊の拡大とパンデミック後の需要回復により、認証船員への需要は2021年比で35%増加しており、2030年まで毎年平均2万2,747人の新規士官確保が必要だと指摘している。",
    date: "2026.06",
    source: "BIMCO / ICS",
    sourceUrl:
      "https://www.bimco.org/news-insights/press-media/press-releases/2026/0625-workforce-report/",
  },
  {
    id: "mlc-2025-amendments",
    category: "seafarer",
    title: "MLC 2025年改正、2027年発効…船員保護を大幅強化",
    summary:
      "2027年12月末に発効予定の海上労働条約（MLC）改正は、船員の非差別的な上陸休暇の権利を明文化し、船舶所有者の送還義務（交通費・宿泊費・食費・医療費を含む）を拡大する。船内での暴力・ハラスメント・性的暴行を明示的に禁止し、安全な通報体制を義務化したほか、生理用品の提供など性別に配慮した衛生基準や、報復のない苦情処理手続きも新たに盛り込んだ。",
    date: "2025.06",
    source: "West of England P&I Club",
    sourceUrl:
      "https://www.westpandi.com/news-and-resources/news/june-2025/amendments-to-the-maritime-labour-convention-adopt/",
  },
  // --- daily-append-marker: the daily research job inserts new items just above this line. Do not remove or edit it. ---
];
