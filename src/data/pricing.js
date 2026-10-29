// ============================================================================
// O.S TRAVEL & TOURS — CURRENT PRICE LIST (PKR unless stated)
// Single source of truth for every price shown on the site: country cards,
// "Visa Snapshot" sidebars, landing pages, prerendered HTML and the sitemap.
// Update a number here and it changes everywhere.
//
// Keys are page slugs. A country that has both a /visa/ page and a
// /schengen-visa-file-processing/ page lists both slugs.
// ============================================================================

export const PRICES_UPDATED = "October 2026";
export const PRICES_UPDATED_ISO = "2026-10-29"; // used as sitemap lastmod

const SCHENGEN_FILE = {
  price: 30000,
  currency: "PKR",
  label: "Schengen Visa File Processing",
  note: "Embassy / VFS / BLS visa fee is paid separately at submission.",
};

export const osPrices = {
  // ── Asia ────────────────────────────────────────────────────────────────
  "malaysia-visa": { price: 18000, currency: "PKR", label: "Malaysia Visa" },
  "thailand-visa": { price: 16000, currency: "PKR", label: "Thailand Tourist Visa" },
  "indonesia-visa": {
    price: 30000,
    currency: "PKR",
    label: "Indonesia Visa",
    options: [
      { label: "Indonesia e-Visa", price: 30000 },
      { label: "Indonesia Sticker Visa", price: 30000 },
    ],
  },
  "hongkong-visa": { price: 25000, currency: "PKR", label: "Hong Kong Visa" },
  "hong-kong-visa": { price: 25000, currency: "PKR", label: "Hong Kong Visa File" },
  "china-visa": { price: 25000, currency: "PKR", label: "China Visa" },
  "philippine-visa": { price: 25000, currency: "PKR", label: "Philippines Visa" },
  "vietnam-visa": { price: 15000, currency: "PKR", label: "Vietnam Visa" },
  "cambodia-visa": { price: 15000, currency: "PKR", label: "Cambodia e-Visa" },
  "sri-lanka-visa": { price: 10000, currency: "PKR", label: "Sri Lanka ETA" },
  nepal: { price: 15000, currency: "PKR", label: "Nepal Visa" },
  "japan-visa": { price: 20000, currency: "PKR", label: "Japan Visa File Processing" },
  "south-korea-visa": { price: 25000, currency: "PKR", label: "South Korea Visa File Processing" },
  "bangladesh-visa": { price: 45000, currency: "PKR", label: "Bangladesh Visa" },

  // ── Central Asia & Caucasus ─────────────────────────────────────────────
  "azerbaijan-visa": {
    price: 15000,
    currency: "PKR",
    label: "Azerbaijan e-Visa",
    options: [
      { label: "Azerbaijan e-Visa (Normal)", price: 15000 },
      { label: "Azerbaijan e-Visa (Urgent)", price: 28000 },
    ],
  },
  kazakhstan: { price: 25000, currency: "PKR", label: "Kazakhstan Visa" },
  "tajikistan-visa": { price: 160, currency: "USD", label: "Tajikistan Visa" },
  "uzbekistan-visa": { price: 150, currency: "USD", label: "Uzbekistan Visa" },

  // ── Middle East & North Africa ──────────────────────────────────────────
  "turkey-visa": {
    price: 15000,
    currency: "PKR",
    label: "Turkey Visa File Processing",
    note: "Embassy / visa centre fee is paid separately.",
  },
  turkey: {
    price: 15000,
    currency: "PKR",
    label: "Turkey Visa File Processing",
    note: "Embassy / visa centre fee is paid separately.",
  },
  "egypt-visa": { price: 25000, currency: "PKR", label: "Egypt Visa" },
  "morocco-visa": { price: 20000, currency: "PKR", label: "Morocco Visa" },
  "bahrain-visa": {
    price: 25000,
    currency: "PKR",
    label: "Bahrain e-Visa",
    options: [
      { label: "Bahrain e-Visa — 14 Days", price: 25000 },
      { label: "Bahrain e-Visa — 1 Month", price: 38000 },
      { label: "Bahrain e-Visa — 3 Months", price: 65000 },
    ],
  },

  // ── Africa ──────────────────────────────────────────────────────────────
  "south-africa-visa": { price: 25000, currency: "PKR", label: "South Africa Visa File Processing" },
  "kenya-visa": { price: 25000, currency: "PKR", label: "Kenya eTA" },
  "uganda-visa": { price: 25000, currency: "PKR", label: "Uganda e-Visa" },
  "ethiopia-visa": { price: 25000, currency: "PKR", label: "Ethiopia e-Visa" },
  "tanzania-visa": { price: 30000, currency: "PKR", label: "Tanzania e-Visa" },
  "zambia-visa": { price: 20000, currency: "PKR", label: "Zambia e-Visa" },
  "zimbabwe-visa": { price: 20000, currency: "PKR", label: "Zimbabwe e-Visa" },

  // ── Western file processing (service charges only) ──────────────────────
  "united-kingdom-uk-visa": {
    price: 55000,
    currency: "PKR",
    label: "UK Visa File Processing",
    note: "UK Home Office visa fee and VFS charges are paid separately.",
  },
  "united-states-usa-visa": {
    price: 30000,
    currency: "PKR",
    label: "USA Visa File Processing",
    note: "US MRV (visa application) fee is paid separately.",
  },
  "canada-visa": {
    price: 40000,
    currency: "PKR",
    label: "Canada Visa File Processing",
    note: "IRCC visa and biometrics fees are paid separately.",
  },
  "australia-visa": {
    price: 35000,
    currency: "PKR",
    label: "Australia Visa File Processing",
    note: "Department of Home Affairs visa fee is paid separately.",
  },
  "new-zealand-visa": {
    price: 45000,
    currency: "PKR",
    label: "New Zealand Visa File Processing",
    note: "Immigration New Zealand visa fee and IVL are paid separately.",
  },

  // Every Schengen country uses the same file-processing charge.
  "france-visa": SCHENGEN_FILE,
  "spain-visa": SCHENGEN_FILE,
  "belgium-visa": SCHENGEN_FILE,
  "netherlands-visa": SCHENGEN_FILE,
  "poland-visa": SCHENGEN_FILE,
  "germany-visa": SCHENGEN_FILE,
  "italy-visa": SCHENGEN_FILE,
  "hungary-visa": SCHENGEN_FILE,
  "greece-visa": SCHENGEN_FILE,
  "czech-republic-visa": SCHENGEN_FILE,
  "switzerland-visa": SCHENGEN_FILE,
  "portugal-visa": SCHENGEN_FILE,
  "denmark-visa": SCHENGEN_FILE,
  "sweden-visa": SCHENGEN_FILE,
  "norway-visa": SCHENGEN_FILE,
};

export function formatPrice(price, currency = "PKR") {
  if (price == null) return "Contact Us";
  return currency === "USD"
    ? `$${price.toLocaleString("en-US")} USD`
    : `Rs ${price.toLocaleString("en-US")}`;
}

// Turns a price entry into "facts" rows for the sidebar snapshot.
export function priceFacts(entry) {
  if (!entry) return [];
  const rows = entry.options
    ? entry.options.map((o) => ({ label: o.label, value: formatPrice(o.price, entry.currency), highlight: true }))
    : [{ label: `${entry.label} Price`, value: formatPrice(entry.price, entry.currency), highlight: true }];
  if (entry.note) rows.push({ label: "Note", value: entry.note });
  return rows;
}

// Meta description for a country service page: leads with the keyword and the
// current price, then the page's own summary — trimmed to ~160 characters.
export function countryMetaDescription(country, kind = "visa") {
  const entry = country.priceEntry;
  const price = entry ? `${entry.options ? "from " : ""}${formatPrice(entry.price, entry.currency)}` : null;
  const lead = kind === "file"
    ? `${country.name} visa file processing for Pakistani citizens${price ? ` — ${price}` : ""}.`
    : `${country.name} visa for Pakistani citizens${price ? ` — ${price}` : ""}.`;
  const rest = country.metaDescription.replace(/\s*Apply\.?$/i, "").trim();
  const full = `${lead} ${rest.charAt(0).toUpperCase()}${rest.slice(1)}`;
  return full.length <= 160 ? full : full.slice(0, 157).replace(/\s+\S*$/, "") + "…";
}

// Old scraped fee rows (embassy fee, service charges, etc.) are superseded by
// the price list above — drop them so a page never shows two conflicting prices.
export function stripOldFeeFacts(facts) {
  return facts.filter(
    (f) => !/fee|charges|file preparation|price/i.test(f.label) && !/^multiple entry \(/i.test(f.label)
  );
}
