import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  // Formik configuration
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log('Form submitted:', values);
      alert(`Logged in with email: ${values.email}`);
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div className="w-25 p-5 border rounded shadow">
        <h3 className="text-center mb-4">Login to website</h3>

        {/* Formik Form */}
        <form onSubmit={formik.handleSubmit}>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className={`form-control rounded-pill ${
                formik.touched.email && formik.errors.email ? 'is-invalid' : ''
              }`}
              id="email"
              placeholder="name@example.com"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className={`form-control rounded-pill ${
                formik.touched.password && formik.errors.password ? 'is-invalid' : ''
              }`}
              id="password"
              placeholder="Enter your password"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="invalid-feedback">{formik.errors.password}</div>
            ) : null}
          </div>

          {/* Login Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary rounded-pill">
              Login
            </button>
          </div>
        </form>

        {/* Register Link */}
        <p className="text-center py-3">
          <a href="register">Not registered? Create an account</a>
        </p>
      </div>
    </div>
  );
}

