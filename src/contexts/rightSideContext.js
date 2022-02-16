import { createContext, useState } from "react";

export const RightSideContext = createContext();

function RightSideProvider({ children }) {
  const [rightSide, setRightSide] = useState("");

  return (
    <RightSideContext.Provider value={{ rightSide, setRightSide }}>
      {children}
    </RightSideContext.Provider>
  );
}

export default RightSideProvider;
