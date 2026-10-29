import { Link } from "react-router-dom";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <Link to="/" className="logo">
            O.S <span style={{ color: "#f5a623" }}>Travel &amp; Tours</span>
          </Link>
          <p>{site.description}</p>
          <ul className="footer__socials">
            <li>
              <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Follow O.S Travel & Tours on Facebook (32K+ followers)">
                <i className="ri-facebook-fill" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href={site.youtube} target="_blank" rel="noreferrer" aria-label="Subscribe to O.S Travel & Tours on YouTube">
                <i className="ri-youtube-fill" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello O.S Travel & Tours, I have an inquiry regarding visa / travel services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact O.S Travel & Tours on WhatsApp"
                style={{ background: "#25D366", color: "#ffffff", borderRadius: "50%", width: "36px", height: "36px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              >
                <i className="ri-whatsapp-fill" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About Us</Link></li>
            <li><Link to="/contact/">Contact Us</Link></li>
            <li><Link to="/branches/">Our Office</Link></li>
            <li><Link to="/about/registrations-and-licenses/">Government DTS License</Link></li>
            <li><Link to="/reviews/">Client Reviews</Link></li>
            <li><Link to="/blog/">Travel Blog</Link></li>
            <li><Link to="/visa-guides/">Visa Price List 2026</Link></li>
          </ul>
          <h4 className="footer__partners-title">Our Partner Websites</h4>
          <ul className="footer__links">
            {site.partners.map((p) => (
              <li key={p.url}>
                <a href={p.url} target="_blank" rel="noopener" title={p.note}>
                  <span><i className="ri-global-line"></i></span> {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Our Services</h4>
          <ul className="footer__links">
            <li><Link to="/visa/">Visa Services</Link></li>
            <li><Link to="/schengen-visa-file-processing/">Visa File Processing</Link></li>
            <li><Link to="/air-ticketing/">Air Ticketing</Link></li>
            <li><Link to="/travel-insurance/">Travel Insurance</Link></li>
            <li><Link to="/visa/malaysia-visa/">Malaysia Visa</Link></li>
            <li><Link to="/visa/singapore-visa/">Singapore Visa</Link></li>
            <li><Link to="/visa/thailand-visa/">Thailand Visa</Link></li>
            <li><Link to="/schengen-visa-file-processing/united-kingdom-uk-visa/">UK Visa File</Link></li>
            <li><Link to="/visa/japan-visa/">Japan Visa</Link></li>
            <li><Link to="/visa/bahrain-visa/">Bahrain Visa</Link></li>
            <li><Link to="/visa/kenya-visa/">Kenya eTA</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Head Office (Islamabad)</h4>
          <ul className="footer__links">
            <li>
              <a href={`tel:${site.phones[0]}`}>
                <span><i className="ri-phone-fill"></i></span> {site.phones[0]} / 051-2805570
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>
                <span><i className="ri-mail-fill"></i></span> {site.email}
              </a>
            </li>
            <li>
              <span><i className="ri-map-pin-2-fill"></i></span> {site.address}
            </li>
            <li>
              <Link to="/branches/islamabad-blue-area/">
                <span><i className="ri-building-line"></i></span> Office Details &amp; Directions
              </Link>
            </li>
            <li style={{ marginTop: "0.5rem" }}>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello O.S Travel & Tours, I would like to inquire about visa services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: "#25D366", color: "#ffffff", padding: "0.5rem 1rem", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
              >
                <i className="ri-whatsapp-fill"></i> WhatsApp Visa Desk
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Explore by Category Link Grid */}
      <div className="footer__seo">
        <div className="section__container">
          <h5 className="footer__seo-title">Explore Travel Services by Category</h5>
          <div className="footer__category-grid" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem 1.5rem", justifyContent: "center", fontSize: "0.85rem", opacity: 0.9 }}>
            <Link to="/visa/">Visit &amp; Tourist Visas</Link>
            <span>•</span>
            <Link to="/schengen-visa-file-processing/">Schengen &amp; Europe Files</Link>
            <span>•</span>
            <Link to="/air-ticketing/">Domestic &amp; International Flights</Link>
            <span>•</span>
            <Link to="/travel-insurance/">Schengen Compliant Insurance</Link>
            <span>•</span>
            <Link to="/branches/islamabad-blue-area/">Islamabad Blue Area Office</Link>
            <span>•</span>
            <Link to="/about/registrations-and-licenses/">Government DTS Verification</Link>
            <span>•</span>
            <a href={site.dtsGovUrl} target="_blank" rel="noopener noreferrer">DTS Govt Portal</a>
            <span>•</span>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer">Facebook (32K+ Community)</a>
            <span>•</span>
            <Link to="/privacy-policy/">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms/">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>

      <div className="footer__map">
        <iframe
          title="O.S Travel & Tours — Office Location Map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(`${site.name}, ${site.address}`)}&z=16&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${site.address}`)}`}
          target="_blank"
          rel="noreferrer"
          className="footer__map-btn"
        >
          <i className="ri-map-pin-2-fill"></i> Open in Google Maps
        </a>
      </div>

      <div className="footer__bar">
        <p>
          © {new Date().getFullYear()} O.S Travel &amp; Tours. All Rights Reserved.
          {" | "}
          <Link to="/privacy-policy/" style={{ color: "inherit", textDecoration: "underline" }}>Privacy Policy</Link>
          {" | "}
          <Link to="/terms/" style={{ color: "inherit", textDecoration: "underline" }}>Terms of Service</Link>
          {" | "}
          <a href={site.dtsGovUrl} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>Govt DTS License Record</a>
          {" | "}
          Created by{" "}
          <a
            href="https://www.datax.pk/"
            target="_blank"
            rel="noreferrer"
            className="footer__credit"
          >
            Data X Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}
