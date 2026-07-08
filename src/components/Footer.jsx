import { Link } from "react-router-dom";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <Link to="/" className="logo ">
            O.S <span style={{ color: "#f5a623" }}>Travel & Tours</span>
          </Link>
          <p>{site.description}</p>
          <ul className="footer__socials">
            <li>
              <a href={site.facebook} target="_blank" rel="noreferrer">
                <i className="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a href={site.youtube} target="_blank" rel="noreferrer">
                <i className="ri-youtube-fill"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog/">Blog</Link></li>
            <li><Link to="/contact/">About Us</Link></li>
            <li><Link to="/visa/">Visa</Link></li>
            <li><Link to="/schengen-visa-file-processing/">Visa File Processing</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Popular Visas</h4>
          <ul className="footer__links">
            <li><Link to="/visa/malaysia-visa/">Malaysia Visa</Link></li>
            <li><Link to="/visa/singapore-visa/">Singapore Visa</Link></li>
            <li><Link to="/visa/thailand-visa/">Thailand Visa</Link></li>
            <li><Link to="/schengen-visa-file-processing/united-kingdom-uk-visa/">UK Visa</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact Us</h4>
          <ul className="footer__links">
            <li>
              <a href={`tel:${site.phones[0]}`}>
                <span><i className="ri-phone-fill"></i></span> {site.phones[0]}
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
          </ul>
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
        © {new Date().getFullYear()} O.S Travel & Tours. All Rights Reserved.
      </div>

  
    </footer>
  );
}
