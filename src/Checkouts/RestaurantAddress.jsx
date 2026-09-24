import React, { useState } from 'react';
import { FiMapPin, FiClock } from 'react-icons/fi';
import './RestaurantAddress.css';

export default function RestaurantAddress({ name,address,onChangeLocation }) {
  const [orderType, setOrderType] = useState('delivery');

  return (
    <header className="rh-container">
      <div className="rh-content">
        <h1 className="rh-title">{name}</h1>

        <div className="rh-details-row">
          <div className="rh-info-group">
            <div className="rh-info-item">
              <FiMapPin className="rh-icon" />
              <span>{address}</span>
              <button 
                type="button" 
                className="rh-change-link" 
                onClick={onChangeLocation}
              >
                Change Location
              </button>
            </div>

            <div className="rh-info-item">
              <FiClock className="rh-icon" />
              <span>
                Monday - Saturday 10:30 AM - 9:00 PM/ Sunday - 12:00 PM - 9:00 PM
              </span>
            </div>
          </div>
          
          <div className="rh-toggle-container">
            <button
              type="button"
              className={`rh-toggle-btn ${orderType === 'delivery' ? 'active' : ''}`}
              onClick={() => setOrderType('delivery')}
            >
              Delivery
            </button>
            <button
              type="button"
              className={`rh-toggle-btn ${orderType === 'pickup' ? 'active' : ''}`}
              onClick={() => setOrderType('pickup')}
            >
              Pickup
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}