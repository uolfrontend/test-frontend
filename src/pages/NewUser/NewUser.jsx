import { Container, Row, Col, Button } from 'react-bootstrap';

import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import UserForm from '../../components/UserForm/UserForm';

const NewUser = () => {
  return (
    <div>
      <Container>
        <Header title={'Painel de clientes'} />
        <SubHeader>
          <Row className="align-items-center">
            <Col md={9}>
              <div>
                <p>Novo usuário</p>
                <p>Informe os campos a seguir para criar novo usuário:</p>
              </div>
            </Col>
          </Row>
        </SubHeader>
        <UserForm />
      </Container>
    </div>
  );
};

export default NewUser;
