
import React, {useState,useEffect} from "react";
import axios from "axios";
import Table from "./Table"
import initModal from "./Modal";


export default function  (props){

    const [posts,setPosts]= useState([])

    useEffect(()=> { 
        axios.get("https://my-json-server.typicode.com/LukasMTRocha/api/customers")
        .then((response)=>{
            setPosts(response.data)
            console.log(response.data)
        })
        .catch(()=>{
            console.log("Erro")
        })
    },[]) 

    return (

        <div>
       
           <ul className="escopo" >
               {
                   posts.map((post)=>{
                    return <li className="usuarios">
                     <p className="Clientes">{post.name}<br/>
                       
                       <span>{post.id}</span>

                       <span className="email">{post.email}</span> 

                        <span className="telefone">{post.phone}</span>
                                                       
                     </p> 
                     <button className="editar">Editar</button>   
                    </li>
                    
                })
               }
               
            
            </ul>



        </div>

    );


}


