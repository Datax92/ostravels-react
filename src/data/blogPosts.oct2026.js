// ============================================================================
// October 2026 blog update — new guides for the countries added to the site.
// Facts are written against the official portals linked in each post; fees
// that third-party sites disagree on are deliberately not quoted as exact
// government figures. O.S prices come from pricing.js.
// ============================================================================
import { osPrices, formatPrice } from "./pricing.js";

const p = (slug, i) => {
  const e = osPrices[slug];
  const price = i == null ? e.price : e.options[i].price;
  return formatPrice(price, e.currency);
};

export const october2026Posts = [
  {
    slug: "visa-price-list-pakistan-2026",
    category: "News & Updates",
    title: "Visa Price List for Pakistani Citizens — October 2026",
    excerpt:
      "Updated O.S Travel & Tours visa prices for 35+ countries — Malaysia, Thailand, Indonesia, Japan, South Korea, Bahrain, Kenya, UK, USA, Canada, Schengen and more — with what each price covers.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1400&auto=format&fit=crop",
    author: "O.S Travel & Tours Desk",
    date: "2026-10-29",
    readTime: "6 mins read",
    tags: [
      "Visa Price List Pakistan 2026",
      "Visa Fee for Pakistani Citizens",
      "Malaysia Visa Price Pakistan",
      "Thailand Visa Fee Pakistan",
      "Bahrain Visa Price Pakistan",
      "Schengen Visa File Processing Fee",
    ],
    content: [
      {
        type: "p",
        text: "Visa fees move every few months — embassies revise consular charges, e-visa portals add service fees, and exchange rates shift. This page lists the current O.S Travel & Tours price for every destination we handle, updated in October 2026. For any country, message us on WhatsApp to confirm the final amount for your profile before paying.",
      },
      { type: "h2", text: "Asia" },
      {
        type: "list",
        items: [
          `Malaysia visa — ${p("malaysia-visa")}`,
          `Thailand tourist visa — ${p("thailand-visa")}`,
          `Indonesia e-Visa — ${p("indonesia-visa", 0)} | Indonesia sticker visa — ${p("indonesia-visa", 1)}`,
          `Hong Kong visa — ${p("hongkong-visa")}`,
          `China visa — ${p("china-visa")}`,
          `Philippines visa — ${p("philippine-visa")}`,
          `Vietnam visa — ${p("vietnam-visa")}`,
          `Cambodia e-Visa — ${p("cambodia-visa")}`,
          `Sri Lanka ETA — ${p("sri-lanka-visa")}`,
          `Nepal visa — ${p("nepal")}`,
          `Japan visa file processing — ${p("japan-visa")}`,
          `South Korea visa file processing — ${p("south-korea-visa")}`,
          `Bangladesh visa — ${p("bangladesh-visa")}`,
        ],
      },
      { type: "h2", text: "Central Asia, Caucasus & Middle East" },
      {
        type: "list",
        items: [
          `Azerbaijan e-Visa — ${p("azerbaijan-visa", 0)} (urgent: ${p("azerbaijan-visa", 1)})`,
          `Kazakhstan visa — ${p("kazakhstan")}`,
          `Tajikistan visa — ${p("tajikistan-visa")}`,
          `Uzbekistan visa — ${p("uzbekistan-visa")}`,
          `Turkey visa file processing — ${p("turkey-visa")} (embassy fee separate)`,
          `Egypt visa — ${p("egypt-visa")}`,
          `Morocco visa — ${p("morocco-visa")}`,
          `Bahrain e-Visa — 14 days ${p("bahrain-visa", 0)} | 1 month ${p("bahrain-visa", 1)} | 3 months ${p("bahrain-visa", 2)}`,
        ],
      },
      { type: "h2", text: "Africa" },
      {
        type: "list",
        items: [
          `South Africa visa file processing — ${p("south-africa-visa")}`,
          `Kenya eTA — ${p("kenya-visa")}`,
          `Uganda e-Visa — ${p("uganda-visa")}`,
          `Ethiopia e-Visa — ${p("ethiopia-visa")}`,
          `Tanzania e-Visa — ${p("tanzania-visa")}`,
          `Zambia e-Visa — ${p("zambia-visa")}`,
          `Zimbabwe e-Visa — ${p("zimbabwe-visa")}`,
        ],
      },
      { type: "h2", text: "UK, USA, Canada, Australia, New Zealand & Schengen (File Processing)" },
      {
        type: "p",
        text: "For Western visas our price is a file-processing charge — the visa fee itself (UK Home Office fee, US MRV fee, IRCC fee, Australian Home Affairs fee, Immigration NZ fee or Schengen consular fee) is paid separately at the time of application.",
      },
      {
        type: "list",
        items: [
          `UK visa file — ${p("united-kingdom-uk-visa")}`,
          `USA visa file — ${p("united-states-usa-visa")}`,
          `Canada visa file — ${p("canada-visa")}`,
          `Australia visa file — ${p("australia-visa")}`,
          `New Zealand visa file — ${p("new-zealand-visa")}`,
          `Any Schengen country (France, Germany, Italy, Spain, Netherlands, etc.) — ${p("france-visa")}`,
        ],
      },
      {
        type: "quote",
        text: "Visa fees and service charges are non-refundable if a visa is refused. No agent can guarantee a visa — what we guarantee is a complete, carefully reviewed file.",
      },
    ],
    faqs: [
      {
        q: "Do these prices include the embassy fee?",
        a: "For Asian, Gulf and African visas the listed price is our package price. For UK, USA, Canada, Australia, New Zealand, Turkey and Schengen countries it is our file-processing charge and the government visa fee is paid separately.",
      },
      {
        q: "How often are visa prices updated?",
        a: "We review the list whenever an embassy changes its fee. The current list was updated in October 2026.",
      },
      {
        q: "Can I pay in instalments or after approval?",
        a: "Embassy and e-visa fees must be paid before submission. Contact our visa desk for any package-specific payment arrangements.",
      },
    ],
    related: ["japan-visa-from-pakistan-2026", "bahrain-visit-visa-pakistan", "kenya-eta-pakistani-citizens"],
  },

  {
    slug: "japan-visa-from-pakistan-2026",
    category: "Visa Guides",
    title: "Japan Visa from Pakistan 2026: VFS Process, Documents & Fee Changes",
    excerpt:
      "How Pakistani citizens apply for a Japan tourist or business visa in 2026 — the VFS Global process, the documents embassies check most closely, processing time and the 2026 fee revision.",
    image:
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1400&auto=format&fit=crop",
    author: "O.S Travel & Tours Desk",
    date: "2026-10-27",
    readTime: "7 mins read",
    tags: [
      "Japan Visa from Pakistan",
      "Japan Visa for Pakistani Citizens",
      "Japan Visa Requirements Pakistan",
      "Japan Visa VFS Islamabad",
      "Japan Visa Fee 2026",
      "Japan Tourist Visa Pakistan",
    ],
    content: [
      {
        type: "p",
        text: "Japan is one of the fastest-growing destinations for Pakistani travellers — for cherry-blossom season, business trips, and visiting family. Pakistani passport holders need a visa, and the application is document-heavy. Here is how the process works in 2026.",
      },
      { type: "h2", text: "Where Do Pakistanis Apply for a Japan Visa?" },
      {
        type: "p",
        text: "Short-term visa applications are lodged through the Japan Visa Application Centre operated by VFS Global, with centres in Islamabad, Lahore and Karachi. The Embassy of Japan in Islamabad and the Consulate-General in Karachi make the decision but do not accept walk-in files from the public.",
      },
      { type: "h2", text: "Documents Japan Checks Most Closely" },
      {
        type: "list",
        items: [
          "Visa application form with a 45mm x 45mm photograph",
          "Six-month personal bank statement and a bank maintenance certificate",
          "Income tax returns / NTN certificate",
          "Employment letter with leave approval, or business registration documents",
          "A day-by-day schedule of stay (itinerary) that matches your hotel and flight reservations",
          "Invitation letter and letter of guarantee if a person or company in Japan is inviting you",
        ],
      },
      {
        type: "p",
        text: "The itinerary is where most self-prepared files go wrong: dates, cities and hotels must match exactly across every document. Inconsistencies are a common reason for delays or refusals.",
      },
      { type: "h2", text: "Japan Visa Fee Changes in 2026" },
      {
        type: "p",
        text: "Japan announced a revision of its visa fees in 2026, and Pakistani media reported large increases for many nationalities. Because the applicable fee depends on visa type and the date of application, we confirm the current consular and VFS charges at the time of submission rather than quoting a figure that may already be outdated.",
      },
      { type: "h2", text: "Processing Time" },
      {
        type: "p",
        text: "Most complete applications are decided within about 7–10 working days after VFS receives them, but apply at least a month before travel — longer during spring (sakura) season.",
      },
      { type: "h2", text: "O.S Travel & Tours Japan Visa Service" },
      {
        type: "p",
        text: `Our Japan visa file processing costs ${p("japan-visa")}. It includes the schedule of stay, cover letter, flight and hotel reservations, a full document audit and VFS submission guidance.`,
      },
    ],
    faqs: [
      { q: "Can Pakistanis get a Japan e-Visa?", a: "Pakistani applicants currently apply through the VFS Global Japan Visa Application Centre in Pakistan. Check the Embassy of Japan in Pakistan website for any change to online options." },
      { q: "How long can I stay in Japan on a tourist visa?", a: "Short-term stay visas are granted for up to 15, 30 or 90 days, as decided by the embassy." },
      { q: "Is a sponsor required for a Japan visa?", a: "Not for tourism if you can show sufficient funds yourself. If someone in Japan invites you, their invitation letter and letter of guarantee are required." },
    ],
    related: ["visa-price-list-pakistan-2026", "visa-file-processing-explained", "packing-checklist-international-travel"],
  },

  {
    slug: "bahrain-visit-visa-pakistan",
    category: "Visa Guides",
    title: "Bahrain Visit Visa for Pakistanis: 14 Days, 1 Month or 3 Months?",
    excerpt:
      "Bahrain e-Visa options for Pakistani passport holders explained — which duration to pick, documents required, processing time and O.S Travel & Tours prices for each option.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1400&auto=format&fit=crop",
    author: "O.S Travel & Tours Desk",
    date: "2026-10-25",
    readTime: "5 mins read",
    tags: [
      "Bahrain Visit Visa for Pakistani",
      "Bahrain e-Visa Pakistan",
      "Bahrain Visa Price Pakistan",
      "Bahrain Visa Requirements",
      "Bahrain Tourist Visa from Pakistan",
    ],
    content: [
      {
        type: "p",
        text: "Bahrain issues tourist e-Visas online through the Nationality, Passports & Residence Affairs (NPRA) portal, so Pakistani applicants don't need to visit an embassy. The main decision is how long you need to stay.",
      },
      { type: "h2", text: "Which Bahrain Visa Should You Choose?" },
      {
        type: "list",
        items: [
          `14 days — best for short holidays, family visits and the Bahrain Grand Prix weekend (${p("bahrain-visa", 0)})`,
          `1 month — for longer family visits or business trips (${p("bahrain-visa", 1)})`,
          `3 months — for repeat or extended visits (${p("bahrain-visa", 2)})`,
        ],
      },
      { type: "h2", text: "Documents Required" },
      {
        type: "list",
        items: [
          "Passport bio-page scan with at least 6 months validity",
          "Recent photograph with white background",
          "CNIC copy",
          "Confirmed return air ticket",
          "Hotel booking for the full stay (or host details)",
          "Bank statement for the last 6 months",
        ],
      },
      { type: "h2", text: "Processing Time" },
      {
        type: "p",
        text: "Most complete Bahrain e-Visa applications are approved within about 3–5 working days. Apply at least a week before travel, and longer before Eid holidays and major events.",
      },
      {
        type: "p",
        text: "Official stay rules are published on the Bahrain e-Visa portal (evisa.gov.bh). We check your option against the portal at the time of application.",
      },
    ],
    faqs: [
      { q: "Do Pakistanis get visa on arrival in Bahrain?", a: "Pakistani passport holders should obtain an e-Visa before travel. Some residents of GCC countries have other options — ask us about your case." },
      { q: "Can I extend a Bahrain visit visa?", a: "Extensions are at the discretion of NPRA. It is simpler to choose the duration you need when applying." },
    ],
    related: ["visa-price-list-pakistan-2026", "umrah-visa-guide-pakistan", "visa-free-countries-pakistani-passport"],
  },

  {
    slug: "kenya-eta-pakistani-citizens",
    category: "Visa Guides",
    title: "Kenya eTA for Pakistani Citizens: How the Electronic Travel Authorisation Works",
    excerpt:
      "Kenya replaced visas with the Electronic Travel Authorisation (eTA) in 2024. Here's how Pakistani travellers apply, what documents are needed and how long approval takes.",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1400&auto=format&fit=crop",
    author: "O.S Travel & Tours Desk",
    date: "2026-10-22",
    readTime: "5 mins read",
    tags: [
      "Kenya eTA for Pakistani",
      "Kenya Visa for Pakistani Citizens",
      "Kenya Visa from Pakistan",
      "Kenya Electronic Travel Authorisation",
      "Kenya Safari Visa Pakistan",
    ],
    content: [
      {
        type: "p",
        text: "Since January 2024 Kenya no longer issues traditional visitor visas to most nationalities — including Pakistanis. Instead, every traveller needs an approved Electronic Travel Authorisation (eTA) before boarding a flight to Kenya.",
      },
      { type: "h2", text: "Where to Apply" },
      {
        type: "p",
        text: "The only official application website is etakenya.go.ke. Be careful with look-alike websites that charge extra. O.S Travel & Tours applies on the official portal on your behalf.",
      },
      { type: "h2", text: "Documents for the Kenya eTA" },
      {
        type: "list",
        items: [
          "Passport valid for at least 6 months with one blank page",
          "Recent passport-style photo",
          "Return or onward flight booking",
          "Hotel booking or the address of your host in Kenya",
          "Contact email and phone number",
        ],
      },
      { type: "h2", text: "Processing Time & Validity" },
      {
        type: "p",
        text: "Kenya's immigration department aims to process eTAs within about three working days. The eTA is valid for a single entry within 90 days of approval. Apply at least two weeks before you travel.",
      },
      { type: "h2", text: "Health Requirements" },
      {
        type: "p",
        text: "Yellow fever vaccination is recommended for Kenya and is required if you are arriving from or transiting through a yellow-fever-risk country. Carry your vaccination card in your hand luggage.",
      },
      { type: "h2", text: "Our Kenya eTA Service" },
      {
        type: "p",
        text: `O.S Travel & Tours processes the Kenya eTA for ${p("kenya-visa")} — send your scans on WhatsApp and we handle the rest, including flights on Kenya Airways, Emirates, Qatar Airways or Ethiopian Airlines.`,
      },
    ],
    faqs: [
      { q: "Is the Kenya eTA a visa?", a: "It is an electronic travel authorisation that replaces the visitor visa. You must have it approved before travel." },
      { q: "Can I get the Kenya eTA on arrival?", a: "No. The eTA must be approved before you board your flight." },
    ],
    related: ["east-africa-visas-pakistani-passport", "visa-price-list-pakistan-2026", "packing-checklist-international-travel"],
  },

  {
    slug: "east-africa-visas-pakistani-passport",
    category: "Visa Guides",
    title: "Africa Visas for Pakistanis: Kenya, Uganda, Tanzania, Ethiopia, Zambia, Zimbabwe & South Africa",
    excerpt:
      "A side-by-side guide to African visas for Pakistani passport holders — which countries offer e-Visas, which need an embassy or VFS application, yellow fever rules and prices.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1400&auto=format&fit=crop",
    author: "O.S Travel & Tours Desk",
    date: "2026-10-20",
    readTime: "8 mins read",
    tags: [
      "Africa Visa for Pakistani",
      "Uganda Visa for Pakistani",
      "Tanzania Visa for Pakistani",
      "Ethiopia e-Visa Pakistan",
      "Zambia Visa Pakistan",
      "Zimbabwe Visa Pakistan",
      "South Africa Visa Pakistan",
    ],
    content: [
      {
        type: "p",
        text: "Business travel to Africa from Pakistan is growing — trade, construction, textiles and pharmaceuticals — along with safari and Victoria Falls holidays. Most East and Southern African countries now offer online e-Visas, while South Africa still requires an in-person application through VFS Global.",
      },
      { type: "h2", text: "Online e-Visa / eTA Countries" },
      {
        type: "list",
        items: [
          `Kenya — eTA on etakenya.go.ke, about 3 working days (${p("kenya-visa")})`,
          `Uganda — e-Visa on the Uganda immigration portal; yellow fever certificate mandatory (${p("uganda-visa")})`,
          `Tanzania — e-Visa on the Tanzania immigration portal, up to 10 working days (${p("tanzania-visa")})`,
          `Ethiopia — 30 or 90-day tourist e-Visa on evisa.gov.et, entry via Addis Ababa (${p("ethiopia-visa")})`,
          `Zambia — e-Visa via the Department of Immigration; new fees from 1 January 2026 (${p("zambia-visa")})`,
          `Zimbabwe — e-Visa on evisa.gov.zw, must be approved before travel (${p("zimbabwe-visa")})`,
        ],
      },
      { type: "h2", text: "South Africa — VFS Application" },
      {
        type: "p",
        text: `Pakistani citizens apply for a South African visitor's visa in person through VFS Global using form BI-84. Processing can take several weeks, so start 6–8 weeks before travel. Our file processing costs ${p("south-africa-visa")}.`,
      },
      { type: "h2", text: "Yellow Fever Vaccination" },
      {
        type: "p",
        text: "Uganda requires a yellow fever certificate for entry, and several other countries require it if you arrive from or transit through a risk country. Get vaccinated at least 10 days before travel and keep the certificate with your passport.",
      },
      { type: "h2", text: "Combining Countries" },
      {
        type: "p",
        text: "Popular combinations from Pakistan are Kenya + Tanzania (safari and Zanzibar) and Zambia + Zimbabwe (Victoria Falls). Each country needs its own approval unless you qualify for a regional visa — we will check which option suits your passport and itinerary.",
      },
    ],
    faqs: [
      { q: "Which African countries are easiest for Pakistanis?", a: "Countries with online e-Visas — Kenya, Ethiopia, Tanzania, Uganda, Zambia and Zimbabwe — are the most straightforward because no passport submission is needed." },
      { q: "Do I need a yellow fever vaccine for Africa?", a: "It is mandatory for Uganda and required by several countries depending on your route. We recommend it for any East African trip." },
    ],
    related: ["kenya-eta-pakistani-citizens", "visa-price-list-pakistan-2026", "packing-checklist-international-travel"],
  },
];

// Short "current price" notes appended to older guides when prices change.
export const priceUpdates = {
  "malaysia-visa-guide-from-pakistan": `Our current Malaysia visa price is ${p("malaysia-visa")} (October 2026).`,
  "thailand-e-visa-vs-sticker-visa": `Our current Thailand tourist visa price is ${p("thailand-visa")} (October 2026).`,
  "vietnam-visa-pakistan-guide": `Our current Vietnam visa price is ${p("vietnam-visa")} (October 2026).`,
  "schengen-visa-guide-pakistan": `Our Schengen visa file processing charge is ${p("france-visa")} for any Schengen country; the consular visa fee is paid separately (October 2026).`,
  "uk-visa-guide-pakistan": `Our UK visa file processing charge is ${p("united-kingdom-uk-visa")}; the Home Office visa fee is paid separately (October 2026).`,
  "usa-visa-b1-b2-guide": `Our USA visa file processing charge is ${p("united-states-usa-visa")}; the MRV fee is paid separately (October 2026).`,
};
