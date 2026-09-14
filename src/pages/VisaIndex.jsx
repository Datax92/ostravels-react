import { Link } from "react-router-dom";
import { site } from "../data/site";
import { visaCountryCards, visaMenuCrossListed } from "../data/visaCountries";
import SEO from "../components/SEO";
import FAQAccordion from "../components/FAQAccordion";
import ServiceSchema from "../components/ServiceSchema";
import { visaIndexKeywords } from "../data/seoKeywords";

export default function VisaIndex() {
  const visaFaqs = [
    {
      question: "Which country visas can Pakistani citizens apply for through O.S Travel & Tours?",
      answer: "We process eVisas and sticker visas for Malaysia, Singapore, Thailand, Saudi Arabia (Umrah and Tourist), China, Turkey, Azerbaijan, Indonesia, Vietnam, Egypt, Tajikistan, Uzbekistan, Kazakhstan, and Kyrgyzstan, alongside full Schengen and Western visa file preparation."
    },
    {
      question: "What documents are required for tourist and visit visa processing?",
      answer: "Standard requirements include an original passport valid for at least 6 months, passport-sized white background photographs, a valid CNIC copy, last 6 months bank statement with account maintenance certificate, and employment/business proof."
    },
    {
      question: "How long does visa processing take for Pakistani passport holders?",
      answer: "Electronic visas (such as Azerbaijan, Malaysia eVisa, and Singapore eVisa) are typically processed in 2 to 5 working days. Sticker and embassy visas (such as Thailand or China) typically require 7 to 15 business days depending on consular schedules."
    },
    {
      question: "Does O.S Travel & Tours provide confirmed hotel bookings and flight itineraries?",
      answer: "Yes. We issue genuine GDS-verified flight itineraries and confirmed hotel reservations tailored specifically to meet embassy submission mandates."
    },
    {
      question: "Can I apply if I live outside Islamabad or Rawalpindi?",
      answer: "Absolutely. For eVisas, the entire application can be managed online via WhatsApp and email. For sticker visas requiring physical passports, applicants nationwide safely send documents via TCS or Leopard courier services."
    }
  ];

  return (
    <>
      <SEO
        title="Best Visa Services Islamabad — All Countries"
        description="Best visa services for Pakistanis — Malaysia, Singapore, Thailand, Saudi Arabia, China & more. Complete application & document prep by O.S Travel & Tours, Islamabad."
        keywords={visaIndexKeywords}
        path="/visa/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Visa Services" },
        ]}
      />

      <ServiceSchema
        id="visa-index"
        name="Worldwide Visa Services & Consultancy"
        description="Complete visa application filing, document preparation, and authorized drop-box submission for Pakistani passport holders."
        url="https://ostravels.com/visa/"
      />

      <div className="page__header">
        <h1>Best Visa Services in Islamabad, Pakistan</h1>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol style={{ display: "flex", listStyle: "none", gap: "0.5rem", padding: 0, margin: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li>/</li>
            <li aria-current="page">Visa Services</li>
          </ol>
        </nav>
      </div>

      <section className="section__container">
        <p className="section__description">
          We provide complete visa assistance — from document preparation to submission — for international destinations.
        </p>

        <div className="card__grid visa__grid">
          {visaCountryCards.map((c) => (
            <Link to={`/visa/${c.slug}/`} className="travel__card" key={c.slug}>
              <img
                src={c.img}
                alt={`Best ${c.name} visa services for Pakistani citizens in Islamabad — apply ${c.name} visa online with O.S Travel & Tours`}
                className="travel__card-img"
                loading="lazy"
                decoding="async"
                width="480"
                height="360"
              />
              <div className="travel__card-overlay" />
              <div className="travel__card-content">
                <div className="travel__card-top" />
                <div className="travel__card-mid">
                  <h3>{c.name}</h3>
                  <p className="travel__card-location">{c.location}</p>
                  <h5>OVERVIEW</h5>
                  <p className="travel__card-overview">{c.overview}</p>
                </div>
                <div className="travel__card-bottom">
                  <span className="travel__card-price">
                    {c.price ? c.price.toLocaleString() : "Contact Us"}{" "}
                    <small>{c.pricePeriod}</small>
                  </span>
                  <span className="travel__card-btn">
                    Book Now <i className="ri-arrow-right-line"></i>
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {visaMenuCrossListed.map((c) => (
            <Link
              to={`/schengen-visa-file-processing/${c.slug}/`}
              className="country__card"
              key={c.slug}
            >
              <span className="badge">Visa File Processing</span>
              <h4>Best {c.label}</h4>
              <p>Best document preparation and file processing support for {c.name}.</p>
              <span className="arrow">Learn more →</span>
            </Link>
          ))}
        </div>

        {/* Location & Regional Intersection Sections (Task 3.3) */}
        <div style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          <div style={{ background: "#ffffff", padding: "2rem", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
            <h3 style={{ color: "#1a1a2e", marginBottom: "0.75rem", fontSize: "1.3rem" }}>
              <i className="ri-map-pin-2-fill" style={{ color: "#F5A623", marginRight: "0.5rem" }}></i>
              Visa Services in Islamabad &amp; Rawalpindi
            </h3>
            <p style={{ color: "#475569", lineHeight: 1.65, fontSize: "0.95rem" }}>
              Our central headquarters in Blue Area Islamabad provides walk-in document auditing, biometric appointment scheduling, and authorized drop-box liaison services for residents of the Twin Cities (Islamabad and Rawalpindi). Located adjacent to Diplomatic Enclave and major embassy collection centers, our office expedites file submissions and passport returns.
            </p>
            <div style={{ marginTop: "1rem" }}>
              <Link to="/branches/islamabad-blue-area/" style={{ color: "#2887ff", fontWeight: 600, fontSize: "0.9rem" }}>
                Visit Islamabad Blue Area Office →
              </Link>
            </div>
          </div>

          <div style={{ background: "#ffffff", padding: "2rem", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
            <h3 style={{ color: "#1a1a2e", marginBottom: "0.75rem", fontSize: "1.3rem" }}>
              <i className="ri-whatsapp-fill" style={{ color: "#25D366", marginRight: "0.5rem" }}></i>
              Instant Visa Assistance via WhatsApp
            </h3>
            <p style={{ color: "#475569", lineHeight: 1.65, fontSize: "0.95rem" }}>
              Need urgent visa requirements, document checklists, or fee assessments? Chat directly with our senior visa consultants on WhatsApp for real-time guidance and application evaluation.
            </p>
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi O.S Travel, I would like to inquire about visa requirements and processing.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: "#25D366", color: "#ffffff", padding: "0.5rem 1.25rem", fontSize: "0.88rem" }}
              >
                <i className="ri-whatsapp-fill"></i> Chat: 0333-5542877
              </a>
              <a
                href={`https://wa.me/923325500377?text=${encodeURIComponent("Hi O.S Travel, I would like to consult regarding visa processing.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: "#1a1a2e", color: "#ffffff", padding: "0.5rem 1.25rem", fontSize: "0.88rem" }}
              >
                <i className="ri-whatsapp-fill"></i> Chat: 0332-5500377
              </a>
            </div>
          </div>
        </div>

        {/* Task 2.3: FAQ Section + FAQPage Schema */}
        <FAQAccordion items={visaFaqs} id="visa-index" />
      </section>
    </>
  );
}
