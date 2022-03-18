import React from "react";
import { ETextAlign } from '../Types';
import Container from "../Components/Container";

const About = () => {
  return (
    <Container textAlign={ETextAlign.LEFT}>
      <>
        <h1>Sobre</h1>
        <hr/>
        <p>
          O Mental Kare é um Hub de saúde mental com 3 principais objetivos:
          <br/>
          <br/>
          1 - Agregar conteúdo de qualidade e verificado sobre TEA, TDAH, TOD, entre outros, como artigos científicos, vídeos, livros, entre outros que ajudem as pessoas a entenderem o que sao esses assuntos.
          <br/>
          <br/>
          2 - Auxiliar famílias que precisam de suporte sobre o assunto
          <br/>
          <br/>
          3 - Criar um sistema nacional que interligue de pessoas que precisam de tratamento ou estão em busca com profissionais qualificados que podem auxiliar nesse momento
          <br/>
          <br/>
          <br/>
          <i>Este é um projeto OpenSource, caso deseje contribuir para o projeto <a href="https://github.com/K3-Company/Mental-Kare" target="_blank" rel="noreferrer">acesse este link para mais informações</a></i>
        </p>
      </>
    </Container>
  )
}

export default About;
