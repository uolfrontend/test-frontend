import { Col, Row, Button } from 'react-bootstrap';

import './styles.scss';

const UsersListFooter = ({ usersQuantity }) => {
  return (
    <div className="mt-4" id="users-list-footer">
      <p>Exibindo {usersQuantity} clientes</p>
    </div>
  );
};

export default UsersListFooter;
