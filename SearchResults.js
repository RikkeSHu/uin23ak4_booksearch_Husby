import React from 'react';
import BookCard from './BookCard';

function SearchResults({ books }) {
  return (
    <div className="search-results">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}

export default SearchResults;