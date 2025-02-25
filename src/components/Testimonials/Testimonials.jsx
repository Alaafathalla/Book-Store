import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    text: `"Success is not final; failure is not fatal: It is the courage to continue that counts. Always be the one you want to be"`,
    name: "John Carter",
    role: "Businessman",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: `"Successful people do what unsuccessful people are not willing to do. Don't wish it were easier"`,
    name: "Lisa Martines",
    role: "Housewife",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: `"I owe my success to having listened respectfully to the very best advice, and then going away"`,
    name: "Mike Nelson",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials">
      {testimonials.map((item, index) => (
        <div className="testimonial-card mx-4 p-3" key={index}>
          <p className="testimonial-text">{item.text}</p>
          <div className="testimonial-footer">
            <img src={item.image} alt={item.name} className="testimonial-img" />
            <div>
              <h4 className="testimonial-name">{item.name}</h4>
              <p className="testimonial-role">{item.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
