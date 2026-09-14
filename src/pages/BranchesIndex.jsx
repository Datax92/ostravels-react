import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { site } from "../data/site";

export default function BranchesIndex() {
  return (
    <>
      <SEO
        title="Our Office Location in Islamabad — Blue Area Head Office"
        description="Visit O.S Travel & Tours headquarters in Blue Area, Islamabad for in-person visa consultations, Schengen file processing, air tickets, and travel insurance."
        path="/branches/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Offices" },
        ]}
      />

      <div className="page__header">
        <h1>Our Office Locations</h1>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol style={{ display: "flex", listStyle: "none", gap: "0.5rem", padding: 0, margin: "0 auto", justifyContent: "center" }}>
            <li><Link to="/" style={{ color: "inherit" }}>Home</Link></li>
            <li>/</li>
            <li aria-current="page">Offices</li>
          </ol>
        </nav>
      </div>

      <div className="country__content">
        <section className="section__container" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 className="section__header" style={{ textAlign: "center" }}>Head Office — Islamabad</h2>
          <p className="section__description" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            Walk in for in-person document review, visa consultancy, or flight bookings at our registered Blue Area office.
          </p>

          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "2.5rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              border: "1px solid #e2e8f0",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <span style={{ background: "#F5A623", color: "#1a1a2e", padding: "0.35rem 1rem", borderRadius: "50px", fontSize: "0.85rem", fontWeight: 700 }}>
                Head Office &amp; Central Visa Desk
              </span>
              <span style={{ color: "#16a34a", fontWeight: 600, fontSize: "0.9rem" }}>
                ✓ Government DTS Licensed &amp; Verified
              </span>
            </div>

            <h3 style={{ fontSize: "1.6rem", marginBottom: "1rem", color: "#1a1a2e" }}>
              Islamabad Head Office (Blue Area)
            </h3>
            <p style={{ color: "#475569", marginBottom: "1.5rem", fontSize: "1rem", lineHeight: 1.65 }}>
              Conveniently situated in Islamabad&apos;s primary commercial center on Fazal-e-Haq Road. Our central visa team handles in-person applicant document audits, embassy drop-box submissions, instant flight reservations, and Schengen travel insurance.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginBottom: "2rem", background: "#f8fafc", padding: "1.25rem", borderRadius: "12px" }}>
              <div>
                <strong style={{ color: "#1a1a2e", display: "block", marginBottom: "0.25rem" }}>
                  <i className="ri-map-pin-2-fill" style={{ color: "#F5A623", marginRight: "0.5rem" }}></i> Address
                </strong>
                <p style={{ fontSize: "0.9rem", color: "#64748b" }}>{site.address}</p>
              </div>
              <div>
                <strong style={{ color: "#1a1a2e", display: "block", marginBottom: "0.25rem" }}>
                  <i className="ri-phone-fill" style={{ color: "#F5A623", marginRight: "0.5rem" }}></i> Phone Numbers
                </strong>
                <p style={{ fontSize: "0.9rem", color: "#64748b" }}>{site.phones.slice(0, 3).join(" / ")}</p>
              </div>
              <div>
                <strong style={{ color: "#1a1a2e", display: "block", marginBottom: "0.25rem" }}>
                  <i className="ri-time-fill" style={{ color: "#F5A623", marginRight: "0.5rem" }}></i> Business Hours
                </strong>
                <p style={{ fontSize: "0.9rem", color: "#64748b" }}>Monday – Saturday: 09:00 AM – 06:00 PM</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link to="/branches/islamabad-blue-area/" className="btn">
                Full Office Details &amp; Directions <i className="ri-arrow-right-line"></i>
              </Link>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello O.S Travel & Tours, I would like to book an appointment at your Blue Area Islamabad office.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: "#25D366", color: "#ffffff" }}
              >
                <i className="ri-whatsapp-fill"></i> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
