import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./assets/styles/variables.scss";

import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Не знайдено елемент із id="root"');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
