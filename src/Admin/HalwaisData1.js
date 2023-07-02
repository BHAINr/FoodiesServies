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

const HalwaisData = () => {
  const [halwaisData, setHalwaisData] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editHalwais, setEditHalwais] = useState({
    name: '',
    position: '',
    availability: "false",
    experience: '',
    mobileNo: '',
    address: '',
    age: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const firestore = getFirestore(app);
      const halwaisCollection = collection(firestore, 'registrations'); // Replace 'registrations' with the actual collection name in Firestore

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
      name: '',
      position: '',
      availability: 'false',
      experience: '',
      mobileNo: '',
      address: '',
      age: ''
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const firestore = getFirestore(app);
    const registrationsRef = collection(firestore, 'registrations');
    const { id, name, position, availability, experience, mobileNo, age } = editHalwais;

    await updateDoc(doc(registrationsRef, id), {
      name,
      position,
      availability,
      experience,
      mobileNo,
      age
    });

    setHalwaisData((prevData) =>
      prevData.map((halwais) => (halwais.id === id ? { ...halwais, name, position, availability, experience, mobileNo, age } : halwais))
    );

    const auth = getAuth(app);
    const user = auth.currentUser;
    if (user && user.email === editHalwais.email) {
      // Update user details if needed
      const userRef = doc(firestore, 'users', user.uid);
      await updateDoc(userRef, {
        name,
        position,
        availability,
        experience,
        mobileNo,
        age
      });
    }

    handleEditModalClose();
  };

  return (
    <div className="table-container">
      <h2>Halwais Data</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Position</th>
            <th>Availability</th>
            <th>Experience</th>
            <th>Mobile no</th>
            <th>Address</th>
            <th>Age</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {halwaisData.map((halwais) => (
            <tr key={halwais.id}>
              <td>
                <img id="img" src={halwais.photo} style={{ width: "4vmax", height: "4vmax" }} alt="Halwais" />
              </td>
              <td>{halwais.name}</td>
              <td>{halwais.position}</td>
              <td>{halwais.availability}</td>
              <td>{halwais.experience}</td>
              <td>{halwais.mobileNo}</td>
              <td>{halwais.age}</td>
              <td>{halwais.address}</td>
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
              <label>Name</label>
              <input
                type="text"
                value={editHalwais.name}
                onChange={(e) => setEditHalwais({ ...editHalwais, name: e.target.value })}
                required
              />
              <label>Position</label>
              <input
                type="text"
                value={editHalwais.position}
                onChange={(e) => setEditHalwais({ ...editHalwais, position: e.target.value })}
                required
              />
              <label>Availability</label>
              <input
                type="availability"
                value={editHalwais.availability}
                onChange={(e) => setEditHalwais({ ...editHalwais, availability: e.target.value })}
              />
              <label>Experience</label>
              <input
                type="number"
                value={editHalwais.experience}
                onChange={(e) => setEditHalwais({ ...editHalwais, experience: e.target.value })}
              />
              <label>ModileNo</label>
              <input
                type="number"
                value={editHalwais.mobileNo}
                onChange={(e) => setEditHalwais({ ...editHalwais, mobileNo: e.target.value })}
              />
              <label>Address</label>
              <input
                type="text"
                value={editHalwais.address}
                onChange={(e) => setEditHalwais({ ...editHalwais, address: e.target.value })}
              />
              <label>Age</label>
              <input
                type="text"
                value={editHalwais.age}
                onChange={(e) => setEditHalwais({ ...editHalwais, age: e.target.value })}
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

export default HalwaisData;
