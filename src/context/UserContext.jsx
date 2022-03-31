import React, { useEffect, useState } from 'react';

import * as yup from 'yup';

import userList from '../database/users';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(userList.customers));
  }
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
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
  const [reload, setReload] = useState(false);

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

  const editUser = (user) => {
    let users = JSON.parse(localStorage.getItem('users'));
    let foundUser = users.findIndex((x) => x.id == user.id);
    users[foundUser] = user;
    localStorage.setItem('users', JSON.stringify(users));
    setReload(true);
    setIsModalOpen(false);
    return true;
  };

  const createUser = (data) => {
    let userData = {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      status: data.status
    };
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    setReload(true);
    return true;
  };

  useEffect(() => {
    setUserStatus({
      label: translateStatus(user.status),
      value: user.status
    });
  }, [user]);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('users')));
    setReload(false);
  }, [reload]);

  const schema = yup.object().shape({
    id: yup
      .string()
      .required('Document is required.')
      .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'Document is not valid.'),
    name: yup.string().required('Name is required.'),
    email: yup.string().email().required('Email is required.'),
    phone: yup
      .string()
      .matches(/^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/, 'Phone is not valid.')
      .required(),
    status: yup.string().required('Status is required.')
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
        schema,
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        userPhone,
        setUserPhone,
        editUser,
        createUser
      }}>
      {children}
    </UserContext.Provider>
  );
};
