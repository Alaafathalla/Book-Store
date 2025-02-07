import React from 'react';

export default function Register() {
  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div className="w-25 p-5 border rounded shadow">
        <h3 className="text-center mb-4">Create an Account</h3>

        {/* Username Input */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control rounded-pill" id="username" placeholder="Enter your username" />
        </div>

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

        {/* Register Button */}
        <div className="d-grid">
          <button className="btn btn-primary rounded-pill">Sign Up</button>
        </div>

        {/* Already Registered Link */}
        <p className="text-center py-3">
          <a href="login">Already registered? Sign in</a>
        </p>
      </div>
    </div>
  );
}


