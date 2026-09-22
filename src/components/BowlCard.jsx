import './BowlCard.css';

export default function BowlCard({ name, image }) {
  return (
    <div className="bowl-card-container">
      <div className="bowl-card-img-wrapper">
        <img src={image} alt={name} className="bowl-card-main-img" />
      </div>
      <p className="bowl-card-title">{name}</p>
    </div>
  );
}