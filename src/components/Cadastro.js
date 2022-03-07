import Header from "./Header";
import { FiUser } from "react-icons/fi";
import Clientes from "./Clientes";
import { Table } from "react-bootstrap";
import ClientesTable from  "./ClientesTable"
import initModal from "./Modal";



const Cadastro = ({children}) => {

    return(      
        <div className="Modal ativo">
          <div className="">
 
            <div className="">
              <p className="TituloModal">Novo usuário</p>
              
              <p className="DescModal">Informe os campos a seguir para criar um novo usuário</p>

               <div className="conteudo">
                <input placeholder="Nome"></input><br/>
                <input placeholder="E-mail"></input><br/>
                <input placeholder="CPF"></input><br/>
                <input placeholder="Telefone"></input>
                               
                <div>
              <button className="criarbtn">Criar</button>
              <button className="voltarbtn" onClick={''}>Voltar</button>
              </div>    
              

                </div>




              
          </div>
          </div>
  
        </div>
      


    );



}
export default Cadastro;