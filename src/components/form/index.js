import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { submitForm } from "../../services/clients";
import { useNotification } from "react-hook-notification";
import { useForm } from "./hooks";

import {
  isEmpty,
  cpfValidator,
  phoneValidator,
  emailValidator,
  clientName,
} from "../../helpers";

import "./style.css";

export default function Form(props) {
  const { client, formType } = props;
  const initialValues = {
    name: formType == "update" ? client.name : "",
    id: formType == "update" ? client.id : "",
    email: formType == "update" ? client.email : "",
    phone: formType == "update" ? client.phone : "",
    status: formType == "update" ? client.status : "",
  };
  const form = useForm({
    initialValues,
    validate: function (field) {
      const errors = {};
      if (Array.from(field.name).length < 3) errors.name = "Nome Curto demais";
      if (isEmpty(field.name)) errors.name = "Campo nome é obrigatório";
      if (!cpfValidator(field.id)) errors.id = "CPF Inválido.";
      if (isEmpty(field.id)) errors.id = "Campo CPF é obrigatório.";
      if (!emailValidator(field.email)) errors.email = "E-Mail Inválido.";
      if (isEmpty(field.email)) errors.email = "Campo E-MAIL é obrigatório.";
      if (!phoneValidator(field.phone))
        errors.phone = "Número de telefone inválido";
      if (isEmpty(field.status) || field.status.toLowerCase() === "selecione")
        errors.status = "Selecione um status para o cliente.";

      return errors;
    },
  });

  const navigate = useNavigate();

  const notification = useNotification();

  const options = [
    { value: "", text: "Selecione" },
    { value: "inactive", text: "Desativado" },
    { value: "active", text: "Ativo" },
    { value: "disabled", text: "Desativado" },
    { value: "waiting", text: "Aguardando" },
  ];

  function submit() {
    const isValid = Object.keys(form.errors);
    if (isValid.length > 0)
    {
      notification.warning({
        text: "Algo está errado, favor preencher todos os campos corretamente antes de enviar o formulário",
        showButtonClose: false,
        showProgressBar: false
      });
      return
    };

    submitForm(form.values, formType);
    notification.success({
      showButtonClose: false,
      showProgressBar: false,
      text: `Sucesso ao Adicionar ${clientName(form.values.name)}`
    });
    navigate("/");
  }

  return (
    <div className="form">
      <form onSubmit={(event) => (event.preventDefault(), submit(event))}>
        <div className="fields">
          <div className="form-field">
            <input
              name="name"
              placeholder="Nome"
              type="text"
              value={form.values.name}
              onBlur={(event) => form.handleBlur(event)}
              onChange={(event) => form.handleChange(event)}
            />
            {form.touched.name && form.errors.name && (
              <p className="error-message">{form.errors.name}</p>
            )}
          </div>
          <div className="form-field">
            <input
              name="id"
              placeholder="CPF"
              type="text"
              value={form.values.id}
              onBlur={(event) => form.handleBlur(event)}
              onChange={(event) => form.handleChange(event)}
            />
            {form.touched.id && form.errors.id && (
              <p className="error-message">{form.errors.id}</p>
            )}
          </div>
          <div className="form-field">
            <input
              name="email"
              placeholder="E-mail"
              type="text"
              value={form.values.email}
              onBlur={(event) => form.handleBlur(event)}
              onChange={(event) => form.handleChange(event)}
            />
            {form.touched.email && form.errors.email && (
              <p className="error-message">{form.errors.email}</p>
            )}
          </div>
          <div className="form-field">
            <input
              name="phone"
              placeholder="Telefone"
              type="text"
              value={form.values.phone}
              onBlur={(event) => form.handleBlur(event)}
              onChange={(event) => form.handleChange(event)}
            />
            {form.touched.phone && form.errors.phone && (
              <p className="error-message">{form.errors.phone}</p>
            )}
          </div>
          <div className="form-field">
            <select
              name="status"
              value={form.values.status}
              onBlur={(event) => form.handleBlur(event)}
              onChange={(event) => form.handleChange(event)}
            >
              {options.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.text}
                </option>
              ))}
            </select>

            {form.touched.status && form.errors.status && (
              <p className="error-message">{form.errors.status}</p>
            )}
          </div>
        </div>
        <div className="button-container">
          <input type="submit" className="btn btn-submit" value="Enviar" />
          <Link to="/" className="btn btn-cancel" type="button">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
