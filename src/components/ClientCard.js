import '../styles/clientCard.scss'

export function ClientCard(){
    return(
        <div className="client-box">
            <aside className="name-email">
                <p className="bold-text"> Jonh Doe </p>
                <p className="light-text"> jonh_dow@test.com </p>
            </aside>
            <aside className="phone-cpf">
                <p className="bold-text"> Nome do User </p>
                <p className="light-text"> Email do User </p>
            </aside>
            <aside className="status-user">
                <span className="dot"></span>
                <p className="status"> Ativo </p>
            </aside>
            <aside className="button-edit">
                <button className="edit">Editar</button>
            </aside>
        </div>
    );
}