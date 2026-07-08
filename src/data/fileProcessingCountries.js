import { fileProcessingCountriesData } from "./fileProcessingCountries.raw";
import { regionMap } from "./regionMap";

// "Visa File Processing" category — matches /schengen-visa-file-processing/ slugs
export const fileProcessingCountries = fileProcessingCountriesData.map((c) => ({
  ...c,
  region: regionMap[c.slug] || "Non-Schengen",
  summary: c.description[0] || c.metaDescription,
}));

export const schengenDocList = [
  "Valid passport (6 months validity, 2 blank pages, copies of old visas/passports)",
  "Visa application form, duly signed",
  "Recent passport-size photographs (Schengen specification)",
  "Cover letter addressed to the Embassy/Consulate",
  "Confirmed round-trip flight reservation",
  "Hotel booking confirmation for the full stay",
  "Travel insurance covering the Schengen area (minimum €30,000)",
  "Bank statement (last 6 months) and proof of financial standing",
  "Employment letter / business documents / student enrolment proof",
  "NIC copy and family registration certificate (if applicable)",
];
