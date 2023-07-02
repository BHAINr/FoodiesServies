import React, { useState } from 'react'
import "./PicNavbar.css";
import cater from "../../Images/shef1.png"
import { useLocation } from 'react-router-dom';
const PicNavbar = () => {
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
                            <a class="nav-link" href="/food">food</a>
                        </li>

                       
                        <li class="nav-item">
                            <a class="nav-link " href="/contact">Contact</a>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button class="dropbtn">Upload
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="dropdown-content">
                                    <a href="/food/upload">Food data</a>
                                    <a href="/halwais/upload">Halwais data</a>
                                    
                                </div>
                            </div>
                        </li>
                        <li>
                        {userData?.isAdmin === true &&
                            <li className="nav-item">
                                <a className="nav-link" href="/admin">Dashboard</a>
                            </li>
                        }
                        </li>
                    </ul>

                    <ul class="navbar-nav ">
                        <li class="nav-item1">
                            <a class="nav-link" href="/signin">SignIn</a>
                        </li>
                        <li class="nav-item1 active">
                            <a class="nav-link" href="/signup">Signup </a>
                        </li>


                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default PicNavbar
