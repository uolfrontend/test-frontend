// Dependencies
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

// Components
import Header from '../../components/Header';

// Imagens
import userImage from '../../assets/user.png';

// Styles
import { Container, Titles, BlockUsers, ItemUser, Circle } from './styles';

function Home() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  async function getApiAllUsers() {
    await api.get().then((response) => {
      if (localStorage.getItem('item')) {
        const get = JSON.parse(localStorage.getItem('item'));
        const concatAll = response.data.customers.concat(get);
        setUsers(concatAll);
      } else {
        setUsers(response.data.customers);
        localStorage.setItem('item', JSON.stringify([]));
      }
    });
  }

  useEffect(() => {
    getApiAllUsers();
  }, []);

  return (
    <Container>
      <Header />

      <div className="container">
        <h1>
          <img src={userImage} alt="" />
          Painel de Clientes
        </h1>

        <Titles>
          <div>
            <h2>Listagem de usuários</h2>
            <p>Escolha um cliente para visualizar os detalhes</p>
          </div>

          <button type="button" onClick={() => history.push('/createUser')}>
            Novo cliente
          </button>
        </Titles>

        <BlockUsers>
          {users.map((u) => (
            <ItemUser key={u.id}>
              <div>
                <p>{u.name}</p>
                <p>{u.email}</p>
              </div>

              <div>
                <p>{u.id}</p>
                <p>{u.phone}</p>
              </div>

              <div className="align">
                <Circle status={u.status} />
                <p>{u.status}</p>
              </div>

              <button
                type="button"
                onClick={() =>
                  history.push('/edit', { index: users.indexOf(u) })
                }
              >
                Editar
              </button>
            </ItemUser>
          ))}
        </BlockUsers>
      </div>
    </Container>
  );
}

export default Home;
