import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import { useEffect, useState } from 'react';
//import FireStore from './Firebase/FireStore';
import Home from './Component/Home';
//import RealtimeDB from './Firebase/RealtimeDB';
//import Navbar1 from './Component/Navbar';
import FoodRegester from './Component/FoodUpload/FoodRegester';
import { createContext } from 'react';
import MyComponent from './Component/FoodUpload/Listfood';
import FoodDetals from './Component/FoodUpload/FoodDetals';
import { getFirestore } from 'firebase/firestore';
import { app } from './Firebase/firebase';
import { getDocs, getDoc, collection, doc } from 'firebase/firestore';
//import Cart from './Component/FoodUpload/Cart';
import ViewOrders from './Component/FoodUpload/ViewOrders';
//import FrontedD from './Component/fronted/FrontedD';

import './Apps.css';
import Contact from './Component/FoodUpload/Contact';
import Marriage from './Component/Marriage';

import Profile from './Component/Profile/Profile';
import AdminPanel from './Admin/AdminPanel';
import HalwaisData from './Component/Profile/HalwaisData';
import UserData from './Admin/UserData';
import HalwaisData1 from './Admin/HalwaisData1';
import Pics from './Component/fronted/Pics';
import CheckList from './Component/Profile/CheckList';
import ConfermCheckList from './Component/Profile/ConfermCheckList';


const auth = getAuth();
export const GloblaInfo = createContext();
const firestore = getFirestore(app);
function App(props) {
  const [user, setUser] = useState(null);

  const listAllUser = async () => {
    return await getDocs(collection(firestore, "User"));
  };

  const getBookById = async (id) => {
    const docRef = doc(firestore, "User", id);
    const result = await getDoc(docRef);
    return result;
  };
  // Autherization 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    })
  }, [])
  console.log(user);

  if (user === null) {
    return (
      <div>
        <Router>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/relevent-pics' element={<Pics />} />
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path='/signin' element={<SignIn />} />
            <Route path="/" element={<SignIn />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path="/food" element={<MyComponent />} />
            <Route path='/' element={<SignIn />} />
            <Route path='/check/list' element={<SignIn />} />
            <Route path='/conferm/check/list' element={<SignIn />} />
            <Route path='/user/profile' element={<SignIn />} />
            <Route path='/halwais/data' element={<HalwaisData1 />} />
            <Route path='/halwais/upload' element={<SignIn />} />
          </Routes>
        </Router>
      </div>
    )
  }
  return (
    <div>

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/relevent-pics' element={<Pics />} />
          <Route path="/food/orders" element={<ViewOrders />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path="/food" element={<MyComponent />} />
          <Route exact path='/marriage' element={<Marriage />} />
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/halwais/upload' element={<HalwaisData />} />
          <Route path='/' element={<UserData />} />
          <Route path='/' element={<HalwaisData1 />} />
          <Route path='/check/list' element={<CheckList />} />
          <Route path='/conferm/check/list' element={<ConfermCheckList />} />
        </Routes>
      </Router>
      <GloblaInfo.Provider value={{ user, listAllUser, getBookById }}>
        {props.child}
        <Router>
          <Routes>
            <Route exact path="/food/view/:id" element={<FoodDetals />} />
            <Route exact path="/" element={<FoodRegester />} />
            <Route exact path="/food" element={<MyComponent />} />

          </Routes>
        </Router>
      </GloblaInfo.Provider>



    </div>


  );

}

export default App;
