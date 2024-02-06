import React from "react";
import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from "../../router";
import { mockApiRequest } from "./api/mockApiRequest";
import {
  mockGetData,
  MockGetDataConfig,
} from "./api/interceptions/mockGetData";

jest.mock("axios");

export const defaultLoadPage = ({
  apiGetDataConfig = {},
}: {
  apiGetDataConfig?: MockGetDataConfig;
} = {}) => {
  const interceptions = [mockGetData(apiGetDataConfig)];
  const { getMockedApiCalls } = mockApiRequest({ interceptions });
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });
  render(<RouterProvider router={router} />);
  return { getMockedApiCalls };
};
