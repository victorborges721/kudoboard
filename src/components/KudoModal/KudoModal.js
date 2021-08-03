import React, { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useGlobalContext } from "../../context";
import "./style.css";

const KudoModal = ({ showKudoModal, setShowKudoModal, board }) => {
  const { newKudo } = useGlobalContext();
  const [inputFrom, setInputFrom] = useState("");
  const [inputMsg, setInputMsg] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const boardId = board.id;

  const handleNewKudo = (boardId, inputFrom, inputMsg, inputUrl) => {
    if (inputFrom && inputMsg) {
      newKudo(boardId, inputFrom, inputMsg, inputUrl);
      setShowKudoModal(false);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showKudoModal}
      onHide={() => setShowKudoModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add a Post</Modal.Title>
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
              placeholder="Alex"
              onChange={(e) => setInputFrom(e.target.value)}
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
              placeholder="Congratulations!"
              onChange={(e) => setInputMsg(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Add an{" "}
              <Button
                href="https://unsplash.com/"
                target="_blank"
                className="Img-Btn"
              >
                Image
              </Button>{" "}
              or{" "}
              <Button
                href="https://giphy.com/"
                target="_blank"
                className="Img-Btn"
              >
                GIF
              </Button>{" "}
              to your Kudoboard:
            </Form.Label>
            <Form.Text className="text-muted">
              On GIPHY, click 'Copy Link' and paste it here. On Unsplash,
              right-click an image, select 'Copy Image Address', and paste it
              here.
            </Form.Text>
            <Form.Control
              type="url"
              placeholder="https://media.giphy.com/media/bq1PRO9CLPHmURBvv2/giphy.gif"
              onChange={(e) => setInputUrl(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="submit"
          onClick={() => handleNewKudo(boardId, inputFrom, inputMsg, inputUrl)}
        >
          Post
        </Button>
        <Button onClick={() => setShowKudoModal(false)} className="red-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default KudoModal;
