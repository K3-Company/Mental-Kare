import React, { ReactElement } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Books from './Pages/Books';
import Accounts from './Pages/Accounts';

export interface IRoutes {
  name: string;
  path: string;
  page: ReactElement;
}

const routes = [
  {
    name: 'Inicio',
    path: '/',
    page: <Home />,
  },
  {
    name: 'Livros',
    path: '/books',
    page: <Books />,
  },
  {
    name: 'Contas',
    path: '/accounts',
    page: <Accounts />,
  },
  {
    name: 'Sobre',
    path: '/about',
    page: <About />,
  },
];

export default routes
