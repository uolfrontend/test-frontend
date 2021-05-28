import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import InputMask from 'react-input-mask';

import Title from '../../components/title';
import Storage from '../../services/storage';

import './styles.css';

export default class edit extends Component {
    state = {
        key: '',
        id: '',
        name: '',
        email: '',
        phone: '',
        status: '',
        edit: false,
        redirect: false
    }

    componentDidMount() {
        const location = this.props.match.url;
        if(location !== '/new'){
            this.loadParams();
            this.setState({edit: true})
        }
    }

    loadParams = async () => {
        const {key} = this.props.match.params;
        const customers = await Storage.get();
        const customer = customers[key];

        this.setState({key: key});
        this.setState({id: customer.id});
        this.setState({name: customer.name});
        this.setState({email: customer.email});
        this.setState({phone: customer.phone});
        this.setState({status: customer.status});
    }

    handleCreateSubmit = () => {
        try {
            this.validateFields();
            this.validateCpf();
            this.saveCustomer();
            this.setState({redirect: true});
        } catch (error) {
            alert(error.message);
        }
    }

    handleEditSubmit = () => {
        try {
            this.validateFields();
            this.validateCpf();
            this.editCustomer();
            this.setState({redirect: true});
        } catch (error) {
            alert(error.message);
        }
    }

    editCustomer() {
        const customer = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            status: this.state.status
        }
        const customers = Storage.get();
        customers[this.state.key].id = customer.id;
        customers[this.state.key].name = customer.name;
        customers[this.state.key].email = customer.email;
        customers[this.state.key].phone = customer.phone;
        customers[this.state.key].status = customer.status;
        Storage.set(customers)
    }

    saveCustomer() {
        const costumer = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            status: this.state.status
        }
        const customers = Storage.get();
        customers.push(costumer);
        Storage.set(customers);
    }

    validateFields() {
        if (
            this.state.id.trim() === '' ||
            this.state.name.trim() === '' ||
            this.state.email.trim() === '' ||
            this.state.phone.trim() === '' ||
            this.state.status.trim() === ''
        ) {
            throw new Error('Preencha todos os campos.');
        }
    }

    validateCpf() {
        let { id } = this.state;
        id = id.replace(/[^0-9]/g, '');

        let sum;
        let rest;

        sum = 0;

        if (id === "00000000000") 
            throw new Error('CPF inválido');

        for (let i=1; i<=9; i++)
            sum = sum + parseInt(id.substring(i-1, i)) * (11 - i);

        rest = (sum * 10) % 11;

        if ((rest === 10) || (rest === 11))
            rest = 0;

        if (rest !== parseInt(id.substring(9, 10)))
            throw new Error('CPF inválido');

        sum = 0;

        for (let i=1; i<=10; i++)
            sum = sum + parseInt(id.substring(i-1, i)) * (12 - i);

        rest = (sum * 10) % 11;

        if ((rest === 10) || (rest === 11))
            rest = 0;

        if (rest !== parseInt(id.substring(10, 11)))
            throw new Error('CPF inválido');
    }

    handleIdChange = (event) => {
        this.setState({id: event.target.value});
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlePhoneChange = (event) => {
        this.setState({phone: event.target.value});
    }

    handleStatusChange = (event) => {
        this.setState({status: event.target.value});
    }

    render() {
        if(this.state.redirect)
            return <Redirect to='/'/>

        let button

        if(this.state.edit) {
            button = (
                <div className='create-button' onClick={this.handleEditSubmit}>
                    Editar
                </div>
            )
        } else {
            button = (
                <div className='create-button' onClick={this.handleCreateSubmit}>
                    Criar
                </div>
            )
        }

        return (
            <main id='customer-form-panel'>

                <Title />

                <section className='header-new-customer'>
                    <div>
                        <h4>Novo usuário</h4>
                        <p>Informe os campos a seguir para criar novo usuário</p>
                    </div>
                </section>

                <section className='form'>
                    <form>
                        <div className='input-group'>
                            <input 
                                className='input-container'
                                type='text'
                                placeholder='Nome'
                                value={this.state.name}
                                onChange={this.handleNameChange}
                            />
                        </div>
                        <div className='input-group'>
                            <input 
                                className='input-container'
                                type='text'
                                placeholder='E-mail'
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                        </div>
                        <div className='input-group'>
                            <InputMask
                                mask='999.999.999-99'
                                className='input-container'
                                type='text'
                                placeholder='CPF'
                                value={this.state.id}
                                onChange={this.handleIdChange}
                            />
                        </div>
                        <div className='input-group'>
                            <InputMask
                                mask='(99) 9999-9999'
                                className='input-container'
                                type='text'
                                placeholder='Telefone'
                                value={this.state.phone}
                                onChange={this.handlePhoneChange}
                            />
                        </div>
                        <div className='input-group'>
                            <select 
                                className='input-container'
                                value={this.state.status}
                                onChange={this.handleStatusChange}
                            >
                                <option value='' disabled defaultValue>Status</option>
                                <option value='active'>Ativo</option>
                                <option value='inactive'>Inativo</option>
                                <option value='waiting'>Aguardando ativação</option>
                                <option value='disabled'>Desativado</option>
                            </select>
                        </div>
                        <div className='input-group actions'>
                            {button}
                            <Link to='/' className='cancel-button'>Voltar</Link>
                        </div>
                    </form>
                </section>

            </main>
        );
    }
}