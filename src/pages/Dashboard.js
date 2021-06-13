import React from "react";
import {
  Button,
  Container,
  Jumbotron,
  CardColumns,
  Card,
  Col,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import jumbotron_img from "../images/jumbotron_img.jpg";
import "./style.css";

const Dashboard = () => {
  const { boards } = useGlobalContext();
  console.log(boards);

  return (
    <main className="Dashboard">
      <Jumbotron className="Jumbotron">
        <Container>
          <Row>
            <Col xs={12} md={5} className="Jumbotron-col">
              <h1 className="Jumbotron-title">
                The Perfect Group Card for Special Occasions!
              </h1>
              <p className="Jumbotron-text">
                Celebrate someone with an online group card filled with
                messages, GIFs, photos, and more!
              </p>
              <Button className="Jumbotron-btn">Create Kudoboard</Button>
            </Col>
            <Col xs={12} md={7} className="Jumbotron-col">
              <img
                src={jumbotron_img}
                alt="wedding celebration"
                className="Jumbotron-img"
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
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
