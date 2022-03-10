import Modal from 'react-bootstrap/Modal'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask';
import { useContext } from 'react'

import {ClientContext} from '../context/clientContext'
import '../styles/modal.scss'

export function EditModal(){
    const {register, handleSubmit} = useForm()
    const {isOpen, handleState, clientEdit} = useContext(ClientContext)
    var local = JSON.parse(localStorage.getItem('clients'))
    
    // const editClient = (data) =>{
    //     const newArr = [...local].filter(client => client.id !== clientEdit.id)
    //     const arr = [newArr, data]
    //     localStorage.setItem('clients', JSON.stringify(arr))
    // }


    return(
        <div className="modal-container">
            <Modal 
                show={isOpen}
                aria-labelledby="contained-modal-title-vcenter"
            >
            <Modal.Header>
                Editar cliente: {clientEdit.name}
            </Modal.Header>
            <Modal.Body>
                <form >
                    <input type="text" name="name" {...register("name")} className="name-user-edit" placeholder="Nome" />
                    <input type="email" name="email" {...register("email")} className="email-user-edit" placeholder="E-mail" />
                    <InputMask mask="999.999.999-99" type="text" name="id" {...register("id")} className="cpf-user-edit" placeholder="CPF" />
                    <InputMask mask="(99) 9.9999-9999" type="text" name="phone" {...register("phone")} className="phone-user-edit" placeholder="Telefone" />
                    <select name="status" {...register("status")}>
                        <option value="ativo">Status</option>
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                        <option value="aguardando">Aguardando ativação</option>
                        <option value="desativado">Desativado</option>
                    </select>
                    <div className="buttons-container">
                        <input type="submit" className="create-new-client" value="Editar" />
                        <button type="submit" className="back" onClick={handleState}>Voltar</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
        </div>
    );
}