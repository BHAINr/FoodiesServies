import React, { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { firestore, auth } from '../../Firebase/firebase';
import { getAuth, updatePassword } from 'firebase/auth';
import './Profile.css';
import Navbar1 from '../Navbar';

const Halwais = () => {
  const [userData, setUserData] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [newName, setNewName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const { currentUser } = getAuth();

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        const halwaisCollection = collection(firestore, 'Halwais');

        const querySnapshot = await getDocs(halwaisCollection);
        const fetchedData = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((halwais) => halwais.email === currentUser.email);

        if (fetchedData.length > 0) {
          setUserData(fetchedData[0]);
        }
      }
    };

    fetchData();
  }, [currentUser]);

  const handlePasswordChange = async () => {
    try {
      await updatePassword(auth.currentUser, newPassword);
      alert('Password updated successfully!');
      setNewPassword('');
    } catch (error) {
      console.log(error);
      alert('Failed to update password. Please try again.');
    }
  };

  const handleNameChange = async () => {
    try {
      const halwaisRef = doc(firestore, 'Halwais', userData.id);

      await updateDoc(halwaisRef, { name: newName });
      alert('Name updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.log(error);
      alert('Failed to update name. Please try again.');
    }
  };

  return (
    <div>
      <Navbar1 />
      <div className="profile-container">

        {userData ? (
          <div>
            <h2>Profile</h2>
            <img src={userData.image} />
            <p>Email: {userData.email}</p>
            <p>Name: {userData.name}</p>
            <p>Phone: {userData.mobileNo}</p>
            {isEditing ? (
              <>
                <div>
                  <h4>Change Password</h4>
                  <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button onClick={handlePasswordChange}>Update Password</button>
                </div>
                <div>
                  <h4>Change Name</h4>
                  <input
                    type="text"
                    placeholder="New Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                  <button onClick={handleNameChange}>Update Name</button>
                </div>
              </>
            ) : (
              <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            )}
          </div>
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Halwais;
