import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import logo from '../../assests/logo.png';

export default function Footer() {
  return (
    <div className="bg-dark-subtle text-white mt-5">
      <div className="container p-5 rounded-5">
        {/* Subscription Section */}
        <div className="text-white text-center mt-5 mb-3 py-2 rounded-5 mx-auto d-flex align-items-center justify-content-center"
          style={{ width: "200px", background: "#5e83a8" }}>
          <p className="mb-0">Get Discounts</p>
        </div>

        <div className="text-center">
          <h1 className="fw-bold" style={{ fontSize: "55px" }}>
            Subscribe to newsletter
          </h1>
          <div className="mt-4 d-flex justify-content-center">
            <form className="d-flex bg-white p-2 rounded-5" style={{ width: "400px" }}>
              <input
                type="email"
                className="form-control border-0"
                placeholder="Enter your email"
                aria-label="Subscribe"
              />
              <button className="btn btn-primary rounded-5 d-flex align-items-center">
                <FaEnvelope className="me-1" /> Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Content Section */}
      <div className="container p-5 rounded-5">
        <div className="row">
          {/* Column 1: Logo & Description */}
          <div className="col-md-3">
            <img src={logo} alt="Logo" style={{ width: "150px" }} />
            <p className="mt-3">Discover the best books across different genres. Join our community today.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/books" className="text-white text-decoration-none">Books</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="col-md-3">
            <h5 className="fw-bold">Categories</h5>
            <ul className="list-unstyled">
              <li><Link to="/collection/action" className="text-white text-decoration-none">Action</Link></li>
              <li><Link to="/collection/fantasy" className="text-white text-decoration-none">Fantasy</Link></li>
              <li><Link to="/collection/mystery" className="text-white text-decoration-none">Mystery</Link></li>
              <li><Link to="/collection/sci-fi" className="text-white text-decoration-none">Sci-Fi</Link></li>
              <li><Link to="/collection/romance" className="text-white text-decoration-none">Romance</Link></li>
            </ul>
          </div>

          {/* Column 4: Support & Contact */}
          <div className="col-md-3">
            <h5 className="fw-bold">Support</h5>
            <ul className="list-unstyled">
              <li><Link to="/faq" className="text-white text-decoration-none">FAQ</Link></li>
              <li><Link to="/terms" className="text-white text-decoration-none">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/support" className="text-white text-decoration-none">Customer Support</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


