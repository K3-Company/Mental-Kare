import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header routes={routes} />
        
        <main>
          <Routes>
            {
              routes.map((route, i) => {
                return (
                  <Route path={route.path} element={route.page} key={i} />
                )
              })
            }
          </Routes>
        </main>

        <Footer routes={routes} />
      </Router>
    </div>
  );
}

export default App;
