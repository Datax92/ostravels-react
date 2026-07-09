import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostBySlug, getRelatedPosts } from "../data/blogPosts";
import { site } from "../data/site";
import SEO from "../components/SEO";
import { blogPostKeywords } from "../data/seoKeywords";
import NotFound from "./NotFound";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" });
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function ContentBlock({ block }) {
  switch (block.type) {
    case "h2":
      return <h2 id={slugify(block.text)}>{block.text}</h2>;
    case "h3":
      return <h3 id={slugify(block.text)}>{block.text}</h3>;
    case "list":
      return (
        <ul className="blogpost__list">
          {block.items.map((item, i) => (
            <li key={i}>
              <i className="ri-checkbox-circle-fill"></i> {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote className="blogpost__quote">{block.text}</blockquote>;
    default:
      return <p>{block.text}</p>;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!post) return <NotFound />;

  const related = getRelatedPosts(post, 3);
  const headings = post.content.filter((b) => b.type === "h2");

  // JSON-LD structured data — Article + FAQPage, for rich results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.date,
        author: { "@type": "Organization", name: site.name },
        publisher: { "@type": "Organization", name: site.name },
      },
      {
        "@type": "FAQPage",
        mainEntity: (post.faqs || []).map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={blogPostKeywords(post)}
        image={post.image}
        path={`/blog/${post.slug}/`}
        type="article"
        datePublished={post.date}
        dateModified={post.date}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog/" },
          { name: post.title },
        ]}
      />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      {/* ===== Hero ===== */}
      <div className="country__hero blogpost__hero">
        <img src={post.image} alt={`${post.title} — O.S Travel & Tours`} />
        <div className="country__hero-overlay" />
        <div className="country__hero-content">
          <span className="blog__badge">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/blog/">Blog</Link> / {post.title}
          </p>
        </div>
      </div>

      <div className="country__content">
        <section className="section__container">
          <div className="detail__grid blogpost__grid">
            <article className="detail__main blogpost__main">
              <div className="blogpost__meta">
                <span><i className="ri-user-3-line"></i> {post.author}</span>
                <span><i className="ri-calendar-line"></i> {formatDate(post.date)}</span>
                <span><i className="ri-time-line"></i> {post.readTime}</span>
              </div>

              <p className="blogpost__excerpt">{post.excerpt}</p>

              {post.content.map((block, i) => (
                <ContentBlock block={block} key={i} />
              ))}

              {post.faqs && post.faqs.length > 0 && (
                <div className="blogpost__faqs">
                  <h2>Frequently Asked Questions</h2>
                  {post.faqs.map((f, i) => (
                    <details className="blogpost__faq" key={i}>
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              )}

              <div className="blogpost__tags">
                {post.tags.slice(0, 6).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>

            <aside className="detail__side blogpost__side">
              <h4>On This Page</h4>
              <ul className="blogpost__toc">
                {headings.map((h) => (
                  <li key={h.text}>
                    <a href={`#${slugify(h.text)}`}>{h.text}</a>
                  </li>
                ))}
              </ul>

              <div className="blogpost__side-cta">
                <h4>Need Help With This?</h4>
                <p>Our visa desk can review your documents or handle the full application for you.</p>
                <div className="stat"><span>Phone</span><span>{site.phones[0]}</span></div>
                <div className="stat"><span>Email</span><span>{site.email}</span></div>
                <Link to="/contact-2/" className="btn">Get Free Consultation</Link>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <div className="blogpost__related">
              <h2>Related Articles</h2>
              <div className="blog__grid">
                {related.map((r) => (
                  <Link to={`/blog/${r.slug}/`} className="blog__card" key={r.slug}>
                    <div className="blog__card-imgwrap">
                      <img src={r.image} alt={`${r.title} — O.S Travel & Tours`} loading="lazy" />
                      <span className="blog__card-tag">{r.category}</span>
                    </div>
                    <div className="blog__card-body">
                      <div className="blog__card-meta">
                        <span>{formatDate(r.date)}</span>
                        <span>•</span>
                        <span>{r.readTime}</span>
                      </div>
                      <h3>{r.title}</h3>
                      <p>{r.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
