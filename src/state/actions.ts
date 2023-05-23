import {
  GO_TO_FIRST_STEP,
  GO_TO_NEXT_STEP,
  GO_TO_PREVIOUS_STEP,
  SELECT_OPTION,
} from "./constants";
import {
  GoToFirstStep,
  GoToNextStep,
  GoToPreviousStep,
  SelectOption,
} from "./types";

export const selectOption: SelectOption = (payload: string) => ({
  type: SELECT_OPTION,
  payload,
});
export const goToPreviousStep: GoToPreviousStep = () => ({
  type: GO_TO_PREVIOUS_STEP,
  payload: null,
});
export const goToNextStep: GoToNextStep = () => ({
  type: GO_TO_NEXT_STEP,
  payload: null,
});
export const goFirstStep: GoToFirstStep = () => ({
  type: GO_TO_FIRST_STEP,
  payload: null,
});
