#!/usr/bin/env node
// Regenerates the resume database + resume form from the site's own content
// (src/content/ko/{research,publications,awards,experience}.ts) plus the
// small amount of resume-only data in resume-supplement.mjs (committed) and
// private-source-docs/resume-database/resume-private.mjs (gitignored, PII).
//
// Run manually:  node scripts/generate-resume.mjs
// Run automatically: the pre-commit hook (scripts/git-hooks/pre-commit) runs
// this whenever a commit touches any of the source files above, and stages
// the regenerated output.
//
// Outputs:
//   private-source-docs/resume-database/MASTER_DB.md            (data tables only — sections 2,3,4,5,6,7,8,9,10,11 refreshed)
//   private-source-docs/resume-database/ASSEMBLED_01_기본양식.md
//   private-source-docs/resume-database/ASSEMBLED_02_확장식.md
//   private-source-docs/resume-database/ASSEMBLED_03_full_version.md
//   private-source-docs/resume-database/resume-form.html        (real phone number)
//   resume/resume-form.html                                     (phone left blank — this one is git-tracked)

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import sharp from "sharp";

import { researchProjects } from "../src/content/ko/research.ts";
import { books, papers, presentations, patents } from "../src/content/ko/publications.ts";
import { awards } from "../src/content/ko/awards.ts";
import { experience, currentAffiliations } from "../src/content/ko/experience.ts";
import * as supplement from "./resume-supplement.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const RESUME_DB_DIR = path.join(ROOT, "private-source-docs/resume-database");
const PUBLIC_DIR = path.join(ROOT, "resume");

let privatePhone = "";
const privateDataPath = path.join(RESUME_DB_DIR, "resume-private.mjs");
if (existsSync(privateDataPath)) {
  const mod = await import(pathToFileURL(privateDataPath).href);
  privatePhone = mod.phone ?? "";
}

const CSS = readFileSync(path.join(__dirname, "resume-style.css"), "utf8");

// ---------------------------------------------------------------- helpers

function esc(s) {
  return String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function stripMonths(period) {
  return period.replace(/\.(0[1-9]|1[0-2])\b/g, "");
}

function yearKey(y) {
  const m = String(y).match(/\d{4}/);
  return m ? Number(m[0]) : 0;
}

function sortByYearDesc(list, yearField = "year") {
  return list.map((item, i) => [item, i]).sort((a, b) => {
    const diff = yearKey(b[0][yearField]) - yearKey(a[0][yearField]);
    return diff !== 0 ? diff : a[1] - b[1];
  }).map(([item]) => item);
}

function roleCellFor(entry) {
  const suffix = supplement.experienceDetailOverrides[entry.period];
  return suffix ? `${entry.role} (${suffix})` : entry.role;
}

// ---------------------------------------------------------------- data prep

const careerRows = experience.map((e) => ({ period: e.period, org: e.org, role: roleCellFor(e) }));

const currentRoleRows = currentAffiliations.map((a) => ({ period: a.period, org: a.org, role: a.role }));

const researchRows = researchProjects.map((r, i) => ({
  period: i === 0 ? stripMonths(r.period) : r.period,
  title: (r.isRnd ? "[R&D] " : "") + r.title,
  funder: r.funder,
  role: r.role,
  flagship: !!r.flagship,
}));

const awardRowsDesc = sortByYearDesc(awards, "year");

const presentationRows = presentations; // already newest-first in publications.ts

const paperRows = papers; // already newest-first in publications.ts

const basicCurrentRoleRows = currentRoleRows.slice(0, supplement.basicTier.currentAffiliationsCount);

const basicCareerRows = supplement.basicTier.experienceRoles
  .map((role) => experience.find((e) => e.role === role))
  .filter(Boolean)
  .map((e) => ({ period: e.period, org: e.org, role: roleCellFor(e) }));

const basicResearchRows = researchRows.filter((r) => r.flagship);

const basicPaperRows = supplement.basicTier.representativePaperTitles
  .map((title) => papers.find((p) => p.title === title))
  .filter(Boolean);

// ---------------------------------------------------------------- HTML render helpers

function plainList(rows, render) {
  return `        <ul class="plain">\n${rows.map((r) => `          <li>${render(r)}</li>`).join("\n")}\n        </ul>`;
}

function orgRoleLi(r) {
  return `<span class="period">${esc(r.period)}</span><span class="desc">${esc(r.org)} <span class="org">— ${esc(r.role)}</span></span>`;
}

function table(headers, rows, renderRow) {
  const thead = `<thead><tr>${headers.map((h, i) => `<th${i === 0 ? ' class="period"' : ""}>${esc(h)}</th>`).join("")}</tr></thead>`;
  const tbody = `<tbody>\n${rows.map((r) => `            <tr>${renderRow(r)}</tr>`).join("\n")}\n          </tbody>`;
  return `        <div class="table-wrap"><table>\n          ${thead}\n          ${tbody}\n        </table></div>`;
}

function careerTable(rows) {
  return table(["기간", "기관", "역할"], rows, (r) => `<td class="period">${esc(r.period)}</td><td>${esc(r.org)}</td><td>${esc(r.role)}</td>`);
}

function committeeTable() {
  return table(["기간", "기관", "역할"], supplement.committeeHistory, (r) => `<td class="period">${esc(r.period)}</td><td>${esc(r.org)}</td><td>${esc(r.role)}</td>`);
}

function researchTable(rows) {
  return table(["연도", "제목", "발주처", "역할"], rows, (r) => `<td class="period">${esc(r.period)}</td><td>${esc(r.title)}</td><td>${esc(r.funder)}</td><td>${esc(r.role)}</td>`);
}

function educationTable() {
  return table(["기간", "학교", "학위"], supplement.education, (r) => `<td class="period">${esc(r.period)}</td><td>${esc(r.school)}</td><td>${esc(r.degree)}</td>`);
}

function booksList() {
  return plainList(books, (b) => `<span class="period">${esc(b.year)}</span><span class="desc">${esc(b.title)}</span>`);
}

function patentsList() {
  return plainList(patents, (p) => `<span class="period">${esc(p.year)} · ${esc(p.status)}</span><span class="desc">${esc(p.title)}</span>`);
}

function papersTable(rows) {
  return table(["연도", "제목", "게재처", "비고"], rows, (p) =>
    `<td class="period">${esc(p.year)}</td><td>${esc(p.title)}</td><td>${esc(p.venue)}</td><td class="note">${esc((p.summary ?? "").replace(/^.*(우수\S+상).*$/, "$1 수상"))}</td>`);
}

function presentationsTable(rows) {
  return table(["연도", "제목", "장소 · 주최"], rows, (p) => `<td class="period">${esc(p.year)}</td><td>${esc(p.title)}</td><td>${esc(p.venue)}</td>`);
}

function awardsTable(withNote) {
  const headers = withNote ? ["연도", "수상명", "비고"] : ["연도", "수상명"];
  return table(headers, awardRowsDesc, (a) =>
    withNote
      ? `<td class="period">${esc(a.year)}</td><td>${esc(a.title)}</td><td class="note">${esc(a.reason ?? "")}</td>`
      : `<td class="period">${esc(a.year)}</td><td>${esc(a.title)}</td>`);
}

function representativePapersList() {
  return plainList(basicPaperRows, (p) =>
    `<span class="period">${esc(p.year)}</span><span class="desc">${esc(p.title)}, ${esc(p.venue)}${p.summary ? ` <span class="org">— ${esc(p.summary)}</span>` : ""}</span>`);
}

// ---------------------------------------------------------------- panels

function panelBasic() {
  return `    <div class="panel panel-basic">
${identityBlock()}

      <section class="block">
        <h2>현재 주요 직위</h2>
${plainList(basicCurrentRoleRows, orgRoleLi)}
      </section>

      <section class="block">
        <h2>학력</h2>
${plainList(supplement.education.slice(-1), (r) => `<span class="period">${esc(r.period)}</span><span class="desc">${esc(r.school)} ${esc(r.degree)}</span>`)}
      </section>

      <section class="block">
        <h2>주요 경력</h2>
${plainList(basicCareerRows, orgRoleLi)}
      </section>

      <section class="block">
        <h2>대표 연구실적</h2>
${plainList(basicResearchRows, (r) => `<span class="period">${esc(r.period)}</span><span class="desc">${esc(r.title)} <span class="org">— ${esc(r.funder)}${r.role ? `, ${esc(r.role)}` : ""}</span></span>`)}
      </section>

      <section class="block">
        <h2>저서</h2>
${booksList()}
      </section>

      <section class="block">
        <h2>수상</h2>
${awardsTable(false)}
      </section>

    </div>`;
}

function extendedOrFullBody({ paperSection }) {
  return `${identityBlock()}

      <section class="block">
        <h2>학력</h2>
${educationTable()}
      </section>

      <section class="block">
        <h2>경력</h2>
${careerTable(careerRows)}
      </section>

      <section class="block">
        <h2>현재 주요 직위</h2>
${careerTable(currentRoleRows)}
      </section>

      <section class="block">
        <h2>위원회 · 자문 · 심사위원 활동 이력 (연대순)</h2>
${committeeTable()}
      </section>

      <section class="block">
        <h2>연구실적 <span class="badge">${researchRows.length}건</span></h2>
${researchTable(researchRows)}
      </section>

      <section class="block">
        <h2>저서</h2>
${booksList()}
      </section>

      <section class="block">
        <h2>특허</h2>
${patentsList()}
      </section>

${paperSection}

      <section class="block">
        <h2>외부강연 · 초청발표 <span class="badge">${presentationRows.length}건</span></h2>
${presentationsTable(presentationRows)}
      </section>

      <section class="block">
        <h2>수상</h2>
${awardsTable(true)}
      </section>`;
}

function panelExtended() {
  const paperSection = `      <section class="block">
        <h2>대표 논문</h2>
        <p class="lead">전체 ${paperRows.length}건은 Full Version 탭 참고.</p>
${representativePapersList()}
      </section>`;
  return `    <div class="panel panel-extended">
${extendedOrFullBody({ paperSection })}

    </div>`;
}

function panelFull() {
  const paperSection = `      <section class="block">
        <h2>논문 <span class="badge">${paperRows.length}건 전체</span></h2>
${papersTable(paperRows)}
      </section>`;
  return `    <div class="panel panel-full">
${extendedOrFullBody({ paperSection })}

    </div>`;
}

function identityBlock() {
  return `      <div class="identity">
        <div><span class="k">소속</span><span class="v">${esc(supplement.identity.org)}</span></div>
        <div><span class="k">직위</span><span class="v">${esc(supplement.identity.title)}</span></div>
        <div><span class="k">자격증</span><span class="v">${esc(supplement.identity.license)}</span></div>
        <div><span class="k">학위</span><span class="v">공학박사</span></div>
        <div class="dob"><span class="k">생년월일</span><input type="text" class="dob-input" placeholder="YYYY.MM.DD" /></div>
        <div class="phone"><span class="k">전화번호</span>PHONE_PLACEHOLDER</div>
        <div class="email-field"><span class="k">이메일</span><span class="v">${esc(supplement.identity.email)}</span></div>
      </div>`;
}

// ---------------------------------------------------------------- full document

async function buildHtml(phoneValue) {
  const photoBuf = await sharp(path.join(ROOT, "public/images/unkyu-jang-profile.jpg"))
    .resize({ width: 320 })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  const photoDataUri = `data:image/jpeg;base64,${photoBuf.toString("base64")}`;

  const phoneMarkup = phoneValue
    ? `<span class="v">${esc(phoneValue)}</span>`
    : `<input type="text" class="dob-input" placeholder="010-0000-0000" />`;

  let html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<title>장은규 이력서</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet" />
<style>
${CSS}</style>
</head>
<body>

  <div class="toolbar">
    <h1>장은규 이력서 — 기본양식 · 확장식 · Full Version</h1>
    <button type="button" class="print-btn" onclick="confirmAndPrint()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M6 9V2h12v7" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><path d="M6 14h12v8H6z" />
      </svg>
      PDF로 저장 · 인쇄
    </button>
    <span class="hint">현재 선택된 버전만 저장/인쇄됩니다 · 대화상자의 "대상(프린터)"을 "PDF로 저장"으로 바꾸면 파일로 저장돼요</span>
  </div>

  <input class="ctrl" type="radio" name="tier" id="tab-basic" checked />
  <input class="ctrl" type="radio" name="tier" id="tab-extended" />
  <input class="ctrl" type="radio" name="tier" id="tab-full" />
  <input class="ctrl" type="checkbox" id="show-dob" />
  <input class="ctrl" type="checkbox" id="show-phone" />
  <input class="ctrl" type="checkbox" id="show-email" />

  <nav class="tabs">
    <label for="tab-basic">기본양식</label>
    <label for="tab-extended">확장식</label>
    <label for="tab-full">Full Version</label>
  </nav>

  <div class="opts">
    <label for="show-dob">생년월일 표시</label>
    <label for="show-phone">전화번호 표시</label>
    <label for="show-email">이메일 표시</label>
  </div>

  <div class="paper">

    <header class="masthead">
      <div class="brand">
        <svg viewBox="0 0 26 26" aria-hidden="true">
          <circle cx="13" cy="13" r="7.5" fill="none" stroke="#0088b0" stroke-width="1.6"></circle>
          <path d="M13 0.5 V8.5 M13 17.5 V25.5 M0.5 13 H8.5 M17.5 13 H25.5" stroke="#0088b0" stroke-width="1.6"></path>
          <circle cx="13" cy="13" r="2" fill="#d6006c"></circle>
        </svg>
        <div>
          <div class="name">Dr. Jang</div>
          <div class="sub">MARITIME INTELLIGENCE</div>
          <a class="site" href="https://drjangmaritime.com" target="_blank" rel="noopener">drjangmaritime.com</a>
        </div>
      </div>
      <div class="right">
        <div class="contact">
          <strong>${esc(supplement.identity.nameKo)}</strong> · ${esc(supplement.identity.org)} ${esc(supplement.identity.title)}<br />
          ${esc(supplement.identity.degreeLine)} · ${esc(supplement.identity.license)}
        </div>
        <div class="photo"><img src="${photoDataUri}" alt="${esc(supplement.identity.nameKo)}" /></div>
      </div>
    </header>

${panelBasic()}

${panelExtended()}

${panelFull()}

    <footer class="signoff">
      <div class="field">
        <label for="date">작성일자</label>
        <input type="text" id="date" placeholder="YYYY. MM. DD." />
      </div>
      <div class="field">
        <label for="org">제출기관</label>
        <input type="text" id="org" placeholder="" />
      </div>
    </footer>

  </div>

  <script>
    (function () {
      var dateInput = document.getElementById("date");
      if (dateInput && !dateInput.value) {
        var d = new Date();
        var pad = function (n) { return String(n).padStart(2, "0"); };
        dateInput.value = d.getFullYear() + ". " + pad(d.getMonth() + 1) + ". " + pad(d.getDate()) + ".";
      }
    })();
    function confirmAndPrint() {
      if (window.confirm("생년월일, 제출기관 입력 확인하셨습니까?")) {
        window.print();
      }
    }
  </script>

</body>
</html>
`;
  return html.replaceAll("PHONE_PLACEHOLDER", phoneMarkup);
}

// ---------------------------------------------------------------- markdown render

function mdTable(headers, rows, renderRow) {
  return [`| ${headers.join(" | ")} |`, `|${headers.map(() => "---").join("|")}|`, ...rows.map(renderRow)].join("\n");
}

function buildMasterDbSections() {
  const eduTable = mdTable(["기간", "학교", "학위"], supplement.education, (r) => `| ${r.period} | ${r.school} | ${r.degree} |`);
  const careerTableMd = mdTable(["기간", "기관", "역할"], careerRows, (r) => `| ${r.period} | ${r.org} | ${r.role} |`);
  const currentTableMd = mdTable(["기간", "기관", "역할"], currentRoleRows, (r) => `| ${r.period} | ${r.org} | ${r.role} |`);
  const committeeTableMd = mdTable(["기간", "기관", "역할"], supplement.committeeHistory, (r) => `| ${r.period} | ${r.org} | ${r.role} |`);
  const researchTableMd = mdTable(["연도", "제목", "발주처", "역할", "★"], researchRows, (r) => `| ${r.period} | ${r.title} | ${r.funder} | ${r.role} | ${r.flagship ? "★" : ""} |`);
  const booksMd = books.map((b) => `- ${b.year}: ${b.title}`).join("\n");
  const patentsMd = patents.map((p) => `- (${p.status}, ${p.year}) ${p.title}`).join("\n");
  const papersMd = mdTable(["연도", "제목", "게재처", "비고"], paperRows, (p) => `| ${p.year} | ${p.title} | ${p.venue} | ${p.summary ?? ""} |`);
  const presentationsMd = mdTable(["연도", "제목", "장소 · 주최"], presentationRows, (p) => `| ${p.year} | ${p.title} | ${p.venue} |`);
  const awardsMd = mdTable(["연도", "수상명", "비고"], awardRowsDesc, (a) => `| ${a.year} | ${a.title} | ${a.reason ?? ""} |`);
  return { eduTable, careerTableMd, currentTableMd, committeeTableMd, researchTableMd, booksMd, patentsMd, papersMd, presentationsMd, awardsMd };
}

function writeAssembledBasic(sections) {
  const path_ = path.join(RESUME_DB_DIR, "ASSEMBLED_01_기본양식.md");
  const currentMd = basicCurrentRoleRows.map((r) => `- ${r.org} — ${r.role} (${r.period})`).join("\n");
  const careerMd = basicCareerRows.map((r) => `- ${r.org} — ${r.role} (${r.period})`).join("\n");
  const researchMd = basicResearchRows.map((r) => `- ${r.title}, ${r.funder} (${r.period}${r.role ? `, ${r.role}` : ""})`).join("\n");
  const eduLine = supplement.education.at(-1);
  const awardsMdBasic = mdTable(["연도", "수상명"], awardRowsDesc, (a) => `| ${a.year} | ${a.title} |`);
  const content = `# 이 력 서 (기본양식)

> \`MASTER_DB.md\`에서 자동 조립됨 — 핵심 요약, 1페이지 분량. 항목을 더 보려면 확장식/full version 참고.
> **이 파일은 \`node scripts/generate-resume.mjs\`로 자동 생성됩니다 — 직접 손으로 고치지 마세요.**

## 기본정보

| 성명 | ${supplement.identity.nameKo} | 소속 | ${supplement.identity.org} |
|---|---|---|---|
| 직위 | ${supplement.identity.title} | 자격증 | ${supplement.identity.license} |
| 최종학교(학위) | ${supplement.education.at(-1).school} (${supplement.education.at(-1).degree}) | 전공 | 해사안전환경 |
| 이메일 | ${supplement.identity.email} | | |

## 현재 주요 직위

${currentMd}

## 학력

- ${eduLine.school} — ${eduLine.degree} (${eduLine.period})

## 주요 경력

${careerMd}

## 대표 연구실적

${researchMd}

## 저서

${books.map((b) => `- ${b.title} (${b.year})`).join("\n")}

## 수상

${awardsMdBasic}

---

작성일자: ____________________

제출기관: ____________________
`;
  writeFileSync(path_, content);
}

function writeAssembledExtended(sections) {
  const path_ = path.join(RESUME_DB_DIR, "ASSEMBLED_02_확장식.md");
  const repPapersMd = basicPaperRows.map((p) => `- ${p.title}, ${p.venue}, ${p.year}${p.summary ? ` — ${p.summary}` : ""}`).join("\n");
  const content = `# 이 력 서 (확장식)

> \`MASTER_DB.md\`에서 자동 조립됨 — 기존 \`이력서(장은규)2026.pdf\` 수준의 전체 이력서.
> **이 파일은 \`node scripts/generate-resume.mjs\`로 자동 생성됩니다 — 직접 손으로 고치지 마세요.**

## 일반사항

| 성명 | ${supplement.identity.nameKo} | 소속 | ${supplement.identity.org} |
|---|---|---|---|
| 직위 | ${supplement.identity.title} | 자격증 | ${supplement.identity.license} |
| 최종학교(학위) | ${supplement.education.at(-1).school} (${supplement.education.at(-1).degree}) | 전공 | 해사안전환경 |
| 이메일 | ${supplement.identity.email} | | |

## 학력

${sections.eduTable}

## 경력

${sections.careerTableMd}

## 현재 주요 직위

${sections.currentTableMd}

## 위원회 · 자문 · 심사위원 활동 이력 (연대순)

${sections.committeeTableMd}

## 연구실적 (${researchRows.length}건)

${sections.researchTableMd}

## 저서

${sections.booksMd}

## 특허

${sections.patentsMd}

## 대표 논문

${repPapersMd}

전체 논문 ${paperRows.length}건은 \`ASSEMBLED_03_full_version.md\` 참고.

## 외부강연 · 초청발표 (${presentationRows.length}건)

${sections.presentationsMd}

## 수상

${sections.awardsMd}

---

작성일자: ____________________

제출기관: ____________________
`;
  writeFileSync(path_, content);
}

function writeAssembledFull(sections) {
  const path_ = path.join(RESUME_DB_DIR, "ASSEMBLED_03_full_version.md");
  const content = `# 이 력 서 (Full Version)

> \`MASTER_DB.md\`에서 자동 조립됨 — 확장식 전체 + 논문 ${paperRows.length}건 전체(학술대회 발표문 포함) + 부가설명. 사실상 최대치.
> **이 파일은 \`node scripts/generate-resume.mjs\`로 자동 생성됩니다 — 직접 손으로 고치지 마세요.**

## 일반사항

| 성명 | ${supplement.identity.nameKo} | 소속 | ${supplement.identity.org} |
|---|---|---|---|
| 직위 | ${supplement.identity.title} | 자격증 | ${supplement.identity.license} |
| 최종학교(학위) | ${supplement.education.at(-1).school} (${supplement.education.at(-1).degree}) | 전공 | 해사안전환경 |
| 이메일 | ${supplement.identity.email} | | |

## 학력

${sections.eduTable}

## 경력

${sections.careerTableMd}

## 현재 주요 직위

${sections.currentTableMd}

## 위원회 · 자문 · 심사위원 활동 이력 (연대순)

${sections.committeeTableMd}

## 연구실적 (${researchRows.length}건)

${sections.researchTableMd}

## 저서

${sections.booksMd}

## 특허

${sections.patentsMd}

## 논문 (${paperRows.length}건 전체)

${sections.papersMd}

## 외부강연 · 초청발표 (${presentationRows.length}건)

${sections.presentationsMd}

## 수상

${sections.awardsMd}

---

작성일자: ____________________

제출기관: ____________________
`;
  writeFileSync(path_, content);
}

// ---------------------------------------------------------------- run

const sections = buildMasterDbSections();
writeAssembledBasic(sections);
writeAssembledExtended(sections);
writeAssembledFull(sections);

const privateHtml = await buildHtml(privatePhone);
writeFileSync(path.join(RESUME_DB_DIR, "resume-form.html"), privateHtml);

const publicHtml = await buildHtml("");
writeFileSync(path.join(PUBLIC_DIR, "resume-form.html"), publicHtml);

console.log("Resume regenerated:");
console.log(" -", path.join(RESUME_DB_DIR, "resume-form.html"), privatePhone ? "(with phone)" : "(no private phone found — blank)");
console.log(" -", path.join(PUBLIC_DIR, "resume-form.html"), "(phone always blank)");
console.log(" -", "ASSEMBLED_01/02/03.md, (MASTER_DB.md tables unchanged by this script — edit its prose by hand)");
