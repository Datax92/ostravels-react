import { useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import SEO from "../components/SEO";
import { baseKeywords } from "../data/seoKeywords";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Visa Inquiry");
  const [message, setMessage] = useState("");

  const handleWhatsApp = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const text = encodeURIComponent(
      `*New Inquiry — O.S Travel & Tours Website*\n` +
      `*Name:* ${name || "N/A"}\n` +
      `*Phone:* ${phone || "N/A"}\n` +
      `*Email:* ${email || "N/A"}\n` +
      `*Service:* ${service}\n` +
      `*Message:* ${message || "N/A"}`
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleEmail = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${name || "Client"} - ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SEO
        title="Contact Us — Visa & Travel Enquiries Islamabad"
        description="Contact O.S Travel & Tours in Blue Area, Islamabad. Tel: 051-2805570, WhatsApp: 0333-5542877 / 0332-5500377. Government DTS Licensed travel agency in Islamabad."
        keywords={[
          "Contact Best Travel Agency Islamabad",
          "O.S Travel & Tours Contact",
          "Best Visa Agency Blue Area Islamabad",
          "O.S Travel Phone Number",
          "Travel Agency Islamabad Contact Number",
          "Visa Agent Contact Islamabad",
          ...baseKeywords,
        ]}
        path="/contact/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact Us" },
        ]}
      />

      <div className="page__header">
        <h1>Contact O.S Travel &amp; Tours</h1>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol style={{ display: "flex", listStyle: "none", gap: "0.5rem", padding: 0, margin: "0 auto", justifyContent: "center" }}>
            <li><Link to="/" style={{ color: "inherit" }}>Home</Link></li>
            <li>/</li>
            <li aria-current="page">Contact</li>
          </ol>
        </nav>
      </div>

      <section className="section__container">
        {/* Instant WhatsApp Help Strip */}
        <div style={{
          background: "linear-gradient(135deg, #128C7E 0%, #075E54 100%)",
          color: "#ffffff",
          borderRadius: "16px",
          padding: "1.25rem 1.75rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2.5rem",
          boxShadow: "0 10px 25px rgba(18, 140, 126, 0.25)"
        }}>
          <div>
            <span style={{ background: "#25D366", color: "#ffffff", padding: "0.2rem 0.6rem", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>
              INSTANT RESPONSE
            </span>
            <h3 style={{ fontSize: "1.25rem", margin: "0.4rem 0 0.2rem 0", color: "#ffffff", fontWeight: 700 }}>
              Prefer to chat directly on WhatsApp?
            </h3>
            <p style={{ margin: 0, fontSize: "0.92rem", opacity: 0.95 }}>
              Connect directly with our senior consultants: <strong style={{ color: "#a7f3d0" }}>0333-5542877</strong> / <strong style={{ color: "#a7f3d0" }}>0332-5500377</strong>
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi O.S Travel, I need help with travel/visa services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ background: "#25D366", color: "#ffffff", fontWeight: 700, border: "none", padding: "0.7rem 1.35rem" }}
            >
              <i className="ri-whatsapp-fill" style={{ fontSize: "1.2rem" }}></i> Chat on WhatsApp
            </a>
            <a
              href="tel:0512805570"
              className="btn"
              style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.4)", padding: "0.7rem 1.1rem" }}
            >
              <i className="ri-phone-fill"></i> 051-2805570
            </a>
          </div>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="item">
              <span><i className="ri-map-pin-2-fill"></i></span>
              <div>
                <h4>Head Office (Blue Area, Islamabad)</h4>
                <p>{site.address}</p>
                <Link to="/branches/islamabad-blue-area/" style={{ fontSize: "0.85rem", color: "#2887ff", fontWeight: 600, display: "inline-block", marginTop: "0.25rem" }}>
                  View office details &amp; location map →
                </Link>
              </div>
            </div>

            <div className="item">
              <span><i className="ri-phone-fill"></i></span>
              <div>
                <h4>Phone &amp; Landlines</h4>
                <p style={{ marginBottom: "0.35rem" }}>
                  <a href="tel:0512805570" style={{ color: "inherit", fontWeight: 600 }}>051-2805570</a> /{" "}
                  <a href="tel:0512120700" style={{ color: "inherit", fontWeight: 600 }}>051-2120700</a>
                </p>
                <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
                  Direct Mobile: <a href="tel:03335542877">0333-5542877</a> / <a href="tel:03325500377">0332-5500377</a>
                </p>
              </div>
            </div>

            <div className="item">
              <span><i className="ri-shield-check-fill" style={{ color: "#059669" }}></i></span>
              <div>
                <h4>Government Accreditation</h4>
                <p style={{ fontSize: "0.9rem", color: "#334155" }}>
                  Registered with Government of Pakistan Department of Tourist Services (DTS #402).
                </p>
                <a
                  href="http://dts.gov.pk/Detail/NDAyY2I2ZWItYTMzNC00MWMwLThkYjktZjk0ZDliZjUwYTRj"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.82rem", color: "#059669", fontWeight: 700, textDecoration: "underline", display: "inline-block", marginTop: "0.25rem" }}
                >
                  Verify Official DTS Registration Profile ↗
                </a>
              </div>
            </div>

            <div className="item">
              <span><i className="ri-mail-fill"></i></span>
              <div>
                <h4>Official Email</h4>
                <p>{site.email} / {site.emailAlt}</p>
              </div>
            </div>

            <div className="item">
              <span><i className="ri-facebook-fill" style={{ color: "#1877F2" }}></i></span>
              <div>
                <h4>Official Social Media</h4>
                <p>
                  <a href="https://www.facebook.com/ostravels/" target="_blank" rel="noreferrer" style={{ fontWeight: 600, color: "#1877F2" }}>
                    Facebook (32K+ Followers)
                  </a>{" "}
                  /{" "}
                  <a href={site.youtube} target="_blank" rel="noreferrer">
                    YouTube
                  </a>
                </p>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleWhatsApp}>
            <h3 style={{ marginBottom: "1rem", color: "#1a1a2e" }}>Send Us an Inquiry</h3>
            <input
              type="text"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Your Phone / WhatsApp Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{
                width: "100%",
                padding: "0.85rem",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                marginBottom: "1rem",
                fontSize: "0.95rem"
              }}
            >
              <option value="Visa Services">Visa Services (Visit / Tourist / Business)</option>
              <option value="Schengen Visa File Processing">Schengen Visa File Processing</option>
              <option value="Air Ticketing">Air Ticketing (Domestic &amp; International)</option>
              <option value="Travel Insurance">Schengen Travel Insurance</option>
              <option value="Umrah Travel">Umrah Packages &amp; Flights</option>
              <option value="General Consultation">General Travel Consultation</option>
            </select>
            <textarea
              rows="4"
              placeholder="Tell us about your destination, travel dates, or required documents..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
              <button
                type="submit"
                className="btn"
                style={{
                  background: "#25D366",
                  color: "#ffffff",
                  flex: "1 1 200px",
                  fontWeight: 700,
                  boxShadow: "0 4px 12px rgba(37, 211, 102, 0.35)",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                <i className="ri-whatsapp-fill"></i> Send via WhatsApp
              </button>
              <button
                type="button"
                onClick={handleEmail}
                className="btn"
                style={{
                  background: "#1a1a2e",
                  color: "#ffffff",
                  flex: "1 1 140px",
                  cursor: "pointer"
                }}
              >
                <i className="ri-mail-send-line"></i> Send via Email
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
