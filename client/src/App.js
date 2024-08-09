import Headers from './components/Headers';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import Sucess from './components/Sucess';
import Cancel from './components/Cancel';
import Maharashtra from './region/Maharashtra';
import SouthIndia from './region/SouthIndia';
import Rajasthan from './region/Rajasthan';
import Punjab from './region/punjabi';
import Bengal from "./region/Bengal"
import Gujarat from "./region/Gujarati"
import About from './components/About';

function App() {
  return (
    <>
     <Headers />
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails />}/>
      <Route  path='/sucess' element={<Sucess />}/>
      <Route  path='/cancel' element={<Cancel />}/>
      <Route path='/region-maha' element={<Maharashtra/>} />
      <Route path='/region-south' element={<SouthIndia/>}/>
      <Route  path='/region-rajasthan' element={<Rajasthan/>}/>
      <Route  path='/region-punjabi' element={<Punjab/>}/>
      <Route  path='/region-bengali' element={<Bengal/>}/>
      <Route  path='/region-gujarati' element={<Gujarat/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
     <Toaster />
    </>
  );
}

export default App;
