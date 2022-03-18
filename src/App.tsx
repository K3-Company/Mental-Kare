import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Header';
import routes from './routes';

import './App.scss';

function App() {
  return (
    <Router>
      <Header routes={routes} />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Routes>
        {
          routes.map((route, i) => {
            return (
              <Route path={route.path} element={route.page} key={i} />
            )
          })
        }
      </Routes>
    </Router>
  );
}

export default App;
