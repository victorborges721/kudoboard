import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteKudoboardModal from "../DeleteKudoboardModal";
import "./style.css";

const KudoboardCard = ({ board }) => {
  const [showDeleteKudoboardModal, setShowDeleteKudoboardModal] =
    useState(false);

  return (
    <React.Fragment>
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
            onClick={() => setShowDeleteKudoboardModal(true)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
      {showDeleteKudoboardModal && (
        <DeleteKudoboardModal
          showDeleteKudoboardModal={showDeleteKudoboardModal}
          setShowDeleteKudoboardModal={setShowDeleteKudoboardModal}
          board={board}
        />
      )}
    </React.Fragment>
  );
};

export default KudoboardCard;
