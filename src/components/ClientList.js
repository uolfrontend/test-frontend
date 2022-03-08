import '../styles/clientList.scss'
import { ClientCard } from './ClientCard';
export function ClientList(){
    return(
        <div className="client-container">
            <div className="head-boxes">
                <aside>
                    <p className="head-boxes-title">Listagem de Usuários</p>
                    <p className="head-boxes-description">Escolha um usuário para vizualizar os detalhes</p>
                </aside>
                <div>
                    <button className="new-client">Novo cliente</button>
                </div>
            </div>
            <ClientCard />
        </div>
    );
}