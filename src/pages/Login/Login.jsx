import React from 'react';

export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div className="w-25 p-5 border rounded shadow">
        <h3 className="text-center mb-4">Login to website</h3>

        {/* Email Input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control rounded-pill" id="email" placeholder="name@example.com" />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control rounded-pill" id="password" placeholder="Enter your password" />
        </div>

        {/* Login Button */}
        <div className="d-grid">
          <button className="btn btn-primary rounded-pill">Login</button>
        </div>

        {/* Register Link */}
        <p className="text-center py-3">
          <a href="register">Not registered? Create an account</a>
        </p>
      </div>
    </div>
  );
}

