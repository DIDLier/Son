import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-dark text-white min-vh-100 d-flex align-items-center justify-content-center text-center">
      <div>
        <h1 className="display-1 fw-bold text-warning">404</h1>
        <h2 className="fw-bold mb-3">Page Not Found</h2>
        <p className="text-white-50 mb-4">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-warning fw-bold px-4 py-2">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}