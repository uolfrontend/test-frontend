// Dependencies
import React from 'react';

// Image
import logoUOL from '../../assets/logo.png';

// Styles
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <img src={logoUOL} alt="" />
    </Container>
  );
}

export default Header;
