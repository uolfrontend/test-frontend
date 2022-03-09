import './Main.css';
import icon from '../../assets/img/people.png'
import { Link } from 'react-router-dom'


import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>

  <React.Fragment>
        <div className="conteudo">
        <div className="title">
            <img src={icon} alt="people" /> <h1>{props.title}</h1>
        </div>
        <hr />
        <div className="details">

            <div className="main-title">
                <div className="description">
                    <h2>
                        {props.subtitle}
                    </h2>
                    <span>
                        {props.description}
                    </span>
                </div>
                <div className="new-user">
                    <Link to={props.redirect}> <button className="button">{props.button}</button></Link>
                </div>
            </div>
        </div>
        {props.children}
    </div>
  </React.Fragment>





