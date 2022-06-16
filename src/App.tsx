import React, { useState } from 'react'
import './App.css'
import { AppRoutes } from './Routes/Routes'
import Header from './components/header';
import { Container, Title, Divider, TitleContainer } from './style';
import {User} from 'tabler-icons-react';

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <Header />
          <Container>
              <TitleContainer>
                  <User size={30} />
                  <Title>Painel de clientes</Title>
              </TitleContainer>
              <Divider />
            <AppRoutes />
          </Container>
      </>
  )
}

export default App
