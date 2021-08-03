import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./style.css";

const ShareKudoboardModal = ({
  board,
  showShareKudoboardModal,
  setShowShareKudoboardModal,
}) => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ia9c26d",
        "template_95c43zp",
        e.target,
        "user_2oRUwezs6mtA6iAA1WYeS"
      )
      .then(
        (result) => {
          //   console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
    setShowShareKudoboardModal(false);
  };

  return (
    <Modal
      show={showShareKudoboardModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Deliver your Kudoboard!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Smith"
              name="sender_name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Recipient's Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={board.person}
              name="recipient_name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Recipient's Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="recipient@gmail.com"
              name="recipient_email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Subject</Form.Label>
            <Form.Control
              type="text"
              defaultValue={board.title}
              name="subject"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message to Recipient</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="Congratulations! Your friends and family wanted to send you some well wishes..."
              name="message"
            />
          </Form.Group>
          <Button type="submit" style={{ marginRight: "8px" }}>
            Send
          </Button>
          <Button
            className="red-btn"
            onClick={() => setShowShareKudoboardModal(false)}
          >
            Close
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ShareKudoboardModal;
