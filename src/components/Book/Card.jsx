import React from 'react';

export default function Card({ title, author, image, price, rating }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"><strong>Author:</strong> {author}</p>
        <p className="card-text"><strong>Price:</strong> {price}</p>
        <p className="card-text"><strong>Rating:</strong> {rating}</p>
      </div>
    </div>
  );
}




