import React, { createContext, useContext, useState } from 'react';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, StorageErrorCode } from 'firebase/storage';
import { app } from '../../Firebase/firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './CheckList.css';

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const CheckList = () => {
    const firestore = getFirestore(app);

    const [name, setName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [plates, setPlates] = useState(false);
    const [bowls, setBowls] = useState(false);
    const [spoons, setSpoons] = useState(false);
    const [steelPlates, setSteelPlates] = useState(false);
    const [dustbin, setDustbin] = useState(false);
    const [tandoor, setTandoor] = useState(false);
    const [disposal, setDisposal] = useState(false);
    const [silverfoil, setsilverfoil] = useState(false);
    const [panirole, setpanirole] = useState(false);
    const [golaMachine, setgolaMachine] = useState(false);
    const [pisaiMachine, setpisaiMachine] = useState(false);
    const [cofeeMachine, setcofeeMachine] = useState(false);
    const [rotiMaker, setrotiMaker] = useState(false);
    const [oven, setoven] = useState(false);
    const [frize, setfrize] = useState(false);
    const [boiler, setboiler] = useState(false);
    const [crockery, setcrockery] = useState(false);
    const [counters, setcounters] = useState(false);
    const [tools, setTools] = useState(false);
    const [palta, setPalta] = useState(false);
    const [kadhi, setKadhi] = useState(false);
    const [bhatti, setBhatti] = useState(false);
    const [radhiKapdha, setRadhiKapdha] = useState(false);
    const [table, setTable] = useState(false);
    const [satens, setsatens] = useState(false);
    const [pins, setpins] = useState(false);
    const [availability, setAvailability] = useState(false);
    const [date, setDate] = useState(new Date().toISOString()); // Initialize with current date

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = {
                name,
                mobileNo,
                plates,
                bowls,
                spoons,
                dustbin,
                steelPlates,
                tandoor,
                disposal,
                silverfoil,
                panirole,
                golaMachine,
                pisaiMachine,
                oven,
                cofeeMachine,
                frize,
                boiler,
                rotiMaker,
                crockery,
                counters,
                tools,
                palta,
                kadhi,
                bhatti,
                radhiKapdha,
                table,
                satens,
                pins,
                availability,
                date: new Date().getTime(),
                
            };

            await addDoc(collection(firestore, 'ItemList'), formData);
            setMobileNo('');
            setName('');
            setPlates(false);
            setBowls(false);
            setSpoons(false);
            setSteelPlates(false);
            setDustbin(false);
            setTandoor(false);
            setDisposal(false);
            setsilverfoil(false);
            setpanirole(false);
            setgolaMachine(false);
            setpisaiMachine(false);
            setoven(false);
            setcofeeMachine(false);
            setfrize(false);
            setboiler(false);
            setrotiMaker(false);
            setcrockery(false);
            setcounters(false);
            setTools(false);
            setPalta(false);
            setKadhi(false);
            setBhatti(false);
            setRadhiKapdha(false);
            setTable(false);
            setsatens(false);
            setpins(false);

            setAvailability(false);

            alert('Form successfully!');
        } catch (error) {
            console.error('Error submitting Form:', error);
            alert('An error occurred while submitting the Form.');
        }
    };

    return (
        <div className="checkList1">
            <div className="checkList2">
                <div id="item">
                    <h2>Item List</h2>
                </div>
                <div className='fomehade'>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="itemFome">
                            <Form.Control
                                className="itemFome1"
                                placeholder="Name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="itemFome">
                            <Form.Control
                                className="itemFome1"
                                placeholder="Mobile No"
                                type="tel"
                                value={mobileNo}
                                onChange={(e) => setMobileNo(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Form>
                </div>
                <div className="row2">

                    <Form onSubmit={handleFormSubmit}>
                        <h3>utensils</h3>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Plates"
                                type="checkbox"
                                checked={plates}
                                onChange={(e) => setPlates(e.target.checked)}
                            />
                        </Form.Group>

                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Bowls"
                                type="checkbox"
                                checked={bowls}
                                onChange={(e) => setBowls(e.target.checked)}
                            />
                        </Form.Group>

                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Spoons"
                                type="checkbox"
                                checked={spoons}
                                onChange={(e) => setSpoons(e.target.checked)}
                            />
                        </Form.Group>

                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Steel Plates"
                                type="checkbox"
                                checked={steelPlates}
                                onChange={(e) => setSteelPlates(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Dustbins"
                                type="checkbox"
                                checked={dustbin}
                                onChange={(e) => setDustbin(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Tandoor"
                                type="checkbox"
                                checked={tandoor}
                                onChange={(e) => setTandoor(e.target.checked)}
                            />
                        </Form.Group>
                    </Form>
                    <Form onSubmit={handleFormSubmit}>
                        <h3>Disposal</h3>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Silver-Foil"
                                type="checkbox"
                                checked={silverfoil}
                                onChange={(e) => setsilverfoil(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Panni-Role"
                                type="checkbox"
                                checked={panirole}
                                onChange={(e) => setpanirole(e.target.checked)}
                            />
                        </Form.Group>
                    </Form>

                    <Form onSubmit={handleFormSubmit}>
                        <h3>Machines</h3>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Gola-Machine"
                                type="checkbox"
                                checked={golaMachine}
                                onChange={(e) => setgolaMachine(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Pisai-Machine"
                                type="checkbox"
                                checked={pisaiMachine}
                                onChange={(e) => setpisaiMachine(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Oven"
                                type="checkbox"
                                checked={oven}
                                onChange={(e) => setoven(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Cofee-Machine"
                                type="checkbox"
                                checked={cofeeMachine}
                                onChange={(e) => setcofeeMachine(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Frize-Machine"
                                type="checkbox"
                                checked={frize}
                                onChange={(e) => setfrize(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Boiler"
                                type="checkbox"
                                checked={boiler}
                                onChange={(e) => setboiler(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Roti-Machine"
                                type="checkbox"
                                checked={rotiMaker}
                                onChange={(e) => setrotiMaker(e.target.checked)}
                            />
                        </Form.Group>
                    </Form>

                    <Form onSubmit={handleFormSubmit}>
                        <h3>Crockery</h3>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Crockery"
                                type="checkbox"
                                checked={crockery}
                                onChange={(e) => setcrockery(e.target.checked)}
                            />
                        </Form.Group>
                    </Form>

                    <Form onSubmit={handleFormSubmit}>
                        <h3>Counters</h3>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Counters"
                                type="checkbox"
                                checked={counters}
                                onChange={(e) => setcounters(e.target.checked)}
                            />
                        </Form.Group>
                    </Form>

                    <Form onSubmit={handleFormSubmit}>
                        <h3>Tools</h3>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Tools"
                                type="checkbox"
                                checked={tools}
                                onChange={(e) => setTools(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Palta"
                                type="checkbox"
                                checked={palta}
                                onChange={(e) => setPalta(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="kadhi"
                                type="checkbox"
                                checked={kadhi}
                                onChange={(e) => setKadhi(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Bhatti"
                                type="checkbox"
                                checked={bhatti}
                                onChange={(e) => setBhatti(e.target.checked)}
                            />
                        </Form.Group>
                    </Form>

                    <Form onSubmit={handleFormSubmit}>
                        <h3>Ruf Cloths</h3>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Radhi-Kapdha"
                                type="checkbox"
                                checked={radhiKapdha}
                                onChange={(e) => setRadhiKapdha(e.target.checked)}
                            />
                        </Form.Group>
                    </Form>
                    <Form onSubmit={handleFormSubmit}>


                        <h3>Many Others</h3>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Tables"
                                type="checkbox"
                                checked={table}
                                onChange={(e) => setTable(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Satens"
                                type="checkbox"
                                checked={satens}
                                onChange={(e) => setsatens(e.target.checked)}
                            />
                        </Form.Group>
                        <Form.Group className="itemFome">
                            <Form.Check
                                className="itemFome1"
                                label="Pins"
                                type="checkbox"
                                checked={pins}
                                onChange={(e) => setpins(e.target.checked)}
                            />
                        </Form.Group>
                        <Button className="itembu" type="submit">
                            Submit
                        </Button>
                    </Form>

                </div>
            </div>
        </div>
    );
};

export default CheckList;
