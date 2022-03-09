import React, { Component } from 'react';
import axios from 'axios';
import Main from "../layout/Main";
import './UserCrud.css';
import { Link } from 'react-router-dom'



const headerProps = {
    title: 'Painel de clientes',
    subtitle: 'Novo usuario',
    description: 'Informe os campos a seguir para criar novo usuário:',
    button: 'Voltar',
    redirect: '/'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '', cpf: '', phone: '', status: ''},
    list: []
}



export default class UserCrud extends Component {

   

    state = { ...initialState }



    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })

    }
    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="form-group">
                        <input type="text" className="input-form" placeholder="Nome" name="name" value={this.state.user.name} onChange={e => this.updateField(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="input-form" placeholder="Email" name="email" value={this.state.user.email} onChange={e => this.updateField(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="input-form" placeholder="CPF" name="cpf" maxLength='14' value={this.state.user.cpf} onChange={e => this.updateField(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="input-form" placeholder="Telefone" name="phone" value={this.state.user.phone} onChange={e => this.updateField(e)} />
                    </div>
                    <div className="form-group">
                    <select class="selected" placeholder="Status"  name="status">
                        <option name="ativo" value={this.state.user.status}>Ativo</option>
                        <option name="desativado" value={this.state.user.status} >Inativo</option>
                        <option name="waiting" value={this.state.user.status} >Aguardando ativação</option>
                        <option name="inativo" value={this.state.user.status} >Desativado</option>
                    </select>
                    </div>
                </div>
                <div className="botoes">
                    <div className="new-user">
                    <Link to="/"> <button className="button-save" onClick={e => this.save(e)}>Criar</button></Link>
                    </div>
                    <div className="new-user">
                        <a href="#/User"> <button className="button-clear" onClick={e => this.clear(e)}>Limpar</button></a>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>

                <div class="table">
                     {this.renderForm()}
                </div>
                
            </Main>
        )
    }
}