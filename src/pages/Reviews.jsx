import { useEffect, useState } from "react";

// ---- CONFIG ----
// Vite env var — add to your .env file:
//   VITE_GOOGLE_MAPS_API_KEY=your_key_here
// Restrict this key in Google Cloud Console to HTTP referrers
// (your domain, e.g. ostravelandtours.com/*) — NOT by IP, since it
// runs in the browser.
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// Your O.S Travel & Tours Place ID — get it from:
// https://developers.google.com/maps/documentation/places/web-service/place-id
const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID;

let loaderPromise = null;

// Loads the Maps JS API script once and caches the promise so multiple
// components mounting don't inject the script twice.
function loadGoogleMaps() {
  if (loaderPromise) return loaderPromise;

  loaderPromise = new Promise((resolve, reject) => {
    if (window.google?.maps) {
      resolve(window.google.maps);
      return;
    }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=weekly&loading=async&libraries=places`;
    script.async = true;
    script.onerror = () => reject(new Error("Failed to load Google Maps script"));
    script.onload = () => resolve(window.google.maps);
    document.head.appendChild(script);
  });

  return loaderPromise;
}

function Star({ filled }) {
  return (
    <span style={{ color: filled ? "#f5a623" : "#d9d9d9" }} aria-hidden="true">
      ★
    </span>
  );
}

function StarRow({ rating }) {
  const rounded = Math.round(rating || 0);
  return (
    <span role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} filled={i <= rounded} />
      ))}
    </span>
  );
}

export default function Reviews() {
  const [status, setStatus] = useState("loading"); // loading | success | error
  const [place, setPlace] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        if (!API_KEY || !PLACE_ID) {
          throw new Error(
            "Missing VITE_GOOGLE_MAPS_API_KEY or VITE_GOOGLE_PLACE_ID in .env"
          );
        }

        const maps = await loadGoogleMaps();
        const { Place } = await maps.importLibrary("places");

        const p = new Place({ id: PLACE_ID });
        await p.fetchFields({
          fields: ["displayName", "rating", "userRatingCount", "reviews", "googleMapsURI"],
        });

        if (!cancelled) {
          setPlace(p);
          setStatus("success");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setStatus("error");
        }
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") {
    return (
      <section className="section__container">
        <p style={{ textAlign: "center", color: "#666" }}>Loading reviews…</p>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className="section__container">
        <p style={{ textAlign: "center", color: "#999" }}>
          Couldn't load reviews right now.
        </p>
        {/* Remove this in production, useful while you're wiring up keys */}
        {import.meta.env.DEV && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
      </section>
    );
  }

  const reviews = place.reviews ?? [];

  return (
    <section className="section__container">
      <h2 className="section__header">What Our Clients Say</h2>
      <div style={{ textAlign: "center", marginBottom: "1.5rem", color: "#555" }}>
        <StarRow rating={place.rating} />{" "}
        <span>
          {place.rating?.toFixed(1)} · {place.userRatingCount} reviews on Google
        </span>
      </div>

      <div className="testimonial__grid">
        {reviews.map((r, i) => (
          <div className="testimonial__card" key={i}>
            <p className="quote">"{r.text}"</p>
            <p className="name">{r.authorAttribution?.displayName ?? "Google User"}</p>
          </div>
        ))}
      </div>

      {place.googleMapsURI && (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href={place.googleMapsURI} target="_blank" rel="noopener noreferrer" className="btn">
            See All Reviews on Google
          </a>
        </div>
      )}
    </section>
  );
}