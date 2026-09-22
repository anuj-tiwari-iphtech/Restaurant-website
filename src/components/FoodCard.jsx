import React from 'react';
import './FoodCard.css';
import bowlImage from '../assets/Homepage/SignatureBowls/first.jpg';

export default function FoodCard({
  title = "California Crunch Bowl",
  ingredients = [
    "Shrimp", "Crab", "Cucumber", "Green Onion",
    "Carrot", "Edamame", "Avocado", "Soy Sauce",
    "Tempura Flakes", "Spicy Mayo Drizzle"
  ],
  image = bowlImage,
  onOrder
}) {
  return (
    <div className="food-card-wrapper">
      {/* Floating Top Image Container */}
      <div className="food-card-image-container">
        <img src={image} alt={title} className="food-card-image" />
      </div>

      {/* Main Card Content */}
      <div className="food-card-body">
        <h3 className="food-card-title">{title}</h3>

        <p className="food-card-ingredients">
          {ingredients.join(" • ")}
        </p>

        <button className="food-card-btn" onClick={onOrder}>
          Order Now
        </button>
      </div>
    </div>
  );
}