import React, { useState } from 'react'

import cater from "../Images/shef1.png"
import { useLocation } from 'react-router-dom';
const AdminNavbar = () => {
    const location = useLocation();
    const userData = location.state?.userData;
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='navbar1'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className='vv'>
                    <img src={cater} alt="sdf" style={{ height: "50px", width: "60px" }} />
                    <h1>MGC</h1>
                </div>

                <div class="collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Users</a>
                        </li>


                        <li class="nav-item">
                            <a class="nav-link " href="/">Halwais</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="/">Food Uploads</a>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default AdminNavbar
