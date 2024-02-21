import { AnyAction } from "@reduxjs/toolkit";
import { AllData } from "@utils/types";

import { NotificationBody } from "./types";
import { fireNotification, selectOption } from "./actions";
import { getDataRequest } from "./api/actions";

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
    case getDataRequest.fulfilled.type:
      return {
        ...state,
        isLoading: false,
        isError: false,
        allData: payload,
      };
    case getDataRequest.pending.type:
      return {
        ...state,
        isLoading: true,
      };
    case getDataRequest.rejected.type:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // case postSuccess.type:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: false,
    //   };
    default:
      return state;
  }
};
