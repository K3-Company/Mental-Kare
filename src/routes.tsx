import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';

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
];

export default routes
