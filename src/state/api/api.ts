import { GetRequestConfig, PostRequestConfig } from "@state/types";
import axios, { AxiosRequestConfig } from "axios";

const headers = {
  "Content-Type": "application/json",
};

const callApi = <T>({ method, url, data, headers }: AxiosRequestConfig) =>
  axios<T>({ method, url, data, headers });

const get = <T>({ url }: GetRequestConfig) =>
  callApi<T>({ method: "GET", url });
const post = ({ url, data }: PostRequestConfig) =>
  callApi({ method: "POST", url, data, headers });

const api = { get, post };
export default api;
