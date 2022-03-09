import React, { Component } from 'react';
import Main from '../layout/Main';
import axios from 'axios';
import './Home.css';
import { useNavigate  } from 'react-router-dom'


const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '', phone: '', status: '' },
    list: []
}


export default class Home extends Component {


    state = { ...initialState }


    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }



    load(user) {
        this.setState({ user })
        
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.state.list.filter(u => u !== user)
            this.setState({ list })
        })
    }


    renderMain() {
        return (
            <Main title="Painel de clientes" subtitle="Listagem de usuario" description=" Escolha um cliente para visualiar os detalhes" button="Novo cliente" redirect="users">
               
            {this.renderTable()}
            <div className="number-clientes">
                <h1>Exibindo 10 clientes</h1>
            </div>


        </Main>
    )
        
    }

    renderTable() {
        return this.state.list.map(user => {
  
        return(
            <div className="table">
            <div class="wrapper">
                <div className="dados">
                    <h1>
                        {user.name}
                    </h1>
                    <h2>
                        {user.email}
                    </h2>
                </div>
                <div className="dados">
                    <h1>
                        {user.cpf}
                    </h1>
                    <h2>
                        {user.phone}
                    </h2>
                </div>
                <div className="ativos">
                    <div className="btn-green"></div>
                    <h1>{user.status}</h1>
                </div>
                <div className="edit">
                    <button onClick={() => this.load(user)} className="btn-edit">
                        Editar
                    </button>
                </div>
            </div>

        </div>
        )
              
    })
    }
    render() {

        return (
            <div>
                {this.renderMain()}
            </div>
        )

    }
}