import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Button, Form } from 'react-bootstrap';
import Select from 'react-select';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { UserContext } from '../../../context/UserContext';

import './styles.scss';

const ModalEdit = () => {
  const { user, handleState, isModalOpen, usersStatus, userStatus, setUserStatus, schema } =
    useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  useEffect(() => {
    reset();
  }, [user]);

  return (
    <div>
      <Modal show={isModalOpen} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Editar Usuário - {user.name}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>ID (Documento)</Form.Label>
              <Form.Control type="text" placeholder="XXX.XXX.XXX-XX" value={user.id} />
              <p>{errors.id?.message}</p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control {...register('name')} type="text" placeholder="..." value={user.name} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register('email')}
                type="email"
                placeholder="xxx@xxx.xxx"
                value={user.email}
              />
              <p>{errors.email?.message}</p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                {...register('phone')}
                type="text"
                placeholder="(XX) 9XXXX-XXXX"
                value={user.phone}
              />
              <p>{errors.phone?.message}</p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Select
                className="drop-up"
                noOptionsMessage={() => 'Sem opções'}
                classNamePrefix="react-select"
                placeholder={'Selecionar o status'}
                value={userStatus}
                options={usersStatus}
                isClearable={false}
                onChange={(status) => setUserStatus(status)}
              />
              <input type="hidden" {...register('status')} value={userStatus.value} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleState}>Fechar</Button>
            <Button type="submit">Salvar</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalEdit;
