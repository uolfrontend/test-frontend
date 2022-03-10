import '../styles/nav.scss'
import Logo from '../assets/uol-branco.png';
export function Nav(){
    return(
        <div className="nav-container">
            <img src={Logo} alt="logo da Uol"/>
        </div>
    );
}