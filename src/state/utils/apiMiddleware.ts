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
const dataUrl = `${baseURL}/data`;
const headers = {
  "Content-Type": "application/json",
};

const axiosRequest = <T>({
  method,
  url,
  data,
  headers,
}: AxiosRequestConfig<T>) => axios({ method, url, data, headers });

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
          ? await axiosGetRequest({ url: dataUrl })
          : await axiosPostRequest({ ...payload, url: dataUrl });

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
        const { status, code } = error as AxiosError;
        dispatch(getRequestFail());
        dispatch(
          fireNotification({
            type: "error",
            message: `${status} ${code}: Something went wrong!`,
          })
        );
      }
    }
  };

export default apiMiddleware;
