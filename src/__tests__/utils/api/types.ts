import { AxiosPromise, AxiosRequestConfig } from "axios";

export type GetResponse = (request: AxiosRequestConfig) => AxiosPromise;

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export type InterceptionData = {
  method: HttpMethod;
  url: string;
  getResponse: GetResponse;
};

export type MockedCallData = Partial<AxiosRequestConfig>;

export type GetMockedCalls = () => MockedCallData[];

export type MockApiRequest = (params: {
  interceptions: InterceptionData[];
}) => { getMockedApiCalls: GetMockedCalls };

export type AxiosStatic = (config: AxiosRequestConfig) => AxiosPromise;
