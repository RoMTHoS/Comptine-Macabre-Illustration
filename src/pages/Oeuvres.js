import React, { useContext, useRef, useState } from "react";
import ImagesGallery from "../components/ImagesGallery";
import { LeftSideContext } from "../contexts/leftSideContext";
import { RightSideContext } from "../contexts/rightSideContext";
import HorizontalScroll from "react-scroll-horizontal";
import { useGesture } from "react-use-gesture";

const Oeuvres = () => {
  const { setRightSide } = useContext(RightSideContext);
  const { setLeftSide } = useContext(LeftSideContext);

  setRightSide("Contact");
  setLeftSide("Accueil");

  return (
    <main className="oeuvres">
      <HorizontalScroll className="scroll-horizontal">
        <ImagesGallery />
      </HorizontalScroll>
    </main>
  );
};

export default Oeuvres;
