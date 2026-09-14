import { useState, useEffect } from "react";

export default function FAQAccordion({ items, id = "page" }) {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (!items || items.length === 0) return;

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": items.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    };

    let script = document.head.querySelector(`script[data-seo-id="faq-${id}"]`);
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-seo-id", `faq-${id}`);
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqSchema, null, 2);

    return () => {
      const s = document.head.querySelector(`script[data-seo-id="faq-${id}"]`);
      if (s) s.remove();
    };
  }, [items, id]);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="faq-section" style={{ marginTop: "3rem", marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.75rem", color: "#1a1a2e", marginBottom: "0.5rem" }}>Frequently Asked Questions</h2>
      <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>Quick answers to common questions about requirements, processing times, and fees.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          const panelId = `faq-panel-${id}-${idx}`;
          const btnId = `faq-btn-${id}-${idx}`;
          return (
            <div
              key={idx}
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                background: "#ffffff",
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
            >
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "1.1rem 1.25rem",
                  background: isOpen ? "#f8faff" : "#ffffff",
                  border: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: isOpen ? "#2887ff" : "#1a1a2e",
                }}
              >
                <span>{item.question}</span>
                <i
                  className={isOpen ? "ri-subtract-line" : "ri-add-line"}
                  style={{ fontSize: "1.2rem", color: isOpen ? "#2887ff" : "#64748b", marginLeft: "1rem" }}
                  aria-hidden="true"
                ></i>
              </button>
              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  style={{
                    padding: "1rem 1.25rem 1.25rem 1.25rem",
                    color: "#475569",
                    lineHeight: 1.65,
                    fontSize: "0.95rem",
                    borderTop: "1px solid #f1f5f9",
                    background: "#ffffff",
                  }}
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
