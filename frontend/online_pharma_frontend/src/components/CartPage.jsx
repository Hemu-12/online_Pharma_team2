import React from 'react';
import './CartPage.css';

const CartPage = ({ cartItems, setCartItems }) => {
  const increase = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
  };

  const decrease = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updated);
  };

  const remove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
  };

 const total = (cartItems || []).reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);


  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {(cartItems || []).length === 0 ? (

        <p>Cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.name}</span>
                <div className="controls">
                  <button onClick={() => decrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increase(item.id)}>+</button>
                  <span>₹{item.price * item.quantity}</span>
                  <button onClick={() => remove(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;
