import { useParams, Link } from "react-router-dom";
import { visaCountries } from "../data/visaCountries";
import NotFound from "./NotFound";
import { site } from "../data/site";
import SEO from "../components/SEO";
import FAQAccordion from "../components/FAQAccordion";
import ServiceSchema from "../components/ServiceSchema";
import { visaCountryKeywords } from "../data/seoKeywords";
import { dropboxNotices } from "../data/dropboxNotices";
import { countryMetaDescription, PRICES_UPDATED } from "../data/pricing";
import { visaPageTitle } from "../data/seoText";
import { countryFaqs as searchFaqs } from "../data/countryFaqs";
import { directoryEntryForName, guidePath, agencyPath } from "../data/countryDirectory";

export default function VisaCountry() {
  const { slug } = useParams();
  const country = visaCountries.find((c) => c.slug === slug);

  if (!country) return <NotFound />;

  const dropboxNotice = dropboxNotices[slug];
  const metaDescription = countryMetaDescription(country);
  const dir = directoryEntryForName(country.name);
  const headingWord = dropboxNotice ? "Authorized" : "Best";

  const countryFaqs = [
    {
      question: `What is the processing time for a ${country.name} visa from Pakistan?`,
      answer: `Processing for a ${country.name} visa typically ranges from 3 to 10 business days for electronic visas, and 7 to 15 business days for sticker submissions through the embassy or authorized drop-box.`
    },
    {
      question: `Can I apply for a ${country.name} visa online through O.S Travel & Tours?`,
      answer: `Yes, you can submit scanned documents (passport bio-page, photograph, CNIC, and bank statement) securely via WhatsApp or email. Our visa desk reviews and files your ${country.name} application directly.`
    },
    {
      question: `Are confirmed flight and hotel bookings mandatory for ${country.name}?`,
      answer: `Yes, consular authorities require verifiable round-trip flight itineraries and hotel accommodation vouchers. We provide official GDS-issued reservations matching embassy criteria.`
    },
    {
      question: `What is the minimum passport validity required for ${country.name}?`,
      answer: `Your Pakistani passport must have a minimum validity of 6 months remaining from the date of entry into ${country.name}, with at least 2 blank visa pages.`
    },
    {
      question: `Why choose O.S Travel & Tours for ${country.name} visa assistance in Islamabad?`,
      answer: `With 10+ years of travel industry experience, physical offices in Blue Area Islamabad, and high visa approval track records, our team provides pre-submission file audits to avoid common consular refusals.`
    }
  ];

  return (
    <>
      <SEO
        title={visaPageTitle(country)}
        description={metaDescription}
        keywords={visaCountryKeywords(country.name)}
        image={country.image}
        path={`/visa/${country.slug}/`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Visa Services", url: "/visa/" },
          { name: `${country.name} Visa` },
        ]}
      />

      <ServiceSchema
        id={`visa-${country.slug}`}
        name={`${country.name} Visa Services for Pakistani Citizens`}
        description={metaDescription}
        url={`https://ostravels.com/visa/${country.slug}/`}
      />

      {country.image && (
        <div className="country__hero">
          <img
            src={country.image}
            alt={`${headingWord} ${country.name} visa services in Islamabad Pakistan — ${country.name} landmark`}
            width="1200"
            height="500"
            fetchPriority="high"
            decoding="async"
          />
          <div className="country__hero-overlay" />
          <div className="country__hero-content">
            <h1>{headingWord} {country.name} Visa Services</h1>
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <ol style={{ display: "flex", listStyle: "none", gap: "0.5rem", padding: 0, margin: 0, justifyContent: "center" }}>
                <li><Link to="/" style={{ color: "inherit" }}>Home</Link></li>
                <li>/</li>
                <li><Link to="/visa/" style={{ color: "inherit" }}>Visa</Link></li>
                <li>/</li>
                <li aria-current="page">{country.name}</li>
              </ol>
            </nav>
          </div>
        </div>
      )}

      <div className="country__content">
        <section className="section__container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.85rem", color: "#64748b", background: "#f1f5f9", padding: "0.35rem 0.85rem", borderRadius: "50px" }}>
              <i className="ri-calendar-check-line" style={{ marginRight: "0.35rem", color: "#F5A623" }}></i>
              Last Updated: {PRICES_UPDATED} (Prices &amp; Requirements Verified)
            </span>
            <Link to="/contact/" style={{ fontSize: "0.85rem", color: "#2887ff", fontWeight: 600 }}>
              Need urgent consultation? Talk to an expert →
            </Link>
          </div>

          <div className="detail__grid">
            <div className="detail__main">
              {dropboxNotice && (
                <div className="dropbox-notice">
                  <div className="dropbox-notice__icon">
                    <i className="ri-shield-check-fill"></i>
                  </div>
                  <div className="dropbox-notice__body">
                    <h2>{dropboxNotice.heading}</h2>
                    <p>{dropboxNotice.text}</p>
                  </div>
                </div>
              )}

              <h2>Overview</h2>
              {country.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {country.requirements.length > 0 && (
                <>
                  <h2>Required Documents</h2>
                  <ul className="req__list">
                    {country.requirements.map((r) => (
                      <li key={r}>
                        <i className="ri-checkbox-circle-fill"></i> {r}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h2>Why Apply Through Us</h2>
              <p>
                Our experienced team guides you through the entire {country.name}{" "}
                visa application process, from document review to submission,
                helping make the process smooth and hassle-free. O.S Travel &amp; Tours
                is one of the best {country.name} visa consultants in Islamabad, Pakistan.
              </p>

              {/* Official immigration reference */}
              <div className="official__box">
                <h3><i className="ri-government-line"></i> Official Embassy &amp; Immigration Source</h3>
                <p>
                  Visa policies, consular fees and immigration rules are set by the {country.name} government and can change without notice. We cross-check every application against the official source before submission.
                </p>
                {country.officialSite ? (
                  <a href={country.officialSite.url} target="_blank" rel="noopener noreferrer nofollow">
                    {country.officialSite.label} <i className="ri-external-link-line"></i>
                  </a>
                ) : (
                  <Link to="/contact/">Ask us for the latest {country.name} embassy fee →</Link>
                )}
              </div>

              {/* Related guides widget (Task 4.6) */}
              <div style={{ marginTop: "2rem", padding: "1.25rem", background: "#fdf8ee", borderRadius: "12px", border: "1px solid #fde68a" }}>
                <h4 style={{ color: "#92400e", marginBottom: "0.5rem" }}>Related Travel &amp; Visa Guides</h4>
                <p style={{ fontSize: "0.9rem", color: "#78350f", marginBottom: "0.75rem" }}>
                  Check our detailed visa guides and travel tips for Pakistani passport holders:
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  {dir && (
                    <>
                      <Link to={guidePath(dir.key)} style={{ fontSize: "0.85rem", color: "#b45309", textDecoration: "underline" }}>
                        {country.name} Visa for Pakistani Citizens — Full Guide
                      </Link>
                      <span>•</span>
                      <Link to={agencyPath(dir.key)} style={{ fontSize: "0.85rem", color: "#b45309", textDecoration: "underline" }}>
                        Best Travel Agency for {country.name} Visa
                      </Link>
                      <span>•</span>
                      <Link to="/visa-guides/" style={{ fontSize: "0.85rem", color: "#b45309", textDecoration: "underline" }}>
                        Visa Price List {PRICES_UPDATED}
                      </Link>
                      <span>•</span>
                    </>
                  )}
                  <Link to="/blog/visa-free-countries-pakistani-passport/" style={{ fontSize: "0.85rem", color: "#b45309", textDecoration: "underline" }}>
                    Visa-Free Countries for Pakistanis
                  </Link>
                  <span>•</span>
                  <Link to="/blog/packing-checklist-international-travel/" style={{ fontSize: "0.85rem", color: "#b45309", textDecoration: "underline" }}>
                    International Travel Packing Checklist
                  </Link>
                  <span>•</span>
                  <Link to="/travel-insurance/" style={{ fontSize: "0.85rem", color: "#b45309", textDecoration: "underline" }}>
                    Get Schengen-Compliant Travel Insurance
                  </Link>
                </div>
              </div>

              {/* FAQ Section with schema */}
              <FAQAccordion items={[...searchFaqs(country), ...countryFaqs.slice(3)]} id={`visa-${country.slug}`} />
            </div>

            <aside className="detail__side">
              <h4>Visa Snapshot</h4>
              {country.facts.map((f, i) => (
                <div className={`stat${f.highlight ? " stat--price" : ""}`} key={i}>
                  <span>{f.label || "Passport Bio Page (Scan Copy)"}</span>
                  <span>{f.value}</span>
                </div>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi O.S Travel, I want to inquire about ${country.name} visa requirements and application.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    background: "#25D366",
                    color: "#ffffff",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    fontWeight: 700,
                    boxShadow: "0 4px 12px rgba(37, 211, 102, 0.35)",
                    border: "none"
                  }}
                >
                  <i className="ri-whatsapp-fill" style={{ fontSize: "1.2rem" }}></i> Chat on WhatsApp
                </a>
                <Link to="/contact/" className="btn" style={{ textAlign: "center" }}>
                  Book In-Person Consultation
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}