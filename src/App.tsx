import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Name from './pages/Name/Name';
import Results from './pages/Thumbnail/Results'
import HeroDescription from './pages/Description/HeroDescription';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="/results" element={<Results />} />
        <Route path="/character/:id" element={<HeroDescription />} />
      </Routes>
    </Router>
  );
};

export default App;
