import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../images/kudoboard-logo.png";
import "./style.css";

const NavigationBar = () => {
  return (
    <Navbar bg="light" className="navbar" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <span>
              <img src={logo} alt="kudoboard logo" className="logo" />
            </span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey="/">
            <LinkContainer exact to="/">
              <Nav.Link eventKey="link-1" className="navbar-link">
                Dashboard
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/howitworks">
              <Nav.Link eventKey="link-2" className="navbar-link">
                How It Works
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
