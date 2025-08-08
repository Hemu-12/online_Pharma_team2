import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DrugForm.css';

function DrugForm() {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDrug = {
      name,
      details,
      price: parseFloat(price),
    };

    try {
      const response = await fetch('http://localhost:8080/api/drugs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDrug),
      });

      if (response.ok) {
        alert('Drug added successfully!');
        navigate('/admin-dashboard');
      } else {
        alert('Failed to add drug');
      }
    } catch (error) {
      console.error('Error connecting to backend:', error);
      alert('Error connecting to backend');
    }
  };

  return (
    <>
      <nav className="navbar-drug">
        <div className="navbar-logo">PharmaCare</div>
      </nav>

      <div className="create-drug-form-container">
        <h2>Create New Drug</h2>
        <form onSubmit={handleSubmit} className="create-drug-form">
          <label>Drug Name</label>
          <input
            type="text"
            placeholder="Enter drug name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Drug Details</label>
          <textarea
            rows="4"
            placeholder="Enter 2-3 lines about the drug"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />

          <label>Price (₹)</label>
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <button type="submit">Submit Drug</button>
        </form>
      </div>
    </>
  );
}

export default DrugForm;
