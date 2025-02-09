import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Book/Card';

export default function About() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=react'
        );

        console.log('API Response:', response.data.items); // Debugging

        setBooks(response.data.items || []);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <div className="bg-light rounded-5 py-5 mb-5">
        <h2 className="fw-bold px-5">Shop</h2>
      </div>
      <div className="container">
        <div className="row">
          {books.map((book) => {
            const volumeInfo = book.volumeInfo;
            return (
              <div key={book.id} className="col-4">
                <Card
                  title={volumeInfo.title}
                  author={volumeInfo.authors?.join(', ') || 'Unknown Author'}
                  image={volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
                  price={book.saleInfo?.listPrice?.amount ? `$${book.saleInfo.listPrice.amount}` : 'Not for sale'}
                  rating={volumeInfo.averageRating ? `${volumeInfo.averageRating} ⭐` : 'No Rating'}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


