import { AnyAction } from "@reduxjs/toolkit";
import { AvailableOptionName } from "@utils/types";
import {
  GO_TO_FIRST_STEP,
  GO_TO_NEXT_STEP,
  GO_TO_PREVIOUS_STEP,
  SELECT_OPTION,
} from "./constants";

export type RootState = {
  activeStep: number;
  selectedOptionName: AvailableOptionName | null;
};

const initialState: RootState = {
  activeStep: 0,
  selectedOptionName: null,
};

export default (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SELECT_OPTION:
      return {
        ...initialState,
        activeStep: 1,
        selectedOptionName: payload,
      };
    case GO_TO_PREVIOUS_STEP:
      return state.activeStep === 1
        ? initialState
        : {
            ...state,
            activeStep: state.activeStep - 1,
            selectedOptionName: state.selectedOptionName,
          };
    case GO_TO_NEXT_STEP:
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case GO_TO_FIRST_STEP:
      return initialState;
    default:
      return state;
  }
};
