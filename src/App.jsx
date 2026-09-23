import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Menu from './pages/Menu'
import OurStory from './pages/OurStory'
import Location from './pages/Location'
import GiftCard from './pages/GiftCard'
import { Route, Routes } from 'react-router-dom'
import CheckoutRestaurant from './pages/CheckoutRestaurant'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/our-story' element={<OurStory/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/gift-card' element={<GiftCard/>}/>
        <Route path='/select-restaurant' element={<CheckoutRestaurant/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
