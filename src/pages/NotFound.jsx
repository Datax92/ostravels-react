import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="not-found">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404/" noindex />
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}
