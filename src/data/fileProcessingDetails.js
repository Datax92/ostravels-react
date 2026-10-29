// ============================================================================
// Extra detail for the Europe / Western file-processing pages.
// Schengen facts are the EU-wide rules (Visa Code, fee regulation in force
// since 11 June 2024); per-country lines are general reference facts.
// Western visa fees are labelled "approx." and every page also links the
// official source (officialSources.js) because these fees change.
// ============================================================================

export const schengenFacts = [
  { label: "Visa type", value: "Uniform Schengen Visa (Type C) — short stay" },
  { label: "Maximum stay", value: "90 days in any 180-day period across all Schengen states" },
  { label: "Consular fee", value: "€90 adults • €45 children 6–12 • free under 6" },
  { label: "Decision time", value: "Normally 15 calendar days (can extend up to 45)" },
  { label: "When to apply", value: "Up to 6 months and at least 15 days before travel" },
  { label: "Travel insurance", value: "Minimum €30,000 medical cover, valid in all Schengen states" },
  { label: "Biometrics", value: "Fingerprints taken at the visa centre (re-used for 59 months)" },
];

export const schengenSteps = [
  "Choose the right embassy — apply to the country of your main destination (longest stay), or your first point of entry if stays are equal.",
  "Free profile assessment with our visa desk: bank statement, employment, tax record and travel history.",
  "We prepare the complete file — application form, cover letter, day-by-day itinerary, flight & hotel reservations and Schengen insurance.",
  "We book your appointment at the embassy-designated visa application centre in Pakistan.",
  "Attend biometrics with your original documents; we brief you before the appointment.",
  "Track your passport and collect it once the embassy has decided.",
];

export const schengenRefusalReasons = [
  "Bank statement with large unexplained deposits or a balance that doesn't match the trip",
  "Weak ties to Pakistan — no clear employment, business or family reasons to return",
  "Itinerary, hotel and flight dates that don't match each other",
  "Applying to the wrong embassy for your main destination",
  "Missing or non-compliant travel insurance",
  "Unclear purpose of travel or a generic cover letter",
];

// Per-country reference details (Schengen + Western).
export const countryDetails = {
  "france-visa": { capital: "Paris", currency: "Euro (EUR)", cities: "Paris, Nice, Lyon, Marseille", tip: "Book Paris hotels early for summer — France checks that hotel bookings cover every night of the itinerary." },
  "spain-visa": { capital: "Madrid", currency: "Euro (EUR)", cities: "Madrid, Barcelona, Seville, Valencia", tip: "Spain applications in Pakistan are lodged through BLS International; appointments fill quickly before summer." },
  "germany-visa": { capital: "Berlin", currency: "Euro (EUR)", cities: "Berlin, Munich, Frankfurt, Hamburg", tip: "Germany is strict on financial evidence — a 6-month statement with consistent income works better than a large recent deposit." },
  "italy-visa": { capital: "Rome", currency: "Euro (EUR)", cities: "Rome, Milan, Venice, Florence", tip: "Show a clear city-by-city itinerary; Italy often asks how you will travel between cities." },
  "netherlands-visa": { capital: "Amsterdam", currency: "Euro (EUR)", cities: "Amsterdam, Rotterdam, The Hague, Utrecht", tip: "Popular for business trips and trade fairs — include the event registration and company letter." },
  "belgium-visa": { capital: "Brussels", currency: "Euro (EUR)", cities: "Brussels, Bruges, Antwerp, Ghent", tip: "Business visitors should include an invitation from the Belgian company with its registration details." },
  "switzerland-visa": { capital: "Bern", currency: "Swiss Franc (CHF)", cities: "Zurich, Geneva, Lucerne, Interlaken", tip: "Switzerland is in Schengen but not the EU — prices are higher, so budget evidence should reflect Swiss costs." },
  "portugal-visa": { capital: "Lisbon", currency: "Euro (EUR)", cities: "Lisbon, Porto, Algarve, Madeira", tip: "Combine Portugal with Spain on one visa — apply to the country where you spend the most nights." },
  "greece-visa": { capital: "Athens", currency: "Euro (EUR)", cities: "Athens, Santorini, Mykonos, Thessaloniki", tip: "Island-hopping itineraries should include ferry bookings or a realistic plan between islands." },
  "poland-visa": { capital: "Warsaw", currency: "Polish Złoty (PLN)", cities: "Warsaw, Kraków, Gdańsk, Wrocław", tip: "Poland is a common choice for business visitors — include the inviting company's registration (KRS) details." },
  "hungary-visa": { capital: "Budapest", currency: "Hungarian Forint (HUF)", cities: "Budapest, Debrecen, Lake Balaton", tip: "Budapest is often combined with Vienna and Prague — make sure Hungary is your main destination if you apply here." },
  "czech-republic-visa": { capital: "Prague", currency: "Czech Koruna (CZK)", cities: "Prague, Brno, Český Krumlov", tip: "Keep your Prague stay as the longest part of a Central Europe tour if applying to the Czech embassy." },
  "denmark-visa": { capital: "Copenhagen", currency: "Danish Krone (DKK)", cities: "Copenhagen, Aarhus, Odense", tip: "Family visits need the host's invitation and ID/residence permit copy." },
  "sweden-visa": { capital: "Stockholm", currency: "Swedish Krona (SEK)", cities: "Stockholm, Gothenburg, Malmö", tip: "Sweden asks for strong evidence of ties to Pakistan — employment letters should state approved leave dates." },
  "norway-visa": { capital: "Oslo", currency: "Norwegian Krone (NOK)", cities: "Oslo, Bergen, Tromsø, the fjords", tip: "Norway applications are made online with UDI first, then biometrics — we complete the UDI form for you." },

  "united-kingdom-uk-visa": {
    capital: "London", currency: "Pound Sterling (GBP)", cities: "London, Manchester, Birmingham, Edinburgh",
    facts: [
      { label: "Visa type", value: "Standard Visitor Visa (tourism, family, business)" },
      { label: "Stay", value: "Up to 6 months per visit" },
      { label: "Validity options", value: "6 months, 2, 5 or 10 years" },
      { label: "Government fee", value: "Set by the UK Home Office — check GOV.UK for the current amount" },
      { label: "Where to apply", value: "Online on GOV.UK, then biometrics at VFS Global (Islamabad, Lahore, Karachi, Mirpur)" },
      { label: "Decision time", value: "Usually about 3 weeks after biometrics" },
    ],
    steps: [
      "Profile assessment — funds, employment, travel history and purpose of visit.",
      "We complete the online application on GOV.UK and prepare a strong cover letter.",
      "Book your VFS biometrics appointment and upload / submit supporting documents.",
      "Attend biometrics; wait for the decision and collect your passport from VFS.",
    ],
    tip: "The UK assesses whether your funds and travel history make your trip credible — sudden deposits and unexplained sources of money are a common refusal reason.",
  },
  "united-states-usa-visa": {
    capital: "Washington, D.C.", currency: "US Dollar (USD)", cities: "New York, Washington, Chicago, Houston, Los Angeles",
    facts: [
      { label: "Visa type", value: "B1/B2 Visitor Visa (business / tourism)" },
      { label: "Application form", value: "DS-160 online, then MRV fee payment & interview booking" },
      { label: "MRV fee", value: "US$185 (non-refundable)" },
      { label: "Interview", value: "U.S. Embassy Islamabad or Consulate General Karachi" },
      { label: "Wait time", value: "Interview waits vary — check the State Department wait-time tool" },
    ],
    steps: [
      "Profile review and DS-160 preparation — every answer must match your documents.",
      "Pay the MRV fee and book your interview slot.",
      "Interview preparation session with our team (common questions & document set).",
      "Attend the interview at the U.S. Embassy / Consulate; passport returned via courier if approved.",
    ],
    tip: "USA decisions are made at the interview. Clear, honest, consistent answers about your job, family and trip matter more than a thick file.",
  },
  "canada-visa": {
    capital: "Ottawa", currency: "Canadian Dollar (CAD)", cities: "Toronto, Vancouver, Montreal, Calgary",
    facts: [
      { label: "Visa type", value: "Visitor Visa (Temporary Resident Visa)" },
      { label: "Government fee", value: "CAD 100 visa fee + CAD 85 biometrics (approx.)" },
      { label: "Where to apply", value: "Online with IRCC, biometrics at VFS Global in Pakistan" },
      { label: "Processing", value: "Varies widely — check IRCC processing times before applying" },
    ],
    steps: [
      "Profile assessment and document plan (funds, ties, purpose, invitation).",
      "We prepare the IRCC online application, forms and explanatory letter.",
      "Biometrics at VFS Global after the biometric instruction letter is issued.",
      "Passport request (if approved) and visa stamping via VFS.",
    ],
    tip: "Canada relies heavily on the written explanation — a clear letter of purpose and proof of ties to Pakistan make a big difference.",
  },
  "australia-visa": {
    capital: "Canberra", currency: "Australian Dollar (AUD)", cities: "Sydney, Melbourne, Brisbane, Perth",
    facts: [
      { label: "Visa type", value: "Visitor Visa (Subclass 600) — Tourist or Sponsored Family stream" },
      { label: "Government fee", value: "Approx. AUD 200 (check Home Affairs for the current fee)" },
      { label: "Where to apply", value: "Online via ImmiAccount; biometrics at the Australia visa centre if requested" },
      { label: "Processing", value: "Several weeks — varies by stream and season" },
    ],
    steps: [
      "Profile review and choice of the right stream (tourist / sponsored family / business).",
      "We prepare the ImmiAccount application with all supporting evidence uploaded.",
      "Biometrics and health checks if requested by Home Affairs.",
      "Visa grant notice by email — no passport label is needed.",
    ],
    tip: "Australia grants electronically — make sure your passport details are entered exactly as printed, or your grant won't link at check-in.",
  },
  "new-zealand-visa": {
    capital: "Wellington", currency: "New Zealand Dollar (NZD)", cities: "Auckland, Queenstown, Wellington, Christchurch",
    facts: [
      { label: "Visa type", value: "Visitor Visa" },
      { label: "Application", value: "Fully online with Immigration New Zealand" },
      { label: "Additional levy", value: "International Visitor Conservation & Tourism Levy (IVL)" },
      { label: "Processing", value: "Several weeks — apply 2–3 months before travel" },
    ],
    steps: [
      "Profile assessment and evidence plan (funds, employment, purpose).",
      "We prepare and lodge the Immigration NZ online application.",
      "Respond to any requests for further information or biometrics.",
      "eVisa issued by email — print it for travel.",
    ],
    tip: "New Zealand looks closely at genuine intent — a realistic itinerary and strong reasons to return to Pakistan are key.",
  },
};

export const SCHENGEN_MEMBER_COUNT = 29;
