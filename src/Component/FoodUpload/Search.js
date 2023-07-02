import { useState, useEffect } from 'react';
import { firestore } from '../../Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import './Search.css'; 

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'User'));
      const data = [];

      querySnapshot.forEach((doc) => {
        const user = doc.data();
        user.searchData = user.FoodName.toLowerCase(); 
        if (user.searchData.includes(searchTerm.toLowerCase())) {
          data.push(user);
        }
      });

      setFilteredData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <div className="container120">
      <input
        type="text"
        placeholder="Mangalam Caters Menu Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input-field"
      />
      <ul className="lists">
        {filteredData.map((user, index) => (
          <li key={index} className="list-item">
            <img src={user.Image} alt="User" />
            <span>{user.FoodName}</span> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
