import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';

const routes = [
  {
    name: 'Home',
    path: '/',
    page: <Home />,
  },
  {
    name: 'About',
    path: '/about',
    page: <About />,
  },
];

export default routes
