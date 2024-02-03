import React from "react";
import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from "../../router";
import { AllData } from "@utils/types";
import { mockApiRequest } from "./api/mockApiRequest";
import { OK_STATUS } from "./constants";
import { generateOptions } from "./helpers";

const baseURL = "http://localhost:5000";
const getDataUrl = `${baseURL}/data`;

export const defaultLoadPage = ({
  status = OK_STATUS,
  allOptions = generateOptions(),
}: {
  status?: number;
  allOptions?: AllData;
} = {}) => {
  mockApiRequest({
    url: getDataUrl,
    status,
    responseData: allOptions,
  });
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });

  render(<RouterProvider router={router} />);
};
