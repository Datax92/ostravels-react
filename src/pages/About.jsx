import { site } from "../data/site";
import ImageGallery from "../components/ImageGallery";
import SEO from "../components/SEO";
import { baseKeywords } from "../data/seoKeywords";

export default function About() {
  return (
    <>
      <SEO
        title="About Us — Best Travel Agency in Islamabad, Pakistan"
        description="O.S Travel & Tours is the best and top travel agent for visa services in Islamabad, Pakistan. Learn about our mission, vision and why thousands of clients trust us for visa, Umrah, ticketing and hotel booking services."
        keywords={["About O.S Travel & Tours", 
          "Best Travel Agency Islamabad About Us",
          "", ...baseKeywords]}
        path="/contact/"
      />

      <ImageGallery />

      <div className="country__content">
        <section className="section__container">
          <div className="detail__grid">
            <div className="detail__main">
              <h2>Who We Are</h2>
              <p>{site.about.reach}</p>

              <h2>Our Mission</h2>
              <p>{site.about.mission}</p>

              <h2>Our Vision</h2>
              <p>{site.about.vision}</p>

              <h2>Visa Services</h2>
              <p>{site.about.visaServices}</p>

              <h2>Why Choose Us</h2>
              <ul className="req__list">
                <li><i className="ri-checkbox-circle-fill"></i> Over a decade of experience in the travel industry</li>
                <li><i className="ri-checkbox-circle-fill"></i> Authorized visa drop-box agent for multiple embassies</li>
                <li><i className="ri-checkbox-circle-fill"></i> Thousands of satisfied clients</li>
                <li><i className="ri-checkbox-circle-fill"></i> Transparent process and honest guidance</li>
              </ul>
            </div>
            <aside className="detail__side">
              <h4>Get in Touch</h4>
              <div className="stat"><span>Phone</span><span>{site.phones[0]}</span></div>
              <div className="stat"><span>Email</span><span>{site.email}</span></div>
              <div className="stat"><span>Location</span><span>Islamabad</span></div>
              <a href="/contact-2/" className="btn">Contact Us</a>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
