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
    <main className={`Kudoboard Kudoboard-${board.theme}`}>
      <div className={`Kudoboard-header Kudoboard-header-${board.theme}`}>
        <h1 className="Kudoboard-header-title">{board.title}</h1>
        {kudoArray.length > 0 && (
          <Button
            onClick={() => setShowKudoModal(true)}
            className={`btn-${board.theme}`}
          >
            + Add to board
          </Button>
        )}
      </div>
      {kudoArray.length > 0 ? (
        <Container>
          <CardColumns>
            {kudoArray.map((kudo) => {
              return <KudoCard key={kudo.id} kudo={kudo} board={board} />;
            })}
          </CardColumns>
        </Container>
      ) : (
        <Container className="noKudos">
          <h1>Get this party started by writing the first Kudo!</h1>
          <Button onClick={() => setShowKudoModal(true)}>+ Add to board</Button>
        </Container>
      )}
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
