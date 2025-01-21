import React from 'react';
import home from '../../assests/layer-slider-model.png';
import book1 from '../../assests/book1.png';
import book3 from '../../assests/books3.png';
import book2 from '../../assests/books2.png';
import book4 from '../../assests/book4.png';
import book5 from '../../assests/book5.png';
import book from '../../assests/book-12.jpg';
import './Home.css';
export default function Home() {
  return (
    <div>
      <div className="container-fluid home pt-5">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 p-5">
            <h1>
              Huge collection <br />
              of <span >Best Books</span>
            </h1>
            <p className='py-3 w-75'>
              An online book is a resource in book-like form that is only available to read on the Internet. It differs from the common idea of an e-book.
            </p>
            <div className="input-group mb-3 py-4 rounded-3">
              <label htmlFor="searchInput" className="visually-hidden">
                Search for books
              </label>
              <input
                id="searchInput"
                type="text"
                className="form-control rounded-start-5 p-3"
                placeholder="Search for books..."
                aria-label="Search input"
                aria-describedby="button-addon2"
              />
              <button
                className="btn rounded-end-5 px-4"
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
              className="img-fluid w-75"
            />
          </div>
        </div>
      </div>
      {/* =========================================================== */}
      <div className="container-fluid categories text-center">
        <div className="flex justify-center items-center h-screen">
          <div className="categoriesp rounded-3 bg-gray-200 py-4 px-6">
            <p className="text-center">Categories</p>
          </div>
        </div>
        <h2>Xtra <span className='font-black'>Book Collection</span></h2>
        <div className="row p-16  ">
          <div className="col-md-4">
            <div className="bg1 rounded-5">
              <img src={book1} className="w-75 " alt="" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <div className='bg2 rounded-5'>
                  <img src={book3} className='' alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className='bg3 rounded-5'>
                  <img src={book5} className='' alt="" />
                </div>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-8">
                <div className="bg4 rounded-5">
                  <img src={book2} className='' alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className='bg5 rounded-5'>
                  <img src={book4} className='' alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* ===================================================================== */}
     <div className='bg-light'>
      <div className="container text-center ">
        <div className='flex justify-content-center'>
          <p>Best Sellers</p>
          <h2>this year's top sellers</h2>
        </div>
        <div>
          <div className="row">
            <div className="col-6 col-md-3 bg-white rounded-5    ">
              <img src={book} className='w-75' alt="" />
              <hr />
              <h4>title</h4>
              <div className="d-flex justify-content-between ">
                <p>*****</p>
                <p>25$</p>
              </div>
            </div>
            <div className="col-6 col-md-3 bg-white rounded-5    ">
              <img src={book} className='w-75' alt="" />
              <hr />
              <h4>title</h4>
              <div className="d-flex justify-content-between ">
                <p>*****</p>
                <p>25$</p>
              </div>
            </div>
            <div className="col-6 col-md-3 bg-white rounded-5    ">
              <img src={book} className='w-75' alt="" />
              <hr />
              <h4>title</h4>
              <div className="d-flex justify-content-between ">
                <p>*****</p>
                <p>25$</p>
              </div>
            </div>
            <div className="col-6 col-md-3 bg-white rounded-5    ">
              <img src={book} className='w-75' alt="" />
              <hr />
              <h4>title</h4>
              <div className="d-flex justify-content-between ">
                <p>*****</p>
                <p>25$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

