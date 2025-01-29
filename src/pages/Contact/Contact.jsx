import React from "react";
import { SlEnvolope } from "react-icons/sl";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      department: "",
      question: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      department: Yup.string().required("Department is required"),
      question: Yup.string().required("Please enter your question"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
    <div>
      {/* Header Section */}
      <div className="bg-light rounded-5 text-center py-4 mb-4">
        <h2 className="fw-bold">Contact</h2>
      </div>

      {/* Contact Details */}
      <div className="container">
        <div className="row justify-content-center text-center text-md-start mb-5">
          {/* Contact Icons */}
          <ContactIcon
            Icon={SlEnvolope}
            title="Support"
            content="example@example.com"
          />
          <ContactIcon
            Icon={FaPhoneVolume}
            title="Phone"
            content="+123-456-7890"
          />
          <ContactIcon
            Icon={FaLocationDot}
            title="Address"
            content="123 Main Street, City"
          />
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="container mt-5">
        <div className="row">
          {/* Form Column */}
          <div className="col-md-6">
            <form
              onSubmit={formik.handleSubmit}
              className="p-4 rounded shadow bg-light"
            >
              {/* First Row: Name and Email */}
              <div className="row mb-3">
                <InputField
                  id="name"
                  label="Name"
                  type="text"
                  placeholder="Your Name"
                  formik={formik}
                />
                <InputField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="Your Email"
                  formik={formik}
                />
              </div>

              {/* Second Row: Subject and Department */}
              <div className="row mb-3">
                <InputField
                  id="subject"
                  label="Subject"
                  type="text"
                  placeholder="Subject"
                  formik={formik}
                />
                <div className="col-md-6">
                  <label htmlFor="department" className="form-label">
                    Department
                  </label>
                  <select
                    className={`form-select rounded-pill ${
                      formik.errors.department && formik.touched.department
                        ? "is-invalid"
                        : ""
                    }`}
                    id="department"
                    {...formik.getFieldProps("department")}
                  >
                    <option value="">Select Department</option>
                    <option value="sales">Sales</option>
                    <option value="support">Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  {formik.errors.department && formik.touched.department && (
                    <div className="invalid-feedback">
                      {formik.errors.department}
                    </div>
                  )}
                </div>
              </div>

              {/* Third Row: Your Question */}
              <div className="mb-3">
                <label htmlFor="question" className="form-label">
                  Your Question
                </label>
                <textarea
                  className={`form-control rounded ${
                    formik.errors.question && formik.touched.question
                      ? "is-invalid"
                      : ""
                  }`}
                  id="question"
                  rows="4"
                  placeholder="Type your question here"
                  {...formik.getFieldProps("question")}
                ></textarea>
                {formik.errors.question && formik.touched.question && (
                  <div className="invalid-feedback">{formik.errors.question}</div>
                )}
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-primary rounded-pill">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Map Column */}
          <div className="col-md-6">
            <div className="map-container rounded-3 shadow">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9830902258896!2d-122.0842493846819!3d37.42206597982647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba3e2711e07f%3A0x75fa8dbf1e725b09!2sGoogleplex!5e0!3m2!1sen!2sus!4v1631204501023!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactIcon = ({ Icon, title, content }) => (
  <div className="col-12 col-md-4 d-flex align-items-center gap-3 mt-4">
    <div className="bg-light rounded-circle p-3 d-flex justify-content-center align-items-center">
      <Icon size={30} className="text-primary" />
    </div>
    <div>
      <h3 className="fw-bold mb-1">{title}</h3>
      <p className="mb-0">{content}</p>
    </div>
  </div>
);

const InputField = ({ id, label, type, placeholder, formik }) => (
  <div className="col-md-6">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      type={type}
      className={`form-control rounded-pill ${
        formik.errors[id] && formik.touched[id] ? "is-invalid" : ""
      }`}
      id={id}
      placeholder={placeholder}
      {...formik.getFieldProps(id)}
    />
    {formik.errors[id] && formik.touched[id] && (
      <div className="invalid-feedback">{formik.errors[id]}</div>
    )}
  </div>
);



