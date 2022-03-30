import { Navbar, Container } from 'react-bootstrap';
import logo from '../../../public/logo.png';
import './styles.css';

const NavBar = () => {
  return (
    <Navbar>
      <Container className="justify-content-center">
        <Navbar.Brand>
          <img src={logo} height="30" className="d-inline-block align-top" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
