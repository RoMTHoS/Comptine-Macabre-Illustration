import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import IllustrationStoryProvider from "./contexts/illustrationStoryContext";

ReactDOM.render(
  <React.StrictMode>
    <IllustrationStoryProvider>
      <App />
    </IllustrationStoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
