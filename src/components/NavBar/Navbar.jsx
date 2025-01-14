import React from 'react';
import logo from '../../assests/logo.png';
export default function Navbar() {
  return (
    <div className="container-fluid ">
<nav className="navbar navbar-expand-lg">
  <div className="container">
        <a className="navbar-brand px-1" href="#">
      <img src={logo} alt="" srcset="" />
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
              <a className="nav-link active" aria-current="page" href="#">
                Books
              </a>
            </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Collection
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Categories
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Pages
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
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


