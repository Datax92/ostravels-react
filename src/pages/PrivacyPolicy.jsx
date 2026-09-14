import SEO from "../components/SEO";
import { site } from "../data/site";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy — O.S Travel & Tours"
        description="Learn how O.S Travel & Tours handles, protects, and retains your personal information, passport copies, and travel documentation."
        path="/privacy-policy/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Privacy Policy" },
        ]}
      />

      <div className="page__header">
        <h1>Privacy Policy</h1>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol style={{ display: "flex", listStyle: "none", gap: "0.5rem", padding: 0, margin: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li>/</li>
            <li aria-current="page">Privacy Policy</li>
          </ol>
        </nav>
      </div>

      <div className="country__content">
        <section className="section__container" style={{ maxWidth: "860px", margin: "0 auto", padding: "2.5rem 1rem", lineHeight: 1.7 }}>
          <h2>1. Introduction</h2>
          <p>
            O.S Travel &amp; Tours (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy and confidentiality of our clients. This Privacy Policy explains what personal data we collect, how we process and store it, and your rights concerning that data when using our travel consultancy, visa assistance, air ticketing, hotel reservations, and travel insurance services in Islamabad, Pakistan and nationwide.
          </p>

          <h2 style={{ marginTop: "1.75rem" }}>2. Information We Collect</h2>
          <p>Depending on the travel and visa services requested, we collect necessary identity and travel records:</p>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li><strong>Personal Identification:</strong> Full legal name, date of birth, nationality, CNIC/national identity card numbers, and passport bio-page scans.</li>
            <li><strong>Contact Details:</strong> Phone number, mobile/WhatsApp number, residential address, and email address.</li>
            <li><strong>Visa Application Records:</strong> Employment verification letters, family details, travel itineraries, travel insurance policies, and embassy appointment letters.</li>
            <li><strong>Financial Documentation (Where Required by Embassies):</strong> Bank statements, tax returns (FBR), and proof of ties strictly for visa file preparation and embassy submission.</li>
          </ul>

          <h2 style={{ marginTop: "1.75rem" }}>3. How We Use Your Data</h2>
          <p>Your information is used exclusively for legitimate travel fulfillment purposes:</p>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Filing eVisa applications and scheduling embassy/consulate appointments on your behalf.</li>
            <li>Issuing confirmed flight itineraries and airline e-tickets via authorized GDS reservation systems.</li>
            <li>Booking hotel accommodations and generating verified Schengen-compliant travel insurance policies.</li>
            <li>Communicating visa status updates, consular requirements, and travel alerts.</li>
          </ul>

          <h2 style={{ marginTop: "1.75rem" }}>4. Third-Party Sharing &amp; Disclosures</h2>
          <p>
            We do not sell, rent, or monetize your personal information. Data is shared strictly with authorized entities required to fulfill your travel requests:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li><strong>Embassies, High Commissions &amp; Visa Centers:</strong> E.g., VFS Global, Gerry&apos;s Visa Drop Box, Gerry&apos;s Fedex, and official immigration portals.</li>
            <li><strong>Airlines &amp; Global Distribution Systems (GDS):</strong> E.g., PIA, Emirates, Qatar Airways, Turkish Airlines, Amadeus, or Sabre.</li>
            <li><strong>Underwriters &amp; Insurers:</strong> For issuing valid medical emergency &amp; baggage insurance coverage.</li>
            <li><strong>Regulatory Authorities:</strong> If required by Pakistani laws, civil aviation regulations, or court orders.</li>
          </ul>

          <h2 style={{ marginTop: "1.75rem" }}>5. Data Retention &amp; Security</h2>
          <p>
            We implement technical, physical, and administrative safeguards to protect your files against unauthorized access, loss, or alteration. Sensitive application documents (such as financial statements and passport copies) are securely archived only for the duration required to complete your visa processing or ticketing lifecycle, after which physical paper copies are shredded and digital documents are safely expunged.
          </p>

          <h2 style={{ marginTop: "1.75rem" }}>6. Your Rights &amp; Contact Us</h2>
          <p>
            You have the right to review the personal information we hold about you, request corrections to inaccurate records, or request complete deletion of non-statutory documents upon completion of travel.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            For privacy inquiries or document return requests, please contact our compliance desk:
          </p>
          <div style={{ background: "var(--extra-light, #f8faff)", padding: "1.25rem", borderRadius: "12px", marginTop: "1rem" }}>
            <p><strong>O.S Travel &amp; Tours</strong></p>
            <p>Office # 3, Aaly Plaza, Fazal-e-Haq Rd, Block E, G-6/2, Blue Area, Islamabad</p>
            <p>Email: <a href={`mailto:${site.email}`}>{site.email}</a> | Phone: {site.phones[0]}</p>
          </div>
        </section>
      </div>
    </>
  );
}
