import { useState } from "react";
import { FiSearch, FiMapPin } from 'react-icons/fi';
import {locationsData} from '../data/menuData.js'
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import mapImg from '../assets/map.svg'
import './SelectRestaurant.css'

export default function SelectRestaurant() {
    const [orderType, setOrderType] = useState('delivery')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedId, setSelectedId] = useState(1);

    const filteredLocations = locationsData.filter((loc) => 
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) || loc.address.toLowerCase().includes(searchQuery.toLowerCase()) 
    )
    return(
        <div className="sr-wrapper">
            <div className="sr-left-panel">
                <div className="sr-toggle-container">
                    <button
                        className={`sr-toggle-btn ${orderType === 'delivery' ? 'active' : ''}`}
                        onClick={() => setOrderType('delivery')}
                    >Delivery</button>
                    <button
                        className={`sr-toggle-btn ${orderType === 'pickup' ? 'active' : ''}`}
                        onClick={() => setOrderType('pickup')}
                    >Pickup</button>
                </div>

                <p className="sr-subtitle">Find nearby locations to order from</p>

                <div className="sr-search-box">
                    <FiSearch className="sr-search-icon"/>
                    <input
                        type="text"
                        placeholder="Find a store near you"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="sr-cards-container">
                    {filteredLocations.map((loc) => {
                        const isSelected = loc.id === selectedId;
                        return(
                            <div
                                key={loc.id}
                                className={`sr-card ${isSelected ? 'selected' : ''}`}
                                onClick={() => setSelectedId(loc.id)}
                            >
                                <div className="sr-card-content">
                                    <div className="sr-card-header">
                                        <FiMapPin className={`sr-pin-icon ${isSelected ? 'active-pin' : ''}` }/>
                                        <div className="sr-card-text">
                                            <h4 className="sr-card-title">{loc.name}</h4>
                                            <p className="sr-card-address">{loc.address}</p>
                                        </div>
                                    </div>

                                    <div className="sr-card-footer">
                                        <button className={`sr-select-btn ${isSelected ? 'active-btn' : ''}`}>
                                            Select
                                        </button>
                                        <span className="sr-distance">
                                            {loc.distance}/{loc.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="sr-right-panel">
                <div className="sr-map-wrapper">
                <img src={mapImg} alt="Locations Map" className="sr-map-img" />

                        <div className="sr-map-pin pin-active" style={{ top: '35%', left: '26%' }}>
                        <FiMapPin />
                        </div>
                        <div className="sr-map-pin pin-light" style={{ top: '22%', left: '72%' }}>
                        <FiMapPin />
                        </div>
                        <div className="sr-map-pin pin-light" style={{ top: '60%', left: '52%' }}>
                        <FiMapPin />
                        </div>
                        <div className="sr-map-pin pin-light" style={{ top: '82%', left: '18%' }}>
                        <FiMapPin />
                        </div>
                        <div className="sr-map-icon icon-cart" style={{ top: '48%', left: '68%' }}>
                        <FiShoppingCart />
                        </div>
                        <div className="sr-map-icon icon-cart" style={{ top: '58%', left: '22%' }}>
                        <FiShoppingCart />
                        </div>
                        <div className="sr-map-icon icon-home" style={{ top: '72%', left: '74%' }}>
                        <AiOutlineHome />
                        </div>
                </div>
            </div>

        </div>
    )
}