import React, { createContext, useContext, useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from '../../Firebase/firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const positions = [
    'Shef',
    'Masalshi',
    'Weater',
    'Thakedar',
    'Helper',
    'chokivali',
    'Vip Water',
    'Service Water',
    'catering vale',
    'Transpotation'
]; 

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const RegistrationForm = () => {
    const firestore = getFirestore(app);
    const storage = getStorage(app);

    const [name, setName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [address, setAddress] = useState('');
    const [position, setPosition] = useState('');
    const [experience, setExperience] = useState('');
    const [photo, setPhoto] = useState(null);
    const [age, setAge] = useState('');
    const [availability, setAvailability] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const imageRef = ref(storage, `uploads/images/${Date.now()}-${photo.name}`);
            await uploadBytes(imageRef, photo);
            const imageURL = await getDownloadURL(imageRef);

            const formData = {
                name,
                mobileNo,
                address,
                photo: imageURL,
                position,
                experience,
                age,
                availability,
            };

            await addDoc(collection(firestore, 'registrations'), formData);

            setName('');
            setMobileNo('');
            setAddress('');
            setPosition('');
            setExperience('');
            setPhoto(null);
            setAge('');
            setAvailability(false);

            alert('Registration submitted successfully!');
        } catch (error) {
            console.error('Error submitting registration:', error);
            alert('An error occurred while submitting the registration.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="container">
                <div className="row">
                    <div id="fod">
                        <h2>Registration Form</h2>
                    </div>

                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb">
                            <Form.Control
                                className="mbb"
                                placeholder="Name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb">
                            <Form.Control
                                className="mbb"
                                placeholder="Mobile No"
                                type="tel"
                                value={mobileNo}
                                onChange={(e) => setMobileNo(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb">
                            <Form.Control
                                className="mbb"
                                placeholder="Address"
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb">
                            <Form.Control
                                className="mbb"
                                as="select"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                required
                            >
                                <option value="" disabled>
                                    Select a Position
                                </option>
                                {positions.map((position, index) => (
                                    <option key={index} value={position}>
                                        {position}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="mb">
                            <Form.Control
                                className="mbb"
                                placeholder="Experience"
                                type="text"
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb">
                            <Form.Control
                                className="mbb"
                                placeholder="Age"
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb">
                            <Form.Control
                                className="mbb"
                                type="file"
                                accept="image/*"
                                onChange={(e) => setPhoto(e.target.files[0])}
                                required
                            />
                        </Form.Group>



                        <Form.Group className="mb">
                            <Form.Check
                                className="mbb"
                                type="checkbox"
                                label="Availability"
                                checked={availability}
                                onChange={(e) => setAvailability(e.target.checked)}
                            />
                        </Form.Group>

                        <Button className="bu" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
