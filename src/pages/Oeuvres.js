import React, { useContext, useRef } from "react";
import ImagesGallery from "../components/ImagesGallery";
import { LeftSideContext } from "../contexts/leftSideContext";
import { RightSideContext } from "../contexts/rightSideContext";

const Oeuvres = () => {
  const { setRightSide } = useContext(RightSideContext);
  const { setLeftSide } = useContext(LeftSideContext);

  setRightSide("Contact");
  setLeftSide("Accueil");

  let oeuvre = useRef();
  let mooveX = 0;

  const ScrollHorizontal = (e) => {
    if (mooveX < 0) {
      mooveX = 0;
    } else if (mooveX > oeuvre.current.scrollLeftMax) {
      mooveX = oeuvre.current.scrollLeftMax;
    } else {
      mooveX += e.nativeEvent.wheelDelta * -1;
    }
    oeuvre.current.scrollTo(mooveX, 0);
  };

  return (
    <main className="oeuvres" ref={oeuvre} onWheel={ScrollHorizontal}>
      <div>
        <ImagesGallery />
      </div>
    </main>
  );
};

export default Oeuvres;
