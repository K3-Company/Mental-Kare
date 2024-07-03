import React, { useState, ReactElement } from 'react';
import { Link } from "react-router-dom";
import { IRoutes } from '../../routes';
import './Navigation.scss';

export interface INavigation {
  routes: IRoutes[];
}

const Navigation = (props: INavigation): ReactElement => {
  const { routes } = props; 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="navigation__menu-icon" onClick={toggleMenu}>
        <div className="navigation__menu-icon__line"></div>
        <div className="navigation__menu-icon__line"></div>
        <div className="navigation__menu-icon__line"></div>
      </div>
      <ul className={`navigation__menu ${isOpen ? 'navigation__menu--open' : ''}`}>
        {routes.map((route: IRoutes, i) => (
          <li className="navigation__menu__item" key={i}>
            <Link className="navigation__menu__item__link" to={route.path} onClick={closeMenu}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
      {isOpen && <div className="navigation__overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navigation;