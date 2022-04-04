import React from "react";
import { Header, Form } from "../../components";

import "./style.css";

export default function CreateClient() {
  return (
    <div id="create-client">
      <Header title="Painel de Clientes">
        <h3>Novo Usuário</h3>
      </Header>
      <Form formType="create" />
    </div>
  );
}
