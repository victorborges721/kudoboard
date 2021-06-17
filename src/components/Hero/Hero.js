import React from "react";
import { Button, Container, Col, Jumbotron, Row } from "react-bootstrap";
import jumbotron_img from "../../images/jumbotron_img.jpg";

import "./style.css";

const Hero = ({ setShowKudoboardModal }) => {
  return (
    <Jumbotron className="Jumbotron">
      <Container>
        <Row>
          <Col xs={12} md={5} className="Jumbotron-col">
            <h1 className="Jumbotron-title">
              The Perfect Group Card for Special Occasions!
            </h1>
            <p className="Jumbotron-text">
              Celebrate someone with an online group card filled with messages,
              GIFs, photos, and more!
            </p>
            <Button
              onClick={() => setShowKudoboardModal(true)}
              className="Jumbotron-btn"
            >
              Create Kudoboard
            </Button>
          </Col>
          <Col xs={12} md={7} className="Jumbotron-col">
            <img
              src={jumbotron_img}
              alt="wedding celebration"
              className="Jumbotron-img"
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
