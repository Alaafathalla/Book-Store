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
      question: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
    <div>
      <div className="bg-light rounded-5  py-5 mb-4">
        <h2 className="fw-bold px-5">Contact</h2>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center text-md-start mb-5">
          <ContactIcon Icon={SlEnvolope} title="Support" content="example@example.com" />
          <ContactIcon Icon={FaPhoneVolume} title="Phone" content="+123-456-7890" />
          <ContactIcon Icon={FaLocationDot} title="Address" content="123 Main Street, City" />
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <form
              onSubmit={formik.handleSubmit}
              className="p-5 rounded shadow bg-primary text-white"
              style={{height:'700px'}}
            >
              <h3 className="font-bold mb-5" style={{ fontSize: "45px" }}>Get in touch with us</h3>
              <div className="row mb-4">
                <InputField id="name" label="Name" type="text" className='p-2' placeholder="Your Name" formik={formik} />
                <InputField id="email" label="Email" type="email" className='p-2' placeholder="Your Email" formik={formik} />
              </div>
              <div className="row mb-3">
                <InputField id="subject" label="Subject" className='' type="text" placeholder="Subject" formik={formik} />
                <div className="col-md-6">
                  <label htmlFor="department" className="form-label ">Department</label>
                  <select
                    className={`form-select rounded-pill ${formik.errors.department && formik.touched.department ? "is-invalid" : ""}`}
                    id="department"
                    {...formik.getFieldProps("department")}
                  >
                    <option value="">Select Department</option>
                    <option value="sales">Sales</option>
                    <option value="support">Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  {formik.errors.department && formik.touched.department && (
                    <div className="invalid-feedback">{formik.errors.department}</div>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="question" className="form-label p-2">Your Question</label>
                <textarea
                  className={`form-control rounded ${formik.errors.question && formik.touched.question ? "is-invalid" : ""}`}
                  id="question"
                  rows="4"
                  placeholder="Type your question here"
                  {...formik.getFieldProps("question")}
                ></textarea>
                {formik.errors.question && formik.touched.question && (
                  <div className="invalid-feedback">{formik.errors.question}</div>
                )}
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-light text-primary rounded-pill py-2 my-5">Ask</button>
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <div className="map-container rounded-3 my-5 shadow overflow-hidden" style={{ height: "600px" }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9830902258896!2d-122.0842493846819!3d37.42206597982647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba3e2711e07f%3A0x75fa8dbf1e725b09!2sGoogleplex!5e0!3m2!1sen!2sus!4v1631204501023!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
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
    <label htmlFor={id} className="form-label">{label}</label>
    <input
      type={type}
      className={`form-control rounded-pill bg-white text-dark ${formik.errors[id] && formik.touched[id] ? "is-invalid" : ""}`}
      id={id}
      placeholder={placeholder}
      {...formik.getFieldProps(id)}
    />
    {formik.errors[id] && formik.touched[id] && (
      <div className="invalid-feedback">{formik.errors[id]}</div>
    )}
  </div>
);




