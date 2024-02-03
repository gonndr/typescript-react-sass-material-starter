import { AnyAction } from "@reduxjs/toolkit";
import { AllData, OptionData } from "@utils/types";

import { NotificationBody } from "./types";
import {
  fireNotification,
  getRequestFail,
  getRequestPending,
  getSuccess,
  postSuccess,
  selectOption,
} from "./actions";

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
    case selectOption.type:
      return {
        ...state,
        selectedOption: payload,
      };
    case fireNotification.type:
      return {
        ...state,
        notification: payload,
      };
    case getSuccess.type:
      return {
        ...state,
        isLoading: false,
        isError: false,
        allData: payload,
      };
    case getRequestPending.type:
      return {
        ...state,
        isLoading: true,
      };
    case getRequestFail.type:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case postSuccess.type:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};
