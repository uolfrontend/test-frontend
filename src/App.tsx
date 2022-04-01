import './App.css';
import { Outlet } from 'react-router-dom';
import logo from './assets/logo.jpeg';
import person from './assets/person.svg';
import { FC } from 'react';

const App: FC = () => {
  return (
    <>
      <header className='flex justify-center bg-black w-full'>
        <img className='h-24' src={logo} alt="" />
      </header>
      <div className='max-w-5xl w-full pt-24 px-4' >
        <div className='flex items-center pb-4' >
          <img className='h-12' src={person} alt="" />
          <h1>Painel de clientes</h1>
        </div>
        <hr className='pb-4' />
        <Outlet />
      </div>
    </>
  );
}

export default App;
