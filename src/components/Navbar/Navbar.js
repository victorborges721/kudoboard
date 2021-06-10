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
              <img src={logo} className="logo" />
            </span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey="/">
            <LinkContainer exact to="/">
              <Nav.Link eventKey="link-1">Dashboard</Nav.Link>
            </LinkContainer>
            <Nav.Link
              eventKey="link-2"
              // onSelect={}
            >
              New Board
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
