import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { countryDirectory, guidePath, agencyPath } from "../data/countryDirectory";
import { formatPrice, PRICES_UPDATED } from "../data/pricing";
import { baseKeywords } from "../data/seoKeywords";
import SEO from "../components/SEO";

const GROUPS = [
  { id: "all", label: "All Countries" },
  { id: "visa", label: "Asia, Gulf & Africa" },
  { id: "schengen", label: "Schengen / Europe" },
  { id: "file", label: "UK, USA, Canada & more" },
];

// Hub page: every country with its price and links to the service page,
// the "visa for Pakistani" guide and the "best travel agency" page.
export default function VisaGuides() {
  const [group, setGroup] = useState("all");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return countryDirectory.filter(
      (c) => (group === "all" || c.category === group) && (!q || c.name.toLowerCase().includes(q))
    );
  }, [group, query]);

  return (
    <>
      <SEO
        title={`Visa Price List & Guides for Pakistani Citizens ${PRICES_UPDATED.split(" ")[1]}`}
        description={`Visa price list ${PRICES_UPDATED} for Pakistani passport holders — ${countryDirectory.length} countries incl. Malaysia, Thailand, Japan, Bahrain, Kenya, UK, USA & Schengen. Requirements & how to apply.`}
        keywords={[
          "Visa Price List Pakistan",
          "Visa Fee for Pakistani Citizens",
          "Visa for Pakistani Passport Holders",
          "Visa Requirements for Pakistani",
          "Best Travel Agency for Visa in Pakistan",
          ...baseKeywords,
        ]}
        path="/visa-guides/"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Visa Guides" }]}
      />

      <div className="page__header">
        <h1>Visa Guides &amp; Price List for Pakistani Citizens</h1>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol className="breadcrumb__list">
            <li><Link to="/">Home</Link></li>
            <li>/</li>
            <li aria-current="page">Visa Guides</li>
          </ol>
        </nav>
      </div>

      <section className="section__container">
        <p className="section__description">
          Current O.S Travel &amp; Tours prices ({PRICES_UPDATED}) for {countryDirectory.length} destinations, with a
          requirements guide and service details for each country. Embassy fees can change — confirm on WhatsApp before paying.
        </p>

        <div className="guides__toolbar">
          <div className="guides__tabs" role="tablist" aria-label="Filter by region">
            {GROUPS.map((g) => (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={group === g.id}
                className={`guides__tab ${group === g.id ? "active" : ""}`}
                onClick={() => setGroup(g.id)}
              >
                {g.label}
              </button>
            ))}
          </div>
          <label className="guides__search">
            <i className="ri-search-line" aria-hidden="true"></i>
            <input
              type="search"
              placeholder="Search a country…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search a country"
            />
          </label>
        </div>

        <div className="landing__table-wrap">
          <table className="landing__table guides__table">
            <thead>
              <tr>
                <th scope="col">Country</th>
                <th scope="col">O.S Price</th>
                <th scope="col">Guides</th>
              </tr>
            </thead>
            <tbody>
              {list.map((c) => {
                const p = c.data.priceEntry;
                return (
                  <tr key={c.key}>
                    <th scope="row">
                      <Link to={c.servicePath}>{c.name} Visa</Link>
                    </th>
                    <td>
                      {p ? (
                        <>
                          {p.options ? <small>From </small> : null}
                          {formatPrice(p.price, p.currency)}
                          {p.note ? <small className="guides__note"> + embassy fee</small> : null}
                        </>
                      ) : (
                        "On request"
                      )}
                    </td>
                    <td className="guides__links">
                      <Link to={guidePath(c.key)}>{c.name} visa for Pakistani</Link>
                      <Link to={agencyPath(c.key)}>Best agency for {c.name} visa</Link>
                    </td>
                  </tr>
                );
              })}
              {list.length === 0 && (
                <tr><td colSpan="3">No country matches “{query}”. Message us on WhatsApp — we may still handle it.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
