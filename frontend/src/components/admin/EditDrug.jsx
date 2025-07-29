import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditDrug.css';

const EditDrug = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [drug, setDrug] = useState({ name: '', details: '', price: '' });

  useEffect(() => {
    fetch(`http://localhost:8080/api/drugs/${id}`)
      .then(res => res.json())
      .then(data => setDrug(data))
      .catch(err => console.error('Failed to fetch drug', err));
  }, [id]);

  const handleChange = (e) => {
    setDrug({ ...drug, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8080/api/drugs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(drug),
      });
      if (res.ok) {
        alert('Drug updated successfully');
        navigate('/');
      } else {
        alert('Update failed');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Error updating drug');
    }
  };

  return (
    <>
      <nav className="navbar-edit">
        <h1>Pharmacy</h1>
      </nav>

      <div className="edit-drug-form-container animate">
        <h2>Edit Drug</h2>
        <form className="edit-drug-form" onSubmit={handleUpdate}>
          <label>Drug Name</label>
          <input
            type="text"
            name="name"
            value={drug.name}
            onChange={handleChange}
            placeholder="Drug Name"
            required
          />

          <label>Drug Details</label>
          <textarea
            name="details"
            value={drug.details}
            onChange={handleChange}
            placeholder="Drug Details"
            required
          />

          <label>Price (₹)</label>
          <input
            type="number"
            name="price"
            value={drug.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />

          <button type="submit">Update Drug</button>
        </form>
      </div>
    </>
  );
};

export default EditDrug;
