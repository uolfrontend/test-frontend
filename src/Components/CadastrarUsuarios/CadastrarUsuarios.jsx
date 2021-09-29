import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../../css/reset.css';
import '../../css/style.css';
import icon from "../../assets/img/user.png";
import { Link } from 'react-router-dom';
import { UserValidation } from '../../Validations/UserValidation';
import { UserPost } from '../../api/UserPost';
import { cpf } from 'cpf-cnpj-validator'; 
import {maskCPF, maskPhone, removeMask} from '../../Validations/UserValidation'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2'

const CadastrarUsuarios = () => {

  const{ register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(UserValidation)
  });

  const Cadastrar = async (data) =>{
    data.id = maskCPF(data.id)
    data.phone = maskPhone(data.phone)
    const cpfValido = cpf.isValid(data.id);

    cpfValido ? 
      UserPost(data) 
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
          <h4 className="listagem__intro">Novo usuário</h4>
          <span className="listagem__info">Informe os campos a seguir para criar novo usuário</span>
        </div>
      </section>

      <div className="formulario">
        <form onSubmit={handleSubmit(Cadastrar)}>
          <ul className="formulario__flex-outer">
            <li className="formulario__flex-outer-item">
              <input type="text" placeholder="Nome" name="name" {...register("name")} 
              />
              <p className="error-msg">{errors.name?.message}</p>
            </li>
            <li className="formulario__flex-outer-item">
              <input type="email" placeholder="E-mail" name="email" 
                {...register("email")} 
              />
              <p className="error-msg">{errors.email?.message}</p>
            </li>
            <li className="formulario__flex-outer-item">
              <input type="text" placeholder="CPF" name="id" {...register("id")}
                maxLength="11"
                onBlur={(e)=>e.target.value=maskCPF(e.target.value)}
                onFocus={(e)=>e.target.value=removeMask(e.target.value)}
              />
              <p className="error-msg">{errors.id?.message}</p>
            </li>
            <li className="formulario__flex-outer-item">
              <input type="tel" placeholder="phone" name="phone" {...register("phone")}
                maxLength="11"
                onBlur={(e)=>e.target.value=maskPhone(e.target.value)}
                onFocus={(e)=>e.target.value=removeMask(e.target.value)}
              />
              <p className="error-msg">{errors.phone?.message}</p>
            </li>
            <li className="formulario__flex-outer-item">
              <select name="status" {...register('status')}
              >
                <option value="" disabled hidden>Status</option>
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
                <option value="waiting">Aguardando ativação</option>
                <option value="disabled">Desativado</option>
              </select>
              <p className="error-msg">{errors.status?.message}</p>
            </li>
          </ul>
          <div className="formulario__flex-outer-buttons">
            <button type="submit" className="formulario__button-submit">Criar</button>
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

export default CadastrarUsuarios