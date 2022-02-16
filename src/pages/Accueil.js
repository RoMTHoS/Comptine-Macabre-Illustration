import React, { useContext } from "react";
import { LeftSideContext } from "../contexts/leftSideContext";
import { RightSideContext } from "../contexts/rightSideContext";

const Accueil = () => {
  const { setRightSide } = useContext(RightSideContext);
  const { setLeftSide } = useContext(LeftSideContext);

  setRightSide("Oeuvres");
  setLeftSide("Contact");
  return (
    <>
      <main className="accueil"></main>
    </>
  );
};

export default Accueil;
