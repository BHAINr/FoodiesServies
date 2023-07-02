import React, { useEffect, useState } from 'react';
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import {
  getAuth,
  deleteUser as deleteAuthUser,
  updateEmail,
  updatePassword,
} from 'firebase/auth';
import { app } from '../Firebase/firebase'; // Assuming you have a separate file for initializing Firebase
import './Userdata.css'; // Import the CSS file

const HalwaisComponent = () => {
  const [halwaisData, setHalwaisData] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editHalwais, setEditHalwais] = useState({
    id: '',
    email: '',
    password: '',
    name: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const firestore = getFirestore(app);
      const halwaisCollection = collection(firestore, 'Halwais'); // Replace 'Halwais' with the actual collection name in Firestore

      const querySnapshot = await getDocs(halwaisCollection);
      const fetchedData = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setHalwaisData(fetchedData);
    };

    fetchData();
  }, []);

  const handleDelete = async (id, email) => {
    const firestore = getFirestore(app);
    const halwaisRef = collection(firestore, 'Halwais');
    await deleteDoc(doc(halwaisRef, id));
    setHalwaisData((prevData) => prevData.filter((halwais) => halwais.id !== id));
  
    const auth = getAuth(app);
    const user = auth.currentUser;
    if (user && user.email === email) {
      await deleteAuthUser(user);
    }
  };
  
  const handleEditModalOpen = (halwais) => {
    setEditHalwais(halwais);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setEditHalwais({
      id: '',
      email: '',
      password: '',
      name: '',
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
  
    const firestore = getFirestore(app);
    const halwaisRef = collection(firestore, 'Halwais');
    const { id, email, password, name } = editHalwais;
  
    await updateDoc(doc(halwaisRef, id), {
      email,
      name,
    });
  
    setHalwaisData((prevData) =>
      prevData.map((halwais) => (halwais.id === id ? { ...halwais, email, name } : halwais))
    );
  
    const auth = getAuth(app);
    const user = auth.currentUser;
    if (user && user.email === editHalwais.email) {
      if (password) {
        await updatePassword(user, password);
      }
      if (email !== user.email) {
        await updateEmail(user, email);
      }
    }
  
    handleEditModalClose();
  };
  
  return (
    <div className="table-container">
      <h2>Halwais Data</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {halwaisData.map((halwais) => (
            <tr key={halwais.id}>
              <td>{halwais.email}</td>
              <td>{halwais.password}</td>
              <td>{halwais.name}</td>
              <td>
                <button onClick={() => handleEditModalOpen(halwais)}>Edit</button>
                <button onClick={() => handleDelete(halwais.id, halwais.email)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Halwais Details</h3>
            <form onSubmit={handleEditSubmit}>
              <label>Email</label>
              <input
                type="email"
                value={editHalwais.email}
                onChange={(e) => setEditHalwais({ ...editHalwais, email: e.target.value })}
                required
              />
              <label>Password</label>
              <input
                type="password"
                value={editHalwais.password}
                onChange={(e) => setEditHalwais({ ...editHalwais, password: e.target.value })}
              />
              <label>Name</label>
              <input
                type="text"
                value={editHalwais.name}
                onChange={(e) => setEditHalwais({ ...editHalwais, name: e.target.value })}
                required
              />
              <div className="modal-buttons">
                <button type="submit">Save Changes</button>
                <button onClick={handleEditModalClose}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HalwaisComponent;
