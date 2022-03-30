import { Container } from 'react-bootstrap';

import UsersList from '../UsersList/UsersList';
import Header from '../Header/Header';

const Home = () => {
  return (
    <div>
      <Container>
        <Header title={'Painel de clientes'} />
        <UsersList />
      </Container>
    </div>
  );
};

export default Home;
