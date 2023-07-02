import React, { useEffect, useState } from 'react'
import { useFirebase } from '../Context/context';

const Cart = () => {
  const firebase = useFirebase();
  const [product, setProduct] = useState();
  useEffect(() => {

    firebase.fetchMyUser(firebase.user.uid)?.then((product) => setProduct(product.docs));
  }, [firebase])
  console.log(product);

  <h2>Please logged in For Viewing Orders Details</h2>

  return (
    <div>

    </div>
  )
}

export default Cart
