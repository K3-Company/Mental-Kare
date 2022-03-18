import React, { ReactElement } from 'react';
import { Link } from "react-router-dom";
import { ETextAlign } from '../../Types';
import Container from '../Container';
import './Header.scss';

export interface IRoutes {
  name: string;
  path: string;
  page: ReactElement;
}

export interface IHeader {
  routes: IRoutes[];
}

const HeaderClassName = 'header';
const HeaderImageClassName = `${HeaderClassName}__image`;
const HeaderMenuClassName = `${HeaderClassName}__menu`;
const HeaderMenuItemClassName = `${HeaderClassName}__menu__item`;
const HeaderMenuItemLinkClassName = `${HeaderClassName}__menu__item__link`;

const Header = (props: IHeader): ReactElement => {

  const { routes } = props; 

  return (
    <div
      className={HeaderClassName}
    >
      <Container textAlign={ETextAlign.CENTER}>
        <>
          <Link to="/">
            <img className={HeaderImageClassName} src="/mentalkare.png" alt="Mental Kare Logo" />
          </Link>
          <ul className={HeaderMenuClassName}>
            {
              routes.map((route: IRoutes, i) => {
                return (
                  <li className={HeaderMenuItemClassName} key={i}>
                    <Link className={HeaderMenuItemLinkClassName} to={route.path}>{route.name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </>
      </Container>
    </div>
  )
};

export default Header;
