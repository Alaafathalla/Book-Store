import React from 'react'
import IMG from '../../assests/p7.jpg';
import { FcRight } from "react-icons/fc";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Testimonials from '../../components/Testimonials/Testimonials';
export default function about() {
  const particlesInit = async (engine) => {
    await loadSlim(engine); 
  };
  return (
    <div>
<div className="container">
  <div className="row align-items-center my-4">
    {/* Image Section */}
    <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
      <img src={IMG} className="img-fluid rounded-5" style={{ maxWidth: "540 px", height: "auto" }} alt="Book Shop" />
    </div>

    {/* Text Section */}
    <div className="col-lg-6 col-md-12 text-center text-lg-start">
      <h1>
        About Our <span style={{ color: "blue" }}>Book Shop</span>
      </h1>
      <p className="py-4" style={{ fontSize: "20px", lineHeight: "1.6" }}>
      A company is a separate legal entity and can incur debt, sue and be sued. The company’s shareholders (the owners) can limit their personal liability and are generally not responsible for company debts. A company is a complex business structure and has high set-up and reporting costs. You can form a company as either a private (also known as proprietary) or public entity. A registered company must have at least one director (and a company secretary unless it is a private company)
      </p>

      {/* Bullet Points Section */}
      <div className="row">
        <div className="col-md-6 d-flex flex-column gap-3">
        {["Wide Collection", "Affordable Prices", "Best Authors"].map((item, index) => (
  <div key={index} className="d-flex align-items-center gap-2">
    <div
      style={{
        width: "40px", 
        height: "40px", 
        backgroundColor: "white",
        borderRadius: "50%",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FcRight style={{ fontSize: "24px" }} />
    </div>
    <h5 className="mb-0">{item}</h5>
  </div>
))}

        </div>
        <div className="col-md-6 d-flex flex-column gap-3">
          {["Fast Delivery", "Secure Payments", "Customer Support"].map((item, index) => (
        <div key={index} className="d-flex align-items-center gap-2">
        <div
          style={{
            width: "40px", 
            height: "40px", 
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FcRight style={{ fontSize: "24px" }} />
        </div>
        <h5 className="mb-0">{item}</h5>
      </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Black Section with Particles */}
      <div className="container-fluid p-0 m-0 position-relative">
        <div
          className="w-100 d-flex flex-column justify-content-center align-items-center text-white text-center position-relative"
          style={{ height: "40vh", backgroundColor: "#5d90ca", zIndex: 1 }}
        >
          {/* Particles Inside the Black Section */}
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              fullScreen: { enable: false },
              particles: {
                number: {
                  value: window.innerWidth > 768 ? 100 : 50, 
                  density: { enable: true, area: 800 }
                },
                size: { value: 3 },
                color: { value: "#ffffff" },
                move: {
                  enable: true,
                  speed: 2, 
                  direction: "none",
                  random: true,
                  straight: false,
                  outModes: { default: "out" }
                },
                links: {
                  enable: true,
                  color: "#f4f4f5",
                  distance: 100
                }
              },
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "repulse" }, 
                  onClick: { enable: true, mode: "push" }
                },
                modes: {
                  repulse: { distance: 100 },
                  push: { particles_nb: 4 }
                }
              }
            }}
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ zIndex: 0 }}
          />

          {/* Content Above Particles */}
          <h1 style={{ zIndex: 1 }}>The independent bookshop, traditional values</h1>
          <p style={{ zIndex: 1 }}>
            We Lose Ourselves in Books, We Find Ourselves There, Too
          </p>
        </div>
      </div>
      {/* ======================================== */}
      <Testimonials />
    </div>
  );
}


