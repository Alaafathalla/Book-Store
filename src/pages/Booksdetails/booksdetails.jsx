import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h2>{book.volumeInfo.title}</h2>
      <p><strong>Author:</strong> {book.volumeInfo.authors?.join(', ') || 'Unknown'}</p>
      <img src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'} alt={book.volumeInfo.title} />
      <p><strong>Description:</strong> {book.volumeInfo.description || 'No description available'}</p>
    </div>
  );
}


