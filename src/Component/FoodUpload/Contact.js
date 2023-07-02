import React from 'react'
import contact from '../../Images/shef1.png';
import './Contact.css'
const Contact = () => {
    return (

        <div className="container">
            <div className='div2'>
                <div className="card" >
                    <img src={contact} style={{ width: "60px", height: "60px" }} alt="" />
                    <h3 id="mgc">MGC</h3>
                </div>
                <div className="card" >

                    <div className="card-body" >

                        <p id="pa">
                            Mangalam caters is started by <h3>Mr. Pardeep Agarwal</h3> Since 2001.
                            Currently handled by his brother Mr. Deepak Agarwal, his sons Deependra Agarwal and Kushal Agarwal.
                            Manglam Caterers was established to provide superior culinary experiences for weddings and High Class Caterers and celebrations
                            in the Rajasthan. Our menus are custom designed for your event, instead of being picked from a list of "Services".
                            When planning your wedding, party, business dinner, fundraiser or cocktail reception, make sure you and your guests get treated
                            to exceptional service, dazzling presentation and fantastic food.

                            Manglam Caterers provides catering  services to the entire Rajasthan.We invite you to browse our menus and
                            testimonials
                            and then contact us to find out how Manglam Caterers can begin working on your event to make it great!.</p>

                    </div>
                </div>
                <div className="card" >

                    <div className="card-body" id="paa">
                        <h4>MANGALAM CATERS CONTACT</h4>
                        <p>Dadu dwara ki gali</p>
                        <p>Sambhar Lake, Jaipur, Rajasthan</p>
                        <p>Mobile: 9610446771(Deependra Agarwal),9828616382(Deepak Agarwal),9057616383(Kushal Agarwal)</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact