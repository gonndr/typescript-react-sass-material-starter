import { AnyAction } from "@reduxjs/toolkit";
import { AllData, OptionData } from "@utils/types";
import {
  GET_REQUEST_FAIL,
  GET_SUCCESS,
  SELECT_OPTION,
  GET_REQUEST_PENDING,
  POST_SUCCESS,
  FIRE_NOTIFICATION,
} from "./constants";
import { NotificationBody } from "./types";

export type RootState = {
  selectedOption: string;
  allData: AllData;
  isLoading: boolean;
  isError: boolean;
  notification: NotificationBody;
};

const initialNotificationState = { message: "" };

const initialState: RootState = {
  selectedOption: "",
  allData: [],
  isLoading: false,
  isError: false,
  notification: initialNotificationState,
};

export default (
  state = initialState,
  { type, payload }: AnyAction
): RootState => {
  switch (type) {
    case SELECT_OPTION:
      return {
        ...state,
        selectedOption: payload,
      };
    case FIRE_NOTIFICATION:
      return {
        ...state,
        notification: payload,
      };
    case GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        allData: payload,
      };
    case GET_REQUEST_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};
