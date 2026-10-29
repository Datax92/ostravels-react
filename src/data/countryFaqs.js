// ============================================================================
// Search-style FAQs for every country — phrased the way people search on
// Google ("Malaysia visa fees for Pakistani", "Malaysia visa open or not",
// "USA visa appointment Islamabad"…). Used on the country service pages,
// the "{country} visa for Pakistani" guides and in the prerendered HTML,
// with FAQPage schema, so every country page answers its real search queries.
//
// Policy: O.S Travel & Tours does NOT handle work visas / work permits.
// ============================================================================

import { formatPrice, PRICES_UPDATED } from "./pricing.js";
import { countryDetails } from "./fileProcessingDetails.js";

const YEAR = PRICES_UPDATED.split(" ")[1];
const SHORT = { "United Kingdom (UK)": "UK", "United States (USA)": "USA" };

export const WORK_VISA_ANSWER =
  "O.S Travel & Tours does not handle work visas, work permits or employment visas for any country. We only process visit, tourist, family-visit and business-visit visas, plus air tickets, hotel bookings and travel insurance.";

const fact = (facts, re) => {
  const f = facts.find((x) => re.test(x.label) && x.value);
  return f ? f.value.replace(/^:\s*/, "").replace(/\{\s*(.*?)\s*\}/g, "($1)").trim() : null;
};

// e-visa / embassy / schengen / western-file
function kindOf(country, isFile) {
  if (isFile) return country.region === "Schengen" ? "schengen" : "file";
  const t = (fact(country.facts, /visa type|category/i) || "").toLowerCase();
  if (/eta|e-visa|evisa/.test(t) || country.facts.some((f) => /100% online|online —|online - /i.test(f.value))) return "evisa";
  return "embassy";
}

export function countryFaqs(country, { isFile = false } = {}) {
  const n = SHORT[country.name] || country.name;
  const kind = kindOf(country, isFile);
  const facts = country.facts || [];
  const details = countryDetails[country.slug];
  const detailFact = (re) => (details?.facts ? fact(details.facts, re) : null);

  const p = country.priceEntry;
  const price = p ? `${p.options ? "from " : ""}${formatPrice(p.price, p.currency)}` : null;
  const processing = detailFact(/decision|processing|wait/i) || fact(facts, /processing time/i);
  const stay = detailFact(/^stay/i) || fact(facts, /duration of stay|stay allowed/i);
  const validity = fact(facts, /validity/i) || detailFact(/validity/i);
  const visaType = detailFact(/visa type/i) || fact(facts, /visa type|visa category/i);
  const where = detailFact(/where to apply/i) || detailFact(/^interview/i) || detailFact(/^application$/i) || fact(facts, /submission|^application$/i);
  const govFee = detailFact(/fee/i);
  const isFileService = kind === "schengen" || kind === "file";

  const priceAnswer = price
    ? `The O.S Travel & Tours ${isFileService ? "file processing charge" : "price"} for a ${n} visa is ${price} (${PRICES_UPDATED}).` +
      (p.options ? " Options: " + p.options.map((o) => `${o.label} — ${formatPrice(o.price, p.currency)}`).join("; ") + "." : "") +
      (p.note ? ` ${p.note}` : "") +
      (govFee ? ` Government fee: ${govFee}.` : "")
    : `Contact our visa desk on WhatsApp for the current ${n} visa fee.`;

  const faqs = [
    {
      question: `${n} visa fees for Pakistani — what is the price in ${YEAR}?`,
      answer: priceAnswer,
    },
    {
      question: `${n} visa for Pakistani open or not?`,
      answer: `Yes — ${n} is currently accepting ${isFileService ? "visit / tourist" : "visit"} visa applications from Pakistani passport holders${visaType ? ` (${visaType})` : ""}. Visa policies can change at short notice, so confirm with us on WhatsApp before buying non-refundable tickets.`,
    },
    {
      question: `${n} visa for Pakistani processing time`,
      answer: processing
        ? `${n} visa processing time for Pakistani applicants: ${processing}. Apply early in peak season — embassies can take longer and may ask for extra documents.`
        : `Processing time depends on the ${n} embassy's workload and your profile. Apply at least 3–4 weeks before travel; we track the application and update you on WhatsApp.`,
    },
    {
      question: `${n} visit visa requirements from Pakistan`,
      answer: `Main requirements: ${(country.requirements || [])
        .filter((r) => !/address|tel|fax|email|click/i.test(r))
        .slice(0, 6)
        .join("; ")}. Exact documents depend on whether you are employed, self-employed, a student or visiting family.`,
    },
    {
      question: kind === "evisa" ? `${n} e-visa price in Pakistan and how to apply online` : `Can I apply for a ${n} visa online from Pakistan?`,
      answer:
        kind === "evisa"
          ? `The ${n} visa is applied online — send scanned documents to O.S Travel & Tours on WhatsApp or email and we file it on the official portal. ${price ? `Price: ${price}.` : ""}`
          : `${where ? `${where}. ` : ""}You can start online with us: share your documents on WhatsApp, we prepare the ${n} file${isFileService ? " and book your appointment" : ""}, and guide you through submission.`,
    },
    {
      question: `${n} visit visa ${stay ? "duration — how long can Pakistanis stay?" : "validity for Pakistani citizens"}`,
      answer: [stay && `Stay allowed: ${stay}.`, validity && `Visa validity: ${validity}.`]
        .filter(Boolean)
        .join(" ") || `The length of stay is decided by the ${n} embassy and printed on your visa. Tell us your travel plan and we'll apply for the right duration.`,
    },
    {
      question: `${n} business visa requirements for Pakistani citizens`,
      answer: `For a ${n} business visit we usually need an invitation letter from the ${n} company, your company letterhead / cover letter, NTN or business registration, 6-month bank statement and confirmed reservations. We process business-visit visas — not work visas.`,
    },
    {
      question: isFileService || kind === "embassy" ? `${n} visa appointment in Islamabad` : `${n} visa agent in Islamabad`,
      answer: isFileService || kind === "embassy"
        ? `${where ? where + ". " : ""}O.S Travel & Tours (Blue Area, Islamabad) books your ${n} appointment, prepares the file and briefs you before submission. Applicants from Lahore, Karachi, Peshawar and other cities can also apply through us.`
        : `O.S Travel & Tours in Blue Area, Islamabad processes ${n} visas for clients across Pakistan — DTS-licensed with ${"10+"} years of experience. WhatsApp ${"0333-5542877"} to start.`,
    },
    {
      question: `${n} work visa for Pakistani — open or not?`,
      answer: WORK_VISA_ANSWER,
    },
    {
      question: `${n} work visa fee for Pakistani`,
      answer: `We don't handle ${n} work visas or work permits, so we can't advise on work-visa fees. For employment visas, contact the ${n} embassy or a licensed Overseas Employment Promoter registered with the Bureau of Emigration. For visit visas, our price is ${price || "available on request"}.`,
    },
  ];

  // Country-specific extras for high-volume searches.
  if (country.slug === "united-states-usa-visa") {
    faqs.splice(2, 0,
      { question: "US visa appointment Pakistan wait time", answer: "Interview wait times at the U.S. Embassy Islamabad and Consulate Karachi change every month. Check the U.S. State Department visa appointment wait-time tool; we monitor slots and book the earliest available date for you." },
      { question: "U.S. B1/B2 visa fee in Pakistan", answer: "The U.S. B1/B2 visa application (MRV) fee is US$185, paid before booking the interview. It is non-refundable. Our file processing charge is separate." },
      { question: "U.S. visa application online Pakistan — how to apply?", answer: "Fill the DS-160 online form, pay the MRV fee, book your interview and attend at the U.S. Embassy Islamabad or Consulate Karachi. We prepare the DS-160 and brief you for the interview." },
    );
  }
  if (country.slug === "malaysia-visa") {
    faqs.splice(1, 0,
      { question: "Malaysia e visa price in Pakistan", answer: `The Malaysia visa through O.S Travel & Tours costs ${price} (${PRICES_UPDATED}). We are an approved Malaysia e-visa facilitator and drop-box agent in Islamabad.` },
      { question: "Malaysia visit visa price in Pakistan for 1 month", answer: `A standard Malaysia tourist visa allows a stay of up to 30 days (1 month). Our price is ${price}, including application handling.` },
      { question: "Malaysia visit visa for 6 months — is it possible?", answer: "Malaysia tourist visas are usually valid for 3–6 months for entry, with a stay of up to 30 days per visit. Longer stays need a different visa category." },
    );
  }
  return faqs;
}
