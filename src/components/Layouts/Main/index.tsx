import React from 'react';
import { FiUser } from 'react-icons/fi';

import Header from '../../Header';

import { Container, Content, TitleWrapper, Title, Hr } from './styles';

const Main: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>
        <TitleWrapper>
          <FiUser size={40} />
          <Title>Painel de clientes</Title>
        </TitleWrapper>
        <Hr />
        {children}
      </Content>
    </Container>
  );
};

export default Main;
