import { Link } from "react-router-dom";
import { fileProcessingCountries } from "../data/fileProcessingCountries";
import SEO from "../components/SEO";
import { fileProcessingIndexKeywords } from "../data/seoKeywords";
import { countryMeta, defaultMeta } from "../data/fileProcessingMeta";
import { formatPrice } from "../data/pricing";
import CountrySearch from "../components/CountrySearch";

export default function FileProcessingIndex() {
  return (
    <>
      <SEO
        title="Best Schengen Visa File Processing in Islamabad, Pakistan"
        description="Best Schengen and other visa file processing services for Pakistani citizens — France, Germany, Italy, Spain, UK, USA, Canada, Australia and many more. Complete document preparation and file processing by O.S Travel & Tours, Islamabad."
        keywords={fileProcessingIndexKeywords}
        path="/schengen-visa-file-processing/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Visa File Processing" },
        ]}
      />

      <div className="page__header">
        <h1>Best Visa File Processing Services</h1>
        <p className="breadcrumb">Home / Visa File Processing</p>
      </div>
      <section className="section__container">
        <CountrySearch />
        <p className="section__description" style={{ marginTop: "1.5rem" }}>
          Complete Schengen and other visa file preparation and processing
          services for the following countries.
        </p>
        <div className="dropbox__grid">
          {fileProcessingCountries.map((c) => {
            const meta = countryMeta[c.slug] || defaultMeta;
            return (
              <Link
                to={`/schengen-visa-file-processing/${c.slug}/`}
                className="dropbox-card"
                key={c.slug}
                style={{ "--accent": meta.accent }}
              >
                <div
                  className="dropbox-card__bg"
                  role="img"
                  aria-label={`Best ${c.name} visa file processing services Islamabad`}
                  style={{ backgroundImage: `url(${meta.img})` }}
                />
                <div className="dropbox-card__overlay" />

                <div className="dropbox-card__content">
                  <h3 className="dropbox-card__title">
                    {c.name}
                    <img
                      src={`https://hatscripts.github.io/circle-flags/flags/${meta.flag}.svg`}
                      alt={`${c.name} flag — Best ${c.name} visa file processing agent Islamabad`}
                      className="dropbox-card__flag"
                      loading="lazy"
                    />
                  </h3>
                  <p className="dropbox-card__stats">
                    {c.priceEntry
                      ? `File processing: ${formatPrice(c.priceEntry.price, c.priceEntry.currency)}`
                      : "Best document preparation & file processing"}
                  </p>

                  <div className="dropbox-card__btn">
                    <span>Learn More</span>
                    <i className="ri-arrow-right-line dropbox-card__arrow-icon"></i>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}