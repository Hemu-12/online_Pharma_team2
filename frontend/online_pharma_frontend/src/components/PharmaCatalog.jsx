import React, { useState } from 'react';
import './PharmaCatalog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch, faUser, faPlus, faTimes,
    faShieldAlt, faShippingFast, faUserMd
} from '@fortawesome/free-solid-svg-icons';

const PharmaCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Medications');
  const [sortOption, setSortOption] = useState('Popularity');

  const categories = [
    'All Medications',
    'Pain Relief',
    'Antibiotics',
    'Diabetes',
    'Heart Health',
    'Allergies',
    'Cold & Flu'
  ];

    const drugs = [
    // Pain Relief
    { name: 'Paracetamol', dosage: '500mg Tablets', description: 'Paracetamol', price: '₹20', stock: 'In Stock', image: '/images/paracetamol.jpg', category: 'Pain Relief' },
    { name: 'Ibuprofen', dosage: '200mg Tablets', description: 'Ibuprofen', price: '₹30', stock: 'In Stock', image: '/images/Ibuprofen.jpg', category: 'Pain Relief' },
    { name: 'Aspirin', dosage: '300mg Tablets', description: 'Aspirin', price: '₹25', stock: 'In Stock', image: '/images/Aspirin.jpg', category: 'Pain Relief' },
    { name: 'Naproxen', dosage: '250mg Tablets', description: 'Naproxen', price: '₹40', stock: 'In Stock', image: '/images/Naproxen.jpg', category: 'Pain Relief' },

    // Antibiotics
    { name: 'Amoxicillin', dosage: '500mg Capsules', description: 'Amoxicillin', price: '₹60', stock: 'In Stock', image: '/images/amoxicillin.jpg', category: 'Antibiotics' },
    { name: 'Ciprofloxacin', dosage: '500mg Tablets', description: 'Ciprofloxacin', price: '₹55', stock: 'In Stock', image: '/images/Ciprofloxacin.jpg', category: 'Antibiotics' },
    { name: 'Doxycycline', dosage: '100mg Capsules', description: 'Doxycycline', price: '₹50', stock: 'In Stock', image: '/images/Doxycycline.jpg', category: 'Antibiotics' },
    { name: 'Azithromycin', dosage: '250mg Tablets', description: 'Azithromycin', price: '₹65', stock: 'In Stock', image: '/images/Azithromycin.jpg', category: 'Antibiotics' },

    // Diabetes
    { name: 'Metformin', dosage: '500mg Tablets', description: 'Metformin', price: '₹60', stock: 'In Stock', image: '/images/Metformin.jpg', category: 'Diabetes' },
    { name: 'Glipizide', dosage: '5mg Tablets', description: 'Glipizide', price: '₹75', stock: 'In Stock', image: '/images/Glipizide.jpg', category: 'Diabetes' },
    { name: 'Insulin', dosage: '100 IU/ml Injection', description: 'Insulin', price: '₹150', stock: 'In Stock', image: '/images/Insulin.jpg', category: 'Diabetes' },
    { name: 'Glyburide', dosage: '2.5mg Tablets', description: 'Glyburide', price: '₹50', stock: 'In Stock', image: '/images/Glyburide.jpg', category: 'Diabetes' },

    // Heart Health
    { name: 'Atenolol', dosage: '50mg Tablets', description: 'Atenolol', price: '₹70', stock: 'In Stock', image: '/images/Atenolol.jpg', category: 'Heart Health' },
    { name: 'Lisinopril', dosage: '10mg Tablets', description: 'Lisinopril', price: '₹65', stock: 'In Stock', image: '/images/Lisinopril.jpg', category: 'Heart Health' },
    { name: 'Atorvastatin', dosage: '10mg Tablets', description: 'Atorvastatin', price: '₹85', stock: 'In Stock', image: '/images/Atorvastatin.jpg', category: 'Heart Health' },
    { name: 'Clopidogrel', dosage: '75mg Tablets', description: 'Clopidogrel', price: '₹95', stock: 'In Stock', image: '/images/Clopidogrel.jpg', category: 'Heart Health' },

    // Allergies
    { name: 'Cetirizine', dosage: '10mg Tablets', description: 'Cetirizine', price: '₹30', stock: 'In Stock', image: '/images/Cetirizine.jpg', category: 'Allergies' },
    { name: 'Loratadine', dosage: '10mg Tablets', description: 'Loratadine', price: '₹35', stock: 'In Stock', image: '/images/Loratadine.jpg', category: 'Allergies' },
    { name: 'Fexofenadine', dosage: '120mg Tablets', description: 'Fexofenadine', price: '₹40', stock: 'In Stock', image: '/images/Fexofenadine.jpg', category: 'Allergies' },
    { name: 'Diphenhydramine', dosage: '25mg Tablets', description: 'Diphenhydramine', price: '₹28', stock: 'In Stock', image: '/images/Diphenhydramine.jpg', category: 'Allergies' },

    // Cold & Flu
    { name: 'Phenylephrine', dosage: '10mg Tablets', description: 'Phenylephrine', price: '₹22', stock: 'In Stock', image: '/images/Phenylephrine.jpg', category: 'Cold & Flu' },
    { name: 'Chlorpheniramine', dosage: '4mg Tablets', description: 'Chlorpheniramine', price: '₹25', stock: 'In Stock', image: '/images/Chlorpheniramine.jpg', category: 'Cold & Flu' },
    { name: 'Guaifenesin', dosage: '100mg Tablets', description: 'Guaifenesin', price: '₹33', stock: 'In Stock', image: '/images/Guaifenesin.jpg', category: 'Cold & Flu' },
    { name: 'Dextromethorphan', dosage: '15mg Tablets', description: 'Dextromethorphan', price: '₹29', stock: 'In Stock', image: '/images/Dextromethorphan.jpg', category: 'Cold & Flu' },
];
  const handleSearch = (e) => setSearchTerm(e.target.value);

  const openModal = (drug) => {
    setModalData(drug);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const sortedDrugs = [...drugs]
    .filter(drug =>
      (selectedCategory === 'All Medications' || drug.category === selectedCategory) &&
      drug.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'Price (Low to High)') {
        return parseFloat(a.price.replace('₹', '')) - parseFloat(b.price.replace('₹', ''));
      } else if (sortOption === 'Price (High to Low)') {
        return parseFloat(b.price.replace('₹', '')) - parseFloat(a.price.replace('₹', ''));
      } else if (sortOption === 'Alphabetical (A-Z)') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });



    return (
        <div className="catalog-container">
            <header className="header">
                <div className="header-content">
                    <div className="logo-area">
                        
                        <h1 className="brand-title">Pharma<span className="highlight">Care</span></h1>
                    </div>
                    <div className="search-login">
  <div className="search-box-wrapper">
    <input
      type="text"
      placeholder="Search medications..."
      className="search-box"
      value={searchTerm}
      onChange={handleSearch}
    />
    <FontAwesomeIcon icon={faSearch} className="search-icon" />
  </div>
  <a href="/" className="home-link">Home</a>
</div>

                </div>
            </header>

           <section className="hero-section">
    <div className="hero-content">
        <h2>Your Trusted Pharmaceutical Partner</h2>
        <p>Discover our extensive catalog of FDA-approved medications with complete information and safety details</p>
        <img src="/images/medical.jpg" alt="Pharmacist organizing medication" className="hero-image" />
    </div>
</section>


            <main className="main-content">
                <div className="categories">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="sort-bar">
  <h3>Featured Medications</h3>
  <div className="sort-options">
    <label>Sort by:</label>
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
    >
      <option>Popularity</option>
      <option>Price (Low to High)</option>
      <option>Price (High to Low)</option>
      <option>Alphabetical (A-Z)</option>
    </select>
  </div>
</div>


<div className="drug-grid">
  {sortedDrugs.filter(drug =>
      (selectedCategory === 'All Medications' || drug.category === selectedCategory) &&
      drug.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((drug, index) => (
      <div key={index} className="drug-card">
        <div className="drug-image">
          <img src={drug.image} alt={drug.name} />
        </div>
        <div className="drug-info">
          <div className="drug-header">
            <div>
              <h4>{drug.name}</h4>
              <p>{drug.dosage}</p>
            </div>
            <span className={`stock ${drug.stock === 'In Stock' ? 'in' : 'low'}`}>{drug.stock}</span>
          </div>
          <p className="drug-description">{drug.description}</p>
          <div className="drug-footer">
  <span className="price">{drug.price}</span>
  <button className="view-btn">View</button>
</div>

        </div>
      </div>
    ))}
</div>


                {/*isModalOpen && modalData && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div>
                                    <h3>{modalData.name}</h3>
                                    <p>{modalData.dosage}</p>
                                </div>
                                <button className="close-btn" onClick={closeModal}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="modal-image">
                                    <img src={modalData.image} alt={modalData.name} />
                                </div>
                                <div className="modal-details">
                                    <div className="price-stock">
                                        <span className="modal-price">{modalData.price}</span>
                                        <span className={`stock ${modalData.stock === 'In Stock' ? 'in' : 'low'}`}>{modalData.stock}</span>
                                    </div>
                                    <div className="modal-actions">
                                        <select>
                                            {[1, 2, 3, 4, 5].map(num => (
                                                <option key={num}>{num}</option>
                                            ))}
                                        </select>
                                        <button className="add-cart-btn">Add to Cart</button>
                                    </div>

                                    <div className="modal-info-block">
                                        <h4>Description</h4>
                                        <p>{modalData.description}</p>
                                    </div>
                                    <div className="modal-info-block">
                                        <h4>Dosage</h4>
                                        <p>Adults: 1-2 tablets every 4-6 hours as needed. Do not exceed 6 tablets in 24 hours.</p>
                                    </div>
                                    <div className="modal-info-block">
                                        <h4>Side Effects</h4>
                                        <p>May cause upset stomach, nausea, dizziness, etc. Seek medical help if symptoms worsen.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-extra">
                                <h4>Complete Information</h4>
                                <div className="info-grid">
                                    <div><span>Generic Name:</span><span>{modalData.name}</span></div>
                                    <div><span>Brand Name:</span><span>Advil, Motrin</span></div>
                                    <div><span>Drug Class:</span><span>NSAID</span></div>
                                    <div><span>Pregnancy Category:</span><span>C</span></div>
                                    <div><span>Manufacturer:</span><span>Pfizer Inc.</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )*/}
            </main>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-col">
                        <div className="logo-area">
                            <h3>Pharma<span className="highlight">Care</span></h3>
                        </div>
                        <p>Your trusted partner for pharmaceutical needs. Providing quality medications with care since 2010.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>Home</li>
                            <li>All Medications</li>
                            <li>Prescription Refills</li>
                            <li>Health Blog</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Information</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Shipping Policy</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><FontAwesomeIcon icon={faShieldAlt} /> 123 Medical Ave</li>
                            <li><FontAwesomeIcon icon={faShippingFast} /> (800) 555-HEAL</li>
                            <li><FontAwesomeIcon icon={faUserMd} /> support@pharmacare.com</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2023 PharmaCare. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default PharmaCatalog;