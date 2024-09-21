import Headers from './components/Headers';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import Sucess from './components/Paymentresult/Sucess';
import Cancel from './components/Paymentresult/Cancel.jsx';
import Maharashtra from './region/Maharashtra';
import SouthIndia from './region/SouthIndia';
import Rajasthan from './region/Rajasthan';
import About from './components/About';

import Bengali from './region/Bengali';
import Punjabi from './region/Punjabi';
import Gujarati from './region/Gujrati';
import ContactUs from './components/Contactus';
import Success from './components/Paymentresult/Sucess';
import Menu from './components/Menu';


function App() {
  return (
    <>
     <Headers/>
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails />}/>
      <Route  path='/success' element={<Success />}/>
      <Route  path='/cancel' element={<Cancel />}/>
      <Route path='/region-maha' element={<Maharashtra/>} />
      <Route path='/region-south' element={<SouthIndia/>}/>
      <Route  path='/region-rajasthan' element={<Rajasthan/>}/>
      <Route path='/region-gujrati' element={<Gujarati/>} />
      <Route path='/region-punjabi' element={<Punjabi/>}/>
      <Route  path='/region-bengali' element={<Bengali/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
     </Routes>
     <Toaster />
    </>
  );
}

export default App;
