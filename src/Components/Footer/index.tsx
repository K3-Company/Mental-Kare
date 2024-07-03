import React, { ReactElement } from 'react';
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import './Footer.scss';
import { IRoutes } from '../../routes';

export interface IFooter {
  routes: IRoutes[];
}

const FooterClassName = 'footer';
const FooterImageClassName = `${FooterClassName}__image`;
const FooterMenuClassName = `${FooterClassName}__menu`;
const FooterMenuItemClassName = `${FooterClassName}__menu__item`;
const FooterMenuItemLinkClassName = `${FooterClassName}__menu__item__link`;

const Footer = (props: IFooter): ReactElement => {

  const { routes } = props; 

  return (
    <div
      className={FooterClassName}
    >
      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <Link to="/">
              <img className={FooterImageClassName} src="/mentalkare.png" alt="Mental Kare Logo" />
            </Link>
          </Col>
          <Col xs={12} lg={4}>
            <h3>Administradores</h3>
            <ul className={FooterMenuClassName}>
              <li className={FooterMenuItemClassName}>
                <a
                  className={FooterMenuItemLinkClassName}
                  href="https://www.instagram.com/kelvinbiffi/"
                  target={'_blank'} rel="noreferrer"
                >
                  @kelvinbiffi
                </a>
              </li>
              <li className={FooterMenuItemClassName}>
                <a
                  className={FooterMenuItemLinkClassName}
                  href="https://www.instagram.com/kellenleote/"
                  target={'_blank'} rel="noreferrer"
                >
                  @kellenleote
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} lg={4}>
            <h3>Mapa do site</h3>
            <ul className={FooterMenuClassName}>
              {
                routes.map((route: IRoutes, i) => {
                  return (
                    <li className={FooterMenuItemClassName} key={i}>
                      <Link className={FooterMenuItemLinkClassName} to={route.path}>{route.name}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Footer;
