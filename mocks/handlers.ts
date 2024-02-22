import { http, HttpResponse } from "msw";
import { generateOptions } from "@tests/utils/helpers";

const mockData = generateOptions();

export const handlers = [http.get("/data", () => HttpResponse.json(mockData))];
