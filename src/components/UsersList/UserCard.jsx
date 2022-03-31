import { useContext } from 'react';
import { Col, Row, Button } from 'react-bootstrap';

import { UserContext } from '../../context/UserContext';

import './styles.scss';

const UserCard = ({ id, name, email, phone, status, statusTranslated }) => {
  const { setUser, handleState } = useContext(UserContext);
  return (
    <div className="user-info-card">
      <Row>
        <Col md={4}>
          <div className="user-info">
            <p>{name}</p>
            <p>{email}</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="user-info">
            <p>{id}</p>
            <p>{phone}</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="user-status">
            <span className={status}></span>
            <p>{statusTranslated}</p>
          </div>
        </Col>
        <Col md={2}>
          <div className="user-edit">
            <Button
              variant="outline-warning"
              onClick={() => {
                setUser({
                  id,
                  name,
                  email,
                  phone,
                  status
                });
                handleState();
              }}>
              Editar
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserCard;
