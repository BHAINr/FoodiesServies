import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card2.css';
const Card2 = (props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const currentDate = new Date();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="containercards1">

            <div className={`cardBody ${isDropdownOpen ? 'open' : ''}`}>
                <button className="dropdown-button" onClick={toggleDropdown}>
                    Date: {currentDate.toDateString()}
                </button>
                {isDropdownOpen && (
                    <div className="cards">
                        <Link className="productCard" to={`/food/view/${props.id}`}>
                            <div>
                                <h2>Detail</h2>
                                <p>Name: {props.name}</p>
                                <p>Mobile: {props.mobileNo}</p>
                                <p>Date: {currentDate.toDateString()}</p>
                            </div>

                        </Link>
                        <Link className="productCard" >
                            <div>
                                <h2>Utensils</h2>
                                <ul>
                                    <li>Plates: {props.plates ? 'True' : 'False'}</li>
                                    <li>Bowls: {props.bowls ? 'True' : 'False'}</li>
                                    <li>Spoons: {props.spoons ? 'True' : 'False'}</li>
                                    <li>Steel Plates: {props.steelPlates ? 'True' : 'False'}</li>
                                    <li>Dustbin: {props.dustbin ? 'True' : 'False'}</li>
                                    <li>Tandoor: {props.tandoor ? 'True' : 'False'}</li>
                                </ul>
                            </div>
                        </Link>
                        <Link className="productCard" to={`/food/view/${props.id}`}>
                            <div>
                                <h2>Disposal</h2>
                                <ul>
                                    <li>Disposal: {props.disposal ? 'True' : 'False'}</li>
                                    <li>Silver Foil: {props.silverfoil ? 'True' : 'False'}</li>
                                    <li>Pani Role: {props.panirole ? 'True' : 'False'}</li>
                                </ul>
                            </div>
                        </Link>
                        <Link className="productCard" to={`/food/view/${props.id}`}>
                            <div>
                                <h2>Machines</h2>
                                <ul>
                                    <li>Goal Machine: {props.golaMachine ? 'True' : 'False'}</li>
                                    <li>Pisai Machine: {props.pisaiMachine ? 'True' : 'False'}</li>
                                    <li>Coffee Machine: {props.cofeeMachine ? 'True' : 'False'}</li>
                                    <li>Roti Maker: {props.rotiMaker ? 'True' : 'False'}</li>
                                    <li>Oven: {props.oven ? 'True' : 'False'}</li>
                                    <li>Freezer: {props.frize ? 'True' : 'False'}</li>
                                    <li>Boiler: {props.boiler ? 'True' : 'False'}</li>
                                </ul>
                            </div>
                        </Link>
                        <Link className="productCard" to={`/food/view/${props.id}`}>
                            <div>
                                <h2>Crockery</h2>
                                <ul>
                                    <li>Crockery: {props.crockery ? 'True' : 'False'}</li>
                                </ul>
                            </div>
                        </Link>
                        <Link className="productCard" to={`/food/view/${props.id}`}>
                            <div>
                                <h2>Counters</h2>
                                <ul>
                                    <li>Counters: {props.counters ? 'True' : 'False'}</li>
                                </ul>
                            </div>
                        </Link>
                        <Link className="productCard" to={`/food/view/${props.id}`}>
                            <div>
                                <h2>Tools</h2>
                                <ul>
                                    <li>Tools: {props.tools ? 'True' : 'False'}</li>
                                    <li>Palta: {props.palta ? 'True' : 'False'}</li>
                                    <li>Kadhi: {props.kadhi ? 'True' : 'False'}</li>
                                    <li>Bhatti: {props.bhatti ? 'True' : 'False'}</li>
                                </ul>
                            </div>
                        </Link>
                        <Link className="productCard" to={`/food/view/${props.id}`}>
                            <div>
                                <h2>Radhi Kapdhas</h2>
                                <ul>
                                    <li>Radhi Kapdha: {props.radhiKapdha ? 'True' : 'False'}</li>
                                </ul>
                            </div>
                        </Link>
                        <Link className="productCard" to={`/food/view/${props.id}`}>
                            <div>
                                <h2>Many Mores</h2>
                                <ul>
                                    <li>Table: {props.table ? 'True' : 'False'}</li>
                                    <li>Satens: {props.satens ? 'True' : 'False'}</li>
                                    <li>Pins: {props.pins ? 'True' : 'False'}</li>
                                </ul>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>

    );
}

export default Card2;
