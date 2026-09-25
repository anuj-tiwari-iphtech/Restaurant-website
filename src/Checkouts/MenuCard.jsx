import '../components/FoodCard.css'

export default function MenuCard({
  title,
  ingredients = [],
  image,
  onOrder,
  price,
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
        <div className='menu-card-price'>
          <h3>${price}</h3>
          <button className="food-card-btn" onClick={onOrder}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}