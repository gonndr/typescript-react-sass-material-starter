import {
  SELECT_OPTION,
  GO_TO_PREVIOUS_STEP,
  GO_TO_NEXT_STEP,
  GO_TO_FIRST_STEP,
} from "./constants";

export type SelectOption = (payload: string) => {
  type: typeof SELECT_OPTION;
  payload: string;
};
export type GoToPreviousStep = () => {
  type: typeof GO_TO_PREVIOUS_STEP;
  payload: null;
};
export type GoToNextStep = () => {
  type: typeof GO_TO_NEXT_STEP;
  payload: null;
};
export type GoToFirstStep = () => {
  type: typeof GO_TO_FIRST_STEP;
  payload: null;
};
