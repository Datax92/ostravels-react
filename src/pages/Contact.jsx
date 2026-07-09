import { site } from "../data/site";
import SEO from "../components/SEO";
import { baseKeywords } from "../data/seoKeywords";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us — O.S Travel & Tours | Best Travel Agency Islamabad"
        description="Contact O.S Travel & Tours, the best travel agency in Islamabad, Pakistan. Call us at 051-2120700, email info@ostravels.com or visit our Blue Area, Islamabad office for visa services, Umrah visa, air ticketing, hotel booking and travel insurance."
        keywords={[
          "Contact Best Travel Agency Islamabad",
          "O.S Travel & Tours Contact",
          "Best Visa Agency Blue Area Islamabad",
          "O.S Travel Phone Number",
          "Travel Agency Islamabad Contact Number",
          "Visa Agent Contact Islamabad",
          ...baseKeywords,
        ]}
        path="/contact-2/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact Us" },
        ]}
      />

      <div className="page__header">
        <h1>Contact Us</h1>
        <p className="breadcrumb">Home / Contact</p>
      </div>
      <section className="section__container">
        <div className="contact__grid">
          <div className="contact__info">
            <div className="item">
              <span><i className="ri-phone-fill"></i></span>
              <div>
                <h4>Phone</h4>
                <p>{site.phones.join(" / ")}</p>
              </div>
            </div>
            <div className="item">
              <span><i className="ri-mail-fill"></i></span>
              <div>
                <h4>Email</h4>
                <p>{site.email} / {site.emailAlt}</p>
              </div>
            </div>
            <div className="item">
              <span><i className="ri-map-pin-2-fill"></i></span>
              <div>
                <h4>Address</h4>
                <p>{site.address}</p>
              </div>
            </div>
            <div className="item">
              <span><i className="ri-facebook-fill"></i></span>
              <div>
                <h4>Follow Us</h4>
                <p>
                  <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>{" "}
                  /{" "}
                  <a href={site.youtube} target="_blank" rel="noreferrer">YouTube</a>
                </p>
              </div>
            </div>
          </div>

          <form
            className="contact__form"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:${site.email}`;
            }}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone" />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
