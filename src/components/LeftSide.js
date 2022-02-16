import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LeftSideContext } from "../contexts/leftSideContext";

const LeftSide = () => {
  const { leftSide } = useContext(LeftSideContext);
  const navigate = useNavigate();

  const moove = (rightSide) => {
    switch (rightSide.target.textContent) {
      case "Oeuvres":
        navigate("/oeuvres");
        break;
      case "Contact":
        navigate("/contact");
        break;
      case "Accueil":
        navigate("/");
        break;
      default:
    }
  };

  return (
    <aside className="leftside" onClick={moove}>
      {leftSide}
    </aside>
  );
};

export default LeftSide;
