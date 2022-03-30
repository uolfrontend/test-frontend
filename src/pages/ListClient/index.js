import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Header } from "../../components";
import { clientName, translateStatus } from "../../helpers";

import "./style.css";

export default function ListClient() {
  const clientList = JSON.parse(localStorage.getItem("clients"));
  const [clients] = useState(clientList);

  return (
    <div id="client-list">
      <Header title="Painel de Clientes">
        <div>
          <Link className="btn" to="/create-client">
            Novo Cliente
          </Link>
        </div>
      </Header>
      <div className="card-list">
        {clients.map((client) => (
          <Card title={clientName(client.name)} subtitle={client.email} key={client.id}>
            <div className="card-info">
              <p>{client.id}</p>
              <p>{client.phone}</p>
            </div>
            <div className="client-status">
              {translateStatus(client.status)}
            </div>
            <div className="card-options">
              <Link className="btn btn-outline" to={`/update-client/${client.id}`}>
                editar
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
