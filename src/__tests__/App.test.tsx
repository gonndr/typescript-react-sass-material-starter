import { screen } from "@testing-library/react";
import { defaultLoadPage } from "./utils/helpers";
import axios from "axios";

const OK_STATUS = 200;
const ERROR_STATUS = 400;

const emptyDisplayText = "Select an option to view data";
const errorDisplayText = "Something went wrong. Please try again";

const spiedAxios = jest.spyOn(axios, "request");
const getMockedApiCalls = () => spiedAxios.mock.calls.flat();

describe("App: default", () => {
  describe.each([
    [
      "success",
      {
        status: OK_STATUS,
        displayText: emptyDisplayText,
      },
    ],
    [
      "fail",
      {
        status: ERROR_STATUS,
        displayText: errorDisplayText,
      },
    ],
  ])("When API request is %s", (_, { status, displayText }) => {
    beforeEach(async () => {
      jest.resetAllMocks();
      defaultLoadPage({ status });
    });
    it("calls api endpoint", () => {
      const mockedApiCalls = getMockedApiCalls();
      expect(mockedApiCalls.length).toBe(1);
      expect(mockedApiCalls[0]).toEqual(
        expect.objectContaining({ url: "/data", method: "GET" })
      );
    });
    it("displays common elements", () => {
      expect(screen.getByText(displayText));
    });
  });
});
