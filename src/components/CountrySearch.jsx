import { useId, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { visaMenuIndex, fileMenuIndex } from "../data/menuIndex.generated";
import { site } from "../data/site";

// Extra words people type for a country.
const ALIASES = {
  "united-kingdom-uk-visa": ["uk", "england", "britain", "london"],
  "united-states-usa-visa": ["usa", "us", "america", "b1 b2"],
  "saudi-arabia-visa": ["ksa", "umrah", "saudia"],
  "hongkong-visa": ["hk"],
  "south-korea-visa": ["korea"],
  "philippine-visa": ["philippines"],
  "czech-republic-visa": ["czechia"],
  "netherlands-visa": ["holland"],
  "turkey-visa": ["turkiye", "istanbul"],
  "france-visa": ["schengen", "europe", "paris"],
  "new-zealand-visa": ["nz"],
};

// One searchable list; when a country has both a visa page and a file page,
// the /visa/ page wins (Turkey, Hong Kong, China, Philippines).
const ENTRIES = (() => {
  const seen = new Set();
  const out = [];
  for (const c of visaMenuIndex) {
    seen.add(c.name);
    out.push({ ...c, path: `/visa/${c.slug}/`, group: "Visa" });
  }
  for (const c of fileMenuIndex) {
    if (seen.has(c.name)) continue;
    out.push({ ...c, path: `/schengen-visa-file-processing/${c.slug}/`, group: "Visa File Processing" });
  }
  return out
    .map((e) => ({ ...e, haystack: [e.name, ...(ALIASES[e.slug] || [])].join(" ").toLowerCase() }))
    .sort((a, b) => a.name.localeCompare(b.name));
})();

function score(entry, q) {
  const name = entry.name.toLowerCase();
  if (name.startsWith(q)) return 0;
  if (name.split(/[\s()]+/).some((w) => w.startsWith(q))) return 1;
  if (entry.haystack.includes(q)) return 2;
  return -1;
}

export default function CountrySearch({ variant = "light", placeholder = "Search a country — e.g. Malaysia, UK, Japan…" }) {
  const navigate = useNavigate();
  const listId = useId();
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ENTRIES.slice(0, 8);
    return ENTRIES.map((e) => [e, score(e, q)])
      .filter(([, s]) => s >= 0)
      .sort((a, b) => a[1] - b[1] || a[0].name.localeCompare(b[0].name))
      .map(([e]) => e)
      .slice(0, 8);
  }, [query]);

  const go = (entry) => {
    setOpen(false);
    setQuery("");
    inputRef.current?.blur();
    navigate(entry.path);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (results[active]) go(results[active]);
  };

  const noMatch = query.trim() && results.length === 0;

  return (
    <form className={`csearch csearch--${variant}`} role="search" onSubmit={onSubmit}>
      <div className="csearch__box">
        <i className="ri-search-line csearch__icon" aria-hidden="true"></i>
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded={open && (results.length > 0 || !!noMatch)}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={open && results[active] ? `${listId}-${active}` : undefined}
          aria-label="Search visa by country"
          placeholder={placeholder}
          value={query}
          autoComplete="off"
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={onKeyDown}
        />
        <button type="submit" className="csearch__btn">Search</button>
      </div>

      {open && (results.length > 0 || noMatch) && (
        <ul className="csearch__list" id={listId} role="listbox">
          {results.map((r, i) => (
            <li
              key={r.path}
              id={`${listId}-${i}`}
              role="option"
              aria-selected={i === active}
              className={i === active ? "active" : undefined}
              onMouseDown={(e) => {
                e.preventDefault();
                go(r);
              }}
              onMouseEnter={() => setActive(i)}
            >
              <span className="csearch__name">{r.name} Visa</span>
              <span className="csearch__group">{r.group}</span>
            </li>
          ))}
          {noMatch && (
            <li className="csearch__empty" role="option" aria-selected="false">
              No page for “{query}” yet —{" "}
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi O.S Travel, do you process ${query} visa?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onMouseDown={(e) => e.stopPropagation()}
              >
                ask us on WhatsApp
              </a>
            </li>
          )}
        </ul>
      )}
    </form>
  );
}
