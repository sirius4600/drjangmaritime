#!/usr/bin/env node
// Daily maritime-trends research job.
//
// Run by .github/workflows/daily-maritime-news.yml every day at 00:00 KST.
// Uses the Anthropic API (with the hosted web_search tool) to research real,
// current developments across the site's 8 trend categories, then appends
// well-sourced new cards to src/content/{en,ko}/news.ts.
//
// This script NEVER invents facts: the model is instructed to ground every
// item in a real page it fetched via web_search, and to return zero items
// on a day when nothing genuinely new turned up. It is fine — expected,
// even — for this script to make no changes on a given day.
//
// Required env var: ANTHROPIC_API_KEY
// Optional env var: ANTHROPIC_MODEL (defaults below; override if the
//   default snapshot has aged out — check https://docs.claude.com/en/docs/about-claude/models)

import Anthropic from "@anthropic-ai/sdk";
import fs from "node:fs";
import path from "node:path";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-5";
const MAX_NEW_ITEMS = 3;
const MARKER =
  "  // --- daily-append-marker: the daily research job inserts new items just above this line. Do not remove or edit it. ---";

const ROOT = process.cwd();
const EN_PATH = path.join(ROOT, "src/content/en/news.ts");
const KO_PATH = path.join(ROOT, "src/content/ko/news.ts");

const CATEGORIES = {
  imo: {
    desc: "IMO (International Maritime Organization) policy/regulatory news",
    sources: ["imo.org", "unctad.org"],
  },
  iala: {
    desc: "IALA (aids to navigation, VTS, e-Navigation standards body) news",
    sources: ["iala.int", "iala-aism.org"],
  },
  safety: {
    desc: "General maritime safety regulation, incidents, SOLAS/MSC decisions, inspections",
    sources: [
      "safety4sea.com",
      "gcaptain.com",
      "lloydslist.com",
      "gov.uk/maib (UK Marine Accident Investigation Branch reports)",
      "emsa.europa.eu (EU Maritime Safety Agency)",
      "uscg.mil",
    ],
  },
  mass: {
    desc: "Maritime Autonomous Surface Ships / autonomous shipping",
    sources: ["oneseaecosystem.net", "marinelink.com", "dnv.com", "rivieramm.com"],
  },
  cyber: {
    desc: "Maritime cybersecurity",
    sources: ["safety4sea.com", "dnv.com", "imo.org"],
  },
  green: {
    desc: "Green shipping, decarbonization, alternative fuels",
    sources: ["globalmaritimeforum.org", "spglobal.com", "tradewindsnews.com", "splash247.com"],
  },
  enav: {
    desc: "e-Navigation, VDES, digital navigation infrastructure",
    sources: ["vdes-alliance.org", "iala.int", "iho.int"],
  },
  seafarer: {
    desc: "Seafarer workforce, welfare, training, MLC, STCW",
    sources: ["itfseafarers.org", "nautilusint.org", "missiontoseafarers.org", "ics-shipping.org"],
  },
};

function setOutput(name, value) {
  const outputPath = process.env.GITHUB_OUTPUT;
  if (!outputPath) return;
  if (value.includes("\n")) {
    const delimiter = `EOF_${Math.random().toString(36).slice(2)}`;
    fs.appendFileSync(outputPath, `${name}<<${delimiter}\n${value}\n${delimiter}\n`);
  } else {
    fs.appendFileSync(outputPath, `${name}=${value}\n`);
  }
}

function readExisting(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const ids = [...text.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]);
  const urls = [...text.matchAll(/sourceUrl:\s*\n?\s*"([^"]+)"/g)].map((m) => m[1]);
  if (!text.includes(MARKER.trim())) {
    throw new Error(
      `Append marker not found in ${filePath}. The file layout may have changed — update MARKER in scripts/daily-news.mjs to match.`,
    );
  }
  return { text, ids, urls };
}

function kstDateString() {
  // This job is scheduled for 00:00 KST (15:00 UTC the previous day), but
  // compute KST explicitly rather than trusting the runner's clock/schedule
  // to have fired at exactly the right instant.
  const now = new Date();
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const y = kst.getUTCFullYear();
  const m = String(kst.getUTCMonth() + 1).padStart(2, "0");
  const d = String(kst.getUTCDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
}

function buildPrompt({ existingIds, existingUrls, dateStr }) {
  const categoryList = Object.entries(CATEGORIES)
    .map(([key, { desc, sources }]) => `- "${key}": ${desc}\n  Good sources for this category: ${sources.join(", ")}`)
    .join("\n");

  return `You are researching real, current maritime-industry news for a curated "Global Maritime Trends" card feed on a professional maritime-safety researcher's homepage (drjangmaritime.com). Use the web_search tool to find genuine, verifiable, recent (roughly last 1-2 weeks) developments.

Categories (use exactly these keys), each with the sources best suited to it — search those first, but comparable reputable maritime/trade press is fine too:
${categoryList}

General reputable maritime/trade press usable for any category: maritime-executive.com, seatrade-maritime.com, rivieramm.com, hellenicshippingnews.com, bimco.org, tradewindsnews.com, splash247.com, lloydslist.com, and P&I club sites (westpandi.com, britanniapandi.com, etc.). Prefer official/primary sources (regulators, standards bodies, accident-investigation agencies) over secondary press when both cover the same story.

Hard rules:
- Never invent a fact, figure, date, or quote. Every claim in an item must trace back to a page you actually fetched via web_search this run.
- Do not duplicate any existing item. Existing item ids: ${JSON.stringify(existingIds)}. Existing sourceUrls: ${JSON.stringify(existingUrls)}. Skip any story matching one of these, even if you'd word it differently.
- Quality over quantity. Return between 0 and ${MAX_NEW_ITEMS} items total across all categories. Returning 0 items is completely fine and expected on a day when nothing genuinely new turned up — do not force an item into every category.
- Prefer varying which categories get coverage across days, but only when there's real news; never pick a stale or weak story just to "cover" a category.
- title/summary must be written naturally in each language (not a literal word-for-word translation of each other), matching a concise, factual, no-hype tone. summary: 2-4 sentences with concrete facts/dates/numbers.
- date field: use "${dateStr}" for every item (today, KST).
- id: unique kebab-case slug, not colliding with the existing ids listed above.
- sourceUrl: the real, exact URL of the page you fetched.

Respond with ONLY a JSON array (no prose, no markdown fences) matching this shape:
[
  {
    "id": "kebab-case-slug",
    "category": "imo",
    "date": "${dateStr}",
    "source": "Publication or org name",
    "sourceUrl": "https://...",
    "en": { "title": "...", "summary": "..." },
    "ko": { "title": "...", "summary": "..." }
  }
]

If there is nothing genuinely new and well-sourced to report today, respond with exactly: []`;
}

function extractJsonArray(text) {
  const start = text.indexOf("[");
  const end = text.lastIndexOf("]");
  if (start === -1 || end === -1 || end < start) {
    throw new Error(`Could not find a JSON array in model output:\n${text}`);
  }
  return JSON.parse(text.slice(start, end + 1));
}

function tsStringLiteral(value) {
  return JSON.stringify(value);
}

function serializeEntry(item, lang) {
  const copy = item[lang];
  return (
    `  {\n` +
    `    id: ${tsStringLiteral(item.id)},\n` +
    `    category: ${tsStringLiteral(item.category)},\n` +
    `    title: ${tsStringLiteral(copy.title)},\n` +
    `    summary: ${tsStringLiteral(copy.summary)},\n` +
    `    date: ${tsStringLiteral(item.date)},\n` +
    `    source: ${tsStringLiteral(item.source)},\n` +
    `    sourceUrl: ${tsStringLiteral(item.sourceUrl)},\n` +
    `  },\n`
  );
}

function insertItems(filePath, entriesText) {
  const { text } = readExisting(filePath);
  const markerTrimmed = MARKER.trim();
  const idx = text.indexOf(markerTrimmed);
  const updated = text.slice(0, idx) + entriesText + text.slice(idx);
  fs.writeFileSync(filePath, updated);
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY is not set.");
  }

  const { ids: existingIds, urls: existingUrls } = readExisting(EN_PATH);
  readExisting(KO_PATH); // validate marker presence, ids/urls should match EN

  const dateStr = kstDateString();
  const prompt = buildPrompt({ existingIds, existingUrls, dateStr });

  const anthropic = new Anthropic();

  const response = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 4096,
    tools: [{ type: "web_search_20250305", name: "web_search" }],
    messages: [{ role: "user", content: prompt }],
  });

  const textBlocks = response.content.filter((b) => b.type === "text");
  const finalText = textBlocks.map((b) => b.text).join("\n");
  const items = extractJsonArray(finalText);

  const validCategories = new Set(Object.keys(CATEGORIES));
  const seen = new Set();
  const newItems = items.filter((item) => {
    if (!item || typeof item !== "object") return false;
    if (!validCategories.has(item.category)) return false;
    if (existingIds.includes(item.id)) return false;
    if (existingUrls.includes(item.sourceUrl)) return false;
    if (!item.en?.title || !item.en?.summary || !item.ko?.title || !item.ko?.summary) return false;
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  }).slice(0, MAX_NEW_ITEMS);

  if (newItems.length === 0) {
    console.log("No new maritime-trend items today — nothing to publish.");
    setOutput("item_count", "0");
    setOutput("item_titles", "");
    return;
  }

  insertItems(EN_PATH, newItems.map((it) => serializeEntry(it, "en")).join(""));
  insertItems(KO_PATH, newItems.map((it) => serializeEntry(it, "ko")).join(""));

  const summary = newItems.map((it) => `- [${it.category}] ${it.en.title}\n  ${it.sourceUrl}`).join("\n");
  console.log(`Added ${newItems.length} item(s):\n${summary}`);
  setOutput("item_count", String(newItems.length));
  setOutput("item_titles", summary);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
