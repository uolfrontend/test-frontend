import { Form, Button, Modal } from 'react-bootstrap'
import { useContext, useState, useEffect } from 'react'
import UsersContext from '../../context/UsersContext'
import ConfirmDeleteUser from '../ConfirmDeleteUser/ConfirmDeleteUser'

function EditUser({ userOnEditing }) {

    const originalId = userOnEditing.id

    const [name, setName] = useState(userOnEditing.name)
    const [email, setEmail] = useState(userOnEditing.email)
    const [id, setNewId] = useState(userOnEditing.id)
    const [phone, setPhone] = useState(userOnEditing.phone)
    const [status, setStatus] = useState(userOnEditing.status)

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [idError, setIdError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [statusError, setStatusError] = useState('')

    const { updateUser, showConfirmModal, handleShowConfirm, handleCloseConfirm, handleCloseModal } = useContext(UsersContext)

    const updatedUser = { name, email, id, phone, status }

    useEffect(() => {
        console.log('User Changed')
    }, [userOnEditing])

    //VALIDAÇÕES 
    const validateID = (id) => {
        // id = id.replace(/[^\d]+/g, '');
        if (id == '') return false;
        // Elimina ids invalidos conhecidos	
        if (id.length != 11 ||
            id == "00000000000" ||
            id == "11111111111" ||
            id == "22222222222" ||
            id == "33333333333" ||
            id == "44444444444" ||
            id == "55555555555" ||
            id == "66666666666" ||
            id == "77777777777" ||
            id == "88888888888" ||
            id == "99999999999")
            return false;
        // Valida 1o digito	
        let add = 0;
        for (let i = 0; i < 9; i++)
            add += parseInt(id.charAt(i)) * (10 - i);
        let rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(id.charAt(9)))
            return false;
        // Valida 2o digito	
        add = 0;
        for (let i = 0; i < 10; i++)
            add += parseInt(id.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(id.charAt(10)))
            return false;
        return true;
    }

    // FUNÇÃO DE VALIDAÇÃO
    const validate = () => {

        //  VALIDAÇÃO NOME
        if (name === '' || name.length <= 1) {
            setNameError('Nome Inválido')
            console.log('Erro de Validação - Nome')
            return false
        }

        // VALIDAÇÃO EMAIL
        if (!email.includes('@')) {
            setEmailError('Email Inválido')
            console.log('Erro de Validação - Email')
            return false
        }

        // VALIDAÇÃO CPF
        const isIDValid = validateID(id)
        if (!isIDValid) {
            setIdError('CPF Inválido')
            console.log('Erro de Validação - CPF')
            return false
        }

        // VALIDAÇÃO FONE
        const regexPhone = /[1-9]{2}[0-9]{8}/
        const isPhoneValid = regexPhone.test(phone)

        if (!isPhoneValid) {
            console.log(isPhoneValid)
            setPhoneError('Fone Inválido')
            console.log('Erro de Validação - Fone')
            return false
        }

        // VALIDAÇÃO STATUS

        const regexStatus = /[Status]/
        const isStatusValid = regexStatus.test(status)

        if (!isStatusValid) {
            setStatusError('Status Inválido')
            console.log('Erro de Validação - Status')
            return false
        }
        else {
            return true
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        setNameError('')
        setEmailError('')
        setIdError('')
        setPhoneError('')
        setStatusError('')
        const isValid = validate(updatedUser)
        if (isValid) {
            console.log('Validação Realizada!')
            updateUser(originalId, updatedUser)
            handleCloseModal()
        } else {
            console.log('Edição não foi validada')
        }
    }

    const mTop = 'mb-2'

    return (
        <>
            <div>
                <Form onSubmit={handleUpdate} className='px-4'>
                    <Form.Label className='formLabel'>Nome</Form.Label>
                    <Form.Group className={mTop}>
                        <Form.Control
                            type="text"
                            placeholder="Nome"
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className='errorMessage'>{nameError}</div>

                    <Form.Label className='formLabel'>E-mail</Form.Label>
                    <Form.Group className={mTop}>
                        <Form.Control
                            type="text"
                            placeholder="E-mail"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className='errorMessage'>{emailError}</div>

                    <Form.Label className='formLabel'>CPF</Form.Label>
                    <Form.Group className={mTop}>
                        <Form.Control
                            type="text"
                            placeholder="CPF"
                            name='id'
                            value={id}
                            onChange={(e) => setNewId(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className='errorMessage'>{idError}</div>

                    <Form.Label className='formLabel'>Fone</Form.Label>
                    <Form.Group className={mTop}>
                        <Form.Control
                            type="text"
                            placeholder="Fone"
                            name='phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className='errorMessage'>{phoneError}</div>

                    <Form.Label className='formLabel'>Status</Form.Label>
                    <Form.Group className={mTop}>
                        <Form.Select
                            type="text"
                            placeholder="Status"
                            name='status'
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        >
                            <option value="" disabled defaultValue hidden>Status</option>
                            <option value="Ativo">Ativo</option>
                            <option value="Inativo">Inativo</option>
                            <option value="Aguardando ativação">Aguardando ativação</option>
                            <option value="Desativado">Desativado</option>
                        </Form.Select>
                    </Form.Group>
                    <div className='errorMessage'>{statusError}</div>

                    <div className="mb-2 d-flex justify-content-between">
                        <Button className='my-4 px-4 font-weight-bold btn-dark' variant="success" type="submit" block>
                            Salvar
                        </Button>
                        <Button onClick={handleShowConfirm} className='my-4 px-4 btn-warning font-weight-bold' variant="success" type="button" block>
                            Excluir
                        </Button>
                    </div>
                </Form >
            </div>

            {/* MODAL CONFIRM */}
            <Modal show={showConfirmModal} onHide={handleCloseConfirm}>
                <Modal.Header closeButton>
                    <Modal.Title className="px-4 py-2">
                        Confirma a exclusão?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ConfirmDeleteUser userOnEditing={userOnEditing}>
                    </ConfirmDeleteUser>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EditUser