import { Link } from "react-router-dom";
import { countryByKey, guidePath, agencyPath } from "../data/countryDirectory";
import { guideContent, agencyContent } from "../data/landingContent";
import { site } from "../data/site";
import { baseKeywords } from "../data/seoKeywords";
import SEO from "../components/SEO";
import FAQAccordion from "../components/FAQAccordion";
import ServiceSchema from "../components/ServiceSchema";
import NotFound from "./NotFound";

// Renders both keyword landing pages:
//   type="guide"  → /{key}-visa-for-pakistani/
//   type="agency" → /best-travel-agency-for-{key}-visa/
export default function CountryLanding({ type, countryKey }) {
  const entry = countryByKey[countryKey];
  if (!entry) return <NotFound />;

  const c = type === "agency" ? agencyContent(entry) : guideContent(entry);
  const path = type === "agency" ? agencyPath(entry.key) : guidePath(entry.key);
  const n = entry.name;

  const keywords = type === "agency"
    ? [
        `Best Travel Agent for ${n} Visa`,
        `Best Travel Agency for ${n} Visa`,
        `${n} Visa Agent in Pakistan`,
        `${n} Visa Agent Islamabad`,
        `${n} Visa Consultant Pakistan`,
        `Best ${n} Visa Agent in Pakistan`,
        `${n} Visa Service Islamabad`,
        ...baseKeywords,
      ]
    : [
        `${n} Visa for Pakistani`,
        `${n} Visa for Pakistani Citizens`,
        `${n} Visa Requirements for Pakistani`,
        `${n} Visa Fee in Pakistan`,
        `${n} Visa from Pakistan`,
        `${n} Visit Visa Pakistan`,
        ...baseKeywords,
      ];

  const waText = encodeURIComponent(`Hi O.S Travel, I want to apply for a ${n} visa. Please share the requirements and price.`);

  return (
    <>
      <SEO
        title={c.title}
        description={c.metaDescription}
        keywords={keywords}
        image={entry.image}
        path={path}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Visa Guides", url: "/visa-guides/" },
          { name: c.h1 },
        ]}
      />
      <ServiceSchema
        id={`landing-${type}-${entry.key}`}
        name={`${n} Visa Services for Pakistani Citizens`}
        description={c.metaDescription}
        url={`https://ostravels.com${path}`}
      />

      <div className="country__hero">
        <img
          src={entry.image}
          alt={`${n} visa for Pakistani citizens — O.S Travel & Tours Islamabad`}
          width="1200"
          height="500"
          fetchPriority="high"
          decoding="async"
        />
        <div className="country__hero-overlay" />
        <div className="country__hero-content">
          <h1>{c.h1}</h1>
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol className="breadcrumb__list">
              <li><Link to="/">Home</Link></li>
              <li>/</li>
              <li><Link to="/visa-guides/">Visa Guides</Link></li>
              <li>/</li>
              <li aria-current="page">{n}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="country__content">
        <section className="section__container">
          <div className="detail__grid">
            <article className="detail__main landing__body">
              {c.intro.map((p, i) => <p key={i} className={i === 0 ? "landing__lead" : undefined}>{p}</p>)}

              {c.sections.map((s) => (
                <section key={s.h2}>
                  <h2>{s.h2}</h2>
                  {(s.paragraphs || []).map((p, i) => <p key={i}>{p}</p>)}
                  {s.table && s.table.length > 0 && (
                    <div className="landing__table-wrap">
                      <table className="landing__table">
                        <tbody>
                          {s.table.map((r) => (
                            <tr key={r.label}><th scope="row">{r.label}</th><td>{r.value}</td></tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {s.list && (
                    <ul className="req__list">
                      {s.list.map((item) => (
                        <li key={item}><i className="ri-checkbox-circle-fill"></i> {item}</li>
                      ))}
                    </ul>
                  )}
                  {s.ordered && (
                    <ol className="landing__steps">
                      {s.ordered.map((item) => <li key={item}>{item}</li>)}
                    </ol>
                  )}
                  {s.compare && (
                    <div className="landing__table-wrap">
                      <table className="landing__table landing__table--compare">
                        <thead>
                          <tr>{s.compare.head.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr>
                        </thead>
                        <tbody>
                          {s.compare.rows.map((r) => (
                            <tr key={r[0]}>{r.map((x, i) => (i === 0 ? <th key={i} scope="row">{x}</th> : <td key={i}>{x}</td>))}</tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}

              {type === "agency" && (
                <section>
                  <h2>What Our Clients Say</h2>
                  <div className="landing__quotes">
                    {site.testimonials.map((t) => (
                      <blockquote key={t.name}>
                        <p>“{t.quote}”</p>
                        <cite>— {t.name}</cite>
                      </blockquote>
                    ))}
                  </div>
                  <Link to="/reviews/" className="landing__more">Read all client reviews →</Link>
                </section>
              )}

              {c.official && (
                <div className="official__box">
                  <h3><i className="ri-government-line"></i> Official Source</h3>
                  <p>
                    Requirements are checked against the official portal. Rules and fees can change without notice, so always confirm before travel:
                  </p>
                  <a href={c.official.url} target="_blank" rel="noopener noreferrer nofollow">
                    {c.official.label} <i className="ri-external-link-line"></i>
                  </a>
                </div>
              )}

              <FAQAccordion items={c.faqs} id={`landing-${type}-${entry.key}`} />
            </article>

            <aside className="detail__side">
              <h4>{n} Visa</h4>
              {entry.data.facts.filter((f) => f.highlight).map((f) => (
                <div className="stat stat--price" key={f.label}>
                  <span>{f.label}</span>
                  <span>{f.value}</span>
                </div>
              ))}
              <div className="side__actions">
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp"
                >
                  <i className="ri-whatsapp-fill"></i> Apply on WhatsApp
                </a>
                <Link to={entry.servicePath} className="btn">
                  {n} Visa Service Details
                </Link>
                <Link to={c.crossLink.path} className="side__link">
                  {c.crossLink.label} →
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
