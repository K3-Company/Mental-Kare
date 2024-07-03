import React, { ReactElement } from "react";
import { Helmet } from "react-helmet-async";
import BookCard, { IBookCard } from "../../Components/BookCard";
import books from "../../Data/Books";
import { Col, Container, Row } from "react-bootstrap";
import './Books.scss';

const BooksClassName = 'books';
const BooksColumnClassName = 'books__column';

const Books = () => {
  return (
    <div>
      <Helmet>
        <title>Livros - Mental Kare</title>
        <meta name="description" content="Explore nossa seleção de livros sobre neurocompatibilidade, métodos Montessori, TEA, TDAH e mais." />
      </Helmet>
      <Container className={BooksClassName}>
        <Row>
          <h1>Livros</h1>
          <hr/>
          <p>
            Explore nossa seleção de livros sobre neurocompatibilidade, métodos Montessori, TEA, TDAH e mais.
          </p>
        </Row>
        <Row>
          {books.map((props: IBookCard): ReactElement => {
            const { id, image, title, author, buyLink, descr } = props;
            return (
              <Col key={id} xs={12} lg={6} className={BooksColumnClassName}>
                <BookCard
                  id={id}
                  image={image}
                  title={title}
                  author={author}
                  buyLink={buyLink}
                  descr={descr}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Books;
