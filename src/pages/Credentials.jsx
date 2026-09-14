import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { site } from "../data/site";

export default function Credentials() {
  const credentials = [
    {
      title: "Department of Tourist Services (DTS) Government License",
      category: "Official Government License",
      status: "Active & Government Verified",
      identifier: "DTS Islamabad Directory Listing #402",
      verifyUrl: site.dtsGovUrl,
      verifyLabel: "Verify on Official dts.gov.pk Portal ↗",
      desc: "O.S Travel & Tours is officially licensed and listed in the Government of Pakistan Department of Tourist Services registry under address: Office No. 03, Aaly Plaza, 44-East, Fazal-e-Haq Road, Blue Area, Islamabad (Tel: 051-2805570 / 051-2120700).",
      icon: "ri-shield-check-line",
    },
    {
      title: "Federal Board of Revenue (FBR)",
      category: "Tax Registration",
      status: "Active Registered Corporate Taxpayer",
      identifier: "Regional Tax Office (RTO) Islamabad",
      desc: "O.S Travel & Tours is a compliant, tax-registered corporate taxpayer registered with the Federal Board of Revenue in Islamabad, Pakistan.",
      icon: "ri-government-line",
    },
    {
      title: "Securities & Exchange Commission of Pakistan (SECP)",
      category: "Corporate Registration",
      status: "Registered Business Entity",
      identifier: "Islamabad Jurisdiction (Blue Area Office)",
      desc: "Legally constituted business enterprise authorized to provide travel consultancy, passenger air ticketing, and tourism facilitation nationwide.",
      icon: "ri-bank-line",
    },
    {
      title: "IATA Partner & Global GDS Integration",
      category: "Aviation Accreditation",
      status: "Direct GDS Ticketing Partner",
      identifier: "Amadeus / Sabre Global Distribution Systems",
      desc: "Direct integration for issuing verified e-tickets across PIA, Emirates, Qatar Airways, Turkish Airlines, Etihad, Saudia, and international carriers.",
      icon: "ri-flight-takeoff-line",
    },
    {
      title: "Official Facebook Verified Community",
      category: "Social Trust & Community",
      status: "32,000+ Active Followers",
      identifier: "facebook.com/ostravels",
      verifyUrl: site.facebook,
      verifyLabel: "Visit Official Facebook Page (32K+ Followers) ↗",
      desc: "One of the most active travel and visa communities in Islamabad with authentic reviews, live visa announcements, and client testimonials.",
      icon: "ri-facebook-circle-line",
    },
  ];

  return (
    <>
      <SEO
        title="Government DTS License & Official Registrations — O.S Travel & Tours"
        description="Verify the official Government Department of Tourist Services (DTS) license, FBR tax registration, and IATA ticketing partner credentials of O.S Travel & Tours Islamabad."
        path="/about/registrations-and-licenses/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about/" },
          { name: "Registrations & Licenses" },
        ]}
      />

      <div className="page__header">
        <h1>Registrations, Licenses &amp; Trust Credentials</h1>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol style={{ display: "flex", listStyle: "none", gap: "0.5rem", padding: 0, margin: "0 auto", justifyContent: "center" }}>
            <li><Link to="/" style={{ color: "inherit" }}>Home</Link></li>
            <li>/</li>
            <li><Link to="/about/" style={{ color: "inherit" }}>About Us</Link></li>
            <li>/</li>
            <li aria-current="page">Licenses &amp; Credentials</li>
          </ol>
        </nav>
      </div>

      <div className="country__content">
        <section className="section__container" style={{ maxWidth: "980px", margin: "0 auto" }}>
          <h2 className="section__header" style={{ textAlign: "center" }}>Verified Legal Standing &amp; Regulatory Compliance</h2>
          <p className="section__description" style={{ textAlign: "center", marginBottom: "3rem" }}>
            Transparency and regulatory compliance are foundational to our operations. O.S Travel &amp; Tours operates in full accordance with Pakistani corporate, tourism, and financial regulations.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.75rem", marginBottom: "3rem" }}>
            {credentials.map((c, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#fef3c7", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                    <i className={c.icon}></i>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b", fontWeight: 700, letterSpacing: "0.05em" }}>{c.category}</span>
                    <h3 style={{ fontSize: "1.15rem", color: "#1a1a2e" }}>{c.title}</h3>
                  </div>
                </div>

                <div style={{ background: "#f8fafc", padding: "0.75rem 1rem", borderRadius: "8px", marginBottom: "1rem", fontSize: "0.85rem", color: "#334155" }}>
                  <p><strong>Status:</strong> <span style={{ color: "#16a34a" }}>✓ {c.status}</span></p>
                  <p style={{ marginTop: "0.25rem" }}><strong>Reference:</strong> {c.identifier}</p>
                  {c.verifyUrl && (
                    <p style={{ marginTop: "0.5rem" }}>
                      <a href={c.verifyUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#2887ff", fontWeight: 600, textDecoration: "underline" }}>
                        {c.verifyLabel}
                      </a>
                    </p>
                  )}
                </div>

                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
            <h3 style={{ color: "#92400e", marginBottom: "0.75rem" }}>Official Document Verification</h3>
            <p style={{ color: "#78350f", fontSize: "0.95rem", maxWidth: "700px", margin: "0 auto 1.5rem auto", lineHeight: 1.65 }}>
              Corporate organizations, embassies, and regulatory institutions requiring verified certificate copies, tax NTN verification, or licensing documentation can contact our Blue Area head office directly.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href={site.dtsGovUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: "#16a34a", color: "#ffffff" }}
              >
                <i className="ri-government-line"></i> Verify DTS Govt License Online ↗
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello O.S Travel & Tours, I would like to verify regulatory documentation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: "#25D366", color: "#ffffff" }}
              >
                <i className="ri-whatsapp-fill"></i> Contact Compliance Desk
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
