import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row>
        <Col className="">
          <h1>Sobre</h1>
          <hr/>
          <p>
            O Mental Kare é uma iniciativa sem fins lucrativos sobre saúde mental com os principais objetivos:
            <br/>
            <br/>
            1 - Agregar conteúdo de qualidade e verificado (artigos científicos, perfies, vídeos, podcasts e livros) sobre saúde mental, assim como TEA, TDAH, TOD, entre outros, que ajudem as pessoas a entenderem o que sao esses assuntos e como buscar(em) auxilio.
            <br/>
            <br/>
            2 - Auxiliar famílias que precisam de suporte sobre o assunto, com os devidos direcionamentos.
            <br/>
            <br/>
            3 - Criar um sistema que interligue pessoas que precisam de auxilio ou estão em busca com profissionais qualificados que podem auxiliar nesse momento.
            <br/>
            <br/>
            <br/>
            <i>Caso deseje contribuir para o projeto <a href="https://github.com/K3-Company/Mental-Kare" target="_blank" rel="noreferrer">acesse este link para mais informações</a></i>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default About;
