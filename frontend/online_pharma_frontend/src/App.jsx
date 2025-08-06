// src/App.jsx
import { useState } from 'react'
import './App.css'

function App() {
  // Sample drug data
  const drugs = [
    {
      id: 1,
      name: "Amoxicillin",
      description: "Broad-spectrum penicillin-type antibiotic",
      dosage: "500mg tablets",
      uses: "Throat infections, reduces fever, prevents blood clots",
      sideEffects: "Vomiting, Rash, Headache",
      price: 15.00,
      image: "/images/amoxicillin.jpg",
      category: "Antibiotics"
    },
    {
      id: 2,
      name: "Aspirin",
      description: "Nonsteroidal anti-inflammatory drug (NSAID)",
      dosage: "200mg capsules",
      uses: "Reduces inflammation, moderate pain, Reduces feverr",
      sideEffects: "Stomach upset, Heartburn, Mild nausea",
      price: 20.00,
      image: "/images/Aspirin.jpg",
      category: "Pain Relief"
    },
    {
      id: 3,
      name: "Atenolol",
      description: "High blood pressure (hypertension), angina (chest pain)",
      dosage: "50mg tablets",
      uses: "Hypertension (high blood pressure), Angina , Heart attack",
      sideEffects: "Fatigue, Cold hands and feet, Slower heart rate",
      price: 25.00,
      image: "/images/Atenolol.jpg",
      category: "Cardiovascular/ Blood Pressure Medication "
    },
    {
      id: 4,
      name: "Atorvastatin",
      description: "Lower cholesterol",
      dosage: "10mg tablets",
      uses: "Hyperlipidemia , Prevention of cardiovascular disease, High triglyceride levels",
      sideEffects: "Muscle pain or weakness, Diarrhea, Indigestion",
      price: 100,
      image: "/images/Atorvastatin.jpg",
      category: "Cholesterol Control "
    },
    {
      id: 5,
      name: "Azithromycin",
      description: " Macrolide antibiotic",
      dosage: "250mg tablets",
      uses: "Respiratory tract infections, Ear infections, Skin and soft tissue infections",
      sideEffects: "Nausea, Abdominal pain, Headache",
      price: 120,
      image: "/images/Azithromycin.jpg",
      category: "Antibiotics"
    },
    {
      id: 6,
      name: "Cetirizine",
      description: "Antihistamine for allergy relief",
      dosage: "10mg tablets",
      uses: "Allergic rhinitis , Itchy/watery eyes, Skin allergies",
      sideEffects: "Drowsiness, dry mouth, fatigue",
      price: 10.00,
      image: "/images/Cetirizine.jpg",
      category: "Anti-Allergic"
    },
    {
      id: 7,
      name: "Chlorpheniramine",
      description: "Antihistamine for allergy relief",
      dosage: "4mg tablets",
      uses: "Treats hay fever, hives, Itchy throat, eyes, or nose",
      sideEffects: "Drowsiness, dry mouth, upset stomach",
      price: 20.00,
      image: "/images/Chlorpheniramine.jpg",
      category: "Anti-Allergic"
    },
    {
      id: 8,
      name: "Ciprofloxacin",
      description: "Fluoroquinolone antibiotic",
      dosage: "500mg tablets",
      uses: "Urinary tract infections, Bone and joint infections, Typhoid fever",
      sideEffects: "Dizziness, headache, Rash or itching",
      price: 50.00,
      image: "/images/Ciprofloxacin.jpg",
      category: "Antibiotics"
    },
    {
      id: 9,
      name: "Clopidogrel",
      description: "Antiplatelet medication",
      dosage: "75mg tablets",
      uses: "Prevention of heart attack, stent placement, peripheral artery disease (PAD)",
      sideEffects: "Easy bruising, Bleeding (nosebleeds, gums), Rash",
      price: 70.00,
      image: "/images/Clopidogrel.jpg",
      category: "Cardiovascular"
    },
    {
      id: 10,
      name: "Dextromethorphan",
      description: "Cough suppressant ",
      dosage: "20mg tablets",
      uses: "Dry cough, combination with antihistamines, oneurological conditions",
      sideEffects: "Drowsiness, Confusion, Stomach upset",
      price: 70.00,
      image: "/images/Dextromethorphan.jpg",
      category: "Cough & Cold"
    },
    {
      id: 11,
      name: "Diphenhydramine",
      description: "Antihistamine for allergy relief",
      dosage: "25mg tablets",
      uses: "Sneezing, Runny nose, Itchy or watery eyes",
      sideEffects: "Drowsiness, Blurred vision, Constipation",
      price: 10.00,
      image: "/images/Diphenhydramine.jpg",
      category: "Allergy & Cold "
    },
    {
      id: 12,
      name: "Doxycycline",
      description: "Broad-spectrum antibiotic",
      dosage: "100mg tablets",
      uses: "Respiratory infections, Acne and rosacea, Eye infections",
      sideEffects: "Nausea, vomiting, Skin sensitivity to sunlight",
      price: 120,
      image: "/images/Doxycycline.jpg",
      category: "Antibiotic"
    },
    {
      id: 13,
      name: "Fexofenadine",
      description: "Antihistamine for allergy relief",
      dosage: "120mg tablets",
      uses: "Treats hay fever, hives, Sneezing,",
      sideEffects: "Headache, Menstrual cramps, Back pain",
      price: 180,
      image: "/images/Fexofenadine.jpg",
      category: "Antihistamine"
    },
    {
      id: 14,
      name: "Glipizide",
      description: "Antidiabetic",
      dosage: "5mg tablets",
      uses: "Type 2 Diabetes Mellitus",
      sideEffects: "Low blood sugar, Weight gain, Allergic skin reactions",
      price: 120,
      image: "/images/Glipizide.jpg",
      category: "Antidiabetic"
    },
    {
      id: 15,
      name: "Glyburide",
      description: "Oral antidiabetic medication",
      dosage: "2.5mg tablets",
      uses: "Type 2 Diabetes Mellitusr, control blood sugar",
      sideEffects: "Low blood sugar, Weight gain, Heartburn",
      price: 80.00,
      image: "/images/Glyburide.jpg",
      category: "Antidiabetic"
    },
    {
      id: 16,
      name: "Guaifenesin",
      description: "Expectorant",
      dosage: "100mg tablets",
      uses: "Common cold, Bronchitis, other allergy symptoms",
      sideEffects: "Drowsiness, dry mouth, Upper respiratory infections",
      price: 100,
      image: "/images/Guaifenesin.jpg",
      category: "Cough and Cold Medication"
    },
    {
      id: 17,
      name: "Ibuprofen",
      description: "nonsteroidal anti-inflammatory drug (NSAID)",
      dosage: "200mg tablets",
      uses: "Headaches, Toothaches, Menstrual cramps",
      sideEffects: "Stomach pain, Heartburn, Kidney problems",
      price: 40.00,
      image: "/images/Ibuprofen.jpg",
      category: "Pain Relief "
    },
    {
      id: 18,
      name: "Insulin",
      description: "Antihistamine for allergy relief",
      dosage: "100IU/mL ",
      uses: "Type 1 Diabetes, Gestational Diabetes, Diabetic emergencies",
      sideEffects: "Low blood sugar, Injection site reactions, Weight gain",
      price: 600,
      image: "/images/Insulin.jpg",
      category: "Diabetes"
    },
    {
      id: 19,
      name: "Lisinopril",
      description: "Angiotensin-Converting Enzyme inhibitor",
      dosage: "10mg tablets",
      uses: "Hypertension (High Blood Pressure), Congestive Heart Failure, post-heart attack",
      sideEffects: "Lightheadedness, persistent cough, Fatigue",
      price: 50.00,
      image: "/images/Lisinopril.jpg",
      category: "Cardiovascular"
    },
    {
      id: 20,
      name: "Loratadine",
      description: "Antihistamine for allergy relief",
      dosage: "10mg tablets",
      uses: "Allergic rhinitis, Itchy or watery eyes, Skin allergies and rash",
      sideEffects: "Headache, dry mouth, fatigue",
      price: 40.00,
      image: "/images/Loratadine.jpg",
      category: "Anti-Allergic"
    },
    {
      id: 21,
      name: "Metformin",
      description: "Oral anti-diabetic",
      dosage: "500mg tablets",
      uses: "Type 2 Diabetes Mellitus, polycystic ovary syndrome (PCOS), weight management",
      sideEffects: "Abdominal discomfort, Loss of appetite, Metallic taste",
      price: 60.00,
      image: "/images/Metformin.jpg",
      category: "Anti-Diabetic"
    },
    {
      id: 22,
      name: "Naproxen",
      description: "nonsteroidal anti-inflammatory drug (NSAID)",
      dosage: "250mg tablets",
      uses: "Gout attacks, Muscle pain, Back pain",
      sideEffects: "Stomach pain, Heartburn, Headache",
      price: 70.00,
      image: "/images/Naproxen.jpg",
      category: "Pain Relief"
    },
    {
      id: 23,
      name: "paracetamol",
      description: "widely used analgesic & antipyretic ",
      dosage: "500mg tablets",
      uses: "Fever, Headache, Back pain",
      sideEffects: "Generally well-tolerated, Allergic reactions, vomiting",
      price: 25.00,
      image: "/images/paracetamol.jpg",
      category: "Pain Relief"
    },
    {
      id: 24,
      name: "Phenylephrine",
      description: "Decongestant",
      dosage: "10mg tablets",
      uses: "Nasal congestion, Sinus congestion, cold and flu medications",
      sideEffects: "Nervousness, Trouble sleeping, fIrregular heartbeat",
      price: 50.00,
      image: "/images/Phenylephrine.jpg",
      category: "Cold & Allergy Relief"
    }
  ];

  const [cart, setCart] = useState([]);
  const [selectedDrug, setSelectedDrug] = useState(null);

  const addToCart = (drug) => {
    const existing = cart.find(item => item.id === drug.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === drug.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...drug, quantity: 1 }]);
    }
  };

  const removeFromCart = (drugId) => {
    setCart(cart.filter(item => item.id !== drugId));
  };

  const updateQuantity = (drugId, quantity) => {
    if (quantity < 1) {
      removeFromCart(drugId);
    } else {
      setCart(cart.map(item =>
        item.id === drugId ? { ...item, quantity } : item
      ));
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="brand">
          <span style={{ color: '#2563eb', fontWeight: 'bold' }}>Pharma</span>
          <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Care</span>
        </h1>
        <nav className="nav-links">
          <button className="home-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Home
          </button>
        </nav>
      </header>


      <div className="main-content">
        {/* Drug catalog */}
        <div className="drug-catalog">
          <h2>Available Medications</h2>
          <div className="drug-grid">
            {drugs.map(drug => (
              <div key={drug.id} className="drug-card">
                <img 
                  src={drug.image} 
                  alt={`Photo of ₹{drug.name} medication package`} 
                  onClick={() => setSelectedDrug(drug)}
                />
                <h3>{drug.name}</h3>
                <p className="price">₹{drug.price.toFixed(2)}</p>
                <p className="category">{drug.category}</p>
                <div className="drug-actions">
                  <button onClick={() => setSelectedDrug(drug)}>View Details</button>
                  <button onClick={() => addToCart(drug)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart sidebar */}
        <div className="cart-sidebar">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul className="cart-items">
                {cart.map(item => (
                  <li key={item.id}>
                    <span>{item.name} - ₹{item.price.toFixed(2)} × </span>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      style={{ width: '40px', marginRight: '8px' }}
                    />
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <p>Total: ₹{getTotal()}</p>
                <button className="checkout-btn">Proceed to Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Drug details modal */}
      {selectedDrug && (
        <div className="modal-backdrop">
          <div className="modal">
            <button className="close-btn" onClick={() => setSelectedDrug(null)}>✕</button>
            <div className="drug-details">
              <img 
                src={selectedDrug.image} 
                alt={`Detailed photo of ₹{selectedDrug.name} medication`}
              />
              <div className="drug-info">
                <h2>{selectedDrug.name}</h2>
                <p className="price">₹{selectedDrug.price.toFixed(2)}</p>
                <p className="category">{selectedDrug.category}</p>
                <p>{selectedDrug.description}</p>
                <div className="drug-specs">
                  <h4>Dosage:</h4>
                  <p>{selectedDrug.dosage}</p>
                  <h4>Uses:</h4>
                  <p>{selectedDrug.uses}</p>
                  <h4>Possible Side Effects:</h4>
                  <p>{selectedDrug.sideEffects}</p>
                </div>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => {
                    addToCart(selectedDrug);
                    setSelectedDrug(null);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
