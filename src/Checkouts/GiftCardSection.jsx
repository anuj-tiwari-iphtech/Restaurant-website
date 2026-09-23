import React, { useState } from 'react';
import { FaUser, FaUsers } from 'react-icons/fa';
import './GiftCardSection.css';

import food1 from '../assets/GiftCard/img1.jpg';
import food2 from '../assets/GiftCard/img2.jpg';
import food3 from '../assets/GiftCard/img3.jpg';
import food4 from '../assets/GiftCard/img4.jpg';
import food5 from '../assets/GiftCard/img5.jpg';
import food6 from '../assets/GiftCard/img6.jpg';
import food7 from '../assets/GiftCard/img7.jpg';
import food8 from '../assets/GiftCard/img8.jpg';
import food9 from '../assets/GiftCard/img9.jpg';
import food10 from '../assets/GiftCard/img10.jpg';
import food11 from '../assets/GiftCard/img11.jpg';
import food12 from '../assets/GiftCard/img12.jpg';

export default function GiftCardSection() {
  const [giftType, setGiftType] = useState('individual'); 
  const [selectedAmount, setSelectedAmount] = useState('25.00');
  const [customAmount, setCustomAmount] = useState('');
  const [showPromo, setShowPromo] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    sendToMyself: false,
  });

  const amounts = ['25.00', '35.00', '50.00', '100.00'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = selectedAmount === 'custom' ? customAmount : selectedAmount;
    const checkoutData = {
      giftType,
      amount: `$${finalAmount}`,
      promoCode,
      ...formData,
    };
    console.log('Checkout Data:', checkoutData);
    alert(`Proceeding to checkout for $${finalAmount}`);
  };

  return (
    <section className="gift-section-container">
      <div className="gift-section-wrapper">
        
        <div className="gift-form-container">
          <h1 className="gift-main-title">Give the Perfect Gift</h1>
          <p className="gift-subtitle">Get a voucher for yourself or gift one to a friend</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="section-label">What kind of gift is it?</label>
              <div className="gift-type-grid">
                <div
                  className={`gift-type-card ${giftType === 'individual' ? 'active' : ''}`}
                  onClick={() => setGiftType('individual')}
                >
                  <div className="gift-type-icon">
                    <FaUser />
                  </div>
                  <div className="gift-type-text">
                    <h3>For one individual</h3>
                    <p>Send a gift card to one recipient</p>
                  </div>
                </div>

                <div
                  className={`gift-type-card ${giftType === 'group' ? 'active' : ''}`}
                  onClick={() => setGiftType('group')}
                >
                  <div className="gift-type-icon">
                    <FaUsers />
                  </div>
                  <div className="gift-type-text">
                    <h3>Group gift card</h3>
                    <p>Pool money from multiple contributors for one recipient</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="section-label">eGift card amount</label>
              <div className="amount-selector-group">
                {amounts.map((amt) => (
                  <button
                    type="button"
                    key={amt}
                    className={`amount-btn ${selectedAmount === amt ? 'active' : ''}`}
                    onClick={() => setSelectedAmount(amt)}
                  >
                    ${amt}
                  </button>
                ))}
                <button
                  type="button"
                  className={`amount-btn ${selectedAmount === 'custom' ? 'active' : ''}`}
                  onClick={() => setSelectedAmount('custom')}
                >
                  Custom
                </button>
              </div>

              {selectedAmount === 'custom' && (
                <div className="custom-amount-wrapper">
                  <span className="currency-symbol">$</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    required
                    className="custom-amount-input"
                  />
                </div>
              )}

              <div className="promo-wrapper">
                {!showPromo ? (
                  <button
                    type="button"
                    className="add-promo-btn"
                    onClick={() => setShowPromo(true)}
                  >
                    Add Promo Code
                  </button>
                ) : (
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="promo-input"
                  />
                )}
              </div>
            </div>

            <div className="form-group">
              <label className="section-label">Your details</label>
              <div className="inputs-stack">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <textarea
                  name="message"
                  placeholder="Your Message (optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="form-input textarea-input"
                ></textarea>
              </div>
            </div>

            <div className="form-group">
              <label className="section-label">Delivery details</label>
              <div className="toggle-row">
                <span>Send this card to myself</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    name="sendToMyself"
                    checked={formData.sendToMyself}
                    onChange={handleChange}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>

            <button type="submit" className="checkout-btn">
              Checkout
            </button>
          </form>
        </div>

            <div className="gift-gallery-container">
                <div className="gc-gallery-cols-wrapper">
                    {/* Column 1 */}
                    <div className="gc-gallery-col gc-offset-col1">
                    <img src={food1} alt="Food bowl 1" className="gc-gallery-img" />
                    <img src={food2} alt="Food bowl 2" className="gc-gallery-img" />
                    <img src={food3} alt="Food bowl 3" className="gc-gallery-img" />
                    <img src={food4} alt="Food bowl 4" className="gc-gallery-img" />
                    </div>

                    {/* Column 2 (Middle Column Shifted Vertically) */}
                    <div className="gc-gallery-col gc-offset-col2">
                    <img src={food5} alt="Food bowl 5" className="gc-gallery-img" />
                    <img src={food6} alt="Food bowl 6" className="gc-gallery-img" />
                    <img src={food7} alt="Food bowl 7" className="gc-gallery-img" />
                    <img src={food8} alt="Food bowl 8" className="gc-gallery-img" />
                    </div>

                    {/* Column 3 */}
                    <div className="gc-gallery-col gc-offset-col3">
                    <img src={food9} alt="Food bowl 9" className="gc-gallery-img" />
                    <img src={food10} alt="Food bowl 10" className="gc-gallery-img" />
                    <img src={food11} alt="Food bowl 11" className="gc-gallery-img" />
                    <img src={food12} alt="Food bowl 12" className="gc-gallery-img" />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}