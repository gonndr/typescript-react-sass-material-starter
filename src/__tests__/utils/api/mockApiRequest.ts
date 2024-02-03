import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { OK_STATUS } from "../constants";

const mockedAxios = new MockAdapter(axios);

const mockAxiosRequest = <T>({
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

export const mockApiRequest = mockAxiosRequest;
