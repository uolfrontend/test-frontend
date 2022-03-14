import ViewUser from "./ViewUser";
import { useContext, useState, useEffect } from 'react'
import UsersContext from '../../context/UsersContext'
import { Modal } from "react-bootstrap";
import AddUser from '../AddUser/AddUser'
import { PersonOutline } from '@mui/icons-material/';
import Banner from "../Banner/Banner";
import UsersCount from "../ViewUser/UsersCount"

function UsersList({ user }) {

    const { userData, newUserData, setNewUserData, createUser } = useContext(UsersContext)

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    // useEffect(() => {
    //     handleClose()
    // }, [userData])

    useEffect(() => {
        handleClose()
    }, [userData])

    const mTop = 'mt-3'

    return (
        <>
            <Banner />
            <div className="mainDiv py-4 px-5">
                <div className="containerHeading">
                    <div className="heading pt-5 pb-4">
                        <PersonOutline fontSize="large" className="mb-2" />
                        <h2 >Painel de Clientes</h2>
                    </div>
                </div>

                <div className='descricao'>
                    <div className="info">
                        <h5>Listagem de usuários</h5>
                        <p className='description'>Escolha um cliente para visualizar os detalhes</p>
                    </div>
                    <div>
                        <button onClick={handleShow} className="btn btn-warning py-3 px-5" data-toggle="modal"><span>Novo Usuário</span></button>
                    </div>
                </div>

                <div className="lista w-100">
                    {
                        userData?.map((user) => (
                            <div key={user.id}>
                                <ViewUser user={user} />
                            </div>
                        ))
                    }
                </div>
                <UsersCount />

                <div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="px-4 py-2">
                                Novo Usuário
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <AddUser>

                            </AddUser>
                        </Modal.Body>
                        {/* <Modal.Footer>
                            <Button onClick={handleClose} variant="secondary">
                            Fechar
                            </Button>
                        </Modal.Footer> */}
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default UsersList
