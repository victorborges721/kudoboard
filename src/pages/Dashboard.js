import React from "react";
import { Container, CardColumns } from "react-bootstrap";
import Hero from "../components/Hero";
import KudoboardCard from "../components/KudoboardCard";
import { useGlobalContext } from "../context";
import "./style.css";

const Dashboard = () => {
  const { boards } = useGlobalContext();

  return (
    <main className="Dashboard">
      <Hero />
      <div className="Dashboard-kudoboards">
        <Container>
          <h2>My Kudoboards</h2>
          <CardColumns>
            {boards.map((board) => {
              return <KudoboardCard key={board.id} board={board} />;
            })}
          </CardColumns>
        </Container>
      </div>
    </main>
  );
};

export default Dashboard;
