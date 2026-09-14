import { useEffect, useRef } from "react";

/**
 * Reveal — CSS-only scroll animation, zero JS animation library.
 * Uses IntersectionObserver + a data attribute to trigger a CSS transition.
 * Drop-in replacement for the framer-motion version.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  amount = 0.2,
  once = true,
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-visible", "true");
          if (once) observer.disconnect();
        } else if (!once) {
          el.removeAttribute("data-visible");
        }
      },
      { threshold: amount }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [amount, once]);

  return (
    <div
      ref={ref}
      className={`reveal reveal--${direction} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function RevealGroup({
  children,
  className = "",
  stagger = 0.12,
  amount = 0.15,
  once = true,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-visible", "true");
          if (once) observer.disconnect();
        } else if (!once) {
          el.removeAttribute("data-visible");
        }
      },
      { threshold: amount }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [amount, once]);

  return (
    <div ref={ref} className={`reveal-group ${className}`} data-stagger={stagger}>
      {children}
    </div>
  );
}

export function RevealItem({ children, direction = "up", className = "" }) {
  return (
    <div className={`reveal-item reveal-item--${direction} ${className}`}>
      {children}
    </div>
  );
}
