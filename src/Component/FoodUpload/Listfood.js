import React, { useEffect, useState } from 'react';

import "./Listfodd.css";

import Card from './Card';
import { useFirebase } from '../Context/context';
import Search from './Search';






const MyComponent = () => {
    const [data, setData] = useState([]);

    const firebase = useFirebase();
    useEffect(() => {
        firebase.listAllUser().then((data) => console.log(setData(data.docs)));

    }, [firebase]);


    return (
        <div>
            <Search />
            {
                /* 
                 <div className='row4'>
                    
                    {data && data.map((item) => (
                        <Card key={item.id} id={item.id} {...item.data()} />
                    ))}
                </div>
                */
            }
        </div>
    );
};

export default MyComponent;
