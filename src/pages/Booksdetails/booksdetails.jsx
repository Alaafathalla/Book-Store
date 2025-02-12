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

  if (!book) return <h5>Loading...</h5>;

  return (
    <div className="container mt-5">
      <h1 className='py-4 text-center'style={{color:'#4296eb'}}>{book.volumeInfo.title}</h1>
      <h5 className='mt-1'><strong style={{color:'blue'}}>Author:</strong> {book.volumeInfo.authors?.join(', ') || 'Unknown'}</h5>
      <img className='w-25 h-50 my-3 rounded-4' src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'} alt={book.volumeInfo.title} />
      <h5 className='mt-2' style={{lineHeight:'35px'}}><strong style={{color:'blue'}}>Description:</strong> {book.volumeInfo.description || 'No description available'}</h5>
    </div>
  );
}


