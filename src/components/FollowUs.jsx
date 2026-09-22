import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

import img1 from '../assets/Homepage/followus/fu1.jpg';
import img2 from '../assets/Homepage/followus/fu2.jpg';
import img3 from '../assets/Homepage/followus/fu3.jpg';
import img4 from '../assets/Homepage/followus/fu4.jpg';
import img5 from '../assets/Homepage/followus/fu5.jpg';
import img6 from '../assets/Homepage/followus/fu6.jpg';
import img7 from '../assets/Homepage/followus/fu7.jpg';
import img8 from '../assets/Homepage/followus/fu8.jpg';
import img9 from '../assets/Homepage/followus/fu9.jpg';

import './FollowUs.css';

export default function FollowUs() {
  return (
    <section className="follow-us-bleed-section">
      <div className="follow-us-bleed-container">
        
        {/* Left Column - Text Content */}
        <div className="follow-us-text-col">
          <h2 className="follow-title">Follow us</h2>
          <p className="follow-handle">@pokebarboston</p>
          <p className="follow-description">
            To stay updated with the latest news, promotions, and offerings from the poke restaurant, make sure to follow our social media accounts. Don't miss out on any updates!
          </p>

          <div className="social-icon-group">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="social-icon facebook" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="social-icon twitter" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="social-icon instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="social-icon youtube" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right Column - Gallery Grid */}
        <div className="follow-us-bleed-gallery">
          
          <div className="gallery-column">
            <img src={img1} alt="Poke bowl 1" className="gallery-img " />
            <img src={img2} alt="Poke bowl 2" className="gallery-img " />
            <img src={img3} alt="Poke bowl 3" className="gallery-img " />
          </div>

          <div className="gallery-column column-raised">
            <img src={img4} alt="Poke bowl 4" className="gallery-img " />
            <img src={img5} alt="Poke bowl 5" className="gallery-img " />
            <img src={img6} alt="Poke bowl 6" className="gallery-img " />
          </div>

          <div className="gallery-column">
            <img src={img7} alt="Poke bowl 7" className="gallery-img " />
            <img src={img8} alt="Poke bowl 8" className="gallery-img " />
            <img src={img9} alt="Poke bowl 9" className="gallery-img " />
          </div>

        </div>

      </div>
    </section>
  );
}