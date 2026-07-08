import { visaCountriesRaw } from "./visaCountries.raw.js";
import { fileProcessingCountriesData } from "./fileProcessingCountries.raw.js";

function formatCountry(c, category) {
  const facts = (c.facts || [])
    .filter((f) => f.label || f.value)
    .map((f) => `  - ${f.label ? f.label + ": " : ""}${f.value}`)
    .join("\n");

  const requirements = (c.requirements || []).map((r) => `  - ${r}`).join("\n");
  const description = (c.description || []).join(" ");

  return `
### ${c.name} (${category})
Facts:
${facts || "  (none listed)"}
Requirements:
${requirements || "  (none listed)"}
Details:
${description}
`.trim();
}

// One big text block — this is what gets pasted into Grok's system prompt.
export function buildKnowledgeBase() {
  const visaSection = visaCountriesRaw
    .map((c) => formatCountry(c, "Visa"))
    .join("\n\n");

  const processingSection = fileProcessingCountriesData
    .map((c) => formatCountry(c, "Visa File Processing"))
    .join("\n\n");

  return `${visaSection}\n\n${processingSection}`;
}
