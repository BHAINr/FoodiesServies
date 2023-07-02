import React from 'react'
import { Link } from 'react-router-dom'

const Pd = (props) => {
    return (
        <div>
            <div className='containercards1'>
                <div className='cardBody'>
                    <div class="cards">

                        <Link className="productCard" to={`/food/view/${props.id}`}>

                            <p>{props.userEmail}</p>
                            <p>{props.userId}</p>
                            <span>{`₹${props.Rate}`}</span><br></br>


                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pd
