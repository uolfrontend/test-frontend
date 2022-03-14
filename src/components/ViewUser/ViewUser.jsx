import { useContext, useState } from 'react'
import UsersContext from '../../context/UsersContext'
import { Modal } from "react-bootstrap";
import EditUser from '../AddUser/EditUser'


function ViewUser({ user }) {

    const { userData, deleteUser, updateUser } = useContext(UsersContext)

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const handleDelete = () => {
        console.log('oiiiiii')
        deleteUser(user.id)
    }

    const handleUpdate = () => {
        console.log('oiiiiii')
        updateUser(user.id)
    }




    return (
        <>
            <div className="linha">
                <div className='celula'>
                    <strong>
                        {user.name}
                    </strong>
                    <br></br>{user.email}</div>
                <div className='celula'>
                    <strong>
                        {user.id}
                    </strong>
                    <br></br>{user.phone}</div>
                <div className='celula'>{user.status}</div>
                <div className='celula'>
                    <button onClick={handleShow} className="btn btn-warning  editarBtn py-3 px-5" id="editar" data-toggle="modal">Editar</button> <br></br>
                </div>
            </div>



            <Modal show={show} onHide={handleClose}>
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
