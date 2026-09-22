import { Link } from 'react-router-dom'
import { useState } from 'react'
import img from '../assets/Homepage/navbar.svg'
import './Navbar.css'

export default function Navbar() {
  const [active, setActive] = useState('book')
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false) 
  }

  return (
    <nav className='navbar-section'>
      <div className='navbar-logo'>
        <img src={img} alt='logo' className='navbar-logo-img'/>
        <h1>POKE NOW.</h1>
      </div>

      <button 
        className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-links-container ${isMenuOpen ? 'show' : ''}`}>
        <div className='menu-element'>
          <Link to='/menu' onClick={handleLinkClick}>Menu</Link>
          <Link to='/our-story' onClick={handleLinkClick}>Our Story</Link>
          <Link to='/location' onClick={handleLinkClick}>Location</Link>
          <Link to='/gift-card' onClick={handleLinkClick}>Gift Card</Link>
        </div>

        <div className="button-group">
          <button 
            className={active === 'order' ? 'active' : ''}
            onClick={() => { setActive('order'); handleLinkClick(); }}
          >
            Order Online
          </button>
          <button 
            className={active === 'book' ? 'active' : ''}
            onClick={() => { setActive('book'); handleLinkClick(); }}
          >
            Book a Table
          </button>
        </div>
      </div>
    </nav>
  )
}