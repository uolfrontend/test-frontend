import { useContext, useState } from 'react'
import UsersContext from '../../context/UsersContext'
import { Modal, Button } from "react-bootstrap";
import EditUser from '../AddUser/EditUser'
import { FiberManualRecord } from '@mui/icons-material/';


function ViewUser({ user }) {

    // SHOW EDIT MODAL
    const [showEditModal, setShowEditModal] = useState(false)
    const handleShowModal = () => setShowEditModal(true)
    const handleCloseModal = () => setShowEditModal(false)

    return (
        <>
            <td className='celula'>
                <strong>
                    {user.name}
                </strong>
                <br></br>{user.email}</td>
            <td className='celula'>
                <strong>
                    {user.id}
                </strong>
                <br></br>{user.phone}</td>
            <td className='celula'>

                {user.status === 'Ativo' && (
                    <FiberManualRecord className='text-success' />
                )}
                {user.status === 'active' && (
                    <FiberManualRecord className='text-success' />
                )}

                {user.status === 'Aguardando ativação' && (
                    <FiberManualRecord className='text-warning' />
                )}

                {user.status === 'waiting' && (
                    <FiberManualRecord className='text-warning' />
                )}

                {user.status === 'Inativo' && (
                    <FiberManualRecord className='text-danger' />
                )}
                {user.status === 'inactive' && (
                    <FiberManualRecord className='text-danger' />
                )}

                {user.status === 'Desativado' && (
                    <FiberManualRecord className='text-secondary' />
                )}
                {user.status === 'disabled' && (
                    <FiberManualRecord className='text-secondary' />
                )}

                {user.status}</td>

            <td className='celula'>
                <Button onClick={handleShowModal} className="btn btn-warning editarBtn py-3 px-5" id="editar" data-toggle="modal">Editar</Button> <br></br>
            </td>

            <Modal show={showEditModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="px-4 py-2">
                        Editar Usuário
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditUser userOnEditing={user}>

                    </EditUser>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ViewUser
