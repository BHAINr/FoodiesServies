import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../Firebase/firebase";

const db = getDatabase(app);
const SendResDetail = () => {

    const putdata = () => {
        set(ref(db, "users/rahul"), {
            id: 1,
            name: "Rahul"
        });
        alert("data added")
    };
    return (
        <div>
            Firebase react app
            <button onClick={putdata}>put data</button>
        </div>
    )
}

export default SendResDetail
