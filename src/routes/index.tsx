import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import EditUser from '@pages/EditUser';
import Home from '../pages/Home';

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default App;
