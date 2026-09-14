import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { visaCountries } from "../src/data/visaCountries.js";
import { fileProcessingCountries } from "../src/data/fileProcessingCountries.js";
import { blogPosts } from "../src/data/blogPosts.js";
import { site } from "../src/data/site.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const DIST_DIR = path.join(ROOT_DIR, "dist");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");

const SITE_URL = "https://ostravels.com";
const TODAY = new Date().toISOString().split("T")[0];

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
    description: "Best visa services for Pakistanis — Malaysia, Singapore, Thailand, Saudi Arabia, China & more. Complete application & document prep by O.S Travel & Tours, Islamabad.",
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

// Add all dynamic visa country pages
for (const country of visaCountries) {
  routes.push({
    path: `/visa/${country.slug}/`,
    title: `Best ${country.name} Visa Services for Pakistani Citizens | O.S Travel & Tours`,
    description: country.metaDescription || `Apply for a ${country.name} visa from Pakistan with O.S Travel & Tours. Complete application filing, document audit, and fast processing in Islamabad.`,
    image: country.image || `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.85",
    changefreq: "monthly",
    h1: `Best ${country.name} Visa Services in Islamabad`,
    content: `<p>${(country.description && country.description[0]) || country.metaDescription}</p>`,
  });
}

// Add all dynamic Schengen / western file processing countries
for (const country of fileProcessingCountries) {
  routes.push({
    path: `/schengen-visa-file-processing/${country.slug}/`,
    title: `Best ${country.name} Visa File Processing Services | O.S Travel & Tours`,
    description: country.metaDescription || `Professional ${country.name} visa file processing in Islamabad, Pakistan. Full document preparation, cover letter, and verified reservations.`,
    image: `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.85",
    changefreq: "monthly",
    h1: `Best ${country.name} Visa File Processing Services`,
    content: `<p>${(country.description && country.description[0]) || country.metaDescription}</p>`,
  });
}

// Add all blog posts
for (const post of blogPosts) {
  routes.push({
    path: `/blog/${post.slug}/`,
    title: `${post.title} | O.S Travel & Tours`,
    description: post.excerpt,
    image: post.image || `${SITE_URL}/img/og-cover.jpg`,
    priority: "0.75",
    changefreq: "monthly",
    h1: post.title,
    content: `<p>${post.excerpt}</p>`,
    isArticle: true,
    publishedTime: post.date,
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
    
    // Replace title
    let html = baseTemplate.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
    
    // Replace meta description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );

    // Replace canonical tag (or insert if not present)
    if (html.includes('<link rel="canonical"')) {
      html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
    } else {
      html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
    }

    // Replace Open Graph metadata
    html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i, `<meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />`);
    html = html.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i, `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />`);
    html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
    html = html.replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i, `<meta property="og:image" content="${route.image}" />`);

    // Replace Twitter metadata
    html = html.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />`);
    html = html.replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}" />`);
    html = html.replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:image" content="${route.image}" />`);

    // Inject prerendered semantic content inside <div id="root">
    const prerenderedBody = `
      <header class="page__header" style="padding: 2rem 1rem; text-align: center;">
        <h1>${route.h1}</h1>
      </header>
      <main class="section__container" style="padding: 1.5rem 1rem;">
        ${route.content}
      </main>
    `;

    // Only inject inside root for non-root routes to keep homepage layout intact
    if (route.path !== "/") {
      html = html.replace('<div id="root"></div>', `<div id="root">${prerenderedBody}</div>`);
    }

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

function generateSitemap() {
  console.log("Generating submit-ready sitemap.xml...");

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset\n`;
  xml += `  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n`;
  xml += `  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n`;
  xml += `  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n`;
  xml += `    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n`;

  for (const route of routes) {
    const canonicalUrl = `${SITE_URL}${route.path}`;
    xml += `  <url>\n`;
    xml += `    <loc>${canonicalUrl}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    if (route.image) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${route.image}</image:loc>\n`;
      xml += `      <image:title>${route.h1.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</image:title>\n`;
      xml += `    </image:image>\n`;
    }
    xml += `  </url>\n\n`;
  }

  xml += `</urlset>\n`;

  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), xml, "utf-8");
  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), xml, "utf-8");
  console.log(`Sitemap written successfully to public/sitemap.xml and dist/sitemap.xml (${routes.length} URLs).`);
}

prerender();
