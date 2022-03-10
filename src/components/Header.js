import {BiUser} from "react-icons/bi";

import '../styles/header.scss'
export function Header(){
    return(
        <div className="container-head">
            <span className="icon-user"> <BiUser /> </span>
            <span className="head-title">Painel de clientes</span>
        </div>
    )
}