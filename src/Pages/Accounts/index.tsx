import React, { ReactElement } from "react";
import { Helmet } from "react-helmet-async";
import InstagramProfile, { IInstagramProfile } from "../../Components/InstagramProfile";
import { Col, Container, Row } from "react-bootstrap";
import instagramProfiles from "../../Data/Accounts";
import './Accounts.scss';

const AccountsClassName = 'accounts';
const AccountsColumnClassName = 'accounts__column';

const Accounts = (): ReactElement => {
  return (
    <div>
      <Helmet>
        <title>Perfis - Mental Kare</title>
        <meta name="description" content="Descubra perfis valiosos no Instagram para seguir, focados em dicas e suporte em saúde mental." />
      </Helmet>
      <Container className={AccountsClassName}>
        <Row>
          <h1>Perfis</h1>
          <hr/>
          <p>
            Descubra perfis valiosos no Instagram para seguir, focados em dicas e suporte em saúde mental.
          </p>
        </Row>
        <Row>
          {instagramProfiles.map((props: IInstagramProfile): ReactElement => {
            const { id, image, title, instagram, descr } = props;
            return (
              <Col key={id} xs={12} sm={6} lg={4} className={AccountsColumnClassName}>
                <InstagramProfile
                  id={id}
                  image={image}
                  title={title}
                  instagram={instagram}
                  descr={descr}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Accounts;