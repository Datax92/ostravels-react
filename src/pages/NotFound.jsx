import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" noindex />
      
      <style>{`
        .notfound-container {
          min-height: 75vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3.5rem 1.5rem;
          background: linear-gradient(135deg, #f8faff 0%, #edf2f9 100%);
        }

        .notfound-card {
          max-width: 580px;
          width: 100%;
          background: #ffffff;
          border-radius: 20px;
          padding: 3.5rem 2.5rem;
          text-align: center;
          box-shadow: 0 15px 35px rgba(40, 135, 255, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(40, 135, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .notfound-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #F5A623 0%, #2887ff 100%);
        }

        .notfound-icon-wrap {
          width: 90px;
          height: 90px;
          background: rgba(245, 166, 35, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          color: #F5A623;
          font-size: 3rem;
          animation: float-plane 3s ease-in-out infinite;
        }

        @keyframes float-plane {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }

        .notfound-code {
          font-size: 6.5rem;
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(135deg, #2887ff 0%, #1a5bb0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
          letter-spacing: -2px;
        }

        .notfound-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .notfound-text {
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 440px;
          margin-left: auto;
          margin-right: auto;
        }

        .notfound-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
        }

        @media (min-width: 480px) {
          .notfound-actions {
            flex-direction: row;
            gap: 1.25rem;
          }
        }

        .notfound-btn-primary {
          background: #2887ff;
          color: #ffffff;
          padding: 0.85rem 1.75rem;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.25s ease;
          border: 1.5px solid transparent;
          box-shadow: 0 4px 14px rgba(40, 135, 255, 0.3);
        }

        .notfound-btn-primary:hover {
          background: #1a5bb0;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(40, 135, 255, 0.4);
        }

        .notfound-btn-secondary {
          background: #ffffff;
          color: #1e293b;
          padding: 0.85rem 1.75rem;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.25s ease;
          border: 1.5px solid #cbd5e1;
        }

        .notfound-btn-secondary:hover {
          background: #f8fafc;
          border-color: #94a3b8;
          transform: translateY(-2px);
        }

        .notfound-links-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.25rem;
        }

        .notfound-popular {
          border-top: 1px dashed #e2e8f0;
          padding-top: 2rem;
          margin-top: 2.5rem;
        }

        .notfound-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        @media (max-width: 480px) {
          .notfound-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .notfound-grid a:last-child {
            grid-column: span 2;
          }
        }

        .notfound-grid-link {
          padding: 0.75rem;
          border-radius: 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #475569;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .notfound-grid-link i {
          font-size: 1.25rem;
          color: #2887ff;
        }

        .notfound-grid-link:hover {
          background: rgba(40, 135, 255, 0.05);
          border-color: #2887ff;
          color: #2887ff;
        }
      `}</style>

      <div className="notfound-container">
        <div className="notfound-card">
          <div className="notfound-icon-wrap">
            <i className="ri-plane-fill"></i>
          </div>
          
          <div className="notfound-code">404</div>
          <h2 className="notfound-title">Lost in Transit?</h2>
          <p className="notfound-text">
            The page you are looking for has either departed, changed its route, or was never scheduled. Let's get you back on track.
          </p>

          <div className="notfound-actions">
            <Link to="/" className="notfound-btn-primary">
              <i className="ri-home-5-line"></i> Go to Homepage
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="notfound-btn-secondary"
            >
              <i className="ri-arrow-left-line"></i> Go Back
            </button>
          </div>

          <div className="notfound-popular">
            <div className="notfound-links-title">Popular Sections</div>
            <div className="notfound-grid">
              <Link to="/visa" className="notfound-grid-link">
                <i className="ri-passport-line"></i>
                <span>Visa Services</span>
              </Link>
              <Link to="/air-ticketing" className="notfound-grid-link">
                <i className="ri-flight-takeoff-line"></i>
                <span>Air Ticketing</span>
              </Link>
              <Link to="/contact-2" className="notfound-grid-link">
                <i className="ri-mail-line"></i>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
