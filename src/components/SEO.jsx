import { useEffect } from "react";

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

/**
 * Drop <SEO .../> at the top of any page component.
 *
 * <SEO
 *   title="Malaysia Visa"
 *   description="Best Malaysia visa services for Pakistani citizens..."
 *   keywords={["Best Malaysia Visa Services", "Malaysia Visa Islamabad", ...]}
 *   image={country.image}
 *   path="/visa/malaysia-visa/"
 * />
 */
export default function SEO({
  title,
  description,
  keywords = [],
  image = DEFAULT_IMAGE,
  path = "/",
  type = "website",
  noindex = false,
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Best Travel Agency in Islamabad, Pakistan`;
    document.title = fullTitle;

    const canonicalUrl = `${SITE_URL}${path}`;
    const keywordString = Array.isArray(keywords) ? keywords.join(", ") : keywords;

    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywordString);
    setMetaTag("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setLinkTag("canonical", canonicalUrl);

    // Open Graph
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:locale", "en_PK");

    // Twitter
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);
  }, [title, description, keywords, image, path, type, noindex]);

  return null;
}
