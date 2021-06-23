import React, { useState } from "react";
import { Modal, Form, Alert, Button } from "react-bootstrap";
import { useGlobalContext } from "../../context";
import "./style.css";

const KudoboardModal = ({ showKudoboardModal, setShowKudoboardModal }) => {
  const { newKudoboard } = useGlobalContext();
  const [inputFor, setInputFor] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputTheme, setInputTheme] = useState("");
  const [inputThumb, setInputThumb] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleNewKudoboard = (inputFor, inputTitle, inputTheme, inputThumb) => {
    if (inputFor && inputTitle && inputTheme && inputThumb) {
      newKudoboard(inputFor, inputTitle, inputTheme, inputThumb);
      setShowKudoboardModal(false);
    } else {
      setShowAlert(true);
    }
  };
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showKudoboardModal}
      onHide={() => setShowKudoboardModal(false)}
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
              Please enter valid inputs for 'For', 'Title', 'Theme', and
              'Image'.
            </Alert>
          )}
          <Form.Group>
            <Form.Label>For:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Stephanie"
              onChange={(e) => setInputFor(e.target.value)}
              required
            />
            <Form.Text className="text-muted">Who are we honoring?</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Congrats on Graduating!"
              onChange={(e) => setInputTitle(e.target.value)}
              required
            />
            <Form.Text className="text-muted">
              This will be displayed at the top of the Kudoboard.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Theme:</Form.Label>
            <Form.Control
              onChange={(e) => setInputTheme(e.target.value)}
              required
              as="select"
            >
              <option defaultValue disabled>
                Select...
              </option>
              <option>Birthday</option>
              <option>Congratulations</option>
              <option>Retirement</option>
              <option>Wedding</option>
            </Form.Control>
            <Form.Text className="text-muted">What's the occasion?</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Image:</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
              onChange={(e) => setInputThumb(e.target.value)}
            />
            <Form.Text className="text-muted">
              Select a <a href="https://giphy.com/" target="_blank" rel='noreferrer'>GIF</a> or{" "}
              <a href="https://unsplash.com/" target="_blank" rel='noreferrer'>photo</a> as a preview to your
              Kudoboard!
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="submit"
          onClick={() =>
            handleNewKudoboard(inputFor, inputTitle, inputTheme, inputThumb)
          }
        >
          Post
        </Button>
        <Button
          onClick={() => setShowKudoboardModal(false)}
          className="red-btn"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default KudoboardModal;
