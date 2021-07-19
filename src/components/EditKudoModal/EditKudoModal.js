import React, { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useGlobalContext } from "../../context";
import "./style.css";

const EditKudoModal = ({
  showEditKudoModal,
  setShowEditKudoModal,
  kudo,
  board,
}) => {
  const { editKudo } = useGlobalContext();
  const [newInputFrom, setNewInputFrom] = useState(kudo.from);
  const [newInputMsg, setNewInputMsg] = useState(kudo.msg);
  const [newInputUrl, setNewInputUrl] = useState(kudo.thumb);
  const [showAlert, setShowAlert] = useState(false);
  const boardId = board.id;
  const kudoId = kudo.id;

  const handleEditKudo = (newInputFrom, newInputMsg, newInputUrl) => {
    if (newInputFrom && newInputMsg) {
      editKudo(boardId, kudoId, newInputFrom, newInputMsg, newInputUrl);
      setShowEditKudoModal(false);
    } else {
      setShowAlert(true);
    }
  };
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showEditKudoModal}
      onHide={() => setShowEditKudoModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit This Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {showAlert && (
            <Alert
              variant="danger"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Please enter valid inputs for 'From' and 'Message'. A URL is
              optional.
            </Alert>
          )}
          <Form.Group>
            <Form.Label>From:</Form.Label>
            <Form.Control
              type="text"
              value={newInputFrom}
              onChange={(e) => setNewInputFrom(e.target.value)}
              required
            />
            <Form.Text className="text-muted">
              Enter your name or 'Anonymous' if you want to keep this a secret.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Message:</Form.Label>
            <Form.Control
              type="text"
              value={newInputMsg}
              onChange={(e) => setNewInputMsg(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              GIF or Photo Link: <span className="text-muted">(Optional)</span>
            </Form.Label>
            <Form.Control
              type="url"
              value={newInputUrl}
              onChange={(e) => setNewInputUrl(e.target.value)}
            />
            <Form.Text className="text-muted">
              Add a link to a{" "}
              <a href="https://giphy.com/" target="_blank" rel="noreferrer">
                GIF
              </a>{" "}
              or{" "}
              <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
                photo
              </a>{" "}
              to make your Kudo pop!
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="submit"
          onClick={() => handleEditKudo(newInputFrom, newInputMsg, newInputUrl)}
        >
          Save
        </Button>
        <Button onClick={() => setShowEditKudoModal(false)} className="red-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditKudoModal;
