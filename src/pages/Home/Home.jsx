import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import UsersList from '../../components/UsersList/UsersList';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';

const Home = () => {
  return (
    <div>
      <Container>
        <Header title={'Painel de clientes'} />
        <SubHeader>
          <Row className="align-items-center">
            <Col md={9}>
              <div>
                <p>Listagem de usuários</p>
                <p>Escolha um cliente para visualizar os detalhes</p>
              </div>
            </Col>
            <Col md={3} className="create-user-btn">
              <Link to="/new-user">
                <Button variant="warning">Novo Cliente</Button>
              </Link>
            </Col>
          </Row>
        </SubHeader>
        <UsersList />
      </Container>
    </div>
  );
};

export default Home;
