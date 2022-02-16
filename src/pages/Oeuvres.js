import React, { useContext } from "react";
import Images from "../components/Images";
import { LeftSideContext } from "../contexts/leftSideContext";
import { RightSideContext } from "../contexts/rightSideContext";

const Oeuvres = () => {
  const { setRightSide } = useContext(RightSideContext);
  const { setLeftSide } = useContext(LeftSideContext);

  setRightSide("Contact");
  setLeftSide("Accueil");
  return (
    <main className="oeuvres">
      <Images />
    </main>
  );
};

export default Oeuvres;
