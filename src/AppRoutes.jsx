import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const AppRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
