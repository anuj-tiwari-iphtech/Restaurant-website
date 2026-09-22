import React, { useState } from 'react';
import './Testimonials.css';

import avatar1 from '../assets/Homepage/happycustomers/A1.jpg';
import avatar2 from '../assets/Homepage/happycustomers/B1.jpg';
import avatar3 from '../assets/Homepage/happycustomers/E1.jpg';
import avatar4 from '../assets/Homepage/happycustomers/I1.jpg';

import food1 from '../assets/Homepage/happycustomers/mainimg.jpg';


const testimonialsData = [
  {
    id: 0,
    name: "Lauren Martinez",
    review: "I'm a big fan of poke bowls, and this place definitely delivers. The quality of the ingredients is top-notch, and the variety of toppings allows you to customize your bowl.",
    avatar: avatar1,
    image: food1,
  },
  {
    id: 1,
    name: "Marcus Chen",
    review: "Super fresh fish and generous portions! The spicy mayo sauce gives the bowl an incredible kick. Easily my go-to lunch spot during the workweek.",
    avatar: avatar2,
    image: food1,
  },
  {
    id: 2,
    name: "Sophia Reynolds",
    review: "The poke bowls are always full of color and flavor. I love the crunchy onion toppings and fresh avocado. Staff is super quick and friendly!",
    avatar: avatar3,
    image: food1,
  },
  {
    id: 3,
    name: "Jessica Taylor",
    review: "Authentic Asian-inspired flavors in every bite. Everything tastes clean, light, and healthy while remaining completely satisfying.",
    avatar: avatar4,
    image: food1,
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Cycle to next review
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const currentCustomer = testimonialsData[activeIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Left Column: Text & Avatars */}
        <div className="testimonials-content">
          <h2 className="testimonials-title">Our happy customers</h2>
          
          <p className="testimonials-quote">
            "{currentCustomer.review}"
          </p>

          <p className="testimonials-name">
            {currentCustomer.name}
          </p>

          {/* Avatar Navigation Bar */}
          <div className="avatar-navigation">
            <div className="avatar-list">
              {testimonialsData.map((item, index) => (
                <button
                  key={item.id}
                  className={`avatar-btn ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View review from ${item.name}`}
                >
                  <img src={item.avatar} alt={item.name} className="avatar-img" />
                </button>
              ))}
            </div>

            <button className="next-arrow-btn" onClick={handleNext} aria-label="Next review">
              &#10095;
            </button>
          </div>
        </div>

        <div className="testimonials-image-wrapper">
          <img 
            key={currentCustomer.id} 
            src={currentCustomer.image} 
            alt="Poke bowl dish" 
            className="testimonials-main-img fade-in" 
          />
        </div>

      </div>

    </section>
  );
}