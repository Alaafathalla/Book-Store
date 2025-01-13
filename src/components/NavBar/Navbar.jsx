import React from 'react';
// import logo from '../assets/logo-book-shop.png';
export default function Navbar() {
  return (
    <div className="container-fluid ">
<nav className="navbar navbar-expand-lg">
  <div className="container">
        <a className="navbar-brand" href="#">
      {/* <img src={logo} alt="" srcset="" /> */}
      LOGO
        </a>

    {/* Second Row: Links and Buttons */}
    <div className="row w-100">
      <div className="col-12">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Collection
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <a className="btn btn-outline-primary me-2" href="#">
              Login
            </a>
            <a className="btn btn-primary" href="#">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

    </div>
  );
}


