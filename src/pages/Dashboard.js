import React, { useState } from "react";
import { Container, CardColumns } from "react-bootstrap";
import Hero from "../components/Hero";
import KudoboardCard from "../components/KudoboardCard";
import KudoboardModal from "../components/KudoboardModal";
import { useGlobalContext } from "../context";
import "./style.css";

const Dashboard = () => {
  const { boards } = useGlobalContext();
  const [showKudoboardModal, setShowKudoboardModal] = useState(false);

  return (
    <main className="Dashboard">
      <Hero setShowKudoboardModal={setShowKudoboardModal} />
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
      {showKudoboardModal && (
        <KudoboardModal
          showKudoboardModal={showKudoboardModal}
          setShowKudoboardModal={setShowKudoboardModal}
        />
      )}
    </main>
  );
};

export default Dashboard;
