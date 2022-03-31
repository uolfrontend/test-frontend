import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Button, Form } from 'react-bootstrap';
import Select from 'react-select';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';

import { UserContext } from '../../../context/UserContext';

const ModalEdit = () => {
  const {
    user,
    handleState,
    isModalOpen,
    usersStatus,
    userStatus,
    setUserStatus,
    schema,
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userPhone,
    setUserPhone,
    editUser
  } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    setUserName(user.name);
    setUserEmail(user.email);
    setUserPhone(user.phone);
    setValue('name', user.name);
    setValue('status', userStatus);
    setValue('id', user.id);
    setValue('email', user.email);
    setValue('phone', user.phone);
    reset();
  }, [user]);

  const onSubmitHandler = (data) => {
    editUser(data);
    reset();
    toast.success('Usuário editado com sucesso!');
  };

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
              <InputMask
                className="default-input disabled"
                type="text"
                disabled
                placeholder="XXX.XXX.XXX-XX"
                mask={'999.999.999-99'}
                {...register('id')}
                value={user.id}
              />
              <div className="invalid-feedback">{errors.id?.message}</div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <InputMask
                className={`default-input ${errors.name ? 'is-invalid' : ''}`}
                {...register('name')}
                type="text"
                placeholder="..."
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  setValue('name', e.target.value);
                }}
              />
              <div className="invalid-feedback">{errors.name?.message}</div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <InputMask
                className={`default-input ${errors.email ? 'is-invalid' : ''}`}
                {...register('email')}
                type="email"
                placeholder="xxx@xxx.xxx"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                  setValue('email', e.target.value);
                }}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <InputMask
                className={`default-input ${errors.phone ? 'is-invalid' : ''}`}
                {...register('phone')}
                type="text"
                placeholder="(XX) 9XXXX-XXXX"
                mask={'(99) 99999-9999'}
                value={userPhone}
                onChange={(e) => {
                  setUserPhone(e.target.value);
                  setValue('phone', e.target.value);
                }}
              />
              <div className="invalid-feedback">{errors.phone?.message}</div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Select
                className={`drop-up ${errors.status ? 'is-invalid' : ''}`}
                noOptionsMessage={() => 'Sem opções'}
                classNamePrefix="react-select"
                placeholder={'Selecionar o status'}
                value={userStatus}
                options={usersStatus}
                isClearable={false}
                onChange={(status) => {
                  setUserStatus(status);
                  setValue('status', status.value);
                }}
              />
              <input type="hidden" {...register('status')} value={userStatus.value} />
              <div className="invalid-feedback">{errors.status?.message}</div>
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
