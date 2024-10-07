import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ActivateSim from './pages/ActivateSim';
import DeactivateSim from './pages/DeactivateSim';
import SimDetails from './pages/SimDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>SIM Card Activation Service</h1>
        <nav>
  <ul>
    <li><a href="/">Activate SIM</a></li>
    <li><a href="/deactivate">Deactivate SIM</a></li>
    <li><a href="/sim-details">SIM Details</a></li>
  </ul>
</nav>

        <Routes>
          <Route path="/" element={<ActivateSim />} />
          <Route path="/deactivate" element={<DeactivateSim />} />
          <Route path="/sim-details" element={<SimDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
