import React, { ReactElement } from "react";
import BookCard, { IBookCard } from "../Components/BookCard";
import books from "../Data/Books";

import { Col, Container, Row } from "react-bootstrap";

const Books = () => {
  return (
    <Container>
      <Row>
        {books.map((props: IBookCard): ReactElement => {
          const { id, image, title, author, buyLink, descr } = props;
          return (
            <Col key={id} xs={12} lg={6}>
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
  )
}

export default Books;
