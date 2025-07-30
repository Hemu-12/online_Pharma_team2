import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PharmaCatalog from './components/PharmaCatalog';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<h2>Welcome to PharmaCare</h2>} />
          <Route path="/catalog" element={<PharmaCatalog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
