import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Error = () => {
  return (
    <main className="Error">
      <h1>Oops! This page doesn't exist.</h1>
      <LinkContainer to="/">
        <Button>Return to Dashboard</Button>
      </LinkContainer>
    </main>
  );
};

export default Error;
