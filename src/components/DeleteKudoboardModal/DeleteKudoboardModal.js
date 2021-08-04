import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useGlobalContext } from "../../context";
import "./style.css";

const DeleteKudoboardModal = ({
  showDeleteKudoboardModal,
  setShowDeleteKudoboardModal,
  board,
}) => {
  const { deleteKudoboard } = useGlobalContext();

  return (
    <Modal
      show={showDeleteKudoboardModal}
      onHide={() => setShowDeleteKudoboardModal(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>Are you sure you want to delete this Kudoboard?</Modal.Body>
      <Modal.Footer>
        <Button className="red-btn" onClick={() => deleteKudoboard(board.id)}>
          Delete
        </Button>
        <Button onClick={() => setShowDeleteKudoboardModal(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteKudoboardModal;
