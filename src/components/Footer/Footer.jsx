import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="container text-white bg-dark-subtle p-5 rounded-5 mt-5">
      {/* Header */}
      <div
        className="text-white text-center mt-5 mb-3 py-2 rounded-5 mx-auto d-flex align-items-center justify-content-center"
        style={{ width: "200px", background: "#2d2c71" }}
      >
        <p className="mb-0">Get Discounts</p>
      </div>

      {/* Main Content */}
      <div className="text-center">
        <h1 className="fw-bold" style={{ fontSize: "55px" }}>
          Subscribe to newsletter
        </h1>

        {/* Subscription Form */}
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
  );
}

