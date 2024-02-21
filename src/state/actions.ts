import { AllData } from "@utils/types";
import { NotificationBody, GetRequestConfig, PostRequestConfig } from "./types";

import { createActionCreator } from "./utils/createActionCreator";

export const selectOption = createActionCreator<string>("SELECT_OPTION");

export const fireNotification =
  createActionCreator<NotificationBody>("FIRE_NOTIFICATION");

// export const getRequestPending = createActionCreator("GET_REQUEST_PENDING");
// export const getRequestFail = createActionCreator("GET_REQUEST_FAIL");
// export const getRequest = createActionCreator<GetRequestConfig>("GET_REQUEST");
// export const getSuccess = createActionCreator<AllData>("GET_SUCCESS");

// export const postRequest =
//   createActionCreator<PostRequestConfig>("POST_REQUEST");
// export const postSuccess =
//   createActionCreator<PostRequestConfig>("POST_SUCCESS");
