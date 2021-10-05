import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "../../utils/yupSchema";
import Button from "../../components/Button";

const StyledErrorMessage = styled.p`
  color: red;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  width: 100%;
  max-width: 300px;
  height: 2.5rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;

const StyledLabel = styled.p`
  margin-bottom: 0.5rem;
  margin-top: 0;
  font-size: 0.875rem;
  font-weight: 600;

  &:not(:first-of-type) {
    margin-top: 1.5rem;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  max-width: 300px;
  height: 2.5rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2.5rem;

  button + a {
    margin-left: 1.5rem;
  }
`;

export default function Form({ id, name, email, phone, status }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitted },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if ((id, name, email, phone, status)) {
      setValue("id", id);
      setValue("name", name);
      setValue("email", email);
      setValue("phone", phone);
      setValue("status", status);
    }
  }, [setValue, id, name, email, phone, status])

  const onSubmit = (data) => {
    if ((id, name, email, phone, status)) {
      axios
        .put(`http://localhost:3000/customers/${id}`, data)
        .then(() => {

          alert("Cliente atualizado. Você voltará para tela inicial.");
          window.open("/", "_self");
        })
        .catch((err) => {
          alert("Ocorreu um erro: " + err.message);
        });
    } else {
      axios
        .post(`http://localhost:3000/customers/`, data)
        .then(() => {
          alert("Cliente cadastrado. Se desejar, cadastre outro cliente.");
          window.location.reload();
        })
        .catch((err) => {
          alert("Ocorreu um erro: " + err.message);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel>Nome:</StyledLabel>
      <StyledInput {...register("name")} />
      <StyledErrorMessage>{errors.name?.message}</StyledErrorMessage>

      <StyledLabel>E-mail:</StyledLabel>
      <StyledInput {...register("email")} />
      <StyledErrorMessage>{errors.email?.message}</StyledErrorMessage>

      <StyledLabel>CPF:</StyledLabel>
      <StyledInput {...register("id")} />
      <StyledErrorMessage>{errors.id?.message}</StyledErrorMessage>

      <StyledLabel>Telefone:</StyledLabel>
      <StyledInput {...register("phone")} />
      <StyledErrorMessage>{errors.phone?.message}</StyledErrorMessage>

      <StyledLabel>Status:</StyledLabel>
      <StyledSelect {...register("status")}>
        <option value="Ativo">Ativo</option>
        <option value="Inativo">Inativo</option>
        <option value="Aguardando">Aguardando</option>
        <option value="Desativado">Desativado</option>
      </StyledSelect>
      <StyledErrorMessage>{errors.status?.message}</StyledErrorMessage>

      <StyledButtonsWrapper>
        <Button
          type="submit"
          variant="primary"
          disabled={!isValid && isSubmitted}
        >
          Enviar
        </Button>
        <Button 
          variant="secondary" 
          href="/"
        >
          Voltar
        </Button>
      </StyledButtonsWrapper>
    </form>
  );
}

Form.defaultProps = {
  name: "",
  email: "",
  id: "",
  phone: "",
  status: "",
};

Form.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.string,
  phone: PropTypes.string,
  status: PropTypes.string,
};
