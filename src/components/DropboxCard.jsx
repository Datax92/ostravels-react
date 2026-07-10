// external-link card used on Home "Authorized Visa Drop Boxes" section
export default function DropboxCard({ country, img, flag, accent, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="dropbox-card"
      style={{ "--accent": accent }}
    >
      <div
        className="dropbox-card__bg"
        role="img"
        aria-label={`Best ${country} authorized visa drop box agent — O.S Travel & Tours Islamabad`}
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="dropbox-card__overlay" />

      <div className="dropbox-card__content">
        <h3 className="dropbox-card__title">
          {country}
        <img
          src={flag}
          alt={`${country} flag — Best ${country} visa drop box agent Islamabad`}
          className="dropbox-card__flag"
          loading="lazy"
          decoding="async"
          width="28"
          height="28"
        />
        </h3>
        <p className="dropbox-card__stats">Best Authorized Drop Box Agent</p>

        <div className="dropbox-card__btn">
          <span>Visit Website</span>
          <i className="ri-arrow-right-line dropbox-card__arrow-icon"></i>
        </div>
      </div>
    </a>
  );
}
