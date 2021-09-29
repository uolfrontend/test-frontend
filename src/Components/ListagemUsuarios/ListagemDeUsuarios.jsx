import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../../css/reset.css';
import '../../css/style.css';
import icon from "../../assets/img/user.png";
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
const ListagemDeclientes = () => {
  const arrStatus = {
    active: 'Ativo',
    inactive: 'Inativo',
    waiting: 'Aguardando ativação',
    disabled: 'Desativado'
  };
  const [clientes, setClientes] = useState([]);

  useEffect(() =>{
    const getData = async () =>{
      await axios.get('http://localhost:3002/customers')
      .then((response)=>{
        setClientes(response.data)
      }).catch(()=>{
        console.log("errado")
      })
    }
    getData()
  },[])

  return (
    <section>
      <main className="main">
        <article className="main__top titulo">
          <img className="titulo__icon"src={icon} alt=""/>
          <h2 className="titulo__info">Painel de clientes</h2>
        </article>
        <div className="main__border"></div>
        <section className="main__user">
          <div className="main__user__listagem listagem">
            <h4 className="listagem__intro">Listagem de usuários</h4>
            <span className="listagem__info">Escolha um cliente para visualizar os detalhes</span>
          </div>
          <div>
          <Link to={"/cadastro"}>       
            <button className="listagem__novo-usuario">Novo cliente</button>
          </Link>
          </div>
        </section>
      </main>
      {clientes.map((clientes, key)=>{
        return (
          <Card 
            key={key} 
            titulo={clientes.name} 
            email={clientes.email} 
            id={clientes.id} 
            phone={clientes.phone} 
            status={arrStatus[clientes.status]}
            classe={clientes.status}
          />
        )
      })}
      <article className="quantidadeExibicao">
        <span className="quantidadeExibicao__aviso">Exibindo {clientes.length} clientes</span>
      </article>
    </section>
  )
}

export default ListagemDeclientes
