import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { visaCountries } from "../src/data/visaCountries.js";
import { fileProcessingCountries } from "../src/data/fileProcessingCountries.js";
import { blogPosts } from "../src/data/blogPosts.js";
import { site } from "../src/data/site.js";
import { countryDirectory, guidePath, agencyPath } from "../src/data/countryDirectory.js";
import { guideContent, agencyContent, contentToHtml } from "../src/data/landingContent.js";
import { countryMetaDescription, formatPrice, PRICES_UPDATED, PRICES_UPDATED_ISO } from "../src/data/pricing.js";
import { countryMeta, defaultMeta } from "../src/data/fileProcessingMeta.js";
import { brandTitle, clampDescription, visaPageTitle, filePageTitle } from "../src/data/seoText.js";
import { countryDetails, schengenFacts, schengenSteps, schengenRefusalReasons } from "../src/data/fileProcessingDetails.js";
import { directoryEntryForName } from "../src/data/countryDirectory.js";
import { countryFaqs } from "../src/data/countryFaqs.js";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const link = (href, label) => `<a href="${href}">${esc(label)}</a>`;
const ul = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
const table = (rows) => `<table>${rows.map(([l, v]) => `<tr><th>${esc(l)}</th><td>${esc(v)}</td></tr>`).join("")}</table>`;
const priceOf = (c) => (c.priceEntry ? `${c.priceEntry.options ? "From " : ""}${formatPrice(c.priceEntry.price, c.priceEntry.currency)}` : "On request");

// Internal-link block added to every prerendered page (crawl paths + context).
const SITE_LINKS = `<nav aria-label="Site sections"><h2>Explore O.S Travel &amp; Tours</h2>${ul([
  link("/visa/", "Visa Services"),
  link("/schengen-visa-file-processing/", "Visa File Processing (Schengen, UK, USA, Canada)"),
  link("/visa-guides/", `Visa Price List ${PRICES_UPDATED}`),
  link("/air-ticketing/", "Air Ticketing & Flight Booking"),
  link("/travel-insurance/", "Travel Insurance"),
  link("/blog/", "Travel & Visa Blog"),
  link("/reviews/", "Client Reviews"),
  link("/about/", "About Us"),
  link("/contact/", "Contact Us"),
])}</nav>`;

const contactBlock = `<h2>Contact Our Visa Desk</h2><p>${esc(site.address)}. Call ${site.phones.slice(0, 2).join(" / ")} or WhatsApp ${site.phones[2]}. Email ${site.email}.</p>`;


// Static body for a country service page: price, overview, documents.
function countryHtml(country, kind = "visa") {
  let h = "";
  const p = country.priceEntry;
  if (p) {
    const rows = p.options ? p.options.map((o) => [o.label, formatPrice(o.price, p.currency)]) : [[p.label, formatPrice(p.price, p.currency)]];
    h += `<h2>${esc(country.name)} Visa Price (${PRICES_UPDATED})</h2><table>${rows.map(([l, v]) => `<tr><th>${esc(l)}</th><td>${esc(v)}</td></tr>`).join("")}</table>`;
    if (p.note) h += `<p>${esc(p.note)}</p>`;
  }
  h += `<h2>Overview</h2>${country.description.map((d) => `<p>${esc(d)}</p>`).join("")}`;
  if (country.requirements.length) h += `<h2>Required Documents</h2><ul>${country.requirements.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>`;
  if (kind === "file") h += fileDetailsHtml(country);
  h += `<h2>${esc(country.name)} Visa — Frequently Asked Questions</h2>`;
  for (const f of countryFaqs(country, { isFile: kind === "file" })) h += `<h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p>`;
  h += `<h2>Why Apply Through O.S Travel &amp; Tours</h2><p>Our visa desk in Blue Area, Islamabad reviews every ${esc(country.name)} file before submission, prepares the cover letter, itinerary and reservations, and keeps you updated on WhatsApp. We are licensed by the Department of Tourist Services, Government of Pakistan.</p>`;
  if (country.officialSite) h += `<p>Official source: <a href="${esc(country.officialSite.url)}" rel="noopener nofollow">${esc(country.officialSite.label)}</a></p>`;
  const dir = directoryEntryForName(country.name);
  const related = [];
  if (dir) related.push(link(guidePath(dir.key), `${dir.name} visa for Pakistani citizens`), link(agencyPath(dir.key), `Best travel agent for ${dir.name} visa`));
  related.push(link("/visa-guides/", `Visa price list ${PRICES_UPDATED}`), link("/contact/", "Book a consultation"));
  h += `<h2>Related Pages</h2>${ul(related)}`;
  return h;
}

function fileDetailsHtml(country) {
  const d = countryDetails[country.slug];
  const schengen = country.region === "Schengen";
  let h = "";
  if (d) h += `<h2>${esc(country.name)} at a Glance</h2>${table([["Capital", d.capital], ["Currency", d.currency], ["Popular cities", d.cities]])}`;
  const facts = schengen ? schengenFacts : d?.facts || [];
  if (facts.length) h += `<h2>${esc(country.name)} Visa Key Facts</h2>${table(facts.map((f) => [f.label, f.value]))}`;
  const steps = schengen ? schengenSteps : d?.steps || [];
  if (steps.length) h += `<h2>How We Process Your ${esc(country.name)} Visa File</h2><ol>${steps.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>`;
  if (schengen) h += `<h2>Common Reasons for Refusal</h2>${ul(schengenRefusalReasons.map(esc))}`;
  if (d?.tip) h += `<h2>Expert Tip</h2><p>${esc(d.tip)}</p>`;
  return h;
}

function blogHtml(post) {
  let h = `<p>${esc(post.excerpt)}</p>`;
  for (const b of post.content) {
    if (b.type === "h2") h += `<h2>${esc(b.text)}</h2>`;
    else if (b.type === "h3") h += `<h3>${esc(b.text)}</h3>`;
    else if (b.type === "p") h += `<p>${esc(b.text)}</p>`;
    else if (b.type === "quote") h += `<blockquote><p>${esc(b.text)}</p></blockquote>`;
    else if (b.type === "list") h += ul(b.items.map(esc));
  }
  if (post.faqs?.length) {
    h += `<h2>Frequently Asked Questions</h2>`;
    for (const f of post.faqs) h += `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`;
  }
  h += `<p>${link("/visa-guides/", `Visa price list ${PRICES_UPDATED}`)} · ${link("/blog/", "More travel guides")}</p>`;
  return h;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const DIST_DIR = path.join(ROOT_DIR, "dist");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");

const SITE_URL = "https://ostravels.com";
// Date the site content was last revised (bump when pages change).
const CONTENT_UPDATED = PRICES_UPDATED_ISO;

// Define all routes and metadata
const routes = [
  {
    path: "/",
    title: "O.S Travel & Tours | Best Travel Agency in Islamabad, Pakistan",
    description: "O.S Travel & Tours is the best travel agency in Islamabad, Pakistan — offering visa services, air ticketing, hotel booking, travel insurance and Schengen visa file processing.",
    image: `${SITE_URL}/img/og-cover.jpg`,
    priority: "1.00",
    changefreq: "weekly",
    h1: "Best Travel Agency in Islamabad, Pakistan — Visa Services & Air Ticketing",
    content: "<p>Trusted visa consultancy, Umrah packages, flight booking & travel insurance for 12,000+ happy clients in Islamabad and nationwide.</p>",
  },
  {
    path: "/about/",
    title: "About Us — Best Travel Agency Islamabad | O.S Travel & Tours",
    description: "O.S Travel & Tours — 10+ years of visa services, Umrah, air ticketing & travel insurance in Islamabad. 12,000+ happy clients. Get a free consultation today.",
    image: `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.85",
    changefreq: "monthly",
    h1: "About O.S Travel & Tours — Premier Travel Agency in Islamabad",
    content: "<p>Over a decade of excellence providing visa file processing, air tickets, hotel bookings, and verified travel consultancy across Pakistan.</p>",
  },
  {
    path: "/about/registrations-and-licenses/",
    title: "Official Registrations, Licenses & Accreditation — O.S Travel & Tours",
    description: "Verify the legal credentials, government registrations, tax compliance, and travel licensing of O.S Travel & Tours in Islamabad, Pakistan.",
    image: `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.80",
    changefreq: "monthly",
    h1: "Registrations, Licenses & Trust Credentials",
    content: "<p>Verified FBR tax registration, Department of Tourist Services licensing, and corporate compliance documentation for O.S Travel & Tours.</p>",
  },
  {
    path: "/contact/",
    title: "Contact Us — Visa & Travel Enquiries | O.S Travel & Tours",
    description: "Contact O.S Travel & Tours in Blue Area, Islamabad. Call 051-2120700, email info@ostravels.com for visa services, Umrah, air ticketing & hotel booking assistance.",
    image: `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.85",
    changefreq: "monthly",
    h1: "Contact O.S Travel & Tours",
    content: "<p>Visit our Blue Area office in Islamabad or connect via WhatsApp for immediate travel assistance, visa file guidance, and flight reservations.</p>",
  },
  {
    path: "/visa/",
    title: "Best Visa Services Islamabad — All Countries | O.S Travel & Tours",
    description: "Best visa services for Pakistanis — Malaysia, Thailand, Japan, Bahrain, Kenya, Saudi Arabia, China & 30+ more. Visa price list 2026 & document prep in Islamabad.",
    image: `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.95",
    changefreq: "weekly",
    h1: "Best Visa Services in Islamabad, Pakistan",
    content: "<p>Complete visa application assistance, document preparation, and authorized drop-box processing for Asian, Middle Eastern, and worldwide destinations.</p>",
  },
  {
    path: "/schengen-visa-file-processing/",
    title: "Schengen Visa File Processing Islamabad | O.S Travel & Tours",
    description: "Expert Schengen visa file processing in Islamabad, Pakistan. Complete file preparation, cover letter, verified flight booking & hotel voucher for France, Germany, Italy & more.",
    image: `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.95",
    changefreq: "weekly",
    h1: "Schengen Visa File Processing in Islamabad",
    content: "<p>Comprehensive visa file preparation, appointment scheduling, and document audits for European, UK, USA, and Canadian consular applications.</p>",
  },
  {
    path: "/air-ticketing/",
    title: "Air Ticketing Islamabad — Cheap Flights | O.S Travel & Tours",
    description: "Book cheap air tickets in Islamabad with O.S Travel & Tours. Domestic & international flights on PIA, Emirates, Qatar Airways, Turkish Airlines & more. Get instant fares.",
    image: `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.90",
    changefreq: "weekly",
    h1: "Air Ticketing in Islamabad — Domestic & International Flights",
    content: "<p>Direct GDS flight booking on all major airlines flying from Pakistan with instant e-ticket issuance and flexible date changes.</p>",
  },
  {
    path: "/travel-insurance/",
    title: "Travel Insurance Islamabad — Schengen Plans | O.S Travel & Tours",
    description: "Buy Schengen-compliant travel insurance in Islamabad with O.S Travel & Tours. Medical emergency, trip cancellation & baggage cover from PKR 1,200/day. Instant e-policy.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1400&auto=format&fit=crop",
    priority: "0.90",
    changefreq: "weekly",
    h1: "Travel Insurance That Keeps You Covered Worldwide",
    content: "<p>Instant Schengen-compliant travel medical insurance meeting all European embassy €30,000 / $50,000 requirements.</p>",
  },
  {
    path: "/branches/",
    title: "Our Office Location in Islamabad — Blue Area Head Office | O.S Travel & Tours",
    description: "Visit O.S Travel & Tours headquarters in Blue Area, Islamabad for in-person visa consultations, Schengen file processing, air tickets, and travel insurance.",
    image: `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.85",
    changefreq: "weekly",
    h1: "Our Office Location — Islamabad Head Office",
    content: "<p>Find O.S Travel & Tours headquarters in Blue Area Islamabad for walk-in visa consultancy, passport audits, and corporate travel bookings.</p>",
  },
  {
    path: "/branches/islamabad-blue-area/",
    title: "Travel Agency in Blue Area Islamabad — Head Office | O.S Travel & Tours",
    description: "Visit O.S Travel & Tours at Aaly Plaza, Fazal-e-Haq Rd, Blue Area, Islamabad for visa services, Umrah packages, flight tickets, and Schengen visa file preparation.",
    image: `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.85",
    changefreq: "weekly",
    h1: "Islamabad Head Office — Blue Area",
    content: "<p>Conveniently located at Office # 3, Aaly Plaza on Fazal-e-Haq Road in Blue Area, Islamabad. Serving the Twin Cities with full visa and ticketing services.</p>",
  },
  {
    path: "/reviews/",
    title: "Client Reviews — Google Reviews Islamabad | O.S Travel & Tours",
    description: "Read genuine Google reviews from happy travellers who used O.S Travel & Tours for visa services & air ticketing in Islamabad. Rated 5 stars by 12,000+ clients.",
    image: `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.75",
    changefreq: "weekly",
    h1: "Client Reviews & Testimonials",
    content: "<p>Rated 5 stars across verified Google reviews for prompt visa approvals, transparent pricing, and courteous support.</p>",
  },
  {
    path: "/blog/",
    title: "Travel & Visa Blog — Guides & Tips | O.S Travel & Tours",
    description: "Expert visa guides, Umrah tips, travel checklists & visa file processing explainers from O.S Travel & Tours — Islamabad's top travel agency for Pakistanis.",
    image: `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.85",
    changefreq: "weekly",
    h1: "Travel & Visa Blog — Guides, Tips & News",
    content: "<p>Detailed guides covering embassy requirements, visa fees, packing lists, and step-by-step application walkthroughs for Pakistani travelers.</p>",
  },
  {
    path: "/privacy-policy/",
    title: "Privacy Policy | O.S Travel & Tours",
    description: "Learn how O.S Travel & Tours handles, protects, and retains your personal information, passport copies, and travel documentation.",
    image: `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.50",
    changefreq: "yearly",
    h1: "Privacy Policy",
    content: "<p>Comprehensive data privacy and document confidentiality terms for clients of O.S Travel & Tours.</p>",
  },
  {
    path: "/terms/",
    title: "Terms & Conditions | O.S Travel & Tours",
    description: "Read the service terms and conditions for visa file processing, air ticketing, travel insurance, and hotel reservations with O.S Travel & Tours.",
    image: `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.50",
    changefreq: "yearly",
    h1: "Terms & Conditions",
    content: "<p>Standard service agreements, airline ticketing terms, and consular disclaimers for travel clients.</p>",
  },
];

// Rich static content for core pages (previously one sentence each).
const visaList = ul(visaCountries.map((c) => `${link(`/visa/${c.slug}/`, `${c.name} Visa`)} — ${esc(priceOf(c))}`));
const fileList = ul(fileProcessingCountries.map((c) => `${link(`/schengen-visa-file-processing/${c.slug}/`, `${c.name} Visa File Processing`)} — ${esc(priceOf(c))}`));
const blogList = ul(blogPosts.map((p) => `${link(`/blog/${p.slug}/`, p.title)} — ${esc(p.excerpt)}`));
const testimonials = site.testimonials.map((t) => `<blockquote><p>${esc(t.quote)}</p><cite>${esc(t.name)}</cite></blockquote>`).join("");
const servicesHtml = `<h2>Our Travel Services</h2>${ul([
  `${link("/visa/", "Visa services")} for ${visaCountries.length} countries — Malaysia, Thailand, Indonesia, Japan, Bahrain, Kenya, Saudi Arabia and more.`,
  `${link("/schengen-visa-file-processing/", "Visa file processing")} for Schengen countries, UK, USA, Canada, Australia and New Zealand.`,
  `${link("/air-ticketing/", "Air ticketing")} on PIA, Emirates, Qatar Airways, Turkish Airlines, Saudia, Airblue, Fly Jinnah and all major airlines.`,
  `${link("/travel-insurance/", "Travel insurance")} including Schengen-compliant €30,000 medical cover.`,
  "Hotel bookings, Umrah packages and corporate travel management.",
])}`;

const coreContent = {
  "/": `<p>${esc(site.description)}</p>${servicesHtml}<h2>Popular Visa Destinations & Prices (${PRICES_UPDATED})</h2>${visaList}<h2>Visa File Processing</h2>${fileList}<h2>Why Choose O.S Travel &amp; Tours</h2>${ul(["Licensed by the Department of Tourist Services (DTS), Government of Pakistan", `${site.stats[0].value} years of experience and ${site.stats[1].value} happy clients`, "Authorized visa drop box for Malaysia, Thailand, Indonesia and Vietnam", "Office in Blue Area, Islamabad with nationwide WhatsApp support"])}<h2>What Our Clients Say</h2>${testimonials}${contactBlock}`,
  "/about/": `<h2>Our Mission</h2><p>${esc(site.about.mission)}</p><h2>Our Vision</h2><p>${esc(site.about.vision)}</p><h2>Visa Services</h2><p>${esc(site.about.visaServices)}</p><h2>Serving All of Pakistan</h2><p>${esc(site.about.reach)}</p>${servicesHtml}${contactBlock}`,
  "/visa/": `<p>Complete visa assistance — document preparation, application filing and embassy / drop-box submission — for Pakistani passport holders. Current prices (${PRICES_UPDATED}):</p><h2>Visa Services by Country</h2>${visaList}<h2>Visa File Processing</h2>${fileList}${contactBlock}`,
  "/schengen-visa-file-processing/": `<p>Complete visa file preparation for Schengen countries and the UK, USA, Canada, Australia and New Zealand: application forms, cover letter, itinerary, flight and hotel reservations, insurance and appointment booking.</p><h2>Countries We Process</h2>${fileList}<h2>Schengen Visa Key Rules</h2>${table(schengenFacts.map((f) => [f.label, f.value]))}<h2>How It Works</h2><ol>${schengenSteps.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>${contactBlock}`,
  "/air-ticketing/": `<p>Book domestic and international flights from Islamabad, Lahore, Karachi, Peshawar, Sialkot and Multan. Send your route, dates and passengers through our booking form and receive live fares on WhatsApp.</p><h2>Airlines We Book</h2>${ul(["PIA", "Emirates", "Qatar Airways", "Etihad Airways", "Turkish Airlines", "Saudia", "flydubai", "Airblue", "Serene Air", "Fly Jinnah"])}<h2>Popular Routes</h2>${ul(["Islamabad to Dubai", "Islamabad to Jeddah (Umrah)", "Islamabad to London", "Lahore to Doha", "Karachi to Riyadh", "Islamabad to Kuala Lumpur"])}<h2>Why Book With Us</h2>${ul(["Fare comparison across all major airlines", "Umrah and group fares", "Date changes, re-issues and refunds handled for you", "Partner flight search on BookMyFlight.pk"])}${contactBlock}`,
  "/travel-insurance/": `<p>Travel insurance for Pakistani travellers — Schengen-compliant policies with at least €30,000 medical cover accepted by European embassies, plus worldwide plans for Umrah, family and student trips.</p><h2>What Travel Insurance Covers</h2>${ul(["Emergency medical treatment and hospitalisation", "Medical evacuation and repatriation", "Trip cancellation and interruption", "Lost baggage and passport", "Personal liability"])}<h2>Who Needs It</h2><p>Travel insurance is mandatory for Schengen visa applications and strongly recommended for every international trip.</p>${contactBlock}`,
  "/contact/": `<h2>Head Office</h2><p>${esc(site.address)}</p><h2>Phone &amp; WhatsApp</h2>${ul(site.phones.map((x) => esc(x)))}<h2>Email</h2><p>${esc(site.email)} / ${esc(site.emailAlt)}</p><h2>Office Hours</h2><p>Monday to Saturday, 9:00 AM – 6:00 PM.</p>`,
  "/reviews/": `<p>Read what clients say about O.S Travel &amp; Tours visa services, air ticketing and travel support.</p><h2>Client Testimonials</h2>${testimonials}<h2>Follow Us</h2><p>Join ${site.stats[2].value} travellers on our <a href="${site.facebook}" rel="noopener">Facebook page</a>.</p>`,
  "/blog/": `<p>Visa guides, embassy updates, travel tips and price lists for Pakistani travellers.</p><h2>Latest Articles</h2>${blogList}`,
  "/branches/": `<h2>Islamabad Head Office — Blue Area</h2><p>${esc(site.address)}</p>${link("/branches/islamabad-blue-area/", "Office details & directions")}${servicesHtml}${contactBlock}`,
  "/branches/islamabad-blue-area/": `<h2>Address</h2><p>${esc(site.address)}</p><h2>Services at This Office</h2>${ul(["Walk-in visa consultation & document review", "Authorized visa drop box submissions", "Air ticketing & Umrah bookings", "Travel insurance"])}${contactBlock}`,
  "/about/registrations-and-licenses/": `<h2>Department of Tourist Services (DTS)</h2><p>O.S Travel &amp; Tours is registered with the Department of Tourist Services, Government of Pakistan. <a href="${site.dtsGovUrl}" rel="noopener">Verify our DTS record</a>.</p><h2>Why Licensing Matters</h2><p>Licensed agencies are accountable to the government regulator — always check an agency's registration before handing over passports or payments.</p>${contactBlock}`,
};

for (const r of routes) {
  if (coreContent[r.path]) r.content = coreContent[r.path];
}

// Visa guides hub + price list
routes.push({
  path: "/visa-guides/",
  title: `Visa Price List ${PRICES_UPDATED} for Pakistani Citizens | O.S Travel & Tours`,
  description: `Visa price list ${PRICES_UPDATED} for Pakistani passport holders — ${countryDirectory.length} countries incl. Malaysia, Thailand, Japan, Bahrain, Kenya, UK, USA & Schengen.`,
  image: `${SITE_URL}/img/og-cover.jpg`,
  priority: "0.90",
  changefreq: "weekly",
  h1: "Visa Guides & Price List for Pakistani Citizens",
  content:
    "<table><tr><th>Country</th><th>O.S Price</th><th>Guides</th></tr>" +
    countryDirectory
      .map((c) => {
        const p = c.data.priceEntry;
        const price = p ? `${p.options ? "From " : ""}${formatPrice(p.price, p.currency)}` : "On request";
        return `<tr><td><a href="${c.servicePath}">${esc(c.name)} Visa</a></td><td>${esc(price)}</td><td><a href="${guidePath(c.key)}">${esc(c.name)} visa for Pakistani</a> · <a href="${agencyPath(c.key)}">Best agency for ${esc(c.name)} visa</a></td></tr>`;
      })
      .join("") +
    "</table>",
});

// Add all dynamic visa country pages
for (const country of visaCountries) {
  routes.push({
    path: `/visa/${country.slug}/`,
    title: visaPageTitle(country),
    description: countryMetaDescription(country),
    image: country.image || `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.85",
    changefreq: "monthly",
    h1: `Best ${country.name} Visa Services in Islamabad`,
    content: countryHtml(country),
  });
}

// Add all dynamic Schengen / western file processing countries
for (const country of fileProcessingCountries) {
  routes.push({
    path: `/schengen-visa-file-processing/${country.slug}/`,
    title: filePageTitle(country),
    description: countryMetaDescription(country, "file"),
    image: (countryMeta[country.slug] || defaultMeta).img,
    priority: "0.85",
    changefreq: "monthly",
    h1: `Best ${country.name} Visa File Processing Services`,
    content: countryHtml(country, "file"),
  });
}

// Keyword landing pages: "{country} visa for Pakistani" + "best travel agency for {country} visa"
for (const entry of countryDirectory) {
  for (const [type, build, pathFn] of [["guide", guideContent, guidePath], ["agency", agencyContent, agencyPath]]) {
    const c = build(entry);
    routes.push({
      path: pathFn(entry.key),
      title: c.title,
      description: c.metaDescription,
      image: entry.image,
      priority: type === "guide" ? "0.80" : "0.75",
      changefreq: "monthly",
      h1: c.h1,
      content: contentToHtml(c),
    });
  }
}

// Add all blog posts
for (const post of blogPosts) {
  routes.push({
    path: `/blog/${post.slug}/`,
    title: post.title,
    description: post.excerpt,
    image: post.image || `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.75",
    changefreq: "monthly",
    h1: post.title,
    content: blogHtml(post),
    isArticle: true,
    publishedTime: post.date,
    lastmod: post.updated || post.date,
  });
}

// Prerender function
export function prerender() {
  console.log(`Starting SSG Pre-rendering for ${routes.length} routes...`);

  if (!fs.existsSync(DIST_DIR)) {
    console.error("Error: dist/ directory not found. Please run 'npm run build' first.");
    process.exit(1);
  }

  const templatePath = path.join(DIST_DIR, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("Error: dist/index.html not found.");
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(templatePath, "utf-8");

  for (const route of routes) {
    const canonicalUrl = `${SITE_URL}${route.path}`;
    route.title = route.title.startsWith("O.S Travel") ? route.title : brandTitle(route.title);
    route.description = clampDescription(route.description);
    
    // Replace title
    let html = baseTemplate.replace(/<title>.*?<\/title>/i, () => `<title>${esc(route.title)}</title>`);
    
    // Replace meta description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      () => `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );

    // Replace canonical tag (or insert if not present)
    if (html.includes('<link rel="canonical"')) {
      html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, () => `<link rel="canonical" href="${canonicalUrl}" />`);
    } else {
      html = html.replace('</head>', () => `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
    }

    // Replace Open Graph metadata
    html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i, () => `<meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />`);
    html = html.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i, () => `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />`);
    html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, () => `<meta property="og:url" content="${canonicalUrl}" />`);
    html = html.replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i, () => `<meta property="og:image" content="${route.image}" />`);

    // Replace Twitter metadata
    html = html.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i, () => `<meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />`);
    html = html.replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i, () => `<meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}" />`);
    html = html.replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i, () => `<meta name="twitter:image" content="${route.image}" />`);

    // Inject prerendered semantic content inside <div id="root">
    const prerenderedBody = `
      <header class="page__header" style="padding: 2rem 1rem; text-align: center;">
        <h1>${esc(route.h1)}</h1>
      </header>
      <main class="section__container" style="padding: 1.5rem 1rem;">
        ${route.content}
        ${SITE_LINKS}
      </main>
    `;

    // React's createRoot replaces this markup on load, so every page —
    // including the homepage — ships real content for crawlers.
    html = html.replace('<div id="root"></div>', () => `<div id="root">${prerenderedBody}</div>`);

    // Determine target directory and file
    const cleanPath = route.path.replace(/^\/|\/$/g, "");
    const targetDir = cleanPath ? path.join(DIST_DIR, cleanPath) : DIST_DIR;
    fs.mkdirSync(targetDir, { recursive: true });
    
    fs.writeFileSync(path.join(targetDir, "index.html"), html, "utf-8");
  }

  console.log(`Successfully pre-rendered ${routes.length} routes to static HTML.`);

  // Generate XML Sitemap
  generateSitemap();
}

// Sitemap section for each URL — one child sitemap per section so Search
// Console reports indexing per section.
function sitemapSection(p) {
  if (p.startsWith("/blog/")) return "blog";
  if (p.startsWith("/visa/") && p !== "/visa/") return "visas";
  if (p.startsWith("/schengen-visa-file-processing/") && p !== "/schengen-visa-file-processing/") return "file-processing";
  if (p.endsWith("-visa-for-pakistani/")) return "visa-guides";
  if (p.startsWith("/best-travel-agency-for-")) return "travel-agents";
  return "pages";
}

// Stable lastmod: the date the page's content actually changed — never the
// build date, otherwise every deploy claims every page changed and Google
// learns to ignore lastmod.
function lastmodFor(route) {
  if (route.lastmod) return route.lastmod;
  return CONTENT_UPDATED;
}

const xmlEsc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function generateSitemap() {
  console.log("Generating sitemap index + section sitemaps...");

  const sections = {};
  for (const route of routes) (sections[sitemapSection(route.path)] ||= []).push(route);

  const order = ["pages", "visas", "file-processing", "visa-guides", "travel-agents", "blog"];
  const written = [];

  for (const name of order) {
    const list = sections[name];
    if (!list?.length) continue;
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;
    for (const route of list) {
      xml += `  <url>\n`;
      xml += `    <loc>${xmlEsc(`${SITE_URL}${route.path}`)}</loc>\n`;
      xml += `    <lastmod>${lastmodFor(route)}</lastmod>\n`;
      xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
      xml += `    <priority>${route.priority}</priority>\n`;
      if (route.image) {
        const img = route.image.startsWith("http") ? route.image : `${SITE_URL}${route.image}`;
        xml += `    <image:image><image:loc>${xmlEsc(img)}</image:loc></image:image>\n`;
      }
      xml += `  </url>\n`;
    }
    xml += `</urlset>\n`;
    const file = `sitemap-${name}.xml`;
    fs.writeFileSync(path.join(PUBLIC_DIR, file), xml, "utf-8");
    fs.writeFileSync(path.join(DIST_DIR, file), xml, "utf-8");
    const newest = list.map(lastmodFor).sort().at(-1);
    written.push({ file, newest, count: list.length });
  }

  let index = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const w of written) {
    index += `  <sitemap>\n    <loc>${SITE_URL}/${w.file}</loc>\n    <lastmod>${w.newest}</lastmod>\n  </sitemap>\n`;
  }
  index += `</sitemapindex>\n`;

  // sitemap.xml (referenced by robots.txt) is the index.
  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), index, "utf-8");
  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), index, "utf-8");
  console.log(
    `Sitemap index written: ${written.map((w) => `${w.file} (${w.count})`).join(", ")} — ${routes.length} URLs total.`
  );
}

prerender();
