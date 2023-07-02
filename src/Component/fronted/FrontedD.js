import React, { Fragment } from 'react'
import buffet from "../../Images/buffet.jpeg";
import cake from "../../Images/cake.jpeg";
import eng from "../../Images/engagement-catering-services.jpg";
import event from "../../Images/event2.jpg";
import kitty from "../../Images/kitty.jpg";
import marraige from "../../Images/marriage.jpg";
import school from "../../Images/school.jpeg";
import many from "../../Images/many.jpeg";
import './FrontedD.css'
import { Link } from 'react-router-dom';

const FrontedD = () => {
    return (
        <Fragment>
            <div className="container10">
                <div className='div11'>
                    <Link to='/relevent-pics'>
                        <div className="cards"  >

                            <img className="card-img-top" src={marraige} alt="Card"  />
                            <div className="card-body">
                                <h4 className="card-title">Marriage_catering</h4>
                                <p className="card-text">mob:9610446771</p>

                            </div>

                        </div>
                    </Link>
                    <Link to='/relevent-pics'>
                        <div className="cards" >
                            <img src={event} alt="New York" className="d-block w-100"   />
                            <div className="card-body">

                                <h4 className="card-title">Event_catering</h4>
                                <p className="card-text">mob:9610446771</p>

                            </div>
                        </div>
                    </Link>
                    <Link to='/relevent-pics'>
                        <div className=" cards" >
                            <img className="card-img-top" src={eng} alt="Card"   />
                            <div className="card-body">
                                <h4 className="card-title">Engagement_catering</h4>
                                <p className="card-text">mob:9610446771</p>

                            </div>
                        </div>
                    </Link>
                </div>

                <div className='div11'>
                    <Link to='/relevent-pics'>
                        <div className="cards" >
                            <img className="card-img-top" src={buffet} alt="Card"   />
                            <div className="card-body">
                                <h4 className="card-title">Buffet_catering</h4>
                                <p className="card-text">mob:9610446771</p>

                            </div>
                        </div>
                    </Link>
                    <Link to='/relevent-pics'>
                        <div className="cards" >
                            <img className="card-img-top" src={school} alt="Card"   />
                            <div className="card-body">
                                <h4 className="card-title">School_College_catering</h4>
                                <p className="card-text">mob:9610446771</p>

                            </div>
                        </div>
                    </Link>
                    <Link to='/relevent-pics'>
                        <div className="cards" >
                            <img className="card-img-top" src={kitty} alt="Card"  />
                            <div className="card-body">
                                <h4 className="card-title">Kitty_Party_catering</h4>
                                <p className="card-text">mob:9610446771</p>
                            </div>
                        </div>
                    </Link>

                </div>
                <div className='div11'>
                    <Link to='/relevent-pics'>
                        <div className="cards" >
                            <img className="card-img-top" src={cake} alt="Card "  />
                            <div className="card-body">
                                <h4 className="card-title">Birthday_Party_catering</h4>
                                <p className="card-text">mob:9610446771</p>

                            </div>
                        </div>
                    </Link>
                    <Link to='/relevent-pics'>
                        <div className="cards" >
                            <img className="card-img-top" src={many} alt="Card "  />
                            <div className="card-body">
                                <h4 className="card-title">And_Many_More_catering</h4>
                                <p className="card-text">mob:9610446771</p>

                            </div>
                        </div>
                    </Link>
                </div>


            </div>

        </Fragment>
    )
}

export default FrontedD
