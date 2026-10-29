// ============================================================================
// Countries added in the October 2026 update. Same shape as visaCountries.raw.js
// (slug, name, metaDescription, facts, requirements, description) plus
// `officialSite` — the government/embassy portal the information was checked
// against. Prices live in pricing.js, not here.
//
// Government fees change often and third-party sites disagree on them, so the
// pages quote the O.S package price and link the official portal instead of
// hard-coding embassy fees.
// ============================================================================

const NON_REFUNDABLE = "In case of visa refusal / rejection, embassy fee and service charges are not refundable";

export const newVisaCountriesRaw = [
  {
    slug: "japan-visa",
    name: "Japan",
    metaDescription:
      "Japan visa for Pakistani citizens 2026 — tourist & business visit visa file processing in Islamabad. Documents, VFS submission, processing time & price.",
    officialSite: { label: "Embassy of Japan in Pakistan", url: "https://www.pk.emb-japan.go.jp/itprtop_en/index.html" },
    facts: [
      { label: "Visa Type", value: "Short-Term Stay (Tourist / Business / Family Visit)" },
      { label: "Submission", value: "Japan Visa Application Centre (VFS Global) — Islamabad, Lahore, Karachi" },
      { label: "Duration Of Stay", value: "Up to 15, 30 or 90 days (as granted)" },
      { label: "Processing Time", value: "Approx. 7–10 working days after submission" },
      { label: "Photo Size", value: "45mm x 45mm, white background" },
      { label: "Terms and Conditions", value: NON_REFUNDABLE },
    ],
    requirements: [
      "Original passport (valid for at least 6 months) with old passports",
      "Visa application form, filled and signed",
      "One recent photograph (45mm x 45mm, white background)",
      "CNIC copy and Family Registration Certificate (FRC)",
      "Personal bank statement (last 6 months) with bank maintenance certificate",
      "Income tax returns / NTN certificate",
      "Employment letter & leave approval, or business registration documents",
      "Day-by-day schedule of stay (itinerary) in Japan",
      "Return flight reservation and hotel booking",
      "Invitation letter and letter of guarantee (if visiting family / business partner)",
    ],
    description: [
      "Pakistani passport holders need a visa before travelling to Japan. Tourist, business and family-visit applications are lodged through the Japan Visa Application Centre (operated by VFS Global) in Islamabad, Lahore or Karachi — the Embassy of Japan does not accept walk-in visa files.",
      "Japan is one of the most document-sensitive visa files for Pakistanis: the embassy checks your financial history, travel record and the consistency of your itinerary. O.S Travel & Tours prepares a complete Japan visa file — schedule of stay, cover letter, verified flight and hotel reservations — and reviews your bank statement before submission.",
      "Japan announced revised visa fees in 2026. Because consular fees change, we confirm the current fee on the day of submission. Our file processing charge covers documentation, appointment and submission support.",
    ],
  },
  {
    slug: "south-korea-visa",
    name: "South Korea",
    metaDescription:
      "South Korea visa for Pakistani citizens 2026 — C-3 tourist & business visa file processing in Islamabad. Requirements, bank statement, processing time & price.",
    officialSite: { label: "Embassy of the Republic of Korea in Pakistan", url: "https://overseas.mofa.go.kr/pk-en/index.do" },
    facts: [
      { label: "Visa Type", value: "C-3 Short-Term Visit (Tourism / Business)" },
      { label: "Submission", value: "Embassy of the Republic of Korea, Islamabad (via authorised channel)" },
      { label: "Duration Of Stay", value: "Up to 90 days" },
      { label: "Processing Time", value: "Approx. 2–4 weeks" },
      { label: "K-ETA", value: "Not available for Pakistani passports — a visa is required" },
      { label: "Terms and Conditions", value: NON_REFUNDABLE },
    ],
    requirements: [
      "Original passport (valid for at least 6 months) with old passports",
      "Visa application form with one recent photograph (35mm x 45mm)",
      "CNIC copy",
      "Personal bank statement (last 6 months) and bank maintenance certificate",
      "Income tax returns (last 2 years) / NTN",
      "Employment certificate, salary slips, or business registration & company letterhead",
      "Return flight reservation and hotel booking",
      "Travel itinerary and cover letter",
      "Invitation letter from Korean company / host (business visits)",
    ],
    description: [
      "Pakistani citizens need a visa for South Korea; the K-ETA electronic travel authorisation is only for visa-exempt nationalities. Short-term tourist and business visits fall under the C-3 visa category and are decided by the Embassy of the Republic of Korea in Islamabad.",
      "Korean consular officers focus on financial strength, employment ties to Pakistan and previous travel. O.S Travel & Tours prepares a structured South Korea visa file with a strong cover letter, itinerary and reservations, and audits your documents before submission to reduce refusal risk.",
    ],
  },
  {
    slug: "south-africa-visa",
    name: "South Africa",
    metaDescription:
      "South Africa visa for Pakistani citizens 2026 — visitor visa file processing via VFS Islamabad. Document checklist, BI-84 form, processing time & price.",
    officialSite: { label: "South Africa Department of Home Affairs", url: "https://www.dha.gov.za/index.php/immigration-services/apply-for-a-south-african-visa" },
    facts: [
      { label: "Visa Type", value: "Visitor's Visa — Section 11 (Tourism / Business / Family)" },
      { label: "Submission", value: "VFS Global South Africa Visa Centre, Pakistan" },
      { label: "Application Form", value: "BI-84" },
      { label: "Duration Of Stay", value: "Up to 90 days (as granted)" },
      { label: "Processing Time", value: "Several weeks — apply early" },
      { label: "Terms and Conditions", value: NON_REFUNDABLE },
    ],
    requirements: [
      "Original passport valid for at least 30 days beyond your stay, with 2 blank pages",
      "Completed BI-84 visa application form",
      "Two recent passport-size photographs",
      "Bank statements (last 3–6 months) showing sufficient funds",
      "Employment letter / business documents and leave approval",
      "Return flight reservation and accommodation proof",
      "Cover letter explaining purpose of visit",
      "Invitation letter with host's ID / permit copy (family or business visits)",
      "Yellow fever vaccination certificate (if travelling through a yellow-fever area)",
    ],
    description: [
      "Pakistani passport holders must obtain a South African visitor's visa before travel. Applications are submitted in person through the VFS Global South Africa visa centre in Pakistan, and the decision is made by the Department of Home Affairs.",
      "South African visitor visas can take several weeks, so we recommend starting your file 6–8 weeks before departure. O.S Travel & Tours handles the BI-84 form, document checklist, cover letter, reservations and VFS appointment for you.",
    ],
  },
  {
    slug: "morocco-visa",
    name: "Morocco",
    metaDescription:
      "Morocco visa for Pakistani citizens 2026 — e-Visa eligibility check & embassy visa processing in Islamabad. Requirements, processing time & price.",
    officialSite: { label: "ACCES MAROC — Official Morocco e-Visa Portal", url: "https://www.acces-maroc.ma/" },
    facts: [
      { label: "Visa Type", value: "Tourist Visa (e-Visa or Embassy Visa)" },
      { label: "Duration Of Stay", value: "Up to 30 days" },
      { label: "Processing Time", value: "Approx. 5–10 working days (varies)" },
      { label: "Terms and Conditions", value: NON_REFUNDABLE },
    ],
    requirements: [
      "Original passport (valid for at least 6 months) with 2 blank pages",
      "Recent photograph with white background",
      "CNIC copy",
      "Bank statement (last 6 months)",
      "Return flight reservation and hotel booking",
      "Employment letter or business documents",
      "Copy of valid USA / UK / Schengen / Canada visa or residence permit (if applying for e-Visa)",
    ],
    description: [
      "Pakistani citizens need a visa to visit Morocco. Morocco's official ACCES MAROC portal issues electronic visas, and eligibility depends on your nationality and the visas or residence permits you already hold. Where the e-Visa is not available, the application is filed with the Embassy of the Kingdom of Morocco in Islamabad.",
      "O.S Travel & Tours checks which route applies to your passport, prepares the documents and submits the application on your behalf — so you know before paying whether you qualify for the e-Visa.",
    ],
  },
  {
    slug: "kenya-visa",
    name: "Kenya",
    metaDescription:
      "Kenya eTA for Pakistani citizens 2026 — Electronic Travel Authorisation applied online in 3 working days. Requirements, yellow fever rules & price.",
    officialSite: { label: "Kenya eTA — Official Portal", url: "https://www.etakenya.go.ke/" },
    facts: [
      { label: "Visa Type", value: "eTA (Electronic Travel Authorisation)" },
      { label: "Application", value: "100% online — no passport submission" },
      { label: "Validity", value: "90 days from issue" },
      { label: "Processing Time", value: "Approx. 3 working days" },
      { label: "Terms and Conditions", value: NON_REFUNDABLE },
    ],
    requirements: [
      "Passport bio-page scan (valid for at least 6 months, 1 blank page)",
      "Recent passport-style photograph",
      "Return flight reservation",
      "Hotel booking or host invitation with address in Kenya",
      "Email address and phone number",
      "Yellow fever vaccination certificate (recommended / required on some routes)",
    ],
    description: [
      "Since January 2024 Kenya has replaced visas with the Electronic Travel Authorisation (eTA) for almost all visitors, including Pakistani citizens. The eTA is applied for online on the official etakenya.go.ke portal and must be approved before you board your flight.",
      "O.S Travel & Tours files your Kenya eTA from scanned documents — no office visit or passport courier needed — and sends you the approved eTA by email and WhatsApp.",
    ],
  },
  {
    slug: "uganda-visa",
    name: "Uganda",
    metaDescription:
      "Uganda visa for Pakistani citizens 2026 — online e-Visa via Uganda immigration portal. Yellow fever certificate, documents, processing time & price.",
    officialSite: { label: "Uganda Directorate of Citizenship & Immigration Control", url: "https://visas.immigration.go.ug/" },
    facts: [
      { label: "Visa Type", value: "Tourist / Business e-Visa" },
      { label: "Application", value: "Online — scanned documents only" },
      { label: "Duration Of Stay", value: "Up to 90 days (single entry)" },
      { label: "Processing Time", value: "Approx. 3–7 working days" },
      { label: "Health Requirement", value: "Yellow fever vaccination certificate mandatory" },
      { label: "Terms and Conditions", value: NON_REFUNDABLE },
    ],
    requirements: [
      "Passport bio-page scan (valid for at least 6 months)",
      "Recent passport-size photograph",
      "Yellow fever vaccination certificate",
      "Return flight reservation",
      "Hotel booking or invitation letter from Uganda",
      "Bank statement (business applicants: company letter)",
    ],
    description: [
      "Pakistani citizens visiting Uganda apply for an e-Visa through the official immigration portal before travel. A valid yellow fever vaccination certificate is required for entry.",
      "O.S Travel & Tours prepares and submits your Uganda e-Visa online, and can also arrange flights, hotel bookings and travel insurance for your trip.",
    ],
  },
  {
    slug: "ethiopia-visa",
    name: "Ethiopia",
    metaDescription:
      "Ethiopia e-Visa for Pakistani citizens 2026 — 30 & 90 day tourist e-Visa via official portal. Requirements, entry via Addis Ababa, processing time & price.",
    officialSite: { label: "Ethiopia e-Visa — Official Portal", url: "https://www.evisa.gov.et/" },
    facts: [
      { label: "Visa Type", value: "Tourist e-Visa (30 or 90 days)" },
      { label: "Application", value: "100% online" },
      { label: "Port Of Entry", value: "Addis Ababa Bole International Airport" },
      { label: "Processing Time", value: "Approx. 3 working days" },
      { label: "Terms and Conditions", value: NON_REFUNDABLE },
    ],
    requirements: [
      "Passport bio-page scan (valid for at least 6 months)",
      "Recent passport-size photograph",
      "Return flight reservation via Addis Ababa",
      "Hotel booking or host address in Ethiopia",
      "Yellow fever vaccination certificate (if arriving from an endemic country)",
    ],
    description: [
      "Ethiopia offers an official online tourist e-Visa for 30 or 90 days. The e-Visa is used for entry through Addis Ababa Bole International Airport — a major hub for Ethiopian Airlines flights from Pakistan to Africa.",
      "O.S Travel & Tours files your Ethiopia e-Visa from scanned documents and can book your Ethiopian Airlines ticket at the same time.",
    ],
  },
  {
    slug: "tanzania-visa",
    name: "Tanzania",
    metaDescription:
      "Tanzania visa for Pakistani citizens 2026 — online e-Visa for Zanzibar, Kilimanjaro & safari trips. Requirements, processing time & price.",
    officialSite: { label: "Tanzania Immigration — Official e-Visa Portal", url: "https://visa.immigration.go.tz/" },
    facts: [
      { label: "Visa Type", value: "Ordinary (Tourist) e-Visa" },
      { label: "Application", value: "Online — scanned documents only" },
      { label: "Duration Of Stay", value: "Up to 90 days" },
      { label: "Processing Time", value: "Up to 10 working days" },
      { label: "Terms and Conditions", value: NON_REFUNDABLE },
    ],
    requirements: [
      "Passport bio-page scan (valid for at least 6 months)",
      "Recent passport-size photograph",
      "Return flight reservation",
      "Hotel booking / safari itinerary or invitation letter",
      "Yellow fever vaccination certificate (if arriving from an endemic country)",
    ],
    description: [
      "Pakistani citizens visiting mainland Tanzania or Zanzibar should apply for the Tanzania e-Visa through the official immigration portal before travel. Processing can take up to 10 working days, so apply at least two weeks ahead.",
      "O.S Travel & Tours prepares your Tanzania e-Visa application, safari / hotel reservations and flights in one package.",
    ],
  },
  {
    slug: "zambia-visa",
    name: "Zambia",
    metaDescription:
      "Zambia visa for Pakistani citizens 2026 — online e-Visa for Victoria Falls & business trips. Requirements, processing time & price from Islamabad.",
    officialSite: { label: "Zambia Department of Immigration — e-Visa", url: "https://eservices.zambiaimmigration.gov.zm/" },
    facts: [
      { label: "Visa Type", value: "Tourist / Business e-Visa (single or double entry)" },
      { label: "Application", value: "Online — approval letter before travel" },
      { label: "Duration Of Stay", value: "Up to 90 days" },
      { label: "Processing Time", value: "Approx. 3–5 working days" },
      { label: "Terms and Conditions", value: NON_REFUNDABLE },
    ],
    requirements: [
      "Passport bio-page scan (valid for at least 6 months)",
      "Recent passport-size photograph",
      "Return flight reservation",
      "Hotel booking or invitation letter from Zambian host / company",
      "Copy of host's NRC / permit (if invited)",
    ],
    description: [
      "Pakistani passport holders must obtain a Zambian visa approval before travel through the Department of Immigration e-Visa service. Zambia revised its visa fees from 1 January 2026.",
      "O.S Travel & Tours handles your Zambia e-Visa online and can arrange the full Victoria Falls trip — flights, hotels and travel insurance.",
    ],
  },
  {
    slug: "zimbabwe-visa",
    name: "Zimbabwe",
    metaDescription:
      "Zimbabwe visa for Pakistani citizens 2026 — e-Visa applied online in advance. Requirements, processing time & price with O.S Travel & Tours.",
    officialSite: { label: "Zimbabwe e-Visa — Official Portal", url: "https://www.evisa.gov.zw/" },
    facts: [
      { label: "Visa Type", value: "Tourist / Business e-Visa (pre-approved)" },
      { label: "Application", value: "Online — approval required before travel" },
      { label: "Duration Of Stay", value: "Up to 30 days (as granted)" },
      { label: "Processing Time", value: "Approx. 5–10 working days" },
      { label: "Terms and Conditions", value: NON_REFUNDABLE },
    ],
    requirements: [
      "Passport bio-page scan (valid for at least 6 months, 3 blank pages)",
      "Recent passport-size photograph",
      "Return flight reservation",
      "Hotel booking or invitation letter with host's ID",
      "Bank statement",
    ],
    description: [
      "Pakistani citizens must have their Zimbabwe visa approved before travelling; the application is made through the official Zimbabwe e-Visa portal.",
      "O.S Travel & Tours prepares and submits your Zimbabwe e-Visa, and can combine it with Zambia for a Victoria Falls itinerary.",
    ],
  },
  {
    slug: "bahrain-visa",
    name: "Bahrain",
    metaDescription:
      "Bahrain visit visa for Pakistani citizens 2026 — 14 days, 1 month & 3 months e-Visa from Rs 25,000. Requirements, processing time & instant WhatsApp support.",
    officialSite: { label: "Kingdom of Bahrain e-Visa — NPRA", url: "https://www.evisa.gov.bh/" },
    facts: [
      { label: "Visa Type", value: "Tourist e-Visa" },
      { label: "Options", value: "14 Days single entry • 1 Month • 3 Months multiple entry" },
      { label: "Application", value: "100% online — scanned documents" },
      { label: "Processing Time", value: "Approx. 3–5 working days" },
      { label: "Terms and Conditions", value: NON_REFUNDABLE },
    ],
    requirements: [
      "Passport bio-page scan (valid for at least 6 months)",
      "Recent photograph with white background",
      "CNIC copy",
      "Confirmed return air ticket",
      "Hotel booking for the full stay",
      "Bank statement (last 6 months)",
    ],
    description: [
      "Bahrain issues tourist e-Visas through the official Nationality, Passports & Residence Affairs (NPRA) portal. Pakistani passport holders can apply online for a 14-day, 1-month or 3-month visit visa — no embassy visit needed.",
      "O.S Travel & Tours files your Bahrain e-Visa from scanned documents, books your Gulf Air / PIA flight and hotel, and shares the approved e-Visa on WhatsApp.",
    ],
  },
  {
    slug: "bangladesh-visa",
    name: "Bangladesh",
    metaDescription:
      "Bangladesh visa for Pakistani citizens 2026 — tourist & business visa via Bangladesh High Commission Islamabad. Documents, processing time & price.",
    officialSite: { label: "Bangladesh Online Visa Application", url: "https://www.visa.gov.bd/" },
    facts: [
      { label: "Visa Type", value: "Tourist / Business Visa" },
      { label: "Submission", value: "Bangladesh High Commission, Islamabad (online form + submission)" },
      { label: "Duration Of Stay", value: "As granted by the High Commission" },
      { label: "Processing Time", value: "Approx. 1–3 weeks" },
      { label: "Terms and Conditions", value: NON_REFUNDABLE },
    ],
    requirements: [
      "Original passport (valid for at least 6 months)",
      "Online visa application form (printed and signed)",
      "Two recent photographs (white background)",
      "CNIC copy",
      "Bank statement / solvency certificate",
      "Return flight reservation and hotel booking",
      "Invitation letter from Bangladeshi host or company (business visa)",
      "Employment letter or business registration documents",
    ],
    description: [
      "Pakistani citizens need a visa to travel to Bangladesh. The application form is filled on the official Bangladesh online visa portal and submitted with documents to the Bangladesh High Commission in Islamabad. Bangladesh simplified visa procedures for Pakistani nationals in 2025.",
      "O.S Travel & Tours prepares your Bangladesh visa file — online form, invitation, reservations and cover letter — and handles submission and collection at the High Commission.",
    ],
  },
];

// New Zealand joins the Western file-processing category.
export const newFileProcessingCountries = [
  {
    slug: "new-zealand-visa",
    name: "New Zealand",
    metaDescription:
      "New Zealand visitor visa for Pakistani citizens 2026 — complete file processing in Islamabad. Online application, documents, IVL levy & price.",
    officialSite: { label: "Immigration New Zealand", url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/visitor-visa" },
    facts: [
      { label: "Visa Type", value: "Visitor Visa (Tourism / Family / Business visit)" },
      { label: "Application", value: "Online via Immigration New Zealand" },
      { label: "Duration Of Stay", value: "Up to 9 months in an 18-month period (as granted)" },
      { label: "Levy", value: "International Visitor Conservation & Tourism Levy (IVL) applies" },
      { label: "Processing Time", value: "Several weeks — apply 2–3 months ahead" },
    ],
    requirements: [
      "Original passport valid for at least 3 months beyond departure from New Zealand",
      "Recent digital photograph (Immigration NZ specification)",
      "Bank statements (last 6 months) and bank maintenance certificate",
      "Income tax returns / NTN certificate",
      "Employment letter, salary slips & leave approval, or business documents",
      "Return flight reservation and accommodation details",
      "Travel itinerary and cover letter",
      "Invitation letter and host's NZ status documents (family visits)",
      "Family Registration Certificate (FRC) / Marriage Registration Certificate (MRC)",
    ],
    description: [
      "Pakistani citizens need a Visitor Visa to travel to New Zealand. Applications are made online through Immigration New Zealand and are assessed on genuine intent, funds and ties to Pakistan. From 1 October 2026 visitor visa applications are fully online.",
      "O.S Travel & Tours prepares the complete New Zealand visa file — online form, financial documentation review, cover letter, itinerary and reservations — so your application is consistent and well-evidenced before it is lodged.",
    ],
  },
];
