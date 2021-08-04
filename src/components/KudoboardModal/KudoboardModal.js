import React, { useState } from "react";
import { Modal, Form, Alert, Button } from "react-bootstrap";
import { useGlobalContext } from "../../context";
import { AiFillCamera } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
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
        <Modal.Title id="contained-modal-title-vcenter">
          Create a Kudoboard
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
              Please enter valid inputs for 'For', 'Title', 'Theme', and
              'Image'.
            </Alert>
          )}
          <Form.Group>
            <Form.Label>Who is this Kudoboard for?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Stephanie"
              onChange={(e) => setInputFor(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              What title would you like on top of the Kudoboard?
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Congrats on Graduating!"
              onChange={(e) => setInputTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Theme:</Form.Label>
            <Form.Control
              onChange={(e) => setInputTheme(e.target.value)}
              required
              as="select"
              defaultValue="Select..."
              aria-label="Select dropdown"
            >
              <option disabled>Select...</option>
              <option>Birthday</option>
              <option>Congratulations</option>
              <option>Retirement</option>
              <option>Wedding</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <Button
                href="https://unsplash.com/"
                target="_blank"
                className="Img-Btn"
              >
                <AiFillCamera /> Add Image
              </Button>{" "}
              <Button
                href="https://giphy.com/"
                target="_blank"
                className="Img-Btn"
              >
                <BiSmile /> Add GIF
              </Button>{" "}
            </Form.Label>
            <Form.Text className="text-muted">
              On GIPHY, click 'Copy Link' and paste it here. On Unsplash,
              right-click an image, select 'Copy Image Address', and paste it
              here.
            </Form.Text>
            <Form.Control
              type="url"
              placeholder="https://media.giphy.com/media/WRL7YgP42OKns22wRD/giphy.gif"
              onChange={(e) => setInputThumb(e.target.value)}
            />
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
