import React, { useState } from 'react';
import { app } from '../../Firebase/firebase';
import { getFirestore } from 'firebase/firestore';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
 const firestore  = getFirestore(app);
  const handleSearch = async () => {
    try {
      const searchResults = await firestore.collection('User')
        .where('FoodName', '>=', searchQuery)
        .where('FoodName', '<=', searchQuery + '\uf8ff')
        .get();

      const searchData = searchResults.docs.map((doc) => doc.data());
      setResults(searchData);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {results.length > 0 ? (
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Search;
