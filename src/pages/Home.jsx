import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import hero1 from "../assets/hero/Hero1.png";
import hero2 from "../assets/hero/Hero2.png";
import hero3 from "../assets/hero/Hero3.png";
// import hero4 from "../assets/hero/Hero-4.png";
import ImageAutoSlider from "../components/ImageAutoSlider";
import SEO from "../components/SEO";
import TravelCard from "../components/TravelCard";
import FileProcCard from "../components/FileProcCard";
import DropboxCard from "../components/DropboxCard";
import { baseKeywords } from "../data/seoKeywords";

const services = [
  { icon: "ri-passport-fill", title: "Visa Services", desc: "Complete assistance with visa application, document preparation and submission." },
  { icon: "ri-flight-takeoff-fill", title: "Air Ticketing", desc: "Domestic and international flight ticket booking for your trips." },
  { icon: "ri-hotel-fill", title: "Hotel Booking", desc: "Reliable hotel reservations at your destination, handled for you." },
  { icon: "ri-shield-check-fill", title: "Travel Insurance", desc: "Insurance coverage to keep you protected throughout your journey." },
  { icon: "ri-file-list-3-fill", title: "Visa File Processing", desc: "Full file preparation and processing for Schengen and other visas." },
  { icon: "ri-bank-fill", title: "Bank Accounts", desc: "Guidance and support related to bank account requirements for travel." },
];

const heroSlides = [hero1, hero2, hero3];

const AUTOPLAY_MS = 5000;

// featured visa card data — img + price pulled from visa snapshot info
const featuredVisaCards = [
  {
    slug: "malaysia-visa",
    name: "Malaysia",
    location: "Islamabad, Pakistan • Malaysia Embassy",
    overview: "eVisa or sticker visa for Pakistani travelers. Tourism or business, valid up to 30 days stay.",
    price: 15000,
    pricePeriod: "PKR / eVisa",
    img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "singapore-visa",
    name: "Singapore",
    location: "Islamabad, Pakistan • ICA Authorized Agent",
    overview: "Online eVisa via ICA authorized agent. Fast, secure, reference number within 24 hours.",
    price: 18000,
    pricePeriod: "PKR / Visa",
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "thailand-visa",
    name: "Thailand",
    location: "Islamabad, Pakistan • Thailand Embassy",
    overview: "Tourist visa processing, embassy authorized. Return ticket & hotel booking arranged for you.",
    price: 15000,
    pricePeriod: "PKR / Visa",
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "turkey-visa",
    name: "Turkey",
    location: "Islamabad, Pakistan • Turkish Embassy",
    overview: "eVisa & sticker visa support for tourism or business. Fast document review and submission.",
    price: 16000,
    pricePeriod: "PKR / Visa",
    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "hongkong-visa",
    name: "Hong Kong",
    location: "Islamabad, Pakistan • HK Consulate",
    overview: "Visa processing for business & tourism visits. Full document prep and submission handled.",
    price: 17000,
    pricePeriod: "PKR / Visa",
    img: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "saudi-arabia-visa",
    name: "Saudi Arabia",
    location: "Islamabad, Pakistan • Saudi Embassy",
    overview: "Visit, Umrah & business visa support with complete documentation assistance.",
    price: 20000,
    pricePeriod: "PKR / Visa",
    img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1200&auto=format&fit=crop",
  },
];

// Authorized visa drop box agents — flags via flagcdn (1x1 crop, round-safe)
const dropboxCountries = [
  {
    code: "th",
    country: "Thailand",
    img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1200&auto=format&fit=crop",
    flag: "https://hatscripts.github.io/circle-flags/flags/th.svg",
    accent: "#1e63d6",
    href: "https://islamabad.thaiembassy.org/en/page/96399-authorized-visa-drop-box-agents?menu=5d7615e015e39c4934002f92",
  },
  {
    code: "id",
    country: "Indonesia",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
    flag: "https://hatscripts.github.io/circle-flags/flags/id.svg",
    accent: "#d6291e",
    href: "",
  },
  {
    code: "vn",
    country: "Vietnam",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1200&auto=format&fit=crop",
    flag: "https://hatscripts.github.io/circle-flags/flags/vn.svg",
    accent: "#c9c515",
    href: "",
  },
];

// file processing countries — landmark img instead of flag bg
const fileProcCountries = [
  {
    slug: "france-visa",
    country: "France",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop", // Eiffel Tower, Paris
    flag: "https://hatscripts.github.io/circle-flags/flags/fr.svg",
    gradient: "linear-gradient(145deg, rgba(0,35,149,0.4) 0%, rgba(60,90,200,0.35) 45%, rgba(237,41,57,0.25) 100%)",
    accent: "#1a3faa",
  },
  {
    slug: "united-kingdom-uk-visa",
    country: "United Kingdom",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop", // Big Ben, London
    flag: "https://hatscripts.github.io/circle-flags/flags/gb.svg",
    gradient: "linear-gradient(145deg, rgba(1,33,105,0.4) 0%, rgba(200,16,46,0.3) 45%, rgba(255,255,255,0.15) 100%)",
    accent: "#c8102e",
  },
  {
    slug: "united-states-usa-visa",
    country: "United States",
    img: "https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=1200&auto=format&fit=crop", // Statue of Liberty, NYC
    flag: "https://hatscripts.github.io/circle-flags/flags/us.svg",
    gradient: "linear-gradient(145deg, rgba(178,34,52,0.4) 0%, rgba(60,59,110,0.35) 45%, rgba(255,255,255,0.15) 100%)",
    accent: "#3c3b6e",
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setSlide((i) => (i + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, []);

  const prevSlide = () => setSlide((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setSlide((i) => (i + 1) % heroSlides.length);

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
      />
      <header className="hero">
        <div className="heroslider">
          {heroSlides.map((src, i) => (
            <div
              key={src}
              className={`heroslider__slide ${i === slide ? "active" : ""}`}
              style={{ backgroundImage: `url(${src})` }}
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
            Submit your documents directly through our officially authorized partner drop-box agents
          </p>
          <div className="dropbox__grid">
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

        <section className="section__container">
          <ImageAutoSlider />
        </section>

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
          <div className="testimonial__grid">
            {site.testimonials.map((t) => (
              <div className="testimonial__card" key={t.name}>
                <p className="quote">"{t.quote}"</p>
                <p className="name">{t.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
