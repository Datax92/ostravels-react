import { Link } from "react-router-dom";
import { site } from "../data/site";
import ImageGallery from "../components/ImageGallery";
import SEO from "../components/SEO";
import { baseKeywords } from "../data/seoKeywords";

export default function About() {
  return (
    <>
      <SEO
        title="About Us — Best Travel Agency Islamabad"
        description="O.S Travel & Tours — 10+ years of visa services, Umrah, air ticketing & travel insurance in Islamabad. 12,000+ happy clients. Get a free consultation today."
        keywords={[
          "About O.S Travel & Tours",
          "Best Travel Agency Islamabad About Us",
          "OS Travel About Us",
          "Travel Agency Islamabad About",
          "Best Visa Consultant Islamabad About",
          ...baseKeywords,
        ]}
        path="/about/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us" },
        ]}
      />

      <div className="page__header">
        <h1>About O.S Travel &amp; Tours — Premier Travel Agency in Islamabad</h1>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol style={{ display: "flex", listStyle: "none", gap: "0.5rem", padding: 0, margin: "0 auto", justifyContent: "center" }}>
            <li><Link to="/" style={{ color: "inherit" }}>Home</Link></li>
            <li>/</li>
            <li aria-current="page">About Us</li>
          </ol>
        </nav>
      </div>

      <ImageGallery />

      <div className="country__content">
        <section className="section__container">
          <div className="detail__grid">
            <div className="detail__main">
              <h2>Who We Are</h2>
              <p>{site.about.reach}</p>

              <h2>Our Mission</h2>
              <p>{site.about.mission}</p>

              <h2>Our Vision</h2>
              <p>{site.about.vision}</p>

              <h2>Visa Services</h2>
              <p>{site.about.visaServices}</p>

              <h2>Why Choose Us</h2>
              <ul className="req__list">
                <li><i className="ri-checkbox-circle-fill"></i> Over a decade of experience in the travel industry</li>
                <li><i className="ri-checkbox-circle-fill"></i> Authorized visa drop-box agent for multiple embassies</li>
                <li><i className="ri-checkbox-circle-fill"></i> Thousands of satisfied clients</li>
                <li><i className="ri-checkbox-circle-fill"></i> Transparent process and honest guidance</li>
              </ul>

              {/* Visual Trust Badge Row (Task 3.2) */}
              <div style={{ marginTop: "2.5rem", padding: "1.5rem", background: "#f8fafc", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem", color: "#1a1a2e" }}>Official Registrations &amp; Licensing</h3>
                <p style={{ fontSize: "0.9rem", color: "#64748b", marginBottom: "1rem" }}>
                  O.S Travel &amp; Tours operates in full compliance with corporate, tax, and tourism licensing authorities across Pakistan.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                  <div style={{ background: "#ffffff", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1" }}>
                    <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: "0.9rem" }}>FBR Registered</div>
                    <div style={{ fontSize: "0.8rem", color: "#16a34a" }}>Active Taxpayer</div>
                  </div>
                  <div style={{ background: "#ffffff", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1" }}>
                    <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: "0.9rem" }}>DTS Licensed (#402)</div>
                    <a href={site.dtsGovUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", color: "#2887ff", textDecoration: "underline" }}>
                      Verify on dts.gov.pk ↗
                    </a>
                  </div>
                  <div style={{ background: "#ffffff", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1" }}>
                    <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: "0.9rem" }}>Facebook Verified</div>
                    <a href={site.facebook} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", color: "#2887ff", textDecoration: "underline" }}>
                      32K+ Community ↗
                    </a>
                  </div>
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <Link to="/about/registrations-and-licenses/" style={{ color: "#2887ff", fontSize: "0.9rem", fontWeight: 600 }}>
                    View full regulatory certificates &amp; details →
                  </Link>
                </div>
              </div>
            </div>

            <aside className="detail__side">
              <h4>Get in Touch</h4>
              <div className="stat"><span>Landline</span><span>051-2805570 / 2120700</span></div>
              <div className="stat"><span>Mobile</span><span>0333-5542877</span></div>
              <div className="stat"><span>Email</span><span>{site.email}</span></div>
              <div className="stat"><span>Office</span><span>Blue Area, Islamabad</span></div>
              <div className="stat"><span>DTS Status</span><span><a href={site.dtsGovUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#16a34a", fontWeight: 600 }}>Govt Verified ↗</a></span></div>
              <Link to="/contact/" className="btn">Contact Us</Link>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello O.S Travel & Tours, I would like to consult about visa services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: "#25D366", color: "#ffffff", marginTop: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem" }}
              >
                <i className="ri-whatsapp-fill"></i> WhatsApp Us
              </a>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
