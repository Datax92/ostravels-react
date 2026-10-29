// ============================================================================
// Content builders for the per-country keyword landing pages. Used by both the
// React pages (CountryGuide / CountryAgency) and scripts/prerender.js, so the
// static HTML Google crawls contains exactly the same text users see.
//
// The two page types answer different search intents on purpose:
//   guide  → "Can I get a {country} visa as a Pakistani, what do I need?"
//   agency → "Who should I hire to process my {country} visa, and why?"
// ============================================================================

import { site } from "./site.js";
import { formatPrice, PRICES_UPDATED } from "./pricing.js";
import { dropboxNotices } from "./dropboxNotices.js";
import { guidePath, agencyPath } from "./countryDirectory.js";
import { WORK_VISA_ANSWER } from "./countryFaqs.js";

const CONTACT_LABELS = /phone|tel|fax|email|e-mail|address|website|working hours|work time|office hours|inquiry|release hours|emergency/i;

function findFact(facts, re) {
  const f = facts.find((x) => re.test(x.label) && x.value);
  return f ? f.value.replace(/^:\s*/, "") : null;
}

function visaKind(entry) {
  const facts = entry.data.facts;
  const type = (findFact(facts, /visa type|category/i) || "").toLowerCase();
  if (entry.category === "schengen") return "schengen";
  if (entry.category === "file") return "file";
  if (/eta|e-visa|evisa|online/.test(type) || facts.some((f) => /100% online|online —/i.test(f.value))) return "evisa";
  return "embassy";
}

export function glanceRows(entry) {
  const facts = entry.data.facts;
  const rows = [];
  const add = (label, value) => value && rows.push({ label, value });
  add("Visa required for Pakistanis", "Yes — apply before travel");
  add("Visa type", findFact(facts, /visa type|visa category|^category/i));
  add("Validity", findFact(facts, /validity/i));
  add("Stay allowed", findFact(facts, /duration of stay/i));
  add("Processing time", findFact(facts, /processing time/i));
  if (entry.data.priceEntry) {
    const p = entry.data.priceEntry;
    add(`O.S price (${PRICES_UPDATED})`, `${p.options ? "From " : ""}${formatPrice(p.price, p.currency)}`);
  }
  return rows;
}

export function priceRows(entry) {
  const p = entry.data.priceEntry;
  if (!p) return [];
  return p.options
    ? p.options.map((o) => ({ label: o.label, value: formatPrice(o.price, p.currency) }))
    : [{ label: p.label, value: formatPrice(p.price, p.currency) }];
}

function steps(entry, kind) {
  const n = entry.name;
  if (kind === "evisa") {
    return [
      `Send scanned copies of your passport bio-page, photo and CNIC to O.S Travel & Tours on WhatsApp or email.`,
      `We check eligibility, prepare your ${n} application and arrange the flight and hotel reservations it needs.`,
      `We submit the application on the official ${n} portal and pay the government fee on your behalf.`,
      `You receive the approved ${n} visa / travel authorisation by email and WhatsApp — print it and travel.`,
    ];
  }
  if (kind === "schengen") {
    return [
      `Book a free file assessment — we review your bank statement, employment and travel history for ${n}.`,
      `We prepare the full ${n} Schengen file: application form, cover letter, itinerary, flight & hotel reservations and travel insurance.`,
      `We book your appointment at the ${n} visa application centre and brief you for biometrics.`,
      `Track your passport and collect it from the visa centre once the embassy has decided.`,
    ];
  }
  return [
    `Contact us for a document checklist tailored to your profile (employed, business, student or family visit).`,
    `We audit your documents and prepare the ${n} visa file — forms, cover letter, itinerary and reservations.`,
    `We submit your file to the ${n} embassy / visa centre (or book your appointment) and track progress.`,
    `Collect your passport with the ${n} visa — we notify you on WhatsApp as soon as it is ready.`,
  ];
}

function officialLine(entry) {
  const o = entry.data.officialSite;
  return o ? { label: o.label, url: o.url } : null;
}

// ── "{Country} visa for Pakistani" ─────────────────────────────────────────
export function guideContent(entry) {
  const n = entry.name;
  const kind = visaKind(entry);
  const d = entry.data;
  const processing = findFact(d.facts, /processing time/i);
  const price = d.priceEntry;
  const priceText = price ? `${price.options ? "from " : ""}${formatPrice(price.price, price.currency)}` : "on request";

  const intro = [
    `Yes — Pakistani passport holders need a visa to visit ${n}. This ${PRICES_UPDATED} guide explains the ${n} visa requirements for Pakistani citizens: which visa to apply for, the documents you need, processing time, current price and how to apply from Islamabad, Lahore, Karachi or anywhere in Pakistan.`,
    d.description[0],
  ];

  const sections = [
    {
      h2: `${n} Visa for Pakistani Citizens — At a Glance`,
      table: glanceRows(entry),
    },
    {
      h2: `${n} Visa Price for Pakistanis (${PRICES_UPDATED})`,
      paragraphs: [
        `The O.S Travel & Tours price for a ${n} visa is ${priceText}.${price && price.note ? " " + price.note : ""} Prices change when embassies revise their fees, so confirm the final amount on WhatsApp before you pay.`,
      ],
      table: priceRows(entry),
    },
    {
      h2: `Documents Required for ${n} Visa from Pakistan`,
      list: d.requirements.filter((r) => !CONTACT_LABELS.test(r)).slice(0, 14),
    },
    {
      h2: `How to Apply for a ${n} Visa from Pakistan`,
      ordered: steps(entry, kind),
    },
    {
      h2: `${n} Visa Processing Time`,
      paragraphs: [
        processing
          ? `Typical processing time for a ${n} visa for Pakistani applicants is ${processing.toLowerCase()}. Apply well before your travel date — embassies can take longer in peak season and may ask for extra documents.`
          : `Processing time for a ${n} visa depends on the embassy workload and your profile. Apply at least 3–4 weeks before your travel date.`,
      ],
    },
  ];

  const faqs = [
    {
      question: `Do Pakistanis need a visa for ${n}?`,
      answer: `Yes. Pakistani passport holders must get a ${n} visa${kind === "evisa" ? " or electronic travel authorisation online" : ""} before travelling. O.S Travel & Tours can apply on your behalf.`,
    },
    {
      question: `How much does a ${n} visa cost for Pakistani citizens?`,
      answer: `With O.S Travel & Tours the ${n} visa costs ${priceText} (${PRICES_UPDATED} price list).${price && price.note ? " " + price.note : ""}`,
    },
    {
      question: `How long does a ${n} visa take from Pakistan?`,
      answer: processing ? `Usually ${processing.toLowerCase()}, depending on the embassy and your documents.` : `It depends on the embassy — contact us for the current processing time.`,
    },
    {
      question: `What bank balance is needed for a ${n} visa?`,
      answer: `There is no single official figure for most countries; the embassy wants to see a stable 6-month statement that comfortably covers your trip. We review your statement before submission and advise if it needs strengthening.`,
    },
    {
      question: `${n} work visa for Pakistani — do you process it?`,
      answer: WORK_VISA_ANSWER,
    },
    {
      question: `Can I apply for a ${n} visa from outside Islamabad?`,
      answer: `Yes. Clients from Rawalpindi, Lahore, Karachi, Peshawar, Faisalabad, Multan and across Pakistan apply through us by WhatsApp, email and courier.`,
    },
  ];

  return {
    title: `${n} Visa for Pakistani Citizens ${PRICES_UPDATED.split(" ")[1]} — Requirements & Price`,
    metaDescription: `${n} visa for Pakistani citizens: requirements, documents, processing time & price (${priceText}). Apply from Islamabad with O.S Travel & Tours.`,
    h1: `${n} Visa for Pakistani Citizens`,
    intro,
    sections,
    faqs,
    official: officialLine(entry),
    crossLink: { label: `Best travel agent for ${n} visa`, path: agencyPath(entry.key) },
  };
}

// ── "Best travel agency for {Country} visa" ────────────────────────────────
export function agencyContent(entry) {
  const n = entry.name;
  const kind = visaKind(entry);
  const d = entry.data;
  const price = d.priceEntry;
  const priceText = price ? `${price.options ? "from " : ""}${formatPrice(price.price, price.currency)}` : "on request";
  const notice = dropboxNotices[d.slug];

  const reasons = [
    notice ? notice.heading + " — " + notice.text.split(".")[0] + "." : null,
    `Licensed by the Government of Pakistan Department of Tourist Services (DTS) — verify our licence on dts.gov.pk.`,
    `${site.stats[0].value} years of visa experience and ${site.stats[1].value} happy clients from Islamabad, Rawalpindi and across Pakistan.`,
    `Physical office in Blue Area, Islamabad — walk in for a face-to-face ${n} visa consultation.`,
    `Transparent ${n} visa price (${priceText}) with no hidden charges.`,
    `Pre-submission document audit to reduce common refusal reasons.`,
    `Fast WhatsApp support on ${site.phones[2]} — get answers in minutes during office hours.`,
  ].filter(Boolean);

  const included = {
    evisa: [
      `Eligibility check and ${n} application filed on the official portal`,
      "Government fee payment handled for you",
      "Flight & hotel reservations for the application",
      "Approved visa delivered by email and WhatsApp",
    ],
    schengen: [
      `${n} Schengen visa application form & cover letter`,
      "Bank statement and document audit",
      "Day-by-day itinerary, flight & hotel reservations",
      "Schengen-compliant travel insurance (€30,000 cover)",
      "Visa centre appointment booking & interview briefing",
    ],
    file: [
      `${n} visa application form and complete file preparation`,
      "Financial document review & cover letter",
      "Travel itinerary, flight & hotel reservations",
      "Appointment / biometrics booking and submission guidance",
      "Follow-up until a decision is received",
    ],
    embassy: [
      `${n} visa form, cover letter and document checklist`,
      "Document audit before submission",
      "Flight & hotel reservations",
      "Embassy / drop-box submission and passport collection",
      "Status updates on WhatsApp",
    ],
  }[kind];

  const sections = [
    {
      h2: `Why O.S Travel & Tours Is the Best Travel Agency for ${n} Visa`,
      list: reasons,
    },
    {
      h2: `What's Included in Our ${n} Visa Service`,
      list: included,
    },
    {
      h2: `${n} Visa Service Price (${PRICES_UPDATED})`,
      table: priceRows(entry),
      paragraphs: price && price.note ? [price.note] : [],
    },
    {
      h2: `Applying Yourself vs. Through O.S Travel & Tours`,
      compare: {
        head: ["", "Applying yourself", "With O.S Travel & Tours"],
        rows: [
          ["Document checklist", "Search & guess", "Tailored to your profile"],
          ["File review", "None", "Full pre-submission audit"],
          ["Cover letter & itinerary", "Write yourself", "Prepared by our visa desk"],
          ["Flight & hotel reservations", "Book separately", "Included"],
          ["Support", "Embassy email only", `WhatsApp ${site.phones[2]}`],
        ],
      },
    },
    {
      h2: `Our ${n} Visa Process — 4 Simple Steps`,
      ordered: steps(entry, kind),
    },
    {
      h2: `${n} Visa Agent Serving All of Pakistan`,
      paragraphs: [
        `Our head office is at ${site.address}. Clients from Islamabad and Rawalpindi can walk in; applicants from Lahore, Karachi, Peshawar, Faisalabad, Multan, Sialkot, Gujranwala and Quetta can complete the ${n} visa process with us by WhatsApp, email and courier.`,
      ],
    },
  ];

  const faqs = [
    {
      question: `Which is the best travel agency for ${n} visa in Pakistan?`,
      answer: `O.S Travel & Tours in Blue Area, Islamabad is a DTS-licensed agency with ${site.stats[0].value} years of experience processing ${n} visas for Pakistani citizens, with transparent pricing and WhatsApp support.`,
    },
    {
      question: `How much does O.S Travel & Tours charge for a ${n} visa?`,
      answer: `Our ${n} visa price is ${priceText} (${PRICES_UPDATED}).${price && price.note ? " " + price.note : ""}`,
    },
    {
      question: `Can a travel agent guarantee my ${n} visa?`,
      answer: `No genuine agent can guarantee a visa — the decision belongs to the embassy. What we do is make sure your ${n} file is complete, consistent and well-evidenced, which removes the most common refusal reasons.`,
    },
    {
      question: `Do you handle ${n} work visas or work permits?`,
      answer: WORK_VISA_ANSWER,
    },
    {
      question: `Do I need to visit your office for a ${n} visa?`,
      answer: kind === "evisa"
        ? `No. The ${n} visa is processed online — just send scanned documents on WhatsApp or email.`
        : `Not necessarily. Many clients share documents on WhatsApp and courier their passport; you are welcome to visit our Blue Area office for a face-to-face review.`,
    },
  ];

  return {
    title: `Best Travel Agent for ${n} Visa in Pakistan`,
    metaDescription: `Best travel agent & agency for ${n} visa in Islamabad, Pakistan. DTS-licensed, ${site.stats[0].value} years' experience, ${n} visa ${priceText}. WhatsApp 0333-5542877.`,
    h1: `Best Travel Agent for ${n} Visa in Pakistan`,
    intro: [
      `Looking for a reliable travel agency for your ${n} visa? O.S Travel & Tours is a government-licensed travel agency in Blue Area, Islamabad, helping Pakistani citizens apply for ${n} visas with complete file preparation, honest advice and fast WhatsApp support.`,
    ],
    sections,
    faqs,
    official: officialLine(entry),
    crossLink: { label: `${n} visa requirements for Pakistani citizens`, path: guidePath(entry.key) },
  };
}

// Plain-HTML rendering for the prerenderer.
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function contentToHtml(c) {
  let h = c.intro.map((p) => `<p>${esc(p)}</p>`).join("");
  for (const s of c.sections) {
    h += `<h2>${esc(s.h2)}</h2>`;
    (s.paragraphs || []).forEach((p) => (h += `<p>${esc(p)}</p>`));
    if (s.table && s.table.length) h += `<table>${s.table.map((r) => `<tr><th>${esc(r.label)}</th><td>${esc(r.value)}</td></tr>`).join("")}</table>`;
    if (s.list) h += `<ul>${s.list.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
    if (s.ordered) h += `<ol>${s.ordered.map((i) => `<li>${esc(i)}</li>`).join("")}</ol>`;
    if (s.compare) h += `<table><tr>${s.compare.head.map((x) => `<th>${esc(x)}</th>`).join("")}</tr>${s.compare.rows.map((r) => `<tr>${r.map((x) => `<td>${esc(x)}</td>`).join("")}</tr>`).join("")}</table>`;
  }
  h += `<h2>Frequently Asked Questions</h2>`;
  c.faqs.forEach((f) => (h += `<h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p>`));
  if (c.official) h += `<p>Official source: <a href="${esc(c.official.url)}" rel="noopener nofollow">${esc(c.official.label)}</a></p>`;
  h += `<p><a href="${c.crossLink.path}">${esc(c.crossLink.label)}</a></p>`;
  return h;
}
