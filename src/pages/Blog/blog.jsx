import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import blog1 from '../../assests/p7.jpg';
import blog2 from '../../assests/p8.jpg';
import blog3 from '../../assests/p9.jpg';
import blog4 from '../../assests/p10.jpg';
import '../Blog/blog.css'; 

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "A Place of Silence",
    text: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.",
  },
  {
    id: 2,
    image: blog2,
    title: "Work-Life Balance",
    text: "Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula.",
  },
  {
    id: 3,
    image: blog3,
    title: "The Future of Work",
    text: "Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  },
  {
    id: 4,
    image: blog4,
    title: "Productivity Hacks",
    text: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et.",
  }
];

export default function Blog() {
  return (
    <div className="container mt-4">
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-12 col-md-6 mb-4 ">
            <div className="custom-card mb-3">
              <img src={blog.image} alt={blog.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.text}</p>
                <button className="read-more-btn">
                  <FaRegArrowAltCircleRight className="icon" /> Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


