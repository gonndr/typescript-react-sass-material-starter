import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import { mocked } from "jest-mock";
import {
  AxiosStatic,
  InterceptionData,
  MockApiRequest,
  MockedCallData,
} from "./types";

const mockedAxios = mocked<AxiosStatic>(axios); // or jest.mocked?

const getInterceptedResponse = ({
  request,
  interceptions,
}: {
  request: AxiosRequestConfig;
  interceptions: InterceptionData[];
}) =>
  interceptions
    .find(({ method, url }) => method === request.method && url === request.url)
    ?.getResponse(request) as AxiosPromise;

const mockAxiosRequest: MockApiRequest = ({ interceptions }) => {
  mockedAxios.mockImplementation((request) =>
    getInterceptedResponse({
      interceptions,
      request,
    })
  );
  return {
    getMockedApiCalls: (): MockedCallData[] => mockedAxios.mock.calls.flat(),
  };
};

export const mockApiRequest = mockAxiosRequest;
