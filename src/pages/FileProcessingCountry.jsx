import { useParams, Link } from "react-router-dom";
import { fileProcessingCountries } from "../data/fileProcessingCountries";
import { countryMeta, defaultMeta } from "../data/fileProcessingMeta";
import NotFound from "./NotFound";
import { site } from "../data/site";
import SEO from "../components/SEO";
import FAQAccordion from "../components/FAQAccordion";
import ServiceSchema from "../components/ServiceSchema";
import FileProcessingDetails from "../components/FileProcessingDetails";
import { fileProcessingKeywords } from "../data/seoKeywords";
import { countryMetaDescription, PRICES_UPDATED } from "../data/pricing";
import { filePageTitle } from "../data/seoText";
import { countryFaqs as searchFaqs } from "../data/countryFaqs";
import { directoryEntryForName, guidePath, agencyPath } from "../data/countryDirectory";

export default function FileProcessingCountry() {
  const { slug } = useParams();
  const country = fileProcessingCountries.find((c) => c.slug === slug);

  if (!country) return <NotFound />;

  const meta = countryMeta[country.slug] || defaultMeta;
  const metaDescription = countryMetaDescription(country, "file");
  const dir = directoryEntryForName(country.name);

  const fileFaqs = [
    {
      question: `What does the ${country.name} visa file processing service include?`,
      answer: `Our service covers comprehensive document auditing, customized cover letter drafting, verified flight reservations, confirmed hotel bookings, Schengen-compliant insurance, embassy appointment booking, and visa application form completion.`
    },
    {
      question: `What is the bank statement requirement for a ${country.name} visa?`,
      answer: `Applicants generally need a 6-month bank statement with an official bank maintenance certificate. The closing balance should demonstrate sufficient financial ties and cover all trip expenses.`
    },
    {
      question: `How far in advance should I start my ${country.name} visa file preparation?`,
      answer: `We recommend preparing your file 6 to 12 weeks before your intended departure date, allowing ample time for document verification and embassy biometric appointment scheduling.`
    },
    {
      question: `Where will I submit my biometrics and documents for ${country.name}?`,
      answer: `Depending on the mission, biometrics and passport submissions take place at authorized visa application centers in Islamabad (such as VFS Global, Gerry's, or the respective embassy).`
    },
    {
      question: `Can O.S Travel & Tours guarantee visa approval for ${country.name}?`,
      answer: `No agency can guarantee visa approval, as decision-making rests solely with consular officers. However, our meticulous file audit minimizes errors, omissions, and common refusal triggers.`
    }
  ];

  return (
    <>
      <SEO
        title={filePageTitle(country)}
        description={metaDescription}
        keywords={fileProcessingKeywords(country.name)}
        image={meta.img}
        path={`/schengen-visa-file-processing/${country.slug}/`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Visa File Processing", url: "/schengen-visa-file-processing/" },
          { name: `${country.name} Visa` },
        ]}
      />

      <ServiceSchema
        id={`file-${country.slug}`}
        name={`${country.name} Visa File Processing & Document Preparation`}
        description={metaDescription}
        url={`https://ostravels.com/schengen-visa-file-processing/${country.slug}/`}
      />

      <div className="country__hero">
        <img
          src={meta.img}
          alt={`Best ${country.name} visa file processing services Islamabad Pakistan — ${country.name} landmark`}
          width="1200"
          height="500"
          fetchPriority="high"
          decoding="async"
        />
        <div className="country__hero-overlay" />
        <div className="country__hero-content">
          <h1>Best {country.name} Visa File Processing</h1>
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol style={{ display: "flex", listStyle: "none", gap: "0.5rem", padding: 0, margin: 0, justifyContent: "center" }}>
              <li><Link to="/" style={{ color: "inherit" }}>Home</Link></li>
              <li>/</li>
              <li><Link to="/schengen-visa-file-processing/" style={{ color: "inherit" }}>Visa File Processing</Link></li>
              <li>/</li>
              <li aria-current="page">{country.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="country__content">
        <section className="section__container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.85rem", color: "#64748b", background: "#f1f5f9", padding: "0.35rem 0.85rem", borderRadius: "50px" }}>
              <i className="ri-calendar-check-line" style={{ marginRight: "0.35rem", color: "#F5A623" }}></i>
              Last Updated: {PRICES_UPDATED} (Prices &amp; Checklist Verified)
            </span>
            <Link to="/contact/" style={{ fontSize: "0.85rem", color: "#2887ff", fontWeight: 600 }}>
              Need urgent file preparation? Book appointment →
            </Link>
          </div>

          <div className="detail__grid">
            <div className="detail__main">
              <h2>Overview</h2>
              {country.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {country.requirements.length > 0 && (
                <>
                  <h2>Documents Required</h2>
                  <ul className="req__list">
                    {country.requirements.map((r) => (
                      <li key={r}>
                        <i className="ri-checkbox-circle-fill"></i> {r}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <FileProcessingDetails country={country} />

              {country.officialSite && (
                <div className="official__box">
                  <h3><i className="ri-government-line"></i> Official Embassy &amp; Immigration Source</h3>
                  <p>
                    Visa fees and document rules are set by the {country.name} authorities and can change. We prepare every file against the latest official checklist.
                  </p>
                  <a href={country.officialSite.url} target="_blank" rel="noopener noreferrer nofollow">
                    {country.officialSite.label} <i className="ri-external-link-line"></i>
                  </a>
                </div>
              )}

              {/* Related guides */}
              <div style={{ marginTop: "2rem", padding: "1.25rem", background: "#fdf8ee", borderRadius: "12px", border: "1px solid #fde68a" }}>
                <h4 style={{ color: "#92400e", marginBottom: "0.5rem" }}>Related Travel &amp; Visa Guides</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  {dir && (
                    <>
                      <Link to={guidePath(dir.key)} style={{ fontSize: "0.85rem", color: "#b45309", textDecoration: "underline" }}>
                        {dir.name} Visa for Pakistani Citizens
                      </Link>
                      <span>•</span>
                      <Link to={agencyPath(dir.key)} style={{ fontSize: "0.85rem", color: "#b45309", textDecoration: "underline" }}>
                        Best Travel Agency for {dir.name} Visa
                      </Link>
                      <span>•</span>
                    </>
                  )}
                  <Link to="/blog/schengen-visa-guide-pakistan/" style={{ fontSize: "0.85rem", color: "#b45309", textDecoration: "underline" }}>
                    Complete Schengen Visa Guide for Pakistanis
                  </Link>
                  <span>•</span>
                  <Link to="/blog/visa-file-processing-explained/" style={{ fontSize: "0.85rem", color: "#b45309", textDecoration: "underline" }}>
                    How Visa File Processing Works
                  </Link>
                  <span>•</span>
                  <Link to="/travel-insurance/" style={{ fontSize: "0.85rem", color: "#b45309", textDecoration: "underline" }}>
                    Schengen Travel Insurance (€30k Cover)
                  </Link>
                </div>
              </div>

              {/* FAQ Section with schema */}
              <FAQAccordion items={[...searchFaqs(country, { isFile: true }), ...fileFaqs]} id={`file-${country.slug}`} />
            </div>

            <aside className="detail__side">
              <h4>File Processing</h4>
              <div className="stat"><span>Region</span><span>{country.region}</span></div>
              {country.facts.map((f, i) => (
                <div className={`stat${f.highlight ? " stat--price" : ""}`} key={i}>
                  <span>{f.label || "NOTE"}</span>
                  <span>{f.value}</span>
                </div>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi O.S Travel, I want to inquire about visa file processing for ${country.name}.`)}`}
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
                  Book File Review Consultation
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
