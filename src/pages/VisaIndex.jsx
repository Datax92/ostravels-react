import { Link } from "react-router-dom";
import { visaCountryCards, visaMenuCrossListed } from "../data/visaCountries";
import SEO from "../components/SEO";
import { visaIndexKeywords } from "../data/seoKeywords";

export default function VisaIndex() {
  return (
    <>
      <SEO
        title="Best Visa Services in Islamabad, Pakistan"
        description="Best visa services for Pakistani citizens — Malaysia, Singapore, Thailand, Saudi Arabia, China, Hong Kong, Vietnam, Turkey and many more. Complete visa application, document preparation and submission by O.S Travel & Tours, Islamabad."
        keywords={visaIndexKeywords}
        path="/visa/"
      />

      <div className="page__header">
        <h1>Best Visa Services in Islamabad, Pakistan</h1>
        <p className="breadcrumb">Home / Visa</p>
      </div>

      <section className="section__container">
        <p className="section__description">
          We provide complete visa assistance — from document preparation to
          submission — for the following destinations.
        </p>

        <div className="card__grid visa__grid">
          {visaCountryCards.map((c) => (
            <Link to={`/visa/${c.slug}/`} className="travel__card" key={c.slug}>
              <img
                src={c.img}
                alt={`Best ${c.name} visa services for Pakistani citizens in Islamabad — apply ${c.name} visa online with O.S Travel & Tours`}
                className="travel__card-img"
              />
              <div className="travel__card-overlay" />
              <div className="travel__card-content">
                <div className="travel__card-top" />
                <div className="travel__card-mid">
                  <h3>{c.name}</h3>
                  <p className="travel__card-location">{c.location}</p>
                  <h5>OVERVIEW</h5>
                  <p className="travel__card-overview">{c.overview}</p>
                </div>
                <div className="travel__card-bottom">
                  <span className="travel__card-price">
                    {c.price ? c.price.toLocaleString() : "Contact Us"}{" "}
                    <small>{c.pricePeriod}</small>
                  </span>
                  <span className="travel__card-btn">
                    Book Now <i className="ri-arrow-right-line"></i>
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {visaMenuCrossListed.map((c) => (
            <Link
              to={`/schengen-visa-file-processing/${c.slug}/`}
              className="country__card"
              key={c.slug}
            >
              <span className="badge">Visa File Processing</span>
              <h4>Best {c.label}</h4>
              <p>Best document preparation and file processing support for {c.name}.</p>
              <span className="arrow">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
