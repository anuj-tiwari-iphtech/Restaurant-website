import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';
import { locationsData } from '../data/resturantData.js'
import './LocationSection.css';

export default function LocationsSection() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState({ id: null, type: null });

  const handleDelivery = (location) => {
    setSelected({ id: location.id, type: 'delivery' });
    navigate('/checkout-menu', { state: { restaurant: location , orderType: 'delivery' } });
  };

  const handlePickup = (location) => {
    setSelected({ id: location.id, type: 'pickup' });
    navigate('/checkout-menu', { state: { restaurant: location, orderType: 'pickup' } });
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
              activeType={selected.id === location.id ? selected.type : null}
              onDeliveryClick={() => handleDelivery(location)}
              onPickupClick={() => handlePickup(location)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}