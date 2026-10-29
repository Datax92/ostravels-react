// Visual metadata (background image, accent color, flag code) per country card.
// Falls back to defaultMeta if a slug isn't listed here.
export const countryMeta = {
  "france-visa": { img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop", accent: "#1a3faa", flag: "fr" },
  "spain-visa": { img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1200&auto=format&fit=crop", accent: "#aa151b", flag: "es" },
  "united-kingdom-uk-visa": { img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop", accent: "#c8102e", flag: "gb" },
  "united-states-usa-visa": { img: "https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=1200&auto=format&fit=crop", accent: "#3c3b6e", flag: "us" },
  "australia-visa": { img: "https://images.unsplash.com/photo-1524293581917-878a6d017c71?q=80&w=1200&auto=format&fit=crop", accent: "#00247d", flag: "au" },
  "canada-visa": { img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1200&auto=format&fit=crop", accent: "#d80621", flag: "ca" },
  "belgium-visa": { img: "https://images.unsplash.com/photo-1559113202-c916b8e44373?q=80&w=1200&auto=format&fit=crop", accent: "#d21f3c", flag: "be" },
  "netherlands-visa": { img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=1200&auto=format&fit=crop", accent: "#21468b", flag: "nl" },
  "poland-visa": { img: "https://images.unsplash.com/photo-1607427293702-036933bbf746?q=80&w=1200&auto=format&fit=crop", accent: "#dc143c", flag: "pl" },
  "germany-visa": { img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop", accent: "#dd0000", flag: "de" },
  "italy-visa": { img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop", accent: "#008c45", flag: "it" },
  "hungary-visa": { img: "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1200&auto=format&fit=crop", accent: "#ce2939", flag: "hu" },
  "greece-visa": { img: "https://images.unsplash.com/photo-1555993539-1732b0258235?q=80&w=1200&auto=format&fit=crop", accent: "#0d5eaf", flag: "gr" },
  "czech-republic-visa": { img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1200&auto=format&fit=crop", accent: "#11457e", flag: "cz" },
  "switzerland-visa": { img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop", accent: "#d52b1e", flag: "ch" },
  "portugal-visa": { img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1200&auto=format&fit=crop", accent: "#006600", flag: "pt" },
  "denmark-visa": { img: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1200&auto=format&fit=crop", accent: "#c8102e", flag: "dk" },
  "sweden-visa": { img: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1200&auto=format&fit=crop", accent: "#006aa7", flag: "se" },
  "norway-visa": { img: "https://images.unsplash.com/photo-1738574556434-60a48d6711a0?q=80&w=1200&auto=format&fit=crop", accent: "#ba0c2f", flag: "no" },
  "turkey": { img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200&auto=format&fit=crop", accent: "#e30a17", flag: "tr" },
  "hong-kong-visa": { img: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=1200&auto=format&fit=crop", accent: "#de2910", flag: "hk" },
  "china-visa": { img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop", accent: "#ee1c25", flag: "cn" },
  "philippine-visa": { img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200&auto=format&fit=crop", accent: "#0038a8", flag: "ph" },
  "new-zealand-visa": { img: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1200&auto=format&fit=crop", accent: "#00247d", flag: "nz" },
};

export const defaultMeta = {
  img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
  accent: "#2887ff",
  flag: "un",
};
