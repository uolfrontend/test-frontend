import {BiUser} from "react-icons/bi";

import '../styles/header.scss'
export function Header(){
    return(
        <div className="container">
            <span className="icon-user"> <BiUser /> </span>
            <p className="head-title">Painel de clientes</p>
        </div>
    )
}