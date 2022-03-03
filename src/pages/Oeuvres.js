import React, { useContext, useRef, useState } from "react";
import ImagesGallery from "../components/ImagesGallery";
import { LeftSideContext } from "../contexts/leftSideContext";
import { RightSideContext } from "../contexts/rightSideContext";
import HorizontalScroll from "react-scroll-horizontal";
import { useGesture } from "react-use-gesture";

const Oeuvres = () => {
  const { setRightSide } = useContext(RightSideContext);
  const { setLeftSide } = useContext(LeftSideContext);
  let oeuvre = useRef();
  let [moove, setMoove] = useState({ x: 0 });

  setRightSide("Contact");
  setLeftSide("Accueil");

  useGesture(
    {
      onDrag: ({ offset: [dx] }) => {
        setMoove((moove) => ({ ...moove, x: dx }));
        console.log(dx);
      },
    },
    {
      domTarget: oeuvre,
      eventOptions: { passive: false },
    }
  );

  return (
    <main
      className="oeuvres"
      ref={oeuvre}
      style={{
        left: moove.x,
      }}
    >
      <HorizontalScroll>
        <ImagesGallery />
      </HorizontalScroll>
    </main>
  );
};

export default Oeuvres;
