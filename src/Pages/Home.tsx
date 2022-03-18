import React from "react";
import { ETextAlign } from '../Types';
import Container from "../Components/Container";
import DetailedBanner from "../Components/DetailedBanner";

const Home = () => {
  return (
    <Container textAlign={ETextAlign.CENTER}>
      <DetailedBanner
        title="Entenda sobre o projeto"
        description="O Mental Kare é um Hub ..."
        image="/img/sobre.jpg"
        textAlign={ETextAlign.LEFT}
        link="/about"
        internLink
      />
    </Container>
  )
}

export default Home;
