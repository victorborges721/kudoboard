import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, CardColumns, Card } from "react-bootstrap";
import { useGlobalContext } from "../context";
import "./style.css";

const Kudoboard = () => {
  const { id } = useParams();
  const { boards } = useGlobalContext();
  const board = boards[id];

  return (
    <main>
      <h1>{board.title}</h1>
      <Container>
        <CardColumns>
          {board.kudos.map((kudo) => {
            return (
              <Card key={kudo.id}>
                <Card.Img src={kudo.thumb} alt="kudo image" variant="top" />
                <Card.Body>
                  <Card.Text>{kudo.msg}</Card.Text>
                  <Card.Text style={{ textAlign: "right" }}>
                    From: {kudo.from}
                  </Card.Text>
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
