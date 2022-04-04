import axios from "axios";
import { isNull } from "../helpers";

const getClientList = async function () {
  try {
    const { customers } = await axios("/customers.json").then(
      (response) => response.data
    );
    localStorage.setItem("clients", JSON.stringify(customers));
    return customers || [];
  } catch (error) {
    console.error(error);
  }
};

const getClient = function (clientId) {
  try {
    if (!clientId) {
      throw new Error({ status: 401, message: "Não há cliente selecionado." });
    }

    const clientList = JSON.parse(localStorage.getItem("clients"));
    const selectedClient = clientList.find((client) => client.id === clientId);

    if (isNull(selectedClient)) {
      throw new Error({ status: 404, message: "Cliente não encontrado." });
    }
    return selectedClient;
  } catch (error) {
    throw error;
  }
};

const createClient = function (client) {
  try {
    if (!client) {
      throw new Error({
        message: "você precisa preencher os dados do cliente antes de salvar",
        status: "error",
      });
    }
    const clients = JSON.parse(localStorage.getItem("clients"));
    clients.push(client);
    localStorage.clear();
    localStorage.setItem("clients", JSON.stringify(clients));
    return { message: "cliente criado com sucesso", status: "success" };
  } catch (error) {
    console.error(error);
    return error;
  }
};

const updateClient = function (client) {
  try {
    if (!client) {
      throw new Error({
        message: "Nenhum cliente selecionado",
        status: "error",
      });
    }

    const clientList = JSON.parse(localStorage.getItem("clients"));
    if (!clientList.find(({ id }) => id == client.id)) {
      throw new Error({ message: "Cliente não encontrado", status: "error" });
    }

    const newClientList = clientList.filter(({ id }) => id != client.id);
    newClientList.push(client);
    localStorage.clear();
    localStorage.setItem("clients", JSON.stringify(newClientList));
    return { message: "cliente atualizado com sucesso", status: "success" };
  } catch (error) {
    console.error(error);
    return error;
  }
};

const removeClient = function (client) {
  try {
    if (!client) {
      throw new Error({
        message: "Nenhum cliente selecionado",
        status: "error",
      });
    }
    const clientList = JSON.parse(localStorage.getItem("clients"));
    if (!clientList.find(({ id }) => id == client.id)) {
      throw new Error({
        message: "Cliente não encontrado",
        status: "error",
      });
    }
    const newClientList = clientList.filter(({ id }) => id != client.id);
    localStorage.clear();
    localStorage.setItem("clients", JSON.stringify(newClientList));
    return { message: "cliente removido com sucesso", status: "success" };
  } catch (error) {
    console.error(error);
    return error;
  }
};

const submitForm = function (client, formType) {
  switch (formType) {
    case "update":
      updateClient(client);
      break;
    case "create":
      createClient(client);
      break;
    case "remove":
      removeClient(client);
      break;
  }
};

export { getClientList, getClient, createClient, updateClient, submitForm };
