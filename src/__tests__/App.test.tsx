import { screen, waitFor } from "@testing-library/react";
import { defaultLoadPage } from "./utils/defaultLoadPage";
import { GetMockedCalls, MockedCallData } from "./utils/api/types";
import { devApiBaseUrl } from "./utils/constants";

const emptyDisplayText = "Select an option to view data";
const errorDisplayText = "Something went wrong. Please try again";

const assertMockedCall = ({
  expectedCall,
  mockedApiCalls,
}: {
  expectedCall: MockedCallData;
  mockedApiCalls: MockedCallData[];
}) =>
  expect(mockedApiCalls).toEqual(
    expect.arrayContaining([expect.objectContaining(expectedCall)])
  );

describe("App: default", () => {
  describe.each([
    [
      "success",
      {
        isSuccess: true,
        displayText: emptyDisplayText,
      },
    ],
    [
      "fail",
      {
        isSuccess: false,
        displayText: errorDisplayText,
      },
    ],
  ])("When API request is %s", (_, { isSuccess, displayText }) => {
    let getMockedApiCalls: GetMockedCalls;
    const apiBaseUrl = devApiBaseUrl; // would be good to randomize this
    beforeEach(() => {
      jest.resetAllMocks();
      ({ getMockedApiCalls } = defaultLoadPage({
        apiGetDataConfig: { apiBaseUrl, isSuccess },
      }));
    });
    it("calls api endpoint", async () => {
      const expectedCall = { url: `${apiBaseUrl}/data`, method: "GET" };
      await waitFor(() => {
        const mockedApiCalls = getMockedApiCalls();
        expect(mockedApiCalls.length).toBe(1);
        assertMockedCall({ expectedCall, mockedApiCalls });
      });
    });
    it("displays common elements", () => {
      expect(screen.getByText(displayText));
    });
  });
});
