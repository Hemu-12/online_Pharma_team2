import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PharmaCatalog from './components/PharmaCatalog';
import OrderHistory from './components/OrderHistory';
import CheckoutPage from './components/CheckoutPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/catalog" element={<PharmaCatalog />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;