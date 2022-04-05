import React from 'react';

import api from '../../services';

import UserCard from '../../components/UserCard';

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

  const handleGetUsers = async () => {
    try {
      if (users) {
        return;
      }

      const response = await api.get('');

      setUsers(response.data.customers);
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
      </SectionInfo>
      {users?.map((user) => (
        <UserCard data={user} key={user.id} />
      ))}
      <Text style={{ marginTop: 40 }}>Exibindo {users?.length} clientes</Text>
    </>
  );
};

export default Home;
