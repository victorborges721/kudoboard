import React from "react";
import { Card, Button } from "react-bootstrap";
import { useGlobalContext } from "../../context";
import "./style.css";

const KudoCard = ({ kudo, board }) => {
  const { deleteKudo } = useGlobalContext();
  return (
    <Card className="Kudo">
      {kudo.thumb && (
        <Card.Img src={kudo.thumb} alt="kudo image" variant="top" />
      )}
      <Card.Body>
        <Card.Text>{kudo.msg}</Card.Text>
        <Card.Text className="Kudo-from">From: {kudo.from}</Card.Text>
        <div className="Kudo-btns">
          <Button className="Kudo-btn">Edit</Button>
          <Button
            className="Kudo-btn red-btn"
            onClick={() => deleteKudo(board.id, kudo.id)}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default KudoCard;
