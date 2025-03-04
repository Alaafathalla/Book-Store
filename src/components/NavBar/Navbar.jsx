import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/logo.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-gray">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand px-1" to="/">
            <img src={logo} alt="Logo" />
          </Link>

          {/* Toggler Button for Small Screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/books">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                 About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                Blog
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Collection
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/collection/action">Action</Link></li>
                  <li><Link className="dropdown-item" to="/collection/fantasy">Fantasy</Link></li>
                  <li><Link className="dropdown-item" to="/collection/mystery">Mystery</Link></li>
                  <li><Link className="dropdown-item" to="/collection/sci-fi">Sci-Fi</Link></li>
                  <li><Link className="dropdown-item" to="/collection/romance">Romance</Link></li>
                </ul>
              </li> */}
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/collection/action">Action</Link></li>
                  <li><Link className="dropdown-item" to="/collection/fantasy">Fantasy</Link></li>
                  <li><Link className="dropdown-item" to="/collection/mystery">Mystery</Link></li>
                  <li><Link className="dropdown-item" to="/collection/sci-fi">Sci-Fi</Link></li>
                  <li><Link className="dropdown-item" to="/collection/romance">Romance</Link></li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link className="btn btn-outline-primary me-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-primary" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}




