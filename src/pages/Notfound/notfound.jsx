import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Page Not Found  </h2>
      <h5 className="text-muted">Oops! The page you're looking for doesn't exist now ,try in few minutes.</h5>
      <Link to="/" className="btn btn-primary mt-3">Go Home</Link>
    </div>
  );
}

