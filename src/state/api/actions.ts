import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";
import { AllData } from "@utils/types";

const baseURL = "http://localhost:8080";
const dataUrl = `${baseURL}/data`;

export const getDataRequest = createAsyncThunk("GET_REQUEST", async () => {
  const { data } = await api.get<AllData>({ url: dataUrl });
  return data;
});
