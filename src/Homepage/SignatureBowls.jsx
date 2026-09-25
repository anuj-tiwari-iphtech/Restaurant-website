import FoodCard from '../components/FoodCard';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext';
import './SignatureBowls.css';

export default function SignatureBowlsSection({data}) {
  const { sectionTitle, ctaText, bowls } = data;
  const navigate = useNavigate()
  const {addToCart} = useCart();

  const handleOrder = (bowl) => {
    addToCart({
      id: bowl.id,
      name: bowl.title,
      ingredients: bowl.ingredients,
      image: bowl.image,
      price: bowl.price,
      quantity: 1,
      options: bowl.options || {},
    })
    navigate('/checkout')
  };

  const handleExploreMore = () => {
    console.log("Explore more clicked");
    navigate('/menu')
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
              price={bowl.price}
              onOrder={() => handleOrder(bowl)}
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