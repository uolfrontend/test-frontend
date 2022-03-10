import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../styles/clientList.scss';
import { ClientCard } from './ClientCard';
import {ClientContext} from '../context/clientContext'

export function ClientList(){
    const { client } = useContext(ClientContext)
    
    return(
        <div className="client-container">
            <div className="head-boxes">
                <aside>
                    <p className="head-boxes-title">Listagem de Usuários</p>
                    <p className="head-boxes-description">Escolha um usuário para vizualizar os detalhes</p>
                </aside>
                <div>
                    <Link to="/newclient" className="new-client" >Novo cliente</Link>

                </div>
            </div>
            {client.map( datas => {
                return(
                    <ClientCard key={datas.id} info={datas}/>
                )
            })}
            <span className="exibition-length">{`Exibindo ${client.length} clientes`}</span>
        </div>
    );
}