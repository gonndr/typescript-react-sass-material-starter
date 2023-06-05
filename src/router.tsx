import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppWrapper from "./AppWrapper";
import EmptyDisplay from "@components/routes/EmptyDisplay";
import TextDisplay from "@components/routes/TextDisplay";

export const routesConfig = [
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      {
        path: "/",
        element: <EmptyDisplay />,
      },
      {
        path: "/:optionPath",
        element: <TextDisplay />,
      },
    ],
  },
];

const router = createBrowserRouter(routesConfig);

export default router;
