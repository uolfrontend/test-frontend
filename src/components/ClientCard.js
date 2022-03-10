import { useContext } from 'react'

import { ClientContext } from '../context/clientContext'
import '../styles/clientCard.scss'

export function ClientCard(props){
    const {setClientEdit, handleState} = useContext(ClientContext)
    const editClientId = (id) =>{
        setClientEdit(id)
        handleState()
    }
    return(
        <div className="client-box">
            <aside className="name-email">
                <p className="bold-text"> {props.info.name} </p>
                <p className="light-text"> {props.info.email} </p>
            </aside>
            <aside className="phone-cpf">
                <p className="bold-text"> {props.info.id} </p>
                <p className="light-text"> {props.info.phone} </p>
            </aside>
            <aside className="status-user">
                <span className={`dot ${props.info.status}`}></span>
                <p className="status"> {props.info.status} </p>
            </aside>
            <aside className="button-edit">
                <button className="edit" onClick={() => editClientId(props.info)}>Editar</button>
            </aside>
        </div>
    );
}