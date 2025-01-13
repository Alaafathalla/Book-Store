import React from 'react';
import home from '../../assests/layer-slider-model.png';

export default function Home() {
  return (
    <div>
      <div className="container-fluid home">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 p-5">
            <h1>
              Huge collection <br />
              of <span className="text-primary">Best Books</span>
            </h1>
            <p>
              An online book is a resource in book-like form that is only available to read on the Internet. It differs from the common idea of an e-book.
            </p>
            <div className="input-group mb-3">
              <label htmlFor="searchInput" className="visually-hidden">
                Search for books
              </label>
              <input
                id="searchInput"
                type="text"
                className="form-control"
                placeholder="Search for something..."
                aria-label="Search input"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="col-md-6 text-center">
            <img
              src={home}
              alt="A large collection of books"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

