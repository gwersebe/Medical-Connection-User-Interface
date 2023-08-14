import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Doctors from './Doctors';
// Import other components here

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Doctors />} />
        {/* Add routes for other components */}
      </Routes>
    </Router>
  );
};

export default App;
