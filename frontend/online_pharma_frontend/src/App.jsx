import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PharmaCatalog from './components/PharmaCatalog';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CheckoutPage from './components/CheckoutPage';
import OrderHistory from './components/OrderHistory';
import CartPage from './components/CartPage';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AdminLoginPage from './admin/AdminLoginPage';
import AdminDashboard from './admin/AdminDashboard';
import EditDrug from './admin/EditDrug';
import DrugForm from './admin/DrugForm';
import RegisterPage from './components/RegisterPage';




const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catalog" element={<PharmaCatalog />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/details" element={<Details />} /> {/* fixed route path */}
          <Route path="/navbar" element={<Navbar />} />

          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/edit-drug/:id" element={<EditDrug />} />
          <Route path="/create-drug" element={<DrugForm />} />
          <Route path="/registerpage" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
