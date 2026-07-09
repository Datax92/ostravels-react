import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "../data/site";
import SEO from "../components/SEO";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal";
import { insuranceKeywords } from "../data/seoKeywords";

const WHATSAPP_NUMBER = "923335542877";

const heroImg =
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1400&auto=format&fit=crop";

const heroStats = [
  { icon: "ri-shield-star-line", value: "12k+", label: "Policies Issued" },
  { icon: "ri-earth-line", value: "100+", label: "Countries Covered" },
  { icon: "ri-customer-service-2-line", value: "24/7", label: "Emergency Assistance" },
  { icon: "ri-flashlight-line", value: "< 30 min", label: "Policy Issuance" },
];
const partners = [
  { name: "Jubilee Insurance", tag: "Premium Global Coverage" },
  { name: "Adamjee Insurance", tag: "Trusted Embassy Approved", featured: true },
  { name: "United Insurance", tag: "Best Value Packages" },
  { name: "EFU General", tag: "Comprehensive Protection" },
];
const plans = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Solo trips & short visits",
    price: "1,200",
    coverage: "€30,000",
    popular: false,
    features: [
      { label: "Medical Emergency Coverage", included: true },
      { label: "Emergency Hospitalisation", included: true },
      { label: "Schengen Visa Compliant", included: true },
      { label: "Trip Cancellation Cover", included: false },
      { label: "Baggage Loss / Delay Cover", included: false },
      { label: "COVID-19 Treatment Cover", included: false },
    ],
  },
  {
    id: "standard",
    name: "Standard Plus",
    tagline: "Most travellers & families",
    price: "1,800",
    coverage: "€50,000",
    popular: true,
    features: [
      { label: "Medical Emergency Coverage", included: true },
      { label: "Emergency Hospitalisation", included: true },
      { label: "Schengen Visa Compliant", included: true },
      { label: "Trip Cancellation Cover", included: true },
      { label: "Baggage Loss / Delay Cover", included: true },
      { label: "COVID-19 Treatment Cover", included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium Global",
    tagline: "Long trips & full protection",
    price: "2,800",
    coverage: "€100,000",
    popular: false,
    features: [
      { label: "Medical Emergency Coverage", included: true },
      { label: "Emergency Hospitalisation", included: true },
      { label: "Schengen Visa Compliant", included: true },
      { label: "Trip Cancellation Cover", included: true },
      { label: "Baggage Loss / Delay Cover", included: true },
      { label: "COVID-19 Treatment Cover", included: true },
    ],
  },
];

const covered = [
  { icon: "ri-first-aid-kit-line", text: "Medical emergencies & hospitalisation abroad" },
  { icon: "ri-flight-land-line", text: "Emergency medical evacuation & repatriation" },
  { icon: "ri-calendar-close-line", text: "Trip cancellation & interruption (Standard+)" },
  { icon: "ri-luggage-cart-line", text: "Baggage loss, theft & delay (Standard+)" },
  { icon: "ri-shield-user-line", text: "Personal liability & legal assistance abroad" },
  { icon: "ri-customer-service-2-line", text: "24/7 multilingual emergency helpline" },
];

const notCovered = [
  { icon: "ri-close-circle-line", text: "Pre-existing medical conditions (unless declared)" },
  { icon: "ri-close-circle-line", text: "Adventure sports without an add-on rider" },
  { icon: "ri-close-circle-line", text: "Elective or cosmetic medical procedures" },
  { icon: "ri-close-circle-line", text: "Travel to destinations under official advisories" },
];

const steps = [
  { icon: "ri-file-list-3-line", title: "Choose Your Plan", desc: "Pick Basic, Standard Plus or Premium based on your destination and trip length." },
  { icon: "ri-whatsapp-line", title: "Share Your Details", desc: "Fill the quote form or send us your travel dates directly on WhatsApp." },
  { icon: "ri-secure-payment-line", title: "Confirm & Pay", desc: "We send a quotation and secure payment link — no office visit required." },
  { icon: "ri-mail-check-line", title: "Get Your e-Policy", desc: "Receive your policy by email within minutes, ready for visa submission." },
];

const whyUs = [
  { icon: "ri-passport-fill", title: "Schengen-Compliant", desc: "Every plan meets the minimum €30,000 medical coverage required for Schengen visa applications." },
  { icon: "ri-flashlight-line", title: "Fast e-Policy Issuance", desc: "Most policies are issued digitally within 30 minutes — perfect for last-minute visa deadlines." },
  { icon: "ri-links-line", title: "Bundled With Visa Filing", desc: "Add insurance directly onto your visa file processing — one team, one file, zero back-and-forth." },
  { icon: "ri-verified-badge-line", title: "Licensed Insurer Partners", desc: "We work only with regulated, licensed insurance providers recognised by embassies worldwide." },
  { icon: "ri-global-line", title: "Worldwide Coverage", desc: "From Schengen to the US, UK, Gulf and Southeast Asia — coverage that travels with you." },
  { icon: "ri-hand-heart-line", title: "Dedicated Claims Support", desc: "Our team stays with you through the claims process, not just the sale." },
];

const faqs = [
  {
    q: "Is travel insurance mandatory for a Schengen visa?",
    a: "Yes. Schengen visa applicants must show travel medical insurance with a minimum coverage of €30,000, valid across all Schengen states for the full duration of the trip. Every plan we offer meets this requirement.",
  },
  {
    q: "How quickly can I get my insurance policy?",
    a: "Most policies are issued digitally within 30 minutes of confirming your details and payment, so you can attach it to a visa file the same day.",
  },
  {
    q: "Does travel insurance cover COVID-19 treatment abroad?",
    a: "COVID-19 medical treatment is included on our Premium Global plan. Basic and Standard Plus focus on general medical emergencies and hospitalisation.",
  },
  {
    q: "Can I insure my whole family on one policy?",
    a: "Yes, family and group policies are available. Just list the number of travellers on the quote form and we'll send a combined quotation.",
  },
  {
    q: "What happens if I need to cancel my trip?",
    a: "Trip cancellation and interruption are covered under the Standard Plus and Premium Global plans, subject to the policy's terms and documentation of the cancellation reason.",
  },
  {
    q: "Do I need to visit your office to buy a policy?",
    a: "No. The entire process — quotation, payment and e-policy delivery — can be completed online or over WhatsApp.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`ins__faq-item ${isOpen ? "open" : ""}`}>
      <button type="button" className="ins__faq-q" onClick={onToggle} aria-expanded={isOpen}>
        <span><i className="ri-question-line"></i> {item.q}</span>
        <i className={`ri-add-line ins__faq-icon ${isOpen ? "rotated" : ""}`}></i>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="ins__faq-a">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const initialForm = {
  name: "",
  phone: "",
  destination: "",
  startDate: "",
  endDate: "",
  travelers: "1",
  plan: "Standard Plus",
  purpose: "Tourism",
  notes: "",
};

export default function Insurance() {
  const [form, setForm] = useState(initialForm);
  const [openFaq, setOpenFaq] = useState(0);

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const selectPlan = (planName) => {
    setForm((prev) => ({ ...prev, plan: planName }));
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      "🛡️ *New Travel Insurance Request — O.S Travel & Tours*",
      "",
      `*Plan:* ${form.plan}`,
      `*Destination:* ${form.destination}`,
      `*Travel Dates:* ${form.startDate} to ${form.endDate}`,
      `*Travellers:* ${form.travelers}`,
      `*Purpose of Travel:* ${form.purpose}`,
      "",
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
    ];
    if (form.notes) lines.push(`*Additional Notes:* ${form.notes}`);

    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SEO
        title="Travel Insurance in Islamabad — Schengen-Compliant Plans | O.S Travel & Tours"
        description="Buy Schengen-compliant travel insurance in Islamabad, Pakistan with O.S Travel & Tours. Medical emergency, trip cancellation & baggage cover from PKR 1,200/day. Instant e-policy on WhatsApp."
        keywords={insuranceKeywords}
        path="/travel-insurance/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Travel Insurance" },
        ]}
      />

      {/* ── HERO ── */}
      <header className="ins__hero">
        <img src={heroImg} alt="Travel insurance documents and passport for international travel" />
        <div className="ins__hero-overlay"></div>

        {/* <motion.div
          className="ins__hero-float ins__hero-float--1"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <i className="ri-shield-check-fill"></i>
        </motion.div> */}
        {/* <motion.div
          className="ins__hero-float ins__hero-float--2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <i className="ri-passport-fill"></i>
        </motion.div>
        <motion.div
          className="ins__hero-float ins__hero-float--3"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <i className="ri-flight-takeoff-fill"></i>
        </motion.div> */}

        <div className="ins__hero-content">
          <Reveal direction="fade" duration={0.5}>
            <p className="breadcrumb">Home / Travel Insurance</p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <span className="ins__eyebrow">
              <i className="ri-shield-star-line"></i> Travel Insurance
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <h1>Travel Insurance That Keeps You Covered, Anywhere You Go</h1>
          </Reveal>
          <Reveal direction="up" delay={0.25}>
            <p className="ins__hero-sub">
              Schengen-compliant medical coverage starting at €30,000, plus trip cancellation and
              baggage protection — issued digitally in minutes, ready for your visa file.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.35}>
            <div className="ins__hero-cta">
              <a
                href="#quote-form"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Get a Free Quote
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn ins__btn-ghost"
              >
                <i className="ri-whatsapp-fill"></i> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.45}>
            <div className="ins__hero-chips">
              <span><i className="ri-checkbox-circle-fill"></i> Schengen Visa Compliant</span>
              <span><i className="ri-checkbox-circle-fill"></i> 24/7 Emergency Assistance</span>
              <span><i className="ri-checkbox-circle-fill"></i> Instant e-Policy</span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ── STATS ── */}
      <section className="section__container">
        <RevealGroup className="ins__stats-grid" stagger={0.1}>
          {heroStats.map((s) => (
            <RevealItem key={s.label} direction="scale" className="ins__stat-card">
              <i className={s.icon}></i>
              <h4>{s.value}</h4>
              <p>{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
{/* ── PARTNERS ── */}
      <section className="ins__partners">
        <div className="section__container">
          <Reveal direction="up">
            <div className="ins__partners-eyebrow">
              <i className="ri-award-fill"></i> Official Issuing Partners
            </div>
            <h2 className="section__header">Backed by Pakistan's Top Insurers</h2>
            <p className="section__description">
              We are an officially authorized agency to generate instant, verifiable travel
              insurance policies from the nation's most reputable providers.
            </p>
          </Reveal>

          <RevealGroup className="ins__partners-grid" stagger={0.1}>
            {partners.map((p) => (
              <RevealItem
                key={p.name}
                direction="scale"
                className={`ins__partner-card ${p.featured ? "featured" : ""}`}
              >
                <span className="ins__partner-icon">
                  <i className="ri-briefcase-line"></i>
                </span>
                <h4>{p.name}</h4>
                <p>{p.tag}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
      {/* ── PLANS ──
      <section className="section__container" style={{ background: "var(--extra-light)" }}>
        <Reveal direction="up">
          <h2 className="section__header">Choose Your Coverage</h2>
          <p className="section__description">
            Transparent plans built around what embassies and travellers actually need — no hidden add-ons.
          </p>
        </Reveal>

        <RevealGroup className="ins__plans-grid" stagger={0.15}>
          {plans.map((p) => (
            <RevealItem key={p.id} direction="up" className={`ins__plan-card ${p.popular ? "popular" : ""}`}>
              {p.popular && <span className="ins__plan-badge">Most Popular</span>}
              <h3>{p.name}</h3>
              <p className="ins__plan-tagline">{p.tagline}</p>
              <div className="ins__plan-price">
                <span className="amount">PKR {p.price}</span>
                <span className="period">/ day</span>
              </div>
              <p className="ins__plan-coverage">
                <i className="ri-shield-check-line"></i> Up to {p.coverage} medical coverage
              </p>
              <ul className="ins__plan-features">
                {p.features.map((f) => (
                  <li key={f.label} className={f.included ? "yes" : "no"}>
                    <i className={f.included ? "ri-checkbox-circle-fill" : "ri-close-circle-line"}></i>
                    {f.label}
                  </li>
                ))}
              </ul>
              <button type="button" className="btn ins__plan-btn" onClick={() => selectPlan(p.name)}>
                Select {p.name}
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </section> */}

      {/* ── WHAT'S COVERED ── */}
      <section className="section__container">
        <Reveal direction="up">
          <h2 className="section__header">What's Covered</h2>
          <p className="section__description">
            A clear picture of what's protected — and what needs a closer look before you fly.
          </p>
        </Reveal>

        <div className="ins__coverage-grid">
          <Reveal direction="left" className="ins__coverage-col ins__coverage-col--yes">
            <h4><i className="ri-shield-check-fill"></i> Covered</h4>
            <ul>
              {covered.map((c) => (
                <li key={c.text}><i className={c.icon}></i> {c.text}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="right" delay={0.1} className="ins__coverage-col ins__coverage-col--no">
            <h4><i className="ri-close-circle-fill"></i> Not Covered</h4>
            <ul>
              {notCovered.map((c) => (
                <li key={c.text}><i className={c.icon}></i> {c.text}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      {/* <section className="section__container" style={{ background: "var(--extra-light)" }}>
        <Reveal direction="up">
          <h2 className="section__header">How It Works</h2>
          <p className="section__description">From quote to e-policy in four simple steps.</p>
        </Reveal>

        <RevealGroup className="ins__steps" stagger={0.15}>
          {steps.map((s, i) => (
            <RevealItem key={s.title} direction="scale" className="ins__step">
              <div className="ins__step-num">{i + 1}</div>
              <i className={s.icon}></i>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section> */}

      {/* ── WHY US ── */}
      <section className="section__container">
        <Reveal direction="up">
          <h2 className="section__header">Why Get Insured With O.S Travel &amp; Tours</h2>
          <p className="section__description">
            {site.stats?.[0]?.value || "10+"} years arranging visas and travel insurance side by side, for
            thousands of Pakistani travellers.
          </p>
        </Reveal>

        <RevealGroup className="ins__why-grid" stagger={0.1}>
          {whyUs.map((w) => (
            <RevealItem key={w.title} direction="up" className="ins__why-card">
              <i className={w.icon}></i>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ── QUOTE FORM ── */}
      <section className="section__container ins__form-section" id="quote-form">
        <Reveal direction="up">
          <h2 className="section__header">Get Your Free Quote</h2>
          <p className="section__description">
            Fill in your trip details — we'll send a quotation straight to your WhatsApp, no obligation.
          </p>
        </Reveal>

        <Reveal direction="scale" amount={0.1}>
          <div className="ins__form-card">
            <form className="ins__form" onSubmit={handleSubmit}>
              <div className="ins__form-grid">
                <label className="ins__field">
                  <span>Destination Country</span>
                  <input type="text" placeholder="e.g. France, Germany" value={form.destination} onChange={update("destination")} required />
                </label>

                <label className="ins__field">
                  <span>Number of Travellers</span>
                  <select value={form.travelers} onChange={update("travelers")}>
                    {[...Array(9).keys()].map((n) => (
                      <option key={n + 1} value={n + 1}>{n + 1}</option>
                    ))}
                  </select>
                </label>

                <label className="ins__field">
                  <span>Travel Start Date</span>
                  <input type="date" value={form.startDate} onChange={update("startDate")} required />
                </label>

                <label className="ins__field">
                  <span>Travel End Date</span>
                  <input type="date" value={form.endDate} onChange={update("endDate")} required />
                </label>

                <label className="ins__field">
                  <span>Coverage Plan</span>
                  <select value={form.plan} onChange={update("plan")}>
                    {plans.map((p) => (
                      <option key={p.id} value={p.name}>{p.name} — {p.coverage}</option>
                    ))}
                  </select>
                </label>

                <label className="ins__field">
                  <span>Purpose of Travel</span>
                  <select value={form.purpose} onChange={update("purpose")}>
                    <option>Tourism</option>
                    <option>Business</option>
                    <option>Study</option>
                    <option>Umrah</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>

              <div className="ins__form-grid ins__form-grid--contact">
                <label className="ins__field">
                  <span>Your Name</span>
                  <input type="text" placeholder="Full Name" value={form.name} onChange={update("name")} required />
                </label>
                <label className="ins__field">
                  <span>Your Phone / WhatsApp</span>
                  <input type="tel" placeholder="03XX-XXXXXXX" value={form.phone} onChange={update("phone")} required />
                </label>
              </div>

              <label className="ins__field ins__field--full">
                <span>Additional Notes (optional)</span>
                <textarea rows="3" placeholder="Pre-existing condition, adventure sports add-on, etc." value={form.notes} onChange={update("notes")}></textarea>
              </label>

              <button type="submit" className="btn ins__form-submit">
                <i className="ri-whatsapp-fill"></i> Send Request on WhatsApp
              </button>
              <p className="ins__form-note">
                Your request goes straight to our insurance desk on WhatsApp — a consultant replies with your
                quotation within minutes.
              </p>
            </form>
          </div>
        </Reveal>
      </section>

      {/* ── FAQ ── */}
      <section className="section__container">
        <Reveal direction="up">
          <h2 className="section__header">Travel Insurance FAQs</h2>
          <p className="section__description">Answers to what travellers ask us most.</p>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="ins__faq-list">
            {faqs.map((f, i) => (
              <FaqItem
                key={f.q}
                item={f}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section__container">
        <Reveal direction="scale">
          <div className="ins__cta-banner">
            <div>
              <h3>Ready to Travel Protected?</h3>
              <p>Get a Schengen-compliant policy issued today, bundled with your visa file if you need one.</p>
            </div>
            <div className="ins__cta-actions">
              <a href={`tel:${site.phones[0]}`} className="btn ins__btn-ghost">
                <i className="ri-phone-fill"></i> Call Us
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <i className="ri-whatsapp-fill"></i> WhatsApp Now
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
