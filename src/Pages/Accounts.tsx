import React, { ReactElement } from "react";
import AccountCard, { IAccountCard } from "../Components/AccountCard";
import accounts from "../Data/Accounts";

import { Col, Container, Row } from "react-bootstrap";

const Accounts = () => {
  return (
    <Container>
      <Row>
        {accounts.map((props: IAccountCard): ReactElement => {
          const { id, image, title, author, buyLink, descr } = props;
          return (
            <Col key={id} xs={12} lg={6}>
              <AccountCard
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

export default Accounts;
