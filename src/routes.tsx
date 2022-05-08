import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Books from './Pages/Books';
import Accounts from './Pages/Accounts';

const routes = [
  {
    name: 'Inicio',
    path: '/',
    page: <Home />,
  },
  {
    name: 'Sobre',
    path: '/about',
    page: <About />,
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
];

export default routes
