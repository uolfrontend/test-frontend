import '../styles/formEdit.scss'

export function FormEdit(){
    return(
        <div className="form-group">
            <form>
                <input type="text" className="name-user-edit" placeholder="Nome"/>
                <input type="email" className="email-user-edit" placeholder="E-mail"/>
                <input type="text" className="cpf-user-edit" placeholder="CPF"/>
                <input type="text" className="phone-user-edit" placeholder="Telefone"/>
                <select name="status">
                    <option value="ativo">Status</option>
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                    <option value="aguardando">Aguardando ativação</option>
                    <option value="desativado">Desativado</option>
                </select>
                <div className="buttons-container">
                    <button className="create-new-client">Criar</button>
                    <button className="back">Voltar</button>
                </div>
            </form>
        </div>
    );
}