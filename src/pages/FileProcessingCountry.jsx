import { useParams, Link } from "react-router-dom";
import { fileProcessingCountries } from "../data/fileProcessingCountries";
import { countryMeta, defaultMeta } from "./FileProcessingIndex";
import NotFound from "./NotFound";
import { site } from "../data/site";
import SEO from "../components/SEO";
import { fileProcessingKeywords } from "../data/seoKeywords";

export default function FileProcessingCountry() {
  const { slug } = useParams();
  const country = fileProcessingCountries.find((c) => c.slug === slug);

  if (!country) return <NotFound />;

  const meta = countryMeta[country.slug] || defaultMeta;

  return (
    <>
      <SEO
        title={`Best ${country.name} Visa File Processing Services`}
        description={country.metaDescription}
        keywords={fileProcessingKeywords(country.name)}
        image={meta.img}
        path={`/schengen-visa-file-processing/${country.slug}/`}
      />

      <div className="country__hero">
        <img
          src={meta.img}
          alt={`Best ${country.name} visa file processing services Islamabad Pakistan — ${country.name} landmark`}
        />
        <div className="country__hero-overlay" />
        <div className="country__hero-content">
          <h1>Best {country.name} Visa File Processing</h1>
          <p className="breadcrumb">
            <Link to="/">Home</Link> /{" "}
            <Link to="/schengen-visa-file-processing/">Visa File Processing</Link> /{" "}
            {country.name}
          </p>
        </div>
      </div>

      <div className="country__content">
        <section className="section__container">
          <div className="detail__grid">
            <div className="detail__main">
              <h2>Overview</h2>
              {country.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {country.requirements.length > 0 && (
                <>
                  <h2>Documents Required</h2>
                  <ul className="req__list">
                    {country.requirements.map((r) => (
                      <li key={r}>
                        <i className="ri-checkbox-circle-fill"></i> {r}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <aside className="detail__side">
              <h4>File Processing</h4>
              <div className="stat"><span>Region</span><span>{country.region}</span></div>
              {country.facts.map((f, i) => (
                <div className="stat" key={i}>
                  <span>{f.label || "NOTE"}</span>
                  <span>{f.value}</span>
                </div>
              ))}
              <div className="stat"><span>Phone</span><span>{site.phones[0]}</span></div>
              <div className="stat"><span>Email</span><span>{site.email}</span></div>
              <Link to="/contact-2/" className="btn">Apply Now</Link>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
