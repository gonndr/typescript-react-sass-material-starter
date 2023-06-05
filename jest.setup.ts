import "@testing-library/jest-dom";
import { enableFetchMocks } from "jest-fetch-mock";

global.beforeEach(() => {
  sessionStorage.clear();
  enableFetchMocks();
});
