import React from 'react'
import IMG from '../../assests/p7.jpg';
import { FcRight } from "react-icons/fc";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
export default function about() {
  const particlesInit = async (engine) => {
    await loadSlim(engine); 
  };
  return (
    <div>
<div className="container">
    <div className="row  my-4">
        <div className="col-6 pt-3 ">
            <img src={IMG} className='W-50 h-75 rounded-5' alt="" srcset="" />
        </div>
        <div className="col-6 pt-5 ">
            <h1>About Our <span style={{color:'blue'}}> Book Shop </span> </h1>
            <p className='py-5 ' style={{fontSize:'22px'}}>A company is a separate legal entity and can incur debt, sue and be sued. The company’s shareholders (the owners) can limit their personal liability and are generally not responsible for company debts. A company is a complex business structure and has high set-up and reporting costs. You can form a company as either a private (also known as proprietary) or public entity. A registered company must have at least one director (and a company secretary unless it is a private company)</p>
        <div className="row">
        <div className="col-6 d-flex flex-column gap-3">
          <div className="d-flex align-items-center">
            <FcRight className="me-2 bg-white rounded-5" />
            <h3 className="mb-0">Limited liability</h3>
          </div>
          <div className="d-flex align-items-center">
            <FcRight className="me-2 bg-white  rounded-5" />
            <h3 className="mb-0">Limited liability</h3>
          </div>
          <div className="d-flex align-items-center">
            <FcRight className="me-2 bg-white rounded-5" />
            <h3 className="mb-0">Limited liability</h3>
          </div>
        </div>
        <div className="col-6 d-flex flex-column gap-3">
          <div className="d-flex align-items-center">
            <FcRight className="me-2 bg-white rounded-5" />
            <h3 className="mb-0">Limited liability</h3>
          </div>
          <div className="d-flex align-items-center">
            <FcRight className="me-2 bg-white rounded-5" />
            <h3 className="mb-0">Limited liability</h3>
          </div>
          <div className="d-flex align-items-center">
            <FcRight className="me-2 bg-white rounded-5" />
            <h3 className="mb-0">Limited liability</h3>
          </div>
        </div>
        </div>
        </div>
    </div>
</div>
{/* ============================ */}

{/* <div className="container-fluid p-0 m-0">
  <div
    className="w-100 d-flex flex-column justify-content-center align-items-center text-white text-center"
    style={{ height: '40vh', background: 'blue' }}
  >
    <h1>The independent bookshop, traditional values</h1>
    <p className='py-4'>We Lose Ourselves in Books, We Find Ourselves There, Too</p>
  </div>
</div> */}

<div className="container-fluid p-0 m-0 position-relative">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // Ensures it stays inside div
          particles: {
            number: { value: 100 },
            size: { value: 3 },
            color: { value: "blue" },
            move: { speed: 5 },
            links: { enable: true, color: "#ffffff" },
          },
          background: { color: "blue" },
        }}
        className="position-absolute top-0 start-0 w-100 h-100"
      />

      {/* Centered Text */}
      <div
        className="w-100 d-flex flex-column justify-content-center bg-black align-items-center text-white text-center position-relative"
        style={{ height: "40vh" }}
      >
        <h1>The independent bookshop, traditional values</h1>
        <p>We Lose Ourselves in Books, We Find Ourselves There, Too</p>
      </div>
    </div>

    </div>
  )}
