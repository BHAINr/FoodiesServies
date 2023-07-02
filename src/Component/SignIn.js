import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../Firebase/firebase'; // Updated import
import './SignIn.css';
import cater from "../Images/shef1.png"
import { doc, getDoc } from 'firebase/firestore';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRegistered, setEmailRegistered] = useState(true);

  const handleSubmit = async () => {
    
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const user = userCred.user;
      const userDocRef = doc(firestore, 'Halwais', user.uid); // Updated variable name

      const userDocSnapshot = await getDoc(userDocRef);
      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        navigate('/', { state: { userData: userData } });
        console.log(userData);
        alert("Sign SucessFully...")
      } else {
        alert('Please Signup');
        navigate("/signup");
        setEmailRegistered(false);
      }
      
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert("try again!");
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='logo' id='mgc'>
          <img src={cater} alt="dfas" />
          <h2>MGC</h2>
        </div>
        <p className='tagm1'>Welcome in Mangalam Caters Family</p>
        <p className='line'></p>
        <h2 id='tag1'>Sign In</h2>
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="Email"
          value={email}
          placeholder="Email"
          required
        />

        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          value={password}
          placeholder="Password"
        />

        <button onClick={handleSubmit}>Sign In</button> 
        
      </div>
    </div>
  );
};

export default SignIn;
