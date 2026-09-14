import { useRef } from "react";
import { Link } from "react-router-dom";

// tilt-on-hover card used on Home "Visa File Processing" section
export default function FileProcCard({ slug, country, img, flag, gradient, accent }) {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 22}deg) rotateX(${-y * 22}deg) scale(1.04) translateY(-10px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
    card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1) translateY(0)";
  };

  return (
    <Link
      ref={cardRef}
      to={`/schengen-visa-file-processing/${slug}/`}
      className="dropbox__card"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ "--accent": accent }}
    >
      <img src={img} alt="" aria-hidden="true" className="dropbox__card-photo" loading="lazy" decoding="async" width="400" height="500" />
      <div className="dropbox__card-tint" style={{ background: gradient }} />
      <div className="dropbox__card-pattern" />
      <div className="dropbox__card-glow" />

      <div className="dropbox__card-top">
        <span className="dropbox__arrow">
          <i className="ri-arrow-right-up-line"></i>
        </span>
      </div>

      <div className="dropbox__card-center">
       <img
          src={flag}
          alt={`${country} flag — Best ${country} visa file processing agent Islamabad`}
          className="dropbox__flag"
          loading="lazy"
          decoding="async"
          width="28"
          height="28"
        />
      </div>

      <div className="dropbox__card-bottom">
        <h3>{country}</h3>
        <p>Best {country} Visa File Processing</p>
        <span className="dropbox__btn">
          Learn More <i className="ri-arrow-right-line"></i>
        </span>
      </div>
    </Link>
  );
}
