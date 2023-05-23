import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import AppWrapper from "./AppWrapper";

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
