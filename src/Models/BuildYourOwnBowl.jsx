import { useState } from 'react';
import { FiX, FiMinus, FiPlus } from 'react-icons/fi';
import './BuildYourOwnBowl.css';
import pokeImg from '../assets/byob.jpg'; 

const BASE_OPTIONS = [
  'White Rice',
  'Brown Rice',
  'Salad',
  'Noddles',
  'Half and Half (White Rice and Brown Rice)',
  'Half and Half (White Rice and Salad)',
  'Half and Half (Brown Rice and Salad)',
  'Half and Half (Noodles and Salad)',
];

const PROTEIN_OPTIONS = [
  { name: 'Ahi Tuna', price: 0 },
  { name: 'Atlantic Salmon', price: 0 },
  { name: 'Spicy Tuna', price: 0 },
  { name: 'Organic Tofu', price: 0 },
  { name: 'Extra Tuna (+ $3.00)', price: 3.0 },
];

const MIXIN_OPTIONS = [
  'Cucumber',
  'Sweet Onion',
  'Edamame',
  'Cilantro',
  'Jalapeño',
];

const TOPPING_OPTIONS = [
  'Avocado (+$1.50)',
  'Masago',
  'Crispy Onions',
  'Furikake',
  'Sesame Seeds',
  'Spicy Mayo',
  'Ponzu Sauce',
];

export default function BuildYourOwnBowl({ onClose }) {
  const [selectedBase, setSelectedBase] = useState('White Rice');
  const [selectedProtein, setSelectedProtein] = useState('Ahi Tuna');
  const [selectedMixins, setSelectedMixins] = useState(['Cucumber']);
  const [selectedToppings, setSelectedToppings] = useState(['Sesame Seeds']);
  const [quantity, setQuantity] = useState(1);

  const basePrice = 20.0;
  const totalPrice = (basePrice * quantity).toFixed(2);

  const toggleCheckbox = (item, currentList, setList) => {
    if (currentList.includes(item)) {
      setList(currentList.filter((i) => i !== item));
    } else {
      setList([...currentList, item]);
    }
  };

  return (
    <div className="poke-overlay">
      <div className="poke-modal-card">
        {/* Modal Header */}
        <div className="poke-header">
          <div className="poke-header-info">
            <img src={pokeImg} alt="Poke Bowl" className="poke-thumb" />
            <div>
              <h2 className="poke-title">Build Your Own Poke Bowl</h2>
              <p className="poke-subtitle">
                Extra proteins for an additional charge.
              </p>
            </div>
          </div>
          <button type="button" className="poke-close-btn" onClick={onClose}>
            <FiX />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="poke-body">
          {/* STEP 1: Choose a Base */}
          <section className="poke-step-section">
            <span className="poke-step-tag">Step 1</span>
            <h3 className="poke-step-title">Choose a Base</h3>
            <div className="poke-options-list">
              {BASE_OPTIONS.map((option) => (
                <label key={option} className="poke-radio-label">
                  <input
                    type="radio"
                    name="poke-base"
                    value={option}
                    checked={selectedBase === option}
                    onChange={() => setSelectedBase(option)}
                    className="poke-radio-input"
                  />
                  <span className="poke-radio-custom"></span>
                  <span className="poke-option-text">{option}</span>
                </label>
              ))}
            </div>
          </section>

          {/* STEP 2: Choose Proteins */}
          <section className="poke-step-section">
            <span className="poke-step-tag">Step 2</span>
            <h3 className="poke-step-title">Choose Proteins</h3>
            <div className="poke-options-list">
              {PROTEIN_OPTIONS.map((item) => (
                <label key={item.name} className="poke-radio-label">
                  <input
                    type="radio"
                    name="poke-protein"
                    value={item.name}
                    checked={selectedProtein === item.name}
                    onChange={() => setSelectedProtein(item.name)}
                    className="poke-radio-input"
                  />
                  <span className="poke-radio-custom"></span>
                  <span className="poke-option-text">{item.name}</span>
                </label>
              ))}
            </div>
          </section>

          {/* STEP 3: Choose Mix-ins */}
          <section className="poke-step-section">
            <span className="poke-step-tag">Step 3</span>
            <h3 className="poke-step-title">Choose Mix-ins</h3>
            <div className="poke-options-list">
              {MIXIN_OPTIONS.map((mixin) => (
                <label key={mixin} className="poke-radio-label">
                  <input
                    type="checkbox"
                    checked={selectedMixins.includes(mixin)}
                    onChange={() =>
                      toggleCheckbox(mixin, selectedMixins, setSelectedMixins)
                    }
                    className="poke-checkbox-input"
                  />
                  <span className="poke-checkbox-custom"></span>
                  <span className="poke-option-text">{mixin}</span>
                </label>
              ))}
            </div>
          </section>

          {/* STEP 4: Choose Toppings & Sauces */}
          <section className="poke-step-section">
            <span className="poke-step-tag">Step 4</span>
            <h3 className="poke-step-title">Toppings & Sauces</h3>
            <div className="poke-options-list">
              {TOPPING_OPTIONS.map((top) => (
                <label key={top} className="poke-radio-label">
                  <input
                    type="checkbox"
                    checked={selectedToppings.includes(top)}
                    onChange={() =>
                      toggleCheckbox(top, selectedToppings, setSelectedToppings)
                    }
                    className="poke-checkbox-input"
                  />
                  <span className="poke-checkbox-custom"></span>
                  <span className="poke-option-text">{top}</span>
                </label>
              ))}
            </div>
          </section>
        </div>

        {/* Modal Footer Controls */}
        <div className="poke-footer">
          {/* Quantity Selector */}
          <div className="poke-qty-picker">
            <button
              type="button"
              className="poke-qty-btn"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              <FiMinus />
            </button>
            <span className="poke-qty-num">{quantity}</span>
            <button
              type="button"
              className="poke-qty-btn poke-qty-plus"
              onClick={() => setQuantity((q) => q + 1)}
            >
              <FiPlus />
            </button>
          </div>

          {/* Add To Cart Button */}
          <button type="button" className="poke-add-cart-btn">
            Add to cart ${totalPrice}
          </button>
        </div>
      </div>
    </div>
  );
}