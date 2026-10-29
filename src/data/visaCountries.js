import { visaCountriesRaw } from "./visaCountries.raw.js";
import { newVisaCountriesRaw } from "./newVisaCountries.raw.js";
import { osPrices, priceFacts, stripOldFeeFacts } from "./pricing.js";
import { officialSources } from "./officialSources.js";

// Real Unsplash photos, one per country's most recognizable landmark/place.
// Tajikistan & Kyrgyzstan are temporary placeholders (Uzbekistan's Registan) —
// swap these two once you pick specific shots.
const countryImages = {
  "malaysia-visa": "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=65&w=600&auto=format&fit=crop",
  "saudi-arabia-visa": "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=65&w=600&auto=format&fit=crop",
  "singapore-visa": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=65&w=600&auto=format&fit=crop",
  "thailand-visa": "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=65&w=600&auto=format&fit=crop",
  "turkey-visa": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=65&w=600&auto=format&fit=crop",
  "hongkong-visa": "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=65&w=600&auto=format&fit=crop",
  "kazakhstan": "https://images.unsplash.com/photo-1609779311973-01f5e14ba1a0?q=65&w=600&auto=format&fit=crop",
  "indonesia-visa": "https://images.unsplash.com/photo-1556375413-f6cdc5e17398?q=65&w=600&auto=format&fit=crop",
  "azerbaijan-visa": "https://images.unsplash.com/photo-1753706874051-718700368d6b?q=65&w=600&auto=format&fit=crop",
  "nepal": "https://images.unsplash.com/photo-1623268964161-a4d07243f8cc?q=65&w=600&auto=format&fit=crop",
  "egypt-visa": "https://images.unsplash.com/photo-1679594384071-3b346dc70da8?q=65&w=600&auto=format&fit=crop",
  "vietnam-visa": "https://images.unsplash.com/photo-1761127138372-cad230082b19?q=65&w=600&auto=format&fit=crop",
  "uzbekistan-visa": "https://images.unsplash.com/photo-1664602078796-68ee76b3fc59?q=65&w=600&auto=format&fit=crop",
  "tajikistan-visa": "https://images.unsplash.com/photo-1726547507018-606c37f09b82?q=65&w=600&auto=format&fit=crop", // Iskanderkul lake, Fann Mountains
  "kyrgyzstan-visa": "https://images.unsplash.com/photo-1592639296319-4a46ea0f0008?q=65&w=600&auto=format&fit=crop", // near Bishkek
  "china-visa": "https://images.unsplash.com/photo-1698932848612-a403da1265c8?q=65&w=600&auto=format&fit=crop", // Great Wall
  "philippine-visa": "https://images.unsplash.com/photo-1515511210479-bc02c48ec763?q=65&w=600&auto=format&fit=crop", // Chocolate Hills
  "sri-lanka-visa": "https://images.unsplash.com/photo-1704797390901-e1d20bd46647?q=65&w=600&auto=format&fit=crop", // Sigiriya
  "cambodia-visa": "https://images.unsplash.com/photo-1566706546199-a93ba33ce9f7?q=65&w=600&auto=format&fit=crop", // Angkor Wat
  "japan-visa": "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=65&w=600&auto=format&fit=crop", // Mt Fuji & Chureito Pagoda
  "south-korea-visa": "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=65&w=600&auto=format&fit=crop", // Seoul at night
  "south-africa-visa": "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=65&w=600&auto=format&fit=crop", // Cape Town & Table Mountain
  "morocco-visa": "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=65&w=600&auto=format&fit=crop", // Kasbah
  "kenya-visa": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=65&w=600&auto=format&fit=crop", // Giraffe at sunset
  "uganda-visa": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=65&w=600&auto=format&fit=crop", // Acacia savanna
  "ethiopia-visa": "https://images.unsplash.com/photo-1621414050946-1b936a78491f?q=65&w=600&auto=format&fit=crop", // Highland trek
  "tanzania-visa": "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=65&w=600&auto=format&fit=crop", // Safari
  "zambia-visa": "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=65&w=600&auto=format&fit=crop", // Elephant
  "zimbabwe-visa": "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=65&w=600&auto=format&fit=crop", // Highlands — swap for Victoria Falls
  "bahrain-visa": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=65&w=600&auto=format&fit=crop", // generic travel — swap for a Manama shot
  "bangladesh-visa": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=65&w=600&auto=format&fit=crop", // generic travel — swap for Dhaka shot
};

// "Visa" category — original /visa/ slugs plus the countries added in 2026.
// Prices come from pricing.js and replace any fee rows scraped from the old site.
const allVisaRaw = [...visaCountriesRaw, ...newVisaCountriesRaw];

function withPricing(c) {
  const entry = osPrices[c.slug];
  return {
    ...c,
    facts: entry ? [...priceFacts(entry), ...stripOldFeeFacts(c.facts)] : c.facts,
    priceEntry: entry || null,
    officialSite: c.officialSite || officialSources[c.slug] || null,
  };
}

export const visaCountries = allVisaRaw.map((c) => ({
  ...withPricing(c),
  summary: c.description[0] || c.metaDescription,
  image: countryImages[c.slug] || `https://picsum.photos/seed/${c.slug}/1200/800`,
}));

// Countries that appear in the "Visa" nav menu on the original site,
// but whose actual page lives under /schengen-visa-file-processing/
export const visaMenuCrossListed = [];

// Pulls a display price + currency out of the facts array (first fact whose
// label mentions "fee" and whose value has digits). Used only for countries
// that are not in the price list.
function extractPrice(facts) {
  const feeFact = facts.find((f) => /fee/i.test(f.label) && /\d/.test(f.value));
  if (!feeFact) return { price: null, pricePeriod: "Visa" };
  const match = feeFact.value.match(/([\d,]+)\s*\/?\s*(Pkr|USD)?/i);
  const amount = match ? parseInt(match[1].replace(/,/g, ""), 10) : null;
  const currency = (match && match[2]) || "Pkr";
  return { price: amount, pricePeriod: `${currency.toUpperCase()} / Visa` };
}

function extractOverview(metaDescription) {
  return metaDescription.replace(/\.?\s*Apply\.?$/i, ".").trim();
}

export const visaCountryCards = allVisaRaw.map((c) => {
  const entry = osPrices[c.slug];
  const { price, pricePeriod } = entry
    ? { price: entry.price, pricePeriod: `${entry.currency} / ${entry.options ? "From" : "Visa"}` }
    : extractPrice(c.facts);
  return {
    slug: c.slug,
    name: c.name,
    location: `Islamabad, Pakistan • ${c.name} Visa`,
    overview: extractOverview(c.metaDescription),
    price,
    pricePeriod,
    img: countryImages[c.slug] || `https://picsum.photos/seed/${c.slug}/1200/800`,
  };
});
