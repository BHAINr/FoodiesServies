import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../Firebase/firebase'; // Assuming you've exported 'firestore' from your Firebase setup file
import './dashboard.css';
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const snapshot = await firestore.collection('Halwais').get();
      const documents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(documents);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await firestore.collection('Halwais').doc(id).delete();
      fetchData();
    } catch (error) {
      console.error('Error deleting data: ', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/add">Add User</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>Photo</th>
            <th>Occupation</th>
            <th>Experience</th>
            <th>Email ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.mobileNo}</td>
              <td>{user.address}</td>
              <td>{user.photo}</td>
              <td>{user.occupation}</td>
              <td>{user.experience}</td>
              <td>{user.emailId}</td>
              <td>
                <Link to={`/edit/${user.id}`}>Edit</Link>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
