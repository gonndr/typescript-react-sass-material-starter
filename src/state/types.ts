import { AllData, OptionData, PostBody } from "@utils/types";
import { AlertColor } from "@mui/material";

export type NotificationBody = {
  type?: AlertColor;
  message: string;
};
export type GetRequestConfig = {
  url: string;
};
export type PostRequestConfig = {
  url: string;
  data: PostBody;
};
