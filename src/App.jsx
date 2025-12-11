// App.js (separate file)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './pages/Portfolio';
import EducationalTour from './pages/EducationalTour';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/educational-tour" element={<EducationalTour />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;