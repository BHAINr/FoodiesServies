import { getAuth } from 'firebase/auth'
import React from 'react'
import { signOut } from 'firebase/auth';
import '../Apps.css'
const Logout = () => {
  const auth = getAuth();
  return (
    <div className='logout1'>

      <button className='logout' onClick={() => signOut(auth)}>Logout</button>

    </div>
  )
}

export default Logout
