import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Info from '../../components/Info';
import Card from '../../components/Card';
import TextNormal from '../../components/TextNormal';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

function Home() {
  const history = useHistory();
  const [usuarios, setUsuarios] = useState([]);

  const getHome = async () => {
    if (localStorage.getItem('users') == null) {
      await api.get().then(response => {
        const users = response.data.customers;
        localStorage.setItem('users', JSON.stringify(users));
        setUsuarios(users);
        console.log(usuarios);
      });
    } else {
      let users = localStorage.getItem('users');
      users = JSON.parse(users);
      setUsuarios(users);
      console.log(usuarios);
    }
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <Info />
        <div className="lista">
          {usuarios.map(usuario => {
            return (
              <Card
                nome={usuario.name}
                email={usuario.email}
                cpf={usuario.id}
                
                telefone={usuario.phone}
                status={usuario.status}
              />
            );
          })}
        </div>
        <TextNormal>Exibindo {usuarios.length} clientes.</TextNormal>
      </S.Container>
    </>
  );
}

export default Home;
