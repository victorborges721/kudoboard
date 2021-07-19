import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./style.css";

const KudoboardCard = ({ board }) => {
  const { deleteKudoboard } = useGlobalContext();

  return (
    <Card>
      <Card.Img src={board.thumb} alt="board photo" variant="top" />
      <Card.Body>
        <Card.Title>{board.title}</Card.Title>
        <Card.Text>For: {board.person}</Card.Text>
        <Link to={`/kudoboard/${board.id}`}>
          <Button className="Kudoboard-btn" variant="primary">
            Visit Kudoboard
          </Button>
        </Link>
        <Button
          className="red-btn Kudoboard-btn"
          onClick={() => deleteKudoboard(board.id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default KudoboardCard;
