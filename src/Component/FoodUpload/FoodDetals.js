import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFirebase } from '../Context/context';
import "./FoodDetails.css";
const FoodDetals = (props) => {
    const firebase = useFirebase();
    const params = useParams();
    const [data, setData] = useState(null);
    const [quantity, setQuantity] = useState(1);
    // const [url , setUrl] = useState(null);
    //console.log(data);
    const increaseQuantity = () => {
        const quantity = quantity + 1;
        setQuantity(quantity);
    }
    const decreaseQuantity = () => {
        const quantity = quantity - 1;
        if (quantity === 0) {
            return;
        }
        setQuantity(quantity);
    }
    useEffect(() => {
        firebase.getUserById(params.id).then((value) => setData(value.data()));
    })
    /* useEffect(()=>{
         const imageURl = data.imageURL;
         firebase.getImageURL(imageURl).then((url)=>setUrl(url));
     },[])
     */
    const placeOrder = async () => {
        const result = await firebase.placeOrder(params.id, quantity);
        console.log("placed order", result);
    }
    if (data == null) {
        return <h2>Loading...</h2>
    }
    return (
        <div id='container'>
            <h2> Food Details Here</h2>
            <div className='cart'>

                <p>{data.Rate}</p>
                <p>{data.Description}</p>
                
                <div className='detailBlock-3-1'>
                    <div className='detailBlock-3-1-1'>
                        <button onClick={decreaseQuantity}>-</button>
                        <input value={quantity} type="number" onChange={(e) => setQuantity(e.target.value)} />
                        <button onClick={increaseQuantity}>+</button>
                    </div>

                </div>
                <Link to='/view/cart'
                    style={{
                        color: "black"
                        , textDecoration: "none"
                        , border: "2px solid black"
                    }}>Add to cart</Link>
                <Link to='/food/orders'><button onClick={placeOrder} >Orders</button></Link>
            </div>
        </div>
    )
}

export default FoodDetals
