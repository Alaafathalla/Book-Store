import React from 'react';
import home from '../../assests/layer-slider-model.png';
import book1 from '../../assests/book1.png';
import book3 from '../../assests/books3.png';
import book2 from '../../assests/books2.png';
import book4 from '../../assests/book4.png';
import book5 from '../../assests/book5.png';
import book from '../../assests/book-12.jpg';
import team1 from '../../assests/team-member-1.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Home.css';
import { rule } from 'postcss';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 2000, // Adjust autoplay speed (2 seconds)
    arrows: true, // Show arrows
    responsive: [
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  

  const cards = [
    { id: 1, title: "Daniel Roosy", content: "The very best. Really good. I wish I would have thought of it first. I couldn't have asked for more than this." ,rule:'Businessman' },
    { id: 2, title: "Sarah Green", content: "The very best. Really good. I wish I would have thought of it first. I couldn't have asked for more than this." ,rule:'Teacher'},
    { id: 3, title: "Stephan More ", content: "The very best. Really good. I wish I would have thought of it first. I couldn't have asked for more than this." ,rule:'Technician'},
    { id: 4, title: "Rose Johnson", content: "The very best. Really good. I wish I would have thought of it first. I couldn't have asked for more than this." ,rule:'Businessman' },
      { id: 5, title: "Stephan More", content: "The very best. Really good. I wish I would have thought of it first. I couldn't have asked for more than this." ,rule:'Doctor' },
  ];
  return (
    <div>
      <div className="container-fluid home pt-5">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 p-5">
            <h1 className='label1' >
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
<div className='px-5'>
<div className="flex justify-center items-center min-h-screen">
    <div
      className="bg-info text-white text-center mt-5 mb-3 py-2 rounded-5 mx-auto d-flex align-items-center justify-content-center"
      style={{ width: "200px" }}
    >
      <p className="mb-0">Categories</p>
    </div>
  </div>
  <h2>
    Xtra <span className="font-black">Book Collection</span>
  </h2>
  <div style={{ padding: "50px" }}>
    <div className="row gy-4 d-flex align-items-stretch">
      {/* First Column */}
      <div className="col-12 col-md-4 d-flex align-items-stretch">
        <div className="bg1 rounded-5 d-flex align-items-center justify-content-center w-100">
          <img src={book1} className="w-75" alt="Book 1" />
        </div>
      </div>

      {/* Second Column */}
      <div className="col-12 col-md-8 d-flex flex-column justify-content-between">
        <div className="row gy-3">
          <div className="col-6 d-flex align-items-stretch">
            <div className="bg2 rounded-5 d-flex align-items-center justify-content-center w-100">
              <img src={book3} className="w-100" alt="Book 3" />
            </div>
          </div>
          <div className="col-6 d-flex align-items-stretch">
            <div className="bg3 rounded-5 d-flex align-items-center justify-content-center w-100">
              <img src={book5} className="w-100" alt="Book 5" />
            </div>
          </div>
        </div>
        <div className="row gy-3 pt-3">
          <div className="col-12 col-md-8 d-flex align-items-stretch">
            <div className="bg4 rounded-5 d-flex align-items-center justify-content-center w-100">
              <img src={book2} className="w-100" alt="Book 2" />
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex align-items-stretch">
            <div className="bg5 rounded-5 d-flex align-items-center justify-content-center w-100">
              <img src={book4} className="w-100" alt="Book 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

      {/* ===================================================================== */}
      <div className='bg-light  pb-5'>
        <div className="container text-center pt-3  ">
          <div className='flex justify-content-center'>
            <div className="bg-info text-white text-center mt-5 mb-3 py-2 rounded-5 mx-auto d-flex align-items-center justify-content-center " style={{ width: "200px" }} >
              <p className="mb-0">Best Seller</p>
            </div>
            <h2>this year's top sellers</h2>
          </div>
          <div>
            <div className="row g-4">
              <div className="col-6 col-md-3">
                <div className="mx-3 bg-white rounded-5">
                  <img src={book} className="w-75" alt="" />
                  <hr />
                  <h4>title</h4>
                  <div className="d-flex justify-content-between px-5">
                    <p>*****</p>
                    <p>25$</p>
                  </div>
                </div>
                <div
                  className="bg-info text-white text-center w-50 py-2 rounded-5 mx-auto d-flex align-items-center justify-content-center"
                >
                  <p className="mb-0">Add to cart</p>
                </div>

              </div>  <div className="col-6 col-md-3">
                <div className="mx-3 bg-white rounded-5">
                  <img src={book} className="w-75" alt="" />
                  <hr />
                  <h4>title</h4>
                  <div className="d-flex justify-content-between px-5">
                    <p>*****</p>
                    <p>25$</p>
                  </div>
                </div>
                <div
                  className="bg-info text-white text-center w-50 py-2 rounded-5 mx-auto d-flex align-items-center justify-content-center"
                >
                  <p className="mb-0">Add to cart</p>
                </div>

              </div>  <div className="col-6 col-md-3">
                <div className="mx-3 bg-white rounded-5">
                  <img src={book} className="w-75" alt="" />
                  <hr />
                  <h4>title</h4>
                  <div className="d-flex justify-content-between px-5">
                    <p>*****</p>
                    <p>25$</p>
                  </div>
                </div>
                <div
                  className="bg-info text-white text-center w-50 py-2 rounded-5 mx-auto d-flex align-items-center justify-content-center"
                >
                  <p className="mb-0">Add to cart</p>
                </div>

              </div>
              <div className="col-6 col-md-3">
                <div className="mx-3 bg-white rounded-5">
                  <img src={book} className="w-75" alt="" />
                  <hr />
                  <h4>title</h4>
                  <div className="d-flex justify-content-between px-5">
                    <p>*****</p>
                    <p>25$</p>
                  </div>
                </div>
                <div
                  className="bg-info text-white text-center w-50 py-2 rounded-5 mx-auto d-flex align-items-center justify-content-center"
                >
                  <p className="mb-0">Add to cart</p>
                </div>

              </div>

            </div>
            <div className="bg-info text-white text-center mt-5  py-2  rounded-5 mx-auto d-flex align-items-center justify-content-center " style={{ width: "200px", marginBottom: "20px" }} >
              <p className="mb-0">View full list</p>
            </div>
          </div>
        </div>
      </div>
      {/* =========================================================================== */}
      <div className="container ">
        <div className="bg-info text-white text-center mt-5 mb-3 py-2  rounded-5 mx-auto d-flex align-items-center justify-content-center " style={{ width: "200px" }} >
          <p className="mb-0">Testimonials</p>
        </div>
        <h1 className='text-center mb-3' style={{ fontWeight: '700', fontSize: '50px' }}>What Customer Say..</h1>

        <div className="slider-container">
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={card.id} className="card-wrapper">
<div className={`card2 bg-white shadow mx-2 p-4 rounded-3 ${index === 0 || index === cards.length - 1 ? "disabled-card" : ""} d-flex flex-column align-items-center text-center`} style={{ maxWidth: '100%' }}>
  <p className="text-muted">{card.content}</p>
  
  <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
    <h4 className="mb-0" style={{ color: '#4784d4', fontSize: '1.2rem' }}>{card.title}</h4>
    <p className="mb-0" style={{ fontSize: '1rem' }}>{card.rule}</p>
  </div>
</div>



              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* ========================================================================== */}
      <div className="container text-white bg-dark-subtle  p-5 rounded-5 mt-5 ">
        <div className="bg-info text-white text-center mt-5 mb-3 py-2 rounded-5 mx-auto d-flex align-items-center justify-content-center " style={{ width: "200px" }} >
          <p className="mb-0">Special offers</p>
        </div>
        <div className='text-center'>
          <h1 className=''>Get %20 off for your first order!</h1>
          <p>An online book is a resource in book-like form that is only available to read on the Internet.It differs from the common idea of an e-book.</p>
          <div className="bg-white text-info text-center mt-5 mb-3 py-2 rounded-5 mx-auto d-flex align-items-center justify-content-center " style={{ width: "200px" }} >
            <p className="mb-0">purechase now</p>
          </div>
        </div>
      </div>

      {/* ============================================================================= */}
      <div className="bg-info text-white text-center mt-5 mb-3 py-2 rounded-5 mx-auto d-flex align-items-center justify-content-center " style={{ width: "200px" }} >
        <p className="mb-0">Authers</p>
      </div>
      <h1 className='text-center mb-3' style={{ fontWeight: '700', fontSize: '50px' }}>Most Popular Authors</h1>
      <div className="container">
      <div className="row g-4">
  <div className="col-6 col-md-3 text-center">
    <div className="mx-3 bg-white p-4 rounded-5">
      <img src={team1} className="w-100 mb-3" style={{ borderRadius: '50%' }} alt="" />
      <h3>Name</h3>
      <p>Title</p>
    </div>
  </div>
  <div className="col-6 col-md-3 text-center">
    <div className="mx-3 bg-white p-4 rounded-5">
      <img src={team1} className="w-100 mb-3" style={{ borderRadius: '50%' }} alt="" />
      <h3>Name</h3>
      <p>Title</p>
    </div>
  </div>
  <div className="col-6 col-md-3 text-center">
    <div className="mx-3 bg-white p-4 rounded-5">
      <img src={team1} className="w-100 mb-3" style={{ borderRadius: '50%' }} alt="" />
      <h3>Name</h3>
      <p>Title</p>
    </div>
  </div>
  <div className="col-6 col-md-3 text-center">
    <div className="mx-3 bg-white p-4 rounded-5">
      <img src={team1} className="w-100 mb-3" style={{ borderRadius: '50%' }} alt="" />
      <h3>Name</h3>
      <p>Title</p>
    </div>
  </div>
</div>

        </div>
      </div>

  );
}

