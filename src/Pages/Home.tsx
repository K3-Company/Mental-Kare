import React from "react";
import { ETextAlign } from '../Types';
import DetailedBanner from "../Components/DetailedBanner";

import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className="">
          <DetailedBanner
            title="Entenda sobre o projeto"
            description="O Mental Kare é um Hub ..."
            image="/img/sobre.jpg"
            textAlign={ETextAlign.LEFT}
            link="/about"
            internLink
          />
        </Col>
      </Row>
      {/* <Row>
        <Col className="">
          .col
        </Col>
        <Col className="">
          .col
        </Col>
      </Row> */}
    </Container>
  )
}

export default Home;
