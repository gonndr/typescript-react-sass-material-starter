import { Middleware } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import {
  getRequestFail,
  getRequestPending,
  getSuccess,
  postSuccess,
  fireNotification,
  getRequest,
  postRequest,
} from "@state/actions";
import { GetRequestPayload, PostRequestPayload } from "@state/types";

const baseURL = "http://localhost:5000";
const headers = {
  "Content-Type": "application/json",
};
const dataPath = "/data";

const axiosRequest = <T>({
  method,
  url,
  data,
  headers,
}: {
  method: "GET" | "POST";
  url: string;
  data?: T;
  headers?: AxiosRequestConfig["headers"];
}) => axios.request({ baseURL, method, url, data, headers });

const axiosGetRequest = ({ url }: GetRequestPayload) =>
  axiosRequest({ method: "GET", url });

const axiosPostRequest = ({ url, data }: PostRequestPayload) =>
  axiosRequest({ method: "POST", url, data, headers });

const apiMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  async (action: AnyAction) => {
    next(action);
    const { type, payload } = action;
    if (type.endsWith("REQUEST")) {
      try {
        dispatch(getRequestPending());

        const { data } = type.startsWith("GET")
          ? await axiosGetRequest({ url: dataPath })
          : await axiosPostRequest({ ...payload, url: dataPath });

        switch (type) {
          case getRequest.type:
          default:
            dispatch(getSuccess(data));
            break;
          case postRequest.type:
            dispatch(postSuccess());
            dispatch(
              fireNotification({
                type: "success",
                message: `Revision posted successfully!`,
              })
            );
            break;
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          dispatch(getRequestFail());
          dispatch(
            fireNotification({
              type: "error",
              message: `${error.status} ${error.code}: Something went wrong!`,
            })
          );
        } else {
          throw error;
        }
      }
    }
  };

export default apiMiddleware;
