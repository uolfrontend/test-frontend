import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.scss'

import {ClientContextProvider} from './context/clientContext'

ReactDOM.render(
  <React.StrictMode>
    <ClientContextProvider>
      <App />
    </ClientContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);