import { useContext } from 'react';
import { Col, Row, Button } from 'react-bootstrap';

import { UserContext } from '../../context/UserContext';

import './styles.scss';

const UserCard = ({ id, name, email, phone, status, statusTranslated }) => {
  const { setUser, handleState } = useContext(UserContext);
  return (
    <div className="user-info-card">
      <Row>
        <Col lg={4} md={4} sm={12} xs={12}>
          <div className="user-info">
            <p>{name}</p>
            <p>{email}</p>
          </div>
        </Col>
        <Col lg={3} md={3} sm={12} xs={12}>
          <div className="user-info">
            <p>{id}</p>
            <p>{phone}</p>
          </div>
        </Col>
        <Col lg={3} md={3} sm={12} xs={12}>
          <div className="user-status">
            <span className={status}></span>
            <p>{statusTranslated}</p>
          </div>
        </Col>
        <Col lg={2} md={2} sm={12} xs={12}>
          <div className="user-edit">
            <Button
              variant="outline-warning"
              onClick={() => {
                setUser({
                  id: id,
                  name: name,
                  email: email,
                  phone: phone,
                  status: status
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
