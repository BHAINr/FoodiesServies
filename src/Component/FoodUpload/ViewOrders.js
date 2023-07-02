import React, { useEffect, useState } from 'react'
import { useFirebase } from '../Context/context'
import OrderCard from './OrderCard';
const ViewOrders = (props) => {
  const [order, setOrder] = useState();
  const firebase = useFirebase();
  //const [data, setData] = useState();

  /*
  useEffect(() => {
    firebase.listAllUser().then((data) => console.log(setData(data.docs.map((docc) => docc.data()))));
  }, [firebase])
  */
  useEffect(() => {

    firebase.listAllOrders().then((order) => console.log(setOrder(order.docs.map((doc) => doc.data()))));
  }, [firebase]);

  //console.log(order);



  return (
    <div className='container3'>
      {order && order.map((item) => (
        <OrderCard key={item.id} id={item.id} {...item} />
      ))}

    </div>
  )
}

export default ViewOrders
