import { useEffect } from "react";

export default function ServiceSchema({ name, description, url, id }) {
  useEffect(() => {
    if (!name) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": name,
      "description": description,
      "provider": {
        "@type": "TravelAgency",
        "name": "O.S Travel & Tours",
        "url": "https://ostravels.com",
        "telephone": "+92-51-2120700",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office # 3, Aaly Plaza, Fazal-e-Haq Rd, Blue Area",
          "addressLocality": "Islamabad",
          "addressCountry": "PK"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "url": url || "https://ostravels.com"
    };

    let script = document.head.querySelector(`script[data-seo-id="service-${id}"]`);
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-seo-id", `service-${id}`);
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema, null, 2);

    return () => {
      const s = document.head.querySelector(`script[data-seo-id="service-${id}"]`);
      if (s) s.remove();
    };
  }, [name, description, url, id]);

  return null;
}
