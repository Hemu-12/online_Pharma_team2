import React from 'react';
import './HomePage.jsx';

const medicines = [
{
    id: 1,
    name: 'Paracetamol 650mg',
    description: 'Fever reducer',
    price: 8.75,
    image: '/images/para.jpg',
    availableQuantity: 15,
},
{
    id: 2,
    name: 'Paracetamol 650mg',
    description: 'Fever reducer',
    price: 8.75,
    image: '/images/para.jpg',
    availableQuantity: 15,
},
{
    id: 3,
    name: 'Paracetamol 650mg',
    description: 'Fever reducer',
    price: 8.75,
    image: '/images/para.jpg',
    availableQuantity: 15,
},
{
    id: 4,
    name: 'Paracetamol 650mg',
    description: 'Fever reducer',
    price: 8.75,
    image: '/images/para.jpg',
    availableQuantity: 15,
},
{
    id: 5,
    name: 'Paracetamol 650mg',
    description: 'Fever reducer',
    price: 8.75,
    image: '/images/para.jpg',
    availableQuantity: 15,
},
{
    id: 6,
    name: 'Paracetamol 650mg',
    description: 'Fever reducer',
    price: 8.75,
    image: '/images/para.jpg',
    availableQuantity: 15,
},
{
    id: 7,
    name: 'Paracetamol 650mg',
    description: 'Fever reducer',
    price: 8.75,
    image: '/images/para.jpg',
    availableQuantity: 15,
},
];

const HomePage = ({ addToCart }) => {
  return (
    <div className="home-container">
      <h2>Available Medicines</h2>
      <div className="medicine-list">
        {medicines.map((med) => (
          <div key={med.id} className="medicine-card">
            <h3>{med.name}</h3>
            <p>{med.description}</p>
            <p>Price: ₹{med.price}</p>
            <button onClick={() => addToCart(med)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
