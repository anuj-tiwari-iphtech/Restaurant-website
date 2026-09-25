import { useState } from 'react';
import { useCart } from '../Contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import MenuCard from './MenuCard';
import BuildYourOwnBowl from '../Models/BuildYourOwnBowl';
import '../Homepage/SignatureBowls.css'

export default function MenuCardContainer({data, head}) {
  const { bowls } = data;
  const {addToCart} = useCart();
  const navigate = useNavigate();
  const [showBuildModal, setShowBuildModal] = useState(false);
  const [selectedBowl, setSelectedBowl] = useState(null)

  const handleOrder = (bowl) => {
    if(bowl.isCustomizable){
      setSelectedBowl(bowl);
      setShowBuildModal(true);
    }else{
      addToCart({
        id: bowl.id,
        name: bowl.title,
        ingredients: bowl.ingredients,
        image: bowl.image,
        price: bowl.price,
        quantity: 1,
        options: bowl.options || {},
      })
    }
  };

  const closeModal = () => {
    setShowBuildModal(false);
    setSelectedBowl(null);
  }

  const handleClick = () => {
    navigate('/checkout')
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
                <button onClick={handleClick}
              style={{
                padding: '12px 20px',
                borderRadius: '20px',
                border: "none",
                color: "#F96540FF",
                background: '#fff1f0',
                fontSize: '15px',
                marginLeft: "auto",
              }}
            >Proceed To Checkout --</button>
            </div>
            
        </div>
    </section>

    {showBuildModal && (
      <BuildYourOwnBowl bowl={selectedBowl} onClose={closeModal}/>
    )}
    </div>
  );
}