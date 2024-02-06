import { AllData } from "@utils/types";
import { devApiBaseUrl } from "../../constants";
import { InterceptionData } from "../types";
import { generateOptions } from "../../helpers";
import { mockResponseSuccess, mockResponseFailure } from "../mockApiResponse";
import chance from "../../chance.test";

export type MockGetDataConfig = {
  apiBaseUrl?: string;
  myData?: AllData;
  isDelayed?: boolean;
  isSuccess?: boolean;
};
export type MockGetData = (config?: MockGetDataConfig) => InterceptionData;

const initialConfig = {
  apiBaseUrl: devApiBaseUrl, // find a way to set this from the render App, pass it as env variables or something
  myData: generateOptions(),
  isDelayed: false,
  isSuccess: true,
};

export const mockGetData: MockGetData = (partialConfig) => {
  const { apiBaseUrl, myData, isDelayed, isSuccess } = {
    ...initialConfig,
    ...partialConfig,
  };
  return {
    method: "GET",
    url: `${apiBaseUrl}/data`,
    getResponse: () => {
      const response = isSuccess
        ? mockResponseSuccess({ data: myData })
        : mockResponseFailure();

      return isDelayed
        ? new Promise((resolve) => setTimeout(() => resolve(response), 1000))
        : response;
    },
  };
};
