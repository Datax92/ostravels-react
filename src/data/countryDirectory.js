import { visaCountries } from "./visaCountries.js";
import { fileProcessingCountries } from "./fileProcessingCountries.js";
import { countryMeta, defaultMeta } from "./fileProcessingMeta.js";

// One entry per destination country, used by the keyword landing pages:
//   /{key}-visa-for-pakistani/           → "Malaysia visa for Pakistani"
//   /best-travel-agency-for-{key}-visa/  → "best travel agency for Malaysia visa"
// Both point back to the main service page (servicePath), which stays the
// primary page for each country.

const KEY_OVERRIDES = {
  "United Kingdom (UK)": "uk",
  "United States (USA)": "usa",
};

const SHORT_NAMES = {
  "United Kingdom (UK)": "UK",
  "United States (USA)": "USA",
};

export function countryKey(name) {
  return KEY_OVERRIDES[name] || name.toLowerCase().replace(/[()]/g, "").trim().replace(/\s+/g, "-");
}

export const guidePath = (key) => `/${key}-visa-for-pakistani/`;
export const agencyPath = (key) => `/best-travel-agency-for-${key}-visa/`;

const seen = new Set();
export const countryDirectory = [];

for (const c of visaCountries) {
  const key = countryKey(c.name);
  if (seen.has(key)) continue;
  seen.add(key);
  countryDirectory.push({
    key,
    name: SHORT_NAMES[c.name] || c.name,
    category: "visa",
    servicePath: `/visa/${c.slug}/`,
    image: c.image,
    data: c,
  });
}

for (const c of fileProcessingCountries) {
  const key = countryKey(c.name);
  if (seen.has(key)) continue;
  seen.add(key);
  countryDirectory.push({
    key,
    name: SHORT_NAMES[c.name] || c.name,
    category: c.region === "Schengen" ? "schengen" : "file",
    servicePath: `/schengen-visa-file-processing/${c.slug}/`,
    image: (countryMeta[c.slug] || defaultMeta).img,
    data: c,
  });
}

export const countryByKey = Object.fromEntries(countryDirectory.map((c) => [c.key, c]));

// Lookup from a service-page slug to its directory entry (so service pages
// can link to their guide / agency landing pages).
export function directoryEntryForName(name) {
  return countryByKey[countryKey(name)] || null;
}
