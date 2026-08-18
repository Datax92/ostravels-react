import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { site } from "../data/site";
// FIX 1: Only import the LCP hero image eagerly — others loaded via string URL at runtime
import hero1 from "../assets/hero/Hero1.webp";
import SEO from "../components/SEO";
import TravelCard from "../components/TravelCard";
import FileProcCard from "../components/FileProcCard";
import DropboxCard from "../components/DropboxCard";
import { baseKeywords } from "../data/seoKeywords";

// FIX 2: Lazy-import the other hero images so they don't block first paint
// Using dynamic import resolves to Vite-hashed URLs without eager bundling
const hero2Url = new URL("../assets/hero/Hero2.webp", import.meta.url).href;
const hero3Url = new URL("../assets/hero/Hero3.webp", import.meta.url).href;

// FIX 3: Load reviews lazily — it's 58KB JSON only needed for the reviews carousel
//         We start with empty and fill after initial render
const heroSlides = [hero1, hero2Url, hero3Url];
const AUTOPLAY_MS = 5000;

const services = [
  { icon: "ri-passport-fill", title: "Visa Services", desc: "Complete assistance with visa application, document preparation and submission." },
  { icon: "ri-flight-takeoff-fill", title: "Air Ticketing", desc: "Domestic and international flight ticket booking for your trips." },
  { icon: "ri-hotel-fill", title: "Hotel Booking", desc: "Reliable hotel reservations at your destination, handled for you." },
  { icon: "ri-shield-check-fill", title: "Travel Insurance", desc: "Insurance coverage to keep you protected throughout your journey." },
  { icon: "ri-file-list-3-fill", title: "Visa File Processing", desc: "Full file preparation and processing for Schengen and other visas." },
  { icon: "ri-bank-fill", title: "Bank Accounts", desc: "Guidance and support related to bank account requirements for travel." },
];

const featuredVisaCards = [
  {
    slug: "malaysia-visa",
    name: "Malaysia",
    location: "Islamabad, Pakistan • Malaysia Embassy",
    overview: "eVisa or sticker visa for Pakistani travelers. Tourism or business, valid up to 30 days stay.",
    price: 15000,
    pricePeriod: "PKR / eVisa",
    img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=60&w=480&auto=format&fit=crop",
  },
  {
    slug: "singapore-visa",
    name: "Singapore",
    location: "Islamabad, Pakistan • ICA Authorized Agent",
    overview: "Online eVisa via ICA authorized agent. Fast, secure, reference number within 24 hours.",
    price: 18000,
    pricePeriod: "PKR / Visa",
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=60&w=480&auto=format&fit=crop",
  },
  {
    slug: "thailand-visa",
    name: "Thailand",
    location: "Islamabad, Pakistan • Thailand Embassy",
    overview: "Tourist visa processing, embassy authorized. Return ticket & hotel booking arranged for you.",
    price: 15000,
    pricePeriod: "PKR / Visa",
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=60&w=480&auto=format&fit=crop",
  },
  {
    slug: "turkey-visa",
    name: "Turkey",
    location: "Islamabad, Pakistan • Turkish Embassy",
    overview: "eVisa & sticker visa support for tourism or business. Fast document review and submission.",
    price: 16000,
    pricePeriod: "PKR / Visa",
    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=60&w=480&auto=format&fit=crop",
  },
  {
    slug: "hongkong-visa",
    name: "Hong Kong",
    location: "Islamabad, Pakistan • HK Consulate",
    overview: "Visa processing for business & tourism visits. Full document prep and submission handled.",
    price: 17000,
    pricePeriod: "PKR / Visa",
    img: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=60&w=480&auto=format&fit=crop",
  },
  {
    slug: "saudi-arabia-visa",
    name: "Saudi Arabia",
    location: "Islamabad, Pakistan • Saudi Embassy",
    overview: "Visit, Umrah & business visa support with complete documentation assistance.",
    price: 20000,
    pricePeriod: "PKR / Visa",
    img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=60&w=480&auto=format&fit=crop",
  },
];

const dropboxCountries = [
  {
    code: "my",
    country: "Malaysia",
    img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=60&w=480&auto=format&fit=crop",
    flag: "https://hatscripts.github.io/circle-flags/flags/my.svg",
    accent: "#d6291e",
    href: "/visa/malaysia-visa/",
  },
  {
    code: "th",
    country: "Thailand",
    img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=60&w=480&auto=format&fit=crop",
    flag: "https://hatscripts.github.io/circle-flags/flags/th.svg",
    accent: "#1e63d6",
    href: "/visa/thailand-visa/",
  },
  {
    code: "id",
    country: "Indonesia",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=60&w=480&auto=format&fit=crop",
    flag: "https://hatscripts.github.io/circle-flags/flags/id.svg",
    accent: "#d6291e",
    href: "/visa/indonesia-visa/",
  },
  {
    code: "vn",
    country: "Vietnam",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=60&w=480&auto=format&fit=crop",
    flag: "https://hatscripts.github.io/circle-flags/flags/vn.svg",
    accent: "#c9c515",
    href: "/visa/vietnam-visa/",
  },
];

const fileProcCountries = [
  {
    slug: "france-visa",
    country: "France",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=60&w=480&auto=format&fit=crop",
    flag: "https://hatscripts.github.io/circle-flags/flags/fr.svg",
    gradient: "linear-gradient(145deg, rgba(0,35,149,0.4) 0%, rgba(60,90,200,0.35) 45%, rgba(237,41,57,0.25) 100%)",
    accent: "#1a3faa",
  },
  {
    slug: "united-kingdom-uk-visa",
    country: "United Kingdom",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=60&w=480&auto=format&fit=crop",
    flag: "https://hatscripts.github.io/circle-flags/flags/gb.svg",
    gradient: "linear-gradient(145deg, rgba(1,33,105,0.4) 0%, rgba(200,16,46,0.3) 45%, rgba(255,255,255,0.15) 100%)",
    accent: "#c8102e",
  },
  {
    slug: "united-states-usa-visa",
    country: "United States",
    img: "https://images.unsplash.com/photo-1522083165195-3424ed129620?q=60&w=480&auto=format&fit=crop",
    flag: "https://hatscripts.github.io/circle-flags/flags/us.svg",
    gradient: "linear-gradient(145deg, rgba(178,34,52,0.4) 0%, rgba(60,59,110,0.35) 45%, rgba(255,255,255,0.15) 100%)",
    accent: "#3c3b6e",
  },
];

function HomeStar({ filled }) {
  return (
    <span style={{ color: filled ? "#f5a623" : "#d9d9d9", fontSize: "0.9rem" }} aria-hidden="true">
      ★
    </span>
  );
}

function HomeAvatar({ src, name }) {
  const [errored, setErrored] = useState(false);
  const initial = (name || "G")[0].toUpperCase();
  const hue =
    (Array.from(name || "G").reduce((acc, c) => acc + c.charCodeAt(0), 0) * 37) % 360;
  const bg = `hsl(${hue},55%,58%)`;

  if (!src || errored) {
    return (
      <div
        aria-hidden="true"
        style={{
          width: 44, height: 44, borderRadius: "50%", background: bg,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 700, fontSize: "1.1rem", color: "#fff", flexShrink: 0,
        }}
      >
        {initial}
      </div>
    );
  }
  return (
    <img
      src={src} alt={name} onError={() => setErrored(true)}
      width="44" height="44" loading="lazy" decoding="async"
      style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
    />
  );
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [reviewIdx, setReviewIdx] = useState(0);
  // FIX 3: Lazy-load reviews — start empty, populate after first render
  const [homeReviews, setHomeReviews] = useState([]);

  const CARDS = 3;
  const totalSlides = Math.ceil(homeReviews.length / CARDS);

  // Lazy load hero slides 2 & 3 after page load
  useEffect(() => {
    const t = setInterval(() => {
      setSlide((i) => (i + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, []);

  // Load reviews after initial paint (deferred)
  useEffect(() => {
    // Use requestIdleCallback when available to avoid blocking paint
    const load = () => {
      import("../data/reviews.json").then((mod) => {
        const data = mod.default || mod;
        const filtered = (data.reviews || []).filter((r) => r.text?.trim()).slice(0, 12);
        setHomeReviews(filtered);
      });
    };
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(load, { timeout: 2000 });
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(load, 200);
      return () => clearTimeout(id);
    }
  }, []);

  const prevSlide = () => setSlide((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setSlide((i) => (i + 1) % heroSlides.length);
  const prevReview = () => setReviewIdx((i) => (i - 1 + totalSlides) % totalSlides);
  const nextReview = () => setReviewIdx((i) => (i + 1) % totalSlides);
  const visibleReviews = homeReviews.slice(reviewIdx * CARDS, reviewIdx * CARDS + CARDS);

  // FIX 4: Lazy-load ImageAutoSlider — it's below the fold
  const [ImageAutoSlider, setImageAutoSlider] = useState(null);
  useEffect(() => {
    const id = setTimeout(() => {
      import("../components/ImageAutoSlider").then((m) => setImageAutoSlider(() => m.default));
    }, 1500);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <SEO
        title="Best Travel Agency in Islamabad, Pakistan"
        description="O.S Travel & Tours is the best and top travel agency in Islamabad, Pakistan — offering visa services, Umrah visa, air ticketing, hotel booking, travel insurance and Schengen visa file processing for Malaysia, Singapore, Thailand, Saudi Arabia, UK, USA and many more countries."
        keywords={[
          "Best Malaysia Visa Services",
          "Best Singapore Visa Services",
          "Best Thailand Visa Services",
          "Best Saudi Arabia Visa Services",
          "Best Hong Kong Visa Services",
          "Best Turkey Visa Services",
          "Best Umrah Visa Services Islamabad",
          "Best Schengen Visa File Processing",
          ...baseKeywords,
        ]}
        path="/"
        breadcrumbs={[
          { name: "Home" },
        ]}
      />
      <header className="hero">
        <div className="heroslider">
          {heroSlides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={i === 0 ? "O.S Travel & Tours — best travel agency in Islamabad, Pakistan" : ""}
              className={`heroslider__slide ${i === slide ? "active" : ""}`}
              fetchPriority={i === 0 ? "high" : "low"}
              loading={i === 0 ? "eager" : "lazy"}
              decoding={i === 0 ? "sync" : "async"}
              width="1600"
              height="900"
            />
          ))}

          <button className="heroslider__arrow left" onClick={prevSlide} aria-label="Previous slide">
            <i className="ri-arrow-left-s-line"></i>
          </button>
          <button className="heroslider__arrow right" onClick={nextSlide} aria-label="Next slide">
            <i className="ri-arrow-right-s-line"></i>
          </button>

          <div className="heroslider__dots">
            {heroSlides.map((_, i) => (
              <span
                key={i}
                className={`heroslider__dot ${i === slide ? "active" : ""}`}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
        </div>
      </header>

      <div className="home__content">
        <br></br>
        <section className="section__container" style={{ background: "var(--extra-light)" }}>
          <h2 className="section__header">Visa Services</h2>
          <p className="section__description">Popular visa destinations we help clients with</p>
          <div className="card__grid visa__grid">
            {featuredVisaCards.map((c) => (
              <TravelCard key={c.slug} {...c} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/visa/" className="btn">Explore More</Link>
          </div>
        </section>

        <section className="section__container">
          <h2 className="section__header">Visa File Processing</h2>
          <p className="section__description">Schengen &amp; other visa file preparation services</p>
          <div className="dropbox__grid">
            {fileProcCountries.map((c) => (
              <FileProcCard key={c.slug} {...c} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/schengen-visa-file-processing/" className="btn">Explore More</Link>
          </div>
        </section>

        <section className="section__container">
          <h2 className="section__header">Authorized Visa Drop Boxes</h2>
          <p className="section__description">
            O.S Travel & Tours is a verified, embassy-authorized visa drop box agent for Malaysia, Thailand, Indonesia and Vietnam — submit your documents through a trusted, officially recognized channel
          </p>
          <div className="dropbox__grid dropbox__grid--authorized">
            {dropboxCountries.map((d) => (
              <DropboxCard key={d.code} {...d} />
            ))}
          </div>
        </section>

        <section className="section__container">
          <h2 className="section__header">Our Services</h2>
          <p className="section__description">
            Everything you need for a smooth journey, in one place
          </p>
          <div className="card__grid">
            {services.map((s) => (
              <div className="service__card" key={s.title}>
                <span><i className={s.icon}></i></span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FIX 4: Only render ImageAutoSlider once loaded (below fold) */}
        {ImageAutoSlider && (
          <section className="section__container">
            <ImageAutoSlider />
          </section>
        )}

        <section className="section__container banner__container">
          {site.stats.map((s) => (
            <div className="banner__card" key={s.label}>
              <h4>{s.value}</h4>
              <p>{s.label}</p>
            </div>
          ))}
        </section>

        <section className="section__container">
          <h2 className="section__header">What Our Clients Say</h2>
          <p className="section__description">Real feedback from travellers we've assisted</p>

          {homeReviews.length > 0 ? (
            <div style={{ position: "relative" }}>
              <button
                onClick={prevReview}
                aria-label="Previous reviews"
                style={{
                  position: "absolute", left: "-1.5rem", top: "50%",
                  transform: "translateY(-50%)", zIndex: 2,
                  background: "var(--white)", border: "1.5px solid #e5e7eb",
                  borderRadius: "50%", width: 40, height: 40,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  fontSize: "1.1rem", color: "var(--text-dark)", transition: "box-shadow 0.2s",
                }}
              >
                <i className="ri-arrow-left-s-line" />
              </button>

              <div key={reviewIdx} className="testimonial__grid" style={{ animation: "reviewFadeIn 0.35s ease" }}>
                {visibleReviews.map((r, i) => (
                  <div className="testimonial__card" key={i} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <HomeAvatar src={r.avatar} name={r.name} />
                      <div>
                        <p className="name" style={{ marginBottom: 0 }}>{r.name}</p>
                        {r.date && <p style={{ fontSize: "0.75rem", color: "var(--text-light)" }}>{r.date}</p>}
                      </div>
                    </div>
                    <span role="img" aria-label={`${r.rating} out of 5 stars`}>
                      {[1, 2, 3, 4, 5].map((s) => <HomeStar key={s} filled={s <= (r.rating || 5)} />)}
                    </span>
                    <p className="quote" style={{ marginBottom: 0 }}>"{r.text}"</p>
                  </div>
                ))}
              </div>

              <button
                onClick={nextReview}
                aria-label="Next reviews"
                style={{
                  position: "absolute", right: "-1.5rem", top: "50%",
                  transform: "translateY(-50%)", zIndex: 2,
                  background: "var(--white)", border: "1.5px solid #e5e7eb",
                  borderRadius: "50%", width: 40, height: 40,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  fontSize: "1.1rem", color: "var(--text-dark)", transition: "box-shadow 0.2s",
                }}
              >
                <i className="ri-arrow-right-s-line" />
              </button>
            </div>
          ) : (
            <div style={{ height: "200px" }} aria-hidden="true" />
          )}

          {homeReviews.length > 0 && (
            <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setReviewIdx(i)}
                  style={{
                    width: i === reviewIdx ? 22 : 8, height: 8,
                    borderRadius: 999, border: "none",
                    background: i === reviewIdx ? "#F5A623" : "#d9d9d9",
                    cursor: "pointer", padding: 0,
                    transition: "width 0.3s, background 0.3s",
                  }}
                />
              ))}
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/reviews/" className="btn">See More Reviews</Link>
          </div>
        </section>
      </div>
    </>
  );
}