import React, { useEffect, useState } from 'react';

import userList from '../database/users';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(userList.customers));
  }
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')));

  return <UserContext.Provider value={{ users, setUsers }}>{children}</UserContext.Provider>;
};
