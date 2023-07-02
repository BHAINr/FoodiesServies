import React, { useEffect, useState } from 'react';

import { useFirebase } from '../Context/context';
import Card2 from './Card2';
import './ConfermCheckList.css';


const ConfermCheckList = () => {
    const [data, setData] = useState([]);

    const firebase = useFirebase();
    useEffect(() => {
        firebase.checkLIstUser().then((data) => console.log(setData(data.docs)));

    }, [firebase]);


    return (
        <div className='container'>
           
            <div className='row4'>

                {data && data.map((item) => (
                    <div className='cardsssss' key={item.id}>
                        <Card2 key={item.id} id={item.id} {...item.data()} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConfermCheckList;
