import React, { createContext, useState } from "react";

export const LeftSideContext = createContext();

function LeftSideProvider({ children }) {
  const [leftSide, setLeftSide] = useState("");

  return (
    <LeftSideContext.Provider value={{ leftSide, setLeftSide }}>
      {children}
    </LeftSideContext.Provider>
  );
}

export default LeftSideProvider;
