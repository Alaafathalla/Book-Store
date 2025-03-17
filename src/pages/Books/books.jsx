import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Book/Card';


export default function About() {
  const categories = ['fiction', 'romance', 'drama', 'mystery', 'fantasy', 'horror', 'science'];
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 9;

  useEffect(() => {
    const fetchBooks = async () => {
      const categoryPromises = categories.map(async (category) => {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=subject:${category}`
          );
          return response.data.items || [];
        } catch (error) {
          console.error(`Error fetching books for ${category}:`, error);
          return [];
        }
      });
      
      const results = await Promise.all(categoryPromises);
      const allBooks = results.flat(); // Merge all book arrays into one
      setBooks(allBooks);
    };

    fetchBooks();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(books.length / booksPerPage);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Function to generate pagination numbers with "..."
  const generatePageNumbers = () => {
    const pages = [];
    const maxPageNumbers = 5;

    if (totalPages <= maxPageNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1); // Always show first page

      if (currentPage > 3) {
        pages.push('...');
      }

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      pages.push(totalPages); // Always show last page
    }

    return pages;
  };

  return (
    <div>
      <div className="bg-light rounded-5 py-5 mb-5 text-center">
        <h2 className="fw-bold text-shadow-black">ALL BOOKS</h2>
      </div>

      <div className="container">
        <div className="row">
          {currentBooks.map((book) => {
            const volumeInfo = book.volumeInfo;
            const saleInfo = book.saleInfo;

            return (
              <div key={book.id} className="col-12 col-md-6 col-lg-4 mb-4">
                <Card
  id={book.id} 
  title={volumeInfo.title}
  author={volumeInfo.authors?.join(', ') || 'Unknown Author'}
  image={volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
  price={saleInfo?.listPrice?.amount ? `$${saleInfo.listPrice.amount}` : 'Not for sale'}
  rating={volumeInfo.averageRating ? `${volumeInfo.averageRating} ⭐` : 'No Rating'}
/>

              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-primary mx-1"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              {'<'}
            </button>

            {generatePageNumbers().map((page, index) =>
              page === '...' ? (
                <span key={index} className="mx-2">...</span>
              ) : (
                <button
                  key={index}
                  className={`btn mx-1 ${page === currentPage ? 'btn-primary' : 'btn-outline-primary'} `}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              )
            )}

            <button
              className="btn btn-outline-primary mx-1"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              {'>'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}






