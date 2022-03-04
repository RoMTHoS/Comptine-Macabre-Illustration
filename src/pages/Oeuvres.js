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

  let oeuvre = useRef();
  let [moove, setMoove] = useState({ x: 1 + "px" });

  useGesture(
    {
      onDrag: ({ offset: [dx] }) => {
        if (dx < 0) {
          setMoove((moove) => ({ ...moove, x: dx * 0.25 + "px" }));
          console.log(dx);
        } else if (dx >= 0) {
          setMoove((moove) => ({ ...moove, x: 1 + "px" }));
          dx = 0;
          console.log(dx);
        }
      },
    },
    {
      domTarget: oeuvre,
      eventOptions: { passive: false },
    }
  );

  return (
    <main className="oeuvres" ref={oeuvre}>
      <HorizontalScroll>
        <div
          className="moove"
          style={{
            transform: `translate3d(${moove.x}, 0, 0)`,
          }}
        >
          <ImagesGallery />
        </div>
      </HorizontalScroll>
    </main>
  );
};

export default Oeuvres;
