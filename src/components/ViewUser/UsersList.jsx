import ViewUser from "./ViewUser";
import { useContext, useState, useEffect } from 'react'
import UsersContext from '../../context/UsersContext'
import { Modal, Button } from "react-bootstrap";
import AddUser from '../AddUser/AddUser'
import { PersonOutline } from '@mui/icons-material/';
import Banner from "../Banner/Banner";
import UsersCount from "../ViewUser/UsersCount"

function UsersList({ user }) {

    const { userData } = useContext(UsersContext)

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    useEffect(() => {
        handleClose()
    }, [userData])

    const mTop = 'mt-3'

    return (
        <div>
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
                        <Button onClick={handleShow} className="btn btn-warning py-3 px-4" data-toggle="modal"><span>Novo Usuário</span></Button>
                    </div>
                </div>

                <table className="lista w-100">

                    <tbody className="lista">
                        {
                            userData?.map((user) => (
                                <tr
                                    key={user.id}
                                    className="linha align-self-center" >
                                    <ViewUser user={user} />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <UsersCount />


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
                </Modal>
            </div>
        </div>
    )
}

export default UsersList
