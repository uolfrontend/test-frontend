import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Storage from '../../services/storage';
import Api from '../../services/api'

import Title from '../../components/title';

import './styles.css';

export default class main extends Component {
    state = {
        customers: []
    }

    componentDidMount() {
        this.loadCustomers();
    }

    loadCustomers = async () => {
        let customers = await Storage.get();
        if (customers.length === 0){
            const response = await Api.get('/');
            Storage.set(response.data.customers);
            customers = await Storage.get();
        }
        this.setState({customers: Object.entries(customers)});
    }

    statusId(status){
        if (status === 'active')
            return 'Ativo';
        if (status === 'inactive')
            return 'Inativo';
        if (status === 'waiting')
            return 'Aguardando ativação';
        if (status === 'disabled')
            return 'Desativado';
    }

    render() {
        const {customers} = this.state;
        return (
            <main id='customer-panel'>

                <Title />

                <section className='header-customer-panel'>
                    <div>
                        <h4>Listagem de usuários</h4>
                        <p>Escolha um cliente para visualizar detalhes</p>
                    </div>
                    <Link to='/new' className='button-new-customer'>Novo cliente</Link>
                </section>

                {customers.map((customer, index) => (
                    <section className='client-card' key={index}>
                        <div className='name-div'>
                            <h4>{customer[1].name}</h4>
                            <p>{customer[1].email}</p>
                        </div>
                        <div className='id-div'>
                            <h4>{customer[1].id}</h4>
                            <p>{customer[1].phone}</p>
                        </div>
                        <div className='status-div'>
                            <div className={`status ${customer[1].status}`}></div>
                            <p>{this.statusId(customer[1].status)}</p>
                        </div>
                        <Link to={`/edit/${index}`} className='button-edit'>Editar</Link>
                    </section>
                ))}

                <section className='footer'>
                    <p>Exibindo {customers.length} cliente(s)</p>
                </section>
            </main>
        );
    }
}