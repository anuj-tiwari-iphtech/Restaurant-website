import BowlCard from '../components/BowlCard';
import './BowlStepSection.css';

export default function BowlStepSection({ stepNumber, stepTitle, title, items }) {
  return (
    <div className="bowl-step-section-container">
      <div className="bowl-step-wrapper">
        <div className="bowl-step-header">
          <span className="step-big-number">{stepNumber}</span>
          <div className="step-title-group">
            <span className="step-subtitle">{stepTitle}</span>
            <h2 className="step-main-title">{title}</h2>
          </div>
        </div>

        <div className="bowl-cards-grid">
          {items.map((item) => (
            <BowlCard key={item.id} name={item.name} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
}