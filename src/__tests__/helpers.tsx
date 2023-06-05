import React from "react";
import MockAdapter from "axios-mock-adapter";
import { act, render, screen } from "@testing-library/react";
import axios from "axios";
import Chance from "chance";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from "../router";
import {} from "@utils/helpers";
import userEvent from "@testing-library/user-event";
import { AllData } from "@utils/types";

export const chance = new Chance();
const mockedAxios = new MockAdapter(axios);
const user = userEvent.setup({ pointerEventsCheck: 0 });
export const userClick = async (element: HTMLElement) =>
  await act(async () => await user.click(element));
export const userType = async ({
  element,
  text,
}: {
  element: HTMLElement;
  text: string;
}) => await act(async () => await user.type(element, text));

export const findButtonByName = (name: string) =>
  screen.findByRole("button", { name });
export const getButtonByName = (name: string) =>
  screen.getByRole("button", { name });
export const queryButtonByName = (name: string) =>
  screen.queryByRole("button", { name });

// data generators

export const generateOptionNames = (
  amount = chance.natural({ min: 1, max: 6 })
) => chance.n(chance.word, amount);

export const generateOptions = (
  amount = chance.natural({ min: 1, max: 6 })
): AllData =>
  chance.n(() => ({ name: chance.word(), data: chance.string() }), amount);

// defaultLoadPage

const baseURL = "http://localhost:5000";
const getDataUrl = `${baseURL}/data`;
const OK_STATUS = 200;

export const mockAxiosRequest = <T,>({
  url,
  status = OK_STATUS,
  responseData,
  method = "GET",
}: {
  url: string;
  status?: number;
  responseData?: T;
  method?: "GET" | "POST";
}) =>
  method === "GET"
    ? mockedAxios.onGet(url).reply(status, responseData)
    : mockedAxios.onPost(url).reply(status);

export const defaultLoadPage = ({
  status = OK_STATUS,
  allOptions = generateOptions(),
}: {
  status?: number;
  allOptions?: AllData;
} = {}) => {
  mockAxiosRequest({
    url: getDataUrl,
    status,
    responseData: allOptions,
  });
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });

  render(<RouterProvider router={router} />);
};
