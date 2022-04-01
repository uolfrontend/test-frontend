import { Col, Row, Button } from 'react-bootstrap';

import './styles.scss';

const UsersListHeader = () => {
  return (
    <div className="mt-4" id="users-list-header">
      <Row className="align-items-center">
        <Col md={9}>
          <div>
            <p>Listagem de usuários</p>
            <p>Escolha um cliente para visualizar os detalhes</p>
          </div>
        </Col>
        <Col md={3}>
          <Button variant="warning">Novo Cliente</Button>
        </Col>
      </Row>
    </div>
  );
};

export default UsersListHeader;
