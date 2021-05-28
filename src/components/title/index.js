import React from 'react';

import './styles.css';

import user_icon from './user_icon.png';

const Title = () => (
    <section id="title">
        <img src={user_icon} alt="Ícone de Usuário"/>
        <h2>Painel de Clientes</h2>
    </section>
);

export default Title;