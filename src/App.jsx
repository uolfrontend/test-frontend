import React from 'react';
import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
