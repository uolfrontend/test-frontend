import React from "react";
import { Header, Form } from "../../components";
import { useParams } from "react-router-dom";
import { getClient } from "../../services/clients";

import "./style.css";

export default function UpdateClient() {
  const { id } = useParams();
  let selectedClient = null;

  try {
    selectedClient = getClient(id);
  } catch (error) {
    console.error(error);
  }

  return (
    <div id="update-client">
      <Header title="Painel de Clientes">
        <h3>Editar Usuário</h3>
      </Header>
      <Form client={selectedClient} formType="update" />
    </div>
  );
}
