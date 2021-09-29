import React from 'react'
import '../../css/reset.css';
import '../../css/style.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import logoUol from "../../assets/img/uol-logo.svg"
const Header = () => {
  return (
    <header className="header">
      <nav className="header__content">
        <Link to="/"><img className="header__logo" src={logoUol} alt="Logo Uol" /></Link>
      </nav>
    </header> 
  )
}

export default Header
