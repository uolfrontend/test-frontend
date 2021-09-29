import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../../css/reset.css';
import '../../css/style.css';
import icon from "../../assets/img/user.png";
import {  Link } from 'react-router-dom';
import { cpf } from 'cpf-cnpj-validator'; 
import {maskCPF, maskPhone, removeMask} from '../../Validations/UserValidation'
import { userPut } from '../../api/UserPut';
import Swal from 'sweetalert2'

const EditarUsuarios = (props) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const data = {
    id, name, email, phone, status
  };

  const usuario = props.match.params.id;
  useEffect(() =>{
    axios.get(`http://localhost:3002/customers/${usuario}`)
    .then((response)=>{
      setId(response.data.id)
      setName(response.data.name)
      setEmail(response.data.email)
      setPhone(response.data.phone)
      setStatus(response.data.status)
    }).catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Nenhum usuário encontrado!',
      })
    })
  },[])

  function Post(e){
    e.preventDefault()
    const cpfValido = cpf.isValid(removeMask(data.id));
    data.phone = maskPhone(data.phone);
    cpfValido ? 
      userPut(data, usuario)
    : 
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'O CPF inserido é inválido!',
    })
      
  }
  return (
    <section>
    <main className="main">
      <article className="main__top titulo">
        <img className="titulo__icon"src={icon} alt=""/>
        <h2 className="titulo__info">Painel de clientes</h2>
      </article>
      <div className="main__border"></div>
      <section className="main__user">
        <div className="main__user__listagem listagem">
          <h4 className="listagem__intro">Alterar usuário</h4>
          <span className="listagem__info">Informe os campos a seguir para alterar o usuário</span>
        </div>
      </section>

      <div className="formulario">
        <form onSubmit={Post}>
          <ul className="formulario__flex-outer">
            <li className="formulario__flex-outer-item">
              <input type="text" placeholder="Nome"
                value={name} onChange={({target}) => setName(target.value)}
              />
            </li>
            <li className="formulario__flex-outer-item">
              <input type="email" placeholder="E-mail"
                value={email} onChange={({target}) => setEmail(target.value)}
              />
            </li>
            <li className="formulario__flex-outer-item">
              <input type="text" placeholder="CPF" disabled
                value={maskCPF(id)} onChange={({target}) => setId(target.value)}
                maxLength="11"
                onBlur={(e)=>e.target.value=maskCPF(e.target.value)}
                onFocus={(e)=>e.target.value=removeMask(e.target.value)}
              />
            </li>
            <li className="formulario__flex-outer-item">
              <input type="tel" placeholder="Phone"
                value={phone} onChange={({target}) => setPhone(target.value)}
                maxLength="11"
                onBlur={(e)=>e.target.value=maskPhone(e.target.value)}
                onFocus={(e)=>e.target.value=removeMask(e.target.value)}
              />
            </li>
            <li className="formulario__flex-outer-item">
              <select required name="status"
                value={status} onChange={({target}) => setStatus(target.value)}>
                <option value="" selected disabled hidden>Status</option>
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
                <option value="waiting">Aguardando ativação</option>
                <option value="disabled">Desativado</option>
              </select>
            </li>
          </ul>
          <div className="formulario__flex-outer-buttons">
            <button  type="submit" className="formulario__button-submit">Alterar</button>
            <Link to={"/"}>
              <button type="reset" className="formulario__button-redirect">Voltar</button>
            </Link>
          </div>
        </form>
      </div>
    </main>
  </section>
  )
}

export default EditarUsuarios