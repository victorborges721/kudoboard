import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useGlobalContext } from "../../context";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const KudoModal = ({ showKudoModal, setShowKudoModal, board }) => {
  const { newKudo } = useGlobalContext();
  const [inputFrom, setInputFrom] = useState("");
  const [inputMsg, setInputMsg] = useState("");
  const [inputUrl, setInputUrl] = useState("");

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
          <Form.Group>
            <Form.Label>From:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Alex"
              onChange={(e) => setInputFrom(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Congratulations!"
              onChange={(e) => setInputMsg(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>From:</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://media.giphy.com/media/bq1PRO9CLPHmURBvv2/giphy.gif"
              onChange={(e) => setInputUrl(e.target.value)}
            />
            <Form.Text className="text-muted">
              Add a link to a <a href="https://giphy.com/">GIF</a> or photo to
              make your Kudo pop!
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            newKudo(board.id, uuidv4(), inputFrom, inputMsg, inputUrl);
            setShowKudoModal(false);
          }}
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
