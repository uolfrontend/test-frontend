import { Container } from 'react-bootstrap';

import UsersList from '../../components/UsersList/UsersList';
import Header from '../../components/Header/Header';

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
