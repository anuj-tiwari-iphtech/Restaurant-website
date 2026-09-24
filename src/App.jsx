import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Menu from './pages/Menu'
import OurStory from './pages/OurStory'
import Location from './pages/Location'
import GiftCard from './pages/GiftCard'
import CheckoutRestaurant from './pages/CheckoutRestaurant'
import CheckoutMenu from './pages/CheckoutMenu'
import Login from './Models/Login'
import ReservationModal from './Models/Reservation'
import './App.css'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showReseveration, setShowReservation] = useState(false)

  const {pathname} = useLocation();

  useEffect(() => {
    window.scroll(0,0);
  },[pathname])

  return (
    <>
    <Navbar 
      onLoginClick={() => setShowLogin(true)} 
      onBookClick={() => setShowReservation(true)}
    />
      {showLogin && (
        <div className='login-overlay' onClick={() => setShowLogin(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <Login onClose={() => setShowLogin(false)}/>
          </div>
        </div>
      )}

      {showReseveration && (
        <ReservationModal onClose={() => setShowReservation(false)}/>
      )}

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/our-story' element={<OurStory/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/gift-card' element={<GiftCard/>}/>
        <Route path='/select-restaurant' element={<CheckoutRestaurant/>}/>
        <Route path='/checkout-menu' element={<CheckoutMenu/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
