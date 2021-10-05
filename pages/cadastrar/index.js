import React from "react";
import styled from 'styled-components';

import MastHead from "../../src/blocks/MastHead";
import Panel from "../../src/blocks/Panel";

import FigureTitle from "../../src/components/FigureTitle";
import HorizontalRule from "../../src/components/HorizontalRule";
import Description from "../../src/components/Description";
import Form from "../../src/blocks/Form";

const StyledFormWrapper = styled.div`
  margin: 1.5rem 0;
`;

export default function PageCadastrar() {
  return (
    <>
      <MastHead />
      <main id="main">
        <Panel>
          <FigureTitle 
            imageFile="customers.png"
            imageAlt="Icon of a person"
            copy="Painel de clientes" 
          />
          <HorizontalRule />
          <Description 
            title="Novo usuário" 
            subtitle="Informe os campos a seguir para criar novo usuário:"
          />
          <StyledFormWrapper>
            <Form />
          </StyledFormWrapper>
        </Panel>
      </main>
    </>
  )
}