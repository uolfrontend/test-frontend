import React, { useEffect, useState } from 'react';

import * as yup from 'yup';

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
  const [userStatus, setUserStatus] = useState({});
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
  useEffect(() => {
    setUserStatus({
      label: translateStatus(user.status),
      value: user.status
    });
  }, [user]);

  const schema = yup.object().shape({
    id: yup
      .string()
      .required()
      .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'Document is not valid!'),
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup
      .string()
      .matches(/^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/, 'Phone is not valid!')
      .required(),
    status: yup.string().required()
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
        setUserStatus,
        schema
      }}>
      {children}
    </UserContext.Provider>
  );
};
