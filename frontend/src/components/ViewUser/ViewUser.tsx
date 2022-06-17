import { useContext, useState } from 'react';
import UsersContext from '../../context/UsersContext';
import { Modal, Button } from 'react-bootstrap';
import EditUser from '../AddUser/EditUser';
import { FiberManualRecord } from '@mui/icons-material/';
import './ViewUser.css';

function ViewUser({ user }) {
  // SHOW EDIT MODAL
  const [showEditModal, setShowEditModal] = useState(false);
  const handleShowModal = () => setShowEditModal(true);
  const handleCloseModal = () => setShowEditModal(false);

  return (
    <div className='line'>
      <div className='mediaDiv name-email-cpf-phone'>
        <div className='mediaItem mediaItem1st'>
          <td className='cell'>
            <strong>{user.name}</strong>
            <br></br>
            {user.email}
          </td>
        </div>
        <div className='mediaItem'>
          <td className='cell'>
            <strong>{user.id}</strong>
            <br></br>
            {user.phone}
          </td>
        </div>
      </div>

      <div className='mediaDiv status-edit'>
        <div className='mediaItem'>
          <td className='cell'>
            {/* {user.status} */}
            {user.status === 'Ativo' ||
              (user.status === 'active' && (
                <>
                  <FiberManualRecord className='text-success' />
                  <>Ativo</>
                </>
              ))}

            {user.status === 'active' ||
              (user.status === 'Ativo' && (
                <>
                  <FiberManualRecord className='text-success' />
                  <>Ativo</>
                </>
              ))}

            {user.status === 'Aguardando ativação' ||
              (user.status === 'waiting' && (
                <>
                  <FiberManualRecord className='text-warning' />
                  <>Aguardando ativação</>
                </>
              ))}
            {user.status === 'waiting' ||
              (user.status === 'Aguardando ativação' && (
                <>
                  <FiberManualRecord className='text-warning' />
                  <>Aguardando ativação</>
                </>
              ))}

            {user.status === 'Inativo' ||
              (user.status === 'inactive' && (
                <>
                  <FiberManualRecord className='text-danger' />
                  <>Inativo</>
                </>
              ))}

            {user.status === 'inactive' ||
              (user.status === 'Inativo' && (
                <>
                  <FiberManualRecord className='text-danger' />
                  <>Inativo</>
                </>
              ))}

            {user.status === 'Desativado' ||
              (user.status === 'disabled' && (
                <>
                  <FiberManualRecord className='text-secondary' />
                  <>Desativado</>
                </>
              ))}

            {user.status === 'disabled' ||
              (user.status === 'Desativado' && (
                <>
                  <FiberManualRecord className='text-secondary' />
                  <>Desativado</>
                </>
              ))}
          </td>
        </div>

        <div className='mediaItem'>
          <td className='cell'>
            <button
              onClick={handleShowModal}
              className='btn-custom py-2 px-5'
              data-toggle='modal'
            >
              Editar
            </button>{' '}
            <br></br>
          </td>
        </div>
      </div>

      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className='px-4 py-2'>Editar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUser userOnEditing={user}></EditUser>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ViewUser;
