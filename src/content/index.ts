import type { Locale } from "@/i18n/config";

import { profile as profileEn, contactChannels as contactChannelsEn } from "./en/profile";
import { profile as profileKo, contactChannels as contactChannelsKo } from "./ko/profile";

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

import { researchProjects as researchProjectsEn, researchThemes as researchThemesEn } from "./en/research";
import { researchProjects as researchProjectsKo, researchThemes as researchThemesKo } from "./ko/research";

import { books as booksEn, papers as papersEn, patents as patentsEn } from "./en/publications";
import { books as booksKo, papers as papersKo, patents as patentsKo } from "./ko/publications";

import { awards as awardsEn, proofStats as proofStatsEn } from "./en/awards";
import { awards as awardsKo, proofStats as proofStatsKo } from "./ko/awards";

import { impactTimeline as impactTimelineEn, impactPillars as impactPillarsEn } from "./en/impact";
import { impactTimeline as impactTimelineKo, impactPillars as impactPillarsKo } from "./ko/impact";

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

const bundles = {
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
    patents: patentsEn,
    awards: awardsEn,
    proofStats: proofStatsEn,
    impactTimeline: impactTimelineEn,
    impactPillars: impactPillarsEn,
    expertiseAreas: expertiseAreasEn,
    toolsAndData: toolsAndDataEn,
    organizationServices: organizationServicesEn,
    oceanBridgeTracks: oceanBridgeTracksEn,
    contactPathways: contactPathwaysEn,
  },
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
    patents: patentsKo,
    awards: awardsKo,
    proofStats: proofStatsKo,
    impactTimeline: impactTimelineKo,
    impactPillars: impactPillarsKo,
    expertiseAreas: expertiseAreasKo,
    toolsAndData: toolsAndDataKo,
    organizationServices: organizationServicesKo,
    oceanBridgeTracks: oceanBridgeTracksKo,
    contactPathways: contactPathwaysKo,
  },
} satisfies Record<Locale, unknown>;

export type ContentBundle = (typeof bundles)["en"];

export function getContent(locale: Locale): ContentBundle {
  return bundles[locale];
}
