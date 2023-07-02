import React, { createContext, useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from '../../Firebase/firebase';
import { GloblaInfo } from '../../App';
import './Foodregester.css';
//import cater from '../../Images/shef1.png'
// Make context API for darta management 
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);


const FoodRegester = () => {
    const { user } = useContext(GloblaInfo);

    const firestore = getFirestore(app);
    const storage = getStorage(app);
    const [FoodName, setFoodName] = useState("");
    const [Rate, setRate] = useState("");
    const [Description, setDescription] = useState("");
    const [Image, setImage] = useState("");


    var uploadData = async (e) => {
        try {
            e.preventDefault();
            const imageRef = ref(storage, `uploads/images/${Date.now}-${Image.name}`);
            await uploadBytes(imageRef, Image);
            const imageURL = await getDownloadURL(imageRef);

            const res = await addDoc(collection(firestore, "User"), {
                FoodName,
                Rate,
                Description,
                Image: imageURL,
                userId: user.uid,
                userEmail: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL

            })
            console.log(res);
            setFoodName('');
            setRate('');
            setDescription('');
            setImage(null);
            alert("Uploaded Successfully!")
        } catch (error) {
            console.log('Error adding document', error);
            alert("oops not uploaded!")
        }
    }
    return (
        <div className='container mt-5'>

            <div className='container'>
                <div className='row'>

                    <div id="fod"><h2>Food Upload</h2></div>


                    <Form onSubmit={uploadData}>
                        <Form.Group className="mb" >

                            <Form.Control
                                className='mbb'
                                placeholder="Food Name"
                                type='text'
                                onChange={(e) => setFoodName(e.target.value)}
                                value={FoodName}
                            />
                        </Form.Group>
                        <Form.Group className="mb">

                            <Form.Control
                                className='mbb'
                                placeholder="Rate"
                                type='number'
                                onChange={(e) => setRate(e.target.value)}
                                value={Rate}
                            />
                        </Form.Group>
                        <Form.Group className="mb">

                            <Form.Control
                                className='mbb'
                                placeholder="Food Description"
                                type='text'
                                onChange={(e) => setDescription(e.target.value)}
                                value={Description}
                            />
                        </Form.Group>
                        <Form.Group className="mb">

                            <Form.Control
                                className='mbb'
                                placeholder="Image Upload"
                                type='file'
                                onChange={(e) => setImage(e.target.files[0])}
                                accept="image/*"
                            />
                        </Form.Group>

                        <Button className="bu" type='submit'>Upload</Button>
                    </Form>

                </div>
            </div>
        </div>
    )
}

export default FoodRegester
