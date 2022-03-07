import Header from "./Header";
import { FiUser } from "react-icons/fi";
import Clientes from "./Clientes";
import Cadastro from "./Cadastro";
import React,{ useState } from "react";
import ClientesTable from "./ClientesTable";
import { Link } from "react-router-dom";
import Formulario from"./Post"
import Post from "./Post";





function App () {
  
  
  return (
    <div>
      <Header />
     
      
      <div className="Container">
        <div className="TituloPainel">
          
          <p> <FiUser />Painel de Clientes</p><hr/>
        
          <div className="ListagemUsuarios">
            <p className="lista">Listagem de Usuários</p>
            
            <p className="desc">Escolha um Cliente para visualizar os detalhes</p>
           
          
            <button type="button" className="novoclientebtn" data-modal="abir" >Novo Cliente</button>
           
          <div className="ocultar"><ClientesTable/></div>
           


            
           
        </div>
        </div>




        





      </div>
    </div>
  );
}
export default App;