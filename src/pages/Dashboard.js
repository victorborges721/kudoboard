import React, { useState } from "react";
import { Button, Container, CardColumns } from "react-bootstrap";
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
          {boards.length > 0 ? (
            <CardColumns>
              {boards.map((board) => {
                return <KudoboardCard key={board.id} board={board} />;
              })}
            </CardColumns>
          ) : (
            <Container className="noKudos">
              <h1>Celebrate someone with your first Kudoboard!</h1>
              <Button onClick={() => setShowKudoboardModal(true)}>
                Create a Board
              </Button>
            </Container>
          )}
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
