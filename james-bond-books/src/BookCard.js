import React from 'react';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>{book.author_name ? `Author: ${book.author_name.join(', ')}` : 'Author: Unknown'}</p>
      <p>{book.first_publish_year ? `Published: ${book.first_publish_year}` : 'Published: Unknown'}</p>
    </div>
  );
}

export default BookCard;