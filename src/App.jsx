import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Registration from './components/Registration'
import { useState } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import LoginForm from './components/LoginForm'
import AppointmentBooking from './components/ AppointmentBooking'
import Dashboard from './components/Dashboard'
import Prescription from './components/Prescription'

function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/home' element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/loginform' element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/book-appointment' element={<AppointmentBooking />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Prescription' element={<Prescription
         />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App