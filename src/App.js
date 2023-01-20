import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import ContactUs from './Pages/Home/ContactUs';
import Home from './Pages/Home/Home';
import MakeAppointment from './Pages/Home/MakeAppointment';
import Reviews from './Pages/Home/Reviews';
import Login from './Pages/Share/Login';
import Navbar from './Pages/Share/Navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/Appointment' element={<MakeAppointment/>} ></Route>
        <Route path='/reviews' element={<Reviews></Reviews>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>} ></Route>
      </Routes>
    </>
  );
}

export default App; 
