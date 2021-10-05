import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
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

export default function ClientInfo() {
  const router = useRouter()
  const { slug } = router.query

  const [customer, setCustomer] = useState([]);
  
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`http://localhost:3000/customers/${slug}`, {
          responseType: "json"
        })
        .then(res => {
          setCustomer(res.data)
          console.log(customer)
        })
        .catch(err => {
          alert("Server indisponível. Erro: " + err.message)
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            title="Editar usuário" 
            subtitle="Informe os campos a seguir para serem editados:"
          />
          <StyledFormWrapper>
            <Form 
              id={customer.id}
              name={customer.name}
              email={customer.email}
              phone={customer.phone}
              status={customer.status}
            />
          </StyledFormWrapper>
        </Panel>
      </main>
    </>
  )
}