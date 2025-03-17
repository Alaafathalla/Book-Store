import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Register() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Form Data:', values);

    },
  });


  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div className="w-25 p-5 border rounded shadow">
        <h3 className="text-center mb-4">Create an Account</h3>

        <form onSubmit={formik.handleSubmit}>
          {/* Username Input */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className={`form-control rounded-pill ${formik.touched.username && formik.errors.username ? 'is-invalid' : ''}`}
              id="username"
              placeholder="Enter your username"
              {...formik.getFieldProps('username')}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="invalid-feedback">{formik.errors.username}</div>
            ) : null}
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className={`form-control rounded-pill ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
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
              className={`form-control rounded-pill ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
              id="password"
              placeholder="Enter your password"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="invalid-feedback">{formik.errors.password}</div>
            ) : null}
          </div>

          {/* Register Button */}
          <div className="d-grid">
            <button type="submit" style={{background:'#4784d4'}} className="btn rounded-pill">Sign Up</button>
          </div>
        </form>

        {/* Already Registered Link */}
        <p className="text-center py-3">
          <a href="login">Already registered? Sign in</a>
        </p>
      </div>
    </div>
  );
}



