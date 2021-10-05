import React, {useState, useEffect} from "react";
import axios from "axios";

import MastHead from "../src/blocks/MastHead";
import Panel from "../src/blocks/Panel";

import FigureTitle from "../src/components/FigureTitle";
import HorizontalRule from "../src/components/HorizontalRule";
import Description from "../src/components/Description";
import Card from "../src/components/Card";
import Disclaimer from "../src/components/Disclaimer";

export default function Home() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/customers', {
        responseType: "json"
      })
      .then(res => {
        setCustomers(res.data);
      })
      .catch(err => {
        alert("Server indisponível. Erro: " + err.message);
      });
  }, []);

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
            title="Listagem de usuários" 
            subtitle="Escolha um cliente para visualizar os detalhes"
            buttonText="Novo cliente"
            buttonVariant="primary"
            buttonHref="/cadastrar"
          />
          {
            customers.map(customer => 
              <Card 
                key={customer.id}
                name={customer.name}
                email={customer.email}
                cpf={customer.id}
                phone={customer.phone}
                status={customer.status}
                href={`/clientes/${customer.id}`}
              />
            )
          }
          <Disclaimer 
            customers={customers.length}
          />
        </Panel>
      </main>
    </>
  );
}
