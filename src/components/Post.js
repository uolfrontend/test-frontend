import { useForm } from "react-hook-form";
import React from 'react'
import axios from 'axios'





function Post(){
    const {register, hendleSubmit} = useForm()
    const addPost = data => axios.post("https://my-json-server.typicode.com/LukasMTRocha/api/customers", data)
    

    return(

        <div>
            <form onSubmit={hendleSubmit(addPost)}> 
                <div className="filds">
                    <input placeholder="Nome" name="nome" type="text" {...register('nome')}/>
                    <input placeholder="Email" name="email" type="text"  {...register('email')}/>
                    <input placeholder="Telefone" name="telefone" type="text"  {...register('telefone')}/>
                    <input placeholder="CPF" name="cpf" type="text"  {...register('cpf')}/>

                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>

    )
}

export default Post;