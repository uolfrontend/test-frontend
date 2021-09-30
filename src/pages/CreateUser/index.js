// Dependencies
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import Header from '../../components/Header';
import SimpleInput from '../../components/SimpleInput';
import InputMask from '../../components/InputMask';
import { showToast } from '../../components/Alert';

// Imagens
import userImage from '../../assets/user.png';

// Styles
import { Container, Titles, BlockUsers, BlockButtons } from './styles';

function CreateUser() {
  const formRef = useRef();
  const history = useHistory();

  const [status, setStatus] = useState();

  async function handleSubmit(data) {
    let getItem;

    if (!data.name) {
      showToast({
        type: 'error',
        message: 'Preencha um Nome',
      });

      return;
    }

    if (!data.email) {
      showToast({
        type: 'error',
        message: 'Preencha um E-mail',
      });

      return;
    }

    // Valida E-mail
    const regEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (regEmail.test(data.email) === false) {
      showToast({
        type: 'error',
        message: 'Preencha um E-mail válido',
      });

      return;
    }

    if (!data.cpf) {
      showToast({
        type: 'error',
        message: 'Preencha um CPF',
      });

      return;
    }

    // Valida CPF
    const regCpf =
      /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/;

    if (regCpf.test(data.cpf) === false) {
      showToast({
        type: 'error',
        message: 'Preencha um CPF válido',
      });

      return;
    }

    if (!data.phone) {
      showToast({
        type: 'error',
        message: 'Preencha um Número de Telefone',
      });

      return;
    }

    if (!status) {
      showToast({
        type: 'error',
        message: 'Escolha um Status',
      });

      return;
    }

    const user = {
      id: data.cpf,
      name: data.name,
      email: data.email,
      phone: data.phone,
      status,
    };

    if (localStorage.getItem('item')) {
      getItem = JSON.parse(localStorage.getItem('item'));
      console.log(getItem);
    }

    getItem.push(user);
    localStorage.setItem('item', JSON.stringify(getItem));

    showToast({
      type: 'success',
      message: 'Usuário criado com sucesso',
    });
    history.goBack();
  }

  const statusArray = [
    { value: '', label: 'Selecione' },
    { value: 'active', label: 'active' },
    { value: 'inactive', label: 'inactive' },
    { value: 'waiting', label: 'waiting' },
    { value: 'disabled', label: 'disabled' },
  ];

  return (
    <Container>
      <Header />

      <div className="container">
        <h1>
          <img src={userImage} alt="" />
          Painel de Clientes
        </h1>

        <Titles>
          <div>
            <h2>Novo Usuário</h2>
            <p>Informe os Campos a Seguir para criar um novo usuário:</p>
          </div>
        </Titles>

        <BlockUsers ref={formRef} onSubmit={handleSubmit}>
          <SimpleInput name="name" placeholder="Nome" type="text" />
          <SimpleInput name="email" placeholder="E-mail" />
          <InputMask
            name="cpf"
            placeholder="CPF"
            mask="999.999.999-99"
            type="text"
          />
          <InputMask
            name="phone"
            placeholder="Celular"
            mask="(99)99999-9999"
            type="text"
          />
          <label htmlFor="select" className="input-select" />
          Status:
          <select
            id="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {statusArray.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <BlockButtons>
            <button className="edit-button" type="submit">
              Criar
            </button>
            <button
              className="back-button"
              type="button"
              onClick={() => history.goBack()}
            >
              Voltar
            </button>
          </BlockButtons>
        </BlockUsers>
      </div>
    </Container>
  );
}

export default CreateUser;
