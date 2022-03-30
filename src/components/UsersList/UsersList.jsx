import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import UserCard from './UserCard';
import UsersListHeader from './UsersListHeader';
import UsersListFooter from './UsersListFooter';

import './styles.scss';

const UsersList = () => {
  const { users } = useContext(UserContext);

  const translateStatus = (status) => {
    switch (status) {
      case 'active':
        return 'Ativo';
      case 'inactive':
        return 'Inativo';
      case 'waiting':
        return 'Aguardando ativação';
      case 'disabled':
        return 'Desativado';
      default:
        return 'Desconhecido';
    }
  };

  return (
    <div>
      <UsersListHeader />
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
