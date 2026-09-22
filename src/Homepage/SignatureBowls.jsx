import React from 'react';
import FoodCard from '../components/FoodCard';
import { signatureBowlsData } from '../data/signatureBowlsData';
import './SignatureBowls.css';

export default function SignatureBowlsSection() {
  const { sectionTitle, ctaText, bowls } = signatureBowlsData;

  const handleOrder = (title) => {
    console.log(`Order clicked for: ${title}`);
  };

  const handleExploreMore = () => {
    console.log("Explore more clicked");
  };

  return (
    <section className="bowls-section">
      <div className="bowls-container">
        {/* Section Heading */}
        <h2 className="bowls-title">{sectionTitle}</h2>

        {/* Bowls Cards Grid */}
        <div className="bowls-grid">
          {bowls.map((bowl) => (
            <FoodCard
              key={bowl.id}
              title={bowl.title}
              ingredients={bowl.ingredients}
              image={bowl.image}
              onOrder={() => handleOrder(bowl.title)}
            />
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="bowls-cta-wrapper">
          <button className="bowls-explore-btn" onClick={handleExploreMore}>
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}