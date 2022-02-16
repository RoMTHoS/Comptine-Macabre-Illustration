import React, { createContext, useState } from "react";
import { auth } from "../firebase-config";
export const ImagesContext = createContext();

function ImagesProvider({ children }) {
  const [image, setImage] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  return (
    <ImagesContext.Provider value={{ image, setImage }}>
      {children}
    </ImagesContext.Provider>
  );
}

export default ImagesProvider;
