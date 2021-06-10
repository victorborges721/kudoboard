import React from "react";
import { Jumbotron, CardColumns, Card } from "react-bootstrap";
import { KudoboardCard } from "../components/KudoboardCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <main className="Dashboard">
      <Jumbotron></Jumbotron>
      <div className="Dashboard-kudoboards"></div>
    </main>
  );
};

export default Dashboard;
