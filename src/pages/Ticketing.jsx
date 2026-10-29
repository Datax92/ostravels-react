import { useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import SEO from "../components/SEO";
import FAQAccordion from "../components/FAQAccordion";
import ServiceSchema from "../components/ServiceSchema";
import { ticketingKeywords } from "../data/seoKeywords";

const AGENCY_EMAIL = "ostravelsisb@gmail.com"; // TODO: confirm real inbox to receive ticket requests
const BOOKMYFLIGHT_URL = "https://bookmyflight.pk/";

const airlines = [
  "PIA (Pakistan International Airlines)",
  "Emirates",
  "Qatar Airways",
  "Etihad Airways",
  "Turkish Airlines",
  "Airblue",
  "Serene Air",
  "Fly Jinnah",
  "Saudia",
  "flydubai",
  "No Preference",
];

const popularRoutes = [
  { from: "Islamabad", to: "Dubai" },
  { from: "Islamabad", to: "Jeddah" },
  { from: "Islamabad", to: "London" },
  { from: "Lahore", to: "Doha" },
  { from: "Karachi", to: "Riyadh" },
  { from: "Islamabad", to: "Kuala Lumpur" },
];

const faqs = [
  {
    question: "How do I book an air ticket with O.S Travel & Tours?",
    answer: "Just fill in your flight details or contact our ticketing desk directly. Our GDS consultants will compare live fares across airlines and issue e-tickets instantly upon payment confirmation."
  },
  {
    question: "Which airlines can you issue tickets for?",
    answer: "We issue tickets for all major domestic and international carriers, including PIA, Emirates, Qatar Airways, Turkish Airlines, Etihad, Saudia, Gulf Air, Airblue, Serene Air, and Fly Jinnah."
  },
  {
    question: "Can you assist with Umrah flights and group bookings?",
    answer: "Yes. We specialize in Umrah group flights to Jeddah and Madinah with flexible baggage allowances, alongside corporate group discounts."
  },
  {
    question: "What is the policy for flight date changes and cancellations?",
    answer: "Date changes and refunds are processed swiftly in accordance with airline fare rules and conditions of carriage. Our consultants assist you with minimal penalty re-routings."
  },
  {
    question: "Do you offer ticket quotations before commitment?",
    answer: "Yes, our ticketing team provides free fare comparison and itinerary options with locked provisional holds where permitted by airline GDS systems."
  },
  {
    question: "Can I book flights departing from Peshawar, Lahore, or Karachi?",
    answer: "Yes, we book domestic and international departures originating from Islamabad (ISB), Peshawar (PEW), Lahore (LHE), Karachi (KHI), Sialkot (SKT), and Multan (MUX)."
  }
];

const initialForm = {
  tripType: "One Way",
  from: "",
  to: "",
  departDate: "",
  returnDate: "",
  from2: "",
  to2: "",
  departDate2: "",
  flexibleDates: false,
  adults: "1",
  children: "0",
  infants: "0",
  travelClass: "Economy",
  airline: "No Preference",
  baggage: "Standard",
  budget: "",
  name: "",
  phone: "",
  email: "",
  city: "",
  contactTime: "Anytime",
  notes: "",
};

const today = () => new Date().toISOString().split("T")[0];

export default function Ticketing() {
  const [form, setForm] = useState(initialForm);

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const setTripType = (type) =>
    setForm((prev) => ({ ...prev, tripType: type, returnDate: type === "Round Trip" ? prev.returnDate : "" }));

  // Shared message body for WhatsApp (bold markers) and email (plain).
  const buildLines = (bold) => {
    const b = (label) => (bold ? `*${label}:*` : `${label}:`);
    const lines = [
      bold ? "✈️ *Flight Booking Request — O.S Travel & Tours*" : "Flight Booking Request — O.S Travel & Tours",
      "",
      `${b("Trip Type")} ${form.tripType}`,
      `${b("From")} ${form.from || "Not specified"}`,
      `${b("To")} ${form.to || "Not specified"}`,
      `${b("Departure Date")} ${form.departDate || "Flexible"}${form.flexibleDates ? " (± 3 days flexible)" : ""}`,
    ];
    if (form.tripType === "Round Trip" && form.returnDate) lines.push(`${b("Return Date")} ${form.returnDate}`);
    if (form.tripType === "Multi-City" && (form.from2 || form.to2)) {
      lines.push(`${b("Leg 2")} ${form.from2 || form.to || "?"} → ${form.to2 || "?"} on ${form.departDate2 || "flexible date"}`);
    }
    lines.push(
      `${b("Passengers")} ${form.adults} Adult(s), ${form.children} Child(ren), ${form.infants} Infant(s)`,
      `${b("Class")} ${form.travelClass}`,
      `${b("Preferred Airline")} ${form.airline}`,
      `${b("Baggage")} ${form.baggage}`
    );
    if (form.budget) lines.push(`${b("Budget")} ${form.budget}`);
    lines.push(
      "",
      `${b("Passenger Name")} ${form.name || "N/A"}`,
      `${b("Phone / WhatsApp")} ${form.phone || "N/A"}`
    );
    if (form.email) lines.push(`${b("Email")} ${form.email}`);
    if (form.city) lines.push(`${b("City")} ${form.city}`);
    lines.push(`${b("Best Time to Call")} ${form.contactTime}`);
    if (form.notes) lines.push(`${b("Additional Notes")} ${form.notes}`);
    return lines;
  };

  const handleEmailSubmit = (e) => {
    const formEl = e.currentTarget.form;
    if (formEl && !formEl.reportValidity()) return;

    const subject = encodeURIComponent(
      `New Air Ticket Request — ${form.from || "?"} to ${form.to || "?"}`
    );
    const body = encodeURIComponent(buildLines(false).join("\n"));

    // opens Gmail's web compose window directly (new tab) — pre-filled,
    // user just hits send. Avoids the OS "choose an app" prompt that
    // plain mailto: links trigger.
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${AGENCY_EMAIL}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  // Primary action: the form's submit (button or Enter key) sends the request
  // to the ticketing desk on WhatsApp after the browser validates the fields.
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(buildLines(true).join("\n"));
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SEO
        title="Air Ticketing Islamabad — Cheap Flights"
        description="Book cheap air tickets in Islamabad with O.S Travel & Tours. Domestic & international flights on PIA, Emirates, Qatar Airways, Turkish Airlines & more. Instant WhatsApp quotes: 0333-5542877."
        keywords={ticketingKeywords}
        path="/air-ticketing/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Air Ticketing" },
        ]}
      />

      <ServiceSchema
        id="ticketing"
        name="Domestic & International Air Ticketing"
        description="Instant flight booking and ticketing across PIA, Emirates, Qatar Airways, Turkish Airlines, and all major international airlines."
        url="https://ostravels.com/air-ticketing/"
      />

      <div className="page__header ticket__header">
        <h1>Air Ticketing &amp; Cheap Flights</h1>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol style={{ display: "flex", listStyle: "none", gap: "0.5rem", padding: 0, margin: "0 auto", justifyContent: "center" }}>
            <li><Link to="/" style={{ color: "inherit" }}>Home</Link></li>
            <li>/</li>
            <li aria-current="page">Air Ticketing</li>
          </ol>
        </nav>
        <p className="ticket__header-sub">
          Best air ticketing agency in Islamabad — cheap domestic &amp; international flights on every major airline with instant WhatsApp support.
        </p>
      </div>

      <section className="section__container ticket__section">
        {/* Instant WhatsApp Quick Banner */}
        <div style={{
          maxWidth: "850px",
          margin: "0 auto 2rem auto",
          background: "linear-gradient(135deg, #128C7E 0%, #075E54 100%)",
          color: "#ffffff",
          borderRadius: "16px",
          padding: "1.25rem 1.75rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          boxShadow: "0 10px 25px rgba(18, 140, 126, 0.25)"
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
              <span style={{ background: "#25D366", color: "#ffffff", padding: "0.2rem 0.6rem", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>
                LIVE TICKETING DESK
              </span>
              <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>⚡ Real-Time GDS Fares</span>
            </div>
            <h3 style={{ fontSize: "1.25rem", margin: 0, fontWeight: 700, color: "#ffffff" }}>
              Need fast flight seats, Umrah flights or price quotes?
            </h3>
            <p style={{ margin: "0.35rem 0 0 0", fontSize: "0.92rem", opacity: 0.95 }}>
              Chat directly with our ticketing officers: <strong style={{ color: "#a7f3d0" }}>0333-5542877</strong> (Ticketing Officer) / <strong style={{ color: "#a7f3d0" }}>0332-5500377</strong> (Umrah &amp; Ticketing)
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello O.S Travel Ticketing Desk, I need a flight fare quote.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ background: "#25D366", color: "#ffffff", fontWeight: 700, border: "none", padding: "0.7rem 1.35rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <i className="ri-whatsapp-fill" style={{ fontSize: "1.25rem" }}></i> Chat on WhatsApp
            </a>
            <a
              href="tel:0512805570"
              className="btn"
              style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.4)", padding: "0.7rem 1.1rem" }}
            >
              <i className="ri-phone-fill"></i> 051-2805570
            </a>
          </div>
        </div>

        <div className="ticket__card">
          <div className="ticket__triptype" role="tablist" aria-label="Trip type">
            {["One Way", "Round Trip", "Multi-City"].map((type) => (
              <button
                key={type}
                type="button"
                role="tab"
                aria-selected={form.tripType === type}
                className={`ticket__triptype-btn ${form.tripType === type ? "active" : ""}`}
                onClick={() => setTripType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <form className="ticket__form" onSubmit={handleWhatsAppSubmit}>
            <div className="ticket__grid">
              <p className="ticket__section-title">Flight Details</p>
              <label className="ticket__field">
                <span>From</span>
                <input
                  type="text"
                  placeholder="e.g. Islamabad"
                  value={form.from}
                  onChange={update("from")}
                  required
                />
              </label>

              <label className="ticket__field">
                <span>To</span>
                <input
                  type="text"
                  placeholder="e.g. Dubai"
                  value={form.to}
                  onChange={update("to")}
                  required
                />
              </label>

              <label className="ticket__field">
                <span>Departure Date</span>
                <input
                  type="date"
                  min={today()}
                  value={form.departDate}
                  onChange={update("departDate")}
                  required
                />
              </label>

              <label className={`ticket__field ${form.tripType !== "Round Trip" ? "ticket__field--disabled" : ""}`}>
                <span>Return Date</span>
                <input
                  type="date"
                  min={form.departDate || today()}
                  value={form.returnDate}
                  onChange={update("returnDate")}
                  disabled={form.tripType !== "Round Trip"}
                  required={form.tripType === "Round Trip"}
                />
              </label>

              {form.tripType === "Multi-City" && (
                <>
                  <p className="ticket__section-title">Second Flight (Multi-City)</p>
                  <label className="ticket__field">
                    <span>Leg 2 — From</span>
                    <input type="text" placeholder={form.to || "e.g. Dubai"} value={form.from2} onChange={update("from2")} />
                  </label>
                  <label className="ticket__field">
                    <span>Leg 2 — To</span>
                    <input type="text" placeholder="e.g. London" value={form.to2} onChange={update("to2")} required />
                  </label>
                  <label className="ticket__field">
                    <span>Leg 2 — Date</span>
                    <input type="date" min={form.departDate || today()} value={form.departDate2} onChange={update("departDate2")} required />
                  </label>
                </>
              )}

              <label className="ticket__check">
                <input type="checkbox" checked={form.flexibleDates} onChange={update("flexibleDates")} />
                My dates are flexible (± 3 days) — show me cheaper options
              </label>

              <p className="ticket__section-title">Passengers &amp; Preferences</p>

              <label className="ticket__field">
                <span>Adults (12+)</span>
                <select value={form.adults} onChange={update("adults")}>
                  {[...Array(9).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>{n + 1}</option>
                  ))}
                </select>
              </label>

              <label className="ticket__field">
                <span>Children (2-11)</span>
                <select value={form.children} onChange={update("children")}>
                  {[...Array(9).keys()].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </label>

              <label className="ticket__field">
                <span>Infants (0-2)</span>
                <select value={form.infants} onChange={update("infants")}>
                  {[...Array(5).keys()].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </label>

              <label className="ticket__field">
                <span>Travel Class</span>
                <select value={form.travelClass} onChange={update("travelClass")}>
                  <option>Economy</option>
                  <option>Premium Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </label>

              <label className="ticket__field">
                <span>Preferred Airline</span>
                <select value={form.airline} onChange={update("airline")}>
                  {airlines.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </label>

              <label className="ticket__field">
                <span>Baggage</span>
                <select value={form.baggage} onChange={update("baggage")}>
                  <option>Standard</option>
                  <option>Hand carry only</option>
                  <option>Extra baggage needed</option>
                  <option>Umrah / Zamzam allowance</option>
                </select>
              </label>

              <label className="ticket__field">
                <span>Budget (optional)</span>
                <input type="text" placeholder="e.g. Rs 150,000" value={form.budget} onChange={update("budget")} />
              </label>
            </div>

            <div className="ticket__grid ticket__grid--contact">
              <p className="ticket__section-title">Your Details</p>
              <label className="ticket__field">
                <span>Full Name (as on passport)</span>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={update("name")}
                  required
                />
              </label>

              <label className="ticket__field">
                <span>Your Phone / WhatsApp</span>
                <input
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[0-9+\-\s]{10,16}"
                  title="Enter a valid phone number, e.g. 0333-5542877"
                  placeholder="03XX-XXXXXXX"
                  value={form.phone}
                  onChange={update("phone")}
                  required
                />
              </label>

              <label className="ticket__field">
                <span>Email (optional)</span>
                <input type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={update("email")} />
              </label>

              <label className="ticket__field">
                <span>Your City</span>
                <input type="text" autoComplete="address-level2" placeholder="e.g. Islamabad" value={form.city} onChange={update("city")} />
              </label>

              <label className="ticket__field">
                <span>Best Time to Contact</span>
                <select value={form.contactTime} onChange={update("contactTime")}>
                  <option>Anytime</option>
                  <option>Morning (9am – 12pm)</option>
                  <option>Afternoon (12pm – 4pm)</option>
                  <option>Evening (4pm – 8pm)</option>
                </select>
              </label>
            </div>

            <label className="ticket__field ticket__field--full">
              <span>Additional Notes (optional)</span>
              <textarea
                rows="3"
                placeholder="Any special requests — baggage, meal preference, budget range, etc."
                value={form.notes}
                onChange={update("notes")}
              ></textarea>
            </label>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
              <button
                type="submit"
                className="btn ticket__submit"
                style={{
                  background: "#25D366",
                  color: "#ffffff",
                  flex: "1 1 240px",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  boxShadow: "0 4px 14px rgba(37, 211, 102, 0.4)",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                <i className="ri-whatsapp-fill" style={{ fontSize: "1.3rem" }}></i> Send Request via WhatsApp (Instant Reply)
              </button>
              <button
                type="button"
                onClick={handleEmailSubmit}
                className="btn ticket__submit"
                style={{
                  background: "#1a1a2e",
                  color: "#ffffff",
                  flex: "1 1 180px",
                  cursor: "pointer"
                }}
              >
                <i className="ri-mail-send-line"></i> Send via Email
              </button>
            </div>
            <p className="ticket__form-note" style={{ textAlign: "center", marginTop: "0.75rem" }}>
              ⚡ WhatsApp inquiries receive live fare comparisons and flight options within 5–10 minutes during working hours.
            </p>
          </form>
        </div>

        {/* Partner flight search */}
        <div className="ticket__partner">
          <div>
            <h3><i className="ri-plane-line"></i> Prefer to compare fares yourself?</h3>
            <p>
              Search live fares and flight schedules on our partner site <strong>BookMyFlight.pk</strong> — then send us
              the flight you like on WhatsApp and we'll issue the ticket at the best available price.
            </p>
          </div>
          <a href={BOOKMYFLIGHT_URL} target="_blank" rel="noopener" className="btn">
            Visit BookMyFlight.pk <i className="ri-external-link-line"></i>
          </a>
        </div>

        {/* Direct Ticketing Desks & Govt DTS Verification */}
        <div style={{
          maxWidth: "850px",
          margin: "2.5rem auto 0 auto",
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "16px",
          padding: "1.75rem",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <h3 style={{ margin: 0, fontSize: "1.2rem", color: "#1a1a2e" }}>
              <i className="ri-customer-service-2-fill" style={{ color: "#F5A623", marginRight: "0.5rem" }}></i>
              Direct Ticketing Desks &amp; Dedicated Officers
            </h3>
            <a
              href="http://dts.gov.pk/Detail/NDAyY2I2ZWItYTMzNC00MWMwLThkYjktZjk0ZDliZjUwYTRj"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "#ecfdf5",
                color: "#059669",
                border: "1px solid #a7f3d0",
                padding: "0.3rem 0.75rem",
                borderRadius: "50px",
                fontSize: "0.82rem",
                fontWeight: 600,
                textDecoration: "none"
              }}
            >
              <i className="ri-shield-check-fill"></i> Verified by Govt of Pakistan DTS
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: "1rem", marginBottom: "0.25rem" }}>
                Ticketing Officer
              </div>
              <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
                International Fares, Umrah Flights &amp; Group Bookings
              </p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <a
                  href={`https://wa.me/923335542877?text=${encodeURIComponent("Hello, I need a flight ticket quote.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ background: "#25D366", color: "#ffffff", padding: "0.4rem 0.8rem", fontSize: "0.82rem" }}
                >
                  <i className="ri-whatsapp-fill"></i> 0333-5542877
                </a>
                <a
                  href="tel:03335542877"
                  className="btn"
                  style={{ background: "#f1f5f9", color: "#1e293b", padding: "0.4rem 0.8rem", fontSize: "0.82rem" }}
                >
                  <i className="ri-phone-fill"></i> Call
                </a>
              </div>
            </div>

            <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: "1rem", marginBottom: "0.25rem" }}>
                Umrah &amp; Air Ticketing Desk
              </div>
              <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
                Umrah Flights, Gulf Airlines, Re-issues &amp; Date Changes
              </p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <a
                  href={`https://wa.me/923325500377?text=${encodeURIComponent("Hello, I need assistance with Umrah flights and ticket booking.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ background: "#25D366", color: "#ffffff", padding: "0.4rem 0.8rem", fontSize: "0.82rem" }}
                >
                  <i className="ri-whatsapp-fill"></i> 0332-5500377
                </a>
                <a
                  href="tel:03325500377"
                  className="btn"
                  style={{ background: "#f1f5f9", color: "#1e293b", padding: "0.4rem 0.8rem", fontSize: "0.82rem" }}
                >
                  <i className="ri-phone-fill"></i> Call
                </a>
              </div>
            </div>

            <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: "1rem", marginBottom: "0.25rem" }}>
                Head Office Landlines
              </div>
              <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
                Office #3, Aaly Plaza, Blue Area, Islamabad
              </p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <a
                  href="tel:0512805570"
                  className="btn"
                  style={{ background: "#1a1a2e", color: "#ffffff", padding: "0.4rem 0.8rem", fontSize: "0.82rem" }}
                >
                  <i className="ri-phone-fill"></i> 051-2805570
                </a>
                <a
                  href="tel:0512120700"
                  className="btn"
                  style={{ background: "#1a1a2e", color: "#ffffff", padding: "0.4rem 0.8rem", fontSize: "0.82rem" }}
                >
                  <i className="ri-phone-fill"></i> 051-2120700
                </a>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem", fontSize: "0.85rem", color: "#64748b" }}>
            <div>
              🏛️ Licensed Travel Agency registered with <strong>Department of Tourist Services (DTS #402)</strong>, Islamabad.
            </div>
            <a
              href="https://www.facebook.com/ostravels/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1877F2", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
            >
              <i className="ri-facebook-circle-fill"></i> Follow 32K+ Travelers on Facebook
            </a>
          </div>
        </div>
      </section>

      <section className="section__container ticket__why">
        <h2 className="section__header">Why Book Your Flight With O.S Travel & Tours</h2>
        <p className="section__description">
          {site.name} is a trusted air ticketing agency in Islamabad, Pakistan, helping travellers find the cheapest
          fares on every major domestic and international airline.
        </p>
        <div className="ticket__why-grid">
          <div className="ticket__why-card">
            <i className="ri-price-tag-3-line"></i>
            <h4>Cheapest Fares</h4>
            <p>We compare fares across airlines so you always get the most competitive price on your flight ticket.</p>
          </div>
          <div className="ticket__why-card">
            <i className="ri-flight-takeoff-line"></i>
            <h4>All Major Airlines</h4>
            <p>PIA, Emirates, Qatar Airways, Etihad, Turkish Airlines, Airblue, Serene Air, Fly Jinnah and more.</p>
          </div>
          <div className="ticket__why-card">
            <i className="ri-whatsapp-line"></i>
            <h4>Instant WhatsApp Booking</h4>
            <p>Fill the booking form once — your name, route, dates and passengers arrive on our WhatsApp and we reply with live fares.</p>
          </div>
          <div className="ticket__why-card">
            <i className="ri-user-star-line"></i>
            <h4>Umrah &amp; Group Fares</h4>
            <p>Special group and Umrah flight packages for families, corporate teams and religious groups.</p>
          </div>
          <div className="ticket__why-card">
            <i className="ri-customer-service-2-line"></i>
            <h4>24/7 Support</h4>
            <p>Our travel consultants are on call for date changes, cancellations, and rebooking whenever you need us.</p>
          </div>
          <div className="ticket__why-card">
            <i className="ri-shield-check-line"></i>
            <h4>Trusted &amp; Reliable</h4>
            <p>{site.stats?.[0]?.value || "10+"} years of experience booking flights and visas for thousands of happy travellers.</p>
          </div>
        </div>
      </section>

      <section className="section__container ticket__routes">
        <h2 className="section__header">Popular Flight Routes</h2>
        <p className="section__description">
          A few of the most booked routes from Pakistan — send us your own route for a custom quote.
        </p>
        <div className="ticket__routes-grid">
          {popularRoutes.map((r, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 6px rgba(0,0,0,0.04)"
              }}
            >
              <button
                type="button"
                className="ticket__route-chip"
                style={{ flex: 1, border: "none", background: "transparent", borderRadius: 0, textAlign: "left", boxShadow: "none" }}
                onClick={() => setForm((prev) => ({ ...prev, from: r.from, to: r.to }))}
                title="Click to select this route in form"
              >
                <i className="ri-flight-takeoff-line"></i> {r.from} <i className="ri-arrow-right-line"></i> {r.to}
              </button>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi O.S Travel, I need a flight ticket quote for ${r.from} to ${r.to}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`WhatsApp quote for ${r.from} to ${r.to}`}
                style={{
                  background: "#25D366",
                  color: "#ffffff",
                  padding: "0.65rem 0.85rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.15rem",
                  textDecoration: "none"
                }}
              >
                <i className="ri-whatsapp-fill"></i>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section__container ticket__faq">
        <FAQAccordion items={faqs} id="air-ticketing" />
      </section>
    </>
  );
}