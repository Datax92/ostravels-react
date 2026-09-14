import SEO from "../components/SEO";
import { site } from "../data/site";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions — O.S Travel & Tours"
        description="Read the service terms and conditions for visa file processing, air ticketing, travel insurance, and hotel reservations with O.S Travel & Tours."
        path="/terms/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Terms & Conditions" },
        ]}
      />

      <div className="page__header">
        <h1>Terms &amp; Conditions</h1>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol style={{ display: "flex", listStyle: "none", gap: "0.5rem", padding: 0, margin: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li>/</li>
            <li aria-current="page">Terms &amp; Conditions</li>
          </ol>
        </nav>
      </div>

      <div className="country__content">
        <section className="section__container" style={{ maxWidth: "860px", margin: "0 auto", padding: "2.5rem 1rem", lineHeight: 1.7 }}>
          <h2>1. Agreement to Terms</h2>
          <p>
            By engaging O.S Travel &amp; Tours for travel consultancy, visa document preparation, air ticketing, travel insurance, or hotel reservations, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please do not use our services.
          </p>

          <h2 style={{ marginTop: "1.75rem" }}>2. Scope of Visa Consultancy &amp; Document Preparation</h2>
          <p>
            O.S Travel &amp; Tours operates as an independent travel consultancy and visa document facilitator. We assist travelers with form completion, checklist verification, appointment scheduling, and document compilation in accordance with embassy guidelines.
          </p>
          <div style={{ background: "#fff9eb", borderLeft: "4px solid #F5A623", padding: "1rem", borderRadius: "6px", margin: "1rem 0" }}>
            <strong>Important Embassy Disclaimer:</strong> The grant, denial, delay, or refusal of any visa is at the sole and unfettered discretion of the respective embassy, consulate, or immigration department. O.S Travel &amp; Tours does not guarantee visa approval, as sovereign foreign missions operate independently of third-party agencies.
          </div>

          <h2 style={{ marginTop: "1.75rem" }}>3. Client Obligations &amp; Document Accuracy</h2>
          <p>Clients are solely responsible for ensuring that:</p>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>All documents provided (passports, bank statements, tax documents, employment letters) are authentic, accurate, and up-to-date.</li>
            <li>Passports possess a minimum of 6 months validity from the intended date of departure with at least 2 blank pages.</li>
            <li>Embassy fees and third-party biometric charges are paid according to the official currency and payment methods mandated by the mission.</li>
          </ul>

          <h2 style={{ marginTop: "1.75rem" }}>4. Air Ticketing, Cancellations &amp; Refunds</h2>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Flight bookings and ticket issuances are governed by the respective airline fare rules, conditions of carriage, and IATA standards.</li>
            <li>Date changes, cancellations, and refund requests are subject to airline penalty charges plus our standard service administration fee.</li>
            <li>Non-refundable promotional tickets cannot be refunded under airline terms regardless of circumstances.</li>
          </ul>

          <h2 style={{ marginTop: "1.75rem" }}>5. Service Fees &amp; Payments</h2>
          <p>
            Consultancy and file preparation fees charged by O.S Travel &amp; Tours compensate our professional time, administrative work, appointment scheduling, and application filing. Unless explicitly stated in writing, agency consultancy fees are non-refundable once work has commenced.
          </p>

          <h2 style={{ marginTop: "1.75rem" }}>6. Limitation of Liability</h2>
          <p>
            O.S Travel &amp; Tours shall not be liable for any financial losses, flight cancellations, missed connections, or consequential damages resulting from consular processing delays, airline schedule changes, weather interruptions, geopolitical restrictions, or embassy interview outcomes.
          </p>

          <h2 style={{ marginTop: "1.75rem" }}>7. Governing Law &amp; Jurisdiction</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any disputes arising in connection with our services shall be subject to the exclusive jurisdiction of the competent courts in Islamabad.
          </p>

          <div style={{ background: "var(--extra-light, #f8faff)", padding: "1.25rem", borderRadius: "12px", marginTop: "1.5rem" }}>
            <p><strong>Questions Regarding Terms?</strong></p>
            <p>Contact our management office at Office # 3, Aaly Plaza, Fazal-e-Haq Rd, Blue Area, Islamabad.</p>
            <p>Phone: {site.phones[0]} | Email: {site.email}</p>
          </div>
        </section>
      </div>
    </>
  );
}
