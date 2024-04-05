import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      if (searchQuery.length < 3) {
        return; 
      }

      const response = await axios.get(`https://openlibrary.org/search.json?title=${searchQuery}`);
      setSearchResults(response.data.docs);
      setError(null);
    } catch (error) {
      setError('An error occurred while fetching search results.');
    }
  };

  return (
    <div className="App">
      <h1>Book Search</h1>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search books..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p>{error}</p>}
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((book, index) => (
            <div key={index} className="book-result">
              <h2>{book.title}</h2>
              <p>Published Year: {book.first_publish_year || 'Unknown'}</p>
              <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
              <p>Average Rating: {book.average_rating || 'N/A'}</p>
              <a href={`https://www.amazon.com/s?k=${book.amazon_id}`} target="_blank" rel="noopener noreferrer">Search on Amazon</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;