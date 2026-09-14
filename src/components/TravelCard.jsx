import { Link } from "react-router-dom";

// visa card used on Home "Visa Services" section
export default function TravelCard({ slug, name, location, overview, price, pricePeriod, img }) {
  return (
    <Link to={`/visa/${slug}/`} className="travel__card">
      {/* NEW */}
      <img
        src={img}
        alt={`Best ${name} visa services for Pakistani citizens in Islamabad — apply ${name} visa online with O.S Travel & Tours`}
        className="travel__card-img"
        loading="lazy"
        decoding="async"
        width="480"
        height="360"
      />
      <div className="travel__card-overlay" />
      <div className="travel__card-content">
        <div className="travel__card-top"></div>
        <div className="travel__card-mid">
          <h3>{name}</h3>
          <p className="travel__card-location">{location}</p>
          <h5>OVERVIEW</h5>
          <p className="travel__card-overview">{overview}</p>
        </div>
        <div className="travel__card-bottom">
          <span className="travel__card-price">
            {price.toLocaleString()} <small>{pricePeriod}</small>
          </span>
          <span className="travel__card-btn">Book Now <i className="ri-arrow-right-line"></i></span>
        </div>
      </div>
    </Link>
  );
}
