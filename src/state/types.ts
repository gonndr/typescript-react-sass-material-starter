import { AllData, OptionData, PostBody } from "@utils/types";
import {
  GET_REQUEST_FAIL,
  GET_REQUEST_PENDING,
  GET_REQUEST,
  GET_SUCCESS,
  SELECT_OPTION,
  POST_REQUEST,
  POST_SUCCESS,
  FIRE_NOTIFICATION,
} from "./constants";
import { AlertColor } from "@mui/material";

export type NotificationBody = {
  type?: AlertColor;
  message: string;
};
export type GetRequestPayload = {
  url: string;
};
export type PostRequestPayload = {
  url: string;
  data: PostBody;
};

export type SelectOption = (payload: string) => {
  type: typeof SELECT_OPTION;
  payload: string;
};
export type FireNotification = (payload: NotificationBody) => {
  type: typeof FIRE_NOTIFICATION;
  payload: NotificationBody;
};
export type GetRequestPending = () => {
  type: typeof GET_REQUEST_PENDING;
  payload: null;
};
export type GetRequestFail = () => {
  type: typeof GET_REQUEST_FAIL;
  payload: null;
};
export type GetRequest = () => {
  type: typeof GET_REQUEST;
  payload: GetRequestPayload;
};
export type GetSuccess = (payload: AllData) => {
  type: typeof GET_SUCCESS;
  payload: AllData;
};
export type PostRequest = (payload: PostBody) => {
  type: typeof POST_REQUEST;
  payload: PostRequestPayload;
};
export type PostSuccess = () => {
  type: typeof POST_SUCCESS;
  payload: null;
};
