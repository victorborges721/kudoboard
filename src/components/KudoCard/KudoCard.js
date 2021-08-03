import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useGlobalContext } from "../../context";
import EditKudoModal from "../EditKudoModal";
import DeleteKudoModal from "../DeleteKudoModal";
import "./style.css";

const KudoCard = ({ kudo, board }) => {
  const { deleteKudo } = useGlobalContext();
  const [showEditKudoModal, setShowEditKudoModal] = useState(false);
  const [showDeleteKudoModal, setShowDeleteKudoModal] = useState(false);
  return (
    <React.Fragment>
      <Card className="Kudo">
        {kudo.thumb && (
          <Card.Img src={kudo.thumb} alt="kudo image" variant="top" />
        )}
        <Card.Body>
          <Card.Text>{kudo.msg}</Card.Text>
          <Card.Text className="Kudo-from">From: {kudo.from}</Card.Text>
          <div className="Kudo-btns">
            <Button
              className="Kudo-btn"
              onClick={() => setShowEditKudoModal(true)}
            >
              Edit
            </Button>
            <Button
              className="Kudo-btn red-btn"
              onClick={() => setShowDeleteKudoModal(true)}
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
      {showEditKudoModal && (
        <EditKudoModal
          showEditKudoModal={showEditKudoModal}
          setShowEditKudoModal={setShowEditKudoModal}
          kudo={kudo}
          board={board}
        />
      )}
      {showDeleteKudoModal && (
        <DeleteKudoModal
          showDeleteKudoModal={showDeleteKudoModal}
          setShowDeleteKudoModal={setShowDeleteKudoModal}
          kudo={kudo}
          board={board}
        />
      )}
    </React.Fragment>
  );
};

export default KudoCard;
