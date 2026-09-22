import React from 'react';
import FoodCard from '../components/FoodCard';
import './SignatureBowls.css';

export default function SignatureBowlsSection({data}) {
  const { sectionTitle, ctaText, bowls } = data;

  const handleOrder = (title) => {
    console.log(`Order clicked for: ${title}`);
  };

  const handleExploreMore = () => {
    console.log("Explore more clicked");
  };

  return (
    <section className="bowls-section">
      <div className="bowls-container">
        <h2 className="bowls-title">{sectionTitle}</h2>

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

        <div className="bowls-cta-wrapper">
          <button className="bowls-explore-btn" onClick={handleExploreMore}>
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}