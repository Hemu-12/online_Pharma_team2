import React from 'react';
import './RegisterPage.css';

function RegisterPage() {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
