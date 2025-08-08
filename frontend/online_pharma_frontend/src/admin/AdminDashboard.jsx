import React, { useEffect, useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';


const AdminDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/drugs')
      .then(res => res.json())
      .then(data => setDrugs(data))
      .catch(err => console.error('Error fetching drugs:', err));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this drug?')) {
      try {
        const res = await fetch(`http://localhost:8080/api/drugs/${id}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          setDrugs(prev => prev.filter(drug => drug.id !== id));
        } else {
          alert('Failed to delete drug');
        }
      } catch (error) {
        console.error('Error deleting drug:', error);
        alert('Error deleting drug');
      }
    }
  };

  const filteredDrugs = drugs.filter(drug =>
    drug.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-dashboard">
      <div className="admin-navbar">
        <div className="admin-logo">PharmaCare</div>

        <div className="admin-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search drug..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <button className="create-drug-btn" onClick={() => navigate('/create-drug')}>
          <FaPlus /> Create Drug
        </button>
      </div>

      <div className="drug-card-container">
        {filteredDrugs.map((drug) => (
          <div key={drug.id} className="drug-card">
            <div className="card-strip" />
            <h3>{drug.name}</h3>
            <p>{drug.details}</p>
            <div className="drug-price">₹{drug.price}</div>
            <div className="card-actions">
              <button onClick={() => navigate(`/edit-drug/${drug.id}`)} className="edit-btn">
                <FaEdit /> Edit
              </button>
              <button onClick={() => handleDelete(drug.id)} className="delete-btn">
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
