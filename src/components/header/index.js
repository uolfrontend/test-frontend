import React from 'react';

import './styles.css';

import logo_uol from './logo_uol_branco.png';

const Header = () => (
    <header id="main-header">
        <img src={logo_uol} alt="logo da Uol"/>
    </header>
);

export default Header;