import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ id, title, author, image, price, rating }) {
  return (
    <div className="card shadow-sm">
      <img
        src={image}
        alt={title}
        className="card-img-top img-fluid"
        style={{ objectFit: 'cover', height: '250px' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{title}</h5>
        <p className="card-text text-muted"><strong>Author:</strong> {author}</p>
        <p className="card-text"><strong>Price:</strong> {price}</p>
        <p className="card-text"><strong>Rating:</strong> {rating}</p>

        {/* View Details Button */}
        <Link to={`/books/${id}`} className="btn btn-primary mt-auto w-100">
          View Details
        </Link>
      </div>
    </div>
  );
}







