import { useContext } from 'react';
import InputMask from 'react-input-mask';
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {ClientContext} from '../context/clientContext'
import '../styles/formNewClient.scss';

export function FormNewClient(){
    const {register, handleSubmit} = useForm()
    const {setClient, client} = useContext(ClientContext)

    const addClient = (data) =>{
        var newClient = [...client, data]
        setClient(newClient)
        toast.success('foiii')
    }

    return(
        <div className="form-group">
            <ToastContainer />
            <div className="head-edit">
                <aside>
                    <p className="head-edit-title">Novo Usuário</p>
                    <p className="head-edit-description">Informe os campos a seguir para criar novo usuário</p>
                </aside>
            </div>
            <form onSubmit={handleSubmit(addClient)}>
                <input type="text" name="name" {...register("name")} className="name-user-edit"  placeholder="Nome"/>
                <input type="email" name="email" {...register("email")} className="email-user-edit" placeholder="E-mail"/>
                <InputMask mask="999.999.999-99" type="text" name="id" {...register("id")} className="cpf-user-edit" placeholder="CPF"/>
                <InputMask mask="(99) 9.9999-9999" type="text" name="phone" {...register("phone")} className="phone-user-edit" placeholder="Telefone"/>
                <select name="status" {...register("status")}>
                    <option value="ativo">Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="waiting">Waiting</option>
                    <option value="disabled">Disabled</option>
                </select>
                <div className="buttons-container">
                    <input type="submit" className="create-new-client" value="Criar"/>
                    <Link to="/" className="back" replace >Voltar</Link>
                </div>
            </form>
            {<span className="toast">Cliente adicionado</span>}
        </div>
    );
}