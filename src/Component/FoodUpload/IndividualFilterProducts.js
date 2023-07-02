import React from 'react'
import { Link } from 'react-router-dom';
import './Listfodd.css';



const IndividualFilterProducts = (props) => {
    console.log(props);
  return (
   
    <div>
      <div className='containercards1'>
                <div className='cardBody'>
                    <div class="cards">

                        <Link className="productCard" to={`/food/view/${props.id}`}>
                            <div id='img'><img src={props.Image} alt="/sfg" /></div>

                            <p>{props.FoodName}</p>
                            <p>{props.Description}</p>
                            <span>{`₹${props.Rate}`}</span><br></br>


                        </Link>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default IndividualFilterProducts
