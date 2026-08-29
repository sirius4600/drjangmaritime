#!/usr/bin/env node
// Renders the (already-regenerated) private resume-form.html straight to a
// PDF file and opens it — no manual "Ctrl+P, pick Save as PDF, remember to
// turn off headers/footers" steps, and (unlike Chrome's native print dialog)
// gives us real control over page numbering: page 1 gets no number, page 2+
// are numbered, which Chrome's own header/footer toggle cannot do (it's
// on/off for every page, no per-page override).
//
// Prints whatever the page shows on load — Korean, 기본양식 (Basic), all
// sections shown, dob/phone/email extra fields off — i.e. the same default
// view you'd see opening resume-form.html fresh in a browser with no clicks.
// For any other language/tier/section combination, open
// private-source-docs/resume-database/resume-form.html directly in a
// browser, make your selections, and print manually with Ctrl+P (the
// headers/footers checkbox still needs a one-time manual toggle there, as
// before — see the note in MEMORY / prior conversation).
//
// Run via: node scripts/print-resume.mjs  (invoked by 이력서 출력.bat, after
// it regenerates resume-form.html via generate-resume.mjs)

import { existsSync, writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { exec } from "node:child_process";
import path from "node:path";
import puppeteer from "puppeteer";
import { PDFDocument } from "pdf-lib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SOURCE_HTML = path.join(ROOT, "private-source-docs/resume-database/resume-form.html");

if (!existsSync(SOURCE_HTML)) {
  console.error(`Resume HTML not found at ${SOURCE_HTML} — run generate-resume.mjs first.`);
  process.exit(1);
}

const pad = (n) => String(n).padStart(2, "0");
const today = new Date();
const dateStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
let outputPath = path.join(ROOT, `Unkyu-Jang-Resume-Basic-${dateStr}.pdf`);

const browser = await puppeteer.launch({ headless: "new" });
try {
  const page = await browser.newPage();
  // "load" (not "networkidle0") — the Google Fonts <link> is a nice-to-have
  // (CSS already declares system-font fallbacks), not something worth
  // hanging the whole print on on a slow/unavailable network.
  await page.goto(pathToFileURL(SOURCE_HTML).href, { waitUntil: "load", timeout: 15000 });

  // Auto-fill 작성일자 (mirrors the page's own on-load script) so the PDF
  // doesn't ship a blank date field.
  await page.evaluate(() => {
    document.querySelectorAll('.signoff input[id^="date-"]').forEach((el) => {
      if (!el.value) {
        const d = new Date();
        const p = (n) => String(n).padStart(2, "0");
        el.value = `${d.getFullYear()}. ${p(d.getMonth() + 1)}. ${p(d.getDate())}.`;
      }
    });
  });

  // Puppeteer's page.pdf() has no per-page-conditional footer template, so
  // page 1 (no number) and the rest (numbered) are rendered as two separate
  // passes with identical margins — pagination is deterministic from the
  // same content, so page N in both passes breaks at the same place — then
  // stitched together. This keeps page 1 genuinely footer-free (no hidden
  // text under a white patch — matters for a document meant to be signed).
  const margin = { top: "16mm", right: "15mm", bottom: "22mm", left: "15mm" };
  const footerTemplate = `
    <div style="width:100%; font-size:9px; font-family:'Source Sans 3',sans-serif; color:#8b8880; text-align:center; padding-top:4px;">
      <span class="pageNumber"></span>
    </div>`;

  // Sequential, not Promise.all — concurrent page.pdf() calls on the same
  // page hung indefinitely in testing.
  const plainBytes = await page.pdf({ format: "A4", printBackground: true, margin, displayHeaderFooter: false });
  const numberedBytes = await page.pdf({ format: "A4", printBackground: true, margin, displayHeaderFooter: true, headerTemplate: "<span></span>", footerTemplate });

  const plainDoc = await PDFDocument.load(plainBytes);
  const numberedDoc = await PDFDocument.load(numberedBytes);
  const pageCount = numberedDoc.getPageCount();

  const finalDoc = await PDFDocument.create();
  const [firstPage] = await finalDoc.copyPages(plainDoc, [0]);
  finalDoc.addPage(firstPage);
  if (pageCount > 1) {
    const restPages = await finalDoc.copyPages(numberedDoc, Array.from({ length: pageCount - 1 }, (_, i) => i + 1));
    restPages.forEach((p) => finalDoc.addPage(p));
  }
  const pdfBytes = await finalDoc.save();
  let finalPath = outputPath;
  try {
    writeFileSync(finalPath, pdfBytes);
  } catch (err) {
    if (err.code !== "EBUSY") throw err;
    // Today's file is still open in a viewer (common — same date-based
    // name every run) — fall back to a time-suffixed name instead of
    // failing the whole print.
    const pad2 = (n) => String(n).padStart(2, "0");
    const now = new Date();
    finalPath = outputPath.replace(/\.pdf$/, `-${pad2(now.getHours())}${pad2(now.getMinutes())}.pdf`);
    writeFileSync(finalPath, pdfBytes);
  }

  console.log(`PDF saved: ${finalPath} (${pageCount} page${pageCount === 1 ? "" : "s"})`);
  outputPath = finalPath;
} finally {
  await browser.close();
}

if (process.platform === "win32") {
  exec(`start "" "${outputPath}"`);
} else if (process.platform === "darwin") {
  exec(`open "${outputPath}"`);
} else {
  exec(`xdg-open "${outputPath}"`);
}
