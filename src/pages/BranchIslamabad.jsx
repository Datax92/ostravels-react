import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { useEffect } from "react";

export default function BranchIslamabad() {
  const branchSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://ostravels.com/#branch-islamabad",
    "name": "O.S Travel & Tours — Islamabad Head Office",
    "url": "https://ostravels.com/branches/islamabad-blue-area/",
    "telephone": "+92-51-2120700",
    "priceRange": "$$",
    "image": "https://ostravels.com/img/og-cover.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office # 3, Aaly Plaza, Fazal-e-Haq Rd, Block E, G-6/2, Blue Area",
      "addressLocality": "Islamabad",
      "addressRegion": "Islamabad Capital Territory",
      "postalCode": "44000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.7178385",
      "longitude": "73.0733661"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "O.S Travel & Tours",
      "url": "https://ostravels.com"
    }
  };

  useEffect(() => {
    let script = document.head.querySelector('script[data-seo-id="branch-isb"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-seo-id", "branch-isb");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(branchSchema, null, 2);
    return () => {
      const s = document.head.querySelector('script[data-seo-id="branch-isb"]');
      if (s) s.remove();
    };
  }, []);

  return (
    <>
      <SEO
        title="Travel Agency in Blue Area Islamabad — Head Office"
        description="Visit O.S Travel & Tours at Aaly Plaza, Fazal-e-Haq Rd, Blue Area, Islamabad for visa services, Umrah packages, flight tickets, and Schengen visa file preparation."
        path="/branches/islamabad-blue-area/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Branches", url: "/branches/" },
          { name: "Islamabad Head Office" },
        ]}
      />

      <div className="page__header">
        <h1>Islamabad Head Office &mdash; Blue Area</h1>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol style={{ display: "flex", listStyle: "none", gap: "0.5rem", padding: 0, margin: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li>/</li>
            <li><Link to="/branches/">Branches</Link></li>
            <li>/</li>
            <li aria-current="page">Islamabad Blue Area</li>
          </ol>
        </nav>
      </div>

      <div className="country__content">
        <section className="section__container">
          <div className="detail__grid">
            <div className="detail__main">
              <h2>Premier Travel Agency in Blue Area, Islamabad</h2>
              <p>
                Welcome to the head office of <strong>O.S Travel &amp; Tours</strong>, conveniently located in Islamabad&apos;s prime commercial hub on Fazal-e-Haq Road, Blue Area (Block E, G-6/2). Over the past decade, our Blue Area branch has served as the central visa consultancy and ticketing center for over 12,000 corporate clients, leisure tourists, and families from Islamabad, Rawalpindi, and northern Pakistan.
              </p>

              <h3 style={{ marginTop: "1.5rem" }}>Services Available at This Location</h3>
              <ul className="req__list" style={{ marginTop: "0.75rem" }}>
                <li><i className="ri-checkbox-circle-fill"></i> <strong>Visa Consultancy &amp; Form Filing:</strong> Complete documentation assistance for Malaysia, Singapore, Thailand, Saudi Arabia, UAE, China, and 20+ destinations.</li>
                <li><i className="ri-checkbox-circle-fill"></i> <strong>Schengen &amp; Europe File Processing:</strong> Full file preparation, cover letters, flight reservations, and appointment guidance for France, Germany, Italy, Spain, UK, USA, and Canada.</li>
                <li><i className="ri-checkbox-circle-fill"></i> <strong>Domestic &amp; International Air Ticketing:</strong> Immediate GDS reservations across PIA, Emirates, Qatar Airways, Turkish Airlines, and Saudia.</li>
                <li><i className="ri-checkbox-circle-fill"></i> <strong>Schengen-Approved Travel Insurance:</strong> Instant policy issuance compliant with all European consular requirements.</li>
                <li><i className="ri-checkbox-circle-fill"></i> <strong>In-Person Document Verification:</strong> Bring your passport, bank statement, and employment letters for a free pre-submission audit by senior visa consultants.</li>
              </ul>

              <h3 style={{ marginTop: "1.75rem" }}>Landmarks &amp; Easy Directions</h3>
              <p>
                Our office is located at <strong>Office # 3, Aaly Plaza</strong>, situated along Fazal-e-Haq Road directly opposite the State Life / UBL buildings in Blue Area, Block E, G-6/2. Accessible via Jinnah Avenue, Metro Bus Station (Shaheed-e-Millat Station is within 5 minutes walking distance), and 7th Avenue.
              </p>
            </div>

            <aside className="detail__side">
              <h4>Branch Information</h4>
              <div className="stat"><span>City</span><span>Islamabad</span></div>
              <div className="stat"><span>Area</span><span>Blue Area (G-6/2)</span></div>
              <div className="stat"><span>Building</span><span>Office # 3, Aaly Plaza</span></div>
              <div className="stat"><span>Phone</span><span>051-2120700 / 701</span></div>
              <div className="stat"><span>Mobile/WA</span><span>0333-5542877</span></div>
              <div className="stat"><span>Email</span><span>{site.email}</span></div>
              <div className="stat"><span>Hours</span><span>Mon – Sat: 9am – 6pm</span></div>
              <Link to="/contact/" className="btn">Book In-Person Consultation</Link>
            </aside>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <h3 style={{ marginBottom: "1rem" }}>Locate Our Islamabad Head Office on Google Maps</h3>
            <div className="footer__map" style={{ borderRadius: "16px", overflow: "hidden" }}>
              <iframe
                title="O.S Travel & Tours — Islamabad Head Office Map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${site.name}, ${site.address}`)}&z=17&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                style={{ width: "100%", height: "400px", border: 0 }}
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
