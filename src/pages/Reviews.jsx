import SEO from "../components/SEO";
import { baseKeywords } from "../data/seoKeywords";
import reviewsData from "../data/reviews.json";

const GOOGLE_MAPS_REVIEWS_URL =
  "https://www.google.com/maps/place/O.S+Travel+%26+Tours/@33.7178385,73.0733661,17z/data=!4m8!3m7!1s0x38dfbfa2da8ccd4b:0x1d0b22370a83b5d9!8m2!3d33.7178385!4d73.0733661!9m1!1b1";

const allReviews = (reviewsData.reviews || []).filter((r) => r.text?.trim());
const { summary } = reviewsData;


function Star({ filled }) {
  return (
    <span style={{ color: filled ? "#f5a623" : "#d9d9d9", fontSize: "1rem" }} aria-hidden="true">
      ★
    </span>
  );
}

function StarRow({ rating }) {
  const n = Math.round(rating || 0);
  return (
    <span role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => <Star key={i} filled={i <= n} />)}
    </span>
  );
}

function Avatar({ src, name }) {
  const initial = (name || "G")[0].toUpperCase();
  const hue = (Array.from(name || "G").reduce((a, c) => a + c.charCodeAt(0), 0) * 37) % 360;

  if (!src) {
    return (
      <div
        aria-hidden="true"
        style={{
          width: 44, height: 44, borderRadius: "50%",
          background: `hsl(${hue},55%,58%)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 700, fontSize: "1.1rem", color: "#fff", flexShrink: 0,
        }}
      >
        {initial}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      onError={(e) => { e.currentTarget.style.display = "none"; }}
      style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
    />
  );
}

function ReviewCard({ r }) {
  return (
    <div className="testimonial__card review-card">
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Avatar src={r.avatar} name={r.name} />
        <div>
          <p style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: "0.1rem" }}>
            {r.name}
          </p>
          {r.date && (
            <p style={{ fontSize: "0.75rem", color: "var(--text-light)" }}>{r.date}</p>
          )}
        </div>
      </div>
      <StarRow rating={r.rating} />
      <p className="quote" style={{ marginBottom: 0 }}>"{r.text}"</p>
    </div>
  );
}

// Split reviews round-robin into N vertical columns
function splitColumns(list, n) {
  const cols = Array.from({ length: n }, () => []);
  list.forEach((r, i) => cols[i % n].push(r));
  return cols;
}

const COLUMN_COUNT = 3;
const columns = splitColumns(allReviews, COLUMN_COUNT);
// Scroll all columns upwards in unison at a slower, synchronized pace
const directions = ["scroll-up", "scroll-up", "scroll-up"];
const durations = ["210s", "210s", "210s"];

export default function Reviews() {
  return (
    <>
      <SEO
        title="Client Reviews — O.S Travel & Tours | Google Reviews Islamabad"
        description="Read genuine Google reviews from happy travellers who used O.S Travel & Tours for visa services, air ticketing and travel assistance in Islamabad, Pakistan. Rated 5 stars by 12,000+ clients."
        keywords={[
          "O.S Travel & Tours Reviews",
          "Best Travel Agency Islamabad Reviews",
          "Visa Agent Islamabad Reviews",
          "OS Travel Google Reviews",
          "Travel Agency Pakistan Client Reviews",
          "Best Visa Consultant Islamabad Reviews",
          ...baseKeywords,
        ]}
        path="/reviews/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Client Reviews" },
        ]}
      />

      <style>{`
        .marquee-columns {
          display: flex;
          gap: 1.25rem;
          justify-content: center;
        }

        .marquee-column-viewport {
          flex: 1 1 0;
          min-width: 0;
          height: 560px;
          overflow: hidden;
          position: relative;
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0,
            #000 8%,
            #000 92%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0,
            #000 8%,
            #000 92%,
            transparent 100%
          );
        }

        .marquee-column-track {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          width: 100%;
        }

        .marquee-column-track.scroll-up {
          animation-name: col-scroll-up;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .marquee-column-track.scroll-down {
          animation-name: col-scroll-down;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .marquee-column-viewport:hover .marquee-column-track {
          animation-play-state: paused;
        }

        @keyframes col-scroll-up {
          from { transform: translateY(0); }
          to { transform: translateY(calc(-50% - 0.55rem)); }
        }
        @keyframes col-scroll-down {
          from { transform: translateY(calc(-50% - 0.55rem)); }
          to { transform: translateY(0); }
        }

        .review-card {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .review-card:hover {
          transform: scale(1.02);
          box-shadow: 0 12px 26px rgba(0,0,0,0.12);
        }

        /* Stack columns on smaller screens: 2 then 1 */
        @media (max-width: 900px) {
          .marquee-columns { flex-wrap: wrap; }
          .marquee-column-viewport:nth-child(3) { display: none; }
          .marquee-column-viewport { flex: 1 1 45%; height: 480px; }
        }
        @media (max-width: 560px) {
          .marquee-column-viewport:nth-child(2) { display: none; }
          .marquee-column-viewport { flex: 1 1 100%; height: 520px; }
        }
      `}</style>

      <div className="page__header">
        <h1>Client Reviews</h1>
        <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.4rem" }}>
          Real feedback from our travellers — powered by Google
        </p>
      </div>

      <section className="section__container">
        {summary?.rating && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", marginBottom: "2.5rem" }}>
            <div style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1 }}>
              {summary.rating?.toFixed(1)}
            </div>
            <StarRow rating={summary.rating} />
            <span style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>
              {allReviews.length}+ Google Reviews
            </span>
          </div>
        )}

        {/* Vertical auto-scrolling testimonial columns */}
        <div className="marquee-columns">
          {columns.map((col, ci) => (
            <div className="marquee-column-viewport" key={ci}>
              <div
                className={`marquee-column-track ${directions[ci % directions.length]}`}
                style={{ animationDuration: durations[ci % durations.length] }}
              >
                {col.map((r, i) => <ReviewCard key={`${ci}-a-${i}`} r={r} />)}
                {col.map((r, i) => <ReviewCard key={`${ci}-b-${i}`} r={r} />)}
              </div>
            </div>
          ))}
        </div>

        {/* See on Google CTA */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a
            href={GOOGLE_MAPS_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            id="see-on-google-btn"
          >
            See All Reviews on Google
          </a>
        </div>
      </section>
    </>
  );
}