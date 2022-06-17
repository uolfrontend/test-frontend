import { useContext, useState } from 'react';
import React from 'react';
import UsersContext from '../../context/UsersContext';
import { Button } from 'react-bootstrap';

function ConfirmDeleteUser({ userOnEditing }) {
  const { deleteUser, handleCloseConfirm, handleCloseModal } =
    useContext(UsersContext);

  const handleDelete = () => {
    // handleShowConfirm()
    deleteUser(userOnEditing.id);
    handleCloseConfirm();
    handleCloseModal();
  };

  return (
    <>
      <div className='d-flex justify-content-around'>
        <Button onClick={handleDelete} className='btn-danger'>
          Sim
        </Button>
        <Button onClick={handleCloseConfirm} className='btn-dark'>
          Não
        </Button>
      </div>
    </>
  );
}

export default ConfirmDeleteUser;
