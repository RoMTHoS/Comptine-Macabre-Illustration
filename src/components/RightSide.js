import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RightSideContext } from "../contexts/rightSideContext";

const RightSide = () => {
  const { rightSide } = useContext(RightSideContext);
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
    <>
      <aside className="rightside" onClick={moove}>
        {rightSide}
      </aside>
    </>
  );
};

export default RightSide;
