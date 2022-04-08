import React from 'react';

import Logo from '../../assets/images/logo.png';

import { Container, Image } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Image src={Logo} alt="UOL Logo" />
    </Container>
  );
};

export default Header;
