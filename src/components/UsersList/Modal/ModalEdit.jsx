import { useContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Select from 'react-select';

import { UserContext } from '../../../context/UserContext';

import './styles.scss';

const ModalEdit = ({ show }) => {
  const { user, handleState, isModalOpen, usersStatus, userStatus, setUserStatus } =
    useContext(UserContext);
  return (
    <div>
      <Modal show={isModalOpen} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Editar Usuário - {user.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>ID (Documento)</Form.Label>
            <Form.Control type="text" placeholder="XXX.XXX.XXX-XX" value={user.id} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="..." value={user.name} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="xxx@xxx.xxx" value={user.email} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="email" placeholder="(XX) 9XXXX-XXXX" value={user.phone} />
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
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleState}>Fechar</Button>
          <Button>Salvar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalEdit;
