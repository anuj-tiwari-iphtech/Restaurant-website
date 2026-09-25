import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../Contexts/CartContext';
import mastercard from '../assets/mastercard.png'
import './CheckoutSection.css'

export default function CheckoutSection() {
    const {cartItems, removeFromCart, updateQuantity, subtotal} = useCart()
    const navigate = useNavigate();

    const [voucherCode, setVoucherCode] = useState('freeship')
    const [appliedVouchers, setAppliedVoucher] = useState(['freeship'])

    // const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const shipping =  0
    const fee = 0
    const total = subtotal + shipping + fee

    const handleApplyVoucher = (e) => {
        e.preventDefault();
        if(voucherCode && !appliedVouchers.includes(voucherCode)){
            setAppliedVoucher([...appliedVouchers, voucherCode]);
        }
    }

    const removeVoucher = (code) => {
        setAppliedVoucher(appliedVouchers.filter((v) => v!==code));
    }

    const handleClick = () => {
        navigate('/payment')
    }

  return (
    <div className='checkout-container'>
        <div className='checkout-layout'>
            <div className='order-summary-card'>
                <h2 className='card-title'>  Order Summary </h2>
                <div className='items-list'>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.cartItemId || item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="item-img" />
                                <div className="item-details">
                                    <h3 className="item-name">{item.name}</h3>
                                    <p className="item-ingredients">{item.ingredients}</p>
                                    <div className="qty-controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                </div>
                            <div className="item-price">${item.price * item.quantity}</div>
                                <div className="item-actions">
                                    <button 
                                    type="button" 
                                    className="action-btn" 
                                    onClick={() => removeFromCart(item.id)}
                                    >
                                    <FiTrash2 />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className='payment-sidebar-card'>
                <div className='sidebar-section'>
                    <h3 className='sidebar-title'>Payment method</h3>
                    <button type='button' className='change-payment-link'>
                        Change payment methods
                    </button>
                    <div className='payment-card-badge'>
                        <div className='card-brand'>
                            <img src={mastercard} alt='MasterCard' className='mastercard-img'/>
                            <span className='card-name'>Mastercard</span>
                        </div>
                        <span className='card-digits'>•••• 5987</span>
                    </div>
                </div>

                <div className="sidebar-section">
                    <h3 className="sidebar-title">Voucher</h3>
                    <form onSubmit={handleApplyVoucher} className="voucher-input-group">
                    <input
                        type="text"
                        placeholder="Enter voucher"
                        value={voucherCode}
                        onChange={(e) => setVoucherCode(e.target.value)}
                        className="voucher-input"
                    />
                    <button type="submit" className="voucher-apply-btn">
                        Apply
                    </button>
                    </form>
                    {appliedVouchers.length > 0 && (
                    <div className="applied-vouchers-list">
                        {appliedVouchers.map((v) => (
                        <span key={v} className="voucher-chip">
                            {v}
                            <button
                            type="button"
                            onClick={() => removeVoucher(v)}
                            className="remove-voucher-btn"
                            >
                            ×
                            </button>
                        </span>
                        ))}
                    </div>
                    )}
                </div>
                
                <div className='sidebar-section'>
                    <h3 className='sidebar-title'>Summary</h3>
                    <div className='summary-row'>
                        <span className='summary-label'>Subtotal</span>
                        <span className='summary-value'>${subtotal}</span>
                    </div>
                    <div className='summary-row'>
                        <span className='summary-label'>Ship</span>
                        <span className='summary-value'>${shipping}</span>
                    </div>
                    <div className='summary-row'>
                        <span className='summary-label'>Fee</span>
                        <span className='summary-value'>${fee}</span>
                    </div>
                </div>

                <div className='total-row'>
                    <span className='total-label'>Total</span>
                    <span className='total-value'>${total}</span>
                </div>

                <button type='button' className='proceed-btn' onClick={handleClick} disabled={cartItems.length === 0}>
                    Proceed to payment
                </button>

            </div>
        </div>
    </div>
  )
}