import React from "react";
import { Button, Container } from "react-bootstrap";
import KudoboardModal from "../components/KudoboardModal";
import { useGlobalContext } from "../context";

const HowItWorks = () => {
  const { newKudoboard } = useGlobalContext();

  return (
    <main>
      <Container>
        <h1>How Our Group Cards Work</h1>
        <p>
          Start a digital group card for a colleague, friend, or family member.
          Share the link with anyone, anywhere so they can post. Deliver when
          you're ready!
        </p>
        <div className="Steps">
          <div className="Step">
            <h2>Create a Kudoboard</h2>
            <p>Choose a recipient to celebrate with the group greeting card.</p>
          </div>
          <div className="Step">
            <h2>Add Your Content</h2>
            <p>
              Get creative. Attach messages, photos, and GIFs to the recipient's
              board.
            </p>
          </div>
          <div className="Step">
            <h2>Enlist Your Group</h2>
            <p>
              Invite others to add their contributions and watch the virtual
              group card grow.
            </p>
          </div>
          <div className="Step">
            <h2>Deliver Appreciation</h2>
            <p>
              Deliver it online, print it out as a poster, or play it as a
              slideshow!
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default HowItWorks;
