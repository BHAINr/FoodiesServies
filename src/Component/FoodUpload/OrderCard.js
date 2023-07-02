import React from 'react'
import { Link } from 'react-router-dom';
const OrderCard = (props) => {
    console.log(props);
    return (
        <div>
            <div className='container'>
                <div className='row cardBody'>
                    <div class="col-md card">

                        <Link className="productCard">
                            <p>{props.userID}</p>
                            <p>{props.FoodName}</p>
                            <p>{props.qty}</p>
                            <p>{props.userEmail}</p>
                            


                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCard
