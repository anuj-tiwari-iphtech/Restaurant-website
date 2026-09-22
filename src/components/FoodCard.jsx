import './FoodCard.css';

export default function FoodCard({
  title,
  ingredients ,
  image,
  onOrder
}) {
  return (
    <div className="food-card-wrapper">
      <div className="food-card-image-container">
        <img src={image} alt={title} className="food-card-image" />
      </div>

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