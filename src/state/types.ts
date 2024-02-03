import { AllData, OptionData, PostBody } from "@utils/types";
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
