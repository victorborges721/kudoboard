import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, CardColumns } from "react-bootstrap";
import KudoCard from "../components/KudoCard";
import KudoModal from "../components/KudoModal";
import { useGlobalContext } from "../context";
import "./style.css";

const Kudoboard = () => {
  const { id } = useParams();
  const { boards, kudos } = useGlobalContext();
  const [showKudoModal, setShowKudoModal] = useState(false);
  const board = boards.filter(
    (singleBoard) => singleBoard.id.toString() === id
  )[0];
  const kudoArray = kudos[id];

  return (
    <main className={`Kudoboard-${board.theme}`}>
      <div className={`Kudoboard-header Kudoboard-header-${board.theme}`}>
        <h1>{board.title}</h1>
        <Button onClick={() => setShowKudoModal(true)}>+ Add to board</Button>
      </div>
      <Container>
        <CardColumns>
          {kudoArray.map((kudo) => {
            return <KudoCard key={kudo.id} kudo={kudo} board={board} />;
          })}
        </CardColumns>
      </Container>
      {showKudoModal && (
        <KudoModal
          board={board}
          showKudoModal={showKudoModal}
          setShowKudoModal={setShowKudoModal}
        />
      )}
    </main>
  );
};

export default Kudoboard;
