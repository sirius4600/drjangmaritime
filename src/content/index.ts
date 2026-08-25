import type { Locale } from "@/i18n/config";

import { profile as profileEn, contactChannels as contactChannelsEn } from "./en/profile";
import { profile as profileKo, contactChannels as contactChannelsKo } from "./ko/profile";
import { profile as profileJa, contactChannels as contactChannelsJa } from "./ja/profile";
import { profile as profileEs, contactChannels as contactChannelsEs } from "./es/profile";

import {
  experience as experienceEn,
  education as educationEn,
  currentAffiliations as currentAffiliationsEn,
} from "./en/experience";
import {
  experience as experienceKo,
  education as educationKo,
  currentAffiliations as currentAffiliationsKo,
} from "./ko/experience";
import {
  experience as experienceJa,
  education as educationJa,
  currentAffiliations as currentAffiliationsJa,
} from "./ja/experience";
import {
  experience as experienceEs,
  education as educationEs,
  currentAffiliations as currentAffiliationsEs,
} from "./es/experience";

import { researchProjects as researchProjectsEn, researchThemes as researchThemesEn } from "./en/research";
import { researchProjects as researchProjectsKo, researchThemes as researchThemesKo } from "./ko/research";
import { researchProjects as researchProjectsJa, researchThemes as researchThemesJa } from "./ja/research";
import { researchProjects as researchProjectsEs, researchThemes as researchThemesEs } from "./es/research";

import {
  books as booksEn,
  papers as papersEn,
  presentations as presentationsEn,
  patents as patentsEn,
} from "./en/publications";
import {
  books as booksKo,
  papers as papersKo,
  presentations as presentationsKo,
  patents as patentsKo,
} from "./ko/publications";
import {
  books as booksJa,
  papers as papersJa,
  presentations as presentationsJa,
  patents as patentsJa,
} from "./ja/publications";
import {
  books as booksEs,
  papers as papersEs,
  presentations as presentationsEs,
  patents as patentsEs,
} from "./es/publications";

import { awards as awardsEn, proofStats as proofStatsEn } from "./en/awards";
import { awards as awardsKo, proofStats as proofStatsKo } from "./ko/awards";
import { awards as awardsJa, proofStats as proofStatsJa } from "./ja/awards";
import { awards as awardsEs, proofStats as proofStatsEs } from "./es/awards";

import { impactTimeline as impactTimelineEn, impactPillars as impactPillarsEn } from "./en/impact";
import { impactTimeline as impactTimelineKo, impactPillars as impactPillarsKo } from "./ko/impact";
import { impactTimeline as impactTimelineJa, impactPillars as impactPillarsJa } from "./ja/impact";
import { impactTimeline as impactTimelineEs, impactPillars as impactPillarsEs } from "./es/impact";

import { newsItems as newsItemsEn } from "./en/news";
import { newsItems as newsItemsKo } from "./ko/news";
import { newsItems as newsItemsJa } from "./ja/news";
import { newsItems as newsItemsEs } from "./es/news";

import { dailyLogEntries as dailyLogEntriesEn } from "./en/dailyLog";
import { dailyLogEntries as dailyLogEntriesKo } from "./ko/dailyLog";
import { dailyLogEntries as dailyLogEntriesJa } from "./ja/dailyLog";
import { dailyLogEntries as dailyLogEntriesEs } from "./es/dailyLog";

import {
  expertiseAreas as expertiseAreasEn,
  toolsAndData as toolsAndDataEn,
  organizationServices as organizationServicesEn,
  oceanBridgeTracks as oceanBridgeTracksEn,
  contactPathways as contactPathwaysEn,
} from "./en/expertise";
import {
  expertiseAreas as expertiseAreasKo,
  toolsAndData as toolsAndDataKo,
  organizationServices as organizationServicesKo,
  oceanBridgeTracks as oceanBridgeTracksKo,
  contactPathways as contactPathwaysKo,
} from "./ko/expertise";
import {
  expertiseAreas as expertiseAreasJa,
  toolsAndData as toolsAndDataJa,
  organizationServices as organizationServicesJa,
  oceanBridgeTracks as oceanBridgeTracksJa,
  contactPathways as contactPathwaysJa,
} from "./ja/expertise";
import {
  expertiseAreas as expertiseAreasEs,
  toolsAndData as toolsAndDataEs,
  organizationServices as organizationServicesEs,
  oceanBridgeTracks as oceanBridgeTracksEs,
  contactPathways as contactPathwaysEs,
} from "./es/expertise";

const bundles = {
  ko: {
    profile: profileKo,
    contactChannels: contactChannelsKo,
    experience: experienceKo,
    education: educationKo,
    currentAffiliations: currentAffiliationsKo,
    researchProjects: researchProjectsKo,
    researchThemes: researchThemesKo,
    books: booksKo,
    papers: papersKo,
    presentations: presentationsKo,
    patents: patentsKo,
    awards: awardsKo,
    proofStats: proofStatsKo,
    impactTimeline: impactTimelineKo,
    impactPillars: impactPillarsKo,
    newsItems: newsItemsKo,
    dailyLogEntries: dailyLogEntriesKo,
    expertiseAreas: expertiseAreasKo,
    toolsAndData: toolsAndDataKo,
    organizationServices: organizationServicesKo,
    oceanBridgeTracks: oceanBridgeTracksKo,
    contactPathways: contactPathwaysKo,
  },
  en: {
    profile: profileEn,
    contactChannels: contactChannelsEn,
    experience: experienceEn,
    education: educationEn,
    currentAffiliations: currentAffiliationsEn,
    researchProjects: researchProjectsEn,
    researchThemes: researchThemesEn,
    books: booksEn,
    papers: papersEn,
    presentations: presentationsEn,
    patents: patentsEn,
    awards: awardsEn,
    proofStats: proofStatsEn,
    impactTimeline: impactTimelineEn,
    impactPillars: impactPillarsEn,
    newsItems: newsItemsEn,
    dailyLogEntries: dailyLogEntriesEn,
    expertiseAreas: expertiseAreasEn,
    toolsAndData: toolsAndDataEn,
    organizationServices: organizationServicesEn,
    oceanBridgeTracks: oceanBridgeTracksEn,
    contactPathways: contactPathwaysEn,
  },
  ja: {
    profile: profileJa,
    contactChannels: contactChannelsJa,
    experience: experienceJa,
    education: educationJa,
    currentAffiliations: currentAffiliationsJa,
    researchProjects: researchProjectsJa,
    researchThemes: researchThemesJa,
    books: booksJa,
    papers: papersJa,
    presentations: presentationsJa,
    patents: patentsJa,
    awards: awardsJa,
    proofStats: proofStatsJa,
    impactTimeline: impactTimelineJa,
    impactPillars: impactPillarsJa,
    newsItems: newsItemsJa,
    dailyLogEntries: dailyLogEntriesJa,
    expertiseAreas: expertiseAreasJa,
    toolsAndData: toolsAndDataJa,
    organizationServices: organizationServicesJa,
    oceanBridgeTracks: oceanBridgeTracksJa,
    contactPathways: contactPathwaysJa,
  },
  es: {
    profile: profileEs,
    contactChannels: contactChannelsEs,
    experience: experienceEs,
    education: educationEs,
    currentAffiliations: currentAffiliationsEs,
    researchProjects: researchProjectsEs,
    researchThemes: researchThemesEs,
    books: booksEs,
    papers: papersEs,
    presentations: presentationsEs,
    patents: patentsEs,
    awards: awardsEs,
    proofStats: proofStatsEs,
    impactTimeline: impactTimelineEs,
    impactPillars: impactPillarsEs,
    newsItems: newsItemsEs,
    dailyLogEntries: dailyLogEntriesEs,
    expertiseAreas: expertiseAreasEs,
    toolsAndData: toolsAndDataEs,
    organizationServices: organizationServicesEs,
    oceanBridgeTracks: oceanBridgeTracksEs,
    contactPathways: contactPathwaysEs,
  },
} satisfies Record<Locale, unknown>;

export type ContentBundle = (typeof bundles)["en"];

export function getContent(locale: Locale): ContentBundle {
  return bundles[locale];
}
