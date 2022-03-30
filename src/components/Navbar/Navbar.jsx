import { Navbar } from 'react-bootstrap';
import logo from '../../../public/logo.png';
import './styles.css';

const NavBar = () => {
  return (
    <Navbar className="justify-content-center">
      <Navbar.Brand>
        <img src={logo} height="30" className="d-inline-block align-top" />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
