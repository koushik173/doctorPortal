import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyHIstory from './Pages/Dashboard/MyHIstory';
import MyReview from './Pages/Dashboard/MyReview';
import ContactUs from './Pages/Home/ContactUs';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Home/Reviews';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Share/Navbar';
function App() {
  return (
    <div className='max-w-7xl lg:mx-auto mx-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>

        <Route path='/Appointment' element={<RequireAuth> <Appointment/> </RequireAuth>} ></Route>
        
        <Route path='/dashboard' element={<RequireAuth> <Dashboard/> </RequireAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHIstory></MyHIstory>}></Route>
          
        </Route>

        <Route path='/reviews' element={<Reviews></Reviews>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signUp' element={<SignUp></SignUp>} ></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>} ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App; 
