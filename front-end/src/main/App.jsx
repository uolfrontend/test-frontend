import "./App.css"
import React from "react"
import { BrowserRouter } from 'react-router-dom'
import Home from '../components/home/Home'

import InputMask from 'react-input-mask';
import Header from '../components/layout/Header'
import Routes from './Routes'


export default props =>


    <BrowserRouter>
        <div className="app">
            <Header />
            <Routes />
        </div>
    </BrowserRouter>

