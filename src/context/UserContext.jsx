import React, { useEffect, useState } from 'react';

import userList from '../database/users';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(userList.customers));
  }
  const [user, setUser] = useState({});
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')));
  const [usersStatus, setUsersStatus] = useState([
    {
      value: 'active',
      label: 'Ativo'
    },
    {
      value: 'inactive',
      label: 'Inativo'
    },
    {
      value: 'waiting',
      label: 'Aguardando Aprovação'
    },
    {
      value: 'disabled',
      label: 'Desativado'
    }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleState = () => {
    setIsModalOpen(!isModalOpen);
  };

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

  const [userStatus, setUserStatus] = useState({
    label: translateStatus(user.status),
    value: user.status
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        users,
        setUsers,
        handleState,
        isModalOpen,
        usersStatus,
        translateStatus,
        userStatus,
        setUserStatus
      }}>
      {children}
    </UserContext.Provider>
  );
};
