import React, { ReactElement } from 'react';
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { IRoutes } from '../../routes';
import Navigation from '../Navigation';
import './Header.scss';

export interface IHeader {
  routes: IRoutes[];
}

const HeaderClassName = 'header';
const HeaderImageClassName = `${HeaderClassName}__image`;
const HeaderMenuWrapperClassName = `${HeaderClassName}__wrapper`;

const Header = (props: IHeader): ReactElement => {

  const { routes } = props; 

  return (
    <div
      className={HeaderClassName}
    >
      <Container>
        <Row>
          <Col className={HeaderMenuWrapperClassName}>
            <Link to="/">
              <img className={HeaderImageClassName} src="/mentalkare.png" alt="Mental Kare Logo" />
            </Link>
            <Navigation routes={routes} />
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Header;
