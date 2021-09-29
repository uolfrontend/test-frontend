import React, {useState} from 'react'
import {
  Link
} from 'react-router-dom';
import '../../css/reset.css';
import '../../css/style.css';
import EditarUsuarios from '../EditarUsuarios/EditarUsuarios';
const Card = (props) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const data = {
    id, name, email, phone, status
  };


  // function Modify(e){
  
  return (
    <section className="card-container">
      <section className="main__card card">
        <div className="card__info">
          <h6 className="card__name">{props.titulo}</h6>
          <span className="card__email">{props.email}</span>
        </div>

        <div className="card__info">
          <h6 className="card__id">{props.id}</h6>
          <span className="card__phone">{props.phone}</span>
        </div>

        <div className="card__info">
          <span className={"card__estado__"+props.classe}>{props.status}</span>
        </div>
 
        <div className="card__info">
        <Link to={{ pathname: `/editar/${props.id}`}}>
          <button className="card__button">Editar</button>
        </Link>
        </div>        
      </section>
    </section>
  )
}

export default Card
