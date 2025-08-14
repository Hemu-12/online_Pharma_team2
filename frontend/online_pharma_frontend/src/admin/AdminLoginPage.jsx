import React, { useState } from 'react';
import './AdminLoginPage.css';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:8080/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminId, password }),
      });

      const result = await res.text();

      if (result === 'Login successful') {
        navigate('/admin-dashboard');
      } else {
        setError('Invalid admin ID or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Server error, try again later');
    }
  };

  return (
    <div className="admin-page-wrapper">
      <nav className="navbar">
        <h1>PharmaCare</h1>
      </nav>
      <div className="admin-login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Admin ID:
            <input
              type="text"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              required
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
