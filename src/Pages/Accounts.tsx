import React from "react";
import { ETextAlign } from '../Types';
import DetailedBanner, { EMode } from "../Components/DetailedBanner";

import { Col, Container, Row } from "react-bootstrap";

const Accounts = () => {
  return (
    <Container>
      <Row>
        <Col>
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
        <Col>
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

export default Accounts;
