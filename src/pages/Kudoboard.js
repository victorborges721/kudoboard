import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, CardColumns, Card } from "react-bootstrap";
import { useGlobalContext } from "../context";
import "./style.css";

const Kudoboard = () => {
  const { id } = useParams();
  const { boards } = useGlobalContext();
  const board = boards[id];
  console.log(board.background);

  return (
    <main className={`Kudoboard-${board.theme}`}>
      <div className={`Kudoboard-header Kudoboard-header-${board.theme}`}>
        <h1>{board.title}</h1>
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
                    <Button className="Kudo-btn">Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </main>
  );
};

export default Kudoboard;
