import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/footer.svg'; 

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Poke Now" className="logo-img" />
            <span className="logo-text">POKE NOW.</span>
          </div>

          <nav className="footer-nav">
            <Link to='/menu'>Menu</Link>
            <Link to='/our-story'>Our story</Link>
            <Link to='/location'>Location</Link>
            <Link to='/gift-card'>Gift card</Link>
          </nav>

          <div className="footer-copyright">
            © 2022 Brand, Inc. • <a href="#privacy">Privacy</a> • <a href="#terms">Terms</a> • <a href="#sitemap">Sitemap</a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-btn-group">
            <button className="btn btn-outline">Order Online</button>
            <button className="btn btn-filled">Book a Table</button>
          </div>

          <div className="footer-contact">
            <p className="footer-address">848 King Street, Mesa, AZ 85201, Boston, USA</p>
            <a href="mailto:info@pokebar.com" className="footer-email">info@pokebar.com</a>
          </div>

          <div className="footer-socials">
            <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
            <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#youtube" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}