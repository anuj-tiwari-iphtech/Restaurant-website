import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import img from '../assets/Homepage/navbar.svg'
import profile from '../assets/Homepage/happycustomers/A1.jpg'
import './Navbar.css'

export default function Navbar({ onLoginClick , onBookClick}) {
  const [active, setActive] = useState('book')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [cartCount, setCartCount] = useState(0)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const profileRef = useRef(null)

  useEffect(() => {
    const syncAuth = () => {
      const user = JSON.parse(localStorage.getItem('currentUser'))
      setCurrentUser(user)
      setIsLoggedIn(!!user)
    }

    const syncCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || []
      const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
      setCartCount(count)
    }

    syncAuth()
    syncCart()

    window.addEventListener('authChange', syncAuth)
    window.addEventListener('cartChange', syncCart)

    return () => {
      window.removeEventListener('authChange', syncAuth)
      window.removeEventListener('cartChange', syncCart)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const toggleProfile = () => {
    setIsProfileOpen((prev) => !prev)
  }

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    window.dispatchEvent(new Event('authChange'))
    setIsProfileOpen(false)
    handleLinkClick()
  }

  return (
    <section className='navbar-container'>

    
    <nav className='navbar-section'>
      <Link to='./' className='navbar-logo'>
        <img src={img} alt='logo' className='navbar-logo-img'/>
        <h1>POKE NOW.</h1>
      </Link>

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
        {isLoggedIn && (
          <div className='menu-element'>
            <Link to='/menu' onClick={handleLinkClick}>Menu</Link>
            <Link to='/our-story' onClick={handleLinkClick}>Our Story</Link>
            <Link to='/location' onClick={handleLinkClick}>Location</Link>
            <Link to='/gift-card' onClick={handleLinkClick}>Gift Card</Link>
          </div>
        )}

        <div className="button-group">
          <div className='btn-grp-main'>
              {isLoggedIn ? (
                <button 
                  className={active === 'order' ? 'active' : ''}
                  onClick={() => { setActive('order'); handleLinkClick(); }}
                >
                  Order Online
                </button>
              ) : (
                <button 
                  className={active === 'order' ? 'active' : ''}
                  onClick={() => { setActive('order'); onLoginClick?.(); handleLinkClick(); }}
                >
                  Sign Up / Login
                </button>
              )}

              {isLoggedIn ? (
                <button 
                  className={active === 'book' ? 'active' : ''}
                  onClick={() => { setActive('book'); onBookClick?.(); handleLinkClick(); }}
                >
                  Book a Table
                </button>
              ) : (
                <button 
                  className={active === 'book' ? 'active' : ''}
                  onClick={() => { setActive('book'); handleLinkClick(); }}
                >
                  <FaShoppingCart />
                  {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
                </button>
              )}
          </div>
          

          {isLoggedIn && (
            <div className='profile-wrapper' ref={profileRef}>
              <button
                className='profile-icon-btn'
                onClick={toggleProfile}
                aria-label="Toggle profile menu"
              >
                <img src={profile} alt='Profile' className='profile-img' />
              </button>

              {isProfileOpen && (
                <div className='profile-dropdown'>
                  <p className='profile-name'>{currentUser?.name}</p>
                  <p className='profile-email'>{currentUser?.email}</p>
                  <hr />
                  <button className='logout-btn' onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
    </section>
  )
}