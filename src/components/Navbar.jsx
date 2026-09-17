import { Link } from 'react-router-dom'
import { useState } from 'react'
import img from '../assets/Homepage/navbar.svg'
import './Navbar.css'
export default function Navbar() {
    const [active, setActive] = useState('book')
  return (
    <nav className='navbar-section'>
        <div className='navbar-logo'>
            <img src={img} alt='logo' className='navbar-logo-img'/>
            <h1>POKE NOW.</h1>
        </div>

        <div className='menu-element'>
            <Link to='/menu'>Menu</Link>
            <Link to='/our-story'>Our Story</Link>
            <Link to='/location'>Location</Link>
            <Link to='/gift-card'>Gift Card</Link>
        </div>

        <div className="button-group">
            <button 
                className={active === 'order' ? 'active' : ''}
                onClick={() => setActive('order')}
            >
                Order Online
            </button>
            <button 
                className={active === 'book' ? 'active' : ''}
                onClick={() => setActive('book')}
            >
                Book a Table
            </button>
        </div>

    </nav>
  )
}