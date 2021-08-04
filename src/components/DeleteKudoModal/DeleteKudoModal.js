import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useGlobalContext } from "../../context";
import "./style.css";

const DeleteKudoModal = ({
  showDeleteKudoModal,
  setShowDeleteKudoModal,
  kudo,
  board,
}) => {
  const { deleteKudo } = useGlobalContext();

  return (
    <Modal
      show={showDeleteKudoModal}
      onHide={() => setShowDeleteKudoModal(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>Are you sure you want to delete this Kudo?</Modal.Body>
      <Modal.Footer>
        <Button
          className="red-btn"
          onClick={() => deleteKudo(board.id, kudo.id)}
        >
          Delete
        </Button>
        <Button onClick={() => setShowDeleteKudoModal(false)}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteKudoModal;
