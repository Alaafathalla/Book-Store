import React from 'react';
import { SlEnvolope } from "react-icons/sl";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-light rounded-5" style={{ width: '100%', height: '20vh' }}>
        <h2 className="p-5">Contact</h2>
      </div>

      {/* Contact Details */}
      <div className="container">
        <div className="row">
          <div className="col-4 text-center">
            <SlEnvolope size={50} color="#007bff" />
            <p className="mt-3">Email us at example@example.com</p>
          </div>
          <div className="col-4 text-center">
            <FaPhoneVolume size={50} color="#007bff" />
            <p className="mt-3">Call us at +123-456-7890</p>
          </div>
          <div className="col-4 text-center">
            <FaLocationDot size={50} color="#007bff" />
            <p className="mt-3">Visit us at 123 Main Street, City</p>
          </div>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="container mt-5">
        <div className="row">
          {/* Form Column */}
          <div className="col-md-6">
            <form>
              {/* First Row: Name and Email */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
              </div>

              {/* Second Row: Subject and Department */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" placeholder="Subject" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="department" className="form-label">Department</label>
                  <select className="form-select" id="department">
                    <option value="">Select Department</option>
                    <option value="sales">Sales</option>
                    <option value="support">Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Third Row: Your Question */}
              <div className="row mb-3">
                <div className="col-12">
                  <label htmlFor="question" className="form-label">Your Question</label>
                  <textarea className="form-control" id="question" rows="4" placeholder="Type your question here"></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Submit</button>
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
                style={{ border: 0, minHeight: '400px' }}
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


