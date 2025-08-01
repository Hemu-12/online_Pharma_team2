import React, { useState } from 'react';
import './CheckoutPage.css';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    const [items, setItems] = useState([
        { id: 101, name: 'Paracetamol 500mg', price: 20.0, quantity: 1, image: '/images/paracetamol.jpg' },
        { id: 102, name: 'Amoxicillin 250mg', price: 50.0, quantity: 1, image: '/images/amoxicillin.jpg' }
    ]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });

    const [errors, setErrors] = useState({});
    const [selectedPayment, setSelectedPayment] = useState('Credit Card');

    const updateQuantity = (id, delta) => {
        
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    const removeItem = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleShippingSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        Object.entries(formData).forEach(([key, value]) => {
            if (!value.trim()) newErrors[key] = 'This field is required';
        });
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            alert('Shipping information submitted successfully!');
        }
    };

    const handlePaymentSelect = (method) => {
        setSelectedPayment(method);
    };

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * 0.075;
    const total = subtotal + tax;

    return (
        <div className="checkout-page">
            <header className="pharmacheckout-header">
                <div className="pharmacheckout-header-container">
                    <div className="pharmacheckout-site-title">
                        <h1>
                            <span style={{ color: '#2563eb', fontWeight: 'bold' }}>Pharma</span>
                            <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Care</span>
                        </h1>
                    </div>
                    <div className="pharmacheckout-home-link">
                        <Link to="/">Home</Link>
                    </div>
                </div>
            </header>

            <main className="pharmacheckout-main-content">
                <section className="pharmacheckout-order-section">
                    <div className="pharmacheckout-card">
                        <h2><i className="fas fa-pills"></i> Your Medications</h2>
                        {items.map(item => (
                            <div key={item.id} className="pharmacheckout-item-card">
                                <img src={item.image} alt={item.name} className="pharmacheckout-item-image" />
                                <div className="pharmacheckout-item-info">
                                    <div className="pharmacheckout-item-header">
                                        <h3>{item.name}</h3>
                                        <span>₹{item.price.toFixed(2)}</span>
                                    </div>
                                    <p>30 tablets | Prescription Medicine</p>
                                    <div className="pharmacheckout-item-footer">
                                        <div className="pharmacheckout-quantity-control">
                                            <button onClick={() => updateQuantity(item.id, -1)}><i className="fas fa-minus"></i></button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}><i className="fas fa-plus"></i></button>
                                        </div>
                                        <button className="pharmacheckout-remove-btn" onClick={() => removeItem(item.id)}>
                                            <i className="fas fa-trash"></i> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pharmacheckout-card">
                        <h2><i className="fas fa-truck"></i> Shipping Information</h2>
                        <form onSubmit={handleShippingSubmit} noValidate>

                            <div className="pharmacheckout-form-row">
                                <div className="pharmacheckout-form-group">
                                    <label>First Name</label>
                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder={errors.firstName || 'First Name'} className={errors.firstName ? 'input-error' : ''} />
                                </div>
                                <div className="pharmacheckout-form-group">
                                    <label>Last Name</label>
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder={errors.lastName || 'Last Name'} className={errors.lastName ? 'input-error' : ''} />
                                </div>
                            </div>

                            <div className="pharmacheckout-form-row">
                                <div className="pharmacheckout-form-group full-width">
                                    <label>Address</label>
                                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder={errors.address || 'Address'} className={errors.address ? 'input-error' : ''} />
                                </div>
                            </div>

                            <div className="pharmacheckout-form-row">
                                <div className="pharmacheckout-form-group">
                                    <label>City</label>
                                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder={errors.city || 'City'} className={errors.city ? 'input-error' : ''} />
                                </div>
                                <div className="pharmacheckout-form-group">
                                    <label>State</label>
                                    <select name="state" value={formData.state} onChange={handleInputChange} className={errors.state ? 'input-error' : ''}>
                                        <option value="">Select</option>
                                        {[
                                            'Maharashtra', 'Gujarat', 'Karnataka', 'Tamil Nadu', 'Delhi', 'Rajasthan',
                                            'Punjab', 'Uttar Pradesh', 'West Bengal', 'Kerala', 'Madhya Pradesh', 'Andhra Pradesh',
                                            'Bihar', 'Odisha', 'Haryana', 'Chhattisgarh', 'Jharkhand', 'Assam', 'Himachal Pradesh', 'Goa'
                                        ].map(state => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                    </select>
                                    {errors.state && <span className="error-text">{errors.state}</span>}
                                </div>
                            </div>

                            <div className="pharmacheckout-form-row">
                                <div className="pharmacheckout-form-group full-width">
                                    <label>ZIP Code</label>
                                    <input type="text" name="zip" value={formData.zip} onChange={handleInputChange} placeholder={errors.zip || 'ZIP Code'} className={errors.zip ? 'input-error' : ''} />
                                </div>
                            </div>

                            <button type="submit" className="pharmacheckout-checkout-btn">Submit Shipping Info</button>
                        </form>
                    </div>

                    <div className="pharmacheckout-card">
                        <h2><i className="fas fa-credit-card"></i> Payment Method</h2>
                        {['Credit Card', 'PayPal', 'Insurance Payment'].map(method => (
                            <div key={method} className={`pharmacheckout-payment-option ${selectedPayment === method ? 'selected' : ''}`} onClick={() => handlePaymentSelect(method)}>
                                {method === 'Credit Card' && <i className="fab fa-cc-visa"></i>}
                                {method === 'PayPal' && <i className="fab fa-paypal"></i>}
                                {method === 'Insurance Payment' && <i className="fas fa-prescription-bottle-alt"></i>}
                                {` ${method} `}
                                {selectedPayment === method
                                    ? <i className="fas fa-check-circle"></i>
                                    : <i className="far fa-circle"></i>}
                            </div>
                        ))}
                        <div className="pharmacheckout-secure-payment">
                            <h3><i className="fas fa-shield-alt"></i> Secure Payment</h3>
                            <p>Your payment information is processed securely. We don't store your card details.</p>
                        </div>
                    </div>
                </section>

                <aside className="pharmacheckout-summary-section">
                    <div className="pharmacheckout-card">
                        <h2><i className="fas fa-receipt"></i> Order Summary</h2>
                        <div className="pharmacheckout-summary-item"><span>Subtotal ({items.length} items)</span><span>₹{subtotal.toFixed(2)}</span></div>
                        <div className="pharmacheckout-summary-item"><span>Shipping</span><span>₹0.00</span></div>
                        <div className="pharmacheckout-summary-item"><span>Tax</span><span>₹{tax.toFixed(2)}</span></div>
                        <div className="pharmacheckout-coupon-row">
                            <input type="text" placeholder="Promo code" className="pharmacheckout-coupon-input" />
                            <button className="pharmacheckout-apply-btn">Apply</button>
                        </div>
                        <div className="pharmacheckout-total-row">
                            <span>Total</span>
                            <span className="pharmacheckout-total-amount">₹{total.toFixed(2)}</span>
                        </div>
                        <button className="pharmacheckout-checkout-btn"><i className="fas fa-lock"></i> Complete Secure Payment</button>
                        <p className="pharmacheckout-terms">By completing your purchase you agree to our <a href="#">Terms of Service</a> and acknowledge our <a href="#">Privacy Policy</a>.</p>
                        <div className="pharmacheckout-support"><i className="fas fa-headset"></i> Need help? <a href="#">Contact Support</a></div>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default CheckoutPage;
