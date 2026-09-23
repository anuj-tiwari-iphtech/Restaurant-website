import React from 'react';
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import defaultImg from '../assets/location/img1.jpg';
import './RestaurantCard.css';

export default function RestaurantCard({
  image = defaultImg,
  address = "Boston Harbor Islands, 15 State Street, Suite 1100, Boston",
  monSatHours = "Monday - Saturday 10:30 AM - 9:00 PM",
  sunHours = "Sunday - 12:00 PM - 9:00 PM",
  phone = "(713) 814-7100",
  email = "pokebarharborislands@gmail.com",
  onDeliveryClick,
  onPickupClick
}) {
  return (
    <div className="restaurant-card-container">
      <div className="resturnat-img-wrapper">
        <img src={image} alt="restaurant image" className="restaurant-main-img" />
      </div>

      <div className="restaurant-details">
        <p className="restaurant-name">{address}</p>
        <p className="restaurant-time1">{monSatHours}</p>
        <p className="restaurant-time2">{sunHours}</p>
        <p className="res-phone-no">
          <FiPhone className="phone-icon" />
          {phone}
        </p>
        <p className="res-location-ele">
          <SlLocationPin className="location-icon" />
          {email}
        </p>
      </div>

      <div className="res-button-wrapper">
        <button className="res-first-btn" onClick={onDeliveryClick}>
          Delivery
        </button>
        <button className="res-second-btn" onClick={onPickupClick}>
          Pickup
        </button>
      </div>
    </div>
  );
}