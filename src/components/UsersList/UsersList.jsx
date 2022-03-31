import { useContext } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import { UserContext } from '../../context/UserContext';

import UserCard from './UserCard';
import SubHeader from '../SubHeader/SubHeader';
import UsersListFooter from './UsersListFooter';
import ModalEdit from './Modal/ModalEdit';

import './styles.scss';

const UsersList = () => {
  const { users, translateStatus } = useContext(UserContext);
  return (
    <div>
      <SubHeader>
        <Row className="align-items-center">
          <Col md={9}>
            <div>
              <p>Listagem de usuários</p>
              <p>Escolha um cliente para visualizar os detalhes</p>
            </div>
          </Col>
          <Col md={3}>
            <Button variant="warning" to="/new-user">
              Novo Cliente
            </Button>
          </Col>
        </Row>
      </SubHeader>
      <ModalEdit />
      <div className="mt-4">
        {users.map((user, index) => {
          return (
            <UserCard
              id={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
              status={user.status}
              statusTranslated={translateStatus(user.status)}
            />
          );
        })}
      </div>
      <UsersListFooter usersQuantity={users.length} />
    </div>
  );
};

export default UsersList;
