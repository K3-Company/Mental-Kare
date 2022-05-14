import React from "react";
import { ETextAlign } from '../Types';
import DetailedBanner, { EMode } from "../Components/DetailedBanner";

import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <DetailedBanner
            mode={EMode.dark}
            title="Entenda sobre o projeto"
            description="O Mental Kare é uma iniciativa ..."
            image="/img/sobre.jpg"
            textAlign={ETextAlign.LEFT}
            link="/about"
            internLink
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <DetailedBanner
            mode={EMode.light}
            title="Dicas de livros"
            description="Sobre neurocompativel, montessori, TEA ..."
            image="/img/books.png"
            textAlign={ETextAlign.LEFT}
            link="/books"
            internLink
          />
        </Col>
        <Col xs={12} lg={6}>
          <DetailedBanner
            mode={EMode.light}
            title="Para seguir e se informar"
            description="Perfis do intagram relevantes e ..."
            image="/img/accounts.png"
            textAlign={ETextAlign.LEFT}
            link="/accounts"
            internLink
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
