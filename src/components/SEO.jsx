import { useEffect } from "react";
// ===============================================================================
// ==== EDIT YOUR LIVE DOMAIN HERE (used for canonical + og:url + og:image) ====
const SITE_URL = "https://ostravels.com";
const SITE_NAME = "O.S Travel & Tours";
const DEFAULT_IMAGE = `${SITE_URL}/img/og-cover.jpg`;
// ===============================================================================

function setMetaTag(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id, data) {
  if (!data) return;
  let el = document.head.querySelector(`script[data-seo-id="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("data-seo-id", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data, null, 2);
}

/**
 * Drop <SEO .../> at the top of any page component.
 *
 * <SEO
 *   title="Malaysia Visa"
 *   description="Best Malaysia visa services for Pakistani citizens..."
 *   keywords={["Best Malaysia Visa Services", "Malaysia Visa Islamabad", ...]}
 *   image={country.image}
 *   path="/visa/malaysia-visa/"
 *   type="website"        // or "article"
 *   breadcrumbs={[{ name: "Home", url: "/" }, { name: "Visa", url: "/visa/" }, { name: "Malaysia" }]}
 *   datePublished="2025-01-01"  // for article type
 *   dateModified="2025-06-01"   // for article type
 *   noindex={false}
 * />
 */
export default function SEO({
  title,
  description,
  keywords = [],
  image = DEFAULT_IMAGE,
  path = "/",
  type = "website",
  breadcrumbs = null,
  datePublished = null,
  dateModified = null,
  noindex = false,
}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} | Best Travel Agency in Islamabad, Pakistan`;
    document.title = fullTitle;

    const canonicalUrl = `${SITE_URL}${path}`;
    const keywordString = Array.isArray(keywords) ? keywords.join(", ") : keywords;
    const ogImage = image || DEFAULT_IMAGE;

    // ── Primary meta tags ──────────────────────────────────────────────────────
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywordString);
    setMetaTag("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMetaTag("name", "author", SITE_NAME);
    setLinkTag("canonical", canonicalUrl);

    // ── Geo / Location tags ────────────────────────────────────────────────────
    setMetaTag("name", "geo.region", "PK-IS");
    setMetaTag("name", "geo.placename", "Islamabad, Pakistan");
    setMetaTag("name", "geo.position", "33.7178;73.0734");
    setMetaTag("name", "ICBM", "33.7178, 73.0734");

    // ── Open Graph ────────────────────────────────────────────────────────────
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");
    setMetaTag("property", "og:image:alt", fullTitle);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", type === "article" ? "article" : "website");
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:locale", "en_PK");
    if (type === "article" && datePublished) {
      setMetaTag("property", "article:published_time", datePublished);
      setMetaTag("property", "article:modified_time", dateModified || datePublished);
      setMetaTag("property", "article:author", SITE_NAME);
      setMetaTag("property", "article:section", "Travel & Visa");
    }

    // ── Twitter Card ──────────────────────────────────────────────────────────
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:site", "@ostravels");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);
    setMetaTag("name", "twitter:image:alt", fullTitle);

    // ── JSON-LD: BreadcrumbList ───────────────────────────────────────────────
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          ...(crumb.url ? { "item": `${SITE_URL}${crumb.url}` } : {}),
        })),
      };
      setJsonLd("breadcrumbs", breadcrumbSchema);
    } else {
      // Remove old breadcrumb LD if no breadcrumbs
      const old = document.head.querySelector('script[data-seo-id="breadcrumbs"]');
      if (old) old.remove();
    }

    // ── JSON-LD: WebPage ──────────────────────────────────────────────────────
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": type === "article" ? "Article" : "WebPage",
      "name": fullTitle,
      "description": description,
      "url": canonicalUrl,
      "image": ogImage,
      "isPartOf": { "@type": "WebSite", "url": SITE_URL, "name": SITE_NAME },
      "publisher": {
        "@type": "Organization",
        "name": SITE_NAME,
        "logo": { "@type": "ImageObject", "url": `${SITE_URL}/favicon/apple-touch-icon.png` },
      },
      ...(type === "article" && datePublished ? {
        "datePublished": datePublished,
        "dateModified": dateModified || datePublished,
        "author": { "@type": "Organization", "name": SITE_NAME },
      } : {}),
    };
    setJsonLd("webpage", webPageSchema);

  }, [title, description, keywords, image, path, type, breadcrumbs, datePublished, dateModified, noindex]);

  return null;
}
