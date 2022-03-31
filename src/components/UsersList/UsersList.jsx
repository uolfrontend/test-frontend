import { useContext } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import { UserContext } from '../../context/UserContext';

import UserCard from './UserCard';
import UsersListFooter from './UsersListFooter';
import ModalEdit from './Modal/ModalEdit';

import './styles.scss';

const UsersList = () => {
  const { users, translateStatus } = useContext(UserContext);
  return (
    <div>
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
