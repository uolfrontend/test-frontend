import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

import axios from "axios";


export default function (props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/LukasMTRocha/api/customers")
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch(() => {
        console.log("Erro");
      });
  }, []);



  const botaoAbrir = document.querySelector('[data-modal="abir"]');
  const botaoVoltar = document.querySelector('[data-modal="voltar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  
  
  
  function abrirModal(event){
      event.preventDefault();
      containerModal.className.add("ativo");
  }
  
  function fecharModal(){
  
  }
  


  return (
    <div>
      <div>
      
      </div>
      <div className="Modal" data-modal="container">
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
      <ul className="escopo">
        {posts.map((post) => {
          return (
            <li className="usuarios" > 
              <Table className="">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>{post.name}</p>
                      <p className="email">{post.email}</p>
                    </td>
                    <td>
                      <p>{post.id}</p>
                      <p className="telefone">{post.phone}</p>
                    </td>
                    <td>
                        <p>{post.status}</p>
                    </td>
                    <td>
                      <p>
                        <button className="editar">Editar</button>{" "}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
