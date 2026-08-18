import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { visaCountries, visaMenuCrossListed } from "../data/visaCountries";
import { fileProcessingCountries } from "../data/fileProcessingCountries";
import logo from "../assets/logo.webp";

// how long to wait before closing dropdown after mouse leaves (stops flicker)
const CLOSE_DELAY = 210;

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileSubOpen, setMobileSubOpen] = useState({ visa: false, processing: false });
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openNow = (key) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(key);
  };
  const closeSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY);
  };

  const toggleMobileSub = (key) => {
    setMobileSubOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSubOpen({ visa: false, processing: false });
  };

  return (
    <nav className={`mainnav ${scrolled ? "scrolled" : ""}`}>
      <div className="mainnav__inner">

        {/* ── Logo: image + divider + text ── */}
        <Link to="/" className="mainnav__logo">
          <img src={logo} alt="O.S Travel & Tours logo" className="mainnav__logo-img" width="150" height="100" fetchPriority="high" decoding="async" />
          <span className="mainnav__logo-divider" aria-hidden="true" />
          <span className="mainnav__logo-text">
            <span style={{ color: "#1a1a2e" }}>O.S </span>
            <span style={{ color: "#f5a623" }}>Travel & Tours</span>
          </span>
        </Link>

        <ul className="mainnav__links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li
            className="mainnav__dropdown-parent"
            onMouseEnter={() => openNow("visa")}
            onMouseLeave={closeSoon}
          >
            <Link to="/visa/">
              Visa <i className="ri-arrow-down-s-line"></i>
            </Link>
            <div
              className={`mainnav__dropdown mainnav__dropdown--css ${openMenu === "visa" ? "mainnav__dropdown--open" : ""}`}
              onMouseEnter={() => openNow("visa")}
              onMouseLeave={closeSoon}
            >
              {visaCountries.map((c) => (
                <Link key={c.slug} to={`/visa/${c.slug}/`}>
                  {c.name} Visa
                </Link>
              ))}
              {visaMenuCrossListed.map((c) => (
                <Link
                  key={c.slug}
                  to={`/schengen-visa-file-processing/${c.slug}/`}>
                  {c.label}
                </Link>
              ))}
            </div>
          </li>

          <li
            className="mainnav__dropdown-parent"
            onMouseEnter={() => openNow("processing")}
            onMouseLeave={closeSoon}
          >
            <Link to="/schengen-visa-file-processing/">
              Visa File Processing <i className="ri-arrow-down-s-line"></i>
            </Link>
            <div
              className={`mainnav__dropdown mainnav__dropdown--css ${openMenu === "processing" ? "mainnav__dropdown--open" : ""}`}
              onMouseEnter={() => openNow("processing")}
              onMouseLeave={closeSoon}
            >
              {fileProcessingCountries.map((c) => (
                <Link
                  key={c.slug}
                  to={`/schengen-visa-file-processing/${c.slug}/`}>
                  {c.name} Visa
                </Link>
              ))}
            </div>
          </li>

          <li>
            <Link to="/air-ticketing/">Air Ticketing</Link>
          </li>

          <li>
            <Link to="/blog/">Blog</Link>
          </li>

          <li>
            <Link to="/travel-insurance/">Travel Insurance</Link>
          </li>

          <li>
            <Link to="/contact/">About Us</Link>
          </li>

          <li>
            <Link to="/contact-2/">Contact</Link>
          </li>
        </ul>

        <a href={`tel:${site.phones[0]}`} className="mainnav__phone">
          <i className="ri-phone-fill"></i> <span>{site.phones[0]}</span>
        </a>

        <div
          className="mainnav__mobile-btn"
          onClick={() => (mobileOpen ? closeMobileMenu() : setMobileOpen(true))}
        >
          <i className={mobileOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>

      {/* Mobile menu — CSS transition, no framer-motion */}
      <div className={`mainnav__mobile-panel mainnav__mobile-panel--css ${mobileOpen ? "mainnav__mobile-panel--open" : ""}`}>
        <ul className="mainnav__mobile-links">
          <li>
            <Link to="/" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li>
            <Link to="/air-ticketing/" onClick={closeMobileMenu}>Air Ticketing</Link>
          </li>
          <li>
            <Link to="/blog/" onClick={closeMobileMenu}>Blog</Link>
          </li>
          <li>
            <Link to="/travel-insurance/" onClick={closeMobileMenu}>Travel Insurance</Link>
          </li>
          <li>
            <Link to="/contact/" onClick={closeMobileMenu}>About Us</Link>
          </li>
          <li className={`mobile-dropdown ${mobileSubOpen.visa ? "open" : ""}`}>
            <div className="mobile-dropdown__row">
              <Link to="/visa/" onClick={closeMobileMenu}>Visa</Link>
              <button
                type="button"
                className="mobile-dropdown__toggle"
                aria-label={mobileSubOpen.visa ? "Collapse Visa list" : "Expand Visa list"}
                aria-expanded={mobileSubOpen.visa}
                onClick={() => toggleMobileSub("visa")}
              >
                <i className="ri-arrow-down-s-line"></i>
              </button>
            </div>
            <ul className={`mobile-dropdown__submenu ${mobileSubOpen.visa ? "mobile-dropdown__submenu--open" : ""}`}>
              {visaCountries.map((c) => (
                <li key={c.slug}>
                  <Link to={`/visa/${c.slug}/`} onClick={closeMobileMenu}>
                    {c.name} Visa
                  </Link>
                </li>
              ))}
              {visaMenuCrossListed.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/schengen-visa-file-processing/${c.slug}/`}
                    onClick={closeMobileMenu}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={`mobile-dropdown ${mobileSubOpen.processing ? "open" : ""}`}>
            <div className="mobile-dropdown__row">
              <Link to="/schengen-visa-file-processing/" onClick={closeMobileMenu}>
                Visa File Processing
              </Link>
              <button
                type="button"
                className="mobile-dropdown__toggle"
                aria-label={mobileSubOpen.processing ? "Collapse Visa File Processing list" : "Expand Visa File Processing list"}
                aria-expanded={mobileSubOpen.processing}
                onClick={() => toggleMobileSub("processing")}
              >
                <i className="ri-arrow-down-s-line"></i>
              </button>
            </div>
            <ul className={`mobile-dropdown__submenu ${mobileSubOpen.processing ? "mobile-dropdown__submenu--open" : ""}`}>
              {fileProcessingCountries.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/schengen-visa-file-processing/${c.slug}/`}
                    onClick={closeMobileMenu}>
                    {c.name} Visa
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/contact-2/" onClick={closeMobileMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
