import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext';
import { 
  FiCalendar, 
  FiUser, 
  FiCreditCard, 
  FiHash, 
  FiDollarSign, 
  FiCheck 
} from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import mastercard from '../assets/mastercard.png'
import mainImg from '../assets/payment.jpg'

import './EndScreen.css'

export default function EndScreen() {
    const navigate = useNavigate();
    const {cartItems, clearCart} = useCart();

    const [orderedItems] = useState(cartItems);

    useEffect(() => {
        clearCart();
    },[])

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const orderTotal = cartItems.reduce((acc, item) => acc + item.price, 0);

    const orderDetails = {
        date: new Date().toLocaleDateString('en-GB'),
        customer: 'John Miller',
        orderNumber: '586789963',
        total: orderTotal,
    };

    const handleClick = () => {
        navigate('/')
    }
  return (
    <div className="end-page">
        <div className="end-page-content">
            <div className="confirmation-avatar-wrapper">
                <img src={mainImg} alt="Order Success" className="confirmation-avatar" />
                <div className="success-badge">
                    <FiCheck />
                </div>
            </div>

            <h1 className='confirmation-heading'>Thank you for your purchase!</h1>
            <p className='confirmation-subtext'>Food is on its way to you</p>

            <div className='receipt-card'>
                <div className='receipt-section'>
                    <div className='receipt-row'>
                        <span className='receipt-label'>
                            <FiCalendar className='receipt-icon'/> Date
                        </span>
                        <span className='receipt-value font-normal'>{orderDetails.date}</span>
                    </div>

                    <div className='receipt-row'>
                        <span className='receipt-label'>
                            <FiUser className='receipt-icon'/> Customer
                        </span>
                        <span className='receipt-value font-normal'>{orderDetails.customer}</span>
                    </div>

                    <div className='receipt-row'>
                        <span className='receipt-label'>
                            <FiCreditCard className='receipt-icon'/> Payment Method
                        </span>
                        <img src={mastercard} alt='MasterCard' className='receipt-payment-logo'/>
                    </div>
                </div>

                <div className='receipt-divider'></div>

                <div className='receipt-section'>
                    <div className='receipt-row'>
                        <span className='receipt-label'>
                            <FiHash className='receipt-icon'/> Order Number
                        </span>
                        <span className='receipt-value font-normal'>{orderDetails.orderNumber}</span>
                    </div>

                    <div className='receipt-row'>
                        <span className='receipt-label'>
                            <FiDollarSign className='receipt-icon'/> Total
                        </span>
                        <span className='receipt-value font-normal'>{orderDetails.total}</span>
                    </div>
                </div>

                <div className='receipt-divider'></div>

                <div className='receipt-section'>
                    <span className='order-line-title'>Order line</span>

                    <div className='receipt-items-list'>
                        {orderedItems.map((item) => (
                            <div key={item.id} className='receipt-item'>
                                <img src={item.image} alt={item.name} className='receipt-item-img'/>
                                <div className='receipt-item-details'>
                                    <h4 className="receipt-item-name">{item.name}</h4>
                                    <p className="receipt-item-sub">{item.ingredients}</p>
                                    <span className="receipt-item-qty">x{item.quantity || 1}</span>
                                </div>
                                <span className="receipt-item-price">${item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <button type='button' className='back-home-btn' onClick={handleClick}>
                    Back to home
                </button>
            </div>
            

            <div className="feedback-rating-wrapper">
                <p className="rating-question">How was your experience?</p>
                <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type="button"
                        className={`star-btn ${star <= (hoverRating || rating) ? 'filled' : ''}`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                    >
                        <FaStar />
                    </button>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}
