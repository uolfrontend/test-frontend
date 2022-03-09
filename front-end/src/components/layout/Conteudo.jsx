import './Conteudo.css'
import React from 'react';

import New from '../New/New';
import icon from '../../assets/img/people.png'


export default props => 

        <div className="conteudo">
                <div className="title">
                    <img src={icon} alt="people" /> <h1>{props.title}</h1>
                </div>
                <hr/>
                <New/>
        </div>