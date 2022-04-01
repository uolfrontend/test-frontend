import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './pages/Edit/Edit.lazy';
import Store from './pages/Store/Store.lazy';
import List from './pages/List/List';
import SnackbarProvider from 'react-simple-snackbar'

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<List />} />
            <Route path="edit" element={<Edit />} />
            <Route path="store" element={<Store />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
