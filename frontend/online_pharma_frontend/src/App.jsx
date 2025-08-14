import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PharmaCatalog from './components/PharmaCatalog';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CheckoutPage from './components/CheckoutPage';
import OrderHistory from './components/OrderHistory';
import CartPage from './components/CartPage';
import Details from './components/Details';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PharmaCatalog />} />
          <Route path="/catalog" element={<PharmaCatalog />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/details" element={<Details />} /> {/* fixed route path */}
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
