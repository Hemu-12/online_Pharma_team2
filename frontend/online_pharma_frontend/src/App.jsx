import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PharmaCatalog from './components/PharmaCatalog';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CheckoutPage from './components/CheckoutPage';
import OrderHistory from './components/OrderHistory';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/catalog" element={<PharmaCatalog />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
