import React from "react";
import { Helmet } from "react-helmet-async";
import { ETextAlign } from '../Types';
import DetailedBanner, { EMode } from "../Components/DetailedBanner";

import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Início - Mental Kare</title>
        <meta name="description" content="Bem-vindo ao Mental Kare. Explore dicas de livros sobre neurocompatibilidade, perfis do Instagram e conheça nosso projeto de saúde mental." />
      </Helmet>
      <Container>
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
      </Container>

    </div>
  )
}

export default Home;
