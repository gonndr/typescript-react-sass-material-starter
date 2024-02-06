import { AxiosResponse, AxiosError } from "axios";
import { OK_STATUS } from "../constants";

export const mockResponseSuccess = (response: Partial<AxiosResponse> = {}) =>
  Promise.resolve({
    status: OK_STATUS,
    ...response,
  } as AxiosResponse);
export const mockResponseFailure = (response: Partial<AxiosResponse> = {}) =>
  Promise.reject({
    response: { status: response.status },
  } as AxiosError);
