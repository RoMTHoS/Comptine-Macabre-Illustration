import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftSide from "./components/LeftSide";
import NotFound from "./components/NotFound";
import RightSide from "./components/RightSide";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Oeuvres from "./pages/Oeuvres";

const Router = () => {
  return (
    <BrowserRouter>
      <LeftSide />
      <RightSide />
      <Routes>
        <Route path="/" to element={<Accueil />} />
        <Route path="contact" to element={<Contact />} />
        <Route path="oeuvres" to element={<Oeuvres />} />
        <Route path="*" to element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
