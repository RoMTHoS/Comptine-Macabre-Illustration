import React, { useContext } from "react";
import Images from "../components/Images";
import { LeftSideContext } from "../contexts/leftSideContext";
import { RightSideContext } from "../contexts/rightSideContext";
import HorizontalScroll from "react-scroll-horizontal";

const Oeuvres = () => {
  const { setRightSide } = useContext(RightSideContext);
  const { setLeftSide } = useContext(LeftSideContext);

  setRightSide("Contact");
  setLeftSide("Accueil");

  return (
    <main className="oeuvres">
      <HorizontalScroll>
        <Images />
      </HorizontalScroll>
    </main>
  );
};

export default Oeuvres;
