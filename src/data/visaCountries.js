import { visaCountriesRaw } from "./visaCountries.raw";

// Real Unsplash photos, one per country's most recognizable landmark/place.
// Tajikistan & Kyrgyzstan are temporary placeholders (Uzbekistan's Registan) —
// swap these two once you pick specific shots.
const countryImages = {
  "malaysia-visa": "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200&auto=format&fit=crop",
  "saudi-arabia-visa": "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1200&auto=format&fit=crop",
  "singapore-visa": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop",
  "thailand-visa": "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop",
  "turkey-visa": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200&auto=format&fit=crop",
  "hongkong-visa": "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=1200&auto=format&fit=crop",
  "kazakhstan": "https://images.unsplash.com/photo-1609779311973-01f5e14ba1a0?q=80&w=1200&auto=format&fit=crop",
  "indonesia-visa": "https://images.unsplash.com/photo-1556375413-f6cdc5e17398?q=80&w=1200&auto=format&fit=crop",
  "azerbaijan-visa": "https://images.unsplash.com/photo-1753706874051-718700368d6b?q=80&w=1200&auto=format&fit=crop",
  "nepal": "https://images.unsplash.com/photo-1623268964161-a4d07243f8cc?q=80&w=1200&auto=format&fit=crop",
  "egypt-visa": "https://images.unsplash.com/photo-1679594384071-3b346dc70da8?q=80&w=1200&auto=format&fit=crop",
  "vietnam-visa": "https://images.unsplash.com/photo-1761127138372-cad230082b19?q=80&w=1200&auto=format&fit=crop",
  "uzbekistan-visa": "https://images.unsplash.com/photo-1664602078796-68ee76b3fc59?q=80&w=1200&auto=format&fit=crop",
  "tajikistan-visa": "https://images.unsplash.com/photo-1726547507018-606c37f09b82?q=80&w=1200&auto=format&fit=crop", // Iskanderkul lake, Fann Mountains
  "kyrgyzstan-visa": "https://images.unsplash.com/photo-1592639296319-4a46ea0f0008?q=80&w=1200&auto=format&fit=crop", // near Bishkek
  "china-visa": "https://images.unsplash.com/photo-1698932848612-a403da1265c8?q=80&w=1200&auto=format&fit=crop", // Great Wall
  "philippine-visa": "https://images.unsplash.com/photo-1515511210479-bc02c48ec763?q=80&w=1200&auto=format&fit=crop", // Chocolate Hills
  "sri-lanka-visa": "https://images.unsplash.com/photo-1704797390901-e1d20bd46647?q=80&w=1200&auto=format&fit=crop", // Sigiriya
  "cambodia-visa": "https://images.unsplash.com/photo-1566706546199-a93ba33ce9f7?q=80&w=1200&auto=format&fit=crop", // Angkor Wat
};

// "Visa" category — matches original site's /visa/ menu + slugs
export const visaCountries = visaCountriesRaw.map((c) => ({
  ...c,
  summary: c.description[0] || c.metaDescription,
  image: countryImages[c.slug] || `https://picsum.photos/seed/${c.slug}/1200/800`,
}));

// Countries that appear in the "Visa" nav menu on the original site,
// but whose actual page lives under /schengen-visa-file-processing/
export const visaMenuCrossListed = [];

// Pulls a display price + currency out of the facts array (first fact whose
// label mentions "fee" and whose value has digits).
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

export const visaCountryCards = visaCountriesRaw.map((c) => {
  const { price, pricePeriod } = extractPrice(c.facts);
  return {
    slug: c.slug,
    name: c.name,
    location: `Islamabad, Pakistan • ${c.name} Embassy`,
    overview: extractOverview(c.metaDescription),
    price,
    pricePeriod,
    img: countryImages[c.slug] || `https://picsum.photos/seed/${c.slug}/1200/800`,
  };
});