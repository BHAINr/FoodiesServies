import React, { useReducer, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth';
import { app, db1, firestore } from '../Firebase/firebase';
import { Link, redirect, useNavigate } from 'react-router-dom';
import './Signup.css';
import cater from "../Images/shef1.png";

import { serverTimestamp } from 'firebase/database';
import { doc, setDoc } from 'firebase/firestore';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    mobileNo: '',
    password: "",
    confirmPassword: "",
    isAdmin: false,
  });

  const signInWithGoogle = () => {
    navigate('/');
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("Sign in successfully");
        console.log(result.data.admin);
      })
      .catch((error) => {
        console.log(error.user);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password, data.name, data.mobileNo);

      const userDocRef = doc(firestore, 'Halwais', res.user.uid);
      await setDoc(userDocRef, {
        ...data,
        timeStamp: serverTimestamp(),
      });
      console.log(data)
      alert("Signed up successfully...");
      navigate('/');

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert("user already exist!");
    }

  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='container190'>
      <div className='row190'>
        <div className='logo190'>
          <img src={cater} alt="dfas" />
          <h2>MGC</h2>
        </div>
        <p id='tagm' className='tagm'>Welcome in Mangalam Caters Family</p>
        <p className='line1'></p>
        <h1 id="tag">Sign Up</h1>
        <label>Name</label>
        <input
          onChange={handleChange}
          type="name"
          value={data.name}
          name='name'
          placeholder="Name"
          required
        />
        <label>Email</label>
        <input
          onChange={handleChange}
          type="email"
          value={data.email}
          name='email'
          placeholder="Email"
          required
        />
        <label>Mobile</label>
        <input
          onChange={handleChange}
          type="number"
          value={data.mobileNo}
          name='mobileNo'
          placeholder="Mobile Number"
          required
        />
        <label>Password</label>
        <input
          onChange={handleChange}
          type="password"
          required
          name='password'
          value={data.password}
          placeholder="Password"
        />

        <label>Confirm Password</label>
        <input
          onChange={handleChange}
          type="password"
          required
          name='confirmPassword'
          value={data.confirmPassword}
          placeholder="Confirm Password"
        />

        <Link to="/" className='button'><button onClick={handleSubmit}>Sign up</button></Link>
        {/*  <p id="an">Another Way to Signup</p> */}
        {/* <button id="bbu" onClick={signInWithGoogle}>Login with Google</button> */}
      </div>
    </div>
  );
};

export default SignUp;
