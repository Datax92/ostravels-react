import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { facebookPosts } from "../data/facebookPosts";
import { october2026Posts } from "../data/blogPosts.oct2026";

// Facebook section: the official Page plugin header (cover, Follow, Share)
// plus a scrollable feed below it.
//
// The plugin's own "timeline" tab needs Facebook cookies, which browsers block
// on third-party sites, so it renders empty for most visitors. The feed
// therefore embeds individual posts (from data/facebookPosts.js), which load
// for everyone. Until posts are added, it shows our latest updates instead.
const MIN_W = 180;
const MAX_W = 500;
const HEADER_H = 130;

export default function FacebookFeed({ feedHeight = 560 }) {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return undefined;

    const measure = () => setWidth(Math.max(MIN_W, Math.min(MAX_W, Math.round(el.clientWidth))));
    measure();

    let t;
    const ro = new ResizeObserver(() => {
      clearTimeout(t);
      t = setTimeout(measure, 200);
    });
    ro.observe(el);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);

    return () => {
      ro.disconnect();
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  const w = width || MAX_W;
  const headerSrc =
    "https://www.facebook.com/plugins/page.php?" +
    new URLSearchParams({
      href: site.facebook,
      tabs: "",
      width: String(w),
      height: String(HEADER_H),
      small_header: "false",
      adapt_container_width: "true",
      hide_cover: "false",
      show_facepile: "true",
    }).toString();

  const postSrc = (url) =>
    "https://www.facebook.com/plugins/post.php?" +
    new URLSearchParams({ href: url, show_text: "true", width: String(w) }).toString();

  return (
    <div className="fbfeed" ref={boxRef}>
      <div className="fbfeed__header" style={{ height: HEADER_H }}>
        {visible && width && (
          <iframe
            key={`h-${w}`}
            title="O.S Travel & Tours on Facebook"
            src={headerSrc}
            width={w}
            height={HEADER_H}
            style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
            scrolling="no"
            loading="lazy"
            allow="clipboard-write; encrypted-media; web-share"
          ></iframe>
        )}
      </div>

      <div
        className="fbfeed__scroll"
        style={{ maxHeight: feedHeight }}
        tabIndex={0}
        role="region"
        aria-label="Latest posts — scroll to see more"
      >
        {facebookPosts.length > 0 ? (
          visible &&
          width &&
          facebookPosts.map((url) => (
            <iframe
              key={`${url}-${w}`}
              title="Facebook post by O.S Travel & Tours"
              src={postSrc(url)}
              width={w}
              height="560"
              className="fbfeed__post"
              scrolling="no"
              loading="lazy"
              allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          ))
        ) : (
          <ul className="fbfeed__updates">
            {october2026Posts.map((p) => (
              <li key={p.slug}>
                <Link to={`/blog/${p.slug}/`} className="fbfeed__update">
                  <img src={p.image.replace("w=1400", "w=480")} alt="" loading="lazy" decoding="async" width="480" height="270" />
                  <div>
                    <span className="fbfeed__date">
                      <i className="ri-facebook-circle-fill"></i> O.S Travel &amp; Tours ·{" "}
                      {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <strong>{p.title}</strong>
                    <p>{p.excerpt}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="fbfeed__link">
        <i className="ri-facebook-fill"></i> See all posts on Facebook — 32K+ followers
      </a>
    </div>
  );
}
