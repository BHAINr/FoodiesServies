import React from 'react'
import './DeropdownButton.css';
import Logout from './Logout';
const DropdownButton = () => {
    return (
        <div>
            <div class="dropdown">
                <button>Profile</button>
                <div class="dropdown-content">
                    <a href="/user/profile">Profile</a>
                    <a href="/signin"><Logout /></a>
                    
                </div>
            </div>
        </div>
    )
}

export default DropdownButton
