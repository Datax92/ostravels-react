import { useParams, Link } from "react-router-dom";
import { visaCountries } from "../data/visaCountries";
import NotFound from "./NotFound";
import { site } from "../data/site";
import SEO from "../components/SEO";
import { visaCountryKeywords } from "../data/seoKeywords";
import { dropboxNotices } from "../data/dropboxNotices";

export default function VisaCountry() {
  const { slug } = useParams();
  const country = visaCountries.find((c) => c.slug === slug);

  if (!country) return <NotFound />;

  const dropboxNotice = dropboxNotices[slug];

  return (
    <>
      <SEO
        title={`Best ${country.name} Visa Services for Pakistani Citizens`}
        description={country.metaDescription}
        keywords={visaCountryKeywords(country.name)}
        image={country.image}
        path={`/visa/${country.slug}/`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Visa Services", url: "/visa/" },
          { name: `${country.name} Visa` },
        ]}
      />

      {country.image && (
        <div className="country__hero">
          <img
            src={country.image}
            alt={`Best ${country.name} visa services in Islamabad Pakistan — ${country.name} landmark`}
          />
          <div className="country__hero-overlay" />
          <div className="country__hero-content">
            <h1>Best {country.name} Visa Services</h1>
            <p className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/visa/">Visa</Link> / {country.name}
            </p>
          </div>
        </div>
      )}

      <div className="country__content">
        <section className="section__container">
          <div className="detail__grid">
            <div className="detail__main">
              {dropboxNotice && (
                <div className="dropbox-notice">
                  <div className="dropbox-notice__icon">
                    <i className="ri-shield-check-fill"></i>
                  </div>
                  <div className="dropbox-notice__body">
                    <h2>{dropboxNotice.heading}</h2>
                    <p>{dropboxNotice.text}</p>
                  </div>
                </div>
              )}

              <h2>Overview</h2>
              {country.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {country.requirements.length > 0 && (
                <>
                  <h2>Required Documents</h2>
                  <ul className="req__list">
                    {country.requirements.map((r) => (
                      <li key={r}>
                        <i className="ri-checkbox-circle-fill"></i> {r}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h2>Why Apply Through Us</h2>
              <p>
                Our experienced team guides you through the entire {country.name}{" "}
                visa application process, from document review to submission,
                helping make the process smooth and hassle-free. O.S Travel & Tours
                is one of the best {country.name} visa consultants in Islamabad, Pakistan.
              </p>
            </div>
            <aside className="detail__side">
              <h4>Visa Snapshot</h4>
              {country.facts.map((f, i) => (
                <div className="stat" key={i}>
                  <span>{f.label || "Passport Bio Page (Scan Copy)"}</span>
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