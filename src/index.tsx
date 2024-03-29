import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { RouterProvider } from "react-router-dom";
import router from "./router";

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement!);

const enableMocks = async () => {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { serviceWorker } = await import("../mocks/browser");
  return serviceWorker.start();
};

enableMocks().then(() =>
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
);
