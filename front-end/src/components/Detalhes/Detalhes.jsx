import './Detalhes.css'

import React from 'react';


// eslint-disable-next-line import/no-anonymous-default-export
export default () =>

        <div className="details">
         
            <div className="main-title">
                <div className="description">
                    <h2>
                        Listagem de usuario
                    </h2>
                    <span>
                        Escolha um cliente para visualiar os detalhes
                    </span>
                </div>
                <div className="new-user">
                   <a href="#/User"> <button className="button">Novo cliente</button></a>
                </div>
            </div>
            <div className="table">
                <div class="wrapper">
                        <div className="dados">
                            <h1>
                                Jon Due
                            </h1>   
                            <h2>
                               email@gmail.com
                            </h2> 
                        </div>
                        <div className="dados">
                            <h1>
                                000.000.000-00
                            </h1>   
                            <h2>
                               (11)000000000
                            </h2> 
                        </div>
                        <div className="ativos">
                            <div className="btn-green"></div>
                            <h1>Ativo</h1>    
                        </div>
                        <div className="edit">
                            <button className="btn-edit">
                                Editar
                            </button>
                        </div>
                </div>
                
           </div>
           <div className="number-clientes">
                <h1>Exibindo 10 clientes</h1>   
            </div>
        </div>