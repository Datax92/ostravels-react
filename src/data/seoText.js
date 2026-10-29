// Shared title / description rules — used by the <SEO> component at runtime
// AND by scripts/prerender.js, so Google sees the same title either way.

export const SITE_NAME = "O.S Travel & Tours";
const SHORT_BRAND = "O.S Travels";
const TITLE_MAX = 62;
const DESC_MAX = 158;

const cutAtWord = (s, max) =>
  s.length <= max ? s : s.slice(0, max).replace(/\s+\S*$/, "").replace(/[\s,—–\-&|:]+$/, "").trim();

// Adds the brand without ever cutting the keyword part of the title:
// full brand if it fits, short brand if that fits, otherwise no brand.
export function brandTitle(base) {
  if (!base) return `${SITE_NAME} | Best Travel Agency in Islamabad`;
  const clean = base.replace(/\s*[|—–-]\s*O\.S Travel(s| & Tours)\s*$/i, "").trim();
  for (const t of [`${clean} | ${SITE_NAME}`, `${clean} | ${SHORT_BRAND}`]) {
    if (t.length <= TITLE_MAX) return t;
  }
  return cutAtWord(clean, TITLE_MAX);
}

export function clampDescription(desc) {
  if (!desc) return desc;
  const d = desc.replace(/\s+/g, " ").trim();
  return d.length <= DESC_MAX + 2 ? d : cutAtWord(d, DESC_MAX - 1) + "…";
}

// Page titles shared by runtime pages and the prerenderer.
export const visaPageTitle = (c) => `Best ${c.name} Visa Services in Islamabad`;
export const filePageTitle = (c) => `${c.name} Visa File Processing in Islamabad`;
