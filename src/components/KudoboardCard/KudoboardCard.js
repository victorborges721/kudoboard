import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const KudoboardCard = ({ board }) => {
  return (
    <Card>
      <Card.Img src={board.thumb} alt="board photo" variant="top" />
      <Card.Body>
        <Card.Title>{board.title}</Card.Title>
        <Card.Text>For: {board.for}</Card.Text>
        <Link to={`/kudoboard/${board.id}`}>
          <Button variant="primary">Visit Kudoboard</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default KudoboardCard;
