import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import NewUser from './pages/NewUser/NewUser';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-user" element={<NewUser />} />
    </Routes>
  );
};

export default AppRoutes;
