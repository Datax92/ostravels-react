import { Link } from "react-router-dom";
import { site } from "../data/site";

export default function MobileBottomBar() {
  const whatsappMsg = encodeURIComponent("Hi O.S Travel & Tours, I would like to inquire about your visa and travel services.");
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${whatsappMsg}`;

  return (
    <div className="mobile-bottom-bar" aria-label="Quick contact mobile bar">
      <a
        href={`tel:${site.phones[0] || "0512805570"}`}
        className="mobile-bottom-btn mobile-bottom-btn--call"
        aria-label="Call O.S Travel & Tours"
      >
        <i className="ri-phone-line mobile-bottom-icon--call"></i>
        <span>Call Now</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bottom-btn mobile-bottom-btn--whatsapp"
        aria-label="Chat with O.S Travel & Tours on WhatsApp"
      >
        <i className="ri-whatsapp-fill mobile-bottom-icon--whatsapp"></i>
        <span>WhatsApp</span>
      </a>

      <Link
        to="/contact/"
        className="mobile-bottom-btn mobile-bottom-btn--book"
        aria-label="Book Free Consultation"
      >
        <span>Book Free</span>
      </Link>
    </div>
  );
}
