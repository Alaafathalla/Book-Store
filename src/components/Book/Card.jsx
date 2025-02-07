import React from 'react';
import book from '../../assests/book1.png';

export default function BookCard() {
  return (
    <div>
      <div className="p-2 bg-white shadow-sm  rounded">
        <img src={book} alt="" className="w-100 rounded" />
        <hr className="my-3" />
        <h3 className="p-3 fw-bold text-dark">name</h3>
        <div className="d-flex px-3 justify-content-between text-muted">
          <p>******</p>
          <p className="fw-semibold">$66</p>
        </div>
      </div>
      <div
                  className="bg-info text-white text-center w-50 py-2 rounded-5 mx-auto d-flex align-items-center justify-content-center"
                >
                  <p className="mb-0">Add to cart</p>
                </div>
    </div>
  );
}


