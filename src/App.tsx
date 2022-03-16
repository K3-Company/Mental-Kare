import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import routes from './routes';

import './App.scss';

function App() {
  return (
    <Router>
      <img src="/mentalkare.png" alt="Mental Kare Logo" />
      <ul>
        {
          routes.map((route) => {
            return (
              <li>
                <Link to={route.path}>{route.name}</Link>
              </li>
            )
          })
        }
      </ul>

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Routes>
        {
          routes.map((route) => {
            return (
              <Route path={route.path} element={route.page} />
            )
          })
        }
      </Routes>
    </Router>
  );
}

export default App;
