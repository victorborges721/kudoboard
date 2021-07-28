import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const HowItWorks = () => {
  return (
    <main>
      <div className="HowItWorks-Overview">
        <Container>
          <Row className="Header">
            <h1 className="HowItWorks-Title">How Our Group Cards Work</h1>
            <p className="HowItWorks-Subtitle">
              Start a digital group card for a colleague, friend, or family
              member. Share the link with anyone, anywhere so they can post.
              Deliver when you're ready!
            </p>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={3} className="Step">
              <Row>
                <Col xs={2} className="test">
                  <h2 className="Step-Number">1</h2>
                </Col>
                <Col xs={10}>
                  <h3 className="Step-Title">Create a Kudoboard</h3>
                  <p>
                    Choose a recipient to celebrate with the group greeting
                    card.
                  </p>
                </Col>
              </Row>
              <Row>
                <Image
                  src="https://www.kudoboard.com/consumer/images/process-icons/icon-1.png"
                  className="HowItWorks-Image"
                />
              </Row>
            </Col>
            <Col xs={12} md={6} lg={3} className="Step">
              <Row>
                <Col xs={2}>
                  <h2 className="Step-Number">2</h2>
                </Col>
                <Col xs={10}>
                  <h3 className="Step-Title">Add Your Content</h3>
                  <p>
                    Get creative. Attach messages, photos, and GIFs to the
                    recipient's board.
                  </p>
                </Col>
              </Row>
              <Row>
                <Image
                  src="https://www.kudoboard.com/consumer/images/process-icons/icon-2.png"
                  className="HowItWorks-Image"
                />
              </Row>
            </Col>
            <Col xs={12} md={6} lg={3} className="Step">
              <Row>
                <Col xs={2}>
                  <h2 className="Step-Number">3</h2>
                </Col>
                <Col xs={10}>
                  <h3 className="Step-Title">Enlist Your Group</h3>
                  <p>
                    Invite others to add their contributions and watch the
                    virtual group card grow.
                  </p>
                </Col>
              </Row>
              <Row>
                <Image
                  src="https://www.kudoboard.com/consumer/images/process-icons/icon-3.png"
                  className="HowItWorks-Image"
                />
              </Row>
            </Col>
            <Col xs={12} md={6} lg={3} className="Step">
              <Row>
                <Col xs={2}>
                  <h2 className="Step-Number">4</h2>
                </Col>
                <Col xs={10}>
                  <h3 className="Step-Title">Deliver Appreciation</h3>
                  <p>
                    Deliver it online, print it out as a poster, or play it as a
                    slideshow!
                  </p>
                </Col>
              </Row>
              <Row>
                <Image
                  src="https://www.kudoboard.com/consumer/images/process-icons/icon-4.png"
                  className="HowItWorks-Image"
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default HowItWorks;
