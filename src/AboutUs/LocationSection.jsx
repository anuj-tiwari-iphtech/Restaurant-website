import RestaurantCard from '../components/RestaurantCard';
import { locationsData } from '../data/resturantData.js'
import './LocationSection.css';

export default function LocationsSection() {
  const handleDelivery = (address) => {
    console.log(`Delivery clicked for: ${address}`);
  };

  const handlePickup = (address) => {
    console.log(`Pickup clicked for: ${address}`);
  };

  return (
    <section className="locations-section-container">
      <div className="locations-section-wrapper">
        <h2 className="locations-section-header">Locations & Hours</h2>

        <div className="locations-grid">
          {locationsData.map((location) => (
            <RestaurantCard
              key={location.id}
              image={location.image}
              address={location.address}
              monSatHours={location.monSatHours}
              sunHours={location.sunHours}
              phone={location.phone}
              email={location.email}
              onDeliveryClick={() => handleDelivery(location.address)}
              onPickupClick={() => handlePickup(location.address)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}