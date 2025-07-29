import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import DrugForm from './components/admin/DrugForm';
import EditDrug from './components/admin/EditDrug';

function App() {
  return (
    <Routes>
      {/* User routes */}
      <Route path="/" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Admin routes */}
      <Route path="/admin-login" element={<AdminLoginPage />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/create-drug" element={<DrugForm />} />
      <Route path="/edit-drug/:id" element={<EditDrug />} />
    </Routes>
  );
}

export default App;
