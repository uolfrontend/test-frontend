import React from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services';
import customers from '../../constants/customers';

import UserCard from '../../components/UserCard';
import Button from '../../components/Button';

import useLocalStorage from '../../hooks/useLocalStorage';

import { SectionInfo, Title, Text } from './styles';

interface UsersData {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive' | 'waiting' | 'disabled';
}

const Home: React.FC = () => {
  const [users, setUsers] = useLocalStorage<UsersData[]>('users');

  const navigate = useNavigate();

  const handleGetUsers = async () => {
    try {
      if (users) {
        return;
      }

      // Api estava com problema de CORS, para conseguir enviar o deploy utilizei os dados no local
      // const response = await api.get('');

      setUsers(customers);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <>
      <SectionInfo>
        <div>
          <Title>Listagem de usuários</Title>
          <Text>Escolha um cliente para visualizar os detalhes</Text>
        </div>
        <Button
          colorScheme="secondary"
          size="sm"
          onClick={() => navigate('/create-user')}
        >
          Novo Cliente
        </Button>
      </SectionInfo>
      {users?.map((user) => (
        <UserCard data={user} key={user.id} />
      ))}
      <Text style={{ marginTop: 40 }}>Exibindo {users?.length} clientes</Text>
    </>
  );
};

export default Home;
