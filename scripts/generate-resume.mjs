#!/usr/bin/env node
// Regenerates the resume database + resume form from the site's own content
// (src/content/<locale>/{research,publications,awards,experience}.ts, for
// each of ko/en/ja/es) plus the small amount of resume-only data in
// resume-supplement.mjs / resume-ui.mjs (committed) and
// private-source-docs/resume-database/resume-private.mjs (gitignored, PII).
//
// Run manually:  node scripts/generate-resume.mjs
// Run automatically: the pre-commit hook (scripts/git-hooks/pre-commit) runs
// this whenever a commit touches any of the source files above, and stages
// the regenerated output.
//
// Outputs:
//   private-source-docs/resume-database/MASTER_DB.md            (data tables only — sections 2,3,4,5,6,7,8,9,10,11 refreshed)
//   private-source-docs/resume-database/ASSEMBLED_01_기본양식.md   (Korean only — internal working docs)
//   private-source-docs/resume-database/ASSEMBLED_02_확장식.md
//   private-source-docs/resume-database/ASSEMBLED_03_full_version.md
//   private-source-docs/resume-database/resume-form.html        (real phone number — ko/en/ja/es via a language switcher)
//   resume/resume-form.html                                     (phone left blank — this one is git-tracked)

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import sharp from "sharp";

import { researchProjects as researchKo } from "../src/content/ko/research.ts";
import { books as booksKo, papers as papersKo, presentations as presentationsKo, patents as patentsKo } from "../src/content/ko/publications.ts";
import { awards as awardsKo } from "../src/content/ko/awards.ts";
import { experience as experienceKo, currentAffiliations as currentAffiliationsKo } from "../src/content/ko/experience.ts";

import { researchProjects as researchEn } from "../src/content/en/research.ts";
import { books as booksEn, papers as papersEn, presentations as presentationsEn, patents as patentsEn } from "../src/content/en/publications.ts";
import { awards as awardsEn } from "../src/content/en/awards.ts";
import { experience as experienceEn, currentAffiliations as currentAffiliationsEn } from "../src/content/en/experience.ts";

import { researchProjects as researchJa } from "../src/content/ja/research.ts";
import { books as booksJa, papers as papersJa, presentations as presentationsJa, patents as patentsJa } from "../src/content/ja/publications.ts";
import { awards as awardsJa } from "../src/content/ja/awards.ts";
import { experience as experienceJa, currentAffiliations as currentAffiliationsJa } from "../src/content/ja/experience.ts";

import { researchProjects as researchEs } from "../src/content/es/research.ts";
import { books as booksEs, papers as papersEs, presentations as presentationsEs, patents as patentsEs } from "../src/content/es/publications.ts";
import { awards as awardsEs } from "../src/content/es/awards.ts";
import { experience as experienceEs, currentAffiliations as currentAffiliationsEs } from "../src/content/es/experience.ts";

import * as supplement from "./resume-supplement.mjs";
import { ui, locales, localeLabels } from "./resume-ui.mjs";

const CONTENT = {
  ko: { researchProjects: researchKo, books: booksKo, papers: papersKo, presentations: presentationsKo, patents: patentsKo, awards: awardsKo, experience: experienceKo, currentAffiliations: currentAffiliationsKo },
  en: { researchProjects: researchEn, books: booksEn, papers: papersEn, presentations: presentationsEn, patents: patentsEn, awards: awardsEn, experience: experienceEn, currentAffiliations: currentAffiliationsEn },
  ja: { researchProjects: researchJa, books: booksJa, papers: papersJa, presentations: presentationsJa, patents: patentsJa, awards: awardsJa, experience: experienceJa, currentAffiliations: currentAffiliationsJa },
  es: { researchProjects: researchEs, books: booksEs, papers: papersEs, presentations: presentationsEs, patents: patentsEs, awards: awardsEs, experience: experienceEs, currentAffiliations: currentAffiliationsEs },
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const RESUME_DB_DIR = path.join(ROOT, "private-source-docs/resume-database");
const PUBLIC_DIR = path.join(ROOT, "resume");
// Unlisted (not linked from anywhere on the site, `noindex`), served as a
// real top-level page on drjangmaritime.com — deliberately NOT a Claude
// Artifact, since Artifact pages run in a sandboxed iframe that silently
// blocks window.print() (confirmed 2026-08-29: removing the confirm()
// gate wasn't enough — print() itself is blocked, no JS workaround exists
// from inside the sandbox). This one is a plain static file, so printing
// works exactly like the local file does. Slug is a random 12-hex string,
// unguessable — do not rename without updating anyone who has it bookmarked.
const WEB_SLUG = "resume-20f14825eb17";
const SITE_PUBLIC_DIR = path.join(ROOT, "public");

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

function roleCellFor(entry, index, locale) {
  const suffix = supplement.experienceDetailOverrides[index]?.[locale];
  return suffix ? `${entry.role} (${suffix})` : entry.role;
}

// ---------------------------------------------------------------- per-locale data prep

function buildLocaleData(locale) {
  const c = CONTENT[locale];

  const careerRows = c.experience.map((e, i) => ({ period: e.period, org: e.org, role: roleCellFor(e, i, locale) }));
  const currentRoleRows = c.currentAffiliations.map((a) => ({ period: a.period, org: a.org, role: a.role }));

  const researchRows = c.researchProjects.map((r, i) => ({
    period: i === 0 ? stripMonths(r.period) : r.period,
    title: (r.isRnd ? "[R&D] " : "") + r.title,
    funder: r.funder,
    role: r.role,
    flagship: !!r.flagship,
  }));

  const awardRowsDesc = sortByYearDesc(c.awards, "year");
  const presentationRows = c.presentations; // already newest-first in publications.ts
  const paperRows = c.papers; // already newest-first in publications.ts

  const basicCurrentRoleRows = currentRoleRows.slice(0, supplement.basicTier.currentAffiliationsCount);
  const basicCareerRows = supplement.basicTier.experienceIndices.map((i) => careerRows[i]);
  const basicResearchRows = researchRows.filter((r) => r.flagship);
  const basicPaperRows = supplement.basicTier.representativePaperIndices.map((i) => paperRows[i]);

  return { careerRows, currentRoleRows, researchRows, awardRowsDesc, presentationRows, paperRows, basicCurrentRoleRows, basicCareerRows, basicResearchRows, basicPaperRows };
}

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

function careerTable(rows, t) {
  return table(t.tableHeaders.periodOrgRole, rows, (r) => `<td class="period">${esc(r.period)}</td><td>${esc(r.org)}</td><td>${esc(r.role)}</td>`);
}

function committeeTable(locale, t) {
  return table(t.tableHeaders.periodOrgRole, supplement.committeeHistory[locale], (r) => `<td class="period">${esc(r.period)}</td><td>${esc(r.org)}</td><td>${esc(r.role)}</td>`);
}

function researchTable(rows, t) {
  return table(t.tableHeaders.research, rows, (r) => `<td class="period">${esc(r.period)}</td><td>${esc(r.title)}</td><td>${esc(r.funder)}</td><td>${esc(r.role)}</td>`);
}

function educationTable(locale, t) {
  return table(t.tableHeaders.education, supplement.education[locale], (r) => `<td class="period">${esc(r.period)}</td><td>${esc(r.school)}</td><td>${esc(r.degree)}</td>`);
}

function booksList(locale) {
  return plainList(CONTENT[locale].books, (b) => `<span class="period">${esc(b.year)}</span><span class="desc">${esc(b.title)}</span>`);
}

function patentsList(locale) {
  return plainList(CONTENT[locale].patents, (p) => `<span class="period">${esc(p.year)} · ${esc(p.status)}</span><span class="desc">${esc(p.title)}</span>`);
}

function papersTable(rows, t) {
  return table(t.tableHeaders.papers, rows, (p) =>
    `<td class="period">${esc(p.year)}</td><td>${esc(p.title)}</td><td>${esc(p.venue)}</td><td class="note">${esc(p.summary ?? "")}</td>`);
}

function presentationsTable(rows, t) {
  return table(t.tableHeaders.presentations, rows, (p) => `<td class="period">${esc(p.year)}</td><td>${esc(p.title)}</td><td>${esc(p.venue)}</td>`);
}

function awardsTable(awardRowsDesc, withNote, t) {
  const headers = withNote ? t.tableHeaders.awardsWithNote : t.tableHeaders.awards;
  return table(headers, awardRowsDesc, (a) =>
    withNote
      ? `<td class="period">${esc(a.year)}</td><td>${esc(a.title)}</td><td class="note">${esc(a.reason ?? "")}</td>`
      : `<td class="period">${esc(a.year)}</td><td>${esc(a.title)}</td>`);
}

function representativePapersList(basicPaperRows) {
  return plainList(basicPaperRows, (p) =>
    `<span class="period">${esc(p.year)}</span><span class="desc">${esc(p.title)}, ${esc(p.venue)}${p.summary ? ` <span class="org">— ${esc(p.summary)}</span>` : ""}</span>`);
}

// ---------------------------------------------------------------- panels (per locale)

// Korea-local "0xx-xxxx-xxxx" → international "+82-xx-xxxx-xxxx" (drop the
// leading trunk 0, prefix +82), used for en/ja/es display of the real phone
// number. ko keeps the local format.
function toIntlPhone(phoneValue) {
  return phoneValue.startsWith("0") ? `+82-${phoneValue.slice(1)}` : phoneValue;
}

function identityBlock(locale, phoneValue) {
  const id = supplement.identity[locale];
  const t = ui[locale];
  const displayPhone = phoneValue ? (locale === "ko" ? phoneValue : toIntlPhone(phoneValue)) : "";
  const phoneMarkup = displayPhone
    ? `<span class="v">${esc(displayPhone)}</span>`
    : `<input type="text" class="dob-input" placeholder="${esc(t.phonePlaceholder)}" />`;
  return `      <div class="identity">
        <div><span class="k">${esc(t.identityLabels.org)}</span><span class="v">${esc(id.org)}</span></div>
        <div><span class="k">${esc(t.identityLabels.title)}</span><span class="v">${esc(id.title)}</span></div>
        <div><span class="k">${esc(t.identityLabels.license)}</span><span class="v">${esc(id.license)}</span></div>
        <div><span class="k">${esc(t.identityLabels.degree)}</span><span class="v">${esc(id.degreeType)}</span></div>
        <div class="dob"><span class="k">${esc(t.identityLabels.dob)}</span><input type="text" class="dob-input" placeholder="YYYY.MM.DD" /></div>
        <div class="phone"><span class="k">${esc(t.identityLabels.phone)}</span>${phoneMarkup}</div>
        <div class="email-field"><span class="k">${esc(t.identityLabels.email)}</span><span class="v">${esc(id.email)}</span></div>
      </div>`;
}

function panelBasic(locale, data, phoneValue) {
  const t = ui[locale];
  return `    <div class="panel panel-basic lang-${locale}">
${identityBlock(locale, phoneValue)}

      <section class="block">
        <h2>${esc(t.section.currentRoles)}</h2>
${plainList(data.basicCurrentRoleRows, orgRoleLi)}
      </section>

      <section class="block">
        <h2>${esc(t.section.education)}</h2>
${plainList(supplement.education[locale].slice(-1), (r) => `<span class="period">${esc(r.period)}</span><span class="desc">${esc(r.school)} ${esc(r.degree)}</span>`)}
      </section>

      <section class="block">
        <h2>${esc(t.section.careerHighlights)}</h2>
${plainList(data.basicCareerRows, orgRoleLi)}
      </section>

      <section class="block">
        <h2>${esc(t.section.representativeResearch)}</h2>
${plainList(data.basicResearchRows, (r) => `<span class="period">${esc(r.period)}</span><span class="desc">${esc(r.title)} <span class="org">— ${esc(r.funder)}${r.role ? `, ${esc(r.role)}` : ""}</span></span>`)}
      </section>

      <section class="block">
        <h2>${esc(t.section.books)}</h2>
${booksList(locale)}
      </section>

      <section class="block">
        <h2>${esc(t.section.awards)}</h2>
${awardsTable(data.awardRowsDesc, false, t)}
      </section>

    </div>`;
}

// `sectionClasses` tags each block with a `section-X` class so the extended
// tier's per-section show/hide checkboxes (#sec-education etc.) can target
// it — the CSS only wires those checkboxes up for `.panel-extended`, so the
// same classes are harmless no-ops on `.panel-basic`/`.panel-full`.
function extendedOrFullBody(locale, data, phoneValue, paperSection) {
  const t = ui[locale];
  return `${identityBlock(locale, phoneValue)}

      <section class="block section-education">
        <h2>${esc(t.section.education)}</h2>
${educationTable(locale, t)}
      </section>

      <section class="block section-career">
        <h2>${esc(t.section.career)}</h2>
${careerTable(data.careerRows, t)}
      </section>

      <section class="block section-current">
        <h2>${esc(t.section.currentRoles)}</h2>
${careerTable(data.currentRoleRows, t)}
      </section>

      <section class="block section-committee">
        <h2>${esc(t.section.committee)}</h2>
${committeeTable(locale, t)}
      </section>

      <section class="block section-research">
        <h2>${esc(t.section.research)} <span class="badge">${t.badge(data.researchRows.length)}</span></h2>
${researchTable(data.researchRows, t)}
      </section>

      <section class="block section-books">
        <h2>${esc(t.section.books)}</h2>
${booksList(locale)}
      </section>

      <section class="block section-patents">
        <h2>${esc(t.section.patents)}</h2>
${patentsList(locale)}
      </section>

${paperSection}

      <section class="block section-talks">
        <h2>${esc(t.section.talks)} <span class="badge">${t.badge(data.presentationRows.length)}</span></h2>
${presentationsTable(data.presentationRows, t)}
      </section>

      <section class="block section-awards">
        <h2>${esc(t.section.awards)}</h2>
${awardsTable(data.awardRowsDesc, true, t)}
      </section>`;
}

function panelExtended(locale, data, phoneValue) {
  const t = ui[locale];
  const paperSection = `      <section class="block section-papers">
        <h2>${esc(t.section.representativePapers)}</h2>
        <p class="lead">${esc(t.repPapersLead(data.paperRows.length))}</p>
${representativePapersList(data.basicPaperRows)}
      </section>`;
  return `    <div class="panel panel-extended lang-${locale}">
${extendedOrFullBody(locale, data, phoneValue, paperSection)}

    </div>`;
}

function panelFull(locale, data, phoneValue) {
  const t = ui[locale];
  const paperSection = `      <section class="block">
        <h2>${esc(t.section.papers)} <span class="badge">${t.badgeAll(data.paperRows.length)}</span></h2>
${papersTable(data.paperRows, t)}
      </section>`;
  return `    <div class="panel panel-full lang-${locale}">
${extendedOrFullBody(locale, data, phoneValue, paperSection)}

    </div>`;
}

// ---------------------------------------------------------------- masthead + footer variants

function contactVariant(locale) {
  const id = supplement.identity[locale];
  // degreeLine and license go on their own lines (not joined with " · ") —
  // the en/ja/es license text ("Master Mariner (Deck Officer, Class 1)",
  // etc.) is long enough that a joined line got clipped against the photo
  // column; splitting guarantees it never has to share a line.
  return `        <div class="contact lang-${locale}">
          <strong>${esc(id.nameDisplay)}</strong> · ${esc(id.org)} ${esc(id.title)}<br />
          ${esc(id.degreeLine)}<br />
          ${esc(id.license)}
        </div>`;
}

function signoffVariant(locale) {
  const t = ui[locale];
  return `      <div class="signoff-variant lang-${locale}">
        <p class="certify">${esc(t.certify)}</p>
        <div class="fields-row">
          <div class="field">
            <label for="date-${locale}">${esc(t.footer.date)}</label>
            <input type="text" id="date-${locale}" placeholder="YYYY. MM. DD." />
          </div>
          <div class="field">
            <label for="org-${locale}">${esc(t.footer.org)}</label>
            <input type="text" id="org-${locale}" placeholder="" />
          </div>
        </div>
      </div>`;
}

// ---------------------------------------------------------------- full document

async function buildHtml(phoneValue) {
  const photoBuf = await sharp(path.join(ROOT, "public/images/unkyu-jang-profile.jpg"))
    .resize({ width: 320 })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  const photoDataUri = `data:image/jpeg;base64,${photoBuf.toString("base64")}`;

  const localeData = Object.fromEntries(locales.map((l) => [l, buildLocaleData(l)]));

  const allPanels = locales.map((locale) => {
    const data = localeData[locale];
    return [panelBasic(locale, data, phoneValue), panelExtended(locale, data, phoneValue), panelFull(locale, data, phoneValue)].join("\n\n");
  }).join("\n\n");

  const langRadios = locales.map((l, i) => `  <input class="ctrl" type="radio" name="lang" id="lang-${l}"${i === 0 ? " checked" : ""} />`).join("\n");
  const langTabs = locales.map((l) => `    <label for="lang-${l}">${esc(localeLabels[l])}</label>`).join("\n");

  // 확장식(Extended)-only per-section show/hide toggles — default all
  // checked (shown). Basic is a fixed curation and Full always shows
  // everything, so these only wire up against `.panel-extended` in CSS.
  const sectionToggles = [
    ["sec-education", "학력"],
    ["sec-career", "경력"],
    ["sec-current", "현재 주요 직위"],
    ["sec-committee", "위원회 이력"],
    ["sec-research", "연구실적"],
    ["sec-books", "저서"],
    ["sec-patents", "특허"],
    ["sec-papers", "대표 논문"],
    ["sec-talks", "외부강연"],
    ["sec-awards", "수상"],
  ];
  const sectionRadios = sectionToggles.map(([id]) => `  <input class="ctrl" type="checkbox" id="${id}" checked />`).join("\n");
  const sectionLabels = sectionToggles.map(([id, label]) => `    <label for="${id}">${esc(label)}</label>`).join("\n");

  let html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<title>장은규 이력서</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet" />
<style>
${CSS}</style>
</head>
<body>

  <div class="toolbar">
    <h1>장은규 이력서 — 한국어 · English · 日本語 · Español · 기본양식 · 확장식 · Full Version</h1>
    <button type="button" class="print-btn" onclick="printResume()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M6 9V2h12v7" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><path d="M6 14h12v8H6z" />
      </svg>
      PDF로 저장 · 인쇄
    </button>
    <span class="hint">언어와 버전을 선택하고, 생년월일·제출기관 입력을 확인한 뒤 저장/인쇄하세요 · 현재 선택된 조합만 저장/인쇄됩니다 · 대화상자의 "대상(프린터)"을 "PDF로 저장"으로 바꾸면 파일로 저장돼요 · 버튼이 안 눌리면 브라우저 자체 메뉴의 인쇄(Ctrl+P 또는 공유 → 인쇄)를 사용하세요</span>
  </div>

  <input class="ctrl" type="radio" name="tier" id="tab-basic" checked />
  <input class="ctrl" type="radio" name="tier" id="tab-extended" />
  <input class="ctrl" type="radio" name="tier" id="tab-full" />
${langRadios}
  <input class="ctrl" type="checkbox" id="show-dob" />
  <input class="ctrl" type="checkbox" id="show-phone" />
  <input class="ctrl" type="checkbox" id="show-email" />
${sectionRadios}

  <nav class="tabs lang-tabs">
${langTabs}
  </nav>

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

  <div class="opts section-opts">
${sectionLabels}
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
${locales.map(contactVariant).join("\n")}
        <div class="photo"><img src="${photoDataUri}" alt="${esc(supplement.identity.ko.nameDisplay)}" /></div>
      </div>
    </header>

${allPanels}

    <footer class="signoff">
${locales.map(signoffVariant).join("\n")}
    </footer>

  </div>

  <script>
    (function () {
      var dateInputs = document.querySelectorAll('.signoff input[id^="date-"]');
      var pad = function (n) { return String(n).padStart(2, "0"); };
      var d = new Date();
      var today = d.getFullYear() + ". " + pad(d.getMonth() + 1) + ". " + pad(d.getDate()) + ".";
      dateInputs.forEach(function (el) { if (!el.value) el.value = today; });

      var langRadios = document.querySelectorAll('input[name="lang"]');
      langRadios.forEach(function (el) {
        el.addEventListener("change", function () {
          if (el.checked) document.documentElement.lang = el.id.replace("lang-", "");
        });
      });

      // Save-as-PDF / print dialogs suggest document.title as the filename —
      // keep it in English (regardless of the selected display language) and
      // stamp the selected tier + today's date so saved files sort and
      // identify themselves without being renamed by hand.
      var tierLabels = { "tab-basic": "Basic", "tab-extended": "Extended", "tab-full": "Full-Version" };
      var dateStr = d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
      function updateTitle() {
        var checked = document.querySelector('input[name="tier"]:checked');
        var tier = checked ? tierLabels[checked.id] : "Basic";
        document.title = "Unkyu-Jang-Resume-" + tier + "-" + dateStr;
      }
      document.querySelectorAll('input[name="tier"]').forEach(function (el) {
        el.addEventListener("change", updateTitle);
      });
      updateTitle();
    })();
    function printResume() {
      // Not gated behind window.confirm() on purpose — a sandboxed iframe
      // (e.g. this page embedded in a Claude Artifact viewer) can silently
      // no-op confirm()/alert(), which made the button do nothing at all.
      // The reminder now lives in the toolbar hint text instead.
      window.print();
    }
  </script>

</body>
</html>
`;
  return html;
}

// ---------------------------------------------------------------- markdown render (Korean only — internal working docs)

function mdTable(headers, rows, renderRow) {
  return [`| ${headers.join(" | ")} |`, `|${headers.map(() => "---").join("|")}|`, ...rows.map(renderRow)].join("\n");
}

function buildMasterDbSections(data) {
  const eduTable = mdTable(["기간", "학교", "학위"], supplement.education.ko, (r) => `| ${r.period} | ${r.school} | ${r.degree} |`);
  const careerTableMd = mdTable(["기간", "기관", "역할"], data.careerRows, (r) => `| ${r.period} | ${r.org} | ${r.role} |`);
  const currentTableMd = mdTable(["기간", "기관", "역할"], data.currentRoleRows, (r) => `| ${r.period} | ${r.org} | ${r.role} |`);
  const committeeTableMd = mdTable(["기간", "기관", "역할"], supplement.committeeHistory.ko, (r) => `| ${r.period} | ${r.org} | ${r.role} |`);
  const researchTableMd = mdTable(["연도", "제목", "발주처", "역할", "★"], data.researchRows, (r) => `| ${r.period} | ${r.title} | ${r.funder} | ${r.role} | ${r.flagship ? "★" : ""} |`);
  const booksMd = booksKo.map((b) => `- ${b.year}: ${b.title}`).join("\n");
  const patentsMd = patentsKo.map((p) => `- (${p.status}, ${p.year}) ${p.title}`).join("\n");
  const papersMd = mdTable(["연도", "제목", "게재처", "비고"], data.paperRows, (p) => `| ${p.year} | ${p.title} | ${p.venue} | ${p.summary ?? ""} |`);
  const presentationsMd = mdTable(["연도", "제목", "장소 · 주최"], data.presentationRows, (p) => `| ${p.year} | ${p.title} | ${p.venue} |`);
  const awardsMd = mdTable(["연도", "수상명", "비고"], data.awardRowsDesc, (a) => `| ${a.year} | ${a.title} | ${a.reason ?? ""} |`);
  return { eduTable, careerTableMd, currentTableMd, committeeTableMd, researchTableMd, booksMd, patentsMd, papersMd, presentationsMd, awardsMd };
}

function writeAssembledBasic(data) {
  const path_ = path.join(RESUME_DB_DIR, "ASSEMBLED_01_기본양식.md");
  const currentMd = data.basicCurrentRoleRows.map((r) => `- ${r.org} — ${r.role} (${r.period})`).join("\n");
  const careerMd = data.basicCareerRows.map((r) => `- ${r.org} — ${r.role} (${r.period})`).join("\n");
  const researchMd = data.basicResearchRows.map((r) => `- ${r.title}, ${r.funder} (${r.period}${r.role ? `, ${r.role}` : ""})`).join("\n");
  const eduLine = supplement.education.ko.at(-1);
  const awardsMdBasic = mdTable(["연도", "수상명"], data.awardRowsDesc, (a) => `| ${a.year} | ${a.title} |`);
  const identity = supplement.identity.ko;
  const content = `# 이 력 서 (기본양식)

> \`MASTER_DB.md\`에서 자동 조립됨 — 핵심 요약, 1페이지 분량. 항목을 더 보려면 확장식/full version 참고.
> **이 파일은 \`node scripts/generate-resume.mjs\`로 자동 생성됩니다 — 직접 손으로 고치지 마세요.**

## 기본정보

| 성명 | ${identity.nameDisplay} | 소속 | ${identity.org} |
|---|---|---|---|
| 직위 | ${identity.title} | 자격증 | ${identity.license} |
| 최종학교(학위) | ${supplement.education.ko.at(-1).school} (${supplement.education.ko.at(-1).degree}) | 전공 | 해사안전환경 |
| 이메일 | ${identity.email} | | |

## 현재 주요 직위

${currentMd}

## 학력

- ${eduLine.school} — ${eduLine.degree} (${eduLine.period})

## 주요 경력

${careerMd}

## 대표 연구실적

${researchMd}

## 저서

${booksKo.map((b) => `- ${b.title} (${b.year})`).join("\n")}

## 수상

${awardsMdBasic}

---

작성일자: ____________________

제출기관: ____________________
`;
  writeFileSync(path_, content);
}

function writeAssembledExtended(data, sections) {
  const path_ = path.join(RESUME_DB_DIR, "ASSEMBLED_02_확장식.md");
  const repPapersMd = data.basicPaperRows.map((p) => `- ${p.title}, ${p.venue}, ${p.year}${p.summary ? ` — ${p.summary}` : ""}`).join("\n");
  const identity = supplement.identity.ko;
  const content = `# 이 력 서 (확장식)

> \`MASTER_DB.md\`에서 자동 조립됨 — 기존 \`이력서(장은규)2026.pdf\` 수준의 전체 이력서.
> **이 파일은 \`node scripts/generate-resume.mjs\`로 자동 생성됩니다 — 직접 손으로 고치지 마세요.**

## 일반사항

| 성명 | ${identity.nameDisplay} | 소속 | ${identity.org} |
|---|---|---|---|
| 직위 | ${identity.title} | 자격증 | ${identity.license} |
| 최종학교(학위) | ${supplement.education.ko.at(-1).school} (${supplement.education.ko.at(-1).degree}) | 전공 | 해사안전환경 |
| 이메일 | ${identity.email} | | |

## 학력

${sections.eduTable}

## 경력

${sections.careerTableMd}

## 현재 주요 직위

${sections.currentTableMd}

## 위원회 · 자문 · 심사위원 활동 이력 (연대순)

${sections.committeeTableMd}

## 연구실적 (${data.researchRows.length}건)

${sections.researchTableMd}

## 저서

${sections.booksMd}

## 특허

${sections.patentsMd}

## 대표 논문

${repPapersMd}

전체 논문 ${data.paperRows.length}건은 \`ASSEMBLED_03_full_version.md\` 참고.

## 외부강연 · 초청발표 (${data.presentationRows.length}건)

${sections.presentationsMd}

## 수상

${sections.awardsMd}

---

작성일자: ____________________

제출기관: ____________________
`;
  writeFileSync(path_, content);
}

function writeAssembledFull(data, sections) {
  const path_ = path.join(RESUME_DB_DIR, "ASSEMBLED_03_full_version.md");
  const identity = supplement.identity.ko;
  const content = `# 이 력 서 (Full Version)

> \`MASTER_DB.md\`에서 자동 조립됨 — 확장식 전체 + 논문 ${data.paperRows.length}건 전체(학술대회 발표문 포함) + 부가설명. 사실상 최대치.
> **이 파일은 \`node scripts/generate-resume.mjs\`로 자동 생성됩니다 — 직접 손으로 고치지 마세요.**

## 일반사항

| 성명 | ${identity.nameDisplay} | 소속 | ${identity.org} |
|---|---|---|---|
| 직위 | ${identity.title} | 자격증 | ${identity.license} |
| 최종학교(학위) | ${supplement.education.ko.at(-1).school} (${supplement.education.ko.at(-1).degree}) | 전공 | 해사안전환경 |
| 이메일 | ${identity.email} | | |

## 학력

${sections.eduTable}

## 경력

${sections.careerTableMd}

## 현재 주요 직위

${sections.currentTableMd}

## 위원회 · 자문 · 심사위원 활동 이력 (연대순)

${sections.committeeTableMd}

## 연구실적 (${data.researchRows.length}건)

${sections.researchTableMd}

## 저서

${sections.booksMd}

## 특허

${sections.patentsMd}

## 논문 (${data.paperRows.length}건 전체)

${sections.papersMd}

## 외부강연 · 초청발표 (${data.presentationRows.length}건)

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

const koData = buildLocaleData("ko");
const mdSections = buildMasterDbSections(koData);
writeAssembledBasic(koData);
writeAssembledExtended(koData, mdSections);
writeAssembledFull(koData, mdSections);

const privateHtml = await buildHtml(privatePhone);
writeFileSync(path.join(RESUME_DB_DIR, "resume-form.html"), privateHtml);

const publicHtml = await buildHtml("");
writeFileSync(path.join(PUBLIC_DIR, "resume-form.html"), publicHtml);
writeFileSync(path.join(SITE_PUBLIC_DIR, `${WEB_SLUG}.html`), publicHtml);

console.log("Resume regenerated (ko/en/ja/es):");
console.log(" -", path.join(RESUME_DB_DIR, "resume-form.html"), privatePhone ? "(with phone)" : "(no private phone found — blank)");
console.log(" -", path.join(PUBLIC_DIR, "resume-form.html"), "(phone always blank)");
console.log(" -", path.join(SITE_PUBLIC_DIR, `${WEB_SLUG}.html`), `(live at https://drjangmaritime.com/${WEB_SLUG}.html once deployed)`);
console.log(" -", "ASSEMBLED_01/02/03.md (Korean only), MASTER_DB.md tables unchanged by this script — edit its prose by hand)");
