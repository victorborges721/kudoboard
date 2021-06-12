import React from "react";
import {
  Button,
  Container,
  Jumbotron,
  CardColumns,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Dashboard = () => {
  const { boards } = useGlobalContext();
  console.log(boards);

  return (
    <main className="Dashboard">
      <Jumbotron></Jumbotron>
      <div className="Dashboard-kudoboards">
        <Container>
          <h2>My Kudoboards</h2>
          <CardColumns>
            {boards.map((board) => {
              return (
                <Card key={board.id}>
                  <Card.Img src={board.thumb} alt="board photo" variant="top" />
                  <Card.Body>
                    <Card.Title>{board.title}</Card.Title>
                    <Card.Text>For: {board.for}</Card.Text>
                    <Link to={`/kudoboard/${board.id}`}>
                      <Button variant="primary">Visit Kudoboard</Button>
                    </Link>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </Container>
      </div>
    </main>
  );
};

export default Dashboard;
