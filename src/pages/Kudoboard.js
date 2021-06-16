import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, CardColumns, Card, Modal } from "react-bootstrap";
import { useGlobalContext } from "../context";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const Kudoboard = () => {
  const { id } = useParams();
  const { boards, newKudo } = useGlobalContext();
  const [kudoModal, setKudoModal] = useState(false);
  const board = boards[id];

  return (
    <main className={`Kudoboard-${board.theme}`}>
      <div className={`Kudoboard-header Kudoboard-header-${board.theme}`}>
        <h1>{board.title}</h1>
        <Button onClick={() => setKudoModal(true)}>+ Add to board</Button>
      </div>
      <Container>
        <CardColumns>
          {board.kudos.map((kudo) => {
            return (
              <Card key={kudo.id} className="Kudo">
                <Card.Img src={kudo.thumb} alt="kudo image" variant="top" />
                <Card.Body>
                  <Card.Text>{kudo.msg}</Card.Text>
                  <Card.Text className="Kudo-from">From: {kudo.from}</Card.Text>
                  <div className="Kudo-btns">
                    <Button className="Kudo-btn">Edit</Button>
                    <Button className="Kudo-btn red-btn">Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
      {kudoModal && (
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={kudoModal}
          onHide={() => setKudoModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add a Post
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>this is a test modal</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => newKudo(board.id, uuidv4(), "Dad", "hello", null)}
            >
              Post
            </Button>
            <Button onClick={() => setKudoModal(false)} className="red-btn">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </main>
  );
};

export default Kudoboard;
