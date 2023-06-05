import {
  GET_REQUEST_FAIL,
  GET_REQUEST_PENDING,
  GET_REQUEST,
  GET_SUCCESS,
  SELECT_OPTION,
  POST_REQUEST,
  POST_SUCCESS,
  FIRE_NOTIFICATION as FIRE_NOTIFICATION,
} from "./constants";
import {
  GetRequestFail,
  GetRequestPending,
  GetRequest,
  GetSuccess,
  SelectOption,
  PostRequest,
  PostSuccess,
  FireNotification,
} from "./types";

export const selectOption: SelectOption = (payload: string) => ({
  type: SELECT_OPTION,
  payload,
});
export const fireNotification: FireNotification = (payload) => ({
  type: FIRE_NOTIFICATION,
  payload,
});
export const getRequestPending: GetRequestPending = () => ({
  type: GET_REQUEST_PENDING,
  payload: null,
});
export const getRequestFail: GetRequestFail = () => ({
  type: GET_REQUEST_FAIL,
  payload: null,
});
export const getRequest: GetRequest = () => ({
  type: GET_REQUEST,
  payload: { url: "/data" },
});
export const getSuccess: GetSuccess = (payload) => ({
  type: GET_SUCCESS,
  payload,
});
export const postRequest: PostRequest = (data) => ({
  type: POST_REQUEST,
  payload: { url: "/data", data },
});
export const postSuccess: PostSuccess = () => ({
  type: POST_SUCCESS,
  payload: null,
});
