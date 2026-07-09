import { useState } from "react";
import { site } from "../data/site";
import SEO from "../components/SEO";
import { ticketingKeywords } from "../data/seoKeywords";

const WHATSAPP_NUMBER = "923105105220";

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
    q: "How do I book an air ticket with O.S Travel & Tours?",
    a: "Just fill in the flight details on this page and hit \"Send Request on WhatsApp\". Your trip details land directly in our WhatsApp inbox and one of our air ticketing experts replies with live fares and options within minutes.",
  },
  {
    q: "Which airlines can you book tickets for?",
    a: "We issue tickets for all major airlines flying from Pakistan, including PIA, Emirates, Qatar Airways, Etihad, Turkish Airlines, Airblue, Serene Air, Fly Jinnah, Saudia and more, covering both domestic and international routes.",
  },
  {
    q: "Can you help with Umrah and group flight bookings?",
    a: "Yes. We regularly handle Umrah flight tickets and bulk/group bookings for families, corporate teams and religious groups, with special group fares on request.",
  },
  {
    q: "Do you charge for a fare quotation?",
    a: "No, sending a request and getting a fare quote on WhatsApp is completely free. You only pay once you confirm and issue the ticket.",
  },
];

const initialForm = {
  tripType: "One Way",
  from: "",
  to: "",
  departDate: "",
  returnDate: "",
  adults: "1",
  children: "0",
  infants: "0",
  travelClass: "Economy",
  airline: "No Preference",
  name: "",
  phone: "",
  notes: "",
};

export default function Ticketing() {
  const [form, setForm] = useState(initialForm);

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const setTripType = (type) =>
    setForm((prev) => ({ ...prev, tripType: type, returnDate: type === "One Way" ? "" : prev.returnDate }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = [
      "✈️ *New Air Ticket Request — O.S Travel & Tours*",
      "",
      `*Trip Type:* ${form.tripType}`,
      `*From:* ${form.from}`,
      `*To:* ${form.to}`,
      `*Departure Date:* ${form.departDate}`,
    ];

    if (form.tripType === "Round Trip" && form.returnDate) {
      lines.push(`*Return Date:* ${form.returnDate}`);
    }

    lines.push(
      `*Passengers:* ${form.adults} Adult(s), ${form.children} Child(ren), ${form.infants} Infant(s)`,
      `*Class:* ${form.travelClass}`,
      `*Preferred Airline:* ${form.airline}`,
      "",
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`
    );

    if (form.notes) {
      lines.push(`*Additional Notes:* ${form.notes}`);
    }

    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SEO
        title="Air Ticketing in Islamabad — Cheap Flight Booking | O.S Travel & Tours"
        description="Book cheap air tickets in Islamabad, Pakistan with O.S Travel & Tours. Domestic & international flight booking on PIA, Emirates, Qatar Airways, Turkish Airlines & more. Get instant fares on WhatsApp."
        keywords={ticketingKeywords}
        path="/air-ticketing/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Air Ticketing" },
        ]}
      />

      <div className="page__header ticket__header">
        <h1>Air Ticketing</h1>
        <p className="breadcrumb">Home / Air Ticketing</p>
        <p className="ticket__header-sub">
          Best air ticketing agency in Islamabad — cheap domestic &amp; international flights on every major airline.
        </p>
      </div>

      <section className="section__container ticket__section">
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

          <form className="ticket__form" onSubmit={handleSubmit}>
            <div className="ticket__grid">
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
                  value={form.departDate}
                  onChange={update("departDate")}
                  required
                />
              </label>

              <label className={`ticket__field ${form.tripType !== "Round Trip" ? "ticket__field--disabled" : ""}`}>
                <span>Return Date</span>
                <input
                  type="date"
                  value={form.returnDate}
                  onChange={update("returnDate")}
                  disabled={form.tripType !== "Round Trip"}
                  required={form.tripType === "Round Trip"}
                />
              </label>

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
            </div>

            <div className="ticket__grid ticket__grid--contact">
              <label className="ticket__field">
                <span>Your Name</span>
                <input
                  type="text"
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
                  placeholder="03XX-XXXXXXX"
                  value={form.phone}
                  onChange={update("phone")}
                  required
                />
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

            <button type="submit" className="btn ticket__submit">
              <i className="ri-whatsapp-fill"></i> Send Request on WhatsApp
            </button>
            <p className="ticket__form-note">
              Your flight request is sent straight to our WhatsApp — no account, no hassle. Our air ticketing team
              replies with the best fares within minutes.
            </p>
          </form>
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
            <p>Send your travel details and get a live fare quotation on WhatsApp within minutes — no long forms, no waiting.</p>
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
            <button
              type="button"
              key={i}
              className="ticket__route-chip"
              onClick={() => setForm((prev) => ({ ...prev, from: r.from, to: r.to }))}
            >
              <i className="ri-flight-takeoff-line"></i> {r.from} <i className="ri-arrow-right-line"></i> {r.to}
            </button>
          ))}
        </div>
      </section>

      <section className="section__container ticket__faq">
        <h2 className="section__header">Air Ticketing FAQs</h2>
        <div className="ticket__faq-list">
          {faqs.map((f, i) => (
            <div className="ticket__faq-item" key={i}>
              <h4><i className="ri-question-line"></i> {f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
