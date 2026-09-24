import { useState, useMemo } from 'react';
import { FiX } from 'react-icons/fi';
import './Reservation.css'
import img from '../assets/reservation.jpg'

const RESTAURANTS = [
    'Bistro Central',
    'The Green Bowl',
    'Urban Table',
    'Ocean Breeze Diner',
    'La Pasta Bella',
    'Spice Route Grill',
  ];

export default function ReservationModal({ onClose }) {

    const todayStr = useMemo(() => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    }, []);

    const getCurrentTimeString = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const [formData, setFormData] = useState({
        name: '',
        guests: '',
        restaurant: '',
        date: 'Fri 25. Sep',
        time: '6:00 PM',
    });

    const [errors, setErrors] = useState({});

    const minTime = formData.date === todayStr ? getCurrentTimeString() : '00:00'

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => {
            const updated = {...prev, [name]: value};

            if (name === 'date' && value === todayStr){
                const currentTime = getCurrentTimeString();
                if(updated.time < currentTime){
                    updated.time = currentTime;
                }
            }

            return updated;
        })

        if (errors[name]){
            setErrors((prev) => ({...prev, [name]: null}))
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if(formData.date < todayStr){
            newErrors.date = 'Cannot select a past date';
        }

        if(formData.date === todayStr && formData.time < getCurrentTimeString()){
            newErrors.time = 'Cannot select a past time'
        }

        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            return;
        }

        console.log('Reservation Submitted:', formData);
        alert('Reservation successful');
    };

  return (
    <div className="res-modal-overlay">
      <div className="res-modal-card">
        
        <div className="res-form-side">
          <h2 className="res-title">Reservation</h2>
          <p className="res-description">
            We provide a convenient online reservation system. Simply select your
            desired date, time, and party size, and we will make sure that your table is
            ready upon your arrival.
          </p>

          <form onSubmit={handleSubmit} className="res-form">
            <div className="res-input-group full-width">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="res-form-row">
              <div className="res-input-group">
                <label>Guests</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="res-select"
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="res-input-group">
                <label>Restaurant</label>
                <select
                  name="restaurant"
                  value={formData.restaurant}
                  onChange={handleChange}
                  className="res-select"
                >
                  {RESTAURANTS.map((place) => (
                    <option key={place} value={place}>
                      {place}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="res-form-row">
              <div className="res-input-group">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  min={todayStr}
                  value={formData.date}
                  onChange={handleChange}
                  className={errors.date ? 'input-error' : ''}
                  required
                />
                {errors.date && <span className="error-text">{errors.date}</span>}
              </div>

              <div className="res-input-group">
                <label>Time</label>

                <input
                  type="time"
                  name="time"
                  min={minTime}
                  value={formData.time}
                  onChange={handleChange}
                  className={errors.time ? 'input-error' : ''}
                  required
                />
                {errors.time && <span className="error-text">{errors.time}</span>}

              </div>
            </div>

            <button type="submit" className="res-submit-btn">
              Book a table
            </button>
          </form>
        </div>

        <div className="res-image-side">
          <button className="res-close-btn" onClick={onClose}>
            <FiX />
          </button>
          <img src={img} alt="Fresh Salad Bowl" className="res-cover-img" />
        </div>

      </div>
    </div>
  );
}