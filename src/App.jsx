import React from 'react';
import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar/Navbar';

import './App.scss';

function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
