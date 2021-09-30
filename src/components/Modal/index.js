// Dependencies
import React, { useRef, useState } from 'react';
import api from '../../services/api';

// Components
import SimpleInput from '../SimpleInput';
import { showToast } from '../Alert';
import Loader from '../Loader';

// Styles
import {
  Container,
  Content,
  FormContent,
  ButtonSubmit,
  ButtonOutline,
} from './styles';

function Modal({ setModal, modal, setItems, item }) {
  const formRef = useRef();
  const [loader, setLoader] = useState(false);

  async function getAllItems() {
    await api.get(`/items/index/${item.createdById._id}`).then((response) => {
      setItems(response.data);
    });
  }

  async function editItem(data, { reset }) {
    setLoader(true);

    try {
      await api.put(`items/update/${item._id}`, {
        title: data.title,
      });

      showToast({
        type: 'success',
        message: 'Item editado com sucesso!',
      });

      getAllItems();
      setModal(false);
      setLoader(false);
      reset();
    } catch (err) {
      console.log(err);
      showToast({
        type: 'error',
        message: 'Ops, algo deu errado. Tente Novamente!',
      });
      reset();
      setLoader(false);
    }
  }

  return (
    <Container visible={modal}>
      <Loader loader={loader} />

      <Content>
        <h2>Editando Item</h2>

        <FormContent ref={formRef} onSubmit={editItem}>
          <SimpleInput name="title" placeholder="Alteração..." type="text" />
          <ButtonSubmit type="submit">Atualizar</ButtonSubmit>
        </FormContent>

        <ButtonOutline onClick={() => setModal(false)} type="button">
          Cancelar
        </ButtonOutline>
      </Content>
    </Container>
  );
}

export default Modal;
