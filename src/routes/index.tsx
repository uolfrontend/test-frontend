import { Routes, Route, Outlet } from 'react-router-dom';

import MainLayout from '../components/Layouts/Main';

import EditUser from '../pages/EditUser';
import CreateUser from '../pages/CreateUser';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Outlet />
          </MainLayout>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="edit-user/:id" element={<EditUser />} />
        <Route path="create-user" element={<CreateUser />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
