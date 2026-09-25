import { useState } from 'react';
import MenuCard from './MenuCard';
import BuildYourOwnBowl from '../Models/BuildYourOwnBowl';
import '../Homepage/SignatureBowls.css'

export default function MenuCardContainer({data, head}) {
  const { bowls } = data;
  const [showBuildModal, setShowBuildModal] = useState(false);
  const [selectedBowl, setSelectedBowl] = useState(null)

  const handleOrder = (bowl) => {
    if(bowl.isCustomizable){
      setSelectedBowl(bowl);
      setShowBuildModal(true);
    }else{
      console.log('Added to cart:',bowl.title);
    }
  };

  const closeModal = () => {
    setShowBuildModal(false);
    setSelectedBowl(null);
  }

  return (
    <div>

    <section className="bowls-section">
        <div>
            <h1 style={{
                fontSize: '24px',
                fontWeight: '700',
                marginBottom:'40px'
            }}>{head}</h1>
            <div className="bowls-container">
                <div className="bowls-grid">
                {bowls.map((bowl) => (
                    <MenuCard
                    key={bowl.id}
                    title={bowl.title}
                    ingredients={bowl.ingredients}
                    image={bowl.image}
                    onOrder={() => handleOrder(bowl)}
                    price={bowl.price}
                    />
                ))}
                </div>

            </div>
        </div>
    </section>

    {showBuildModal && (
      <BuildYourOwnBowl bowl={selectedBowl} onClose={closeModal}/>
    )}
    </div>
  );
}