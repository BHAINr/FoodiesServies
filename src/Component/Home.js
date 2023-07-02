
import Navbar1 from './Navbar'
import FrontedD from './fronted/FrontedD'
import './Home.css';
import Email from './Email';
import DropdownButton from './DropdownButton';
import { useLoaderData, useLocation } from 'react-router-dom';
import './Home.css';
const Home  = () => {
 
  const location = useLocation();
  const userData = location.state?.userData ;

  console.log(userData);

  
  return (
    <div className='home'>
      <Navbar1 />
      <DropdownButton />
     
      <FrontedD />
      <Email />
      
    </div>
  )
}

export default  Home
