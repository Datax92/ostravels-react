import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { blogCategories, blogPosts } from "../data/blogPosts";
import { blogIndexKeywords } from "../data/seoKeywords";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" });
}

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const featured = blogPosts[0];

  const filtered = useMemo(() => {
    return blogPosts.slice(1).filter((p) => {
      const inCategory = activeCategory === "All" || p.category === activeCategory;
      const q = query.trim().toLowerCase();
      const inSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return inCategory && inSearch;
    });
  }, [activeCategory, query]);

  return (
    <>
      <SEO
        title="Travel & Visa Blog — Guides, Tips & News | O.S Travel & Tours"
        description="Read expert visa guides, Umrah tips, visa file processing explainers and travel checklists from O.S Travel & Tours — Islamabad's best and top travel agency for Pakistani citizens."
        keywords={blogIndexKeywords}
        image={featured.image}
        path="/blog/"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Travel & Visa Blog" },
        ]}
      />

      {/* ===== Hero / Featured Post ===== */}
      <section className="blog__hero">
        <img src={featured.image} alt={`${featured.title} — O.S Travel & Tours blog`} className="blog__hero-img" />
        <div className="blog__hero-overlay" />
        <div className="blog__hero-content">
          <span className="blog__badge">{featured.category}</span>
          <h1>{featured.title}</h1>
          <p>{featured.excerpt}</p>
          <div className="blog__hero-meta">
            <span><i className="ri-user-3-line"></i> {featured.author}</span>
            <span><i className="ri-calendar-line"></i> {formatDate(featured.date)}</span>
            <span><i className="ri-time-line"></i> {featured.readTime}</span>
          </div>
          <Link to={`/blog/${featured.slug}/`} className="btn blog__hero-btn">
            Read Full Guide <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      {/* ===== Intro + Search ===== */}
      <section className="section__container blog__intro">
        <h2 className="section__header">Travel & Visa Blog</h2>
        <p className="section__description">
          Practical, up-to-date visa guides, Umrah planning tips, visa file processing
          explainers and travel checklists — written by the same team that processes
          your application, for Pakistani travellers heading anywhere in the world.
        </p>

        <div className="blog__toolbar">
          <div className="blog__categories">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`blog__cat-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="blog__search">
            <i className="ri-search-line"></i>
            <input
              type="text"
              placeholder="Search articles, e.g. Schengen, Umrah, Malaysia..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* ===== Post Grid ===== */}
        {filtered.length === 0 ? (
          <p className="blog__empty">No articles found. Try a different keyword or category.</p>
        ) : (
          <div className="blog__grid">
            {filtered.map((post) => (
              <Link to={`/blog/${post.slug}/`} className="blog__card" key={post.slug}>
                <div className="blog__card-imgwrap">
                  <img src={post.image} alt={`${post.title} — O.S Travel & Tours`} loading="lazy" />
                  <span className="blog__card-tag">{post.category}</span>
                </div>
                <div className="blog__card-body">
                  <div className="blog__card-meta">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog__card-author">
                    <i className="ri-user-3-line"></i> {post.author}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* ===== CTA Strip ===== */}
      <section className="blog__cta">
        <div className="blog__cta-inner">
          <div>
            <h3>Can't find what you're looking for?</h3>
            <p>Talk to our visa desk directly — we answer questions on every destination, every day.</p>
          </div>
          <Link to="/contact-2/" className="btn">Contact Our Team <i className="ri-arrow-right-line"></i></Link>
        </div>
      </section>
    </>
  );
}
