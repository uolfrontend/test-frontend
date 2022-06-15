import './App.css'
import UsersList from './components/ViewUser/UsersList'
import { UsersProvider } from './context/UsersContext'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

function App() {

  useEffect(() => axios
    .get('https://thingproxy.freeboard.io/fetch/https://test-frontend-uolpp.web.app/customers.json')
    .then(function (response) {
      const endpointData = response.data;
      console.log(endpointData);
      setUserData(endpointData)
      console.log(userData);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    }), []);

  return (
    <UsersProvider>
      <div className="container-x1">
        <div className="table-responsive">
          <div className="table-wrapper">
            <UsersList />
          </div>
        </div>
      </div>
      <div>
        <></>
      </div>
    </UsersProvider>
  )
}

export default App
