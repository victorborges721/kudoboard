import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, CardColumns } from "react-bootstrap";
import KudoCard from "../components/KudoCard";
import KudoModal from "../components/KudoModal";
import ShareKudoboardModal from "../components/ShareKudoboardModal";
import { useGlobalContext } from "../context";
import Error from "./Error";
import "./style.css";

const Kudoboard = () => {
  const { id } = useParams();
  const { boards, kudos } = useGlobalContext();
  const [showKudoModal, setShowKudoModal] = useState(false);
  const [showShareKudoboardModal, setShowShareKudoboardModal] = useState(false);
  const board = boards.filter(
    (singleBoard) => singleBoard.id.toString() === id
  )[0];
  const kudoArray = kudos[id];

  if (!board && !kudoArray) {
    return <Error />;
  }

  return (
    <main className={board ? `Kudoboard Kudoboard-${board.theme}` : ``}>
      <div
        className={
          board ? `Kudoboard-header Kudoboard-header-${board.theme}` : ``
        }
      >
        <h1 className="Kudoboard-header-title">{board ? board.title : ""}</h1>
        <div>
          {kudoArray && kudoArray.length > 0 && (
            <Button
              onClick={() => setShowKudoModal(true)}
              className={board ? `Add-btn btn-${board.theme}` : ``}
            >
              + Add to board
            </Button>
          )}
          <Button onClick={() => setShowShareKudoboardModal(true)}>
            Deliver Kudoboard
          </Button>
        </div>
      </div>
      {kudoArray && kudoArray.length > 0 && (
        <Container>
          <CardColumns>
            {kudoArray.map((kudo) => {
              return <KudoCard key={kudo.id} kudo={kudo} board={board} />;
            })}
          </CardColumns>
        </Container>
      )}
      {kudoArray && kudoArray.length === 0 && (
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
      {showShareKudoboardModal && (
        <ShareKudoboardModal
          board={board}
          showShareKudoboardModal={showShareKudoboardModal}
          setShowShareKudoboardModal={setShowShareKudoboardModal}
        />
      )}
    </main>
  );
};

export default Kudoboard;
