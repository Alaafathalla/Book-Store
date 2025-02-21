import React from 'react'
import IMG from '../../assests/p7.jpg';
import { FcRight } from "react-icons/fc";
export default function about() {
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

    </div>
  )
}
